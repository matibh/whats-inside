import { createClient } from "npm:@supabase/supabase-js@2.95.0";
const URL = Deno.env.get("SUPABASE_URL")!;
const SERVICE = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
const admin = createClient(URL, SERVICE, { auth: { persistSession: false, autoRefreshToken: false } });
const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Content-Type": "application/json",
};
function reply(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), { status, headers: cors });
}
function normalize(value: string) {
  return value.toLocaleLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, " ").trim();
}
async function requireUser(req: Request) {
  const token = (req.headers.get("Authorization") || "").replace(/^Bearer\s+/i, "");
  if (!token) return null;
  const { data, error } = await admin.auth.getUser(token);
  return error ? null : data.user;
}
function scoreAnswers(ingredients: any[], answers: unknown[]) {
  const submitted = Array.isArray(answers) ? answers.slice(0, 80).filter((x): x is string => typeof x === "string").map(x => x.slice(0, 100)) : [];
  const found = new Set<number>();
  const accepted = submitted.map(normalize).filter(Boolean);
  for (const answer of accepted) {
    const index = ingredients.findIndex((item: any) => [item.es, item.en, ...(Array.isArray(item.aliases) ? item.aliases : [])]
      .filter((x: unknown): x is string => typeof x === "string").some((alias: string) => normalize(alias) === answer));
    if (index >= 0) found.add(index);
  }
  return { submitted, found: [...found].sort((a,b)=>a-b), correct_count: found.size, total_ingredients: ingredients.length, score: found.size * 100 };
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") return reply({ok:true});
  if (req.method !== "GET") return reply({error:"Method not allowed"},405);
  const url=new URL(req.url);
  const scope=url.searchParams.get("scope")==="today"?"today":"all";
  if(scope==="today"){
    const date=new Intl.DateTimeFormat("en-CA",{timeZone:"America/Argentina/Buenos_Aires",year:"numeric",month:"2-digit",day:"2-digit"}).format(new Date());
    const {data:challenge}=await admin.from("daily_challenges").select("id").eq("challenge_date",date).eq("status","published").maybeSingle();
    if(!challenge)return reply({entries:[],scope});
    const {data:attempts,error}=await admin.from("daily_attempts").select("user_id,score,elapsed_ms,submitted_at").eq("challenge_id",challenge.id).order("score",{ascending:false}).order("elapsed_ms",{ascending:true}).limit(50);
    if(error)return reply({error:"Could not load leaderboard"},500);
    const ids=[...new Set((attempts||[]).map((x:any)=>x.user_id))];
    const {data:profiles}=ids.length?await admin.from("profiles").select("user_id,username,avatar_url").in("user_id",ids):{data:[]};
    const map=new Map((profiles||[]).map((p:any)=>[p.user_id,p]));
    return reply({scope,entries:(attempts||[]).map((a:any,i:number)=>({rank:i+1,username:(map.get(a.user_id) as any)?.username||"Player",avatar_url:(map.get(a.user_id) as any)?.avatar_url,score:a.score,elapsed_ms:a.elapsed_ms,submitted_at:a.submitted_at}))});
  }
  const {data:stats,error}=await admin.from("user_stats").select("user_id,total_daily_points,daily_games_played,daily_games_perfect,current_streak,best_streak").order("total_daily_points",{ascending:false}).order("best_streak",{ascending:false}).limit(50);
  if(error)return reply({error:"Could not load leaderboard"},500);
  const ids=(stats||[]).map((x:any)=>x.user_id);
  const {data:profiles}=ids.length?await admin.from("profiles").select("user_id,username,avatar_url").in("user_id",ids):{data:[]};
  const map=new Map((profiles||[]).map((p:any)=>[p.user_id,p]));
  return reply({scope,entries:(stats||[]).map((s:any,i:number)=>({rank:i+1,username:(map.get(s.user_id) as any)?.username||"Player",avatar_url:(map.get(s.user_id) as any)?.avatar_url,...s}))});
});