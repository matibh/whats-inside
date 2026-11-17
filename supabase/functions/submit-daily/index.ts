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
  if (!user) return reply({error:"Authentication required"},401);
  let body: any;
  try { body = await req.json(); } catch { return reply({error:"Invalid JSON"},400); }
  if (typeof body.session_id !== "string") return reply({error:"Missing session_id"},400);
  const {data:session,error:sessionError} = await admin.from("daily_play_sessions").select("id,challenge_id,started_at,expires_at,consumed_at").eq("id",body.session_id).eq("user_id",user.id).maybeSingle();
  if (sessionError || !session) return reply({error:"Daily session not found"},404);
  if (session.consumed_at) return reply({error:"This Daily attempt has already been submitted"},409);
  const elapsed = Date.now() - new Date(session.started_at).getTime();
  if (elapsed > 30000 || elapsed < 0 || new Date(session.expires_at).getTime() < Date.now())
    return reply({error:"Daily session expired"},410);
  const {data:challenge} = await admin.from("daily_challenges").select("id,challenge_date,product_id,market").eq("id",session.challenge_id).eq("status","published").maybeSingle();
  if (!challenge) return reply({error:"Challenge is closed"},410);
  const {data:ingredients,error:keyError} = await admin.rpc("get_daily_answer_key",{p_challenge_id:challenge.id});
  if (keyError || !Array.isArray(ingredients) || ingredients.length === 0) return reply({error:"Answer key unavailable"},500);
  const result = scoreAnswers(ingredients,body.answers);
  const {data:attempt,error:insertError} = await admin.from("daily_attempts").insert({
    challenge_id:challenge.id,user_id:user.id,elapsed_ms:Math.min(elapsed,15000),
    score:result.score,correct_count:result.correct_count,total_ingredients:result.total_ingredients,
    submitted_answers:result.submitted
  }).select("id,score,correct_count,total_ingredients,elapsed_ms,submitted_at").single();
  if (insertError) return reply({error:insertError.code==="23505"?"Daily attempt already used":"Could not save result"},insertError.code==="23505"?409:500);
  await admin.from("daily_play_sessions").update({consumed_at:new Date().toISOString()}).eq("id",session.id);
  await admin.rpc("record_daily_stats",{p_user_id:user.id,p_challenge_date:challenge.challenge_date,p_score:result.score,p_correct_count:result.correct_count,p_total_ingredients:result.total_ingredients});
  const {data:product} = await admin.from("products").select("category").eq("id",challenge.product_id).maybeSingle();
  if (product?.category) {
    await admin.rpc("record_ingredient_mastery",{p_user_id:user.id,p_category:product.category,p_found:result.correct_count,p_available:result.total_ingredients});
  }
  const {data:stats} = await admin.from("user_stats").select("total_daily_points,daily_games_played,daily_games_perfect,current_streak,best_streak,total_ingredients_found").eq("user_id",user.id).single();
  const unlocked:string[]=[];
  if (stats) {
    if (stats.daily_games_played>=1) unlocked.push("first_daily");
    if (stats.daily_games_perfect>=1) unlocked.push("perfect_daily");
    if (stats.current_streak>=3) unlocked.push("streak_3");
    if (stats.current_streak>=7) unlocked.push("streak_7");
    if (stats.total_daily_points>=1000) unlocked.push("points_1000");
    if (stats.total_daily_points>=5000) unlocked.push("points_5000");
    if (stats.total_ingredients_found>=50) unlocked.push("ingredients_50");
    if (stats.daily_games_played>=10) unlocked.push("daily_10");
    if (unlocked.length) await admin.from("user_achievements").upsert(unlocked.map(achievement_id=>({user_id:user.id,achievement_id})),{onConflict:"user_id,achievement_id",ignoreDuplicates:true});
  }
  const found = result.found.map(i=>({es:ingredients[i].es,en:ingredients[i].en}));
  const missed = ingredients.map((x:any,i:number)=>({x,i})).filter((v:any)=>!result.found.includes(v.i)).map((v:any)=>({es:v.x.es,en:v.x.en}));
  return reply({attempt,found,missed,unlocked});
});