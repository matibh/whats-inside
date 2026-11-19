import { createClient } from "https://esm.sh/@supabase/supabase-js@2.95.0";

const SUPABASE_URL = "https://xblqghhhchffuqkmzgta.supabase.co";
const SUPABASE_KEY = "sb_publishable__TDF6zsAZEvsWgSkAntJgw_qxYYuUop";
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
const $ = (id) => document.getElementById(id);
const API = (name) => SUPABASE_URL + "/functions/v1/" + name;
let session = null, mode = "daily", lang = "en", catalog = [], challenge = null, playerProgression = null;
let selectedProduct = null, guesses = [], timer = null, remaining = 15, startedAt = 0, gameActive = false, lastResult = null, practiceSession = null;
const text = {
 en:{kicker:"THE 15-SECOND FOOD GAME",headline:"Ingredora",subhead:"One real product. Fifteen seconds. How many ingredients can you name?",daily:"DAILY CHALLENGE",practice:"PRACTICE",rankTab:"RANKINGS",marketLabel:"MARKET",allMarkets:"All markets",previewDaily:"NEXT DAILY · PREVIEW",previewOnly:"Private preview of the next Daily. It is not playable yet.",previewButton:"AVAILABLE ON ITS DAY",testReplay:"↻ REPLAY DAILY (TEST)",testHint:"Private test button · does not affect official score or streak.",sign:"SIGN IN",signout:"SIGN OUT",guest:"GUEST",startDaily:"PLAY TODAY'S CHALLENGE",startPractice:"START PRACTICE",loading:"LOADING…",noDaily:"The next Daily challenge starts on",loginDaily:"Sign in to start your one official Daily attempt.",already:"You already played today's challenge.",time:"Time left",comma:"Type an ingredient, then a comma",prompt:"Name an ingredient",hint:"Separate each ingredient with a comma. English or Spanish both work.",found:"YOUR GUESSES",finish:"FINISH EARLY",skip:"SKIP PRODUCT",stop:"STOP PRACTICE",share:"SHARE RESULT ↗",back:"BACK",foundTitle:"YOU FOUND",missed:"YOU MISSED",signinTitle:"Welcome back",signinHint:"Sign in to play Daily and save your official score.",create:"Create account",submit:"SIGN IN",username:"USERNAME",email:"EMAIL",password:"PASSWORD",cancel:"CANCEL",rank:"VIEW LEADERBOARD",all:"All markets",arg:"Argentina",world:"World",allCats:"All categories",noProducts:"No products match these filters.",result:"ROUND COMPLETE",dailyResult:"DAILY RESULT SAVED",score:"POINTS",correct:"correct",missedCount:"missing",authOk:"Check your email to confirm your account.",wrong:"Could not complete the request.",imageMissing:"This product image is unavailable. It won't be included in the game.",rankToday:"Today's Daily",rankAll:"All-time",noRank:"No scores yet.",dailyDescription:"A new shared challenge every day. Your official attempt counts toward the leaderboard and your streak.",ruleTime:"15 SECONDS",rulePoints:"100 PTS +50 COMBO / INGREDIENT",ruleTry:"ONE OFFICIAL TRY",testReset:"↻ RESET DAILY (TEST)",testHint:"Private test controls · remove before public launch.",pointsLabel:"POINTS",noPause:"NO PAUSES. JUST INSTINCT.",practiceTitle:"10 products. One practice run.",practiceDescription:"A random mix from the full catalog. 15 seconds per product. Skip any product or stop whenever you want.",practiceLoading:"Loading the catalog…",practicePlaceholder:"sugar, azúcar, milk...",emptyGuesses:"Nothing yet. Go!",practiceProgress:"PRODUCT",rankingTitle:"LEADERBOARD",close:"CLOSE",scope:"SCOPE",rankTodayOption:"Today's Daily",rankAllOption:"All-time",rankingLoading:"Loading…",footerTagline:"MADE FOR THE CURIOUS.",practiceResultKicker:"PRACTICE SESSION",practiceResultTitle:"PRACTICE COMPLETE",scoreByProduct:"SCORE BY PRODUCT",skippedProducts:"SKIPPED PRODUCTS",authEmail:"EMAIL",signupTitle:"Create your account",signupSubmit:"CREATE ACCOUNT",signinSwitch:"I already have an account",signupHint:"Your account saves Daily scores and streaks.",authEmailPlaceholder:"Email",authPasswordPlaceholder:"Password",signupError:"Username field is unavailable. Please refresh and try again."},
 es:{kicker:"EL JUEGO DE COMIDA DE 15 SEGUNDOS",headline:"Ingredora",subhead:"Un producto real. Quince segundos. ¿Cuántos ingredientes podés nombrar?",daily:"DESAFÍO DIARIO",practice:"PRÁCTICA",rankTab:"RANKINGS",marketLabel:"MERCADO",allMarkets:"Todos los mercados",previewDaily:"PRÓXIMO DAILY · VISTA PREVIA",previewOnly:"Vista privada del próximo Daily. Todavía no se puede jugar.",previewButton:"DISPONIBLE EN SU FECHA",testReplay:"↻ REPETIR DAILY (PRUEBA)",testHint:"Botón privado de prueba · no afecta puntos ni racha oficiales.",sign:"INGRESAR",signout:"SALIR",guest:"INVITADO",startDaily:"JUGAR EL DESAFÍO DE HOY",startPractice:"EMPEZAR A PRACTICAR",loading:"CARGANDO…",noDaily:"El próximo Daily comienza el",loginDaily:"Ingresá para comenzar tu único intento oficial del Daily.",already:"Ya jugaste el desafío de hoy.",time:"Tiempo restante",comma:"Escribí un ingrediente y después una coma",prompt:"Nombrá un ingrediente",hint:"Separá cada ingrediente con una coma. Podés usar español o inglés.",found:"TUS RESPUESTAS",finish:"TERMINAR",skip:"SALTAR PRODUCTO",stop:"DETENER PRÁCTICA",share:"COMPARTIR RESULTADO ↗",back:"VOLVER",foundTitle:"ENCONTRASTE",missed:"TE FALTARON",signinTitle:"¡Hola de nuevo!",signinHint:"Ingresá para jugar Daily y guardar tu puntaje oficial.",create:"Crear cuenta",submit:"INGRESAR",username:"USUARIO",email:"EMAIL",password:"CONTRASEÑA",cancel:"CANCELAR",rank:"VER CLASIFICACIÓN",all:"Todos los mercados",arg:"Argentina",world:"Mundo",allCats:"Todas las categorías",noProducts:"No hay productos con esos filtros.",result:"PARTIDA TERMINADA",dailyResult:"RESULTADO DAILY GUARDADO",score:"PUNTOS",correct:"correctos",missedCount:"faltantes",authOk:"Revisá tu email para confirmar la cuenta.",wrong:"No se pudo completar la operación.",imageMissing:"La imagen de este producto no está disponible. No se incluirá en la partida.",rankToday:"Daily de hoy",rankAll:"Histórico",noRank:"Todavía no hay puntajes.",dailyDescription:"Un desafío compartido nuevo cada día. Tu intento oficial cuenta para la clasificación y tu racha.",ruleTime:"15 SEGUNDOS",rulePoints:"100 PUNTOS +50 POR COMBO",ruleTry:"UN ÚNICO INTENTO OFICIAL",testReset:"↻ REINICIAR DAILY (PRUEBA)",testHint:"Controles privados de prueba · se eliminarán antes del lanzamiento.",pointsLabel:"PUNTOS",noPause:"SIN PAUSAS. SOLO INSTINTO.",practiceTitle:"10 productos. Una sesión de práctica.",practiceDescription:"Una selección aleatoria de todo el catálogo. 15 segundos por producto. Podés saltar productos o detenerte cuando quieras.",practiceLoading:"Cargando el catálogo…",practicePlaceholder:"azúcar, leche, aceite...",emptyGuesses:"Todavía nada. ¡Vamos!",practiceProgress:"PRODUCTO",rankingTitle:"CLASIFICACIÓN",close:"CERRAR",scope:"PERÍODO",rankTodayOption:"Daily de hoy",rankAllOption:"Histórico",rankingLoading:"Cargando…",footerTagline:"HECHO PARA LOS CURIOSOS.",practiceResultKicker:"SESIÓN DE PRÁCTICA",practiceResultTitle:"PRÁCTICA TERMINADA",scoreByProduct:"PUNTAJE POR PRODUCTO",skippedProducts:"PRODUCTOS OMITIDOS",authEmail:"EMAIL",signupTitle:"Crear tu cuenta",signupSubmit:"CREAR CUENTA",signinSwitch:"Ya tengo una cuenta",signupHint:"Tu cuenta guarda tus puntajes del Daily, rachas y logros.",authEmailPlaceholder:"Email",authPasswordPlaceholder:"Contraseña",signupError:"No se encontró el campo de usuario. Actualizá la página e intentá de nuevo."}
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
function setPracticeNavigationLock(locked){["dailyTab","practiceTab","rankingTab"].forEach(id=>{const button=$(id);button.disabled=locked;button.setAttribute("aria-disabled",String(locked));button.title=locked?(lang==="es"?"Terminá la práctica para acceder":"Finish Practice to access this section"):""})}
function setDailyNavigationLock(locked){["dailyTab","practiceTab","rankingTab"].forEach(id=>{const button=$(id);button.disabled=locked;button.setAttribute("aria-disabled",String(locked));button.title=locked?(lang==="es"?"Terminá el Daily para continuar":"Finish Daily to continue"):""})}
function setMode(next){if(practiceSession)return;mode=next; $("dailyTab").classList.toggle("active",mode==="daily");$("practiceTab").classList.toggle("active",mode==="practice");$("rankingTab").classList.toggle("active",mode==="ranking");show("dailyPanel",mode==="daily");show("practicePanel",mode==="practice");show("rankingPanel",mode==="ranking");show("intro",true);show("game",false);show("result",false)}
function updateAccount(){setText("accountLabel",session?.user?.user_metadata?.username||t("guest"));setText("authOpen",session?t("signout"):t("sign"))}
async function refreshPlayerProgression(){
 const badge=$("levelBadge");if(!badge)return;
 if(!session){playerProgression=null;badge.classList.add("hidden");return}
 try{
  playerProgression=await call("get-player-progression");
  badge.textContent=(lang==="es"?"NIV. ":"LVL ")+playerProgression.level+" · "+playerProgression.xp_total+" XP";
  badge.title=(playerProgression.level_name?.[lang]||"")+" · "+playerProgression.xp_to_next+" "+(lang==="es"?"XP para el siguiente nivel":"XP to next level");
  badge.classList.remove("hidden");
 }catch(e){badge.classList.add("hidden")}
}
function refreshResultLanguage(){
 if(!lastResult||!$("result").classList.contains("active"))return;
 
 const correct=Number(lastResult.correct_count??lastResult.attempt?.correct_count??0),total=Number(lastResult.total_ingredients??lastResult.attempt?.total_ingredients??0);
 setText("accuracyLabel",lang==="es"?"INGREDIENTES ENCONTRADOS":"INGREDIENTS FOUND");
 setText("accuracyCaption",lang==="es"?"del total de ingredientes posibles":"of all possible ingredients");
 setText("finalScoreLabel",lang==="es"?"PUNTAJE FINAL":"FINAL SCORE");
 setText("scoreUnit",lang==="es"?"PUNTOS":"POINTS");
 setText("finalScore",String(Number(lastResult.score??lastResult.attempt?.score??0)));
 setText("percent",Math.round(correct/Math.max(1,total)*100)+"%");
 setText("resultSub",lastResult.practice?(lang==="es"?correct+" de "+total+" ingredientes encontrados · "+Number(lastResult.completed||0)+" de 10 productos jugados":correct+" of "+total+" ingredients found · "+Number(lastResult.completed||0)+" of 10 products played"):(lang==="es"?correct+" de "+total+" ingredientes encontrados":correct+" of "+total+" ingredients found"));
 if(!lastResult.practice&&Array.isArray(lastResult.found)&&Array.isArray(lastResult.missed)){
  renderAnswers("correctList",lastResult.found,false);
  renderAnswers("missedList",lastResult.missed,true);
  setText("youFound",t("foundTitle"));setText("youMissed",t("missed"));
 }
}
function updateLanguage(){
 document.documentElement.lang=lang;
 document.title=lang==="es"?"Ingredora — El juego de ingredientes de 15 segundos":"Ingredora — The 15-second ingredient game";
 const map={productPlaceholder:"mysteryProduct",youFound:"foundTitle",youMissed:"missed",resultKicker:"resultKicker",resultTitle:"resultTitle",kicker:"kicker",subhead:"subhead",dailyTab:"daily",practiceTab:"practice",rankingTab:"rankTab",dailyDescription:"dailyDescription",timeLabel:"time",commaHint:"comma",prompt:"prompt",inputHint:"hint",foundTitle:"found",finishBtn:"finish",practiceSkip:"skip",practiceStop:"stop",shareBtn:"share",backBtn:"back",authTitle:"signinTitle",authHint:"signinHint",authSubmit:"submit",authMode:"create",authClose:"cancel",usernameLabelText:"username",dailyRuleTime:"ruleTime",dailyRulePoints:"rulePoints",dailyRuleTry:"ruleTry",scoreLabel:"pointsLabel",noPause:"noPause",practiceTitle:"practiceTitle",practiceDescription:"practiceDescription",practiceStart:"startPractice",practiceProgressLabel:"practiceProgress",rankingTitle:"rankingTitle",closeRanking:"close",rankingScopeLabel:"scope",footerTagline:"footerTagline",authEmailLabelText:"authEmail",authPasswordLabelText:"password"};
 for(const [id,key] of Object.entries(map))setText(id,t(key));
 const headline=$("headline");if(headline)headline.setAttribute("aria-label",t("headline"));
 $("langBtn").textContent=lang==="en"?"ES":"EN";
 $("ingredientInput").placeholder=t("practicePlaceholder");$("ingredientInput").setAttribute("aria-label",t("prompt"));
 $("accountLabel").textContent=session?.user?.user_metadata?.username||t("guest");setText("authOpen",session?t("signout"):t("sign"));
 $("authEmail").placeholder=t("authEmailPlaceholder");$("authPassword").placeholder=t("authPasswordPlaceholder");
 $("rankingScope").options[0].textContent=t("rankTodayOption");$("rankingScope").options[1].textContent=t("rankAllOption");
 if(!$("rankingList").children.length)$("rankingList").textContent=t("rankingLoading");
 const empty=$("emptyGuessText");if(empty)empty.textContent=t("emptyGuesses");
 applyTheme(document.documentElement.dataset.theme==="dark"?"dark":"light");
 if(challenge)renderChallenge();
 refreshSelectedProductLanguage();
 refreshResultLanguage();
}
async function refreshDaily(){await checkDaily()}
let dailyImageReady=false,dailyImageObject=null,dailyImageLoading=false;
function renderChallenge(){
 if(!challenge)return;
 show("dailyProduct",false);
 
 setText("dailyName","");setText("dailyDesc","");setText("dailyMarket","");$("dailyImage").removeAttribute("src");$("dailyImage").style.display="none";$("dailyPlaceholder").style.display="";
 if(dataPlayed()){setText("dailyTitle",t("already"));status("dailyStatus",t("already"));$("dailyStart").disabled=true;setText("dailyStart",t("already"))}
 else if(!session){setText("dailyTitle",t("daily"));status("dailyStatus",t("loginDaily"));$("dailyStart").disabled=false;setText("dailyStart",t("sign"))}
 else if(!dailyImageReady||!dailyAnswerKey){setText("dailyTitle",t("daily"));status("dailyStatus",t("mysteryPreparing"));$("dailyStart").disabled=true;setText("dailyStart",t("loading"))}
 else{setText("dailyTitle",t("daily"));status("dailyStatus","");$("dailyStart").disabled=false;setText("dailyStart",t("startDaily"))}
}
let dailyPlayed=false;let dailyAnswerKey=null;let dailyStartPromise=null;let dailyLocalStartedAt=0;function dataPlayed(){return dailyPlayed}
async function checkDaily(){
 dailyPlayed=false;dailyAnswerKey=null;dailyImageReady=false;dailyImageObject=null;dailyImageLoading=false;
 try{
  const data=await call("daily-challenge");challenge=data.challenge||null;dailyPlayed=!!data.played;dailyAnswerKey=null;
  if(data.answer_key&&typeof data.answer_key.salt==="string"&&Array.isArray(data.answer_key.hashes)&&data.answer_key.hashes.length&&Number(data.answer_key.total_ingredients)>0){
   const hashToIndex=new Map();data.answer_key.hashes.forEach(x=>{if(!hashToIndex.has(x.hash))hashToIndex.set(x.hash,Number(x.index))});
   dailyAnswerKey={salt:data.answer_key.salt,total_ingredients:Number(data.answer_key.total_ingredients),hashToIndex};
  }
  if(challenge){
   renderChallenge();
   if(challenge.image_url){
    dailyImageLoading=true;
    let image=null;for(const imageUrl of [challenge.image_url,challenge.fallback_image_url].filter((url,index,all)=>typeof url==="string"&&url.trim()&&all.indexOf(url)===index)){image=await preloadPracticeImage(imageUrl);if(image)break}
    dailyImageLoading=false;dailyImageObject=image;dailyImageReady=!!image;
    renderChallenge();
   }else{dailyImageLoading=false;dailyImageReady=false;status("dailyStatus",t("imageMissing"),true);$("dailyStart").disabled=true}
  }else{
   show("dailyProduct",false);setText("dailyTitle",t("daily"));
   const next=data.next_challenge_date?new Date(data.next_challenge_date+"T12:00:00").toLocaleDateString(lang==="es"?"es-AR":"en-US"):"";
   status("dailyStatus",next?t("noDaily")+" "+next:t("noDaily")+" soon.");$("dailyStart").disabled=true;setText("dailyStart",t("startDaily"))
  }
 }catch(e){challenge=null;show("dailyProduct",false);setText("dailyTitle",t("daily"));status("dailyStatus",t("wrong")+": "+e.message,true);$("dailyStart").disabled=true;setText("dailyStart",t("startDaily"))}
}
async function loadCatalog(){
 try{
  $("practiceStart").disabled=false;
  const data=await call("practice-catalog");catalog=data.products||[];
  if(catalog.length<10)throw new Error(lang==="es"?"No hay suficientes productos disponibles.":"Not enough products available.");
  await preparePracticeSession();
 }catch(e){status("practiceStatus",e.message,true);$("practiceStart").disabled=false}
}
function preloadPracticeImage(url,timeoutMs=12000){
 return new Promise(resolve=>{
  if(!url){resolve(null);return}
  const image=new Image();image.decoding="async";let settled=false;
  const finish=ok=>{if(settled)return;settled=true;clearTimeout(timeout);image.onload=null;image.onerror=null;resolve(ok&&image.naturalWidth>0&&image.naturalHeight>0?image:null)};
  const timeout=setTimeout(()=>finish(false),timeoutMs);
  image.onload=()=>finish(true);image.onerror=()=>finish(false);image.src=url;
  if(image.complete)finish(image.naturalWidth>0&&image.naturalHeight>0);
 });
}
async function preloadPracticeProductImage(product,timeoutMs=12000){
  const urls=[product?.image_url,product?.fallback_image_url].filter((url,index,all)=>typeof url==="string"&&url.trim()&&all.indexOf(url)===index);
  for(const url of urls){const image=await preloadPracticeImage(url,timeoutMs);if(image)return image}
  return null;
 }
 async function hashPracticeGuess(value,salt){
 const normalized=normalizeGuess(value);
 const bytes=new TextEncoder().encode(salt+"|"+normalized);
 const digest=await crypto.subtle.digest("SHA-256",bytes);
 return Array.from(new Uint8Array(digest)).map(x=>x.toString(16).padStart(2,"0")).join("");
}
async function preparePracticeSession({quiet=false}={}){
 if(practicePreparing||practicePrepared||!catalog.length)return;
 practicePreparing=true;
 if(!quiet){$("practiceStart").disabled=false;}
 try{
  const pool=catalog.filter(p=>[p.image_url,p.fallback_image_url].some(url=>typeof url==="string"&&url.trim()&&!/image-not-available|placeholder/i.test(url)));
  for(let i=pool.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[pool[i],pool[j]]=[pool[j],pool[i]]}
  const products=pool.slice(0,10);
  if(products.length<10)throw new Error(lang==="es"?"No hay 10 productos disponibles con imagen.":"Not enough products with an image URL.");
  const hashes=await call("practice-answer-hashes",{method:"POST",body:{product_ids:products.map(p=>p.id)}});
  const answerKeys={};
  for(const product of products){
   const bundle=hashes.products?.[product.id];
   if(!bundle||typeof bundle.salt!=="string"||!Array.isArray(bundle.hashes)||!Number.isInteger(bundle.total_ingredients))throw new Error(lang==="es"?"No se pudieron preparar las respuestas de Practice.":"Could not prepare Practice answers.");
   answerKeys[product.id]={salt:bundle.salt,total_ingredients:bundle.total_ingredients,hashToIndex:new Map(bundle.hashes.map(x=>[x.hash,Number(x.index)]))};
  }
  const images={};
  practicePrepared={products,images,answerKeys};
  persistPracticeCache(practicePrepared);
  products.forEach(product=>{preloadPracticeProductImage(product,12000).then(image=>{if(image)images[product.id]=image})});
  if(!quiet||(!practiceSession&&!gameActive)){status("practiceStatus",t("practiceReady"));$("practiceStart").disabled=false}
 }catch(e){
  if(!quiet){status("practiceStatus",(lang==="es"?"No se pudo preparar Practice: ":"Could not prepare Practice: ")+e.message,true)}
  if(practiceStartRequested){practiceStartRequested=false;setText("practiceStart",t("startPractice"))}
  $("practiceStart").disabled=false;
 }finally{practicePreparing=false;if(practiceStartRequested&&practicePrepared)startPractice()}
}
function renderProducts(){}
function verifyProductImage(url){return new Promise(resolve=>{if(!url){resolve(false);return}const probe=new Image();let settled=false;const finish=ok=>{if(settled)return;settled=true;clearTimeout(timeout);probe.onload=null;probe.onerror=null;resolve(ok)};const timeout=setTimeout(()=>finish(false),8000);probe.onload=()=>finish(probe.naturalWidth>0&&probe.naturalHeight>0);probe.onerror=()=>finish(false);probe.src=url})}
function refreshSelectedProductLanguage(){if(!selectedProduct)return;setText("productName",selectedProduct.name_i18n?.[lang]||selectedProduct.name);setText("productDesc",selectedProduct.description_i18n?.[lang]||"");setText("productLabel",selectedProduct.brand||t("mysteryProduct"))}
function setProduct(p,{allowFallback=false}={}){selectedProduct=p;refreshSelectedProductLanguage();const img=$("productImage");img.onerror=null;img.removeAttribute("src");const urls=[p.image_url,...(allowFallback?[p.fallback_image_url]:[])].filter((url,index,all)=>typeof url==="string"&&url.trim()&&all.indexOf(url)===index);const cached=allowFallback?practiceImageCache[p.id]:null;if(cached?.src){urls.unshift(cached.src)}let attempt=0;const showPlaceholder=()=>{img.onerror=null;img.style.display="none";$("productPlaceholder").style.display=""};const tryNext=()=>{if(attempt>=urls.length){showPlaceholder();return}const url=urls[attempt++];img.onerror=()=>{if(img.currentSrc&&img.currentSrc!==url)return;tryNext()};img.loading="eager";img.decoding="async";img.style.display="";$("productPlaceholder").style.display="none";img.src=url};if(urls.length)tryNext();else showPlaceholder()}
function startGame(startAt=Date.now()){show("practiceProgress",!!practiceSession);show("practiceSkip",!!practiceSession);show("practiceStop",!!practiceSession);show("finishBtn",!practiceSession);guesses=[];pendingValidations=[];validatedIngredientIndexes=new Set();comboStreak=0;roundScore=0;roundCorrectCount=0;localValidationQueue=Promise.resolve();$("ingredientInput").disabled=false;$("practiceSkip").disabled=false;validationSequence++;validationQueue=Promise.resolve();startedAt=startAt;remaining=Math.min(15,Math.max(0,15-Math.floor((Date.now()-startedAt)/1000)));gameActive=true;$("ingredientInput").value="";$("chips").innerHTML="";$("found").innerHTML="";setText("foundCount","0");setText("score",String(practiceSession?.score||0).padStart(3,"0"));setText("feedback","");setText("timer","15");$("timerRing").style.setProperty("--progress","100%");show("intro",false);show("dailyPanel",false);show("practicePanel",false);show("rankingPanel",false);show("result",false);show("game",true);$("ingredientInput").focus();if(timer)clearInterval(timer);timer=setInterval(()=>{const elapsed=Date.now()-startedAt;remaining=Math.max(0,15-Math.floor(elapsed/1000));setText("timer",String(remaining));$("timerRing").style.setProperty("--progress",(remaining/15*100)+"%");if(remaining===0)finishGame()},100)}
const PRACTICE_CACHE_KEY="ingredora.practice.prepared.v2";
const PRACTICE_CACHE_TTL=20*60*1000;
function restorePracticeCache(){
 try{
  const cached=JSON.parse(localStorage.getItem(PRACTICE_CACHE_KEY)||"null");
  if(!cached||cached.version!==2||Date.now()-cached.savedAt>PRACTICE_CACHE_TTL||!Array.isArray(cached.products)||cached.products.length!==10||!Array.isArray(cached.answerKeys))return null;
  const ids=cached.products.map(p=>p?.id);
  if(ids.some(id=>!id)||new Set(ids).size!==10)return null;
  const answerKeys={};
  for(const [id,key] of cached.answerKeys){
   if(!ids.includes(id)||typeof key?.salt!=="string"||!Number.isInteger(key.total_ingredients)||!Array.isArray(key.hashes)||!key.hashes.length)return null;
   answerKeys[id]={salt:key.salt,total_ingredients:key.total_ingredients,hashToIndex:new Map(key.hashes)};
  }
  if(ids.some(id=>!answerKeys[id]))return null;
  return {products:cached.products,images:{},answerKeys};
 }catch{return null}
}
function persistPracticeCache(prepared){
 try{
  const answerKeys=Object.entries(prepared.answerKeys).map(([id,key])=>[id,{salt:key.salt,total_ingredients:key.total_ingredients,hashes:[...key.hashToIndex.entries()]}]);
  localStorage.setItem(PRACTICE_CACHE_KEY,JSON.stringify({version:2,savedAt:Date.now(),products:prepared.products,answerKeys}));
 }catch(error){console.warn("Practice cache could not be saved.",error)}
}
let pendingValidations=[];let validatedIngredientIndexes=new Set();let comboStreak=0;let roundScore=0;let roundCorrectCount=0;let localValidationQueue=Promise.resolve();let validationQueue=Promise.resolve();let validationSequence=0;let currentAnswerKey=[];let practiceAnswerKeys={};let practicePrepared=restorePracticeCache();let practicePreparing=false;let practiceStartRequested=false;let practiceImageCache={};let practiceSyncQueue=Promise.resolve();
function queuePracticeSync(task,label){
 const run=practiceSyncQueue.then(async()=>{
  for(let attempt=0;attempt<3;attempt++){
   try{return await task()}
   catch(error){
    const transient=/Failed to fetch|NetworkError|Request failed \((?:429|502|503|504)\)/i.test(String(error?.message||error));
    if(!transient||attempt===2){console.warn("Practice background sync failed:",label,error);return null}
    await new Promise(resolve=>setTimeout(resolve,[250,700][attempt]));
   }
  }
  return null;
 });
 practiceSyncQueue=run.then(()=>undefined,()=>undefined);
 return run;
}
let pendingPracticeSnapshot=null,practiceSnapshotScheduled=false;
function schedulePracticeSnapshot(snapshot){
 pendingPracticeSnapshot=snapshot;
 if(practiceSnapshotScheduled)return;
 practiceSnapshotScheduled=true;
 queuePracticeSync(async()=>{
  const current=pendingPracticeSnapshot;
  pendingPracticeSnapshot=null;
  if(!current)return null;
  if(Date.now()-current.roundStartedAt>=15000){
   if(pendingPracticeSnapshot?.productId===current.productId)pendingPracticeSnapshot=null;
   return null;
  }
  const serverSession=await current.sessionRef.ready;
  try{
   return await call("validate-ingredient",{method:"POST",body:{mode:"practice",session_id:serverSession.session_id,product_id:current.productId,answers:current.answers}});
  }catch(error){
   console.warn("Practice answer snapshot was not accepted:",error);
   if(/Request failed \((?:408|409|410)\)/i.test(String(error?.message||error))&&pendingPracticeSnapshot?.productId===current.productId)pendingPracticeSnapshot=null;
   return null;
  }
 },"answer snapshot").finally(()=>{
  practiceSnapshotScheduled=false;
  if(pendingPracticeSnapshot)schedulePracticeSnapshot(pendingPracticeSnapshot);
 });
}
let pendingDailySnapshot=null,dailySnapshotTask=null,dailyServerAlignedStartAt=0;
function scheduleDailySnapshot(snapshot){
 pendingDailySnapshot=snapshot;
 if(dailySnapshotTask)return dailySnapshotTask;
 const run=async()=>{
  while(pendingDailySnapshot){
   const current=pendingDailySnapshot;
   pendingDailySnapshot=null;
   if(Date.now()-current.roundStartedAt>=15000)continue;
   try{
    const started=await current.sessionPromise;
    current.roundStartedAt=dailyServerAlignedStartAt||current.roundStartedAt;
    if(Date.now()-current.roundStartedAt>=15000)continue;
    for(let attempt=0;attempt<2;attempt++){
     try{
      await call("validate-ingredient",{method:"POST",body:{mode:"daily",session_id:started.session_id,answers:current.answers}});
      break;
     }catch(error){
      const transient=/Failed to fetch|NetworkError|Request failed \((?:429|502|503|504)\)/i.test(String(error?.message||error));
      if(!transient||attempt===1||Date.now()-current.roundStartedAt>=15000){
       console.warn("Daily answer snapshot was not accepted:",error);
       break;
      }
      await new Promise(resolve=>setTimeout(resolve,75));
     }
    }
   }catch(error){console.warn("Daily answer snapshot could not be sent:",error)}
  }
 };
 dailySnapshotTask=run().finally(()=>{
  dailySnapshotTask=null;
  if(pendingDailySnapshot)scheduleDailySnapshot(pendingDailySnapshot);
 });
 return dailySnapshotTask;
}
async function flushDailySnapshots(){
 while(dailySnapshotTask||pendingDailySnapshot){
  if(dailySnapshotTask)await dailySnapshotTask;
  else scheduleDailySnapshot(pendingDailySnapshot);
 }
}
function normalizeGuess(value){return value.toLocaleLowerCase().normalize("NFD").replace(/\p{M}/gu,"").replace(/[^a-z0-9\s-]/g,"").replace(/\s+/g," ").trim()}
function applyGuessFeedback(matchedAnswers=[],rejectedAnswers=[]){
 const matched=new Set(matchedAnswers.map(normalizeGuess)),rejected=new Set(rejectedAnswers.map(normalizeGuess));
 [...$("chips").children].forEach((chip,i)=>{
  const answer=normalizeGuess(guesses[i]||chip.firstChild?.textContent||chip.textContent);
  const isCorrect=matched.has(answer),isWrong=!isCorrect&&rejected.has(answer);
  chip.classList.remove("good","bad","pending");
  chip.querySelector(".chip-mark")?.remove();
  if(!isCorrect&&!isWrong)return;
  chip.classList.add(isCorrect?"good":"bad");
  const mark=document.createElement("span");mark.className="chip-mark";mark.setAttribute("aria-label",isCorrect?"correct":"incorrect");mark.textContent=isCorrect?"✓":"✕";chip.append(mark);
 });
}
function addGuess(raw){
 const value=raw.trim();if(!value||!gameActive)return;
 const norm=normalizeGuess(value);if(!norm||guesses.some(x=>normalizeGuess(x)===norm))return;
 guesses.push(value);
 const chip=document.createElement("span");chip.className="chip pending";chip.textContent=value;$("chips").append(chip);
 const answers=[...guesses],sequence=++validationSequence,latest=answers[answers.length-1];
 if((mode==="practice"||mode==="daily")&&currentAnswerKey?.hashToIndex){
  const answerKey=currentAnswerKey;
  const localCheck=(async()=>{
   const digests=await Promise.all(answers.map(answer=>hashPracticeGuess(answer,answerKey.salt)));
   if(sequence!==validationSequence)return;
   const found=new Set(),matched=[],rejected=[];let combo=0,score=0;
   digests.forEach((digest,index)=>{
    const ingredientIndex=answerKey.hashToIndex.get(digest);
    if(ingredientIndex===undefined){rejected.push(answers[index]);combo=0;return}
    if(found.has(ingredientIndex)){if(mode==="daily")matched.push(answers[index]);else{rejected.push(answers[index]);combo=0}return}
    matched.push(answers[index]);found.add(ingredientIndex);combo++;score+=100+(combo>1?50:0);
   });
   const previousScore=roundScore;roundScore=score;roundCorrectCount=found.size;applyGuessFeedback(matched,rejected);
   setText("foundCount",String(found.size));setText("score",String((practiceSession?.score||0)+roundScore).padStart(3,"0"));
   const isCorrect=matched.some(x=>normalizeGuess(x)===normalizeGuess(latest));
   if(isCorrect){const gained=Math.max(0,roundScore-previousScore);setText("feedback",lang==="es"?"¡Correcto! +"+gained+" puntos":"Correct! +"+gained+" points");$("feedback").classList.remove("bad")}
   else{setText("feedback",t("incorrectFeedback"));$("feedback").classList.add("bad")}
  })().catch(error=>{if(sequence===validationSequence){setText("feedback",error.message||t("wrong"));$("feedback").classList.add("bad")}});
  localValidationQueue=localCheck;
  if(mode==="practice"&&gameActive&&Date.now()-startedAt<15000){
   schedulePracticeSnapshot({sessionRef:practiceSession,productId:selectedProduct?.id,answers,roundStartedAt:startedAt});
  }else if(mode==="daily"&&gameActive&&Date.now()-startedAt<15000&&dailyStartPromise){
   scheduleDailySnapshot({sessionPromise:dailyStartPromise,answers,roundStartedAt:startedAt});
  }
  return;
 }
 const request=(async()=>{
  try{
   const data=await call("validate-ingredient",{method:"POST",body:{mode,session_id:mode==="daily"?window.dailySessionId:practiceSession?.id,product_id:mode==="practice"?selectedProduct?.id:undefined,answers}});
   if(!gameActive||sequence!==validationSequence)return;
   applyGuessFeedback(data.matched_answers||[],data.rejected_answers||[]);
   const isCorrect=(data.matched_answers||[]).some(x=>normalizeGuess(x)===normalizeGuess(latest));
   const previousScore=roundScore;roundScore=Number(data.score)||0;
   setText("foundCount",String(data.correct_count||0));setText("score",String((practiceSession?.score||0)+roundScore).padStart(3,"0"));
   if(isCorrect){const gained=Math.max(0,roundScore-previousScore);setText("feedback",lang==="es"?"¡Correcto! +"+gained+" puntos":"Correct! +"+gained+" points");$("feedback").classList.remove("bad")}
   else{setText("feedback",t("incorrectFeedback"));$("feedback").classList.add("bad")}
  }catch(error){if(gameActive&&sequence===validationSequence){setText("feedback",error.message||t("wrong"));$("feedback").classList.add("bad")}}
 })();
 pendingValidations.push(request);validationQueue=Promise.allSettled(pendingValidations);
}
$("ingredientInput").addEventListener("input",e=>{const parts=e.target.value.split(",");if(parts.length>1){parts.slice(0,-1).forEach(addGuess);e.target.value=parts.at(-1)}});
$("ingredientInput").addEventListener("keydown",e=>{if(e.key==="Enter"){e.preventDefault();addGuess(e.target.value);e.target.value=""}});
async function finishGame(options={}){
 if(!gameActive)return;
 addGuess($("ingredientInput").value);$("ingredientInput").value="";gameActive=false;if(timer)clearInterval(timer);
 if(mode==="practice"&&practiceSession){const immediate=!!options.stop||practiceSession.index>=9;completePracticeRound({skipped:!!options.skip,stop:!!options.stop,immediate});return}
 setText("resultKicker",t("resultKicker"));setText("resultTitle",mode==="daily"?t("dailyResult"):t("resultTitle"));status("dailyStatus","");
 if(mode==="daily"){
  const answers=[...guesses];
  setText("accuracyLabel",lang==="es"?"INGREDIENTES ENCONTRADOS":"INGREDIENTS FOUND");setText("accuracyCaption",lang==="es"?"del total de ingredientes posibles":"of all possible ingredients");
  setText("finalScoreLabel",lang==="es"?"PUNTAJE FINAL":"FINAL SCORE");setText("scoreUnit",lang==="es"?"PUNTOS":"POINTS");
  $("youMissed").style.display="";$("missedList").style.display="";$("correctList").innerHTML="";$("missedList").innerHTML="";
  setText("youFound",t("foundTitle"));setText("youMissed",t("missed"));
  // Render the Daily result immediately from the local answer state. Network work continues below.
  const provisionalCorrect=Number(roundCorrectCount)||0;
  const provisionalTotal=Number(currentAnswerKey?.total_ingredients)||0;
  const provisionalScore=Number(roundScore)||0;
  lastResult={score:provisionalScore,correct_count:provisionalCorrect,total_ingredients:provisionalTotal,provisional:true};
  setText("foundCount",String(provisionalCorrect));setText("score",String(provisionalScore).padStart(3,"0"));
  setText("percent",provisionalTotal?Math.round(provisionalCorrect/provisionalTotal*100)+"%":"—");
  setText("resultSub",lang==="es"?provisionalCorrect+" de "+provisionalTotal+" ingredientes encontrados":provisionalCorrect+" of "+provisionalTotal+" ingredients found");
  setText("finalScore",String(provisionalScore));renderAnswers("correctList",[],false);renderAnswers("missedList",[],true);
  show("game",false);show("intro",false);show("result",true);
  void (async()=>{
   try{
    await localValidationQueue;
    const localCorrect=Number(roundCorrectCount)||0,localTotal=Number(currentAnswerKey?.total_ingredients)||0,localScore=Number(roundScore)||0;
    lastResult={score:localScore,correct_count:localCorrect,total_ingredients:localTotal,provisional:true};
    setText("foundCount",String(localCorrect));setText("score",String(localScore).padStart(3,"0"));
    setText("percent",localTotal?Math.round(localCorrect/localTotal*100)+"%":"—");
    setText("resultSub",lang==="es"?localCorrect+" de "+localTotal+" ingredientes encontrados":localCorrect+" of "+localTotal+" ingredients found");
    setText("finalScore",String(localScore));
    const started=await dailyStartPromise;
    await flushDailySnapshots();
    const data=await call("submit-daily",{method:"POST",body:{session_id:started.session_id}});
    lastResult={...data,xpEarned:Number(data.progression?.xp_awarded)||0};
    if(data.progression)playerProgression={...playerProgression,...data.progression};refreshPlayerProgression();
    applyGuessFeedback(data.matched_answers||[],data.rejected_answers||[]);
    const found=data.found||[],missed=data.missed||[],correctCount=data.correct_count??data.attempt?.correct_count??found.length,totalCount=data.total_ingredients??data.attempt?.total_ingredients??found.length+missed.length,finalScore=data.score??data.attempt?.score??0;
    setText("foundCount",String(correctCount));setText("score",String(finalScore).padStart(3,"0"));
    setText("percent",Math.round(correctCount/Math.max(1,totalCount)*100)+"%");
    setText("resultSub",lang==="es"?correctCount+" de "+totalCount+" ingredientes encontrados":correctCount+" of "+totalCount+" ingredients found");
    setText("finalScore",String(finalScore));renderAnswers("correctList",found,false);renderAnswers("missedList",missed,true);
    checkDaily().catch(error=>console.warn("Daily refresh after result failed.",error));
   }catch(e){
    console.error("Daily result sync failed.",e);
    setText("resultSub",lang==="es"?"Resultado pendiente de confirmación del servidor. "+e.message:"Result pending server confirmation. "+e.message);
   }
  })();
  return;
 }
 try{
  const data=await call("submit-practice",{method:"POST",body:{product_id:selectedProduct.id,answers:guesses,elapsed_ms:Math.min(15000,Date.now()-startedAt)}});
  lastResult=data;lastResult.xpEarned=Number(data.progression?.xp_awarded)||0;
  if(data.progression)playerProgression={...playerProgression,...data.progression};refreshPlayerProgression();
  const found=data.found||[],missed=data.missed||[],correctCount=data.correct_count??data.attempt?.correct_count??found.length,totalCount=data.total_ingredients??data.attempt?.total_ingredients??found.length+missed.length,finalPoints=data.score??data.attempt?.score??0;
  setText("accuracyLabel",lang==="es"?"INGREDIENTES ENCONTRADOS":"INGREDIENTS FOUND");setText("accuracyCaption",lang==="es"?"del total de ingredientes posibles":"of all possible ingredients");
  setText("percent",Math.round(correctCount/Math.max(1,totalCount)*100)+"%");setText("resultSub",lang==="es"?correctCount+" de "+totalCount+" ingredientes encontrados":correctCount+" of "+totalCount+" ingredients found");
  setText("finalScoreLabel",lang==="es"?"PUNTAJE FINAL":"FINAL SCORE");setText("finalScore",String(finalPoints));setText("scoreUnit",lang==="es"?"PUNTOS":"POINTS");
  $("youMissed").style.display="";$("missedList").style.display="";$("correctList").classList.remove("practice-score-list");renderAnswers("correctList",found,false);renderAnswers("missedList",missed,true);setText("youFound",t("foundTitle"));setText("youMissed",t("missed"));
 }catch(e){setText("resultTitle",t("wrong"));setText("resultSub",e.message);setText("percent","—");setText("finalScore","");setText("scoreUnit",lang==="es"?"PUNTOS":"POINTS");$("correctList").innerHTML="";$("missedList").innerHTML=""}
 show("game",false);show("intro",false);show("result",true);
}
function renderAnswers(id,items,missed){const box=$(id);box.innerHTML="";items.forEach(x=>{const s=document.createElement("span");s.className="answer"+(missed?" missed":"");s.textContent=x[lang]||x.es||x.en;box.append(s)});if(!items.length)box.textContent="—"}
function renderPracticeScores(rounds){const box=$("correctList");box.innerHTML="";box.classList.remove("practice-score-list");rounds.forEach(r=>{const item=document.createElement("span");item.className="answer";item.textContent=r.name+" · "+String(Number(r.score)||0)+" PTS";box.append(item)});if(!rounds.length)box.textContent="—"}
async function startDaily(){
 if(!session){openAuth();return}
 if(!challenge){await checkDaily();return}
 if(!dailyImageReady||!dailyAnswerKey)return;
 if(gameActive||dailyStartPromise)return;
 setDailyNavigationLock(true);
 mode="daily";dailyLocalStartedAt=Date.now();window.dailySessionId=null;currentAnswerKey=dailyAnswerKey;
 setProduct({id:challenge.product_id,name:challenge.product_name,name_i18n:{es:challenge.product_name,en:challenge.product_name},description_i18n:{es:challenge.description_es||"",en:challenge.description_en||""},image_url:dailyImageObject?.src||challenge.image_url,fallback_image_url:challenge.fallback_image_url,brand:challenge.market},{allowFallback:true});
 const localStart=dailyLocalStartedAt;
 dailyServerAlignedStartAt=0;
 const requestStartedAt=Date.now();
 dailyStartPromise=call("start-daily",{method:"POST",body:{}}).then(data=>{
  window.dailySessionId=data.session_id;
  challenge=data.challenge||challenge;
  const roundTrip=Math.max(0,Date.now()-requestStartedAt);
  const estimatedElapsed=Math.min(15000,Math.max(0,Number(data.elapsed_ms)||0)+Math.round(roundTrip/2));
  startedAt=Date.now()-estimatedElapsed;
  dailyLocalStartedAt=startedAt;
  dailyServerAlignedStartAt=startedAt;
  return data;
 }).catch(error=>{
  console.error("Daily session could not be created.",error);
  const alreadyPlayed=/already played today's Daily/i.test(error.message||"");
  if(gameActive){gameActive=false;if(timer)clearInterval(timer);show("game",false);show("intro",true)}
  if(alreadyPlayed){
   dailyPlayed=true;dailyAnswerKey=null;setText("dailyTitle",t("already"));status("dailyStatus",t("already"));setText("dailyStart",t("already"));$("dailyStart").disabled=true;
  }else status("dailyStatus",error.message||t("wrong"),true);
  setDailyNavigationLock(false);
  dailyStartPromise=null;throw error;
 });
 startGame(localStart);
}
function startPractice(){
 if(!session){openAuth();return}
 if(!practicePrepared){
  if(practiceStartRequested)return;
  practiceStartRequested=true;
  setText("practiceStart",lang==="es"?"INICIANDO…":"STARTING…");
  if(!practicePreparing)preparePracticeSession();
  return;
 }
 const prepared=practicePrepared;practicePrepared=null;practiceStartRequested=false;
 setText("practiceStart",t("startPractice"));
 practiceAnswerKeys=prepared.answerKeys||{};practiceImageCache=prepared.images||{};
 const ready=call("start-practice",{method:"POST",body:{product_ids:prepared.products.map(p=>p.id)}});
 const s={id:null,ready,products:prepared.products,index:0,score:0,correct:0,total:0,completed:0,skipped:0,xpEarned:0,progression:null,skippedProducts:[],rounds:[]};
 practiceSession=s;
 ready.then(data=>{s.id=data.session_id;}).catch(error=>{
  console.warn("Practice session could not be created.",error);
  if(practiceSession!==s)return;
  if(timer)clearInterval(timer);
  gameActive=false;practiceSession=null;setPracticeNavigationLock(false);
  show("game",false);show("result",false);show("intro",true);show("practicePanel",true);
  practicePrepared=null;
  try{localStorage.removeItem(PRACTICE_CACHE_KEY)}catch{}
  status("practiceStatus",error.message||t("wrong"),true);
 });
 setPracticeNavigationLock(true);
 mode="practice";
 status("practiceStatus",t("practiceReady"));
 startPracticeRound(Date.now());
 preparePracticeSession({quiet:true});
}
function startPracticeRound(localStartedAt=Date.now()){
 if(!practiceSession)return;
 selectedProduct=practiceSession.products[practiceSession.index];
 currentAnswerKey=practiceAnswerKeys[selectedProduct.id]||null;
 setProduct(selectedProduct,{allowFallback:true});
 setText("practiceProgress",(lang==="es"?"PRODUCTO ":"PRODUCT ")+(practiceSession.index+1)+"/10");
 setText("score",String(practiceSession.score).padStart(3,"0"));
 startGame(localStartedAt);
}
async function completePracticeRound({skipped=false,stop=false,immediate=false}={}){
 const product=selectedProduct,s=practiceSession;
 if(!s)return;
 if(!immediate)await localValidationQueue;
 if(practiceSession!==s)return;
 const name=product.name_i18n?.[lang]||product.name;
 const answers=[...guesses];
 const rawElapsed=Math.max(0,Date.now()-startedAt);
 const lateSkip=skipped&&rawElapsed>15000;
 const score=lateSkip?0:Number(roundScore)||0;
 const correct=lateSkip?0:Number(roundCorrectCount)||0;
 const total=Number(currentAnswerKey?.total_ingredients)||0;
 const elapsed=Math.min(15000,rawElapsed);
 s.score+=score;s.correct+=correct;s.total+=total;s.completed++;
 if(skipped){s.skipped++;s.skippedProducts.push(name)}
 const roundRecord={productId:product.id,name,score,correct,total,skipped,error:null,serverReconciled:false};
 s.rounds.push(roundRecord);
 if(immediate){
  localValidationQueue.then(()=>{
   if(roundRecord.serverReconciled||lateSkip)return;
   roundRecord.score=Number(roundScore)||0;roundRecord.correct=Number(roundCorrectCount)||0;
   s.score=s.rounds.reduce((sum,round)=>sum+round.score,0);
   s.correct=s.rounds.reduce((sum,round)=>sum+round.correct,0);
   s.total=s.rounds.reduce((sum,round)=>sum+round.total,0);
   if(lastResult?.sessionRef===s){
    lastResult.score=s.score;lastResult.correct_count=s.correct;lastResult.total_ingredients=s.total;
    setText("finalScore",String(s.score));setText("percent",s.total?Math.round(s.correct/s.total*100)+"%":"—");
    setText("resultSub",lang==="es"?s.correct+" de "+s.total+" ingredientes encontrados · "+s.completed+" de 10 productos jugados":s.correct+" of "+s.total+" ingredients found · "+s.completed+" of 10 products played");
    renderPracticeScores(s.rounds);
   }
  });
 }
 setText("score",String(s.score).padStart(3,"0"));
 if(skipped)status("feedback",t("productSkipped"));
 else status("feedback",correct+(lang==="es"?" ingredientes correctos":" correct ingredients"));
 const payload={answers,elapsed_ms:elapsed,skipped,stop_after:stop};
 queuePracticeSync(async()=>{
  const serverSession=await s.ready;
  return call("submit-practice",{method:"POST",body:{session_id:serverSession.session_id,product_id:product.id,...payload}});
 },"round completion").then(data=>{
  if(!data)return;
  s.xpEarned+=Number(data.progression?.xp_awarded)||0;
  s.progression=data.progression||s.progression;
  
  const savedRound=s.rounds.find(round=>round.productId===product.id);
  if(savedRound){
   savedRound.serverReconciled=true;
   savedRound.score=Number(data.score)||0;savedRound.correct=Number(data.correct_count)||0;
   savedRound.total=Number(data.total_ingredients)||savedRound.total;
  }
  s.score=s.rounds.reduce((sum,round)=>sum+round.score,0);
  s.correct=s.rounds.reduce((sum,round)=>sum+round.correct,0);
  s.total=s.rounds.reduce((sum,round)=>sum+round.total,0);
  if(lastResult?.sessionRef===s){
   lastResult.score=s.score;lastResult.correct_count=s.correct;lastResult.total_ingredients=s.total;
   lastResult.xpEarned=s.xpEarned;lastResult.progression=s.progression;
   setText("finalScore",String(s.score));setText("percent",s.total?Math.round(s.correct/s.total*100)+"%":"—");
   setText("resultSub",lang==="es"?s.correct+" de "+s.total+" ingredientes encontrados · "+s.completed+" de 10 productos jugados":s.correct+" of "+s.total+" ingredients found · "+s.completed+" of 10 products played");
   renderPracticeScores(s.rounds);refreshPlayerProgression();
  }else if(practiceSession===s){
   setText("score",String(s.score).padStart(3,"0"));refreshPlayerProgression();
  }
 });
 if(stop||s.index>=9){finishPracticeSession();return}
 if(practiceSession!==s)return;
 s.index++;
 startPracticeRound(Date.now());
}
function stopPracticeImmediately(){if(!practiceSession)return;finishGame({stop:true})}
function finishPracticeSession(){const s=practiceSession;if(!s)return;practiceSession=null;setPracticeNavigationLock(false);show("practiceProgress",false);show("practiceSkip",false);show("practiceStop",false);show("finishBtn",true);show("game",false);show("intro",false);show("result",true);setText("resultKicker",t("practiceResultKicker"));setText("resultTitle",t("practiceResultTitle"));setText("accuracyLabel",lang==="es"?"INGREDIENTES ENCONTRADOS":"INGREDIENTS FOUND");setText("accuracyCaption",lang==="es"?"del total de ingredientes posibles":"of all possible ingredients");setText("percent",s.total?Math.round(s.correct/s.total*100)+"%":"—");setText("resultSub",lang==="es"?s.correct+" de "+s.total+" ingredientes encontrados · "+s.completed+" de 10 productos jugados":s.correct+" of "+s.total+" ingredients found · "+s.completed+" of 10 products played");setText("finalScoreLabel",lang==="es"?"PUNTAJE FINAL":"FINAL SCORE");setText("finalScore",String(s.score));setText("scoreUnit",lang==="es"?"PUNTOS":"POINTS");setText("youFound",t("scoreByProduct"));$("youMissed").style.display="none";$("missedList").style.display="none";$("missedList").innerHTML="";renderPracticeScores(s.rounds);lastResult={score:s.score,correct_count:s.correct,total_ingredients:s.total,completed:s.completed,practice:true,xpEarned:s.xpEarned,progression:s.progression,sessionRef:s};refreshPlayerProgression();if(practicePrepared){$("practiceStart").disabled=false;status("practiceStatus",t("practiceReady"));}}
function openAuth(){show("authModal",true);$("authModal").classList.add("open");status("authStatus","")}
function closeAuth(){$("authModal").classList.remove("open");show("authModal",false)}
let authMode="signin";function setAuthMode(next){authMode=next;const signup=next==="signup";setText("authTitle",signup?t("signupTitle"):t("signinTitle"));setText("authSubmit",signup?t("signupSubmit"):t("submit"));setText("authMode",signup?t("signinSwitch"):t("create"));setText("authHint",signup?t("signupHint"):t("signinHint"));show("usernameLabel",signup)}
$("authOpen").onclick=async()=>{if(session){await supabase.auth.signOut();return}setAuthMode("signin");openAuth()};$("authClose").onclick=closeAuth;$("authMode").onclick=()=>setAuthMode(authMode==="signin"?"signup":"signin");
$("authForm").addEventListener("submit",async e=>{e.preventDefault();const email=$("authEmail").value.trim(),password=$("authPassword").value;status("authStatus",t("loading"));try{let result;if(authMode==="signup"){const username=$("authUsername")?.value?.trim();if(!username)throw new Error(t("signupError"));if(!/^[A-Za-z0-9_]{3,20}$/.test(username))throw new Error(t("usernameRule"));result=await supabase.auth.signUp({email,password,options:{data:{username}}});if(result.error)throw result.error;if(!result.data.session){status("authStatus",t("authOk"));return}}else result=await supabase.auth.signInWithPassword({email,password});if(result.error)throw result.error;closeAuth()}catch(err){status("authStatus",err.message||t("wrong"),true)}});
$("dailyTab").onclick=()=>setMode("daily");$("practiceTab").onclick=()=>setMode("practice");$("rankingTab").onclick=()=>loadRanking();$("dailyStart").onclick=startDaily;$("practiceStart").onclick=startPractice;$("finishBtn").onclick=()=>finishGame();$("practiceSkip").onclick=()=>finishGame({skip:true});$("practiceStop").onclick=stopPracticeImmediately;$("backBtn").onclick=()=>{show("result",false);show("intro",true);if(mode==="daily")setDailyNavigationLock(false);setMode(mode);if(mode==="daily")checkDaily()};$("shareBtn").onclick=async()=>{const result=lastResult;const score=result?.score??result?.attempt?.score??0;const count=result?.correct_count??result?.attempt?.correct_count??0;const msg=lang==="es"?"INGREDORA\n"+count+" ingredientes · "+score+" puntos\n¿Podés superarme?":"INGREDORA\n"+count+" ingredients · "+score+" points\nCan you beat me?";try{if(navigator.share)await navigator.share({title:"Ingredora",text:msg});else{await navigator.clipboard.writeText(msg);setText("shareBtn",lang==="es"?"¡COPIADO!":"COPIED!")}}catch{}};
// Rankings are opened from the persistent navigation tab.$("closeRanking").onclick=()=>setMode(mode==="ranking"?"daily":mode);$("rankingScope").onchange=loadRanking;
async function loadRanking(){if(practiceSession)return;show("game",false);show("result",false);$("dailyTab").classList.remove("active");$("practiceTab").classList.remove("active");$("rankingTab").classList.add("active");show("dailyPanel",false);show("practicePanel",false);show("rankingPanel",true);show("intro",true);status("rankingList",t("loading"));try{const data=await call("leaderboard?scope="+$("rankingScope").value);const list=$("rankingList");list.innerHTML="";if(!data.entries?.length){list.textContent=t("noRank");return}data.entries.forEach(x=>{const row=document.createElement("div");row.className="rank-row";const a=document.createElement("b");a.textContent="#"+x.rank;const b=document.createElement("span");b.textContent=x.username;const c=document.createElement("strong");c.textContent=x.score+" pts";row.append(a,b,c);list.append(row)})}catch(e){status("rankingList",e.message,true)}}
function typeIngredoraWordmark(){
 const heading=$("headline"),target=heading?.querySelector(".wordmark-text");
 if(!heading||!target)return;
 const word=t("headline");
 target.textContent="";
 heading.classList.remove("typing-complete");
 heading.setAttribute("aria-label",word);
 let index=0;
 const delays=[125,105,145,115,155,105,135,120,170];
 const typeNext=()=>{
  if(index<word.length){
   target.textContent+=word[index++];
   window.setTimeout(typeNext,delays[(index-1)%delays.length]);
  }else{
   window.setTimeout(()=>heading.classList.add("typing-complete"),220);
  }
 };
 window.setTimeout(typeNext,350);
}
typeIngredoraWordmark();
$("themeBtn").onclick=toggleTheme;$("rankingScope").value="today";$("langBtn").onclick=()=>{lang=lang==="en"?"es":"en";setText("langBtn",lang==="en"?"ES":"EN");updateLanguage();refreshPlayerProgression()};
supabase.auth.onAuthStateChange((_event,newSession)=>{session=newSession;updateAccount();refreshPlayerProgression();checkDaily()});
(async()=>{setMode("daily");const {data}=await supabase.auth.getSession();session=data.session;updateAccount();setText("langBtn","ES");updateLanguage();await Promise.all([checkDaily(),loadCatalog(),refreshPlayerProgression()]);})();
