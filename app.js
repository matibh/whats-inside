import { createClient } from "https://esm.sh/@supabase/supabase-js@2.95.0";

const SUPABASE_URL = "https://xblqghhhchffuqkmzgta.supabase.co";
const SUPABASE_KEY = "sb_publishable__TDF6zsAZEvsWgSkAntJgw_qxYYuUop";
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
const $ = (id) => document.getElementById(id);
const API = (name) => SUPABASE_URL + "/functions/v1/" + name;
let session = null, mode = "daily", lang = "en", catalog = [], challenge = null, isDailyTestReplay = false;
let selectedProduct = null, guesses = [], timer = null, remaining = 15, startedAt = 0, gameActive = false, lastResult = null, practiceSession = null;
const text = {
 en:{kicker:"THE 15-SECOND FOOD GAME",headline:"YOU KNOW<br>WHAT'S <em>INSIDE?</em>",subhead:"One real product. Fifteen seconds. How many ingredients can you name?",daily:"DAILY CHALLENGE",practice:"PRACTICE",rankTab:"RANKINGS",marketLabel:"MARKET",allMarkets:"All markets",previewDaily:"NEXT DAILY · PREVIEW",previewOnly:"Private preview of the next Daily. It is not playable yet.",previewButton:"AVAILABLE ON ITS DAY",testReplay:"↻ REPLAY DAILY (TEST)",testHint:"Private test button · does not affect official score or streak.",sign:"SIGN IN",signout:"SIGN OUT",guest:"GUEST",startDaily:"PLAY TODAY'S CHALLENGE ↗",startPractice:"START PRACTICE ↗",loading:"LOADING…",noDaily:"The next Daily challenge starts on",loginDaily:"Sign in to start your one official Daily attempt.",already:"You already played today's challenge.",time:"Time left",comma:"Type an ingredient, then a comma",prompt:"What's inside?",hint:"Separate each ingredient with a comma. English or Spanish both work.",found:"YOUR GUESSES",finish:"FINISH EARLY",skip:"SKIP PRODUCT →",stop:"STOP PRACTICE",share:"SHARE RESULT ↗",back:"BACK",foundTitle:"YOU FOUND",missed:"YOU MISSED",signinTitle:"Welcome back",signinHint:"Sign in to play Daily and save your official score.",create:"Create account",submit:"SIGN IN",username:"USERNAME",email:"EMAIL",password:"PASSWORD",cancel:"CANCEL",rank:"VIEW LEADERBOARD",all:"All markets",arg:"Argentina",world:"World",allCats:"All categories",noProducts:"No products match these filters.",practiceReady:"Ten random products · 15 seconds each.",result:"ROUND COMPLETE",dailyResult:"DAILY RESULT SAVED",score:"POINTS",correct:"correct",missedCount:"missing",authOk:"Check your email to confirm your account.",wrong:"Could not complete the request.",imageMissing:"This product image is unavailable. It won't be included in the game.",rankToday:"Today's Daily",rankAll:"All-time",noRank:"No scores yet."},
 es:{kicker:"EL JUEGO DE COMIDA DE 15 SEGUNDOS",headline:"¿SABÉS QUÉ<br>HAY <em>ADENTRO?</em>",subhead:"Un producto real. Quince segundos. ¿Cuántos ingredientes podés nombrar?",daily:"DESAFÍO DIARIO",practice:"PRÁCTICA",rankTab:"RANKINGS",marketLabel:"MERCADO",allMarkets:"Todos los mercados",previewDaily:"PRÓXIMO DAILY · VISTA PREVIA",previewOnly:"Vista privada del próximo Daily. Todavía no se puede jugar.",previewButton:"DISPONIBLE EN SU FECHA",testReplay:"↻ REPETIR DAILY (PRUEBA)",testHint:"Botón privado de prueba · no afecta puntos ni racha oficiales.",sign:"INGRESAR",signout:"SALIR",guest:"INVITADO",startDaily:"JUGAR EL DESAFÍO DE HOY ↗",startPractice:"EMPEZAR A PRACTICAR ↗",loading:"CARGANDO…",noDaily:"El próximo Daily comienza el",loginDaily:"Ingresá para comenzar tu único intento oficial del Daily.",already:"Ya jugaste el desafío de hoy.",time:"Tiempo restante",comma:"Escribí un ingrediente y después una coma",prompt:"¿Qué hay adentro?",hint:"Separá cada ingrediente con una coma. Podés usar español o inglés.",found:"TUS RESPUESTAS",finish:"TERMINAR",skip:"SALTAR PRODUCTO →",stop:"DETENER PRÁCTICA",share:"COMPARTIR RESULTADO ↗",back:"VOLVER",foundTitle:"ENCONTRASTE",missed:"TE FALTARON",signinTitle:"¡Hola de nuevo!",signinHint:"Ingresá para jugar Daily y guardar tu puntaje oficial.",create:"Crear cuenta",submit:"INGRESAR",username:"USUARIO",email:"EMAIL",password:"CONTRASEÑA",cancel:"CANCELAR",rank:"VER CLASIFICACIÓN",all:"Todos los mercados",arg:"Argentina",world:"Mundo",allCats:"Todas las categorías",noProducts:"No hay productos con esos filtros.",practiceReady:"10 productos al azar · 15 segundos por producto.",result:"PARTIDA TERMINADA",dailyResult:"RESULTADO DAILY GUARDADO",score:"PUNTOS",correct:"correctos",missedCount:"faltantes",authOk:"Revisá tu email para confirmar la cuenta.",wrong:"No se pudo completar la operación.",imageMissing:"La imagen de este producto no está disponible. No se incluirá en la partida.",rankToday:"Daily de hoy",rankAll:"Histórico",noRank:"Todavía no hay puntajes."}
};
const t=(k)=>text[lang][k]||text.en[k]||k;
function setText(id,value){const el=$(id);if(el)el.textContent=value}
function status(id,msg,bad=false){const el=$(id);if(el){el.textContent=msg||"";el.classList.toggle("bad",bad)}}
const THEME_KEY="whatsinside-theme";
function applyTheme(theme){
 const dark=theme==="dark";
 document.documentElement.dataset.theme=dark?"dark":"light";
 const btn=$("themeBtn");
 if(btn){
  const label=dark?(lang==="es"?"Cambiar a modo claro":"Switch to light mode"):(lang==="es"?"Cambiar a modo oscuro":"Switch to dark mode");
  btn.textContent=dark?"☀️":"🌙";
  btn.setAttribute("aria-label",label);
  btn.title=label;
 }
}
function toggleTheme(){
 const next=document.documentElement.dataset.theme==="dark"?"light":"dark";
 applyTheme(next);
 try{localStorage.setItem(THEME_KEY,next)}catch{}
}
try{applyTheme(localStorage.getItem(THEME_KEY)==="dark"?"dark":"light")}catch{applyTheme("light")}

function headers(auth=true){return {apikey:SUPABASE_KEY,"Content-Type":"application/json",...(auth&&session?.access_token?{Authorization:"Bearer "+session.access_token}:{Authorization:"Bearer "+SUPABASE_KEY})}}
async function call(name,{method="GET",body=null,auth=true}={}){const r=await fetch(API(name),{method,headers:headers(auth),...(body?{body:JSON.stringify(body)}:{})});let data={};try{data=await r.json()}catch{}if(!r.ok)throw new Error(data.error||("Request failed ("+r.status+")"));return data}
function show(el,on=true){const node=$(el);node.classList.toggle("hidden",!on);if(el==="game"||el==="result")node.classList.toggle("active",on)}
function setMode(next){if(practiceSession&&next!=="practice")return;mode=next; $("dailyTab").classList.toggle("active",mode==="daily");$("practiceTab").classList.toggle("active",mode==="practice");$("rankingTab").classList.toggle("active",mode==="ranking");show("dailyPanel",mode==="daily");show("practicePanel",mode==="practice");show("rankingPanel",mode==="ranking");show("intro",true);show("game",false);show("result",false)}
function updateAccount(){setText("accountLabel",session?.user?.email||t("guest"));setText("authOpen",session?t("signout"):t("sign"))}
function updateLanguage(){document.documentElement.lang=lang;setText("kicker",t("kicker"));$("headline").innerHTML=t("headline");setText("subhead",t("subhead"));setText("dailyTab",t("daily"));setText("practiceTab",t("practice"));setText("rankingTab",t("rankTab"));setText("dailyReplayTest",t("testReplay"));const replayHint=$("dailyReplayWrap")?.querySelector(".hint");if(replayHint)replayHint.textContent=t("testHint");setText("authOpen",session?t("signout"):t("sign"));setText("timeLabel",t("time"));setText("commaHint",t("comma"));setText("prompt",t("prompt"));setText("inputHint",t("hint"));setText("foundTitle",t("found"));setText("finishBtn",t("finish"));setText("practiceSkip",t("skip"));setText("practiceStop",t("stop"));setText("shareBtn",t("share"));setText("backBtn",t("back"));setText("authTitle",t("signinTitle"));setText("authHint",t("signinHint"));setText("authSubmit",t("submit"));setText("authMode",t("create"));setText("authClose",t("cancel"));setText("usernameLabelText",t("username"));applyTheme(document.documentElement.dataset.theme==="dark"?"dark":"light");if(challenge)renderChallenge()}
async function refreshDaily(){try{const data=await call("daily-challenge");challenge=data.challenge;renderChallenge();}catch(e){challenge=null;setText("dailyTitle",t("daily"));status("dailyStatus",t("noDaily"));$("dailyStart").disabled=true;setText("dailyStart",t("startDaily"))}}
function renderChallenge(){if(!challenge)return;show("dailyProduct",true);show("dailyReplayWrap",!!session?.user?.email&&session.user.email.toLowerCase()==="ingredora@gmail.com");setText("dailyName",challenge.product_name);setText("dailyMarket",challenge.market);setText("dailyDesc",lang==="es"?(challenge.description_es||"Producto misterioso"): (challenge.description_en||"Mystery product"));const img=$("dailyImage");if(challenge.image_url){img.src=challenge.image_url;img.style.display="";$("dailyPlaceholder").style.display="none";img.onerror=()=>{img.style.display="none";$("dailyPlaceholder").style.display=""}}else{img.style.display="none";$("dailyPlaceholder").style.display=""}
 if(challenge.preview){setText("dailyTitle",t("previewDaily"));status("dailyStatus",t("previewOnly"));$("dailyStart").disabled=true;setText("dailyStart",t("previewButton"))}else if(dataPlayed()){setText("dailyTitle",t("already"));status("dailyStatus",t("already"));$("dailyStart").disabled=true;setText("dailyStart",t("already"))}else if(!session){setText("dailyTitle",t("daily"));status("dailyStatus",t("loginDaily"));$("dailyStart").disabled=false;setText("dailyStart",t("sign"))}else{setText("dailyTitle",t("daily"));status("dailyStatus","");$("dailyStart").disabled=false;setText("dailyStart",t("startDaily"))}}
let dailyPlayed=false;function dataPlayed(){return dailyPlayed}
async function checkDaily(){dailyPlayed=false;try{const data=await call("daily-challenge");challenge=data.challenge||null;dailyPlayed=!!data.played;if(challenge){renderChallenge()}else{show("dailyProduct",false);show("dailyReplayWrap",false);setText("dailyTitle",t("daily"));const next=data.next_challenge_date?new Date(data.next_challenge_date+"T12:00:00").toLocaleDateString(lang==="es"?"es-AR":"en-US"):"";status("dailyStatus",next?t("noDaily")+" "+next:t("noDaily")+" soon.");$("dailyStart").disabled=true;setText("dailyStart",t("startDaily"))}}catch(e){challenge=null;show("dailyProduct",false);setText("dailyTitle",t("daily"));status("dailyStatus",t("wrong")+": "+e.message,true);$("dailyStart").disabled=true;setText("dailyStart",t("startDaily"))}}
async function loadCatalog(){try{status("practiceStatus",t("loading"));const data=await call("practice-catalog");catalog=data.products||[];status("practiceStatus",t("practiceReady")+" ("+catalog.length+")");$("practiceStart").disabled=catalog.length<10}catch(e){status("practiceStatus",e.message,true);$("practiceStart").disabled=true}}
function renderProducts(){}
function verifyProductImage(url){return new Promise(resolve=>{if(!url){resolve(false);return}const probe=new Image();let settled=false;const finish=ok=>{if(settled)return;settled=true;clearTimeout(timeout);probe.onload=null;probe.onerror=null;resolve(ok)};const timeout=setTimeout(()=>finish(false),8000);probe.onload=()=>finish(probe.naturalWidth>0&&probe.naturalHeight>0);probe.onerror=()=>finish(false);probe.src=url})}
function setProduct(p){selectedProduct=p;setText("productName",p.name_i18n?.[lang]||p.name);setText("productDesc",p.description_i18n?.[lang]||"");setText("productLabel",p.brand||"MYSTERY PRODUCT");const img=$("productImage");if(p.image_url){img.src=p.image_url;img.style.display="";$("productPlaceholder").style.display="none";img.onerror=()=>{img.style.display="none";$("productPlaceholder").style.display=""}}else{img.style.display="none";$("productPlaceholder").style.display=""}}
function startGame(startAt=Date.now()){show("practiceProgress",!!practiceSession);show("practiceSkip",!!practiceSession);show("practiceStop",!!practiceSession);show("finishBtn",!practiceSession);guesses=[];pendingValidations=[];validatedIngredientIndexes=new Set();startedAt=startAt;remaining=Math.max(0,15-Math.floor((Date.now()-startedAt)/1000));gameActive=true;$("ingredientInput").value="";$("chips").innerHTML="";$("found").innerHTML="";setText("foundCount","0");setText("score",String(practiceSession?.score||0).padStart(3,"0"));setText("feedback","");setText("timer","15");$("timerRing").style.setProperty("--progress","100%");show("intro",false);show("dailyPanel",false);show("practicePanel",false);show("rankingPanel",false);show("result",false);show("game",true);$("ingredientInput").focus();if(timer)clearInterval(timer);timer=setInterval(()=>{remaining=Math.max(0,15-Math.floor((Date.now()-startedAt)/1000));setText("timer",String(remaining));$("timerRing").style.setProperty("--progress",(remaining/15*100)+"%");if(remaining<=0)finishGame()},100)}
let pendingValidations=[];let validatedIngredientIndexes=new Set();let currentAnswerKey=[];
function normalizeGuess(value){return value.toLocaleLowerCase().normalize("NFD").replace(/\p{M}/gu,"").replace(/[^a-z0-9\s-]/g,"").replace(/\s+/g," ").trim()}
function addGuess(raw){
 const value=raw.trim();if(!value||!gameActive)return;
 const norm=normalizeGuess(value);if(!norm||guesses.some(x=>normalizeGuess(x)===norm))return;
 guesses.push(value);
 const chip=document.createElement("span");chip.className="chip";chip.textContent=value;$( "chips" ).append(chip);
 const ingredientIndex=currentAnswerKey.findIndex(item=>
   [item.es,item.en,...(Array.isArray(item.aliases)?item.aliases:[])]
    .filter(alias=>typeof alias==="string")
    .some(alias=>normalizeGuess(alias)===norm)
 );
 if(ingredientIndex>=0){
   if(validatedIngredientIndexes.has(ingredientIndex)){
     chip.classList.add("duplicate");
     setText("feedback",lang==="es"?"Ese ingrediente ya estaba acertado.":"You already found that ingredient.");
   }else{
     validatedIngredientIndexes.add(ingredientIndex);chip.classList.add("good");chip.setAttribute("aria-label",value+" ✓");
     setText("feedback",lang==="es"?"¡Correcto! +100 puntos":"Correct! +100 points");$("feedback").classList.remove("bad");
   }
 }else{
   chip.classList.add("bad");chip.setAttribute("aria-label",value+" ✕");
   setText("feedback",lang==="es"?"Incorrecto. Probá con otro ingrediente.":"Not an ingredient. Try another one.");$("feedback").classList.add("bad");
 }
 const count=validatedIngredientIndexes.size;
 setText("foundCount",String(count));setText("score",String(count*100+(practiceSession?.score||0)).padStart(3,"0"));
}

