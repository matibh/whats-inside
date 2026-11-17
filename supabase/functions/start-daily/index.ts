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
  if (req.method !== "POST") return reply({error:"Method not allowed"},405);
  const user = await requireUser(req);
  if (!user) return reply({error:"Sign in to save an official Daily result"},401);
  const date = new Intl.DateTimeFormat("en-CA",{timeZone:"America/Argentina/Buenos_Aires",year:"numeric",month:"2-digit",day:"2-digit"}).format(new Date());
  const {data:challenge,error} = await admin.from("daily_challenges").select("id,challenge_date,market,product_id,product_name,image_url,description_es,description_en,starts_at,ends_at").eq("challenge_date",date).eq("status","published").maybeSingle();
  if (error || !challenge) return reply({error:"Today's challenge is unavailable"},404);
  const {data:attempt} = await admin.from("daily_attempts").select("id").eq("challenge_id",challenge.id).eq("user_id",user.id).maybeSingle();
  if (attempt) return reply({error:"You already played today's Daily"},409);
  const {data:existing} = await admin.from("daily_play_sessions").select("id,started_at,expires_at,consumed_at").eq("challenge_id",challenge.id).eq("user_id",user.id).maybeSingle();
  if (existing) {
    if (!existing.consumed_at && new Date(existing.expires_at).getTime() > Date.now())
      return reply({challenge,session_id:existing.id,started_at:existing.started_at,expires_at:existing.expires_at,resumed:true});
    return reply({error:"Your Daily attempt has already started or expired. Only one official attempt is allowed."},409);
  }
  const {data:session,error:insertError} = await admin.from("daily_play_sessions").insert({challenge_id:challenge.id,user_id:user.id}).select("id,started_at,expires_at").single();
  if (insertError) return reply({error:"Could not start the Daily attempt"},500);
  return reply({challenge,session_id:session.id,started_at:session.started_at,expires_at:session.expires_at});
});