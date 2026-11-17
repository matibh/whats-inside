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
  let body:any;
  try { body=await req.json(); } catch { return reply({error:"Invalid JSON"},400); }
  if (typeof body.product_id!=="string" || body.product_id.length>120) return reply({error:"Invalid product_id"},400);
  const {data:product} = await admin.from("products").select("id,category,market").eq("id",body.product_id).eq("status","ready").maybeSingle();
  if (!product) return reply({error:"Product not found"},404);
  const date = new Intl.DateTimeFormat("en-CA",{timeZone:"America/Argentina/Buenos_Aires",year:"numeric",month:"2-digit",day:"2-digit"}).format(new Date());
  const {data:reserved} = await admin.from("daily_challenges").select("id").eq("product_id",product.id).gte("challenge_date",date).in("status",["scheduled","published"]).limit(1);
  if (reserved?.length) return reply({error:"This product is reserved for a Daily challenge"},403);
  const {data:ingredients,error} = await admin.rpc("get_product_answer_key",{p_product_id:product.id});
  if (error || !Array.isArray(ingredients)) return reply({error:"Practice answer key unavailable"},500);
  const result=scoreAnswers(ingredients,body.answers);
  const elapsed=Math.max(0,Math.min(15000,Number.isFinite(body.elapsed_ms)?Math.round(body.elapsed_ms):15000));
  const user=await requireUser(req);
  if(user){
    await admin.from("practice_attempts").insert({user_id:user.id,product_id:product.id,market:product.market,score:result.score,correct_count:result.correct_count,total_ingredients:result.total_ingredients,elapsed_ms:elapsed});
    await admin.rpc("record_ingredient_mastery",{p_user_id:user.id,p_category:product.category,p_found:result.correct_count,p_available:result.total_ingredients});
  }
  const found=result.found.map(i=>({es:ingredients[i].es,en:ingredients[i].en}));
  const missed=ingredients.map((x:any,i:number)=>({x,i})).filter((v:any)=>!result.found.includes(v.i)).map((v:any)=>({es:v.x.es,en:v.x.en}));
  return reply({score:result.score,correct_count:result.correct_count,total_ingredients:result.total_ingredients,found,missed,saved:!!user});
});