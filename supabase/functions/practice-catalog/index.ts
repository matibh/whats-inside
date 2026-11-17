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
  const {data,error} = await admin.from("products").select("id,name,name_i18n,brand,country,market,region,category,package,image_url,description_i18n").eq("status","ready").order("name");
  if (error) return reply({error:"Could not load practice catalog"},500);
  const date = new Intl.DateTimeFormat("en-CA",{timeZone:"America/Argentina/Buenos_Aires",year:"numeric",month:"2-digit",day:"2-digit"}).format(new Date());
  const {data:future} = await admin.from("daily_challenges").select("product_id").gte("challenge_date",date).in("status",["scheduled","published"]);
  const reserved = new Set((future||[]).map((x:any)=>x.product_id));
  return reply({products:(data||[]).filter((p:any)=>!reserved.has(p.id)),count:(data||[]).filter((p:any)=>!reserved.has(p.id)).length});
});