import { createClient } from "https://esm.sh/@supabase/supabase-js@2.95.0";

const SUPABASE_URL = "https://xblqghhhchffuqkmzgta.supabase.co";
const SUPABASE_KEY = "sb_publishable__TDF6zsAZEvsWgSkAntJgw_qxYYuUop";
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
const $ = (id) => document.getElementById(id);
const API = (name) => SUPABASE_URL + "/functions/v1/" + name;
let session = null, mode = "daily", lang = "en", catalog = [], challenge = null, isDailyTestReplay = false;
let selectedProduct = null, guesses = [], timer = null, remaining = 15, startedAt = 0, gameActive = false, lastResult = null, practiceSession = null;
const text = {
 en:{kicker:"THE 15-SECOND FOOD GAME",headline:"INGREDORA",subhead:"One real product. Fifteen seconds. How many ingredients can you name?",daily:"DAILY CHALLENGE",practice:"PRACTICE",rankTab:"RANKINGS",marketLabel:"MARKET",allMarkets:"All markets",previewDaily:"NEXT DAILY · PREVIEW",previewOnly:"Private preview of the next Daily. It is not playable yet.",previewButton:"AVAILABLE ON ITS DAY",testReplay:"↻ REPLAY DAILY (TEST)",testHint:"Private test button · does not affect official score or streak.",sign:"SIGN IN",signout:"SIGN OUT",guest:"GUEST",startDaily:"PLAY TODAY'S CHALLENGE ↗",startPractice:"START PRACTICE ↗",loading:"LOADING…",noDaily:"The next Daily challenge starts on",loginDaily:"Sign in to start your one official Daily attempt.",already:"You already played today's challenge.",time:"Time left",comma:"Type an ingredient, then a comma",prompt:"Name an ingredient",hint:"Separate each ingredient with a comma. English or Spanish both work.",found:"YOUR GUESSES",finish:"FINISH EARLY",skip:"SKIP PRODUCT →",stop:"STOP PRACTICE",share:"SHARE RESULT ↗",back:"BACK",foundTitle:"YOU FOUND",missed:"YOU MISSED",signinTitle:"Welcome back",signinHint:"Sign in to play Daily and save your official score.",create:"Create account",submit:"SIGN IN",username:"USERNAME",email:"EMAIL",password:"PASSWORD",cancel:"CANCEL",rank:"VIEW LEADERBOARD",all:"All markets",arg:"Argentina",world:"World",allCats:"All categories",noProducts:"No products match these filters.",practiceReady:"Ten random products · 15 seconds each.",result:"ROUND COMPLETE",dailyResult:"DAILY RESULT SAVED",score:"POINTS",correct:"correct",missedCount:"missing",authOk:"Check your email to confirm your account.",wrong:"Could not complete the request.",imageMissing:"This product image is unavailable. It won't be included in the game.",rankToday:"Today's Daily",rankAll:"All-time",noRank:"No scores yet.",dailyEyebrow:"TODAY'S CHALLENGE",dailyDescription:"A new shared challenge every day. Your official attempt counts toward the leaderboard and your streak.",ruleTime:"15 SECONDS",rulePoints:"100 POINTS / INGREDIENT",ruleTry:"ONE OFFICIAL TRY",testReset:"↻ RESET DAILY (TEST)",testHint:"Private test controls · remove before public launch.",pointsLabel:"POINTS",noPause:"NO PAUSES. JUST INSTINCT.",practiceEyebrow:"GLOBAL PRACTICE",practiceTitle:"10 products. One practice run.",practiceDescription:"A random mix from the full catalog. 15 seconds per product. Skip any product or stop whenever you want.",practiceLoading:"Loading the catalog…",practicePlaceholder:"sugar, azúcar, milk...",emptyGuesses:"Nothing yet. Go!",practiceProgress:"PRODUCT",rankingTitle:"LEADERBOARD",close:"CLOSE",scope:"SCOPE",rankTodayOption:"Today's Daily",rankAllOption:"All-time",rankingLoading:"Loading…",footerTagline:"MADE FOR THE CURIOUS.",practiceResultKicker:"PRACTICE SESSION",practiceResultTitle:"PRACTICE COMPLETE",scoreByProduct:"SCORE BY PRODUCT",skippedProducts:"SKIPPED PRODUCTS",authEmail:"EMAIL",signupTitle:"Create your account",signupSubmit:"CREATE ACCOUNT",signinSwitch:"I already have an account",signupHint:"Your account saves Daily scores, streaks and achievements.",authEmailPlaceholder:"Email",authPasswordPlaceholder:"Password",signupError:"Username field is unavailable. Please refresh and try again."},
 es:{kicker:"EL JUEGO DE COMIDA DE 15 SEGUNDOS",headline:"INGREDORA",subhead:"Un producto real. Quince segundos. ¿Cuántos ingredientes podés nombrar?",daily:"DESAFÍO DIARIO",practice:"PRÁCTICA",rankTab:"RANKINGS",marketLabel:"MERCADO",allMarkets:"Todos los mercados",previewDaily:"PRÓXIMO DAILY · VISTA PREVIA",previewOnly:"Vista privada del próximo Daily. Todavía no se puede jugar.",previewButton:"DISPONIBLE EN SU FECHA",testReplay:"↻ REPETIR DAILY (PRUEBA)",testHint:"Botón privado de prueba · no afecta puntos ni racha oficiales.",sign:"INGRESAR",signout:"SALIR",guest:"INVITADO",startDaily:"JUGAR EL DESAFÍO DE HOY ↗",startPractice:"EMPEZAR A PRACTICAR ↗",loading:"CARGANDO…",noDaily:"El próximo Daily comienza el",loginDaily:"Ingresá para comenzar tu único intento oficial del Daily.",already:"Ya jugaste el desafío de hoy.",time:"Tiempo restante",comma:"Escribí un ingrediente y después una coma",prompt:"Nombrá un ingrediente",hint:"Separá cada ingrediente con una coma. Podés usar español o inglés.",found:"TUS RESPUESTAS",finish:"TERMINAR",skip:"SALTAR PRODUCTO →",stop:"DETENER PRÁCTICA",share:"COMPARTIR RESULTADO ↗",back:"VOLVER",foundTitle:"ENCONTRASTE",missed:"TE FALTARON",signinTitle:"¡Hola de nuevo!",signinHint:"Ingresá para jugar Daily y guardar tu puntaje oficial.",create:"Crear cuenta",submit:"INGRESAR",username:"USUARIO",email:"EMAIL",password:"CONTRASEÑA",cancel:"CANCELAR",rank:"VER CLASIFICACIÓN",all:"Todos los mercados",arg:"Argentina",world:"Mundo",allCats:"Todas las categorías",noProducts:"No hay productos con esos filtros.",practiceReady:"10 productos al azar · 15 segundos por producto.",result:"PARTIDA TERMINADA",dailyResult:"RESULTADO DAILY GUARDADO",score:"PUNTOS",correct:"correctos",missedCount:"faltantes",authOk:"Revisá tu email para confirmar la cuenta.",wrong:"No se pudo completar la operación.",imageMissing:"La imagen de este producto no está disponible. No se incluirá en la partida.",rankToday:"Daily de hoy",rankAll:"Histórico",noRank:"Todavía no hay puntajes.",dailyEyebrow:"DESAFÍO DE HOY",dailyDescription:"Un desafío compartido nuevo cada día. Tu intento oficial cuenta para la clasificación y tu racha.",ruleTime:"15 SEGUNDOS",rulePoints:"100 PUNTOS / INGREDIENTE",ruleTry:"UN ÚNICO INTENTO OFICIAL",testReset:"↻ REINICIAR DAILY (PRUEBA)",testHint:"Controles privados de prueba · se eliminarán antes del lanzamiento.",pointsLabel:"PUNTOS",noPause:"SIN PAUSAS. SOLO INSTINTO.",practiceEyebrow:"PRÁCTICA GLOBAL",practiceTitle:"10 productos. Una sesión de práctica.",practiceDescription:"Una selección aleatoria de todo el catálogo. 15 segundos por producto. Podés saltar productos o detenerte cuando quieras.",practiceLoading:"Cargando el catálogo…",practicePlaceholder:"azúcar, leche, aceite...",emptyGuesses:"Todavía nada. ¡Vamos!",practiceProgress:"PRODUCTO",rankingTitle:"CLASIFICACIÓN",close:"CERRAR",scope:"PERÍODO",rankTodayOption:"Daily de hoy",rankAllOption:"Histórico",rankingLoading:"Cargando…",footerTagline:"HECHO PARA LOS CURIOSOS.",practiceResultKicker:"SESIÓN DE PRÁCTICA",practiceResultTitle:"PRÁCTICA TERMINADA",scoreByProduct:"PUNTAJE POR PRODUCTO",skippedProducts:"PRODUCTOS OMITIDOS",authEmail:"EMAIL",signupTitle:"Crear tu cuenta",signupSubmit:"CREAR CUENTA",signinSwitch:"Ya tengo una cuenta",signupHint:"Tu cuenta guarda tus puntajes del Daily, rachas y logros.",authEmailPlaceholder:"Email",authPasswordPlaceholder:"Contraseña",signupError:"No se encontró el campo de usuario. Actualizá la página e intentá de nuevo."}
};
const t=(k)=>text[lang][k]||text.en[k]||k;
Object.assign(text.en, {mysteryProduct:"MYSTERY PRODUCT", resultKicker:"TIME'S UP", resultTitle:"NICE TRY.", usernameRule:"Username must be 3–20 letters, numbers or underscores.", answersUnavailable:"Could not prepare all product answers", dailyKeyUnavailable:"Daily answer key unavailable", answerKeyUnavailable:"Answer key unavailable", practicePreparing:"Practice is still preparing.", ingredientDuplicate:"You already found that ingredient.", correctFeedback:"Correct! +100 points", incorrectFeedback:"Not an ingredient. Try another one.", productSkipped:"Product skipped", productsWord:"products", soon:"soon."});
Object.assign(text.es, {mysteryProduct:"PRODUCTO MISTERIOSO", resultKicker:"¡TIEMPO!", resultTitle:"¡BUEN INTENTO!", usernameRule:"El usuario debe tener entre 3 y 20 caracteres: letras, números o guion bajo.", answersUnavailable:"No se pudieron preparar las respuestas de todos los productos", dailyKeyUnavailable:"No se pudo cargar la respuesta del Daily", answerKeyUnavailable:"No se pudo cargar la respuesta", practicePreparing:"La práctica todavía se está preparando.", ingredientDuplicate:"Ese ingrediente ya estaba acertado.", correctFeedback:"¡Correcto! +100 puntos", incorrectFeedback:"No es un ingrediente. Probá con otro.", productSkipped:"Producto omitido", productsWord:"productos", soon:"próximamente."});

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
function updateLanguage(){
 document.documentElement.lang=lang;
 const map={productPlaceholder:"mysteryProduct",youFound:"foundTitle",youMissed:"missed",resultKicker:"resultKicker",resultTitle:"resultTitle",kicker:"kicker",subhead:"subhead",dailyTab:"daily",practiceTab:"practice",rankingTab:"rankTab",dailyEyebrow:"dailyEyebrow",dailyDescription:"dailyDescription",dailyReplayTest:"testReplay",dailyResetTest:"testReset",timeLabel:"time",commaHint:"comma",prompt:"prompt",inputHint:"hint",foundTitle:"found",finishBtn:"finish",practiceSkip:"skip",practiceStop:"stop",shareBtn:"share",backBtn:"back",authTitle:"signinTitle",authHint:"signinHint",authSubmit:"submit",authMode:"create",authClose:"cancel",usernameLabelText:"username",dailyRuleTime:"ruleTime",dailyRulePoints:"rulePoints",dailyRuleTry:"ruleTry",scoreLabel:"pointsLabel",noPause:"noPause",practiceEyebrow:"practiceEyebrow",practiceTitle:"practiceTitle",practiceDescription:"practiceDescription",practiceStart:"startPractice",practiceProgressLabel:"practiceProgress",rankingTitle:"rankingTitle",closeRanking:"close",rankingScopeLabel:"scope",footerTagline:"footerTagline",authEmailLabelText:"authEmail",authPasswordLabelText:"password"};
 for(const [id,key] of Object.entries(map))setText(id,t(key));
 $("headline").innerHTML=t("headline");
 $("langBtn").textContent=lang==="en"?"ESPAÑOL":"ENGLISH";
 const replayHint=$("dailyReplayWrap")?.querySelector(".hint");if(replayHint)replayHint.textContent=t("testHint");
 $("ingredientInput").placeholder=t("practicePlaceholder");$("ingredientInput").setAttribute("aria-label",t("prompt"));
 $("accountLabel").textContent=session?.user?.email||t("guest");setText("authOpen",session?t("signout"):t("sign"));
 $("authEmail").placeholder=t("authEmailPlaceholder");$("authPassword").placeholder=t("authPasswordPlaceholder");
 $("rankingScope").options[0].textContent=t("rankTodayOption");$("rankingScope").options[1].textContent=t("rankAllOption");
 if(!$("rankingList").children.length)$("rankingList").textContent=t("rankingLoading");
 const empty=$("emptyGuessText");if(empty)empty.textContent=t("emptyGuesses");if($("practiceStatus")&&!practicePreparing)$("practiceStatus").textContent=practicePrepared?t("practiceReady")+" ("+catalog.length+")":t("practiceLoading");
 applyTheme(document.documentElement.dataset.theme==="dark"?"dark":"light");
 if(challenge)renderChallenge();
}
async function refreshDaily(){await checkDaily()}
let dailyImageReady=false,dailyImageObject=null,dailyImageLoading=false;
function renderChallenge(){
 if(!challenge)return;
 show("dailyProduct",false);
 show("dailyReplayWrap",!!session?.user?.email&&["ingredora@gmail.com","matias.bellisario@gmail.com"].includes(session.user.email.toLowerCase()));
 setText("dailyName","");setText("dailyDesc","");setText("dailyMarket","");$("dailyImage").removeAttribute("src");$("dailyImage").style.display="none";$("dailyPlaceholder").style.display="";
 if(challenge.preview){setText("dailyTitle",t("previewDaily"));status("dailyStatus",t("previewOnly"));$("dailyStart").disabled=true;setText("dailyStart",t("previewButton"))}
 else if(dataPlayed()){setText("dailyTitle",t("already"));status("dailyStatus",t("already"));$("dailyStart").disabled=true;setText("dailyStart",t("already"))}
 else if(!session){setText("dailyTitle",t("daily"));status("dailyStatus",t("loginDaily"));$("dailyStart").disabled=false;setText("dailyStart",t("sign"))}
 else if(!dailyImageReady){setText("dailyTitle",t("daily"));status("dailyStatus",t("mysteryPreparing"));$("dailyStart").disabled=true;setText("dailyStart",t("loading"))}
 else{setText("dailyTitle",t("daily"));status("dailyStatus","");$("dailyStart").disabled=false;setText("dailyStart",t("startDaily"))}
}
let dailyPlayed=false;function dataPlayed(){return dailyPlayed}
async function checkDaily(){
 dailyPlayed=false;dailyImageReady=false;dailyImageObject=null;dailyImageLoading=false;
 try{
  const data=await call("daily-challenge");challenge=data.challenge||null;dailyPlayed=!!data.played;
  if(challenge){
   renderChallenge();
   if(challenge.image_url){
    dailyImageLoading=true;
    const image=await preloadPracticeImage(challenge.image_url);
    dailyImageLoading=false;dailyImageObject=image;dailyImageReady=!!image;
    renderChallenge();
   }else{dailyImageLoading=false;dailyImageReady=false;status("dailyStatus",t("imageMissing"),true);$("dailyStart").disabled=true}
  }else{
   show("dailyProduct",false);show("dailyReplayWrap",false);setText("dailyTitle",t("daily"));
   const next=data.next_challenge_date?new Date(data.next_challenge_date+"T12:00:00").toLocaleDateString(lang==="es"?"es-AR":"en-US"):"";
   status("dailyStatus",next?t("noDaily")+" "+next:t("noDaily")+" soon.");$("dailyStart").disabled=true;setText("dailyStart",t("startDaily"))
  }
 }catch(e){challenge=null;show("dailyProduct",false);show("dailyReplayWrap",false);setText("dailyTitle",t("daily"));status("dailyStatus",t("wrong")+": "+e.message,true);$("dailyStart").disabled=true;setText("dailyStart",t("startDaily"))}
}
async function loadCatalog(){
 try{
  status("practiceStatus",lang==="es"?"Preparando la práctica…":"Preparing Practice…");
  $("practiceStart").disabled=true;
  const data=await call("practice-catalog");catalog=data.products||[];
  if(catalog.length<10)throw new Error(lang==="es"?"No hay suficientes productos disponibles.":"Not enough products available.");
  await preparePracticeSession();
 }catch(e){status("practiceStatus",e.message,true);$("practiceStart").disabled=true}
}
function preloadPracticeImage(url,timeoutMs=6500){
 return new Promise(resolve=>{
  if(!url){resolve(null);return}
  const image=new Image();image.decoding="async";let settled=false;
  const finish=ok=>{if(settled)return;settled=true;clearTimeout(timeout);image.onload=null;image.onerror=null;resolve(ok&&image.naturalWidth>0&&image.naturalHeight>0?image:null)};
  const timeout=setTimeout(()=>finish(false),timeoutMs);
  image.onload=()=>finish(true);image.onerror=()=>finish(false);image.src=url;
  if(image.complete)finish(image.naturalWidth>0&&image.naturalHeight>0);
 });
}
async function preparePracticeSession({quiet=false}={}){
 if(practicePreparing||practicePrepared||!catalog.length)return;
 practicePreparing=true;
 if(!quiet){$("practiceStart").disabled=true;status("practiceStatus",lang==="es"?"Preparando la práctica…":"Preparing Practice…")}
 try{
  const pool=catalog.filter(p=>typeof p.image_url==="string"&&p.image_url.trim()&&!/image-not-available|placeholder/i.test(p.image_url));
  for(let i=pool.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[pool[i],pool[j]]=[pool[j],pool[i]]}
  const products=pool.slice(0,10);
  if(products.length<10)throw new Error(lang==="es"?"No hay 10 productos con imagen disponibles.":"Not enough products with images.");
  const images={};
  Promise.all(products.map(p=>preloadPracticeImage(p.image_url,12000))).then(loaded=>{
   loaded.forEach((image,index)=>{if(image)images[products[index].id]=image});
  });
  const keyData=await call("practice-answer-key",{method:"POST",body:{product_ids:products.map(p=>p.id)},auth:false});
  const keys=keyData.answer_keys||{};
  if(products.some(p=>!Array.isArray(keys[p.id])||!keys[p.id].length))throw new Error(t("answersUnavailable"));
  practicePrepared={products,answerKeys:keys,images};
  if(!quiet||(!practiceSession&&!gameActive)){status("practiceStatus",t("practiceReady")+" ("+catalog.length+")");$("practiceStart").disabled=false}
 }catch(e){
  if(!quiet){status("practiceStatus",(lang==="es"?"No se pudo preparar Practice: ":"Could not prepare Practice: ")+e.message,true);$("practiceStart").disabled=true}
 }finally{practicePreparing=false}
}
function renderProducts(){}
function verifyProductImage(url){return new Promise(resolve=>{if(!url){resolve(false);return}const probe=new Image();let settled=false;const finish=ok=>{if(settled)return;settled=true;clearTimeout(timeout);probe.onload=null;probe.onerror=null;resolve(ok)};const timeout=setTimeout(()=>finish(false),8000);probe.onload=()=>finish(probe.naturalWidth>0&&probe.naturalHeight>0);probe.onerror=()=>finish(false);probe.src=url})}
function setProduct(p){selectedProduct=p;setText("productName",p.name_i18n?.[lang]||p.name);setText("productDesc",p.description_i18n?.[lang]||"");setText("productLabel",p.brand||t("mysteryProduct"));const img=$("productImage");if(p.image_url){img.onerror=null;img.src=p.image_url;img.loading="eager";img.decoding="async";img.style.display="";$("productPlaceholder").style.display="none";img.onerror=()=>{img.style.display="none";$("productPlaceholder").style.display=""}}else{img.style.display="none";$("productPlaceholder").style.display=""}}
function startGame(startAt=Date.now()){show("practiceProgress",!!practiceSession);show("practiceSkip",!!practiceSession);show("practiceStop",!!practiceSession);show("finishBtn",!practiceSession);guesses=[];pendingValidations=[];validatedIngredientIndexes=new Set();startedAt=startAt;remaining=Math.max(0,15-Math.floor((Date.now()-startedAt)/1000));gameActive=true;$("ingredientInput").value="";$("chips").innerHTML="";$("found").innerHTML="";setText("foundCount","0");setText("score",String(practiceSession?.score||0).padStart(3,"0"));setText("feedback","");setText("timer","15");$("timerRing").style.setProperty("--progress","100%");show("intro",false);show("dailyPanel",false);show("practicePanel",false);show("rankingPanel",false);show("result",false);show("game",true);$("ingredientInput").focus();if(timer)clearInterval(timer);timer=setInterval(()=>{remaining=Math.max(0,15-Math.floor((Date.now()-startedAt)/1000));setText("timer",String(remaining));$("timerRing").style.setProperty("--progress",(remaining/15*100)+"%");if(remaining<=0)finishGame()},100)}
let pendingValidations=[];let validatedIngredientIndexes=new Set();let currentAnswerKey=[];let practiceAnswerKeys={};let practicePrepared=null;let practicePreparing=false;let practiceImageCache={};
function normalizeGuess(value){return value.toLocaleLowerCase().normalize("NFD").replace(/\p{M}/gu,"").replace(/[^a-z0-9\s-]/g,"").replace(/\s+/g," ").trim()}
function addGuess(raw){
 const value=raw.trim();if(!value||!gameActive)return;
 const norm=normalizeGuess(value);if(!norm||guesses.some(x=>normalizeGuess(x)===norm))return;
 guesses.push(value);
 const chip=document.createElement("span");chip.className="chip";chip.textContent=value;$("chips").append(chip);
 const ingredientIndex=currentAnswerKey.findIndex(item=>[item.es,item.en,...(Array.isArray(item.aliases)?item.aliases:[])].filter(alias=>typeof alias==="string").some(alias=>normalizeGuess(alias)===norm));
 if(ingredientIndex>=0){
  if(validatedIngredientIndexes.has(ingredientIndex)){chip.classList.add("duplicate");setText("feedback",t("ingredientDuplicate"));}
  else{validatedIngredientIndexes.add(ingredientIndex);chip.classList.add("good");chip.setAttribute("aria-label",value+" ✓");setText("feedback",t("correctFeedback"));$("feedback").classList.remove("bad");}
 }else{chip.classList.add("bad");chip.setAttribute("aria-label",value+" ✕");setText("feedback",t("incorrectFeedback"));$("feedback").classList.add("bad");}
 const count=validatedIngredientIndexes.size;setText("foundCount",String(count));setText("score",String(count*100+(practiceSession?.score||0)).padStart(3,"0"));
}
$("ingredientInput").addEventListener("input",e=>{const parts=e.target.value.split(",");if(parts.length>1){parts.slice(0,-1).forEach(addGuess);e.target.value=parts.at(-1)}});
$("ingredientInput").addEventListener("keydown",e=>{if(e.key==="Enter"){e.preventDefault();addGuess(e.target.value);e.target.value=""}});
async function finishGame(options={}){if(!gameActive)return;addGuess($("ingredientInput").value);$("ingredientInput").value="";gameActive=false;if(timer)clearInterval(timer);if(mode==="practice"&&practiceSession){await completePracticeRound({skipped:!!options.skip,stop:!!options.stop});return}setText("resultKicker",t("resultKicker"));setText("resultTitle",mode==="daily"?t("dailyResult"):t("resultTitle"));status("dailyStatus","");try{let data;if(mode==="daily"){data=await call("submit-daily",{method:"POST",body:{session_id:window.dailySessionId,answers:guesses}})}else{data=await call("submit-practice",{method:"POST",body:{product_id:selectedProduct.id,answers:guesses,elapsed_ms:Math.min(15000,Date.now()-startedAt),test_daily_replay:isDailyTestReplay}})}lastResult=data;const found=data.found||[],missed=data.missed||[];const correctCount=data.correct_count??data.attempt?.correct_count??found.length;const totalCount=data.total_ingredients??data.attempt?.total_ingredients??(found.length+missed.length);const finalPoints=data.score??data.attempt?.score??0;setText("percent",Math.round(correctCount/Math.max(1,totalCount)*100)+"%");setText("resultSub",correctCount+" / "+totalCount+" "+t("correct"));setText("finalScore",String(finalPoints).padStart(3,"0")+" "+t("score"));renderAnswers("correctList",found,false);renderAnswers("missedList",missed,true);setText("youFound",t("foundTitle"));setText("youMissed",t("missed"));}catch(e){setText("resultTitle",t("wrong"));setText("resultSub",e.message);setText("percent","—");setText("finalScore","");$("correctList").innerHTML="";$("missedList").innerHTML=""}show("game",false);show("result",true);if(mode==="daily")await checkDaily()}
function renderAnswers(id,items,missed){const box=$(id);box.innerHTML="";items.forEach(x=>{const s=document.createElement("span");s.className="answer"+(missed?" missed":"");s.textContent=x[lang]||x.es||x.en;box.append(s)});if(!items.length)box.textContent="—"}
async function startDaily(){
 isDailyTestReplay=false;
 if(!session){openAuth();return}
 if(!challenge){await checkDaily();return}
 if(!dailyImageReady){status("dailyStatus",lang==="es"?"El misterio todavía se está preparando.":"The mystery is still preparing.");return}
 try{
  $("dailyStart").disabled=true;setText("dailyStart",t("loading"));
  const data=await call("start-daily",{method:"POST",body:{}});
  window.dailySessionId=data.session_id;currentAnswerKey=data.answer_key||[];
  if(!currentAnswerKey.length)throw new Error(t("dailyKeyUnavailable"));
  challenge=data.challenge||challenge;
  mode="daily";
  setProduct({name:challenge.product_name,name_i18n:{es:challenge.product_name,en:challenge.product_name},description_i18n:{es:challenge.description_es||"",en:challenge.description_en||""},image_url:challenge.image_url,brand:challenge.market});
  startGame(Date.now())
 }catch(e){status("dailyStatus",e.message,true);$("dailyStart").disabled=false}
}
function startPractice(){
 if(!practicePrepared){status("practiceStatus",t("practicePreparing"));$("practiceStart").disabled=true;return}
 isDailyTestReplay=false;
 const prepared=practicePrepared;practicePrepared=null;
 practiceAnswerKeys=prepared.answerKeys;practiceImageCache=prepared.images||{};
 practiceSession={products:prepared.products,index:0,score:0,correct:0,total:0,completed:0,skipped:0,rounds:[]};
 mode="practice";$("practiceStart").disabled=true;
 status("practiceStatus",t("practiceReady"));
 startPracticeRound();
 preparePracticeSession({quiet:true});
}
function startPracticeRound(){
 if(!practiceSession)return;
 selectedProduct=practiceSession.products[practiceSession.index];
 currentAnswerKey=practiceAnswerKeys[selectedProduct.id]||[];
 if(!currentAnswerKey.length){status("practiceStatus",t("answersUnavailable"),true);finishPracticeSession();return;}
 setProduct(selectedProduct);
 setText("practiceProgress",(lang==="es"?"PRODUCTO ":"PRODUCT ")+(practiceSession.index+1)+"/10");
 setText("score",String(practiceSession.score).padStart(3,"0"));
 startGame();
}
async function completePracticeRound({skipped=false,stop=false}={}){const product=selectedProduct,s=practiceSession;if(!s)return;const name=product.name_i18n?.[lang]||product.name;if(skipped){const total=Array.isArray(currentAnswerKey)?currentAnswerKey.length:0;s.total+=total;s.completed++;s.skipped++;s.rounds.push({name,score:0,correct:0,total,skipped:true,error:null});status("feedback",t("productSkipped"));if(stop||s.index>=9){finishPracticeSession();return}s.index++;startPracticeRound();return}let data;try{data=await call("submit-practice",{method:"POST",body:{product_id:product.id,answers:guesses,elapsed_ms:Math.min(15000,Date.now()-startedAt)}})}catch(e){status("feedback",(lang==="es"?"No se pudo validar esta ronda: ":"Could not validate this round: ")+e.message,true);s.rounds.push({name,score:0,correct:0,total:0,skipped:false,error:e.message});finishPracticeSession();return}if(practiceSession!==s)return;const matched=new Set(data.matched_answers||[]),rejected=new Set(data.rejected_answers||[]);[...$("chips").children].forEach((chip,i)=>{const answer=guesses[i];if(matched.has(answer))chip.classList.add("good");else if(rejected.has(answer))chip.classList.add("bad")});status("feedback",data.correct_count+(lang==="es"?" ingredientes correctos de ":" correct ingredients out of ")+data.total_ingredients);s.score+=Number(data.score)||0;s.correct+=Number(data.correct_count)||0;s.total+=Number(data.total_ingredients)||0;s.completed++;s.rounds.push({name,score:Number(data.score)||0,correct:Number(data.correct_count)||0,total:Number(data.total_ingredients)||0,skipped:false,error:null});setText("score",String(s.score).padStart(3,"0"));await new Promise(resolve=>setTimeout(resolve,1100));if(practiceSession!==s)return;if(stop||s.index>=9){finishPracticeSession();return}s.index++;startPracticeRound()}
function finishPracticeSession(){const s=practiceSession;if(!s)return;practiceSession=null;show("practiceProgress",false);show("practiceSkip",false);show("practiceStop",false);show("finishBtn",true);show("game",false);show("intro",true);show("result",true);setText("resultKicker",t("practiceResultKicker"));setText("resultTitle",t("practiceResultTitle"));setText("percent",s.total?Math.round(s.correct/s.total*100)+"%":"—");setText("resultSub",s.correct+" / "+s.total+" "+t("correct")+" · "+s.completed+"/10 "+t("productsWord"));setText("finalScore",String(s.score).padStart(4,"0")+" "+t("score"));setText("youFound",t("scoreByProduct"));setText("youMissed",t("skippedProducts"));renderAnswers("correctList",s.rounds.map(r=>({es:r.name+" · "+r.score+" pts",en:r.name+" · "+r.score+" pts"})),false);renderAnswers("missedList",s.rounds.filter(r=>r.skipped).map(r=>({es:r.name,en:r.name})),true);if(!s.rounds.some(r=>r.skipped))$("missedList").textContent="—";lastResult={score:s.score,correct_count:s.correct,total_ingredients:s.total};if(practicePrepared){$("practiceStart").disabled=false;status("practiceStatus",t("practiceReady")+" ("+catalog.length+")");}}
async function replayDailyForTesting(){if(!session?.user?.email||session.user.email.toLowerCase()!=="ingredora@gmail.com"||!challenge?.product_id)return;practiceSession=null;show("practiceProgress",false);show("practiceSkip",false);show("practiceStop",false);show("finishBtn",true);isDailyTestReplay=true;const p={id:challenge.product_id,name:challenge.product_name,name_i18n:{es:challenge.product_name,en:challenge.product_name},description_i18n:{es:challenge.description_es||"",en:challenge.description_en||""},image_url:challenge.image_url,brand:challenge.market,region:challenge.market};try{const key=await call("practice-answer-key",{method:"POST",body:{product_id:p.id},auth:false});currentAnswerKey=key.answer_key||[];if(!currentAnswerKey.length)throw new Error(t("answerKeyUnavailable"));mode="practice";setProduct(p);startGame()}catch(e){status("dailyStatus",e.message,true)}}
function openAuth(){show("authModal",true);$("authModal").classList.add("open");status("authStatus","")}
function closeAuth(){$("authModal").classList.remove("open");show("authModal",false)}
let authMode="signin";function setAuthMode(next){authMode=next;const signup=next==="signup";setText("authTitle",signup?t("signupTitle"):t("signinTitle"));setText("authSubmit",signup?t("signupSubmit"):t("submit"));setText("authMode",signup?t("signinSwitch"):t("create"));setText("authHint",signup?t("signupHint"):t("signinHint"));show("usernameLabel",signup)}
$("authOpen").onclick=async()=>{if(session){await supabase.auth.signOut();return}setAuthMode("signin");openAuth()};$("authClose").onclick=closeAuth;$("authMode").onclick=()=>setAuthMode(authMode==="signin"?"signup":"signin");
$("authForm").addEventListener("submit",async e=>{e.preventDefault();const email=$("authEmail").value.trim(),password=$("authPassword").value;status("authStatus",t("loading"));try{let result;if(authMode==="signup"){const username=$("authUsername")?.value?.trim();if(!username)throw new Error(t("signupError"));if(!/^[A-Za-z0-9_]{3,20}$/.test(username))throw new Error(t("usernameRule"));result=await supabase.auth.signUp({email,password,options:{data:{username}}});if(result.error)throw result.error;if(!result.data.session){status("authStatus",t("authOk"));return}}else result=await supabase.auth.signInWithPassword({email,password});if(result.error)throw result.error;closeAuth()}catch(err){status("authStatus",err.message||t("wrong"),true)}});
$("dailyTab").onclick=()=>setMode("daily");$("practiceTab").onclick=()=>setMode("practice");$("rankingTab").onclick=()=>loadRanking();$("dailyReplayTest").onclick=replayDailyForTesting;$("dailyResetTest").onclick=async()=>{if(!session?.user?.email||!["ingredora@gmail.com","matias.bellisario@gmail.com"].includes(session.user.email.toLowerCase()))return;if(!confirm(lang==="es"?"¿Resetear tu intento de Daily de hoy y tus estadísticas de prueba?":"Reset your Daily attempt today and test stats?"))return;const btn=$("dailyResetTest");btn.disabled=true;try{await call("reset-daily-test",{method:"POST",body:{}});await checkDaily();status("dailyStatus",lang==="es"?"Daily reiniciado. Ya podés volver a jugar.":"Daily reset. You can play again.");}catch(e){status("dailyStatus",e.message,true)}finally{btn.disabled=false}};$("dailyStart").onclick=startDaily;$("practiceStart").onclick=startPractice;$("finishBtn").onclick=()=>finishGame();$("practiceSkip").onclick=()=>finishGame({skip:true});$("practiceStop").onclick=()=>finishGame({stop:true});
$("backBtn").onclick=()=>{show("result",false);show("intro",true);setMode(mode);if(mode==="daily")checkDaily()};$("shareBtn").onclick=async()=>{const result=lastResult;const score=result?.score??result?.attempt?.score??0;const count=result?.correct_count??result?.attempt?.correct_count??0;const msg=lang==="es"?"INGREDORA\n"+count+" ingredientes · "+score+" puntos\n¿Podés superarme?":"INGREDORA\n"+count+" ingredients · "+score+" points\nCan you beat me?";try{if(navigator.share)await navigator.share({title:"Ingredora",text:msg});else{await navigator.clipboard.writeText(msg);setText("shareBtn",lang==="es"?"¡COPIADO!":"COPIED!")}}catch{}};
// Rankings are opened from the persistent navigation tab.$("closeRanking").onclick=()=>setMode(mode==="ranking"?"daily":mode);$("rankingScope").onchange=loadRanking;
async function loadRanking(){$("dailyTab").classList.remove("active");$("practiceTab").classList.remove("active");$("rankingTab").classList.add("active");show("dailyPanel",false);show("practicePanel",false);show("rankingPanel",true);show("intro",true);status("rankingList",t("loading"));try{const data=await call("leaderboard?scope="+$("rankingScope").value);const list=$("rankingList");list.innerHTML="";if(!data.entries?.length){list.textContent=t("noRank");return}data.entries.forEach(x=>{const row=document.createElement("div");row.className="rank-row";const a=document.createElement("b");a.textContent="#"+x.rank;const b=document.createElement("span");b.textContent=x.username;const c=document.createElement("strong");c.textContent=x.score+" pts";row.append(a,b,c);list.append(row)})}catch(e){status("rankingList",e.message,true)}}
$("themeBtn").onclick=toggleTheme;$("rankingScope").value="today";$("langBtn").onclick=()=>{lang=lang==="en"?"es":"en";setText("langBtn",lang==="en"?"ESPAÑOL":"ENGLISH");updateLanguage()};
supabase.auth.onAuthStateChange((_event,newSession)=>{session=newSession;updateAccount();checkDaily()});
(async()=>{setMode("daily");const {data}=await supabase.auth.getSession();session=data.session;updateAccount();setText("langBtn","ESPAÑOL");updateLanguage();await Promise.all([checkDaily(),loadCatalog()]);})();
