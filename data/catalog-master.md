# Ingredora — Registro maestro de productos / Master product register

Documento humano de control editorial. Los JSON siguen siendo los datos que consume el juego; este Markdown permite auditar productos, ingredientes aceptados y fuentes. Actualizarlo en cada tanda.

Human-readable editorial register. JSON remains the game's data source; update this file with every product batch.

- **Última actualización / Last updated:** 2026-11-17
- **Productos / Products:** 200
- **Argentina:** 80
- **World:** 120
- **Idiomas / Languages:** Español + English
- **Fotos reales / Real product photos:** 200 / 200

## Reglas / Rules

1. Cada ficha representa una presentación y mercado concretos; no mezclar fórmulas de países distintos.
2. Conservar el texto de etiqueta en `ingredientsText`; las respuestas normalizadas están en `ingredients`.
3. No incluir advertencias de trazas o “puede contener” como ingredientes.
4. Cada respuesta aceptada debe tener español, inglés y alias útiles.
5. Identificar si la fuente es fabricante, etiqueta comercial, retailer o documento foodservice.
6. Revisar la ficha cuando cambie la fórmula, el envase o el mercado.
7. Este registro no sustituye la etiqueta física del producto.

## Índice / Index

- [Argentina](#argentina)
- [World](#world)

## Argentina

### Nutella / Nutella

- **ID:** `nutella-ar`
- **Foto real / Real photo:** [Ver envase / View package](https://www.nutella.com/ar/sites/nutella20_ar/files/2023-06/350g_ok.jpg?t=1736508122) · [Fuente / Source](https://www.nutella.com/ar/es/productos/nutella)
- **Marca / Brand:** Ferrero
- **País / Country:** Argentina
- **Mercado / Market:** Argentina
- **Envase / Package:** Presentación argentina; tamaño no especificado en fuente
- **Categoría / Category:** `chocolate_spread`
- **Barcode:** No registrado / Not recorded
- **Estado / Status:** `ready` · **Verificación:** `manufacturer_website`
- **Descripción (ES):** Crema de cacao y avellanas · ¿Qué ingredientes tiene?
- **Description (EN):** Hazelnut cocoa spread · Can you guess what's inside?

**Ingredientes declarados / Declared ingredients**

La página oficial argentina identifica 7 ingredientes: azúcar, aceite de palma, avellanas, cacao, leche, lecitinas y vainillina.

**Respuestas aceptadas / Accepted answers (7)**

| Español | English | Alias / Aliases |
|---|---|---|
| azúcar | sugar | azúcar, sugar, sugars |
| aceite de palma | palm oil | aceite de palma, palm oil |
| avellanas | hazelnuts | avellanas, hazelnuts, hazelnut, hazelnuts |
| cacao | cocoa | cacao, cocoa, cocoa powder |
| leche | milk | leche, milk |
| lecitinas | lecithins | lecitinas, lecithins, lecithin, soy lecithin |
| vainillina | vanillin | vainillina, vanillin |

**Fuente / Source:** [Nutella Argentina](https://www.nutella.com/ar/es/dentro-de-nutella/calidad-e-ingredientes)  
**Tipo / Type:** `manufacturer_website`  
**Alcance / Supports:** The seven ingredients named for Nutella.

---

### Chocolinas / Chocolinas

- **ID:** `chocolinas-ar-150g`
- **Foto real / Real photo:** [Ver envase / View package](https://cdn11.bigcommerce.com/s-b156nxvmdp/images/stencil/1280x1280/products/875/1287/318999-800-450__66603.1692200350.jpg?c=1) · [Fuente / Source](https://gauchostore.com/chocolinas-galletitas-de-chocolate-150-g-5-29-oz/)
- **Marca / Brand:** Bagley
- **País / Country:** Argentina
- **Mercado / Market:** Argentina
- **Envase / Package:** 150 g
- **Categoría / Category:** `chocolate_cookies`
- **Barcode:** 7790040139398
- **Estado / Status:** `ready` · **Verificación:** `packaging_transcription_secondary`
- **Descripción (ES):** Galletitas de chocolate · ¿Podés nombrar sus ingredientes?
- **Description (EN):** Chocolate cookies · Can you name the ingredients?

**Ingredientes declarados / Declared ingredients**

HARINA DE TRIGO ENRIQUECIDA SEGUN LEY 25630 (harina de trigo, hierro, ácido fólico, tiamina, riboflavina) ; AZÚCAR; GRASA BOVINA REFINADA; CACAO EN POLVO; JARABE DE GLUCOSA; SAL; LEUDANTES QUÍMICOS: BICARBONATO DE SODIO, BICARBONATO DE AMONIO; COLORANTE: CARAMELO (E150d); EMULSIONANTE: LECITINA DE SOJA/SOYA; MEJORADOR DE HARINA: METABISULFITO DE SODIO: AROMATIZANTE ARTIFICIAL: VAINILLINA

**Respuestas aceptadas / Accepted answers (12)**

| Español | English | Alias / Aliases |
|---|---|---|
| harina de trigo enriquecida | enriched wheat flour | harina de trigo enriquecida, enriched wheat flour |
| azúcar | sugar | azúcar, sugar |
| grasa bovina refinada | refined beef fat | grasa bovina refinada, refined beef fat |
| cacao en polvo | cocoa powder | cacao en polvo, cocoa powder |
| jarabe de glucosa | glucose syrup | jarabe de glucosa, glucose syrup |
| sal | salt | sal, salt |
| bicarbonato de sodio | sodium bicarbonate | bicarbonato de sodio, sodium bicarbonate |
| bicarbonato de amonio | ammonium bicarbonate | bicarbonato de amonio, ammonium bicarbonate |
| caramelo | caramel | caramelo, caramel |
| lecitina de soja | soy lecithin | lecitina de soja, soy lecithin |
| metabisulfito de sodio | sodium metabisulfite | metabisulfito de sodio, sodium metabisulfite |
| vainillina | vanillin | vainillina, vanillin |

**Fuente / Source:** [ShelfPedia / Open Food Facts transcription](https://shelfpedia.com/es-ar/producto/7790040139398-chocolinas/)  
**Tipo / Type:** `packaging_transcription_secondary`  
**Alcance / Supports:** Full ingredient statement transcribed for 150 g Chocolinas; barcode 7790040139398.

---

### Oreo Original / Oreo Original

- **ID:** `oreo-original-ar-118g`
- **Foto real / Real photo:** [Ver envase / View package](https://acdn-us.mitiendanube.com/stores/005/651/909/products/2-fc95c486f842f9a38417393881896337-1024-1024.webp) · [Fuente / Source](https://tuasupermercado.com.ar/productos/galletitas-oreo-regular-x-118-gramos/)
- **Marca / Brand:** Oreo · Mondelez
- **País / Country:** Argentina
- **Mercado / Market:** Argentina
- **Envase / Package:** 118 g
- **Categoría / Category:** `filled_cookies`
- **Barcode:** No registrado / Not recorded
- **Estado / Status:** `ready` · **Verificación:** `retailer_label_transcription`
- **Descripción (ES):** Galletitas rellenas de chocolate · ¿Qué tienen?
- **Description (EN):** Chocolate sandwich cookies · What's inside?

**Ingredientes declarados / Declared ingredients**

Azúcar, harina de trigo enriquecida, aceite vegetal, cacao en polvo, jarabe de maíz de alta fructosa, almidón, sal, leudantes químicos (bicarbonato de sodio, bicarbonato de amonio), emulsionante lecitina de soja, aromatizante idéntico al natural vainillina. La harina enriquecida contiene hierro, ácido fólico, vitamina B1, vitamina B2 y niacina.

**Respuestas aceptadas / Accepted answers (11)**

| Español | English | Alias / Aliases |
|---|---|---|
| azúcar | sugar | azúcar, sugar |
| harina de trigo enriquecida | enriched wheat flour | harina de trigo enriquecida, enriched wheat flour |
| aceite vegetal | vegetable oil | aceite vegetal, vegetable oil |
| cacao en polvo | cocoa powder | cacao en polvo, cocoa powder |
| jarabe de maíz de alta fructosa | high-fructose corn syrup | jarabe de maíz de alta fructosa, high-fructose corn syrup |
| almidón | starch | almidón, starch |
| sal | salt | sal, salt |
| bicarbonato de sodio | sodium bicarbonate | bicarbonato de sodio, sodium bicarbonate |
| bicarbonato de amonio | ammonium bicarbonate | bicarbonato de amonio, ammonium bicarbonate |
| lecitina de soja | soy lecithin | lecitina de soja, soy lecithin |
| vainillina | vanillin | vainillina, vanillin |

**Fuente / Source:** [Jumbo Argentina](https://www.jumbo.com.ar/galletitas-oreo-original-x-118g/p)  
**Tipo / Type:** `retailer_label_transcription`  
**Alcance / Supports:** Ingredient statement for Oreo Original 118 g.

---

### Papas Lay's Clásicas / Papas Lay's Clásicas

- **ID:** `lays-clasicas-ar-40g`
- **Foto real / Real photo:** [Ver envase / View package](https://masonlineprod.vtexassets.com/arquivos/ids/290186/Papas-Fritas-Lays-Cl-sicas-40g-1-45256.jpg?v=638246649691230000) · [Fuente / Source](https://www.masonline.com.ar/papas-fritas-lays-clasicas-40g-2/p)
- **Marca / Brand:** Lay's · PepsiCo
- **País / Country:** Argentina
- **Mercado / Market:** Argentina
- **Envase / Package:** 40 g
- **Categoría / Category:** `potato_chips`
- **Barcode:** No registrado / Not recorded
- **Estado / Status:** `ready` · **Verificación:** `retailer_label_transcription`
- **Descripción (ES):** Papas fritas clásicas · ¿Cuántos ingredientes tienen?
- **Description (EN):** Classic potato chips · Only a few ingredients?

**Ingredientes declarados / Declared ingredients**

Papa, aceite vegetal, sal.

**Respuestas aceptadas / Accepted answers (3)**

| Español | English | Alias / Aliases |
|---|---|---|
| papa | potato | papa, potato |
| aceite vegetal | vegetable oil | aceite vegetal, vegetable oil |
| sal | salt | sal, salt |

**Fuente / Source:** [Jumbo Argentina](https://www.jumbo.com.ar/papas-fritas-lays-clasicas-40-g/p)  
**Tipo / Type:** `retailer_label_transcription`  
**Alcance / Supports:** Ingredient statement for Lay's Clásicas 40 g.

---

### Cereal Nesquik / Cereal Nesquik

- **ID:** `nesquik-cereal-ar-230g`
- **Foto real / Real photo:** [Ver envase / View package](https://superlavioleta.com/cdn/shop/products/CEREAL_NESQUIK_230GRS.jpg?v=1751385753) · [Fuente / Source](https://superlavioleta.com/products/cereal-nestle)
- **Marca / Brand:** Nestlé · Nesquik
- **País / Country:** Argentina
- **Mercado / Market:** Argentina
- **Envase / Package:** 230 g
- **Categoría / Category:** `breakfast_cereal`
- **Barcode:** No registrado / Not recorded
- **Estado / Status:** `ready` · **Verificación:** `retailer_label_transcription`
- **Descripción (ES):** Cereal de chocolate · Nombrá sus ingredientes.
- **Description (EN):** Chocolate breakfast cereal · Name what's inside.

**Ingredientes declarados / Declared ingredients**

Harina integral de maíz, sémola fina de maíz, azúcar, jarabe de glucosa, cacao en polvo, aceite de palma, antioxidante palmitato de ascorbilo, carbonato de calcio, malta, sal, maltodextrina, niacina, óxido de zinc, pantotenato de calcio, hierro reducido, vitamina B1, vitamina B6, vitamina B2, ácido fólico, antihumectante fosfato dicálcico, saborizante vainilla, colorante caramelo, estabilizante fosfato trisódico, derivados de cebada.

**Respuestas aceptadas / Accepted answers (24)**

| Español | English | Alias / Aliases |
|---|---|---|
| harina integral de maíz | whole corn flour | harina integral de maíz, whole corn flour |
| sémola fina de maíz | fine corn semolina | sémola fina de maíz, fine corn semolina |
| azúcar | sugar | azúcar, sugar |
| jarabe de glucosa | glucose syrup | jarabe de glucosa, glucose syrup |
| cacao en polvo | cocoa powder | cacao en polvo, cocoa powder |
| aceite de palma | palm oil | aceite de palma, palm oil |
| palmitato de ascorbilo | ascorbyl palmitate | palmitato de ascorbilo, ascorbyl palmitate |
| carbonato de calcio | calcium carbonate | carbonato de calcio, calcium carbonate |
| malta | malt | malta, malt |
| sal | salt | sal, salt |
| maltodextrina | maltodextrin | maltodextrina, maltodextrin |
| niacina | niacin | niacina, niacin |
| óxido de zinc | zinc oxide | óxido de zinc, zinc oxide |
| pantotenato de calcio | calcium pantothenate | pantotenato de calcio, calcium pantothenate |
| hierro reducido | reduced iron | hierro reducido, reduced iron |
| vitamina B1 | vitamin B1 | vitamina B1, vitamin B1 |
| vitamina B6 | vitamin B6 | vitamina B6, vitamin B6 |
| vitamina B2 | vitamin B2 | vitamina B2, vitamin B2 |
| ácido fólico | folic acid | ácido fólico, folic acid |
| fosfato dicálcico | dicalcium phosphate | fosfato dicálcico, dicalcium phosphate |
| saborizante vainilla | vanilla flavouring | saborizante vainilla, vanilla flavouring |
| caramelo | caramel | caramelo, caramel |
| fosfato trisódico | trisodium phosphate | fosfato trisódico, trisodium phosphate |
| derivados de cebada | barley derivatives | derivados de cebada, barley derivatives |

**Fuente / Source:** [Vea Argentina](https://www.vea.com.ar/nesquik-cereal-x-230gr/p)  
**Tipo / Type:** `retailer_label_transcription`  
**Alcance / Supports:** Ingredient statement for Nesquik cereal 230 g; listing identifies Argentine origin.

---

### Coca-Cola Sabor Original / Coca-Cola Sabor Original

- **ID:** `coca-cola-original-ar`
- **Foto real / Real photo:** [Ver envase / View package](https://hiperlibertad.vtexassets.com/arquivos/ids/210159-800-auto?aspect=true&height=auto&v=638210685969170000&width=800) · [Fuente / Source](https://www.hiperlibertad.com.ar/coca-cola-sabor-original-500-ml/p)
- **Marca / Brand:** Coca-Cola
- **País / Country:** Argentina
- **Mercado / Market:** Argentina
- **Envase / Package:** Presentación argentina; tamaño no especificado
- **Categoría / Category:** `soft_drink`
- **Barcode:** No registrado / Not recorded
- **Estado / Status:** `ready` · **Verificación:** `manufacturer_website`
- **Descripción (ES):** Gaseosa cola original · ¿Podés adivinar la fórmula?
- **Description (EN):** Original cola · Can you guess the formula?

**Ingredientes declarados / Declared ingredients**

AGUA CARBONATADA, AZÚCAR o JMAF, COL 150 d, ACI 338, ARO, EDU SUCRALOSA (4,3 mg/100 ml). CONTIENE CAFEÍNA.

**Respuestas aceptadas / Accepted answers (6)**

| Español | English | Alias / Aliases |
|---|---|---|
| agua carbonatada | carbonated water | agua carbonatada, carbonated water |
| azúcar o jarabe de maíz de alta fructosa | sugar or high-fructose corn syrup | azúcar o jarabe de maíz de alta fructosa, sugar or high-fructose corn syrup |
| colorante caramelo (E150d) | caramel color (E150d) | colorante caramelo (E150d), caramel color (E150d) |
| ácido fosfórico (E338) | phosphoric acid (E338) | ácido fosfórico (E338), phosphoric acid (E338) |
| aromatizantes | flavourings | aromatizantes, flavourings |
| sucralosa | sucralose | sucralosa, sucralose |

**Fuente / Source:** [Coca-Cola Argentina](https://www.coca-cola.com/ar/es/brands/coca-cola)  
**Tipo / Type:** `manufacturer_website`  
**Alcance / Supports:** Official ingredient declaration for Coca-Cola Sabor Original.

---

### Sprite Sabor Lima-Limón / Sprite Sabor Lima-Limón

- **ID:** `sprite-lima-limon-ar`
- **Foto real / Real photo:** [Ver envase / View package](https://www.coca-cola.com/content/dam/onexp/ar/es/sprite/productos/38881_ARG_BOTELLARENDER_928x928_V1.jpg) · [Fuente / Source](https://www.coca-cola.com/ar/es/brands/sprite/productos)
- **Marca / Brand:** Sprite · Coca-Cola
- **País / Country:** Argentina
- **Mercado / Market:** Argentina
- **Envase / Package:** Presentación argentina; tamaño no especificado
- **Categoría / Category:** `soft_drink`
- **Barcode:** No registrado / Not recorded
- **Estado / Status:** `ready` · **Verificación:** `manufacturer_website`
- **Descripción (ES):** Gaseosa lima-limón · ¿Qué tiene su fórmula?
- **Description (EN):** Lemon-lime soda · What's in the new formula?

**Ingredientes declarados / Declared ingredients**

AGUA CARBONATADA, AZÚCAR O JMAF, JUGO DE LIMÓN, ARO, ACREG 331 iii, CONS BENZOATO DE SODIO - SORBATO DE POTASIO, EDU ACESULFAME K - SUCRALOSA, ACI 330.

**Respuestas aceptadas / Accepted answers (10)**

| Español | English | Alias / Aliases |
|---|---|---|
| agua carbonatada | carbonated water | agua carbonatada, carbonated water |
| azúcar o jarabe de maíz de alta fructosa | sugar or high-fructose corn syrup | azúcar o jarabe de maíz de alta fructosa, sugar or high-fructose corn syrup |
| jugo de limón | lemon juice | jugo de limón, lemon juice |
| aromatizantes | flavourings | aromatizantes, flavourings |
| citrato de sodio (E331) | sodium citrate (E331) | citrato de sodio (E331), sodium citrate (E331) |
| benzoato de sodio | sodium benzoate | benzoato de sodio, sodium benzoate |
| sorbato de potasio | potassium sorbate | sorbato de potasio, potassium sorbate |
| acesulfame K | acesulfame K | acesulfame K |
| sucralosa | sucralose | sucralosa, sucralose |
| ácido cítrico (E330) | citric acid (E330) | ácido cítrico (E330), citric acid (E330) |

**Fuente / Source:** [Coca-Cola Argentina](https://www.coca-cola.com/ar/es/brands/sprite/productos)  
**Tipo / Type:** `manufacturer_website`  
**Alcance / Supports:** Official ingredient declaration for Sprite Sabor Lima-Limón.

---

### Yogur bebible La Serenísima Frutilla / Yogur bebible La Serenísima Frutilla

- **ID:** `la-serenisima-yogur-frutilla-bebible-1300g`
- **Foto real / Real photo:** [Ver envase / View package](https://masonlineprod.vtexassets.com/arquivos/ids/375170/Yogur-Bebible-La-Seren-sima-Nutrici-n-Activa-Sabor-Frutilla-1300-G-0779133701051-1.jpg?v=639058172179630000) · [Fuente / Source](https://www.masonline.com.ar/yogur-bebible-la-serenisima-clasico-frutilla-1300-g/p)
- **País / Country:** Argentina
- **Mercado / Market:** Argentina
- **Envase / Package:** 1300 g
- **Categoría / Category:** `yogurt`
- **Barcode:** No registrado / Not recorded
- **Estado / Status:** `ready` · **Verificación:** `manufacturer_website`
- **Descripción (ES):** Yogur bebible de frutilla · ¿Qué ingredientes tiene?
- **Description (EN):** Strawberry drinkable yogurt · What's inside?

**Ingredientes declarados / Declared ingredients**

Leche parcialmente descremada pasteurizada, solución de sacarosa, gelatina, cultivos lácticos, cultivos probióticos (Lactobacillus casei DN-114 001, Bifidobacterium lactis DN-173 010), vitaminas A, D y B12, estabilizante (pectina extraída de cítricos), aromas, cúrcuma (INS 100i) carmín. CONTIENE LECHE.

**Respuestas aceptadas / Accepted answers (12)**

| Español | English | Alias / Aliases |
|---|---|---|
| leche parcialmente descremada pasteurizada | pasteurized semi-skimmed milk | leche parcialmente descremada pasteurizada, pasteurized semi-skimmed milk |
| solución de sacarosa | sucrose solution | solución de sacarosa, sucrose solution |
| gelatina | gelatin | gelatina, gelatin |
| cultivos lácticos | lactic cultures | cultivos lácticos, lactic cultures |
| Lactobacillus casei | Lactobacillus casei | Lactobacillus casei |
| Bifidobacterium lactis | Bifidobacterium lactis | Bifidobacterium lactis |
| vitamina A | vitamin A | vitamina A, vitamin A |
| vitamina D | vitamin D | vitamina D, vitamin D |
| vitamina B12 | vitamin B12 | vitamina B12, vitamin B12 |
| pectina | pectin | pectina, pectin |
| aromas | flavourings | aromas, flavourings |
| carmín | carmine | carmín, carmine |

**Fuente / Source:** [La Serenísima Nutrición](https://laserenisimanutricion.com.ar/productos/yogures/bebibles/frutilla-1300g/)  
**Tipo / Type:** `manufacturer_website`  
**Alcance / Supports:** Ingredient statement for drinkable strawberry yogurt 1300 g.

---

### Galletitas Toddy Clásicas Chocolate / Galletitas Toddy Clásicas Chocolate

- **ID:** `toddy-galletitas-chocolate-ar-126g`
- **Foto real / Real photo:** [Ver envase / View package](https://jumboargentina.vtexassets.com/arquivos/ids/549702/Galletitas-Toddy-Chips-De-Chocolate-126-Gr-1-541589.jpg?v=637051080881430000) · [Fuente / Source](https://www.disco.com.ar/galletitas-chips-de-chocolate-126-gr-toddy-2/p)
- **País / Country:** Argentina
- **Mercado / Market:** Argentina
- **Envase / Package:** 126 g
- **Categoría / Category:** `chocolate_cookies`
- **Barcode:** No registrado / Not recorded
- **Estado / Status:** `ready` · **Verificación:** `retailer_label_transcription`
- **Descripción (ES):** Galletitas Toddy de chocolate · Adiviná los ingredientes.
- **Description (EN):** Chocolate cookies with chips · Guess the ingredients.

**Ingredientes declarados / Declared ingredients**

Harina de trigo enriquecida (hierro, ácido fólico, vitamina B1, vitamina B2, niacina), azúcar, aceite vegetal hidrogenado, cacao en polvo, emulsionante INS 442, aromatizante/saborizante, aceite de girasol, suero de leche, harina de avena, jarabe de maíz de alta fructosa, sal, leudantes químicos (bicarbonato de amonio, bicarbonato de sodio, fosfato tricálcico), emulsionante lecitina de soja, aromatizante artificial vainillina.

**Respuestas aceptadas / Accepted answers (21)**

| Español | English | Alias / Aliases |
|---|---|---|
| harina de trigo enriquecida | enriched wheat flour | harina de trigo enriquecida, enriched wheat flour |
| hierro | iron | hierro, iron |
| ácido fólico | folic acid | ácido fólico, folic acid |
| vitamina B1 | vitamin B1 | vitamina B1, vitamin B1 |
| vitamina B2 | vitamin B2 | vitamina B2, vitamin B2 |
| niacina | niacin | niacina, niacin |
| azúcar | sugar | azúcar, sugar |
| aceite vegetal hidrogenado | hydrogenated vegetable oil | aceite vegetal hidrogenado, hydrogenated vegetable oil |
| cacao en polvo | cocoa powder | cacao en polvo, cocoa powder |
| emulsionante INS 442 | emulsifier INS 442 | emulsionante INS 442, emulsifier INS 442 |
| aromatizante | flavouring | aromatizante, flavouring |
| aceite de girasol | sunflower oil | aceite de girasol, sunflower oil |
| suero de leche | whey | suero de leche, whey |
| harina de avena | oat flour | harina de avena, oat flour |
| jarabe de maíz de alta fructosa | high-fructose corn syrup | jarabe de maíz de alta fructosa, high-fructose corn syrup |
| sal | salt | sal, salt |
| bicarbonato de amonio | ammonium bicarbonate | bicarbonato de amonio, ammonium bicarbonate |
| bicarbonato de sodio | sodium bicarbonate | bicarbonato de sodio, sodium bicarbonate |
| fosfato tricálcico | tricalcium phosphate | fosfato tricálcico, tricalcium phosphate |
| lecitina de soja | soy lecithin | lecitina de soja, soy lecithin |
| vainillina | vanillin | vainillina, vanillin |

**Fuente / Source:** [Jumbo Argentina](https://www.jumbo.com.ar/galletitas-chips-de-chocolate-126-gr-toddy-2/p)  
**Tipo / Type:** `retailer_label_transcription`  
**Alcance / Supports:** Ingredient statement for Toddy chocolate cookies 126 g.

---

### Galletitas Maná con Leche / Galletitas Maná con Leche

- **ID:** `mana-con-leche-ar-136g`
- **Foto real / Real photo:** [Ver envase / View package](https://atomoconviene.com/atomo-ecommerce/66258-large_default/galletas-dulces-mana-con-leche-136-grs-.jpg) · [Fuente / Source](https://atomoconviene.com/atomo-ecommerce/28934-galletas-dulces-mana-con-leche-136-grs--7790040137813.html)
- **País / Country:** Argentina
- **Mercado / Market:** Argentina
- **Envase / Package:** 136 g
- **Categoría / Category:** `plain_cookies`
- **Barcode:** No registrado / Not recorded
- **Estado / Status:** `ready` · **Verificación:** `retailer_label_transcription`
- **Descripción (ES):** Galletitas con leche · ¿Podés nombrar cada ingrediente?
- **Description (EN):** Milk cookies · Can you name every ingredient?

**Ingredientes declarados / Declared ingredients**

Harina de trigo, hierro, ácido fólico, tiamina, riboflavina, niacina, azúcar, aceite de girasol alto oleico, jarabe de maíz de alta fructosa, leche descremada en polvo (3%), sal, almidón, bicarbonato de amonio, bicarbonato de sodio, mono y diglicéridos de ácidos grasos, ésteres de ácidos grasos con poliglicerol, sales de ácidos grasos con potasio, lecitina de soja, metabisulfito de sodio, vainillina, aroma leche, aroma dulce de leche.

**Respuestas aceptadas / Accepted answers (22)**

| Español | English | Alias / Aliases |
|---|---|---|
| harina de trigo | wheat flour | harina de trigo, wheat flour |
| hierro | iron | hierro, iron |
| ácido fólico | folic acid | ácido fólico, folic acid |
| tiamina | thiamine | tiamina, thiamine |
| riboflavina | riboflavin | riboflavina, riboflavin |
| niacina | niacin | niacina, niacin |
| azúcar | sugar | azúcar, sugar |
| aceite de girasol alto oleico | high-oleic sunflower oil | aceite de girasol alto oleico, high-oleic sunflower oil |
| jarabe de maíz de alta fructosa | high-fructose corn syrup | jarabe de maíz de alta fructosa, high-fructose corn syrup |
| leche descremada en polvo | skimmed milk powder | leche descremada en polvo, skimmed milk powder |
| sal | salt | sal, salt |
| almidón | starch | almidón, starch |
| bicarbonato de amonio | ammonium bicarbonate | bicarbonato de amonio, ammonium bicarbonate |
| bicarbonato de sodio | sodium bicarbonate | bicarbonato de sodio, sodium bicarbonate |
| mono y diglicéridos de ácidos grasos | mono- and diglycerides of fatty acids | mono y diglicéridos de ácidos grasos, mono- and diglycerides of fatty acids |
| ésteres de ácidos grasos con poliglicerol | polyglycerol esters of fatty acids | ésteres de ácidos grasos con poliglicerol, polyglycerol esters of fatty acids |
| sales de ácidos grasos con potasio | potassium salts of fatty acids | sales de ácidos grasos con potasio, potassium salts of fatty acids |
| lecitina de soja | soy lecithin | lecitina de soja, soy lecithin |
| metabisulfito de sodio | sodium metabisulfite | metabisulfito de sodio, sodium metabisulfite |
| vainillina | vanillin | vainillina, vanillin |
| aroma leche | milk flavouring | aroma leche, milk flavouring |
| aroma dulce de leche | dulce de leche flavouring | aroma dulce de leche, dulce de leche flavouring |

**Fuente / Source:** [Jumbo Argentina](https://www.jumbo.com.ar/galletitas-mana-con-leche-136g/p)  
**Tipo / Type:** `retailer_label_transcription`  
**Alcance / Supports:** Ingredient statement for Maná con leche 136 g.

---

### Chocolate Milka con Leche / Chocolate Milka con Leche

- **ID:** `milka-chocolate-leche-55g-ar`
- **Foto real / Real photo:** [Ver envase / View package](https://f.fcdn.app/imgs/f94787/universobinario.com/ubinuy/1887/original/catalogo/7622210745224-001_1/1500-1500/tableta-de-chocolate-milka-de-leche-55g-001.jpg) · [Fuente / Source](https://universobinario.com/catalogo/tableta-de-chocolate-milka-de-leche-55g_7622210745224_001)
- **Marca / Brand:** Milka
- **País / Country:** Brasil
- **Mercado / Market:** Argentina
- **Envase / Package:** 55 g
- **Categoría / Category:** `milk_chocolate`
- **Barcode:** No registrado / Not recorded
- **Estado / Status:** `ready` · **Verificación:** `retailer_label_transcription`
- **Descripción (ES):** Chocolate con leche · ¿Podés adivinar sus ingredientes?
- **Description (EN):** Milk chocolate · Can you guess its ingredients?

**Ingredientes declarados / Declared ingredients**

Azúcar, manteca de cacao, leche entera en polvo, pasta de cacao, suero de leche en polvo, grasa anhidra de leche, emulsionante lecitina de soja, emulsionante polirricinoleato de poliglicerol, aromatizante idéntico al natural vainillina, leche, derivados de soja.

**Respuestas aceptadas / Accepted answers (11)**

| Español | English | Alias / Aliases |
|---|---|---|
| azúcar | sugar | azúcar, sugar |
| manteca de cacao | cocoa butter | manteca de cacao, cocoa butter |
| leche entera en polvo | whole milk powder | leche entera en polvo, whole milk powder |
| pasta de cacao | cocoa mass | pasta de cacao, cocoa mass, cocoa liquor |
| suero de leche en polvo | whey powder | suero de leche en polvo, whey powder |
| grasa anhidra de leche | anhydrous milk fat | grasa anhidra de leche, anhydrous milk fat |
| lecitina de soja | soy lecithin | lecitina de soja, soy lecithin, soya lecithin |
| polirricinoleato de poliglicerol | polyglycerol polyricinoleate | polirricinoleato de poliglicerol, polyglycerol polyricinoleate, PGPR |
| vainillina | vanillin | vainillina, vanillin |
| leche | milk | leche, milk |
| derivados de soja | soy derivatives | derivados de soja, soy derivatives, soya derivatives |

**Fuente / Source:** [Jumbo Argentina](https://www.jumbo.com.ar/chocolate-milka-con-leche-55-gr/p)  
**Tipo / Type:** `retailer_label_transcription`  
**Alcance / Supports:** Ingredient declaration for Milka milk chocolate 55 g; page states country of origin Brazil.

---

### Galletitas Terrabusi Variedad Chocolate / Galletitas Terrabusi Variedad Chocolate

- **ID:** `terrabusi-variedad-chocolate-310g`
- **Foto real / Real photo:** [Ver envase / View package](https://perobienargentino.com/cdn/shop/products/310chocolate_600x_62bfe6fc-e5da-4d6b-81a4-edeeb5c2f63a_1200x1200.jpg?v=1706303900) · [Fuente / Source](https://perobienargentino.com/products/galletitas-terrabusi-variedad-chocolate-310-g)
- **Marca / Brand:** Terrabusi
- **País / Country:** Argentina
- **Mercado / Market:** Argentina
- **Envase / Package:** 310 g
- **Categoría / Category:** `assorted_cookies`
- **Barcode:** No registrado / Not recorded
- **Estado / Status:** `ready` · **Verificación:** `retailer_label_transcription`
- **Descripción (ES):** Galletitas surtidas · ¿Qué ingredientes reconocés?
- **Description (EN):** Assorted cookies · Which ingredients can you name?

**Ingredientes declarados / Declared ingredients**

Harina de trigo enriquecida, hierro, ácido fólico, vitamina B1, vitamina B2, niacina, azúcar, grasa vacuna refinada, jarabe de maíz de alta fructosa, harina de sorgo, almidón, cacao en polvo, aceite vegetal, sal, gelatina, colorante caramelo III, colorante carmín, colorante cúrcuma, bicarbonato de sodio, bicarbonato de amonio, fosfato monocálcico, lecitina de soja, aromatizantes, goma guar, ácido cítrico. Puede contener leche.

**Respuestas aceptadas / Accepted answers (25)**

| Español | English | Alias / Aliases |
|---|---|---|
| harina de trigo enriquecida | enriched wheat flour | harina de trigo enriquecida, enriched wheat flour, wheat flour |
| hierro | iron | hierro, iron |
| ácido fólico | folic acid | ácido fólico, folic acid |
| vitamina B1 | vitamin B1 | vitamina B1, vitamin B1, thiamine |
| vitamina B2 | vitamin B2 | vitamina B2, vitamin B2, riboflavin |
| niacina | niacin | niacina, niacin |
| azúcar | sugar | azúcar, sugar |
| grasa vacuna refinada | refined beef fat | grasa vacuna refinada, refined beef fat, beef fat |
| jarabe de maíz de alta fructosa | high-fructose corn syrup | jarabe de maíz de alta fructosa, high-fructose corn syrup, corn syrup |
| harina de sorgo | sorghum flour | harina de sorgo, sorghum flour |
| almidón | starch | almidón, starch |
| cacao en polvo | cocoa powder | cacao en polvo, cocoa powder |
| aceite vegetal | vegetable oil | aceite vegetal, vegetable oil |
| sal | salt | sal, salt |
| gelatina | gelatin | gelatina, gelatin |
| caramelo III | caramel color III | caramelo III, caramel color III, caramel colour |
| carmín | carmine | carmín, carmine |
| cúrcuma | turmeric | cúrcuma, turmeric |
| bicarbonato de sodio | sodium bicarbonate | bicarbonato de sodio, sodium bicarbonate, baking soda |
| bicarbonato de amonio | ammonium bicarbonate | bicarbonato de amonio, ammonium bicarbonate |
| fosfato monocálcico | monocalcium phosphate | fosfato monocálcico, monocalcium phosphate |
| lecitina de soja | soy lecithin | lecitina de soja, soy lecithin, soya lecithin |
| aromatizantes | flavourings | aromatizantes, flavourings, flavorings |
| goma guar | guar gum | goma guar, guar gum |
| ácido cítrico | citric acid | ácido cítrico, citric acid |

**Fuente / Source:** [Jumbo Argentina](https://www.jumbo.com.ar/galletitas-variedad-chocolate-terrabusi-310gr/p)  
**Tipo / Type:** `retailer_label_transcription`  
**Alcance / Supports:** Ingredient declaration for Terrabusi Variedad Chocolate 310 g.

---

### Alfajor Jorgito Negro / Alfajor Jorgito Negro

- **ID:** `jorgito-alfajor-choco-negro-55g`
- **Foto real / Real photo:** [Ver envase / View package](https://dcdn-us.mitiendanube.com/stores/005/091/765/products/image2025041913264298723-965f9fb99e7fd9e65317476720110422-1024-1024.webp) · [Fuente / Source](https://guiraomayorista.com.ar/productos/alfajor-jorgito-negro-6u-x-55gr/)
- **Marca / Brand:** Jorgito
- **País / Country:** Argentina
- **Mercado / Market:** Argentina
- **Envase / Package:** 55 g
- **Categoría / Category:** `chocolate_alfajor`
- **Barcode:** No registrado / Not recorded
- **Estado / Status:** `ready` · **Verificación:** `manufacturer_website`
- **Descripción (ES):** Alfajor clásico · ¿Cuántos ingredientes podés descubrir?
- **Description (EN):** Classic chocolate alfajor · How many ingredients can you find?

**Ingredientes declarados / Declared ingredients**

Dulce de leche [leche entera, azúcar, glucosa, conservante INS 202, estabilizante INS 406, regulador de acidez INS 500ii, aromatizante vainilla], harina de trigo enriquecida Ley 25.630, baño de repostería semiamargo, azúcar, grasa vacuna refinada, miel, cacao en polvo, leche entera en polvo, yema de huevo en polvo, sal, leudantes químicos INS 503ii y 500ii, emulsionante INS 471, lecitina de soja INS 322, aromatizantes/saborizantes.

**Respuestas aceptadas / Accepted answers (19)**

| Español | English | Alias / Aliases |
|---|---|---|
| leche entera | whole milk | leche entera, whole milk |
| azúcar | sugar | azúcar, sugar |
| glucosa | glucose | glucosa, glucose |
| sorbato de potasio (INS 202) | potassium sorbate | sorbato de potasio (INS 202), potassium sorbate |
| agar (INS 406) | agar | agar (INS 406), agar, agar-agar |
| bicarbonato de sodio (INS 500ii) | sodium bicarbonate | bicarbonato de sodio (INS 500ii), sodium bicarbonate, baking soda |
| aromatizante vainilla | vanilla flavouring | aromatizante vainilla, vanilla flavouring, vanilla flavoring |
| harina de trigo enriquecida | enriched wheat flour | harina de trigo enriquecida, enriched wheat flour, wheat flour |
| baño de repostería semiamargo | semi-sweet compound coating | baño de repostería semiamargo, semi-sweet compound coating, compound chocolate coating |
| grasa vacuna refinada | refined beef fat | grasa vacuna refinada, refined beef fat, beef fat |
| miel | honey | miel, honey |
| cacao en polvo | cocoa powder | cacao en polvo, cocoa powder |
| leche entera en polvo | whole milk powder | leche entera en polvo, whole milk powder |
| yema de huevo en polvo | egg yolk powder | yema de huevo en polvo, egg yolk powder |
| sal | salt | sal, salt |
| bicarbonato de amonio (INS 503ii) | ammonium bicarbonate | bicarbonato de amonio (INS 503ii), ammonium bicarbonate |
| mono y diglicéridos (INS 471) | mono- and diglycerides | mono y diglicéridos (INS 471), mono- and diglycerides |
| lecitina de soja (INS 322) | soy lecithin | lecitina de soja (INS 322), soy lecithin, soya lecithin |
| aromatizantes | flavourings | aromatizantes, flavourings, flavorings |

**Fuente / Source:** [Alfajores Jorgito](https://tiendajorgito.com.ar/producto/jorgito-choco-negro)  
**Tipo / Type:** `manufacturer_website`  
**Alcance / Supports:** Official ingredient declaration for Jorgito Negro 55 g.

---

### Alfajor Jorgito Blanco Merengue / Alfajor Jorgito Blanco Merengue

- **ID:** `jorgito-alfajor-blanco-merengue-50g`
- **Foto real / Real photo:** [Ver envase / View package](https://tiendajorgito.com.ar/media/170dbeec7049fe3935e4cdac0bf4103e.webp) · [Fuente / Source](https://tiendajorgito.com.ar/producto/jorgito-blanco)
- **País / Country:** Argentina
- **Mercado / Market:** Argentina
- **Envase / Package:** 50 g
- **Categoría / Category:** `white_alfajor`
- **Barcode:** No registrado / Not recorded
- **Estado / Status:** `ready` · **Verificación:** `manufacturer_website`
- **Descripción (ES):** Alfajor blanco con merengue · ¿Qué contiene?
- **Description (EN):** White alfajor with meringue · What's inside?

**Ingredientes declarados / Declared ingredients**

Dulce de leche [leche entera, azúcar, glucosa, conservante INS 202, estabilizante INS 406, regulador de acidez INS 500ii, aromatizante vainilla], harina de trigo enriquecida Ley 25.630, azúcar, grasa vacuna refinada, miel, cacao en polvo, leche entera en polvo, albúmina de huevo, yema de huevo en polvo, sal, leudantes químicos INS 503ii y 500ii, emulsionante INS 471, lecitina de soja INS 322, aromatizantes/saborizantes.

**Respuestas aceptadas / Accepted answers (19)**

| Español | English | Alias / Aliases |
|---|---|---|
| leche entera | whole milk | leche entera, whole milk |
| azúcar | sugar | azúcar, sugar |
| glucosa | glucose | glucosa, glucose |
| sorbato de potasio (INS 202) | potassium sorbate | sorbato de potasio (INS 202), potassium sorbate |
| agar (INS 406) | agar | agar (INS 406), agar, agar-agar |
| bicarbonato de sodio (INS 500ii) | sodium bicarbonate | bicarbonato de sodio (INS 500ii), sodium bicarbonate, baking soda |
| aromatizante vainilla | vanilla flavouring | aromatizante vainilla, vanilla flavouring, vanilla flavoring |
| harina de trigo enriquecida | enriched wheat flour | harina de trigo enriquecida, enriched wheat flour, wheat flour |
| grasa vacuna refinada | refined beef fat | grasa vacuna refinada, refined beef fat, beef fat |
| miel | honey | miel, honey |
| cacao en polvo | cocoa powder | cacao en polvo, cocoa powder |
| leche entera en polvo | whole milk powder | leche entera en polvo, whole milk powder |
| albúmina de huevo | egg albumin | albúmina de huevo, egg albumin, egg white |
| yema de huevo en polvo | egg yolk powder | yema de huevo en polvo, egg yolk powder |
| sal | salt | sal, salt |
| bicarbonato de amonio (INS 503ii) | ammonium bicarbonate | bicarbonato de amonio (INS 503ii), ammonium bicarbonate |
| mono y diglicéridos (INS 471) | mono- and diglycerides | mono y diglicéridos (INS 471), mono- and diglycerides |
| lecitina de soja (INS 322) | soy lecithin | lecitina de soja (INS 322), soy lecithin, soya lecithin |
| aromatizantes | flavourings | aromatizantes, flavourings, flavorings |

**Fuente / Source:** [Alfajores Jorgito](https://tiendajorgito.com.ar/producto/jorgito-blanco)  
**Tipo / Type:** `manufacturer_website`  
**Alcance / Supports:** Official ingredient declaration for Jorgito Blanco Merengue 50 g.

---

### Alfajor Jorgito Choco Blanco / Alfajor Jorgito Choco Blanco

- **ID:** `jorgito-alfajor-choco-blanco-55g`
- **Foto real / Real photo:** [Ver envase / View package](https://tiendajorgito.com.ar/media/d2f56f59c5a605062a03a4649b7df76c.webp) · [Fuente / Source](https://tiendajorgito.com.ar/producto/jorgito-choco-blanco)
- **País / Country:** Argentina
- **Mercado / Market:** Argentina
- **Envase / Package:** 55 g
- **Categoría / Category:** `white_chocolate_alfajor`
- **Barcode:** No registrado / Not recorded
- **Estado / Status:** `ready` · **Verificación:** `manufacturer_website`
- **Descripción (ES):** Alfajor de chocolate blanco · Adiviná sus ingredientes.
- **Description (EN):** White chocolate alfajor · Guess its ingredients.

**Ingredientes declarados / Declared ingredients**

Dulce de leche [leche entera, azúcar, glucosa, conservante INS 202, regulador de acidez INS 500ii, aromatizante], harina de trigo enriquecida Ley 25.630, baño de repostería fantasía blanco, azúcar, grasa vacuna refinada, miel, leche entera en polvo, sal, leudantes químicos INS 503ii y 500ii, emulsionante INS 471, aromatizantes/saborizantes.

**Respuestas aceptadas / Accepted answers (15)**

| Español | English | Alias / Aliases |
|---|---|---|
| leche entera | whole milk | leche entera, whole milk |
| azúcar | sugar | azúcar, sugar |
| glucosa | glucose | glucosa, glucose |
| sorbato de potasio (INS 202) | potassium sorbate | sorbato de potasio (INS 202), potassium sorbate |
| bicarbonato de sodio (INS 500ii) | sodium bicarbonate | bicarbonato de sodio (INS 500ii), sodium bicarbonate, baking soda |
| aromatizante | flavouring | aromatizante, flavouring, flavoring |
| harina de trigo enriquecida | enriched wheat flour | harina de trigo enriquecida, enriched wheat flour, wheat flour |
| baño de repostería fantasía blanco | white compound coating | baño de repostería fantasía blanco, white compound coating, white confectionery coating |
| grasa vacuna refinada | refined beef fat | grasa vacuna refinada, refined beef fat, beef fat |
| miel | honey | miel, honey |
| leche entera en polvo | whole milk powder | leche entera en polvo, whole milk powder |
| sal | salt | sal, salt |
| bicarbonato de amonio (INS 503ii) | ammonium bicarbonate | bicarbonato de amonio (INS 503ii), ammonium bicarbonate |
| mono y diglicéridos (INS 471) | mono- and diglycerides | mono y diglicéridos (INS 471), mono- and diglycerides |
| aromatizantes/saborizantes | flavourings | aromatizantes/saborizantes, flavourings, flavorings |

**Fuente / Source:** [Alfajores Jorgito](https://tiendajorgito.com.ar/producto/jorgito-choco-blanco)  
**Tipo / Type:** `manufacturer_website`  
**Alcance / Supports:** Official ingredient declaration for Jorgito Choco Blanco 55 g.

---

### Alfajor Jorgelín Blanco / Alfajor Jorgelín Blanco

- **ID:** `jorgelin-blanco-85g`
- **Foto real / Real photo:** [Ver envase / View package](https://www.clansrl.com.ar/web/image/product.template/84/image_1024?unique=208f864) · [Fuente / Source](https://www.clansrl.com.ar/shop/13650-alf-jorgelin-blanco-art-25-x24-84)
- **Marca / Brand:** Jorgito
- **País / Country:** Argentina
- **Mercado / Market:** Argentina
- **Envase / Package:** 85 g
- **Categoría / Category:** `white_alfajor`
- **Barcode:** No registrado / Not recorded
- **Estado / Status:** `ready` · **Verificación:** `manufacturer_website`
- **Descripción (ES):** Alfajor triple blanco · ¿Podés identificar todos sus ingredientes?
- **Description (EN):** Triple white alfajor · Can you identify all its ingredients?

**Ingredientes declarados / Declared ingredients**

Dulce de leche [leche entera, azúcar, glucosa, conservante INS 202, regulador de acidez INS 500ii, aromatizante], harina de trigo enriquecida Ley 25.630, baño de repostería fantasía blanco, azúcar, grasa vacuna refinada, miel, leche entera en polvo, sal, leudantes químicos INS 503ii y 500ii, emulsionante INS 471, aromatizantes/saborizantes.

**Respuestas aceptadas / Accepted answers (15)**

| Español | English | Alias / Aliases |
|---|---|---|
| leche entera | whole milk | leche entera, whole milk |
| azúcar | sugar | azúcar, sugar |
| glucosa | glucose | glucosa, glucose |
| sorbato de potasio (INS 202) | potassium sorbate | sorbato de potasio (INS 202), potassium sorbate |
| bicarbonato de sodio (INS 500ii) | sodium bicarbonate | bicarbonato de sodio (INS 500ii), sodium bicarbonate, baking soda |
| aromatizante | flavouring | aromatizante, flavouring, flavoring |
| harina de trigo enriquecida | enriched wheat flour | harina de trigo enriquecida, enriched wheat flour, wheat flour |
| baño de repostería fantasía blanco | white compound coating | baño de repostería fantasía blanco, white compound coating, white confectionery coating |
| grasa vacuna refinada | refined beef fat | grasa vacuna refinada, refined beef fat, beef fat |
| miel | honey | miel, honey |
| leche entera en polvo | whole milk powder | leche entera en polvo, whole milk powder |
| sal | salt | sal, salt |
| bicarbonato de amonio (INS 503ii) | ammonium bicarbonate | bicarbonato de amonio (INS 503ii), ammonium bicarbonate |
| mono y diglicéridos (INS 471) | mono- and diglycerides | mono y diglicéridos (INS 471), mono- and diglycerides |
| aromatizantes/saborizantes | flavourings | aromatizantes/saborizantes, flavourings, flavorings |

**Fuente / Source:** [Alfajores Jorgito](https://tiendajorgito.com.ar/producto/jorgelin-blanco)  
**Tipo / Type:** `manufacturer_website`  
**Alcance / Supports:** Official ingredient declaration for Jorgelín Blanco 85 g.

---

### Fanta Naranja / Fanta Naranja

- **ID:** `fanta-naranja-ar`
- **Foto real / Real photo:** [Ver envase / View package](https://www.coca-cola.com/content/dam/onexp/ar/es/fanta/fantanaranja1198x1198.jpg) · [Fuente / Source](https://www.coca-cola.com/ar/es/brands/fanta/productos)
- **Marca / Brand:** Fanta · Coca-Cola
- **País / Country:** Argentina
- **Mercado / Market:** Argentina
- **Envase / Package:** Presentación argentina; tamaño no especificado
- **Categoría / Category:** `orange_soda`
- **Barcode:** No registrado / Not recorded
- **Estado / Status:** `ready` · **Verificación:** `manufacturer_website`
- **Descripción (ES):** Gaseosa de naranja · ¿Qué tiene la fórmula?
- **Description (EN):** Orange soda · What's in the formula?

**Ingredientes declarados / Declared ingredients**

Agua carbonatada, azúcares, aromatizantes, ácido cítrico (INS 330), citrato de sodio (INS 331iii), benzoato de sodio, EDTA cálcico disódico (INS 385), colorantes INS 110 y 123.

**Respuestas aceptadas / Accepted answers (9)**

| Español | English | Alias / Aliases |
|---|---|---|
| agua carbonatada | carbonated water | agua carbonatada, carbonated water |
| azúcares | sugars | azúcares, sugars, sugar |
| aromatizantes | flavourings | aromatizantes, flavourings, flavorings |
| ácido cítrico (INS 330) | citric acid | ácido cítrico (INS 330), citric acid |
| citrato de sodio (INS 331iii) | sodium citrate | citrato de sodio (INS 331iii), sodium citrate |
| benzoato de sodio | sodium benzoate | benzoato de sodio, sodium benzoate |
| EDTA cálcico disódico (INS 385) | calcium disodium EDTA | EDTA cálcico disódico (INS 385), calcium disodium EDTA, disodium calcium EDTA |
| colorante amarillo ocaso (INS 110) | sunset yellow FCF | colorante amarillo ocaso (INS 110), sunset yellow FCF, sunset yellow |
| colorante rojo cochinilla A (INS 123) | amaranth dye | colorante rojo cochinilla A (INS 123), amaranth dye, amaranth |

**Fuente / Source:** [Coca-Cola Argentina](https://www.coca-cola.com/ar/es/brands/fanta/productos)  
**Tipo / Type:** `manufacturer_website`  
**Alcance / Supports:** Official ingredient declaration for Fanta Naranja.

---

### Fanta Pomelo / Fanta Pomelo

- **ID:** `fanta-pomelo-ar`
- **Foto real / Real photo:** [Ver envase / View package](https://jumboargentina.vtexassets.com/arquivos/ids/881691/Gaseosa-Pomelo-600-Ml-Fanta-2-1040316.jpg?v=638919057906670000) · [Fuente / Source](https://www.jumbo.com.ar/gaseosa-pomelo-x-600-ml-fanta/p)
- **Marca / Brand:** Fanta · Coca-Cola
- **País / Country:** Argentina
- **Mercado / Market:** Argentina
- **Envase / Package:** Presentación argentina; tamaño no especificado
- **Categoría / Category:** `grapefruit_soda`
- **Barcode:** No registrado / Not recorded
- **Estado / Status:** `ready` · **Verificación:** `manufacturer_website`
- **Descripción (ES):** Gaseosa de pomelo · Descubrí sus ingredientes.
- **Description (EN):** Grapefruit soda · Discover its ingredients.

**Ingredientes declarados / Declared ingredients**

Agua carbonatada, azúcar o JMAF, ácido cítrico (INS 330), aromatizantes, secuestrante INS 452i, conservante benzoato de sodio, colorante tartrazina (INS 102).

**Respuestas aceptadas / Accepted answers (7)**

| Español | English | Alias / Aliases |
|---|---|---|
| agua carbonatada | carbonated water | agua carbonatada, carbonated water |
| azúcar o jarabe de maíz de alta fructosa | sugar or high-fructose corn syrup | azúcar o jarabe de maíz de alta fructosa, sugar or high-fructose corn syrup, sugar, high fructose corn syrup |
| ácido cítrico (INS 330) | citric acid | ácido cítrico (INS 330), citric acid |
| aromatizantes | flavourings | aromatizantes, flavourings, flavorings |
| polifosfato de sodio (INS 452i) | sodium polyphosphate | polifosfato de sodio (INS 452i), sodium polyphosphate |
| benzoato de sodio | sodium benzoate | benzoato de sodio, sodium benzoate |
| tartrazina (INS 102) | tartrazine | tartrazina (INS 102), tartrazine |

**Fuente / Source:** [Coca-Cola Argentina](https://www.coca-cola.com/ar/es/brands/fanta/productos)  
**Tipo / Type:** `manufacturer_website`  
**Alcance / Supports:** Official ingredient declaration for Fanta Pomelo.

---

### Baggio Pronto Naranja / Baggio Pronto Naranja

- **ID:** `baggio-pronto-naranja-200ml`
- **Foto real / Real photo:** [Ver envase / View package](https://acdn-us.mitiendanube.com/stores/006/912/754/products/d_735552-mla94035179792_102025-b-b8bf32a6e12e68b2d817623860729078-1024-1024.webp) · [Fuente / Source](https://www.lagolosineria.com.ar/productos/jugo-baggio-200ml-sin-azucar-ag-x18u-barata-la-golosineria/)
- **Marca / Brand:** Baggio
- **País / Country:** Argentina
- **Mercado / Market:** Argentina
- **Envase / Package:** 200 ml
- **Categoría / Category:** `orange_juice_drink`
- **Barcode:** No registrado / Not recorded
- **Estado / Status:** `ready` · **Verificación:** `retailer_label_transcription`
- **Descripción (ES):** Jugo listo de naranja · ¿Qué ingredientes tiene?
- **Description (EN):** Ready-to-drink orange juice · What's inside?

**Ingredientes declarados / Declared ingredients**

Agua, jugo concentrado de naranja, azúcar, jarabe de maíz de alta fructosa, vitamina C, acidulante ácido cítrico, aromatizante, antioxidante eritorbato de sodio, antioxidante ácido ascórbico.

**Respuestas aceptadas / Accepted answers (9)**

| Español | English | Alias / Aliases |
|---|---|---|
| agua | water | agua, water |
| jugo concentrado de naranja | orange juice concentrate | jugo concentrado de naranja, orange juice concentrate |
| azúcar | sugar | azúcar, sugar |
| jarabe de maíz de alta fructosa | high-fructose corn syrup | jarabe de maíz de alta fructosa, high-fructose corn syrup, corn syrup |
| vitamina C | vitamin C | vitamina C, vitamin C, ascorbic acid |
| ácido cítrico | citric acid | ácido cítrico, citric acid |
| aromatizante | flavouring | aromatizante, flavouring, flavoring |
| eritorbato de sodio | sodium erythorbate | eritorbato de sodio, sodium erythorbate |
| ácido ascórbico | ascorbic acid | ácido ascórbico, ascorbic acid, vitamin C |

**Fuente / Source:** [Jumbo Argentina](https://www.jumbo.com.ar/jugo-listo-baggio-pronto-naranja-200cc/p)  
**Tipo / Type:** `retailer_label_transcription`  
**Alcance / Supports:** Ingredient declaration for Baggio Pronto Naranja 200 ml.

---

### Mantecol Clásico / Mantecol Clásico

- **ID:** `mantecol-clasico-111g`
- **Foto real / Real photo:** [Ver envase / View package](https://www.delimart.com.ar/user-content/53c37205-e740-4515-851d-599fffd104a2.jpg) · [Fuente / Source](https://www.delimart.com.ar/postre_tradicional_mantecol_111_gr)
- **País / Country:** Argentina
- **Mercado / Market:** Argentina
- **Envase / Package:** 111 g
- **Categoría / Category:** `peanut_nougat`
- **Barcode:** No registrado / Not recorded
- **Estado / Status:** `ready` · **Verificación:** `retailer_label_transcription`
- **Descripción (ES):** Turrón de maní · ¿Cuántos ingredientes encontrás?
- **Description (EN):** Peanut nougat · How many ingredients can you find?

**Ingredientes declarados / Declared ingredients**

Pasta de maní, jarabe de glucosa, azúcar, aceite de palma, claras de huevo, aceite de soja, cacao en polvo, emulsionante mono y diglicéridos de ácidos grasos, regulador de acidez ácido cítrico, aromatizante idéntico al natural vainillina. Contiene derivados de maní, huevo y soja. Puede contener leche, almendra, castaña de cajú y avellana.

**Respuestas aceptadas / Accepted answers (10)**

| Español | English | Alias / Aliases |
|---|---|---|
| pasta de maní | peanut paste | pasta de maní, peanut paste, peanut butter |
| jarabe de glucosa | glucose syrup | jarabe de glucosa, glucose syrup |
| azúcar | sugar | azúcar, sugar |
| aceite de palma | palm oil | aceite de palma, palm oil |
| claras de huevo | egg whites | claras de huevo, egg whites, egg white |
| aceite de soja | soybean oil | aceite de soja, soybean oil, soya oil |
| cacao en polvo | cocoa powder | cacao en polvo, cocoa powder |
| mono y diglicéridos de ácidos grasos | mono- and diglycerides of fatty acids | mono y diglicéridos de ácidos grasos, mono- and diglycerides of fatty acids, mono and diglycerides |
| ácido cítrico | citric acid | ácido cítrico, citric acid |
| vainillina | vanillin | vainillina, vanillin |

**Fuente / Source:** [Jumbo Argentina](https://www.jumbo.com.ar/postre-de-mani-x-111-gr-mantecol/p)  
**Tipo / Type:** `retailer_label_transcription`  
**Alcance / Supports:** Ingredient declaration for Mantecol clásico 111 g; listing identifies Argentine origin.

---


### Galletitas Pepitos / Galletitas Pepitos

- **ID:** `pepitos-chocolate-ar-119g`
- **Foto real / Real photo:** [Ver envase / View package](https://f.fcdn.app/imgs/c87e7d/universobinario.com/ubinuy/31d8/original/catalogo/7622201735906-001_1/1500-1500/galletas-pepitos-754-con-chispas-de-chocolate-119gr-azul.jpg) · [Fuente / Source](https://universobinario.com/catalogo/galletas-pepitos-754-con-chispas-de-chocolate-119gr-azul_7622201735906_001)
- **Marca / Brand:** Pepitos · Mondelez
- **País / Country:** Argentina
- **Mercado / Market:** Argentina
- **Envase / Package:** 119 g
- **Categoría / Category:** `chocolate_cookies`
- **Barcode:** No registrado / Not recorded
- **Estado / Status:** `ready` · **Verificación:** `retailer_label_transcription`
- **Descripción (ES):** Galletitas dulces con perlitas a base de cacao · ¿Qué ingredientes tienen?
- **Description (EN):** Sweet cookies with cocoa-based chips · Can you guess what's inside?

**Ingredientes declarados / Declared ingredients**

Harina de trigo enriquecida, azúcar, aceite vegetal, cacao en polvo, dextrosa, licor de cacao, manteca de cacao, leudantes químicos (bicarbonato de amonio, bicarbonato de sodio, fosfato monocálcico), emulsionantes (sodio estearoil lactilato, lecitina de soja, polirricinoleato de poliglicerol, sorbitán triestearato, lecitina de girasol), aromatizantes artificiales de vainilla y almendra, colorante betacaroteno. Puede contener leche.

**Respuestas aceptadas / Accepted answers (18)**

| Español | English | Alias / Aliases |
|---|---|---|
| harina de trigo enriquecida | enriched wheat flour | harina de trigo enriquecida, enriched wheat flour, harina de trigo, wheat flour |
| azúcar | sugar | azúcar, sugar |
| aceite vegetal | vegetable oil | aceite vegetal, vegetable oil |
| cacao en polvo | cocoa powder | cacao en polvo, cocoa powder |
| dextrosa | dextrose | dextrosa, dextrose |
| licor de cacao | chocolate liquor | licor de cacao, chocolate liquor, cocoa liquor |
| manteca de cacao | cocoa butter | manteca de cacao, cocoa butter |
| bicarbonato de amonio | ammonium bicarbonate | bicarbonato de amonio, ammonium bicarbonate, INS 503 |
| bicarbonato de sodio | sodium bicarbonate | bicarbonato de sodio, sodium bicarbonate, baking soda, INS 500 |
| fosfato monocálcico | monocalcium phosphate | fosfato monocálcico, monocalcium phosphate, INS 341 |
| sodio estearoil lactilato | sodium stearoyl lactylate | sodio estearoil lactilato, sodium stearoyl lactylate, SSL |
| lecitina de soja | soy lecithin | lecitina de soja, soy lecithin |
| polirricinoleato de poliglicerol | polyglycerol polyricinoleate | polirricinoleato de poliglicerol, polyglycerol polyricinoleate, PGPR, INS 476 |
| sorbitán triestearato | sorbitan tristearate | sorbitán triestearato, sorbitan tristearate, INS 492 |
| lecitina de girasol | sunflower lecithin | lecitina de girasol, sunflower lecithin |
| aromatizante de vainilla | vanilla flavoring | aromatizante de vainilla, vanilla flavoring, vainilla, vanilla |
| aromatizante de almendra | almond flavoring | aromatizante de almendra, almond flavoring, almendra, almond |
| betacaroteno | beta-carotene | betacaroteno, beta-carotene, INS 160a |

**Fuente / Source:** [Jumbo Argentina](https://www.jumbo.com.ar/galletitas-pepitos-119g/p)  
**Tipo / Type:** `retailer_label_transcription`  
**Alcance / Supports:** Ingredient declaration for Pepitos 119 g; listing identifies Argentine origin.



### Alfajor Havanna Semilia / Alfajor Havanna Semilia

- **ID:** `havanna-semilia-ar-55g`
- **Foto real / Real photo:** [Ver envase / View package](https://jumboargentina.vtexassets.com/arquivos/ids/625950-800-600?aspect=true&height=600&v=637533674717830000&width=800) · [Fuente / Source](https://www.disco.com.ar/alfajor-semilia-sin-tacc-havanna-4u/p)
- **País / Country:** Argentina
- **Mercado / Market:** Argentina
- **Envase / Package:** Pack x4 (peso unitario no especificado en la fuente)
- **Categoría / Category:** `chocolate_alfajor`
- **Barcode:** No registrado / Not recorded
- **Estado / Status:** `ready` · **Verificación:** `retailer_label_transcription`
- **Descripción (ES):** Alfajor sin TACC con semillas, dulce de leche y chocolate 70% cacao.
- **Description (EN):** Gluten-free alfajor with seeds, dulce de leche and 70% cocoa chocolate.

**Ingredientes declarados / Declared ingredients**

Leche descremada, azúcar, glucosa, bicarbonato de sodio, sorbato de potasio, vainillina, chocolate amargo, lecitina de girasol, estabilizante INS 476, harina de arroz, azúcar mascabo, margarina, semillas de chía, sésamo blanco y girasol, fécula de papa, almidón de maíz, suero de leche, semillas de amapola y lino, fibra de celulosa, huevo entero en polvo, quinoa inflada, jarabe de maíz, fécula de mandioca, miel, yema de huevo en polvo, cacao en polvo, sal, sorbitol, bicarbonato de amonio, esencia natural de limón y esencia de galletita.

**Respuestas aceptadas / Accepted answers (33)**

| Español | English | Alias / Aliases |
|---|---|---|
| leche descremada | skim milk | leche descremada, skim milk |
| azúcar | sugar | azúcar, sugar |
| glucosa | glucose | glucosa, glucose |
| bicarbonato de sodio | sodium bicarbonate | bicarbonato de sodio, sodium bicarbonate, INS 500ii |
| sorbato de potasio | potassium sorbate | sorbato de potasio, potassium sorbate, INS 202 |
| vainillina | vanillin | vainillina, vanillin |
| chocolate amargo | dark chocolate | chocolate amargo, dark chocolate |
| lecitina de girasol | sunflower lecithin | lecitina de girasol, sunflower lecithin, INS 322 |
| polirricinoleato de poliglicerol | polyglycerol polyricinoleate | polirricinoleato de poliglicerol, polyglycerol polyricinoleate, PGPR, INS 476 |
| harina de arroz | rice flour | harina de arroz, rice flour |
| azúcar mascabo | muscovado sugar | azúcar mascabo, muscovado sugar |
| margarina | margarine | margarina, margarine |
| semillas de chía | chia seeds | semillas de chía, chia seeds, chía |
| semillas de sésamo | sesame seeds | semillas de sésamo, sesame seeds, sésamo, sesame |
| semillas de girasol | sunflower seeds | semillas de girasol, sunflower seeds |
| fécula de papa | potato starch | fécula de papa, potato starch |
| almidón de maíz | corn starch | almidón de maíz, corn starch, maize starch |
| suero de leche | whey | suero de leche, whey |
| semillas de amapola | poppy seeds | semillas de amapola, poppy seeds, amapola |
| fibra de celulosa | cellulose fiber | fibra de celulosa, cellulose fiber |
| huevo entero en polvo | whole egg powder | huevo entero en polvo, whole egg powder |
| semillas de lino | flax seeds | semillas de lino, flax seeds, lino, linseed |
| quinoa inflada | puffed quinoa | quinoa inflada, puffed quinoa |
| jarabe de maíz | corn syrup | jarabe de maíz, corn syrup |
| fécula de mandioca | cassava starch | fécula de mandioca, cassava starch, tapioca starch |
| miel | honey | miel, honey |
| yema de huevo en polvo | egg yolk powder | yema de huevo en polvo, egg yolk powder |
| cacao en polvo | cocoa powder | cacao en polvo, cocoa powder |
| sal | salt | sal, salt |
| sorbitol | sorbitol | sorbitol, INS 420 |
| bicarbonato de amonio | ammonium bicarbonate | bicarbonato de amonio, ammonium bicarbonate, INS 503ii |
| esencia natural de limón | natural lemon flavor | esencia natural de limón, natural lemon flavor, limón, lemon |
| esencia de galletita | cookie flavoring | esencia de galletita, cookie flavoring, galletita, biscuit flavor |

**Fuente / Source:** [Jumbo Argentina](https://www.jumbo.com.ar/alfajor-semilia-sin-tacc-havanna-4u/p)  
**Tipo / Type:** `retailer_label_transcription`  
**Alcance / Supports:** Ingredient declaration for Havanna Semilia; listing identifies Argentine origin.



### Gallo Snacks Queso / Gallo Snacks Queso

- **ID:** `gallo-snacks-queso-ar-50g`
- **Foto real / Real photo:** [Ver envase / View package](https://jumboargentina.vtexassets.com/arquivos/ids/791507/Chips-Gallo-Snacks-Arroz-Queso-X50g-1-986996.jpg?v=638288338176470000) · [Fuente / Source](https://www.jumbo.com.ar/chips-arroz-queso-gallo-50-gr/p)
- **País / Country:** Argentina
- **Mercado / Market:** Argentina
- **Envase / Package:** 50 g
- **Categoría / Category:** `rice_crackers`
- **Barcode:** No registrado / Not recorded
- **Estado / Status:** `ready` · **Verificación:** `retailer_label_transcription`
- **Descripción (ES):** Snack crocante de arroz sabor queso.
- **Description (EN):** Crunchy rice snack with cheese flavor.

**Ingredientes declarados / Declared ingredients**

Harina de arroz, grasa vacuna refinada, almidón de maíz, leche descremada, sal, azúcar, aceite de girasol, aromatizante/saborizante, colorantes betacaroteno y amarillo ocaso, emulsionantes ésteres de ácidos grasos con poliglicerol, mono y diglicéridos de ácidos grasos y polioxietilen sorbitán monooleato, antioxidantes tocoferoles concentrados y ter butil hidroquinona. Puede contener derivados de soja.

**Respuestas aceptadas / Accepted answers (15)**

| Español | English | Alias / Aliases |
|---|---|---|
| harina de arroz | rice flour | harina de arroz, rice flour |
| grasa vacuna refinada | refined beef fat | grasa vacuna refinada, refined beef fat, beef fat |
| almidón de maíz | corn starch | almidón de maíz, corn starch, maize starch |
| leche descremada | skim milk | leche descremada, skim milk |
| sal | salt | sal, salt |
| azúcar | sugar | azúcar, sugar |
| aceite de girasol | sunflower oil | aceite de girasol, sunflower oil |
| aromatizante/saborizante | flavoring | aromatizante/saborizante, flavoring, aromatizante, saborizante, flavor |
| betacaroteno | beta-carotene | betacaroteno, beta-carotene, INS 160a |
| amarillo ocaso | sunset yellow | amarillo ocaso, sunset yellow, Yellow 6, INS 110 |
| ésteres de ácidos grasos con poliglicerol | polyglycerol esters of fatty acids | ésteres de ácidos grasos con poliglicerol, polyglycerol esters of fatty acids |
| mono y diglicéridos de ácidos grasos | mono- and diglycerides of fatty acids | mono y diglicéridos de ácidos grasos, mono- and diglycerides of fatty acids, mono y diglicéridos |
| polioxietilen sorbitán monooleato | polysorbate 80 | polioxietilen sorbitán monooleato, polysorbate 80, INS 433 |
| tocoferoles concentrados | mixed tocopherols | tocoferoles concentrados, mixed tocopherols, tocoferoles, tocopherols |
| ter butil hidroquinona | tertiary butylhydroquinone | ter butil hidroquinona, tertiary butylhydroquinone, TBHQ, INS 319 |

**Fuente / Source:** [Jumbo Argentina](https://www.jumbo.com.ar/galletitas-snacks-gallo-queso-50g/p)  
**Tipo / Type:** `retailer_label_transcription`  
**Alcance / Supports:** Ingredient declaration for Gallo rice snack cheese flavor 50 g; listing identifies Argentine origin.



### Alfajor de Maizena Cachafaz / Alfajor de Maizena Cachafaz

- **ID:** `cachafaz-alfajor-maizena-ar-456g`
- **Foto real / Real photo:** [Ver envase / View package](https://jumboargentina.vtexassets.com/arquivos/ids/829050/11840186003.jpg?v=638575999926530000) · [Fuente / Source](https://www.vea.com.ar/alfajor-de-maizena-cachafaz-456-gr/p)
- **País / Country:** Argentina
- **Mercado / Market:** Argentina
- **Envase / Package:** 456 g (caja de 6 unidades)
- **Categoría / Category:** `white_alfajor`
- **Barcode:** No registrado / Not recorded
- **Estado / Status:** `ready` · **Verificación:** `retailer_label_transcription`
- **Descripción (ES):** Alfajores de maicena con dulce de leche y coco rallado.
- **Description (EN):** Cornstarch alfajores with dulce de leche and shredded coconut.

**Ingredientes declarados / Declared ingredients**

Leche entera, azúcar, glucosa, pectina (INS 406), aroma a vainilla, bicarbonato de sodio, sorbato de potasio, harina de trigo enriquecida, aceite vegetal interesterificado, fécula, huevo en polvo, leche entera en polvo, sal, bicarbonato de amonio, fosfatos (INS 450i, INS 341i e INS 341iii), celulosa microcristalina, propionato de calcio, colorante natural, coco rallado.

**Respuestas aceptadas / Accepted answers (21)**

| Español | English | Alias / Aliases |
|---|---|---|
| leche entera | whole milk | leche entera, whole milk |
| azúcar | sugar | azúcar, sugar |
| glucosa | glucose | glucosa, glucose |
| pectina | pectin | pectina, pectin, INS 406 |
| aroma a vainilla | vanilla flavoring | aroma a vainilla, vanilla flavoring, vainilla, vanilla |
| bicarbonato de sodio | sodium bicarbonate | bicarbonato de sodio, sodium bicarbonate, INS 500ii, baking soda |
| sorbato de potasio | potassium sorbate | sorbato de potasio, potassium sorbate, INS 202 |
| harina de trigo enriquecida | enriched wheat flour | harina de trigo enriquecida, enriched wheat flour, harina de trigo, wheat flour |
| aceite vegetal interesterificado | interesterified vegetable oil | aceite vegetal interesterificado, interesterified vegetable oil |
| fécula | starch | fécula, starch |
| huevo en polvo | egg powder | huevo en polvo, egg powder |
| leche entera en polvo | whole milk powder | leche entera en polvo, whole milk powder |
| sal | salt | sal, salt |
| bicarbonato de amonio | ammonium bicarbonate | bicarbonato de amonio, ammonium bicarbonate, INS 503ii |
| pirofosfato ácido de sodio | sodium acid pyrophosphate | pirofosfato ácido de sodio, sodium acid pyrophosphate, INS 450i |
| fosfato monocálcico | monocalcium phosphate | fosfato monocálcico, monocalcium phosphate, INS 341i |
| fosfato tricálcico | tricalcium phosphate | fosfato tricálcico, tricalcium phosphate, INS 341iii |
| celulosa microcristalina | microcrystalline cellulose | celulosa microcristalina, microcrystalline cellulose, INS 460ii |
| propionato de calcio | calcium propionate | propionato de calcio, calcium propionate, INS 282 |
| cúrcuma | turmeric | cúrcuma, turmeric, curcumin, INS 100i |
| coco rallado | shredded coconut | coco rallado, shredded coconut |

**Fuente / Source:** [Jumbo Argentina](https://www.jumbo.com.ar/alfajor-de-maizena-cachafaz-456-gr/p)  
**Tipo / Type:** `retailer_label_transcription`  
**Alcance / Supports:** Ingredient declaration for Cachafaz Maizena alfajores 456 g; listing identifies Argentine origin.



### Galletitas Santa María Mechaditas / Galletitas Santa María Mechaditas

- **ID:** `santa-maria-mechaditas-ar-200g`
- **Foto real / Real photo:** [Ver envase / View package](https://acdn-us.mitiendanube.com/stores/093/780/products/galletitasdulcesmechaditosantamaria-d26606442eb02b488217505394380905-1024-1024.webp) · [Fuente / Source](https://rojasglutenfree.com/productos/galletitas-dulces-mechaditos-santa-maria/)
- **Marca / Brand:** Santa María
- **País / Country:** Argentina
- **Mercado / Market:** Argentina
- **Envase / Package:** 200 g
- **Categoría / Category:** `chocolate_cookies`
- **Barcode:** No registrado / Not recorded
- **Estado / Status:** `ready` · **Verificación:** `retailer_label_transcription`
- **Descripción (ES):** Galletitas sin gluten con chips de chocolate.
- **Description (EN):** Gluten-free cookies with chocolate chips.

**Ingredientes declarados / Declared ingredients**

Harina de arroz, azúcar, almidón de maíz, aceite vegetal, chips de chocolate, huevo, bicarbonato de sodio, fosfato monocálcico, bicarbonato de amonio, sal, goma xántica, goma guar, esencia de vainilla, tartrazina y lecitina de soja. Puede contener leche.

**Respuestas aceptadas / Accepted answers (15)**

| Español | English | Alias / Aliases |
|---|---|---|
| harina de arroz | rice flour | harina de arroz, rice flour |
| azúcar | sugar | azúcar, sugar |
| almidón de maíz | corn starch | almidón de maíz, corn starch, maize starch |
| aceite vegetal | vegetable oil | aceite vegetal, vegetable oil |
| chips de chocolate | chocolate chips | chips de chocolate, chocolate chips, chispas de chocolate |
| huevo | egg | huevo, egg |
| bicarbonato de sodio | sodium bicarbonate | bicarbonato de sodio, sodium bicarbonate, INS 500 |
| fosfato monocálcico | monocalcium phosphate | fosfato monocálcico, monocalcium phosphate, INS 341 |
| bicarbonato de amonio | ammonium bicarbonate | bicarbonato de amonio, ammonium bicarbonate, INS 503 |
| sal | salt | sal, salt |
| goma xántica | xanthan gum | goma xántica, xanthan gum, INS 415 |
| goma guar | guar gum | goma guar, guar gum, INS 412 |
| esencia de vainilla | vanilla essence | esencia de vainilla, vanilla essence, vainilla, vanilla |
| tartrazina | tartrazine | tartrazina, tartrazine, Yellow 5, INS 102 |
| lecitina de soja | soy lecithin | lecitina de soja, soy lecithin |

**Fuente / Source:** [Jumbo Argentina](https://www.jumbo.com.ar/galletitas-santa-maria-mechaditas-200-gr/p)  
**Tipo / Type:** `retailer_label_transcription`  
**Alcance / Supports:** Ingredient declaration for Santa María Mechaditas 200 g; listing identifies Argentine origin.


### Galletita Tita Clásica

- **ID:** `tita-clasica-19g-ar`
- **Package photo:** [View package / Ver envase](https://www.disco.com.ar/galletita-tita-clasica-19-gr/p)
- **Brand:** Terrabusi · Tita
- **Country:** Argentina
- **Market:** Argentina
- **Package:** 19 g
- **Category:** `filled_cookies`
- **Status:** `ready` · **Verification:** `retailer_label_transcription`
- **Description (ES):** Galletita dulce rellena con sabor a limón y baño de repostería.
- **Description (EN):** Lemon-flavoured filled sweet biscuit with a confectionery coating.

**Declared ingredients / Ingredientes declarados**

Azúcar, harina de trigo, hierro, ácido fólico, vitamina B1, vitamina B2, niacina, aceite vegetal, grasa vacuna refinada, cacao en polvo, almidón, jarabe de maíz de alta fructosa, leche descremada en polvo, sal, emulsionante lecitina de soja, emulsionante polirricinoleato de poliglicerol, leudante químico bicarbonato de amonio, leudante químico bicarbonato de sodio, leudante químico fosfato monocálcico, aromatizante natural limón, aromatizante idéntico al natural vainillina, aromatizante artificial vainilla, mejorador de la harina metabisulfito de sodio, proteasa. La transcripción de la fuente continúa con una declaración de alérgenos (leche, sulfitos y derivados de trigo y soja), que no se incluye como ingredientes; también se excluye la advertencia «puede contener huevo y maní».

**Accepted answers / Respuestas aceptadas**

- azúcar / sugar · azúcar, sugar
- harina de trigo / wheat flour · harina de trigo, wheat flour, flour
- hierro / iron · hierro, iron
- ácido fólico / folic acid · ácido fólico, folic acid, folate
- vitamina B1 / vitamin B1 · vitamina B1, vitamin B1, tiamina, thiamine
- vitamina B2 / vitamin B2 · vitamina B2, vitamin B2, riboflavina, riboflavin
- niacina / niacin · niacina, niacin, vitamina B3, vitamin B3
- aceite vegetal / vegetable oil · aceite vegetal, vegetable oil
- grasa vacuna refinada / refined beef fat · grasa vacuna refinada, refined beef fat, beef fat
- cacao en polvo / cocoa powder · cacao en polvo, cocoa powder
- almidón / starch · almidón, starch
- jarabe de maíz de alta fructosa / high-fructose corn syrup · jarabe de maíz de alta fructosa, high-fructose corn syrup, HFCS, high fructose corn syrup
- leche descremada en polvo / skim milk powder · leche descremada en polvo, skim milk powder, nonfat dry milk
- sal / salt · sal, salt
- lecitina de soja / soy lecithin · lecitina de soja, soy lecithin, lecitina de soya, soya lecithin
- polirricinoleato de poliglicerol / polyglycerol polyricinoleate · polirricinoleato de poliglicerol, polyglycerol polyricinoleate, PGPR, E476
- bicarbonato de amonio / ammonium bicarbonate · bicarbonato de amonio, ammonium bicarbonate, E503, E503(ii)
- bicarbonato de sodio / sodium bicarbonate · bicarbonato de sodio, sodium bicarbonate, baking soda, E500, E500(ii)
- fosfato monocálcico / monocalcium phosphate · fosfato monocálcico, monocalcium phosphate, E341(i)
- aromatizante natural de limón / natural lemon flavouring · aromatizante natural limón, aromatizante natural de limón, natural lemon flavouring, natural lemon flavor
- vainillina / vanillin · vainillina, vanillin
- aromatizante artificial de vainilla / artificial vanilla flavouring · aromatizante artificial vainilla, aromatizante artificial de vainilla, artificial vanilla flavouring, artificial vanilla flavor
- metabisulfito de sodio / sodium metabisulfite · metabisulfito de sodio, sodium metabisulfite, E223
- proteasa / protease · proteasa, protease, protease enzyme

**Ingredient source:** [Jumbo product listing](https://www.jumbo.com.ar/galletita-tita-clasica-19-gr/p)  
**Image source:** [Disco product listing](https://www.disco.com.ar/galletita-tita-clasica-19-gr/p)


## World

### Nutella / Nutella

- **ID:** `nutella-italy-400g`
- **Foto real / Real photo:** [Ver envase / View package](https://www.nutella.com/it/sites/nutella_it/files/2026-10/card_all_sizes_spread_400g_glass.png?t=1794584322) · [Fuente / Source](https://www.nutella.com/it/it/prodotti/crema-spalmabile/nutella)
- **País / Country:** Italy
- **Mercado / Market:** Italy
- **Envase / Package:** 400 g (market reference; verify exact jar label)
- **Categoría / Category:** `chocolate_spread`
- **Barcode:** No registrado / Not recorded
- **Estado / Status:** `ready` · **Verificación:** `manufacturer_website`
- **Descripción (ES):** Crema de cacao y avellanas · versión italiana.
- **Description (EN):** Hazelnut cocoa spread · Italian-market version.

**Ingredientes declarados / Declared ingredients**

Zucchero, olio di palma, nocciole (13%), latte scremato in polvere (8,7%), cacao magro (7,4%), emulsionanti: lecitine (soia), vanillina.

**Respuestas aceptadas / Accepted answers (7)**

| Español | English | Alias / Aliases |
|---|---|---|
| azúcar | sugar | azúcar, sugar |
| aceite de palma | palm oil | aceite de palma, palm oil |
| avellanas | hazelnuts | avellanas, hazelnuts, hazelnut |
| leche descremada en polvo | skimmed milk powder | leche descremada en polvo, skimmed milk powder, skim milk powder |
| cacao magro | low-fat cocoa | cacao magro, low-fat cocoa, defatted cocoa, cocoa powder |
| lecitinas de soja | soy lecithins | lecitinas de soja, soy lecithins, lecithin, soy lecithin |
| vainillina | vanillin | vainillina, vanillin |

**Fuente / Source:** [Ferrero Italia](https://www.ferrero.it/prodotti/nutella-prodotti/nutella/)  
**Tipo / Type:** `manufacturer_website`  
**Alcance / Supports:** Official Italian Nutella ingredient declaration.

---

### Coca-Cola sabor original / Coca-Cola Original Taste

- **ID:** `coca-cola-original-us`
- **Foto real / Real photo:** [Ver envase / View package](https://mobileimages.lowes.com/productimages/87e12d74-32fe-4bb0-a737-7a3d5c3fc2b4/69707301.jpeg) · [Fuente / Source](https://www.lowes.com/pd/Coca-Cola-Coca-Cola-Bottle-20-fl-oz/5014075097)
- **País / Country:** United States
- **Mercado / Market:** United States
- **Envase / Package:** 20 fl oz bottle (US label)
- **Categoría / Category:** `soft_drink`
- **Barcode:** No registrado / Not recorded
- **Estado / Status:** `ready` · **Verificación:** `manufacturer_website`
- **Descripción (ES):** Gaseosa cola · fórmula del mercado estadounidense.
- **Description (EN):** Cola soft drink · United States-market formula.

**Ingredientes declarados / Declared ingredients**

Carbonated water, high fructose corn syrup, caramel color, phosphoric acid, natural flavors, caffeine.

**Respuestas aceptadas / Accepted answers (6)**

| Español | English | Alias / Aliases |
|---|---|---|
| agua carbonatada | carbonated water | agua carbonatada, carbonated water |
| jarabe de maíz de alta fructosa | high-fructose corn syrup | jarabe de maíz de alta fructosa, high-fructose corn syrup, HFCS, corn syrup |
| colorante caramelo | caramel color | colorante caramelo, caramel color |
| ácido fosfórico | phosphoric acid | ácido fosfórico, phosphoric acid |
| aromatizantes naturales | natural flavors | aromatizantes naturales, natural flavors, natural flavourings |
| cafeína | caffeine | cafeína, caffeine |

**Fuente / Source:** [The Coca-Cola Company US](https://www.coca-cola.com/us/en/brands/coca-cola/products/original/original-taste)  
**Tipo / Type:** `manufacturer_website`  
**Alcance / Supports:** Official US Coca-Cola Original Taste ingredients.

---

### Oreo Original / Oreo Original

- **ID:** `oreo-original-us-family`
- **Foto real / Real photo:** [Ver envase / View package](https://i5.walmartimages.com/asr/5a54ae04-be18-4412-b0bf-d93a53e18527.e015c66aea4879efe562fd98f3a9ee54.jpeg) · [Fuente / Source](https://www.walmart.com/ip/OREO-Chocolate-Sandwich-Cookies-Family-Size-18-12-oz)- **Marca / Brand:** Mondelēz International
- **País / Country:** United States
- **Mercado / Market:** United States
- **Envase / Package:** Family size (US label)
- **Categoría / Category:** `sandwich_cookies`
- **Barcode:** No registrado / Not recorded
- **Estado / Status:** `ready` · **Verificación:** `manufacturer_website`
- **Descripción (ES):** Galletitas sándwich de cacao · versión estadounidense.
- **Description (EN):** Chocolate sandwich cookies · United States-market version.

**Ingredientes declarados / Declared ingredients**

Unbleached enriched flour (wheat flour, niacin, reduced iron, thiamine mononitrate, riboflavin, folic acid), sugar, palm oil, soybean and/or canola oil, cocoa (processed with alkali), high fructose corn syrup, leavening (baking soda and/or calcium phosphate), salt, soy lecithin, chocolate, artificial flavor.

**Respuestas aceptadas / Accepted answers (18)**

| Español | English | Alias / Aliases |
|---|---|---|
| harina de trigo enriquecida | enriched wheat flour | harina de trigo enriquecida, enriched wheat flour, wheat flour, enriched flour |
| niacina | niacin | niacina, niacin |
| hierro reducido | reduced iron | hierro reducido, reduced iron |
| mononitrato de tiamina | thiamine mononitrate | mononitrato de tiamina, thiamine mononitrate, vitamin b1 |
| riboflavina | riboflavin | riboflavina, riboflavin, vitamin b2 |
| ácido fólico | folic acid | ácido fólico, folic acid |
| azúcar | sugar | azúcar, sugar |
| aceite de palma | palm oil | aceite de palma, palm oil |
| aceite de soja | soybean oil | aceite de soja, soybean oil, soy oil |
| aceite de canola | canola oil | aceite de canola, canola oil, rapeseed oil |
| cacao procesado con álcali | cocoa processed with alkali | cacao procesado con álcali, cocoa processed with alkali, alkalized cocoa |
| jarabe de maíz de alta fructosa | high-fructose corn syrup | jarabe de maíz de alta fructosa, high-fructose corn syrup, HFCS |
| bicarbonato de sodio | baking soda | bicarbonato de sodio, baking soda, sodium bicarbonate |
| fosfato de calcio | calcium phosphate | fosfato de calcio, calcium phosphate |
| sal | salt | sal, salt |
| lecitina de soja | soy lecithin | lecitina de soja, soy lecithin |
| chocolate | chocolate | chocolate |
| saborizante artificial | artificial flavor | saborizante artificial, artificial flavor, artificial flavour |

**Fuente / Source:** [OREO / Mondelēz](https://www.oreo.com/products/oreo-cookie?Size=1+Pack)  
**Tipo / Type:** `manufacturer_website`  
**Alcance / Supports:** Official US OREO Original ingredient declaration.

---

### Pringles Original / Pringles The Original

- **ID:** `pringles-original-us-5-2oz`
- **Foto real / Real photo:** [Ver envase / View package](https://s7d1.scene7.com/is/image/dolgen/dg-00907205-1) · [Fuente / Source](https://www.dollargeneral.com/p/pringles-original-potato-crisps-chips-lunch-snacks-5-2-oz/038000138416)
- **Marca / Brand:** Pringles
- **País / Country:** United States
- **Mercado / Market:** United States
- **Envase / Package:** 5.2 oz (US label)
- **Categoría / Category:** `potato_chips`
- **Barcode:** No registrado / Not recorded
- **Estado / Status:** `ready` · **Verificación:** `manufacturer_website`
- **Descripción (ES):** Snack de papa apilable · versión estadounidense.
- **Description (EN):** Stackable potato crisps · United States-market version.

**Ingredientes declarados / Declared ingredients**

Dried potatoes, vegetable oil (corn, cottonseed, canola, soybean and/or sunflower), degerminated yellow corn flour, cornstarch, rice flour, maltodextrin, mono- and diglycerides, salt, wheat starch.

**Respuestas aceptadas / Accepted answers (14)**

| Español | English | Alias / Aliases |
|---|---|---|
| papas deshidratadas | dried potatoes | papas deshidratadas, dried potatoes, dehydrated potatoes |
| aceite vegetal | vegetable oil | aceite vegetal, vegetable oil |
| aceite de maíz | corn oil | aceite de maíz, corn oil |
| aceite de algodón | cottonseed oil | aceite de algodón, cottonseed oil |
| aceite de canola | canola oil | aceite de canola, canola oil |
| aceite de soja | soybean oil | aceite de soja, soybean oil |
| aceite de girasol | sunflower oil | aceite de girasol, sunflower oil |
| harina de maíz amarillo | yellow corn flour | harina de maíz amarillo, yellow corn flour, corn flour |
| almidón de maíz | cornstarch | almidón de maíz, cornstarch, corn starch |
| harina de arroz | rice flour | harina de arroz, rice flour |
| maltodextrina | maltodextrin | maltodextrina, maltodextrin |
| mono y diglicéridos | mono- and diglycerides | mono y diglicéridos, mono- and diglycerides, mono and diglycerides |
| sal | salt | sal, salt |
| almidón de trigo | wheat starch | almidón de trigo, wheat starch |

**Fuente / Source:** [Pringles](https://www.pringles.com/en-us/products/pringles-the-original-product.html)  
**Tipo / Type:** `manufacturer_website`  
**Alcance / Supports:** Official US Pringles The Original ingredient declaration.

---

### Ketchup de tomate Heinz / Heinz Tomato Ketchup

- **ID:** `heinz-tomato-ketchup-us-38oz`
- **Foto real / Real photo:** [Ver envase / View package](https://i5.walmartimages.com/seo/Heinz-Tomato-Ketchup-38-oz-Bottle-Pack-of-6_0d427dd6-05b7-4464-bb4e-3ff07a427245.b18ed410cd6cb754ae5cb2a78dcee416.jpeg) · [Fuente / Source](https://www.walmart.com/ip/15474017983)
- **Marca / Brand:** Heinz
- **País / Country:** United States
- **Mercado / Market:** United States
- **Envase / Package:** 38 oz
- **Categoría / Category:** `ketchup`
- **Barcode:** No registrado / Not recorded
- **Estado / Status:** `ready` · **Verificación:** `manufacturer_website`
- **Descripción (ES):** Ketchup de tomate · versión estadounidense.
- **Description (EN):** Tomato ketchup · United States-market version.

**Ingredientes declarados / Declared ingredients**

Tomato concentrate from red ripe tomatoes, distilled vinegar, high fructose corn syrup, corn syrup, salt, spice, onion powder, natural flavoring.

**Respuestas aceptadas / Accepted answers (8)**

| Español | English | Alias / Aliases |
|---|---|---|
| concentrado de tomate | tomato concentrate | concentrado de tomate, tomato concentrate, tomato paste |
| vinagre destilado | distilled vinegar | vinagre destilado, distilled vinegar, white vinegar |
| jarabe de maíz de alta fructosa | high-fructose corn syrup | jarabe de maíz de alta fructosa, high-fructose corn syrup, HFCS |
| jarabe de maíz | corn syrup | jarabe de maíz, corn syrup |
| sal | salt | sal, salt |
| especias | spices | especias, spices, spice |
| cebolla en polvo | onion powder | cebolla en polvo, onion powder |
| aromatizante natural | natural flavoring | aromatizante natural, natural flavoring, natural flavouring |

**Fuente / Source:** [Heinz](https://www.heinz.com/products/00013000004664-tomato-ketchup)  
**Tipo / Type:** `manufacturer_website`  
**Alcance / Supports:** Official US Heinz Tomato Ketchup ingredient declaration.

---

### Kellogg's Corn Flakes / Kellogg's Corn Flakes

- **ID:** `kelloggs-corn-flakes-us-9-6oz`
- **Foto real / Real photo:** [Ver envase / View package](https://i5.walmartimages.com/seo/Kellogg-s-Corn-Flakes-Breakfast-Cereal-8-Vitamins-and-Minerals-Healthy-Snacks-Original-9-6oz-Box-1-Box_31a6a23d-8574-4bad-bcc3-a9ffc7930f60.51b5f1373aeb8754fb7849a33d0fd791.jpeg?odnBg=FFFFFF&odnHeight=768&odnWidth=768) · [Fuente / Source](https://www.walmart.com/ip/Kellogg-s-Corn-Flakes-Breakfast-Cereal-8-Vitamins-and-Minerals-Healthy-Snacks-Original-9-6oz-Box-1-Box/745853764)
- **Marca / Brand:** Kellanova
- **País / Country:** United States
- **Mercado / Market:** United States
- **Envase / Package:** 9.6 oz (US label)
- **Categoría / Category:** `breakfast_cereal`
- **Barcode:** No registrado / Not recorded
- **Estado / Status:** `ready` · **Verificación:** `manufacturer_website`
- **Descripción (ES):** Cereal de copos de maíz · versión estadounidense.
- **Description (EN):** Corn flakes cereal · United States-market version.

**Ingredientes declarados / Declared ingredients**

Milled corn, sugar, malt flavor, contains 2% or less of salt. Vitamins and minerals: iron (ferric phosphate), niacinamide, vitamin B6 (pyridoxine hydrochloride), vitamin B2 (riboflavin), vitamin B1 (thiamin hydrochloride), folic acid, vitamin D3, vitamin B12.

**Respuestas aceptadas / Accepted answers (12)**

| Español | English | Alias / Aliases |
|---|---|---|
| maíz molido | milled corn | maíz molido, milled corn, corn |
| azúcar | sugar | azúcar, sugar |
| sabor malta | malt flavor | sabor malta, malt flavor, malt flavour |
| sal | salt | sal, salt |
| fosfato férrico | ferric phosphate | fosfato férrico, ferric phosphate |
| niacinamida | niacinamide | niacinamida, niacinamide, vitamin b3 |
| clorhidrato de piridoxina | pyridoxine hydrochloride | clorhidrato de piridoxina, pyridoxine hydrochloride, vitamin b6 |
| riboflavina | riboflavin | riboflavina, riboflavin, vitamin b2 |
| clorhidrato de tiamina | thiamin hydrochloride | clorhidrato de tiamina, thiamin hydrochloride, vitamin b1 |
| ácido fólico | folic acid | ácido fólico, folic acid |
| vitamina D3 | vitamin D3 | vitamina D3, vitamin D3 |
| vitamina B12 | vitamin B12 | vitamina B12, vitamin B12, cobalamin |

**Fuente / Source:** [Kellogg's / Kellanova](https://www.wkkellogg.com/products/kellogg-s-corn-flakes-cereal-product)  
**Tipo / Type:** `manufacturer_website`  
**Alcance / Supports:** Official US Kellogg's Corn Flakes ingredient declaration.

---

### Toblerone chocolate con leche / Toblerone Milk Chocolate

- **ID:** `toblerone-milk-switzerland-100g`
- **Foto real / Real photo:** [Ver envase / View package](https://cdn11.bigcommerce.com/s-tgrcca6nho/images/stencil/1280w/products/18166/39707/toblerone-milk100g__20572.1749289381.jpg) · [Fuente / Source](https://www.giftmandu.com/toblerone-milk-swiss-chocolate-100g)- **Marca / Brand:** Toblerone
- **País / Country:** Switzerland
- **Mercado / Market:** Switzerland
- **Envase / Package:** 100 g
- **Categoría / Category:** `milk_chocolate`
- **Barcode:** No registrado / Not recorded
- **Estado / Status:** `ready` · **Verificación:** `manufacturer_website`
- **Descripción (ES):** Chocolate con leche, miel y nougat de almendras · versión suiza.
- **Description (EN):** Milk chocolate with honey and almond nougat · Swiss-market version.

**Ingredientes declarados / Declared ingredients**

Sugar, whole milk powder, cocoa butter, cocoa mass, honey (3%), milk fat, almonds (1.6%), emulsifier (soy lecithins), egg white, flavouring.

**Respuestas aceptadas / Accepted answers (10)**

| Español | English | Alias / Aliases |
|---|---|---|
| azúcar | sugar | azúcar, sugar |
| leche entera en polvo | whole milk powder | leche entera en polvo, whole milk powder |
| manteca de cacao | cocoa butter | manteca de cacao, cocoa butter |
| masa de cacao | cocoa mass | masa de cacao, cocoa mass |
| miel | honey | miel, honey |
| grasa láctea | milk fat | grasa láctea, milk fat, butterfat |
| almendras | almonds | almendras, almonds |
| lecitinas de soja | soy lecithins | lecitinas de soja, soy lecithins, soy lecithin |
| clara de huevo | egg white | clara de huevo, egg white, egg whites |
| aromatizante | flavouring | aromatizante, flavouring, flavoring |

**Fuente / Source:** [Toblerone](https://www.toblerone.com/ch-de/produkte/milch/)  
**Tipo / Type:** `manufacturer_website`  
**Alcance / Supports:** Official Swiss Toblerone Milk ingredient declaration.

---

### Kit Kat chocolate con leche / Kit Kat Milk Chocolate

- **ID:** `kitkat-milk-chocolate-us-1-5oz`
- **Foto real / Real photo:** [Ver envase / View package](https://i5.walmartimages.com/seo/Kit-Kat-Candy-Bar-Milk-Chocolate-Wafer-1-5oz-Pack-of-2_ff880bed-57d3-43fe-830f-61c4722ecbfc.af3c416ba16266fba65c1bc7253935ae.jpeg?odnBg=FFFFFF&odnHeight=573&odnWidth=573) · [Fuente / Source](https://www.walmart.com/ip/6603374254)- **Marca / Brand:** Hershey / Kit Kat
- **País / Country:** United States
- **Mercado / Market:** United States
- **Envase / Package:** 1.5 oz
- **Categoría / Category:** `chocolate_bar`
- **Barcode:** No registrado / Not recorded
- **Estado / Status:** `ready` · **Verificación:** `manufacturer_website`
- **Descripción (ES):** Barra de chocolate con leche y oblea · versión estadounidense.
- **Description (EN):** Milk chocolate wafer bar · United States-market version.

**Ingredientes declarados / Declared ingredients**

Sugar, wheat flour, cocoa butter, chocolate, lactose (milk), vegetable oil (palm oil, palm kernel oil), skim milk, milk fat. Contains 2% or less of: lecithin (soy), PGPR, vanillin (artificial flavor), salt, yeast, baking soda.

**Respuestas aceptadas / Accepted answers (15)**

| Español | English | Alias / Aliases |
|---|---|---|
| azúcar | sugar | azúcar, sugar |
| harina de trigo | wheat flour | harina de trigo, wheat flour |
| manteca de cacao | cocoa butter | manteca de cacao, cocoa butter |
| chocolate | chocolate | chocolate |
| lactosa | lactose | lactosa, lactose, milk sugar |
| aceite de palma | palm oil | aceite de palma, palm oil |
| aceite de palmiste | palm kernel oil | aceite de palmiste, palm kernel oil |
| leche descremada | skim milk | leche descremada, skim milk, skimmed milk |
| grasa láctea | milk fat | grasa láctea, milk fat |
| lecitina de soja | soy lecithin | lecitina de soja, soy lecithin |
| PGPR | PGPR | PGPR, polirricinoleato de poliglicerol |
| vainillina | vanillin | vainillina, vanillin |
| sal | salt | sal, salt |
| levadura | yeast | levadura, yeast |
| bicarbonato de sodio | baking soda | bicarbonato de sodio, baking soda, sodium bicarbonate |

**Fuente / Source:** [Hersheyland](https://www.hersheyland.com/products/kit-kat-milk-chocolate-candy-bar-1-5-oz.html)  
**Tipo / Type:** `manufacturer_website`  
**Alcance / Supports:** Official US Kit Kat Milk Chocolate ingredient declaration and package size.

---

### Cheerios Original / Original Cheerios

- **ID:** `cheerios-original-us-8-9oz`
- **Foto real / Real photo:** [Ver envase / View package](https://mojo.generalmills.com/api/public/content/qXISbTu6TrezkkuNB64u_A_04c57eea-66a2-45cd-a3f2-ecd27146a451_04c57eea-66a2-45cd-a3f2-ecd27146a451.png?v=583b15c0&t=04c57eea66a245cda3f2ecd27146a451) · [Fuente / Source](https://www.cheerios.com/products/original-cheerios)- **Marca / Brand:** General Mills
- **País / Country:** United States
- **Mercado / Market:** United States
- **Envase / Package:** 8.9 oz
- **Categoría / Category:** `breakfast_cereal`
- **Barcode:** No registrado / Not recorded
- **Estado / Status:** `ready` · **Verificación:** `manufacturer_website`
- **Descripción (ES):** Cereal de avena integral tostada · versión estadounidense.
- **Description (EN):** Toasted whole-grain oat cereal · US version.

**Ingredientes declarados / Declared ingredients**

Whole Grain Oats, Corn Starch, Sugar, Salt, Tripotassium Phosphate. Vitamin E (mixed tocopherols) Added to Preserve Freshness. Vitamins and Minerals: Calcium Carbonate, Iron and Zinc, Vitamin C (sodium ascorbate), niacinamide, Vitamin B6, Vitamin A (palmitate), Vitamin B1, folic acid, Vitamin B12, Vitamin D3.

**Respuestas aceptadas / Accepted answers (17)**

| Español | English | Alias / Aliases |
|---|---|---|
| avena integral | whole grain oats | avena integral, whole grain oats |
| almidón de maíz | corn starch | almidón de maíz, corn starch |
| azúcar | sugar | azúcar, sugar |
| sal | salt | sal, salt |
| fosfato tripotásico | tripotassium phosphate | fosfato tripotásico, tripotassium phosphate |
| tocoferoles mixtos | mixed tocopherols | tocoferoles mixtos, mixed tocopherols, vitamin e |
| carbonato de calcio | calcium carbonate | carbonato de calcio, calcium carbonate |
| hierro | iron | hierro, iron |
| zinc | zinc | zinc |
| ascorbato de sodio | sodium ascorbate | ascorbato de sodio, sodium ascorbate, vitamin c |
| niacinamida | niacinamide | niacinamida, niacinamide, vitamin b3 |
| clorhidrato de piridoxina | pyridoxine hydrochloride | clorhidrato de piridoxina, pyridoxine hydrochloride, vitamin b6 |
| palmitato de vitamina A | vitamin A palmitate | palmitato de vitamina A, vitamin A palmitate |
| mononitrato de tiamina | thiamin mononitrate | mononitrato de tiamina, thiamin mononitrate, vitamin b1 |
| ácido fólico | folic acid | ácido fólico, folic acid |
| vitamina B12 | vitamin B12 | vitamina B12, vitamin B12 |
| vitamina D3 | vitamin D3 | vitamina D3, vitamin D3 |

**Fuente / Source:** [Cheerios / General Mills](https://www.cheerios.com/products/original-cheerios)  
**Tipo / Type:** `manufacturer_website`  
**Alcance / Supports:** Official US Original Cheerios product page; ingredients and 8.9 oz box.

---

### Kellogg's Froot Loops / Kellogg's Froot Loops

- **ID:** `froot-loops-us-13-2oz`
- **Foto real / Real photo:** [Ver envase / View package](https://storage.googleapis.com/images-prs-prd-c7e7986.prs.prd.v8.commerce.mi9cloud.com/product-images/zoom/00038000281860_596) · [Fuente / Source](https://www.shoprite.com/product/kelloggs-froot-loops-original-cold-breakfast-cereal-132-oz-id-00038000281860)
- **País / Country:** United States
- **Mercado / Market:** United States
- **Envase / Package:** 13.2 oz
- **Categoría / Category:** `breakfast_cereal`
- **Barcode:** 00038000017674
- **Estado / Status:** `ready` · **Verificación:** `manufacturer_website`
- **Descripción (ES):** Cereal multigrano de colores y sabor frutal · versión estadounidense.
- **Description (EN):** Colorful fruit-flavored multigrain cereal · US version.

**Ingredientes declarados / Declared ingredients**

Corn flour blend (whole grain yellow corn flour, degerminated yellow corn flour), sugar, wheat flour, whole grain oat flour, modified food starch, vegetable oil (hydrogenated coconut, soybean and/or cottonseed), oat fiber, maltodextrin, salt, soluble corn fiber, natural flavor, red 40, yellow 5, blue 1, yellow 6. Vitamins and Minerals: Vitamin C, reduced iron, niacinamide, vitamin B6, vitamin B2, vitamin B1, folic acid, vitamin D3, vitamin B12. BHT added to packaging for freshness.

**Respuestas aceptadas / Accepted answers (28)**

| Español | English | Alias / Aliases |
|---|---|---|
| harina de maíz amarillo integral | whole grain yellow corn flour | harina de maíz amarillo integral, whole grain yellow corn flour |
| harina de maíz desgerminada | degerminated yellow corn flour | harina de maíz desgerminada, degerminated yellow corn flour |
| azúcar | sugar | azúcar, sugar |
| harina de trigo | wheat flour | harina de trigo, wheat flour |
| harina de avena integral | whole grain oat flour | harina de avena integral, whole grain oat flour |
| almidón modificado | modified food starch | almidón modificado, modified food starch |
| aceite vegetal | vegetable oil | aceite vegetal, vegetable oil |
| aceite de coco hidrogenado | hydrogenated coconut oil | aceite de coco hidrogenado, hydrogenated coconut oil |
| aceite de soja | soybean oil | aceite de soja, soybean oil |
| aceite de algodón | cottonseed oil | aceite de algodón, cottonseed oil |
| fibra de avena | oat fiber | fibra de avena, oat fiber |
| maltodextrina | maltodextrin | maltodextrina, maltodextrin |
| sal | salt | sal, salt |
| fibra soluble de maíz | soluble corn fiber | fibra soluble de maíz, soluble corn fiber |
| aroma natural | natural flavor | aroma natural, natural flavor |
| rojo 40 | red 40 | rojo 40, red 40 |
| amarillo 5 | yellow 5 | amarillo 5, yellow 5 |
| azul 1 | blue 1 | azul 1, blue 1 |
| amarillo 6 | yellow 6 | amarillo 6, yellow 6 |
| ácido ascórbico | ascorbic acid | ácido ascórbico, ascorbic acid, vitamin c |
| hierro reducido | reduced iron | hierro reducido, reduced iron |
| niacinamida | niacinamide | niacinamida, niacinamide |
| clorhidrato de piridoxina | pyridoxine hydrochloride | clorhidrato de piridoxina, pyridoxine hydrochloride, vitamin b6 |
| riboflavina | riboflavin | riboflavina, riboflavin, vitamin b2 |
| clorhidrato de tiamina | thiamin hydrochloride | clorhidrato de tiamina, thiamin hydrochloride, vitamin b1 |
| ácido fólico | folic acid | ácido fólico, folic acid |
| vitamina D3 | vitamin D3 | vitamina D3, vitamin D3 |
| vitamina B12 | vitamin B12 | vitamina B12, vitamin B12 |

**Fuente / Source:** [WK Kellogg Co](https://www.wkkellogg.com/products/froot-loops-cereal)  
**Tipo / Type:** `manufacturer_website`  
**Alcance / Supports:** Official US Froot Loops ingredients; selected 13.2 oz variant.

---

### Kellogg's Frosted Flakes / Kellogg's Frosted Flakes

- **ID:** `frosted-flakes-us-17-3oz`
- **Foto real / Real photo:** [Ver envase / View package](https://storage.googleapis.com/images-prs-prd-c7e7986.prs.prd.v8.commerce.mi9cloud.com/product-images/zoom/00038000281907_596) · [Fuente / Source](https://www.thefreshgrocer.com/product/kelloggs-frosted-flakes-original-cold-breakfast-cereal-173-oz-id-00038000281907)- **Marca / Brand:** WK Kellogg Co
- **País / Country:** United States
- **Mercado / Market:** United States
- **Envase / Package:** 17.3 oz
- **Categoría / Category:** `breakfast_cereal`
- **Barcode:** No registrado / Not recorded
- **Estado / Status:** `ready` · **Verificación:** `manufacturer_website`
- **Descripción (ES):** Copos de maíz azucarados · versión estadounidense.
- **Description (EN):** Frosted corn flakes · US version.

**Ingredientes declarados / Declared ingredients**

Milled corn, sugar, malt flavor, contains 2% or less of salt. Vitamins and Minerals: Iron (ferric phosphate), niacinamide, vitamin B6, vitamin B2, vitamin B1, folic acid, vitamin D3, vitamin B12.

**Respuestas aceptadas / Accepted answers (12)**

| Español | English | Alias / Aliases |
|---|---|---|
| maíz molido | milled corn | maíz molido, milled corn |
| azúcar | sugar | azúcar, sugar |
| sabor malta | malt flavor | sabor malta, malt flavor, malt flavour |
| sal | salt | sal, salt |
| fosfato férrico | ferric phosphate | fosfato férrico, ferric phosphate |
| niacinamida | niacinamide | niacinamida, niacinamide |
| clorhidrato de piridoxina | pyridoxine hydrochloride | clorhidrato de piridoxina, pyridoxine hydrochloride, vitamin b6 |
| riboflavina | riboflavin | riboflavina, riboflavin, vitamin b2 |
| clorhidrato de tiamina | thiamin hydrochloride | clorhidrato de tiamina, thiamin hydrochloride, vitamin b1 |
| ácido fólico | folic acid | ácido fólico, folic acid |
| vitamina D3 | vitamin D3 | vitamina D3, vitamin D3 |
| vitamina B12 | vitamin B12 | vitamina B12, vitamin B12 |

**Fuente / Source:** [WK Kellogg Co](https://www.wkkellogg.com/products/kellogg-s-frosted-flakes-cereal-product)  
**Tipo / Type:** `manufacturer_website`  
**Alcance / Supports:** Official US Frosted Flakes ingredients; selected 17.3 oz variant.

---

### Sopa condensada de tomate Campbell's / Campbell's Condensed Tomato Soup

- **ID:** `campbells-tomato-soup-us-10-75oz`
- **Foto real / Real photo:** [Ver envase / View package](https://i5.walmartimages.com/seo/Campbell-s-Red-White-Tomato-Soup-10-75-Ounce-Cans-Pack-of-12_08aed42f-6393-416f-95c2-7962622480aa.2061dd9db7a3001668f03c4148289ce8.jpeg?odnBg=FFFFFF&odnHeight=768&odnWidth=768) · [Fuente / Source](https://www.walmart.com/ip/519481778)
- **Marca / Brand:** Campbell's
- **País / Country:** United States
- **Mercado / Market:** United States
- **Envase / Package:** 10.75 oz can
- **Categoría / Category:** `tomato_soup`
- **Barcode:** No registrado / Not recorded
- **Estado / Status:** `ready` · **Verificación:** `manufacturer_website`
- **Descripción (ES):** Sopa condensada de tomate · versión estadounidense.
- **Description (EN):** Condensed tomato soup · US version.

**Ingredientes declarados / Declared ingredients**

Tomato Puree (Water, Tomato Paste), Water, Wheat Flour, Sugar, Contains Less Than 2% Of: Salt, Potassium Salt, Natural Flavoring, Citric Acid, Ascorbic Acid (Vitamin C), Celery Extract, Garlic Oil.

**Respuestas aceptadas / Accepted answers (12)**

| Español | English | Alias / Aliases |
|---|---|---|
| puré de tomate | tomato puree | puré de tomate, tomato puree |
| agua | water | agua, water |
| pasta de tomate | tomato paste | pasta de tomate, tomato paste |
| harina de trigo | wheat flour | harina de trigo, wheat flour |
| azúcar | sugar | azúcar, sugar |
| sal | salt | sal, salt |
| sal de potasio | potassium salt | sal de potasio, potassium salt |
| aromatizante natural | natural flavoring | aromatizante natural, natural flavoring |
| ácido cítrico | citric acid | ácido cítrico, citric acid |
| ácido ascórbico | ascorbic acid | ácido ascórbico, ascorbic acid, vitamin c |
| extracto de apio | celery extract | extracto de apio, celery extract |
| aceite de ajo | garlic oil | aceite de ajo, garlic oil |

**Fuente / Source:** [The Campbell's Company](https://www.campbells.com/products/condensed/tomato-soup/)  
**Tipo / Type:** `manufacturer_website`  
**Alcance / Supports:** Official US condensed tomato soup ingredients; standard can size checked against retailer listing.

---

### Sopa condensada de pollo con fideos Campbell's / Campbell's Condensed Chicken Noodle Soup

- **ID:** `campbells-chicken-noodle-us-10-75oz`
- **Foto real / Real photo:** [Ver envase / View package](https://www.instacart.com/assets/domains/product-image/file/large_2ee05523-219f-4fcf-b93a-a63d30cccf77.jpg) · [Fuente / Source](https://www.instacart.com/products/16548089-campbell-s-chicken-noodle-soup-10-75-oz)
- **Marca / Brand:** Campbell's
- **País / Country:** United States
- **Mercado / Market:** United States
- **Envase / Package:** 10.75 oz can
- **Categoría / Category:** `chicken_soup`
- **Barcode:** No registrado / Not recorded
- **Estado / Status:** `ready` · **Verificación:** `manufacturer_website`
- **Descripción (ES):** Sopa condensada de pollo con fideos · versión estadounidense.
- **Description (EN):** Condensed chicken noodle soup · US version.

**Ingredientes declarados / Declared ingredients**

Chicken Stock, Enriched Egg Noodles (Wheat Flour, Eggs, Niacin, Ferrous Sulfate, Thiamine Mononitrate, Riboflavin, Folic Acid), Chicken Meat, Salt, Chicken Fat, Water, Monosodium Glutamate, Cornstarch, Flavoring, Modified Cornstarch, Dried Chicken Broth, Sugar, Beta Carotene, Onion Powder, Yeast Extract, Sodium Phosphate, Soy Protein Isolate, Dried Chicken, Garlic Extract.

**Respuestas aceptadas / Accepted answers (26)**

| Español | English | Alias / Aliases |
|---|---|---|
| caldo de pollo | chicken stock | caldo de pollo, chicken stock |
| fideos de huevo enriquecidos | enriched egg noodles | fideos de huevo enriquecidos, enriched egg noodles |
| harina de trigo | wheat flour | harina de trigo, wheat flour |
| huevos | eggs | huevos, eggs |
| niacina | niacin | niacina, niacin |
| sulfato ferroso | ferrous sulfate | sulfato ferroso, ferrous sulfate |
| mononitrato de tiamina | thiamine mononitrate | mononitrato de tiamina, thiamine mononitrate |
| riboflavina | riboflavin | riboflavina, riboflavin |
| ácido fólico | folic acid | ácido fólico, folic acid |
| carne de pollo | chicken meat | carne de pollo, chicken meat |
| sal | salt | sal, salt |
| grasa de pollo | chicken fat | grasa de pollo, chicken fat |
| agua | water | agua, water |
| glutamato monosódico | monosodium glutamate | glutamato monosódico, monosodium glutamate, MSG |
| almidón de maíz | cornstarch | almidón de maíz, cornstarch |
| almidón de maíz modificado | modified cornstarch | almidón de maíz modificado, modified cornstarch |
| saborizante | flavoring | saborizante, flavoring |
| caldo de pollo deshidratado | dried chicken broth | caldo de pollo deshidratado, dried chicken broth |
| azúcar | sugar | azúcar, sugar |
| betacaroteno | beta carotene | betacaroteno, beta carotene |
| cebolla en polvo | onion powder | cebolla en polvo, onion powder |
| extracto de levadura | yeast extract | extracto de levadura, yeast extract |
| fosfato de sodio | sodium phosphate | fosfato de sodio, sodium phosphate |
| proteína aislada de soja | soy protein isolate | proteína aislada de soja, soy protein isolate |
| pollo deshidratado | dried chicken | pollo deshidratado, dried chicken |
| extracto de ajo | garlic extract | extracto de ajo, garlic extract |

**Fuente / Source:** [The Campbell's Company](https://www.campbells.com/products/condensed/chicken-noodle-soup/)  
**Tipo / Type:** `manufacturer_website`  
**Alcance / Supports:** Official US condensed Chicken Noodle Soup ingredient declaration.

---

### Barra SNICKERS / SNICKERS Bar

- **ID:** `snickers-original-us-1-86oz`
- **Foto real / Real photo:** [Ver envase / View package](https://www.instacart.com/assets/domains/product-image/file/large_c486d74c-b0b9-4fb2-ad05-930566c5b114.jpg) · [Fuente / Source](https://sameday.dollartree.com/store/dollar-tree/products/16753683-snickers-chocolate-candy-bar-single-1-86-oz)
- **Marca / Brand:** Mars
- **País / Country:** United States
- **Mercado / Market:** United States
- **Envase / Package:** 1.86 oz (52.7 g)
- **Categoría / Category:** `chocolate_bar`
- **Barcode:** No registrado / Not recorded
- **Estado / Status:** `ready` · **Verificación:** `manufacturer_website`
- **Descripción (ES):** Barra de chocolate con leche, maní, caramelo y nougat · versión estadounidense.
- **Description (EN):** Milk chocolate, peanut, caramel and nougat bar · US version.

**Ingredientes declarados / Declared ingredients**

Milk Chocolate (Sugar, Cocoa Butter, Chocolate, Lactose, Skim Milk, Milkfat, Soy Lecithin, Artificial Flavor), Peanuts, Corn Syrup, Sugar, Skim Milk, Butter, Milkfat, Partially Hydrogenated Soybean Oil, Lactose, Salt, Egg Whites, Artificial Flavor.

**Respuestas aceptadas / Accepted answers (14)**

| Español | English | Alias / Aliases |
|---|---|---|
| azúcar | sugar | azúcar, sugar |
| manteca de cacao | cocoa butter | manteca de cacao, cocoa butter |
| chocolate | chocolate | chocolate |
| lactosa | lactose | lactosa, lactose |
| leche descremada | skim milk | leche descremada, skim milk |
| grasa láctea | milkfat | grasa láctea, milkfat, milk fat |
| lecitina de soja | soy lecithin | lecitina de soja, soy lecithin |
| saborizante artificial | artificial flavor | saborizante artificial, artificial flavor |
| maní | peanuts | maní, peanuts, peanut |
| jarabe de maíz | corn syrup | jarabe de maíz, corn syrup |
| manteca | butter | manteca, butter |
| aceite de soja parcialmente hidrogenado | partially hydrogenated soybean oil | aceite de soja parcialmente hidrogenado, partially hydrogenated soybean oil |
| sal | salt | sal, salt |
| claras de huevo | egg whites | claras de huevo, egg whites |

**Fuente / Source:** [Mars Foodservices](https://www.marsfoodservices.com/product/snickers-bar)  
**Tipo / Type:** `manufacturer_website`  
**Alcance / Supports:** Mars product ingredient declaration; size cross-checked against US retail listing.

---

### Galletitas RITZ Original / RITZ Original Crackers

- **ID:** `ritz-original-us-10-3oz`
- **Foto real / Real photo:** [Ver envase / View package](https://i5.walmartimages.com/asr/aa82044c-64ec-4911-beee-2dbd44777ecf.3a6159a4ecdb315e49d2fecb5247c3bf.jpeg) · [Fuente / Source](https://www.walmart.com/ip/34632325)
- **Marca / Brand:** Mondelēz / Nabisco
- **País / Country:** United States
- **Mercado / Market:** United States
- **Envase / Package:** 10.3 oz
- **Categoría / Category:** `crackers`
- **Barcode:** 00044000031121
- **Estado / Status:** `ready` · **Verificación:** `manufacturer_website`
- **Descripción (ES):** Galletitas saladas tipo cracker · versión estadounidense.
- **Description (EN):** Original savory crackers · US version.

**Ingredientes declarados / Declared ingredients**

Unbleached Enriched Flour (Wheat Flour, Niacin, Reduced Iron, Thiamine Mononitrate, Riboflavin, Folic Acid), Soybean and/or Canola Oil, Palm Oil, Sugar, Salt, Leavening (Calcium Phosphate, Baking Soda), High Fructose Corn Syrup, Soy Lecithin, Natural Flavor.

**Respuestas aceptadas / Accepted answers (17)**

| Español | English | Alias / Aliases |
|---|---|---|
| harina de trigo enriquecida | unbleached enriched flour | harina de trigo enriquecida, unbleached enriched flour |
| harina de trigo | wheat flour | harina de trigo, wheat flour |
| niacina | niacin | niacina, niacin |
| hierro reducido | reduced iron | hierro reducido, reduced iron |
| mononitrato de tiamina | thiamine mononitrate | mononitrato de tiamina, thiamine mononitrate, vitamin b1 |
| riboflavina | riboflavin | riboflavina, riboflavin, vitamin b2 |
| ácido fólico | folic acid | ácido fólico, folic acid |
| aceite de soja | soybean oil | aceite de soja, soybean oil |
| aceite de canola | canola oil | aceite de canola, canola oil |
| aceite de palma | palm oil | aceite de palma, palm oil |
| azúcar | sugar | azúcar, sugar |
| sal | salt | sal, salt |
| fosfato de calcio | calcium phosphate | fosfato de calcio, calcium phosphate |
| bicarbonato de sodio | baking soda | bicarbonato de sodio, baking soda, sodium bicarbonate |
| jarabe de maíz de alta fructosa | high-fructose corn syrup | jarabe de maíz de alta fructosa, high-fructose corn syrup, HFCS |
| lecitina de soja | soy lecithin | lecitina de soja, soy lecithin |
| sabor natural | natural flavor | sabor natural, natural flavor |

**Fuente / Source:** [Snackworks / Mondelēz](https://www.snackworks.com/products/ritz-original-crackers-snacks-for-kids-and-adults-lunch-snacks-103-oz/index.html)  
**Tipo / Type:** `manufacturer_website`  
**Alcance / Supports:** Official Snackworks ingredient statement and 10.3 oz package.

---

### Papas fritas Lay's clásicas / Lay's Classic Potato Chips

- **ID:** `lays-classic-us-1-5oz`
- **Foto real / Real photo:** [Ver envase / View package](https://i5.walmartimages.com/seo/Lay-s-Classic-Potato-Chips-Snack-Chips-1-5oz-Bag_d8bfdbcd-0227-4e78-a58d-ad4d4a4520cd.f3e2bdab9e9e86d934abf967ee0aff8a.jpeg?odnBg=FFFFFF&odnHeight=768&odnWidth=768) · [Fuente / Source](https://www.walmart.com/ip/148212532)
- **País / Country:** United States
- **Mercado / Market:** United States
- **Envase / Package:** 1.5 oz (42.5 g)
- **Categoría / Category:** `potato_chips`
- **Barcode:** 00028400743761
- **Estado / Status:** `ready` · **Verificación:** `retailer_transcription`
- **Descripción (ES):** Papas fritas clásicas · versión estadounidense.
- **Description (EN):** Classic potato chips · US version.

**Ingredientes declarados / Declared ingredients**

Potatoes, Vegetable Oil (Canola, Corn, Soybean, and/or Sunflower Oil), and Salt.

**Respuestas aceptadas / Accepted answers (7)**

| Español | English | Alias / Aliases |
|---|---|---|
| papas | potatoes | papas, potatoes, potato |
| aceite vegetal | vegetable oil | aceite vegetal, vegetable oil |
| aceite de canola | canola oil | aceite de canola, canola oil |
| aceite de maíz | corn oil | aceite de maíz, corn oil |
| aceite de soja | soybean oil | aceite de soja, soybean oil |
| aceite de girasol | sunflower oil | aceite de girasol, sunflower oil |
| sal | salt | sal, salt |

**Fuente / Source:** [Directions for Me / Frito-Lay label transcription](https://www.directionsforme.org/product/36584)  
**Tipo / Type:** `retailer_transcription`  
**Alcance / Supports:** Retail label transcription with full ingredients, 1.5 oz package, UPC and manufacturer; not a direct manufacturer page.

---

### Doritos sabor queso nacho / Doritos Nacho Cheese

- **ID:** `doritos-nacho-cheese-us-foodservice-1-4oz`
- **Foto real / Real photo:** [Ver envase / View package](https://drryor7280ntb.cloudfront.net/media/catalog/product/0/0/00028400443753_fm0tzjy2pgpj1kdz.jpg) · [Fuente / Source](https://www.foodservicedirect.com/doritos-nacho-cheese-tortilla-chips-1-75-ounce-64-per-case-21204082.html)- **Marca / Brand:** Frito-Lay
- **País / Country:** United States
- **Mercado / Market:** United States
- **Envase / Package:** 1.4 oz (40 g) · school foodservice label
- **Categoría / Category:** `tortilla_chips`
- **Barcode:** No registrado / Not recorded
- **Estado / Status:** `ready` · **Verificación:** `manufacturer_foodservice_document`
- **Descripción (ES):** Totopos sabor queso nacho · etiqueta estadounidense de foodservice escolar.
- **Description (EN):** Nacho cheese tortilla chips · US school-foodservice label.

**Ingredientes declarados / Declared ingredients**

Whole Corn, Corn, Vegetable Oil (Corn, Canola, And/Or Sunflower Oil), Maltodextrin, Corn Bran, Salt, Cheddar Cheese (Milk, Cheese Cultures, Salt, Enzymes), Whey, Monosodium Glutamate, Buttermilk, Romano Cheese, Whey Protein Concentrate, Onion Powder, Corn Flour, Natural and Artificial Flavors, Dextrose, Tomato Powder, Lactose, Spices, Yellow 6, Yellow 5, Red 40, Lactic Acid, Citric Acid, Sugar, Garlic Powder, Skim Milk, Red and Green Bell Pepper Powder, Disodium Inosinate, Disodium Guanylate.

**Respuestas aceptadas / Accepted answers (36)**

| Español | English | Alias / Aliases |
|---|---|---|
| maíz entero | whole corn | maíz entero, whole corn |
| maíz | corn | maíz, corn |
| aceite vegetal | vegetable oil | aceite vegetal, vegetable oil |
| aceite de maíz | corn oil | aceite de maíz, corn oil |
| aceite de canola | canola oil | aceite de canola, canola oil |
| aceite de girasol | sunflower oil | aceite de girasol, sunflower oil |
| maltodextrina | maltodextrin | maltodextrina, maltodextrin |
| salvado de maíz | corn bran | salvado de maíz, corn bran |
| sal | salt | sal, salt |
| queso cheddar | cheddar cheese | queso cheddar, cheddar cheese |
| cultivos de queso | cheese cultures | cultivos de queso, cheese cultures |
| enzimas | enzymes | enzimas, enzymes |
| suero | whey | suero, whey |
| glutamato monosódico | monosodium glutamate | glutamato monosódico, monosodium glutamate, MSG |
| suero de leche | buttermilk | suero de leche, buttermilk |
| queso romano | Romano cheese | queso romano, Romano cheese |
| concentrado de proteína de suero | whey protein concentrate | concentrado de proteína de suero, whey protein concentrate |
| cebolla en polvo | onion powder | cebolla en polvo, onion powder |
| harina de maíz | corn flour | harina de maíz, corn flour |
| sabores naturales y artificiales | natural and artificial flavors | sabores naturales y artificiales, natural and artificial flavors |
| dextrosa | dextrose | dextrosa, dextrose |
| tomate en polvo | tomato powder | tomate en polvo, tomato powder |
| lactosa | lactose | lactosa, lactose |
| especias | spices | especias, spices |
| amarillo 6 | yellow 6 | amarillo 6, yellow 6 |
| amarillo 5 | yellow 5 | amarillo 5, yellow 5 |
| rojo 40 | red 40 | rojo 40, red 40 |
| ácido láctico | lactic acid | ácido láctico, lactic acid |
| ácido cítrico | citric acid | ácido cítrico, citric acid |
| azúcar | sugar | azúcar, sugar |
| ajo en polvo | garlic powder | ajo en polvo, garlic powder |
| leche descremada | skim milk | leche descremada, skim milk |
| pimiento rojo en polvo | red bell pepper powder | pimiento rojo en polvo, red bell pepper powder |
| pimiento verde en polvo | green bell pepper powder | pimiento verde en polvo, green bell pepper powder |
| inosinato disódico | disodium inosinate | inosinato disódico, disodium inosinate |
| guanilato disódico | disodium guanylate | guanilato disódico, disodium guanylate |

**Fuente / Source:** [PepsiCo SchoolSource](https://www.pepsicoschoolsource.com/prod/s3fs-public/2023-03/PFS_WalkingTacoRFDoritosNachoCheese_%2820518%29_1.4oz_2023.pdf)  
**Tipo / Type:** `manufacturer_foodservice_document`  
**Alcance / Supports:** PepsiCo foodservice formulation statement; this is a school-foodservice 1.4 oz formulation, not every retail bag.

---

### Tazas REESE'S de chocolate y mantequilla de maní / REESE'S Peanut Butter Cups Snack Size

- **ID:** `reeses-peanut-butter-cups-us-4-4oz`
- **Foto real / Real photo:** [Ver envase / View package](https://i5.peapod.com/c/71/71B9L.png) · [Fuente / Source](https://hannaford.com/groceries/candy-chocolate/chocolate-candy/packaged-chocolate-candy/reeses-milk-chocolate-peanut-butter-cups-candy-snack-size-8-ct-44-oz-pkg.html)
- **País / Country:** United States
- **Mercado / Market:** United States
- **Envase / Package:** 4.4 oz (124 g)
- **Categoría / Category:** `chocolate_candy`
- **Barcode:** 034000451708
- **Estado / Status:** `ready` · **Verificación:** `manufacturer_smartlabel_plus_retailer_crosscheck`
- **Descripción (ES):** Tazas de chocolate con leche y mantequilla de maní · versión estadounidense.
- **Description (EN):** Milk chocolate and peanut butter cups · US version.

**Ingredientes declarados / Declared ingredients**

Milk Chocolate (Sugar, Cocoa Butter, Chocolate, Skim Milk, Milk Fat, Lactose, Lecithin (Soy), PGPR), Sugar, Peanuts, Vegetable Oil (Palm Oil, Shea Oil, Sunflower Oil, Palm Kernel Oil, Soybean Oil, Canola Oil, and/or Safflower Oil), Skim Milk, Dextrose, Corn Syrup Solids, Lactose, Salt, Tapioca Starch, White Rice Flour, Lecithin, Artificial Flavor, Baking Soda, Chocolate, Cocoa Processed With Alkali, Cornstarch, Invert Sugar, Oat Flour, Xanthan Gum, PGPR, TBHQ and Citric Acid.

**Respuestas aceptadas / Accepted answers (31)**

| Español | English | Alias / Aliases |
|---|---|---|
| azúcar | sugar | azúcar, sugar |
| manteca de cacao | cocoa butter | manteca de cacao, cocoa butter |
| chocolate | chocolate | chocolate |
| leche descremada | skim milk | leche descremada, skim milk |
| grasa láctea | milk fat | grasa láctea, milk fat |
| lactosa | lactose | lactosa, lactose |
| lecitina de soja | soy lecithin | lecitina de soja, soy lecithin |
| PGPR | PGPR | PGPR, polirricinoleato de poliglicerol |
| maní | peanuts | maní, peanuts, peanut |
| aceite vegetal | vegetable oil | aceite vegetal, vegetable oil |
| aceite de palma | palm oil | aceite de palma, palm oil |
| aceite de karité | shea oil | aceite de karité, shea oil |
| aceite de girasol | sunflower oil | aceite de girasol, sunflower oil |
| aceite de palmiste | palm kernel oil | aceite de palmiste, palm kernel oil |
| aceite de soja | soybean oil | aceite de soja, soybean oil |
| aceite de canola | canola oil | aceite de canola, canola oil |
| aceite de cártamo | safflower oil | aceite de cártamo, safflower oil |
| dextrosa | dextrose | dextrosa, dextrose |
| sólidos de jarabe de maíz | corn syrup solids | sólidos de jarabe de maíz, corn syrup solids |
| sal | salt | sal, salt |
| almidón de tapioca | tapioca starch | almidón de tapioca, tapioca starch |
| harina de arroz blanco | white rice flour | harina de arroz blanco, white rice flour |
| saborizante artificial | artificial flavor | saborizante artificial, artificial flavor |
| bicarbonato de sodio | baking soda | bicarbonato de sodio, baking soda |
| cacao procesado con álcali | cocoa processed with alkali | cacao procesado con álcali, cocoa processed with alkali |
| almidón de maíz | cornstarch | almidón de maíz, cornstarch |
| azúcar invertido | invert sugar | azúcar invertido, invert sugar |
| harina de avena | oat flour | harina de avena, oat flour |
| goma xantana | xanthan gum | goma xantana, xanthan gum |
| TBHQ | TBHQ | TBHQ |
| ácido cítrico | citric acid | ácido cítrico, citric acid |

**Fuente / Source:** [Hershey SmartLabel / REESE'S](https://smartlabel.hersheys.com/034000451708-0052-en-US/index.html)  
**Tipo / Type:** `manufacturer_smartlabel_plus_retailer_crosscheck`  
**Alcance / Supports:** Official Hershey SmartLabel product identity and UPC; ingredient text cross-checked against retailer transcription.

---

### Takis Fuego 70 g / Takis Fuego 70 g

- **ID:** `takis-fuego-mexico-70g`
- **Foto real / Real photo:** [Ver envase / View package](https://i5-mx.walmartimages.com/gr/images/product-images/img_large/00750081000367L.jpg) · [Fuente / Source](https://www.walmart.com.mx/ip/botana-barcel-takis-fuego-picante-sabor-chile-y-limon-70-g/00750081000367)
- **País / Country:** Mexico
- **Mercado / Market:** Mexico
- **Envase / Package:** 70 g
- **Categoría / Category:** `tortilla_chips`
- **Barcode:** No registrado / Not recorded
- **Estado / Status:** `ready` · **Verificación:** `manufacturer_website`
- **Descripción (ES):** Rollitos de maíz enrollados con sazonador picante de chile y limón, versión mexicana.
- **Description (EN):** Rolled corn snacks with spicy chili-lime seasoning, Mexican-market version.

**Ingredientes declarados / Declared ingredients**

HARINA DE MAÍZ, ACEITE VEGETAL, SAZONADOR (SAL YODADA, MALTODEXTRINA, AZÚCARES AÑADIDOS (AZÚCAR), ÁCIDO CÍTRICO, GMS, PROTEÍNA VEGETAL, ANTOCIANINAS, CEBOLLA, BICARBONATO DE SODIO, EXTRACTO DE LEVADURA, ACEITE VEGETAL, SABORIZANTES NATURALES E IDÉNTICOS AL NATURAL, EXTRACTO DE CHILE).

**Respuestas aceptadas / Accepted answers (14)**

| Español | English | Alias / Aliases |
|---|---|---|
| harina de maíz | corn flour | harina de maíz, corn flour |
| aceite vegetal | vegetable oil | aceite vegetal, vegetable oil |
| sal yodada | iodized salt | sal yodada, iodized salt |
| maltodextrina | maltodextrin | maltodextrina, maltodextrin |
| azúcar | sugar | azúcar, sugar |
| ácido cítrico | citric acid | ácido cítrico, citric acid |
| glutamato monosódico | monosodium glutamate | glutamato monosódico, monosodium glutamate |
| proteína vegetal | vegetable protein | proteína vegetal, vegetable protein |
| antocianinas | anthocyanins | antocianinas, anthocyanins |
| cebolla | onion | cebolla, onion |
| bicarbonato de sodio | sodium bicarbonate | bicarbonato de sodio, sodium bicarbonate |
| extracto de levadura | yeast extract | extracto de levadura, yeast extract |
| saborizantes | flavorings | saborizantes, flavorings |
| extracto de chile | chili extract | extracto de chile, chili extract |

**Fuente / Source:** [Barcel México](https://www.barcel.com.mx/marcas/takis/fuego)  
**Tipo / Type:** `manufacturer_website`  
**Alcance / Supports:** Official Mexican Takis Fuego product page; ingredient declaration and 70 g package option.

---

### Gansito 50 g / Gansito 50 g

- **ID:** `gansito-marinela-mexico-50g`
- **Foto real / Real photo:** [Ver envase / View package](https://i5-mx.walmartimages.com/gr/images/product-images/img_large/00750100015310L.jpg) · [Fuente / Source](https://www.walmart.com.mx/ip/envasados-dulces/pastelito-marinela-gansito-50-g/00750100015310)
- **País / Country:** Mexico
- **Mercado / Market:** Mexico
- **Envase / Package:** 50 g (1 pieza)
- **Categoría / Category:** `snack_cake`
- **Barcode:** No registrado / Not recorded
- **Estado / Status:** `ready` · **Verificación:** `manufacturer_product_document`
- **Descripción (ES):** Pastelito relleno de fresa, cubierto con chocolate y granillo, versión mexicana.
- **Description (EN):** Strawberry-filled snack cake with chocolate coating and sprinkles, Mexican-market version.

**Ingredientes declarados / Declared ingredients**

AZÚCARES AÑADIDOS (AZÚCAR, JARABE DE MAÍZ DE ALTA FRUCTOSA, AZÚCAR INVERTIDO, GLUCOSA, MALTOSA, JUGO CONCENTRADO DE MANZANA), GRASA Y ACEITE VEGETAL, HARINA DE TRIGO (GLUTEN), LECHE RECONSTITUIDA, HUEVO, PURÉ DE FRESA (5%), COCOA, GRASA BUTÍRICA, GLICERINA, ALMIDÓN MODIFICADO, ÉSTERES DE PROPILENGLICOL DE ÁCIDOS GRASOS, ESTEAROIL LACTILATO DE SODIO, SAL YODADA, PROPIONATO SÓDICO, MONO Y DIGLICÉRIDOS, MONOESTEARATO DE SORBITÁN, POLISORBATO 60, ALMIDÓN, ÁCIDO SÓRBICO, BENZOATO DE SODIO, SORBATO DE POTASIO, SABORIZANTE ARTIFICIAL Y NATURAL, LECITINA DE SOYA, CANELA, TRIESTEARATO DE SORBITÁN, VAINILLINA, ENZIMAS, GOMA XANTANA, GOMA GUAR, GOMA DE ALGARROBO, GOMA ARÁBIGA, CARRAGENINA, CMC SÓDICA, ÁCIDO CÍTRICO, ROJO 40, ROJO 3.

**Respuestas aceptadas / Accepted answers (42)**

| Español | English | Alias / Aliases |
|---|---|---|
| azúcar | sugar | azúcar, sugar |
| jarabe de maíz de alta fructosa | high-fructose corn syrup | jarabe de maíz de alta fructosa, high-fructose corn syrup |
| azúcar invertido | invert sugar | azúcar invertido, invert sugar |
| glucosa | glucose | glucosa, glucose |
| maltosa | maltose | maltosa, maltose |
| jugo concentrado de manzana | apple juice concentrate | jugo concentrado de manzana, apple juice concentrate |
| grasa vegetal | vegetable fat | grasa vegetal, vegetable fat |
| aceite vegetal | vegetable oil | aceite vegetal, vegetable oil |
| harina de trigo | wheat flour | harina de trigo, wheat flour |
| leche reconstituida | reconstituted milk | leche reconstituida, reconstituted milk |
| huevo | egg | huevo, egg |
| puré de fresa | strawberry puree | puré de fresa, strawberry puree |
| cocoa | cocoa | cocoa, cocoa |
| grasa butírica | butterfat | grasa butírica, butterfat |
| glicerina | glycerin | glicerina, glycerin |
| almidón modificado | modified starch | almidón modificado, modified starch |
| ésteres de propilenglicol de ácidos grasos | propylene glycol esters of fatty acids | ésteres de propilenglicol de ácidos grasos, propylene glycol esters of fatty acids |
| estearoil lactilato de sodio | sodium stearoyl lactylate | estearoil lactilato de sodio, sodium stearoyl lactylate |
| sal yodada | iodized salt | sal yodada, iodized salt |
| propionato sódico | sodium propionate | propionato sódico, sodium propionate |
| mono y diglicéridos | mono- and diglycerides | mono y diglicéridos, mono- and diglycerides |
| monoestearato de sorbitán | sorbitan monostearate | monoestearato de sorbitán, sorbitan monostearate |
| polisorbato 60 | polysorbate 60 | polisorbato 60, polysorbate 60 |
| almidón | starch | almidón, starch |
| ácido sórbico | sorbic acid | ácido sórbico, sorbic acid |
| benzoato de sodio | sodium benzoate | benzoato de sodio, sodium benzoate |
| sorbato de potasio | potassium sorbate | sorbato de potasio, potassium sorbate |
| saborizantes | flavorings | saborizantes, flavorings |
| lecitina de soya | soy lecithin | lecitina de soya, soy lecithin |
| canela | cinnamon | canela, cinnamon |
| triestearato de sorbitán | sorbitan tristearate | triestearato de sorbitán, sorbitan tristearate |
| vainillina | vanillin | vainillina, vanillin |
| enzimas | enzymes | enzimas, enzymes |
| goma xantana | xanthan gum | goma xantana, xanthan gum |
| goma guar | guar gum | goma guar, guar gum |
| goma de algarrobo | locust bean gum | goma de algarrobo, locust bean gum |
| goma arábiga | gum arabic | goma arábiga, gum arabic |
| carragenina | carrageenan | carragenina, carrageenan |
| CMC sódica | sodium carboxymethyl cellulose | CMC sódica, sodium carboxymethyl cellulose |
| ácido cítrico | citric acid | ácido cítrico, citric acid |
| rojo 40 | Red 40 | rojo 40, Red 40 |
| rojo 3 | Red 3 | rojo 3, Red 3 |

**Fuente / Source:** [Grupo Bimbo / Marinela product label PDF](https://d2g10w8g19lwbg.cloudfront.net/s3fs-public/files/2023-10/info-nutri-Gansito-50g_0.pdf?VersionId=SHuPS.dynsbYtZ8WH2_Z86cjgxE1L0Ab)  
**Tipo / Type:** `manufacturer_product_document`  
**Alcance / Supports:** Ingredient declaration for Mexican Marinela Gansito, 50 g; official-looking manufacturer label document.

---

### Pocky de chocolate (Japón) / Pocky Chocolate (Japan)

- **ID:** `pocky-chocolate-japan-2pack`
- **Foto real / Real photo:** [Ver envase / View package](https://gorodtokyo.ru/upload/goods_pic_large/23377.jpg) · [Fuente / Source](https://gorodtokyo.ru/produkt/glico-pocky-yaponskiy-shokolad-23377/)- **Marca / Brand:** Glico
- **País / Country:** Japan
- **Mercado / Market:** Japan
- **Envase / Package:** 2 bags (29 g per bag)
- **Categoría / Category:** `chocolate_biscuit_sticks`
- **Barcode:** 4901005009158
- **Estado / Status:** `ready` · **Verificación:** `manufacturer_website`
- **Descripción (ES):** Palitos de pretzel con cobertura de chocolate, fórmula japonesa.
- **Description (EN):** Pretzel biscuit sticks coated in chocolate, Japanese-market formula.

**Ingredientes declarados / Declared ingredients**

小麦粉（国内製造）、砂糖、カカオマス、植物油脂、全粉乳、小麦全粒粉、モルトエキス、ココアバター、発酵バター、食塩、イースト／乳化剤、香料（一部に乳成分・小麦・大豆を含む）

**Respuestas aceptadas / Accepted answers (13)**

| Español | English | Alias / Aliases |
|---|---|---|
| harina de trigo | wheat flour | harina de trigo, wheat flour |
| azúcar | sugar | azúcar, sugar |
| masa de cacao | cocoa mass | masa de cacao, cocoa mass |
| aceite vegetal | vegetable oil | aceite vegetal, vegetable oil |
| leche entera en polvo | whole milk powder | leche entera en polvo, whole milk powder |
| harina integral de trigo | whole wheat flour | harina integral de trigo, whole wheat flour |
| extracto de malta | malt extract | extracto de malta, malt extract |
| manteca de cacao | cocoa butter | manteca de cacao, cocoa butter |
| manteca fermentada | cultured butter | manteca fermentada, cultured butter |
| sal | salt | sal, salt |
| levadura | yeast | levadura, yeast |
| emulsionante | emulsifier | emulsionante, emulsifier |
| saborizante | flavoring | saborizante, flavoring |

**Fuente / Source:** [Ezaki Glico Japan](https://www.glico.com/jp/product/chocolate/pocky/47143/)  
**Tipo / Type:** `manufacturer_website`  
**Alcance / Supports:** Official Japanese Glico product page; Japanese ingredient declaration and JAN code.

---

### HARIBO Goldbears 5 oz / HARIBO Goldbears 5 oz

- **ID:** `haribo-goldbears-us-5oz`
- **Foto real / Real photo:** [Ver envase / View package](https://stevensonstoys.com/cdn/shop/files/haribo.jpg?v=1708381226) · [Fuente / Source](https://stevensonstoys.com/products/1003931)
- **Marca / Brand:** HARIBO
- **País / Country:** Germany
- **Mercado / Market:** United States
- **Envase / Package:** 5 oz (141 g)
- **Categoría / Category:** `gummy_candy`
- **Barcode:** No registrado / Not recorded
- **Estado / Status:** `ready` · **Verificación:** `manufacturer_website`
- **Descripción (ES):** Ositos de goma en cinco colores, fórmula del mercado estadounidense.
- **Description (EN):** Five-color gummy bears, United States-market formula.

**Ingredientes declarados / Declared ingredients**

GLUCOSE SYRUP (FROM WHEAT OR CORN), SUGAR, GELATIN, DEXTROSE (FROM WHEAT OR CORN), CONTAINS LESS THAN 2% OF: CITRIC ACID, ARTIFICIAL AND NATURAL FLAVORS, SUNFLOWER OIL, WHITE BEESWAX, YELLOW BEESWAX, YELLOW 5, RED 40, BLUE 1.

**Respuestas aceptadas / Accepted answers (12)**

| Español | English | Alias / Aliases |
|---|---|---|
| jarabe de glucosa | glucose syrup | jarabe de glucosa, glucose syrup |
| azúcar | sugar | azúcar, sugar |
| gelatina | gelatin | gelatina, gelatin |
| dextrosa | dextrose | dextrosa, dextrose |
| ácido cítrico | citric acid | ácido cítrico, citric acid |
| sabores artificiales y naturales | artificial and natural flavors | sabores artificiales y naturales, artificial and natural flavors |
| aceite de girasol | sunflower oil | aceite de girasol, sunflower oil |
| cera blanca de abeja | white beeswax | cera blanca de abeja, white beeswax |
| cera amarilla de abeja | yellow beeswax | cera amarilla de abeja, yellow beeswax |
| amarillo 5 | Yellow 5 | amarillo 5, Yellow 5 |
| rojo 40 | Red 40 | rojo 40, Red 40 |
| azul 1 | Blue 1 | azul 1, Blue 1 |

**Fuente / Source:** [HARIBO USA](https://www.haribo.com/en-us/products/goldbears)  
**Tipo / Type:** `manufacturer_website`  
**Alcance / Supports:** Official US Goldbears page; ingredients and US-market formulation.

---

### McVitie's Digestives Original / McVitie's Digestives Original

- **ID:** `mcvities-digestives-uk-original`
- **Foto real / Real photo:** [Ver envase / View package](https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/41c67d602d8b42ad87c49c8d6839441c~tplv-fhlh96nyum-crop-webp%3A1080%3A1080.webp?dr=12190&from=2378011839&idc=useast5&ps=933b5bde&shcp=607f11de&shp=8dbd94bf&t=555f072d) · [Fuente / Source](https://shop.tiktok.com/us/pdp/mcvities-digestives-the-original-355g-crunchy-biscuits/1729440104182550612)- **Marca / Brand:** McVitie's
- **País / Country:** United Kingdom
- **Mercado / Market:** United Kingdom
- **Envase / Package:** Original pack (24 biscuits typical)
- **Categoría / Category:** `plain_cookies`
- **Barcode:** No registrado / Not recorded
- **Estado / Status:** `ready` · **Verificación:** `manufacturer_website`
- **Descripción (ES):** Galletitas Digestive originales de trigo, receta británica.
- **Description (EN):** Original British wheat Digestive biscuits.

**Ingredientes declarados / Declared ingredients**

Flour (55%) (Wheat Flour, Calcium, Iron, Niacin, Thiamin), Vegetable Oil (Palm), Wholemeal Wheat Flour (16%), Sugar, Partially Inverted Sugar Syrup, Raising Agents (Sodium Bicarbonate, Malic Acid, Ammonium Bicarbonate), Salt.

**Respuestas aceptadas / Accepted answers (13)**

| Español | English | Alias / Aliases |
|---|---|---|
| harina de trigo | wheat flour | harina de trigo, wheat flour |
| calcio | calcium | calcio, calcium |
| hierro | iron | hierro, iron |
| niacina | niacin | niacina, niacin |
| tiamina | thiamin | tiamina, thiamin |
| aceite de palma | palm oil | aceite de palma, palm oil |
| harina integral de trigo | wholemeal wheat flour | harina integral de trigo, wholemeal wheat flour |
| azúcar | sugar | azúcar, sugar |
| jarabe de azúcar parcialmente invertido | partially inverted sugar syrup | jarabe de azúcar parcialmente invertido, partially inverted sugar syrup |
| bicarbonato de sodio | sodium bicarbonate | bicarbonato de sodio, sodium bicarbonate |
| ácido málico | malic acid | ácido málico, malic acid |
| bicarbonato de amonio | ammonium bicarbonate | bicarbonato de amonio, ammonium bicarbonate |
| sal | salt | sal, salt |

**Fuente / Source:** [McVitie's UK](https://mcvities.com/en-gb/original)  
**Tipo / Type:** `manufacturer_website`  
**Alcance / Supports:** Official McVitie's UK product page; ingredient declaration and pack reference.

---

### Papas fritas Walkers sabor salado / Walkers Ready Salted Crisps

- **ID:** `walkers-ready-salted-uk`
- **Foto real / Real photo:** [Ver envase / View package](https://automaticrefreshments.com/cdn/shop/files/19_7f026638-db48-4f85-974d-9e5c6e7d546f.png?v=1706094027&width=800) · [Fuente / Source](https://automaticrefreshments.com/collections/crisps)
- **Marca / Brand:** Walkers
- **País / Country:** United Kingdom
- **Mercado / Market:** United Kingdom
- **Envase / Package:** Standard single-serve pack (25 g nutrition serving)
- **Categoría / Category:** `potato_chips`
- **Barcode:** No registrado / Not recorded
- **Estado / Status:** `ready` · **Verificación:** `manufacturer_website`
- **Descripción (ES):** Papas fritas clásicas con sal, hechas con papas británicas.
- **Description (EN):** Classic salted potato crisps made with British potatoes.

**Ingredientes declarados / Declared ingredients**

Potatoes, Vegetable Oils (Sunflower, Rapeseed, in varying proportions), Salt, Antioxidants (Rosemary Extract, Ascorbic Acid, Tocopherol Rich Extract, Citric acid).

**Respuestas aceptadas / Accepted answers (8)**

| Español | English | Alias / Aliases |
|---|---|---|
| papas | potatoes | papas, potatoes |
| aceite de girasol | sunflower oil | aceite de girasol, sunflower oil |
| aceite de colza | rapeseed oil | aceite de colza, rapeseed oil |
| sal | salt | sal, salt |
| extracto de romero | rosemary extract | extracto de romero, rosemary extract |
| ácido ascórbico | ascorbic acid | ácido ascórbico, ascorbic acid |
| extracto rico en tocoferoles | tocopherol-rich extract | extracto rico en tocoferoles, tocopherol-rich extract |
| ácido cítrico | citric acid | ácido cítrico, citric acid |

**Fuente / Source:** [Walkers UK](https://www.walkers.co.uk/our-range/walkers-crisps/ready-salted)  
**Tipo / Type:** `manufacturer_website`  
**Alcance / Supports:** Official Walkers UK Ready Salted product page; ingredient declaration.

---

### Cadbury Dairy Milk 45 g / Cadbury Dairy Milk 45 g

- **ID:** `cadbury-dairy-milk-uk-45g`
- **Foto real / Real photo:** [Ver envase / View package](https://www.cadburygiftsdirect.co.uk/media/catalog/product/cache/dd4850ad4231b6306bceadf38a0bbeed/c/d/cdm_45g_mob_opt.jpg) · [Fuente / Source](https://www.cadburygiftsdirect.co.uk/cadbury-dairy-milk-bar-45g.html)- **Marca / Brand:** Cadbury
- **País / Country:** United Kingdom
- **Mercado / Market:** United Kingdom
- **Envase / Package:** 45 g bar
- **Categoría / Category:** `milk_chocolate`
- **Barcode:** No registrado / Not recorded
- **Estado / Status:** `ready` · **Verificación:** `manufacturer_website`
- **Descripción (ES):** Chocolate con leche clásico británico, barra de 45 gramos.
- **Description (EN):** Classic British milk chocolate, 45-gram bar.

**Ingredientes declarados / Declared ingredients**

MILK, sugar, cocoa butter, cocoa mass, vegetable fats (palm, shea), emulsifiers (E442, E476), flavourings.

**Respuestas aceptadas / Accepted answers (9)**

| Español | English | Alias / Aliases |
|---|---|---|
| leche | milk | leche, milk |
| azúcar | sugar | azúcar, sugar |
| manteca de cacao | cocoa butter | manteca de cacao, cocoa butter |
| masa de cacao | cocoa mass | masa de cacao, cocoa mass |
| grasa de palma | palm fat | grasa de palma, palm fat |
| grasa de karité | shea fat | grasa de karité, shea fat |
| emulsionante E442 | emulsifier E442 | emulsionante E442, emulsifier E442 |
| emulsionante E476 | emulsifier E476 | emulsionante E476, emulsifier E476 |
| saborizantes | flavourings | saborizantes, flavourings |

**Fuente / Source:** [Mondelez Away From Home UK](https://www.mondelez-afh.co.uk/products/cadbury-dairy-milk-45g-40032/)  
**Tipo / Type:** `manufacturer_website`  
**Alcance / Supports:** Official UK product specification for 45 g Cadbury Dairy Milk.

---

### Ferrero Rocher pack de 3 (EE. UU.) / Ferrero Rocher 3-Piece Pack (US)

- **ID:** `ferrero-rocher-us-3pack`
- **Foto real / Real photo:** [Ver envase / View package](https://142127960.cdn6.editmysite.com/uploads/1/4/2/1/142127960/Y5RA27S777GOOW263K6YLBKR.jpeg) · [Fuente / Source](https://www.trythesweetspot.com/product/ferrero-rocher-shelf-pack-3-pc/735)- **Marca / Brand:** Ferrero
- **País / Country:** Italy
- **Mercado / Market:** United States
- **Envase / Package:** 3 pieces
- **Categoría / Category:** `chocolate_candy`
- **Barcode:** No registrado / Not recorded
- **Estado / Status:** `ready` · **Verificación:** `manufacturer_website`
- **Descripción (ES):** Bombones de chocolate con leche y avellanas, versión estadounidense.
- **Description (EN):** Milk chocolate and hazelnut pralines, United States-market version.

**Ingredientes declarados / Declared ingredients**

Milk Chocolate (Sugar, Cocoa Butter, Cocoa Mass, Skim Milk Powder, Butteroil, Soy Lecithin as Emulsifier, Vanillin: An Artificial Flavor), Hazelnuts, Sugar, Palm Oil, Wheat Flour, Whey, Lowfat Cocoa Powder, Soy Lecithin as Emulsifier, Sodium Bicarbonate as Leavening Agent, Salt, Vanillin: An Artificial Flavor.

**Respuestas aceptadas / Accepted answers (14)**

| Español | English | Alias / Aliases |
|---|---|---|
| azúcar | sugar | azúcar, sugar |
| manteca de cacao | cocoa butter | manteca de cacao, cocoa butter |
| masa de cacao | cocoa mass | masa de cacao, cocoa mass |
| leche descremada en polvo | skim milk powder | leche descremada en polvo, skim milk powder |
| grasa láctea anhidra | butteroil | grasa láctea anhidra, butteroil |
| lecitina de soja | soy lecithin | lecitina de soja, soy lecithin |
| vainillina | vanillin | vainillina, vanillin |
| avellanas | hazelnuts | avellanas, hazelnuts |
| aceite de palma | palm oil | aceite de palma, palm oil |
| harina de trigo | wheat flour | harina de trigo, wheat flour |
| suero de leche | whey | suero de leche, whey |
| cacao bajo en grasa | lowfat cocoa powder | cacao bajo en grasa, lowfat cocoa powder |
| bicarbonato de sodio | sodium bicarbonate | bicarbonato de sodio, sodium bicarbonate |
| sal | salt | sal, salt |

**Fuente / Source:** [Ferrero Rocher US](https://www.ferrerorocher.com/us/en/our-products/ferrero-rocher/3-piece-pack)  
**Tipo / Type:** `manufacturer_website`  
**Alcance / Supports:** Official US Ferrero Rocher ingredient declaration.

---

### Cereal Nescau 210 g / Nescau Cereal 210 g

- **ID:** `nescau-cereal-brazil-210g`
- **Foto real / Real photo:** [Ver envase / View package](https://tdc01z.vteximg.com.br/arquivos/ids/157344-1000-1000/11225-cer-nestle-210g-cx-nescau-choc.png?v=637897717638530000) · [Fuente / Source](https://www.supercordeiro.com.br/11225-cer-nestle-210g-cx-nescau-choc/p)
- **Marca / Brand:** Nestlé
- **País / Country:** Brazil
- **Mercado / Market:** Brazil
- **Envase / Package:** 210 g
- **Categoría / Category:** `breakfast_cereal`
- **Barcode:** 7891000111161
- **Estado / Status:** `ready` · **Verificación:** `manufacturer_website`
- **Descripción (ES):** Cereal de bolitas de maíz integral con cacao, versión brasileña.
- **Description (EN):** Whole-corn and cocoa cereal balls, Brazilian-market version.

**Ingredientes declarados / Declared ingredients**

Farinha de milho integral, açúcar, farinha de milho enriquecida com ferro e ácido fólico, xarope de glicose, cacau em pó, oleína de palma, minerais [cálcio (carbonato de cálcio), ferro (ferro eletrolítico) e zinco (óxido de zinco)] e vitaminas [vitamina B3 (niacina), vitamina B5 (ácido pantotênico), vitamina B2 (riboflavina), vitamina B6 (cloridrato de piridoxina) e vitamina B9 (ácido fólico)], sal, aromatizantes, antiumectante fosfato dicálcico, corante caramelo IV, estabilizante fosfato trissódico e antioxidante tocoferol.

**Respuestas aceptadas / Accepted answers (20)**

| Español | English | Alias / Aliases |
|---|---|---|
| harina integral de maíz | whole corn flour | harina integral de maíz, whole corn flour |
| azúcar | sugar | azúcar, sugar |
| harina de maíz enriquecida con hierro y ácido fólico | iron- and folic-acid-enriched corn flour | harina de maíz enriquecida con hierro y ácido fólico, iron- and folic-acid-enriched corn flour |
| jarabe de glucosa | glucose syrup | jarabe de glucosa, glucose syrup |
| cacao en polvo | cocoa powder | cacao en polvo, cocoa powder |
| oleína de palma | palm olein | oleína de palma, palm olein |
| carbonato de calcio | calcium carbonate | carbonato de calcio, calcium carbonate |
| hierro electrolítico | electrolytic iron | hierro electrolítico, electrolytic iron |
| óxido de zinc | zinc oxide | óxido de zinc, zinc oxide |
| niacina (vitamina B3) | niacin (vitamin B3) | niacina (vitamina B3), niacin (vitamin B3) |
| ácido pantoténico (vitamina B5) | pantothenic acid (vitamin B5) | ácido pantoténico (vitamina B5), pantothenic acid (vitamin B5) |
| riboflavina (vitamina B2) | riboflavin (vitamin B2) | riboflavina (vitamina B2), riboflavin (vitamin B2) |
| clorhidrato de piridoxina (vitamina B6) | pyridoxine hydrochloride (vitamin B6) | clorhidrato de piridoxina (vitamina B6), pyridoxine hydrochloride (vitamin B6) |
| ácido fólico (vitamina B9) | folic acid (vitamin B9) | ácido fólico (vitamina B9), folic acid (vitamin B9) |
| sal | salt | sal, salt |
| aromatizantes | flavorings | aromatizantes, flavorings |
| fosfato dicálcico | dicalcium phosphate | fosfato dicálcico, dicalcium phosphate |
| caramelo IV | caramel IV | caramelo IV, caramel IV |
| fosfato trisódico | trisodium phosphate | fosfato trisódico, trisodium phosphate |
| tocoferol | tocopherol | tocoferol, tocopherol |

**Fuente / Source:** [Nestlé Brasil](https://www.nescau.com.br/produtos/cereal-matinal/nescau)  
**Tipo / Type:** `manufacturer_website`  
**Alcance / Supports:** Official Nestlé Nescau page; 210 g package option and ingredient declaration. Page declaration lists minerals and vitamins.

---

### Trakinas Chocolate 126 g / Trakinas Chocolate 126 g

- **ID:** `trakinas-chocolate-brazil-126g`
- **Foto real / Real photo:** [Ver envase / View package](https://www.marchebresil.com/cdn/shop/files/Trakinaschocolate126g.webp?v=1761758755&width=1500) · [Fuente / Source](https://www.marchebresil.com/en/products/trakinas-chocolate-120g)
- **Marca / Brand:** Mondelēz
- **País / Country:** Brazil
- **Mercado / Market:** Brazil
- **Envase / Package:** 126 g
- **Categoría / Category:** `filled_cookies`
- **Barcode:** No registrado / Not recorded
- **Estado / Status:** `ready` · **Verificación:** `retailer_product_label`
- **Descripción (ES):** Galletitas rellenas sabor chocolate, presentación brasileña de 126 g.
- **Description (EN):** Chocolate-flavored sandwich cookies, Brazilian 126 g pack.

**Ingredientes declarados / Declared ingredients**

Farinha de trigo enriquecida com ferro e ácido fólico, açúcar, gordura vegetal, gordura vegetal interesterificada, açúcar invertido, carbonato de cálcio, sal, cacau em pó, corantes: caramelo III, carmim e beta-caroteno sintético, fermentos químicos: bicarbonato de sódio, fosfato monocálcico e bicarbonato de amônio, emulsificantes: lecitina de soja e ésteres de ácido diacetil tartárico e mono e diglicerídeos, aromatizantes e acidulante ácido cítrico.

**Respuestas aceptadas / Accepted answers (19)**

| Español | English | Alias / Aliases |
|---|---|---|
| harina de trigo enriquecida con hierro y ácido fólico | iron- and folic-acid-enriched wheat flour | harina de trigo enriquecida con hierro y ácido fólico, iron- and folic-acid-enriched wheat flour |
| azúcar | sugar | azúcar, sugar |
| grasa vegetal | vegetable fat | grasa vegetal, vegetable fat |
| grasa vegetal interesterificada | interesterified vegetable fat | grasa vegetal interesterificada, interesterified vegetable fat |
| azúcar invertido | invert sugar | azúcar invertido, invert sugar |
| carbonato de calcio | calcium carbonate | carbonato de calcio, calcium carbonate |
| sal | salt | sal, salt |
| cacao en polvo | cocoa powder | cacao en polvo, cocoa powder |
| caramelo III | caramel III | caramelo III, caramel III |
| carmín | carmine | carmín, carmine |
| beta-caroteno sintético | synthetic beta-carotene | beta-caroteno sintético, synthetic beta-carotene |
| bicarbonato de sodio | sodium bicarbonate | bicarbonato de sodio, sodium bicarbonate |
| fosfato monocálcico | monocalcium phosphate | fosfato monocálcico, monocalcium phosphate |
| bicarbonato de amonio | ammonium bicarbonate | bicarbonato de amonio, ammonium bicarbonate |
| lecitina de soja | soy lecithin | lecitina de soja, soy lecithin |
| ésteres de ácido diacetil tartárico | diacetyl tartaric acid esters | ésteres de ácido diacetil tartárico, diacetyl tartaric acid esters |
| mono y diglicéridos | mono- and diglycerides | mono y diglicéridos, mono- and diglycerides |
| aromatizantes | flavorings | aromatizantes, flavorings |
| ácido cítrico | citric acid | ácido cítrico, citric acid |

**Fuente / Source:** [Pão de Açúcar Brazil](https://www.paodeacucar.com/produto/444497/biscoito-recheio-chocolate-trakinas-126g)  
**Tipo / Type:** `retailer_product_label`  
**Alcance / Supports:** Retailer ingredient transcription for Trakinas Chocolate 126 g; corroborated with IDEC label analysis (2020), formula may have changed.

---

### Sabritas Original / Sabritas Original

- **ID:** `sabritas-original-mexico-45g`
- **Foto real / Real photo:** [Ver envase / View package](https://i5.walmartimages.com.mx/gr/images/product-images/img_large/00750101110145L2.jpg) · [Fuente / Source](https://despensa.bodegaaurrera.com.mx/ip/papas-fritas-sabritas-original-45-g/00750101110145)
- **Marca / Brand:** Sabritas
- **País / Country:** Mexico
- **Mercado / Market:** Mexico
- **Envase / Package:** 45 g (market pack reference)
- **Categoría / Category:** `potato_chips`
- **Barcode:** No registrado / Not recorded
- **Estado / Status:** `ready` · **Verificación:** `manufacturer_website`
- **Descripción (ES):** Papas fritas clásicas mexicanas con solo tres ingredientes.
- **Description (EN):** Classic Mexican potato chips made with only three ingredients.

**Ingredientes declarados / Declared ingredients**

Papas 100% mexicanas, aceite vegetal y sal.

**Respuestas aceptadas / Accepted answers (3)**

| Español | English | Alias / Aliases |
|---|---|---|
| papas | potatoes | papas, potatoes |
| aceite vegetal | vegetable oil | aceite vegetal, vegetable oil |
| sal | salt | sal, salt |

**Fuente / Source:** [PepsiCo México](https://www.pepsico.com.mx/nuestro-impacto/sustentabilidad/sabritas-naturalidad)  
**Tipo / Type:** `manufacturer_website`  
**Alcance / Supports:** Official PepsiCo Mexico FAQ: Sabritas Original contains Mexican potatoes, oil and salt.

---

### Ritter Sport Leche Alpina / Ritter Sport Alpine Milk

- **ID:** `ritter-sport-alpenmilch-germany-100g`
- **Foto real / Real photo:** [Ver envase / View package](https://oursweetindulgence.net/cdn/shop/files/304975.avif?v=1768523620&width=533) · [Fuente / Source](https://oursweetindulgence.net/collections/german)
- **Marca / Brand:** Ritter Sport
- **País / Country:** Germany
- **Mercado / Market:** Germany
- **Envase / Package:** 100 g
- **Categoría / Category:** `milk_chocolate`
- **Barcode:** 4000417018007
- **Estado / Status:** `ready` · **Verificación:** `manufacturer_specification_via_retailer_pdf`
- **Descripción (ES):** Chocolate con leche alpina y pasta de avellanas, versión alemana.
- **Description (EN):** Alpine milk chocolate with hazelnut paste, German-market version.

**Ingredientes declarados / Declared ingredients**

Zucker, VollMILCHpulver (20 %), Kakaobutter, Kakaomasse, HASELNUSSmasse, Emulgator: Lecithine (SOJA).

**Respuestas aceptadas / Accepted answers (6)**

| Español | English | Alias / Aliases |
|---|---|---|
| azúcar | sugar | azúcar, sugar |
| leche entera en polvo | whole milk powder | leche entera en polvo, whole milk powder |
| manteca de cacao | cocoa butter | manteca de cacao, cocoa butter |
| masa de cacao | cocoa mass | masa de cacao, cocoa mass |
| pasta de avellanas | hazelnut paste | pasta de avellanas, hazelnut paste |
| lecitina de soja | soy lecithin | lecitina de soja, soy lecithin |

**Fuente / Source:** [Alfred Ritter GmbH product specification (PDF hosted by retailer)](https://wietholt-shop.de/media/10/ff/1f/1768478784/ritter_sport_29188.pdf)  
**Tipo / Type:** `manufacturer_specification_via_retailer_pdf`  
**Alcance / Supports:** Product specification for Alpenmilch 100 g; GTIN 4000417018007 and ingredient list. Precautionary traces excluded.

---

### Shin Ramyun Original en vaso / Shin Ramyun Original Cup

- **ID:** `shin-ramyun-original-cup-us-75g`
- **Foto real / Real photo:** [Ver envase / View package](https://nongshimusa.com/html5/imgs/world_of_shin/shin_ramyun_cup.png) · [Fuente / Source](https://nongshimusa.com/product-detail?pid=45)- **Marca / Brand:** Nongshim
- **País / Country:** South Korea
- **Mercado / Market:** United States
- **Envase / Package:** 1 cup · 75 g
- **Categoría / Category:** `instant_noodles`
- **Barcode:** No registrado / Not recorded
- **Estado / Status:** `ready` · **Verificación:** `manufacturer_website`
- **Descripción (ES):** Fideos instantáneos picantes con caldo sabor carne, versión estadounidense en vaso.
- **Description (EN):** Spicy instant noodles with beef-flavored broth, US cup version.

**Ingredientes declarados / Declared ingredients**

ENRICHED WHEAT FLOUR (WHEAT FLOUR, NIACIN, REDUCED IRON, THIAMINE MONONITRATE, RIBOFLAVIN, FOLIC ACID), POTATO STARCH, PALM OIL, MODIFIED POTATO STARCH, DRIED FLAKES [CARROT (CARROT, DEXTROSE), MUSHROOM, GREEN ONION, RED CHILI PEPPER], SALT, CONTAINS LESS THAN 2% OF: ARTIFICIAL FLAVOR, BEEF BONE EXTRACT, BEEF FAT, BLACK PEPPER, CITRIC ACID, CORN SYRUP, DEXTROSE, DISODIUM GUANYLATE, DISODIUM INOSINATE, DISODIUM SUCCINATE, FLAVOR ENHANCER (MALTODEXTRIN, DEXTROSE, GLYCINE, SODIUM PHOSPHATE TRIBASIC, D-XYLOSE), GARLIC, GLYCERIN, GUM ARABIC, HYDROLYZED CORN PROTEIN, HYDROLYZED SOY PROTEIN, HYDROLYZED WHEAT PROTEIN, MALTODEXTRIN, MONOSODIUM GLUTAMATE, MUSHROOM, NATURAL FLAVORS (CONTAINS SESAME), ONION, POTASSIUM CARBONATE, RED CHILI PEPPER, RIBOFLAVIN (COLOR), RICE FLOUR, SODIUM CARBONATE, SODIUM PHOSPHATES, SOY LECITHIN, SOYBEAN PASTE (SOY, WHEAT, SALT), SOYBEAN SPROUT EXTRACT, SUGAR, TOCOPHEROLS (ANTIOXIDANT), VEGETABLE MIXTURE (ONION, CORN SYRUP, CABBAGE, SPINACH, PUMPKIN, CARROT, TOMATO PASTE), WHEAT STARCH, YEAST EXTRACT, YELLOW CORN FLOUR.

**Respuestas aceptadas / Accepted answers (51)**

| Español | English | Alias / Aliases |
|---|---|---|
| harina de trigo enriquecida | enriched wheat flour | harina de trigo enriquecida, enriched wheat flour |
| niacina | niacin | niacina, niacin |
| hierro reducido | reduced iron | hierro reducido, reduced iron |
| mononitrato de tiamina | thiamine mononitrate | mononitrato de tiamina, thiamine mononitrate |
| riboflavina | riboflavin | riboflavina, riboflavin |
| ácido fólico | folic acid | ácido fólico, folic acid |
| almidón de papa | potato starch | almidón de papa, potato starch |
| aceite de palma | palm oil | aceite de palma, palm oil |
| almidón de papa modificado | modified potato starch | almidón de papa modificado, modified potato starch |
| zanahoria | carrot | zanahoria, carrot |
| dextrosa | dextrose | dextrosa, dextrose |
| champiñones | mushrooms | champiñones, mushrooms |
| cebolla de verdeo | green onion | cebolla de verdeo, green onion |
| chile rojo | red chili pepper | chile rojo, red chili pepper |
| sal | salt | sal, salt |
| sabor artificial | artificial flavor | sabor artificial, artificial flavor |
| extracto de hueso de res | beef bone extract | extracto de hueso de res, beef bone extract |
| grasa vacuna | beef fat | grasa vacuna, beef fat |
| pimienta negra | black pepper | pimienta negra, black pepper |
| ácido cítrico | citric acid | ácido cítrico, citric acid |
| jarabe de maíz | corn syrup | jarabe de maíz, corn syrup |
| guanilato disódico | disodium guanylate | guanilato disódico, disodium guanylate |
| inosinato disódico | disodium inosinate | inosinato disódico, disodium inosinate |
| succinato disódico | disodium succinate | succinato disódico, disodium succinate |
| maltodextrina | maltodextrin | maltodextrina, maltodextrin |
| glicina | glycine | glicina, glycine |
| fosfato trisódico | sodium phosphate tribasic | fosfato trisódico, sodium phosphate tribasic |
| ajo | garlic | ajo, garlic |
| glicerina | glycerin | glicerina, glycerin |
| goma arábiga | gum arabic | goma arábiga, gum arabic |
| proteína de maíz hidrolizada | hydrolyzed corn protein | proteína de maíz hidrolizada, hydrolyzed corn protein |
| proteína de soja hidrolizada | hydrolyzed soy protein | proteína de soja hidrolizada, hydrolyzed soy protein |
| proteína de trigo hidrolizada | hydrolyzed wheat protein | proteína de trigo hidrolizada, hydrolyzed wheat protein |
| glutamato monosódico | monosodium glutamate | glutamato monosódico, monosodium glutamate |
| sabores naturales | natural flavors | sabores naturales, natural flavors |
| carbonato de potasio | potassium carbonate | carbonato de potasio, potassium carbonate |
| harina de arroz | rice flour | harina de arroz, rice flour |
| carbonato de sodio | sodium carbonate | carbonato de sodio, sodium carbonate |
| fosfatos de sodio | sodium phosphates | fosfatos de sodio, sodium phosphates |
| lecitina de soja | soy lecithin | lecitina de soja, soy lecithin |
| pasta de soja | soybean paste | pasta de soja, soybean paste |
| extracto de brotes de soja | soybean sprout extract | extracto de brotes de soja, soybean sprout extract |
| azúcar | sugar | azúcar, sugar |
| tocoferoles | tocopherols | tocoferoles, tocopherols |
| repollo | cabbage | repollo, cabbage |
| espinaca | spinach | espinaca, spinach |
| calabaza | pumpkin | calabaza, pumpkin |
| pasta de tomate | tomato paste | pasta de tomate, tomato paste |
| almidón de trigo | wheat starch | almidón de trigo, wheat starch |
| extracto de levadura | yeast extract | extracto de levadura, yeast extract |
| harina de maíz amarillo | yellow corn flour | harina de maíz amarillo, yellow corn flour |

**Fuente / Source:** [Nongshim USA](https://nongshimusa.com/product-detail?pid=45)  
**Tipo / Type:** `manufacturer_website`  
**Alcance / Supports:** Official US Shin Ramyun Original Cup 75 g ingredient declaration. The page warns formulas can change; package remains definitive.

---

### OREO Vainilla 154 g / OREO Vanilla 154 g

- **ID:** `oreo-vanilla-uk-154g`
- **Foto real / Real photo:** [Ver envase / View package](https://cdn.grocefully.com/storage/v1/object/public/images/sainsburys/7100916/01.jpeg) · [Fuente / Source](https://www.grocefully.com/uk/product/oreo-original-vanilla-sandwich-cookies-14-cookies-154-g-7622300315283)- **Marca / Brand:** Mondelēz
- **País / Country:** United Kingdom
- **Mercado / Market:** United Kingdom
- **Envase / Package:** 154 g
- **Categoría / Category:** `sandwich_cookies`
- **Barcode:** No registrado / Not recorded
- **Estado / Status:** `ready` · **Verificación:** `manufacturer_website`
- **Descripción (ES):** Galletitas sándwich de cacao y crema sabor vainilla, versión británica.
- **Description (EN):** Cocoa sandwich biscuits with vanilla-flavoured filling, UK-market version.

**Ingredientes declarados / Declared ingredients**

WHEAT flour, sugar, palm oil, rapeseed oil, fat reduced cocoa powder (4.3%), WHEAT starch, glucose-fructose syrup, raising agents (ammonium carbonates, potassium carbonates, sodium carbonates), salt, emulsifier (SOYA lecithins), acidity regulator (sodium hydroxide), flavouring.

**Respuestas aceptadas / Accepted answers (14)**

| Español | English | Alias / Aliases |
|---|---|---|
| harina de trigo | wheat flour | harina de trigo, wheat flour |
| azúcar | sugar | azúcar, sugar |
| aceite de palma | palm oil | aceite de palma, palm oil |
| aceite de colza | rapeseed oil | aceite de colza, rapeseed oil |
| cacao bajo en grasa | fat-reduced cocoa | cacao bajo en grasa, fat-reduced cocoa |
| almidón de trigo | wheat starch | almidón de trigo, wheat starch |
| jarabe de glucosa y fructosa | glucose-fructose syrup | jarabe de glucosa y fructosa, glucose-fructose syrup |
| carbonato de amonio | ammonium carbonate | carbonato de amonio, ammonium carbonate |
| carbonato de potasio | potassium carbonate | carbonato de potasio, potassium carbonate |
| carbonato de sodio | sodium carbonate | carbonato de sodio, sodium carbonate |
| sal | salt | sal, salt |
| lecitina de soja | soy lecithin | lecitina de soja, soy lecithin |
| hidróxido de sodio | sodium hydroxide | hidróxido de sodio, sodium hydroxide |
| saborizante | flavouring | saborizante, flavouring |

**Fuente / Source:** [OREO UK / Mondelēz](https://www.oreo.co.uk/products/index.html?p=31197)  
**Tipo / Type:** `manufacturer_website`  
**Alcance / Supports:** Official UK product listing for OREO Vanilla 154 g; ingredients from product detail.

---

### Barilla Pesto alla Genovese / Barilla Pesto alla Genovese

- **ID:** `barilla-pesto-genovese-italy-190g`
- **Foto real / Real photo:** [Ver envase / View package](https://www.londonfoodhall.co.uk/cdn/shop/files/71klFCMgGwL.jpg?v=1771342205&width=1946) · [Fuente / Source](https://www.londonfoodhall.co.uk/products/barilla-pesto-genovese-sauce-190g)
- **Marca / Brand:** Barilla
- **País / Country:** Italy
- **Mercado / Market:** Italy
- **Envase / Package:** 190 g
- **Categoría / Category:** `pasta_sauce`
- **Barcode:** No registrado / Not recorded
- **Estado / Status:** `ready` · **Verificación:** `manufacturer_website`
- **Descripción (ES):** Salsa pesto italiana con albahaca fresca, anacardos y Parmigiano Reggiano.
- **Description (EN):** Italian pesto sauce with fresh basil, cashews and Parmigiano Reggiano.

**Ingredientes declarados / Declared ingredients**

Olio di girasole, basilico fresco 30%, ANACARDI, Parmigiano Reggiano DOP 5% (LATTE), fibra di mais, siero di LATTE in polvere, sale, proteine del LATTE, olio extra vergine di oliva, zucchero, estratto di basilico, aromi naturali (LATTE), correttore di acidità: acido lattico, aglio.

**Respuestas aceptadas / Accepted answers (14)**

| Español | English | Alias / Aliases |
|---|---|---|
| aceite de girasol | sunflower oil | aceite de girasol, sunflower oil |
| albahaca fresca | fresh basil | albahaca fresca, fresh basil |
| anacardos | cashews | anacardos, cashews |
| queso Parmigiano Reggiano | Parmigiano Reggiano cheese | queso Parmigiano Reggiano, Parmigiano Reggiano cheese |
| fibra de maíz | maize fibre | fibra de maíz, maize fibre |
| suero de leche en polvo | whey powder | suero de leche en polvo, whey powder |
| sal | salt | sal, salt |
| proteínas de leche | milk protein | proteínas de leche, milk protein |
| aceite de oliva virgen extra | extra virgin olive oil | aceite de oliva virgen extra, extra virgin olive oil |
| azúcar | sugar | azúcar, sugar |
| extracto de albahaca | basil extract | extracto de albahaca, basil extract |
| aromas naturales | natural flavourings | aromas naturales, natural flavourings |
| ácido láctico | lactic acid | ácido láctico, lactic acid |
| ajo | garlic | ajo, garlic |

**Fuente / Source:** [Barilla Italia](https://www.barilla.com/it-it/prodotti/pesti/pesti/pesto-alla-genovese)  
**Tipo / Type:** `manufacturer_website`  
**Alcance / Supports:** Official Italian Barilla Pesto alla Genovese 190 g ingredient list. Precautionary traces excluded.

---

### Arnott's Tim Tam Original 200 g / Arnott's Tim Tam Original 200 g

- **ID:** `tim-tam-original-australia-200g`
- **Foto real / Real photo:** [Ver envase / View package](https://www.aussiepharmadirect.com.au/cdn/shop/files/TimTamOriginal_grande.png?v=1698207065) · [Fuente / Source](https://www.aussiepharmadirect.com.au/products/tim-tam-original)
- **Marca / Brand:** Arnott's
- **País / Country:** Australia
- **Mercado / Market:** Australia
- **Envase / Package:** 200 g
- **Categoría / Category:** `chocolate_cookies`
- **Barcode:** No registrado / Not recorded
- **Estado / Status:** `ready` · **Verificación:** `retailer_product_label`
- **Descripción (ES):** Galletitas australianas de chocolate con cobertura de chocolate con leche.
- **Description (EN):** Australian chocolate biscuits coated in milk chocolate.

**Ingredientes declarados / Declared ingredients**

Milk Chocolate (38%) (Sugar, Milk Solids, Cocoa Butter, Cocoa Mass, Vegetable Oil, Emulsifiers (Soy Lecithin, E476), Flavour), Wheat Flour, Sugar, Vegetable Oil (Emulsifier (Soy Lecithin), Antioxidant (E307b From Soy)), Golden Syrup, Food Colours (Caramel III, Beet Red, Cochineal, Annatto), Wheat Starch, Cocoa Powder, Salt, Baking Powder, Emulsifier (Soy Lecithin), Flavour.

**Respuestas aceptadas / Accepted answers (19)**

| Español | English | Alias / Aliases |
|---|---|---|
| azúcar | sugar | azúcar, sugar |
| sólidos de leche | milk solids | sólidos de leche, milk solids |
| manteca de cacao | cocoa butter | manteca de cacao, cocoa butter |
| masa de cacao | cocoa mass | masa de cacao, cocoa mass |
| aceite vegetal | vegetable oil | aceite vegetal, vegetable oil |
| lecitina de soja | soy lecithin | lecitina de soja, soy lecithin |
| emulsionante E476 | emulsifier E476 | emulsionante E476, emulsifier E476 |
| saborizante | flavour | saborizante, flavour |
| harina de trigo | wheat flour | harina de trigo, wheat flour |
| jarabe dorado | golden syrup | jarabe dorado, golden syrup |
| caramelo III | caramel III | caramelo III, caramel III |
| rojo de remolacha | beet red | rojo de remolacha, beet red |
| carmín | cochineal | carmín, cochineal |
| achiote | annatto | achiote, annatto |
| almidón de trigo | wheat starch | almidón de trigo, wheat starch |
| cacao en polvo | cocoa powder | cacao en polvo, cocoa powder |
| sal | salt | sal, salt |
| polvo de hornear | baking powder | polvo de hornear, baking powder |
| antioxidante E307b | antioxidant E307b | antioxidante E307b, antioxidant E307b |

**Fuente / Source:** [Woolworths Australia](https://www.woolworths.com.au/shop/productdetails/36066/arnott-s-tim-tam-original-chocolate-biscuits)  
**Tipo / Type:** `retailer_product_label`  
**Alcance / Supports:** Australian retailer ingredient transcription for Arnott's Tim Tam Original 200 g; product stated made in Australia.

---

### Chocolate Amul Dark / Amul Dark Chocolate

- **ID:** `amul-dark-chocolate-india-150g`
- **Foto real / Real photo:** [Ver envase / View package](https://www.mystore.in/s/62ea2c599d1398fa16dbae0a/66b49f77127ba200242a87f6/01percent20heropercent20image_amulpercent20darkpercent20chocolatepercent20cartonpercent20150g.jpg) · [Fuente / Source](https://www.mystore.in/en/product/amul-dark-chocolate-40x150g-pack)- **Marca / Brand:** Amul
- **País / Country:** India
- **Mercado / Market:** India
- **Envase / Package:** 150 g
- **Categoría / Category:** `dark_chocolate`
- **Barcode:** No registrado / Not recorded
- **Estado / Status:** `ready` · **Verificación:** `manufacturer_website`
- **Descripción (ES):** Chocolate amargo indio con 55% de cacao, sin sólidos lácteos.
- **Description (EN):** Indian dark chocolate with 55% cocoa and no milk solids.

**Ingredientes declarados / Declared ingredients**

Sugar, Cocoa Solids, Cocoa Butter, Permitted Emulsifiers (E322, E476). Contains Added Flavours (Artificial Flavouring Substances - Cocoa and Vanilla).

**Respuestas aceptadas / Accepted answers (7)**

| Español | English | Alias / Aliases |
|---|---|---|
| azúcar | sugar | azúcar, sugar |
| sólidos de cacao | cocoa solids | sólidos de cacao, cocoa solids |
| manteca de cacao | cocoa butter | manteca de cacao, cocoa butter |
| emulsionante E322 | emulsifier E322 | emulsionante E322, emulsifier E322 |
| emulsionante E476 | emulsifier E476 | emulsionante E476, emulsifier E476 |
| saborizante artificial de cacao | artificial cocoa flavouring | saborizante artificial de cacao, artificial cocoa flavouring |
| saborizante artificial de vainilla | artificial vanilla flavouring | saborizante artificial de vainilla, artificial vanilla flavouring |

**Fuente / Source:** [Amul](https://old.amul.com/products/amul-dark-chocolate-info.php)  
**Tipo / Type:** `manufacturer_website`  
**Alcance / Supports:** Official Amul Dark Chocolate composition and pack-size listing (150 g among available sizes).

---

### Orion Choco Pie / Orion Choco Pie

- **ID:** `orion-choco-pie-korea-468g`
- **Foto real / Real photo:** [Ver envase / View package](https://down-ph.img.susercontent.com/file/th-11134207-7r98q-ltz6tzygt3up72) · [Fuente / Source](https://shopee.ph/Korean-Snacks-choco-pie-Ori-orion-468g-%2812pcs%29-i.1186353823.25373644511)
- **País / Country:** South Korea
- **Mercado / Market:** South Korea
- **Envase / Package:** 468 g box
- **Categoría / Category:** `snack_cake`
- **Barcode:** 880117534912
- **Estado / Status:** `ready` · **Verificación:** `government_label_database_via_specialist_index`
- **Descripción (ES):** Pastelito coreano con relleno de malvavisco y cobertura de cacao.
- **Description (EN):** Korean snack cake with marshmallow filling and cocoa coating.

**Ingredientes declarados / Declared ingredients**

밀가루, 백설탕, 물엿, 쇼트닝, 식물성유지, 코코아프리퍼레이션, 코코아분말, 산도조절제, 포도당, 젤라틴, 전란액, 식염, 코코아매스, 합성향료, 혼합제제(유화제, 산도조절제, 아라비아검), 잔탄검, 유화제.

**Respuestas aceptadas / Accepted answers (17)**

| Español | English | Alias / Aliases |
|---|---|---|
| harina de trigo | wheat flour | harina de trigo, wheat flour |
| azúcar | sugar | azúcar, sugar |
| jarabe de almidón | starch syrup | jarabe de almidón, starch syrup |
| shortening | shortening | shortening, shortening |
| aceite vegetal | vegetable oil | aceite vegetal, vegetable oil |
| preparado de cacao | cocoa preparation | preparado de cacao, cocoa preparation |
| cacao en polvo | cocoa powder | cacao en polvo, cocoa powder |
| regulador de acidez | acidity regulator | regulador de acidez, acidity regulator |
| glucosa | glucose | glucosa, glucose |
| gelatina | gelatin | gelatina, gelatin |
| huevo entero líquido | liquid whole egg | huevo entero líquido, liquid whole egg |
| sal | salt | sal, salt |
| masa de cacao | cocoa mass | masa de cacao, cocoa mass |
| saborizante artificial | artificial flavor | saborizante artificial, artificial flavor |
| emulsionante | emulsifier | emulsionante, emulsifier |
| goma arábiga | gum arabic | goma arábiga, gum arabic |
| goma xantana | xanthan gum | goma xantana, xanthan gum |

**Fuente / Source:** [K-Food Label (Korea MFDS HACCP product-report label data)](https://kfoodlabel.com/p/orion-choco-pie-4912/)  
**Tipo / Type:** `government_label_database_via_specialist_index`  
**Alcance / Supports:** Korean domestic Orion Choco Pie 468 g / barcode 880117534912. Page attributes source to Korean HACCP product-report data; ingredient names translated from Korean label.

---

### Bonne Maman Mermelada Extra de Frutilla / Bonne Maman Strawberry Extra Jam

- **ID:** `bonne-maman-strawberry-jam-france-370g`
- **Foto real / Real photo:** [Ver envase / View package](https://santaluzia.vtexassets.com/arquivos/ids/968553/1068032.jpg?v=637385268009600000) · [Fuente / Source](https://www.santaluzia.com.br/geleia-bonne-maman-morango-370g-1068032/p)
- **País / Country:** France
- **Mercado / Market:** France
- **Envase / Package:** 370 g jar
- **Categoría / Category:** `fruit_jam`
- **Barcode:** No registrado / Not recorded
- **Estado / Status:** `ready` · **Verificación:** `manufacturer_supplier_technical_sheet`
- **Descripción (ES):** Mermelada extra francesa de frutillas con azúcar y jugo de limón.
- **Description (EN):** French extra strawberry jam with sugar and lemon juice.

**Ingredientes declarados / Declared ingredients**

Fraises, sucre, sucre roux de canne, jus de citrons concentré, gélifiant : pectines de fruits.

**Respuestas aceptadas / Accepted answers (5)**

| Español | English | Alias / Aliases |
|---|---|---|
| frutillas | strawberries | frutillas, strawberries |
| azúcar | sugar | azúcar, sugar |
| azúcar rubia de caña | brown cane sugar | azúcar rubia de caña, brown cane sugar |
| jugo concentrado de limón | concentrated lemon juice | jugo concentrado de limón, concentrated lemon juice |
| pectinas de frutas | fruit pectins | pectinas de frutas, fruit pectins |

**Fuente / Source:** [Groupe Pomona product technical sheet](https://cdn.api.groupe-pomona.fr/public/products/0045259/branch/es/medias/confiture-extra-de-fraise-en-bocal-370-g-bonne-maman_0045259_es_technical.pdf)  
**Tipo / Type:** `manufacturer_supplier_technical_sheet`  
**Alcance / Supports:** Technical sheet for Bonne Maman strawberry extra jam 370 g; transformation in France; ingredients listed. Supplier technical sheet, not the consumer-facing manufacturer page.

---

### Knorr Professional Caldo de Verduras / Knorr Professional Vegetable Bouillon

- **ID:** `knorr-gemuse-bouillon-germany-1kg`
- **Foto real / Real photo:** [Ver envase / View package](https://rzonlinehandel.at/images/product_images/info_images/BG-9000275714610.jpg) · [Fuente / Source](https://rzonlinehandel.at/Lebensmittel-RZOnlinehandel/Nahrungsmittel-RZOnlinehandel/fertiggerichte-RZOnlinehandel/Knorr-Gemuesegold-Bouillon-1kg.html)- **Marca / Brand:** Knorr
- **País / Country:** Germany
- **Mercado / Market:** Germany
- **Envase / Package:** 1 kg professional pack
- **Categoría / Category:** `bouillon`
- **Barcode:** 4007801104681
- **Estado / Status:** `ready` · **Verificación:** `manufacturer_product_specification_via_distributor_pdf`
- **Descripción (ES):** Caldo concentrado alemán de verduras con extracto de levadura y hortalizas.
- **Description (EN):** German concentrated vegetable bouillon with yeast extract and vegetables.

**Ingredientes declarados / Declared ingredients**

Speisesalz, Hefeextrakt, Maltodextrin, Kaliumchlorid, Zucker, Zwiebeln (4,4%), Stärke, Lauch (2,7%), Pastinakenpulver (2,4%), Petersilienwurzelpulver (1,7%), Säuerungsmittel: Citronensäure, Karotten (0,5%), Kräuter, Gewürze, Kürbispulver (0,3%).

**Respuestas aceptadas / Accepted answers (15)**

| Español | English | Alias / Aliases |
|---|---|---|
| sal | salt | sal, salt |
| extracto de levadura | yeast extract | extracto de levadura, yeast extract |
| maltodextrina | maltodextrin | maltodextrina, maltodextrin |
| cloruro de potasio | potassium chloride | cloruro de potasio, potassium chloride |
| azúcar | sugar | azúcar, sugar |
| cebolla | onion | cebolla, onion |
| almidón | starch | almidón, starch |
| puerro | leek | puerro, leek |
| polvo de chirivía | parsnip powder | polvo de chirivía, parsnip powder |
| polvo de raíz de perejil | parsley root powder | polvo de raíz de perejil, parsley root powder |
| ácido cítrico | citric acid | ácido cítrico, citric acid |
| zanahoria | carrot | zanahoria, carrot |
| hierbas | herbs | hierbas, herbs |
| especias | spices | especias, spices |
| polvo de calabaza | pumpkin powder | polvo de calabaza, pumpkin powder |

**Fuente / Source:** [Unilever Germany Food Solutions product data sheet (PDF hosted by retailer)](https://shop.tila-lachenmaier.de/files/downloads/Artikelpass4007801104681.pdf)  
**Tipo / Type:** `manufacturer_product_specification_via_distributor_pdf`  
**Alcance / Supports:** Knorr Professional Gemüse Kraftbouillon 1 kg; GTIN 4007801104681; manufacturer Unilever Germany Food Solutions; product data sheet dated 14 Feb 2026.

---

### Chocolate con leche Meiji 50 g / Meiji Milk Chocolate 50 g

- **ID:** `meiji-milk-chocolate-japan-50g`
- **Foto real / Real photo:** [Ver envase / View package](https://tshop.r10s.jp/v-drug/cabinet/0519/4902777015927.jpg?fitin=720%3A720) · [Fuente / Source](https://item.rakuten.co.jp/v-drug/0270030_4902777015927x10/)
- **País / Country:** Japan
- **Mercado / Market:** Japan
- **Envase / Package:** 50 g
- **Categoría / Category:** `milk_chocolate`
- **Barcode:** No registrado / Not recorded
- **Estado / Status:** `ready` · **Verificación:** `manufacturer_website`
- **Descripción (ES):** Chocolate japonés de leche con cacao, leche entera en polvo y lecitina.
- **Description (EN):** Japanese milk chocolate made with cocoa, whole milk powder and lecithin.

**Ingredientes declarados / Declared ingredients**

砂糖（外国製造）、カカオマス、全粉乳、ココアバター／レシチン、香料

**Respuestas aceptadas / Accepted answers (6)**

| Español | English | Alias / Aliases |
|---|---|---|
| azúcar | sugar | azúcar, sugar |
| masa de cacao | cocoa mass | masa de cacao, cocoa mass |
| leche entera en polvo | whole milk powder | leche entera en polvo, whole milk powder |
| manteca de cacao | cocoa butter | manteca de cacao, cocoa butter |
| lecitina | lecithin | lecitina, lecithin |
| saborizante | flavouring | saborizante, flavouring |

**Fuente / Source:** [Meiji Co., Ltd.](https://www.meiji.co.jp/products/chocolate/04777.html)  
**Tipo / Type:** `manufacturer_website`  
**Alcance / Supports:** Official Japanese Meiji Milk Chocolate 50 g ingredient declaration. Allergy statement is not counted as ingredients.

---

### Samyang Buldak Original / Samyang Buldak Original

- **ID:** `samyang-buldak-original-korea-us-140g`
- **Foto real / Real photo:** [Ver envase / View package](https://www.ramencrate.co.nz/cdn/shop/files/SamyangOriginalBuldakHotChickenInstantNoodles-Plain.png?v=1768252565&width=1445) · [Fuente / Source](https://www.ramencrate.co.nz/products/samyang-original-hot-chicken-ramen)- **Marca / Brand:** Samyang
- **País / Country:** South Korea
- **Mercado / Market:** United States
- **Envase / Package:** 140 g (4.94 oz) pack
- **Categoría / Category:** `instant_noodles`
- **Barcode:** No registrado / Not recorded
- **Estado / Status:** `ready` · **Verificación:** `manufacturer_website`
- **Descripción (ES):** Fideos instantáneos coreanos picantes con salsa de pollo, versión estadounidense.
- **Description (EN):** Spicy Korean instant noodles with chicken-style sauce, US-market declaration.

**Ingredientes declarados / Declared ingredients**

Noodles: Wheat Flour, Food Starch-Modified, Palm Oil, Less than 2% of: Wheat Gluten, Salt, Glycerin, Soy Lecithin, Polyglycerol Esters of Fatty Acids, Potassium Carbonate, Sodium Carbonate, Sodium Phosphate Dibasic, Guar Gum, Tocopherols, Riboflavin (Color). Sauce: Water, Artificial Chicken Flavor Powder (Artificial Flavor, Dextrin, Wheat Starch, Sugar, Salt, Yeast Extract, Natural Flavor, Disodium 5'-Ribonucleotide, Maltodextrin, Corn Starch), Soy Sauce Seasoning (Soybeans, Water, Salt, Wheat, Sodium Carbonate, High Fructose Corn Syrup, Disodium 5'-Ribonucleotide, Garlic, Steviol Glycoside, Maltodextrin, Sugar), Sugar, Hot Pepper Seasoning (Red Pepper, Dextrin, Salt, Sugar, Onion Powder, Artificial Flavor, Garlic Powder, Silicon Dioxide, Soy Sauce, Capsicum Oleoresin, Paprika Oleoresin, Monosodium Glutamate, Disodium Inosinate, Disodium Guanylate), Soybean Oil, Onion, Red Pepper Seed Oil, Garlic, Modified Food Starch, Capsicum Oleoresin, Paprika Oleoresin, Black Pepper Powder, Natural and Artificial Curry Flavor (Cumin, Salt, Maltodextrin, Artificial Flavor). Flake: Sesame, Dried Seaweed.

**Respuestas aceptadas / Accepted answers (43)**

| Español | English | Alias / Aliases |
|---|---|---|
| harina de trigo | wheat flour | harina de trigo, wheat flour |
| almidón alimentario modificado | modified food starch | almidón alimentario modificado, modified food starch |
| aceite de palma | palm oil | aceite de palma, palm oil |
| gluten de trigo | wheat gluten | gluten de trigo, wheat gluten |
| sal | salt | sal, salt |
| glicerina | glycerin | glicerina, glycerin |
| lecitina de soja | soy lecithin | lecitina de soja, soy lecithin |
| ésteres de poliglicerol de ácidos grasos | polyglycerol esters of fatty acids | ésteres de poliglicerol de ácidos grasos, polyglycerol esters of fatty acids |
| carbonato de potasio | potassium carbonate | carbonato de potasio, potassium carbonate |
| carbonato de sodio | sodium carbonate | carbonato de sodio, sodium carbonate |
| fosfato disódico | disodium phosphate | fosfato disódico, disodium phosphate |
| goma guar | guar gum | goma guar, guar gum |
| tocoferoles | tocopherols | tocoferoles, tocopherols |
| riboflavina | riboflavin | riboflavina, riboflavin |
| agua | water | agua, water |
| sabor artificial de pollo | artificial chicken flavor | sabor artificial de pollo, artificial chicken flavor |
| dextrina | dextrin | dextrina, dextrin |
| azúcar | sugar | azúcar, sugar |
| extracto de levadura | yeast extract | extracto de levadura, yeast extract |
| sabor natural | natural flavor | sabor natural, natural flavor |
| ribonucleótido disódico | disodium ribonucleotide | ribonucleótido disódico, disodium ribonucleotide |
| maltodextrina | maltodextrin | maltodextrina, maltodextrin |
| almidón de maíz | corn starch | almidón de maíz, corn starch |
| soja | soybeans | soja, soybeans |
| jarabe de maíz de alta fructosa | high-fructose corn syrup | jarabe de maíz de alta fructosa, high-fructose corn syrup |
| ajo | garlic | ajo, garlic |
| glucósido de esteviol | steviol glycoside | glucósido de esteviol, steviol glycoside |
| cebolla en polvo | onion powder | cebolla en polvo, onion powder |
| chile rojo | red pepper | chile rojo, red pepper |
| dióxido de silicio | silicon dioxide | dióxido de silicio, silicon dioxide |
| salsa de soja | soy sauce | salsa de soja, soy sauce |
| oleorresina de capsicum | capsicum oleoresin | oleorresina de capsicum, capsicum oleoresin |
| oleorresina de paprika | paprika oleoresin | oleorresina de paprika, paprika oleoresin |
| glutamato monosódico | monosodium glutamate | glutamato monosódico, monosodium glutamate |
| inosinato disódico | disodium inosinate | inosinato disódico, disodium inosinate |
| guanilato disódico | disodium guanylate | guanilato disódico, disodium guanylate |
| aceite de soja | soybean oil | aceite de soja, soybean oil |
| cebolla | onion | cebolla, onion |
| aceite de semilla de chile rojo | red pepper seed oil | aceite de semilla de chile rojo, red pepper seed oil |
| pimienta negra en polvo | black pepper powder | pimienta negra en polvo, black pepper powder |
| comino | cumin | comino, cumin |
| semillas de sésamo | sesame | semillas de sésamo, sesame |
| algas secas | dried seaweed | algas secas, dried seaweed |

**Fuente / Source:** [Samyang America](https://beta.samyangamerica.com/buldak/original)  
**Tipo / Type:** `manufacturer_website`  
**Alcance / Supports:** Official US Buldak Original product page ingredient declaration. Compound ingredients are flattened into accepted ingredient answers.

---

### Heinz Baked Beanz 150 g / Heinz Baked Beanz 150 g

- **ID:** `heinz-baked-beanz-uk-150g`
- **Foto real / Real photo:** [Ver envase / View package](https://ca.britishessentials.com/cdn/shop/products/July022203_1024x1024.jpg?v=1656726102) · [Fuente / Source](https://ca.britishessentials.com/products/heinz-baked-beanz-150g)
- **País / Country:** United Kingdom
- **Mercado / Market:** United Kingdom
- **Envase / Package:** 150 g
- **Categoría / Category:** `canned_beans`
- **Barcode:** 5000157004017
- **Estado / Status:** `ready` · **Verificación:** `manufacturer_website`
- **Descripción (ES):** Porotos horneados en salsa de tomate, presentación británica individual.
- **Description (EN):** Baked beans in tomato sauce, UK single-serve pack.

**Ingredientes declarados / Declared ingredients**

Beans (49%), Tomatoes (35%), Water, Sugar, Modified Cornflour, Spirit Vinegar, Salt, Spice Extracts, Herb Extract.

**Respuestas aceptadas / Accepted answers (9)**

| Español | English | Alias / Aliases |
|---|---|---|
| porotos | beans | porotos, beans |
| tomates | tomatoes | tomates, tomatoes |
| agua | water | agua, water |
| azúcar | sugar | azúcar, sugar |
| almidón de maíz modificado | modified cornflour | almidón de maíz modificado, modified cornflour |
| vinagre de alcohol | spirit vinegar | vinagre de alcohol, spirit vinegar |
| sal | salt | sal, salt |
| extractos de especias | spice extracts | extractos de especias, spice extracts |
| extracto de hierbas | herb extract | extracto de hierbas, herb extract |

**Fuente / Source:** [Heinz UK](https://www.heinz.com/en-GB/products/05000157004017-baked-beanz)  
**Tipo / Type:** `manufacturer_website`  
**Alcance / Supports:** Official Heinz UK Baked Beanz 150 g product page and ingredients.

---

### Néctar de mango Jumex 960 ml / Jumex Mango Nectar 960 ml

- **ID:** `jumex-mango-nectar-mexico-960ml`
- **Foto real / Real photo:** [Ver envase / View package](https://elsabormarket.com/cdn/shop/files/0e5478d99f659b278e66e816b0dad67a.jpg?v=1721465941) · [Fuente / Source](https://elsabormarket.com/products/jumex-mango-nectar-34-oz)
- **País / Country:** Mexico
- **Mercado / Market:** Mexico
- **Envase / Package:** 960 ml carton
- **Categoría / Category:** `fruit_juice`
- **Barcode:** No registrado / Not recorded
- **Estado / Status:** `ready` · **Verificación:** `retailer_product_label`
- **Descripción (ES):** Néctar mexicano de mango con pulpa de mango y jarabe de maíz de alta fructosa.
- **Description (EN):** Mexican mango nectar with mango pulp and high-fructose corn syrup.

**Ingredientes declarados / Declared ingredients**

Agua, azúcares añadidos (pulpa de mango de concentrado (20%), jarabe de maíz de alta fructosa), ácido cítrico y ácido ascórbico.

**Respuestas aceptadas / Accepted answers (5)**

| Español | English | Alias / Aliases |
|---|---|---|
| agua | water | agua, water |
| pulpa de mango concentrada | mango puree from concentrate | pulpa de mango concentrada, mango puree from concentrate |
| jarabe de maíz de alta fructosa | high-fructose corn syrup | jarabe de maíz de alta fructosa, high-fructose corn syrup |
| ácido cítrico | citric acid | ácido cítrico, citric acid |
| ácido ascórbico | ascorbic acid | ácido ascórbico, ascorbic acid |

**Fuente / Source:** [HEB México](https://www.heb.com.mx/jumex-nectar-de-mango-1-l-3949/p)  
**Tipo / Type:** `retailer_product_label`  
**Alcance / Supports:** Retailer ingredient transcription for Jumex Mango Nectar 960 ml; physical package remains definitive.

---

### MAGGI Masala Twist 75 g / MAGGI Masala Twist 75 g

- **ID:** `maggi-masala-twist-india-75g`
- **Foto real / Real photo:** [Ver envase / View package](https://www.nestleprofessional.in/sites/default/files/2023-09/723557%203D%20Maggi%20Masala%20Twist%20CUPPA%20%28400%20x%20380%20Px%29%20Front.png) · [Fuente / Source](https://www.nestleprofessional.in/foods/maggi-masala-twist)- **Marca / Brand:** MAGGI
- **País / Country:** India
- **Mercado / Market:** India
- **Envase / Package:** 75 g prepared-product reference
- **Categoría / Category:** `instant_noodles`
- **Barcode:** No registrado / Not recorded
- **Estado / Status:** `ready` · **Verificación:** `manufacturer_website`
- **Descripción (ES):** Fideos instantáneos indios con mezcla de especias, vegetales deshidratados y tomate.
- **Description (EN):** Indian instant noodles with spice mix, dehydrated vegetables and tomato.

**Ingredientes declarados / Declared ingredients**

Refined wheat flour (Maida), Palm oil, Iodised salt, Thickeners (412 & 508), Humectant (451(i)) and Acidity Regulators (501(i), 500(i) & 330). Tastemaker: Mixed spice (18.9%), Sugar, Dehydrated vegetables (12.7%) [Dehydrated carrot bits (6.8%), Sweetcorn starch (5.9%)], starch, iodised salt, nature identical flavouring substances, Tomato paste (5.8%), Toasted onion flakes (4.3%), Refined wheat flour (Maida), Roasted garlic flakes, Thickeners (508 & 415), Onion powder (2.9%), Palm oil, Herbs, Natural flavouring substance, Yeast extract powder, Flavour enhancer (635), Tamarind powder, Acidity regulator (330), Wheat gluten.

**Respuestas aceptadas / Accepted answers (26)**

| Español | English | Alias / Aliases |
|---|---|---|
| harina de trigo refinada (maida) | refined wheat flour (maida) | harina de trigo refinada (maida), refined wheat flour (maida) |
| aceite de palma | palm oil | aceite de palma, palm oil |
| sal yodada | iodised salt | sal yodada, iodised salt |
| goma guar (412) | guar gum (412) | goma guar (412), guar gum (412) |
| cloruro de potasio (508) | potassium chloride (508) | cloruro de potasio (508), potassium chloride (508) |
| humectante E451(i) | humectant E451(i) | humectante E451(i), humectant E451(i) |
| acetato de potasio (501(i)) | potassium acetate (501(i)) | acetato de potasio (501(i)), potassium acetate (501(i)) |
| carbonato de sodio (500(i)) | sodium carbonate (500(i)) | carbonato de sodio (500(i)), sodium carbonate (500(i)) |
| ácido cítrico (330) | citric acid (330) | ácido cítrico (330), citric acid (330) |
| mezcla de especias | mixed spice | mezcla de especias, mixed spice |
| azúcar | sugar | azúcar, sugar |
| zanahoria deshidratada | dehydrated carrot | zanahoria deshidratada, dehydrated carrot |
| almidón de maíz dulce | sweetcorn starch | almidón de maíz dulce, sweetcorn starch |
| almidón | starch | almidón, starch |
| saborizantes idénticos a los naturales | nature-identical flavouring substances | saborizantes idénticos a los naturales, nature-identical flavouring substances |
| pasta de tomate | tomato paste | pasta de tomate, tomato paste |
| cebolla tostada en escamas | toasted onion flakes | cebolla tostada en escamas, toasted onion flakes |
| ajo tostado en escamas | roasted garlic flakes | ajo tostado en escamas, roasted garlic flakes |
| goma xantana (415) | xanthan gum (415) | goma xantana (415), xanthan gum (415) |
| cebolla en polvo | onion powder | cebolla en polvo, onion powder |
| hierbas | herbs | hierbas, herbs |
| saborizante natural | natural flavouring substance | saborizante natural, natural flavouring substance |
| extracto de levadura en polvo | yeast extract powder | extracto de levadura en polvo, yeast extract powder |
| potenciador del sabor E635 | flavour enhancer E635 | potenciador del sabor E635, flavour enhancer E635 |
| tamarindo en polvo | tamarind powder | tamarindo en polvo, tamarind powder |
| gluten de trigo | wheat gluten | gluten de trigo, wheat gluten |

**Fuente / Source:** [Nestlé Professional India](https://www.nestleprofessional.in/foods/maggi-masala-twist)  
**Tipo / Type:** `manufacturer_website`  
**Alcance / Supports:** Official Nestlé Professional India 75 g MAGGI Masala Twist ingredient declaration. Compound seasoning components normalized as accepted answers.

---

### Parle-G Original 79,9 g / Parle-G Original 79.9 g

- **ID:** `parle-g-original-india-uk-799g`
- **Foto real / Real photo:** [Ver envase / View package](https://gayatristore.co.uk/cdn/shop/files/parle-g-glucose-biscuits-799g-8901719925139.png?v=1759436502&width=560) · [Fuente / Source](https://gayatristore.co.uk/products/parle-g-glucose-biscuits-79-9g)
- **País / Country:** India
- **Mercado / Market:** United Kingdom
- **Envase / Package:** 79.9 g import pack
- **Categoría / Category:** `plain_cookies`
- **Barcode:** No registrado / Not recorded
- **Estado / Status:** `ready` · **Verificación:** `retailer_product_label`
- **Descripción (ES):** Galletitas dulces de trigo de la marca india Parle, paquete importado vendido en Reino Unido.
- **Description (EN):** Sweet wheat glucose biscuits from Indian brand Parle, imported pack sold in the UK.

**Ingredientes declarados / Declared ingredients**

Wheat Flour (68.3%), Sugar, Vegetable Oil (Palm Oil), Glucose-Fructose Syrup, Salt, Raising Agents [Ammonium Carbonates, Sodium Hydrogen Carbonate], Skimmed Milk (0.3%), Artificial Flavouring and Emulsifier [Mono- and Diacetyl Tartaric Acid Esters of Mono- and Diglycerides of Fatty Acids].

**Respuestas aceptadas / Accepted answers (10)**

| Español | English | Alias / Aliases |
|---|---|---|
| harina de trigo | wheat flour | harina de trigo, wheat flour |
| azúcar | sugar | azúcar, sugar |
| aceite de palma | palm oil | aceite de palma, palm oil |
| jarabe de glucosa y fructosa | glucose-fructose syrup | jarabe de glucosa y fructosa, glucose-fructose syrup |
| sal | salt | sal, salt |
| carbonato de amonio | ammonium carbonate | carbonato de amonio, ammonium carbonate |
| bicarbonato de sodio | sodium hydrogen carbonate | bicarbonato de sodio, sodium hydrogen carbonate |
| leche descremada | skimmed milk | leche descremada, skimmed milk |
| saborizante artificial | artificial flavouring | saborizante artificial, artificial flavouring |
| ésteres de ácido diacetil tartárico de mono y diglicéridos | mono- and diacetyl tartaric acid esters of mono- and diglycerides | ésteres de ácido diacetil tartárico de mono y diglicéridos, mono- and diacetyl tartaric acid esters of mono- and diglycerides |

**Fuente / Source:** [Tesco UK](https://www.tesco.com/shop/en-GB/products/284903874)  
**Tipo / Type:** `retailer_product_label`  
**Alcance / Supports:** Tesco UK label transcription for 79.9 g Parle-G; product of India. Imported/export pack, not assumed identical to every Indian domestic pack.

---

### Galletitas de manteca LEIBNIZ Original 200 g / LEIBNIZ Original Butter Biscuits 200 g

- **ID:** `leibniz-original-butter-biscuits-germany-200g`
- **Foto real / Real photo:** [Ver envase / View package](https://www.parthenonfoods.com/cdn/shop/files/BahlsenLeibniz200g.png?v=1689958500) · [Fuente / Source](https://www.parthenonfoods.com/products/butter-biscuits-leibniz-keks-200g)- **Marca / Brand:** LEIBNIZ
- **País / Country:** Germany
- **Mercado / Market:** Germany
- **Envase / Package:** 200 g
- **Categoría / Category:** `plain_cookies`
- **Barcode:** No registrado / Not recorded
- **Estado / Status:** `ready` · **Verificación:** `manufacturer_website`
- **Descripción (ES):** Galletitas alemanas clásicas de trigo y manteca, con 52 bordes dentados.
- **Description (EN):** Classic German wheat and butter biscuits with 52 scalloped edges.

**Ingredientes declarados / Declared ingredients**

WHEAT flour (70%), sugar, BUTTER (12%), invert sugar syrup, raising agents: sodium carbonates, diphosphates; whey products (MILK), whole MILK powder, salt, emulsifier: lecithins; acid: citric acid; flavourings (MILK), whole hen's EGG powder.

**Respuestas aceptadas / Accepted answers (13)**

| Español | English | Alias / Aliases |
|---|---|---|
| harina de trigo | wheat flour | harina de trigo, wheat flour |
| azúcar | sugar | azúcar, sugar |
| manteca | butter | manteca, butter |
| jarabe de azúcar invertido | invert sugar syrup | jarabe de azúcar invertido, invert sugar syrup |
| carbonatos de sodio | sodium carbonates | carbonatos de sodio, sodium carbonates |
| difosfatos | diphosphates | difosfatos, diphosphates |
| productos de suero de leche | whey products | productos de suero de leche, whey products |
| leche entera en polvo | whole milk powder | leche entera en polvo, whole milk powder |
| sal | salt | sal, salt |
| lecitinas | lecithins | lecitinas, lecithins |
| ácido cítrico | citric acid | ácido cítrico, citric acid |
| saborizantes | flavourings | saborizantes, flavourings |
| huevo entero en polvo | whole egg powder | huevo entero en polvo, whole egg powder |

**Fuente / Source:** [Bahlsen / LEIBNIZ](https://www.leibniz.com/en/keks-original)  
**Tipo / Type:** `manufacturer_website`  
**Alcance / Supports:** Official LEIBNIZ Original product page; 200 g package and ingredient declaration. EU/Germany formulation.

---

### Britannia Good Day Butter 90 g / Britannia Good Day Butter 90 g

- **ID:** `britannia-good-day-butter-india-90g`
- **Foto real / Real photo:** [Ver envase / View package](https://media.britannia.co.in/Untitled_design_2_6ee1be83c2.webp) · [Fuente / Source](https://www.britannia.co.in/product/good-day)- **Marca / Brand:** Britannia
- **País / Country:** India
- **Mercado / Market:** India
- **Envase / Package:** 90 g pack option
- **Categoría / Category:** `plain_cookies`
- **Barcode:** No registrado / Not recorded
- **Estado / Status:** `ready` · **Verificación:** `manufacturer_website`
- **Descripción (ES):** Galletitas indias de manteca con aceite de palma, leche y vainilla.
- **Description (EN):** Indian butter cookies with palm oil, milk and vanilla.

**Ingredientes declarados / Declared ingredients**

Wheat Flour, Sugar, Vegetable Fat (Palm), Butter (From Cow’s or Buffalo’s Milk), Invert Sugar, Whole Milk Powder (From Cow’s or Buffalo’s Milk), Ammonium Bicarbonate (E503(ii)) & Sodium Bicarbonate (E500(ii)) (Raising Agents), Salt, Soya Lecithin (E322), Mono & Diglycerides of Fatty Acids (Palm) (E471) & Diacetyl Tartaric Acid Esters of Mono & Diglycerides (Palm) (E472e) (Emulsifiers), Butter, Vanilla & Milk (Natural, Nature Identical & Artificial Flavours).

**Respuestas aceptadas / Accepted answers (15)**

| Español | English | Alias / Aliases |
|---|---|---|
| harina de trigo | wheat flour | harina de trigo, wheat flour |
| azúcar | sugar | azúcar, sugar |
| grasa vegetal de palma | vegetable fat (palm) | grasa vegetal de palma, vegetable fat (palm) |
| manteca | butter | manteca, butter |
| azúcar invertido | invert sugar | azúcar invertido, invert sugar |
| leche entera en polvo | whole milk powder | leche entera en polvo, whole milk powder |
| bicarbonato de amonio | ammonium bicarbonate | bicarbonato de amonio, ammonium bicarbonate |
| bicarbonato de sodio | sodium bicarbonate | bicarbonato de sodio, sodium bicarbonate |
| sal | salt | sal, salt |
| lecitina de soja | soya lecithin | lecitina de soja, soya lecithin |
| mono y diglicéridos de ácidos grasos | mono- and diglycerides of fatty acids | mono y diglicéridos de ácidos grasos, mono- and diglycerides of fatty acids |
| ésteres de ácido diacetil tartárico de mono y diglicéridos | diacetyl tartaric acid esters of mono- and diglycerides | ésteres de ácido diacetil tartárico de mono y diglicéridos, diacetyl tartaric acid esters of mono- and diglycerides |
| saborizante de manteca | butter flavour | saborizante de manteca, butter flavour |
| saborizante de vainilla | vanilla flavour | saborizante de vainilla, vanilla flavour |
| saborizante de leche | milk flavour | saborizante de leche, milk flavour |

**Fuente / Source:** [Britannia International](https://britannia-international.com/products/product-type/cookies/good-day-butter/)  
**Tipo / Type:** `manufacturer_website`  
**Alcance / Supports:** Official Britannia International product page lists 90 g size and ingredient declaration. Pack formula may vary by domestic SKU.

---

### Guaraná Antarctica 350 ml / Guaraná Antarctica 350 ml

- **ID:** `guarana-antarctica-brazil-350ml`
- **Foto real / Real photo:** [Ver envase / View package](https://img.superhoje.com/img.produtos/7891991000826/img_1200_1.png) · [Fuente / Source](https://superkan.com.br/refrigerante-guarana-antarctica-lata-350ml/7891991000826/d)
- **País / Country:** Brazil
- **Mercado / Market:** Brazil
- **Envase / Package:** 350 ml can
- **Categoría / Category:** `soft_drink`
- **Barcode:** No registrado / Not recorded
- **Estado / Status:** `ready` · **Verificación:** `retailer_product_label`
- **Descripción (ES):** Gaseosa brasileña sabor guaraná, elaborada con extracto de guaraná amazónico.
- **Description (EN):** Brazilian guarana-flavoured soft drink made with Amazonian guarana extract.

**Ingredientes declarados / Declared ingredients**

Água gaseificada, açúcar, extrato de guaraná, acidulante ácido cítrico, conservadores: benzoato de sódio e sorbato de potássio, aromatizante e corante caramelo IV.

**Respuestas aceptadas / Accepted answers (8)**

| Español | English | Alias / Aliases |
|---|---|---|
| agua carbonatada | carbonated water | agua carbonatada, carbonated water |
| azúcar | sugar | azúcar, sugar |
| extracto de guaraná | guarana extract | extracto de guaraná, guarana extract |
| ácido cítrico | citric acid | ácido cítrico, citric acid |
| benzoato de sodio | sodium benzoate | benzoato de sodio, sodium benzoate |
| sorbato de potasio | potassium sorbate | sorbato de potasio, potassium sorbate |
| saborizante | flavouring | saborizante, flavouring |
| colorante caramelo IV | caramel colour IV | colorante caramelo IV, caramel colour IV |

**Fuente / Source:** [Carrefour Brasil](https://newsitefood.cloud.carrefour.com.br/refrigerante-antarctica-guarana-lata-350ml-1036645/p)  
**Tipo / Type:** `retailer_product_label`  
**Alcance / Supports:** Carrefour Brazil ingredient transcription for Guaraná Antarctica 350 ml can; corroborated against Brazilian brand description.

---

### VEGEMITE 220 g / VEGEMITE 220 g

- **ID:** `vegemite-australia-220g`
- **Foto real / Real photo:** [Ver envase / View package](https://www.instacart.com/image-server/1864x1864/www.instacart.com/assets/domains/product-image/file/large_3a33d897-ded2-4563-bbfb-c6b087c9d25b.jpg) · [Fuente / Source](https://www.instacart.com/products/25576303-vegemite-yeast-extract-220-g)- **Marca / Brand:** VEGEMITE
- **País / Country:** Australia
- **Mercado / Market:** Australia
- **Envase / Package:** 220 g jar
- **Categoría / Category:** `yeast_spread`
- **Barcode:** 9352042000281
- **Estado / Status:** `ready` · **Verificación:** `manufacturer_product_specification`
- **Descripción (ES):** Pasta australiana concentrada de extracto de levadura, sal y vitaminas B.
- **Description (EN):** Australian concentrated yeast extract spread with salt and B vitamins.

**Ingredientes declarados / Declared ingredients**

YEAST EXTRACT (WHEAT, BARLEY), SALT, MINERAL SALT (508), MALT EXTRACT (BARLEY), COLOUR (150c), FLAVOURS, NIACIN, THIAMINE, RIBOFLAVIN, FOLATE.

**Respuestas aceptadas / Accepted answers (10)**

| Español | English | Alias / Aliases |
|---|---|---|
| extracto de levadura | yeast extract | extracto de levadura, yeast extract |
| sal | salt | sal, salt |
| sal mineral (508) | mineral salt (508) | sal mineral (508), mineral salt (508) |
| extracto de malta | malt extract | extracto de malta, malt extract |
| colorante 150c | colour 150c | colorante 150c, colour 150c |
| saborizantes | flavours | saborizantes, flavours |
| niacina | niacin | niacina, niacin |
| tiamina | thiamine | tiamina, thiamine |
| riboflavina | riboflavin | riboflavina, riboflavin |
| folato | folate | folato, folate |

**Fuente / Source:** [Bega Foods (manufacturer product data sheet)](https://superiorfs.com.au/documents/PDF/KV220_1.pdf)  
**Tipo / Type:** `manufacturer_product_specification`  
**Alcance / Supports:** Bega Foods product data sheet for VEGEMITE 220 g, GTIN 9352042000281; manufacturer-issued specification hosted by foodservice distributor.

---

### Walkers Quavers sabor queso / Walkers Quavers Cheese

- **ID:** `walkers-quavers-cheese-uk`
- **Foto real / Real photo:** [Ver envase / View package](https://i.ebayimg.com/images/g/x08AAOSw0kpl~q5e/s-l1200.jpg) · [Fuente / Source](https://www.ebay.co.uk/itm/116116380862)- **Marca / Brand:** Walkers
- **País / Country:** United Kingdom
- **Mercado / Market:** United Kingdom
- **Envase / Package:** 16 g serving reference
- **Categoría / Category:** `cheese_snack`
- **Barcode:** No registrado / Not recorded
- **Estado / Status:** `ready` · **Verificación:** `manufacturer_website`
- **Descripción (ES):** Snack aireado de fécula de papa con sabor a queso, vendido en Reino Unido.
- **Description (EN):** Puffed potato-starch cheese snack sold in the UK.

**Ingredientes declarados / Declared ingredients**

Potato Starch, Sunflower Oil, Cheese Flavour [Whey Powder (from Milk), Flavouring (contains Milk), Flavour Enhancers (Monosodium Glutamate, Disodium 5'-Ribonucleotide), Milk Powder, Cheese Powder (from Milk), Potassium Chloride, Garlic Powder, Acid (Lactic Acid), Colour (Paprika Extract)], Rice Flour, Soya Flour, Salt, Yeast, Onion Powder (Malt Flour from Barley), Pepper, Wheat Flour (contains Calcium, Iron, Niacin, Thiamin), Colour (Annatto).

**Respuestas aceptadas / Accepted answers (25)**

| Español | English | Alias / Aliases |
|---|---|---|
| almidón de papa | potato starch | almidón de papa, potato starch |
| aceite de girasol | sunflower oil | aceite de girasol, sunflower oil |
| suero de leche en polvo | whey powder | suero de leche en polvo, whey powder |
| saborizante | flavouring | saborizante, flavouring |
| glutamato monosódico | monosodium glutamate | glutamato monosódico, monosodium glutamate |
| ribonucleótido disódico | disodium 5'-ribonucleotide | ribonucleótido disódico, disodium 5'-ribonucleotide |
| leche en polvo | milk powder | leche en polvo, milk powder |
| queso en polvo | cheese powder | queso en polvo, cheese powder |
| cloruro de potasio | potassium chloride | cloruro de potasio, potassium chloride |
| ajo en polvo | garlic powder | ajo en polvo, garlic powder |
| ácido láctico | lactic acid | ácido láctico, lactic acid |
| extracto de paprika | paprika extract | extracto de paprika, paprika extract |
| harina de arroz | rice flour | harina de arroz, rice flour |
| harina de soja | soya flour | harina de soja, soya flour |
| sal | salt | sal, salt |
| levadura | yeast | levadura, yeast |
| harina de malta de cebada | malt flour from barley | harina de malta de cebada, malt flour from barley |
| cebolla en polvo | onion powder | cebolla en polvo, onion powder |
| pimienta | pepper | pimienta, pepper |
| harina de trigo | wheat flour | harina de trigo, wheat flour |
| calcio | calcium | calcio, calcium |
| hierro | iron | hierro, iron |
| niacina | niacin | niacina, niacin |
| tiamina | thiamin | tiamina, thiamin |
| annatto | annatto | annatto, annatto |

**Fuente / Source:** [Walkers UK](https://www.walkers.co.uk/our-range/family-snacks/quavers-cheese)  
**Tipo / Type:** `manufacturer_website`  
**Alcance / Supports:** Official Walkers UK product page with ingredient list. Precautionary may-contain allergens excluded.

---

### POCARI SWEAT 500 ml / POCARI SWEAT 500 ml

- **ID:** `pocari-sweat-japan-500ml`
- **Foto real / Real photo:** [Ver envase / View package](https://wingonfile01.easesales.com/upload/3302BA3D66D2EDC2/202005/4834603554203765292.png_700x650.ashx) · [Fuente / Source](https://shop.wingon.hk/en/Product/EshopDetail/4925/class-0/product-297399/cm-19670/d-0)- **Marca / Brand:** Otsuka
- **País / Country:** Japan
- **Mercado / Market:** Japan
- **Envase / Package:** 500 ml bottle
- **Categoría / Category:** `sports_drink`
- **Barcode:** No registrado / Not recorded
- **Estado / Status:** `ready` · **Verificación:** `manufacturer_website`
- **Descripción (ES):** Bebida japonesa de reposición de agua y electrolitos.
- **Description (EN):** Japanese hydration drink with water and electrolyte replenishment.

**Ingredientes declarados / Declared ingredients**

Sugar (processed in Japan), high fructose corn syrup, fruit juice, salt / acidulant, flavoring, potassium chloride, calcium lactate, flavor enhancer (amino acids), magnesium chloride, antioxidants (vitamin C).

**Respuestas aceptadas / Accepted answers (11)**

| Español | English | Alias / Aliases |
|---|---|---|
| azúcar | sugar | azúcar, sugar |
| jarabe de maíz de alta fructosa | high fructose corn syrup | jarabe de maíz de alta fructosa, high fructose corn syrup |
| jugo de frutas | fruit juice | jugo de frutas, fruit juice |
| sal | salt | sal, salt |
| acidulante | acidulant | acidulante, acidulant |
| saborizante | flavoring | saborizante, flavoring |
| cloruro de potasio | potassium chloride | cloruro de potasio, potassium chloride |
| lactato de calcio | calcium lactate | lactato de calcio, calcium lactate |
| potenciador del sabor (aminoácidos) | flavor enhancer (amino acids) | potenciador del sabor (aminoácidos), flavor enhancer (amino acids) |
| cloruro de magnesio | magnesium chloride | cloruro de magnesio, magnesium chloride |
| vitamina C | vitamin C | vitamina C, vitamin C |

**Fuente / Source:** [Otsuka Pharmaceutical](https://www.otsuka.co.jp/en/nutraceutical/products/pocarisweat/)  
**Tipo / Type:** `manufacturer_website`  
**Alcance / Supports:** Official Otsuka product page, ingredient declaration for 500 ml label-free bottle. Recipe shown for this bottle format.

---

### Kellogg's Coco Pops (Reino Unido) / Kellogg's Coco Pops (UK)

- **ID:** `kelloggs-coco-pops-uk`
- **Foto real / Real photo:** [Ver envase / View package](https://centra.ie/thumbnail/800x800/var/files/brandbank/5059319028958-16066-6a0930-Kellogg-s-Coco-Pops-420g.jpg) · [Fuente / Source](https://centra.ie/offers/kelloggs-coco-pops-cereal-420g)
- **Marca / Brand:** Kellogg's
- **País / Country:** United Kingdom
- **Mercado / Market:** United Kingdom
- **Envase / Package:** UK retail pack; size not specified on source page
- **Categoría / Category:** `breakfast_cereal`
- **Barcode:** No registrado / Not recorded
- **Estado / Status:** `ready` · **Verificación:** `manufacturer_website`
- **Descripción (ES):** Cereal de arroz inflado con cacao y vitaminas, formulación británica.
- **Description (EN):** Puffed rice cereal with cocoa and vitamins, UK formulation.

**Ingredientes declarados / Declared ingredients**

Rice, sugar, glucose syrup, fat reduced cocoa powder, salt, cocoa mass, barley malt extract, flavourings. Vitamins and minerals: niacin, iron, vitamin B6, riboflavin, thiamin, folic acid, vitamin D, vitamin B12.

**Respuestas aceptadas / Accepted answers (16)**

| Español | English | Alias / Aliases |
|---|---|---|
| arroz | rice | arroz, rice |
| azúcar | sugar | azúcar, sugar |
| jarabe de glucosa | glucose syrup | jarabe de glucosa, glucose syrup |
| cacao reducido en grasa en polvo | fat-reduced cocoa powder | cacao reducido en grasa en polvo, fat-reduced cocoa powder |
| sal | salt | sal, salt |
| masa de cacao | cocoa mass | masa de cacao, cocoa mass |
| extracto de malta de cebada | barley malt extract | extracto de malta de cebada, barley malt extract |
| saborizantes | flavourings | saborizantes, flavourings |
| niacina | niacin | niacina, niacin |
| hierro | iron | hierro, iron |
| vitamina B6 | vitamin B6 | vitamina B6, vitamin B6 |
| riboflavina | riboflavin | riboflavina, riboflavin |
| tiamina | thiamin | tiamina, thiamin |
| ácido fólico | folic acid | ácido fólico, folic acid |
| vitamina D | vitamin D | vitamina D, vitamin D |
| vitamina B12 | vitamin B12 | vitamina B12, vitamin B12 |

**Fuente / Source:** [Kellogg's UK / Kellogg's Vantage](https://www.kelloggsvantage.co.uk/en_GB/products/coco-pops-original.html)  
**Tipo / Type:** `manufacturer_website`  
**Alcance / Supports:** Official Kellogg's UK product data page; ingredients and vitamin/mineral declaration. Package size not specified.

---

### Salsa A.1. Original para carnes 10 oz / A.1. Original Steak Sauce 10 oz

- **ID:** `a1-original-steak-sauce-us-10oz`
- **Foto real / Real photo:** [Ver envase / View package](https://i5.walmartimages.com/seo/A-1-Original-Steak-Sauce-Bottle-10-oz-3-Pack_2d6c1e88-78a1-43c9-9273-a5e7cccfdc0a.1157d855937abc18d28ae06342a4b6fc.jpeg?odnBg=FFFFFF&odnHeight=768&odnWidth=768) · [Fuente / Source](https://www.walmart.com/ip/419119348)
- **Marca / Brand:** A.1.
- **País / Country:** United States
- **Mercado / Market:** United States
- **Envase / Package:** 10 oz bottle
- **Categoría / Category:** `condiment_sauce`
- **Barcode:** 00054400000054
- **Estado / Status:** `ready` · **Verificación:** `manufacturer_website`
- **Descripción (ES):** Salsa estadounidense agridulce para carnes, con tomate, naranja y especias.
- **Description (EN):** American tangy steak sauce with tomato, orange and spices.

**Ingredientes declarados / Declared ingredients**

TOMATO PUREE (WATER, TOMATO PASTE), VINEGAR, CORN SYRUP, SALT, RAISIN PASTE, CRUSHED ORANGE PUREE, SPICES (CONTAINS CELERY), DRIED GARLIC, CARAMEL COLOR, DRIED ONION, XANTHAN GUM.

**Respuestas aceptadas / Accepted answers (14)**

| Español | English | Alias / Aliases |
|---|---|---|
| puré de tomate | tomato puree | puré de tomate, tomato puree |
| agua | water | agua, water |
| pasta de tomate | tomato paste | pasta de tomate, tomato paste |
| vinagre | vinegar | vinagre, vinegar |
| jarabe de maíz | corn syrup | jarabe de maíz, corn syrup |
| sal | salt | sal, salt |
| pasta de pasas | raisin paste | pasta de pasas, raisin paste |
| puré de naranja triturada | crushed orange puree | puré de naranja triturada, crushed orange puree |
| especias | spices | especias, spices |
| apio | celery | apio, celery |
| ajo deshidratado | dried garlic | ajo deshidratado, dried garlic |
| colorante caramelo | caramel color | colorante caramelo, caramel color |
| cebolla deshidratada | dried onion | cebolla deshidratada, dried onion |
| goma xantana | xanthan gum | goma xantana, xanthan gum |

**Fuente / Source:** [Kraft Heinz / A.1.](https://www.kraftheinz.com/a1/products/00054400000054-original-steak-sauce)  
**Tipo / Type:** `manufacturer_website`  
**Alcance / Supports:** Official Kraft Heinz US product page; ingredient declaration and 10 oz size.

---

### Mutti Polpa de tomate 400 g / Mutti Polpa 400 g

- **ID:** `mutti-polpa-italy-400g`
- **Foto real / Real photo:** [Ver envase / View package](https://chedrauimx.vtexassets.com/arquivos/ids/65508295-800-auto?aspect=true&height=auto&v=639094768624870000&width=800) · [Fuente / Source](https://www.chedraui.com.mx/pulpa-de-tomate-mutti-finamente-picado-de-400g-3246253/p)- **Marca / Brand:** Mutti
- **País / Country:** Italy
- **Mercado / Market:** Italy
- **Envase / Package:** 400 g can (common retail size; verify package)
- **Categoría / Category:** `canned_tomatoes`
- **Barcode:** No registrado / Not recorded
- **Estado / Status:** `ready` · **Verificación:** `manufacturer_website`
- **Descripción (ES):** Tomate italiano finamente picado con su propio jugo y sal.
- **Description (EN):** Finely chopped Italian tomatoes in their own juice with salt.

**Ingredientes declarados / Declared ingredients**

Tomate 99,8%, sal.

**Respuestas aceptadas / Accepted answers (2)**

| Español | English | Alias / Aliases |
|---|---|---|
| tomate | tomato | tomate, tomato |
| sal | salt | sal, salt |

**Fuente / Source:** [Mutti](https://mutti-parma.com/es/productos/polpa/)  
**Tipo / Type:** `manufacturer_website`  
**Alcance / Supports:** Official Mutti product page states the main ingredients as tomato 99.8% and salt; 400 g package is a market reference, not specified on this page.

---

### Crema Lotus Biscoff 8 kg / Lotus Biscoff Spread 8 kg

- **ID:** `lotus-biscoff-spread-foodservice-8kg`
- **Foto real / Real photo:** [Ver envase / View package](https://lasalameriadeli.com/cdn/shop/files/746BC4C1-2EC3-4000-80FD-25827093BD32.jpg?v=1711316349&width=1445) · [Fuente / Source](https://lasalameriadeli.com/products/crema-lotus-biscoff-8kg)- **Marca / Brand:** Lotus Biscoff
- **País / Country:** Belgium
- **Mercado / Market:** International foodservice
- **Envase / Package:** 8 kg foodservice tub
- **Categoría / Category:** `chocolate_spread`
- **Barcode:** No registrado / Not recorded
- **Estado / Status:** `ready` · **Verificación:** `manufacturer_website`
- **Descripción (ES):** Crema untable de galletas caramelizadas Biscoff, presentación profesional.
- **Description (EN):** Spread made from caramelised Biscoff biscuits, foodservice pack.

**Ingredientes declarados / Declared ingredients**

Original caramelised biscuits 58% (wheat flour, sugar, vegetable oils (palm oil, rapeseed oil), candy sugar syrup, raising agent (sodium hydrogen carbonate), soya flour, salt, cinnamon), rapeseed oil, sugar, emulsifier (soya lecithin), acid (citric acid).

**Respuestas aceptadas / Accepted answers (11)**

| Español | English | Alias / Aliases |
|---|---|---|
| harina de trigo | wheat flour | harina de trigo, wheat flour |
| azúcar | sugar | azúcar, sugar |
| aceite de palma | palm oil | aceite de palma, palm oil |
| aceite de colza | rapeseed oil | aceite de colza, rapeseed oil |
| jarabe de azúcar caramelizado | candy sugar syrup | jarabe de azúcar caramelizado, candy sugar syrup |
| bicarbonato de sodio | sodium hydrogen carbonate | bicarbonato de sodio, sodium hydrogen carbonate |
| harina de soja | soya flour | harina de soja, soya flour |
| sal | salt | sal, salt |
| canela | cinnamon | canela, cinnamon |
| lecitina de soja | soya lecithin | lecitina de soja, soya lecithin |
| ácido cítrico | citric acid | ácido cítrico, citric acid |

**Fuente / Source:** [Lotus Biscoff Food Professionals](https://www.lotusbiscoff.com/en/foodprofessionals/products/biscoff-spread-8kg)  
**Tipo / Type:** `manufacturer_website`  
**Alcance / Supports:** Official Lotus Biscoff foodservice product page; ingredient declaration for 8 kg spread. Trace-allergen warnings excluded.

---

### Indomie Mi Goreng / Indomie Mi Goreng

- **ID:** `indomie-mi-goreng-indonesia`
- **Foto real / Real photo:** [Ver envase / View package](https://www.toko360.com/product/100009/104625/1672023663/26/6e49560710ff85f49f3c913783af7a21.jpeg) · [Fuente / Source](https://www.toko360.com/produk/%281-bungkus%29-indomie-goreng-spesial-asli-original-85-gram-mie-goreng-1-buah-1pcs-1-bks--bayar-ditempat--cod_d104625.html)
- **Marca / Brand:** Indomie
- **País / Country:** Indonesia
- **Mercado / Market:** Indonesia
- **Envase / Package:** 85 g pack (common retail size; source record does not state size)
- **Categoría / Category:** `instant_noodles`
- **Barcode:** No registrado / Not recorded
- **Estado / Status:** `ready` · **Verificación:** `regulatory_database_transcription`
- **Descripción (ES):** Fideos instantáneos indonesios salteados con salsa dulce de soja, chile y condimentos.
- **Description (EN):** Indonesian instant stir-fry noodles with sweet soy sauce, chilli and seasonings.

**Ingredientes declarados / Declared ingredients**

Tepung terigu, minyak nabati, saus cabe (4,7%) (mengandung pengawet natrium benzoat dan natrium metabisulfit), kecap manis (mengandung kedelai dan gandum), bawang goreng (2,3%), tepung tapioka, garam, gula, bumbu mi goreng (0,8%) (mengandung antioksidan alfa tokoferol, tokoferol campuran pekat dan BHA), penguat rasa (mononatrium glutamat, dinatrium inosinat dan guanilat), perisa sintetik (mengandung telur, susu, antioksidan (asam askorbat, alfa tokoferol dan tokoferol campuran pekat)), bawang putih bubuk, pengatur keasaman, penstabil (nabati dan fosfat), lada bubuk, vitamin (A, B1, B6, B12, niasin, asam folat dan pantotenat), pewarna alami karamel I, mineral (zat besi), antioksidan TBHQ dan pewarna sintetik tartrazin CI 19140.

**Respuestas aceptadas / Accepted answers (37)**

| Español | English | Alias / Aliases |
|---|---|---|
| harina de trigo | wheat flour | harina de trigo, wheat flour |
| aceite vegetal | vegetable oil | aceite vegetal, vegetable oil |
| salsa de chile | chilli sauce | salsa de chile, chilli sauce |
| benzoato de sodio | sodium benzoate | benzoato de sodio, sodium benzoate |
| metabisulfito de sodio | sodium metabisulfite | metabisulfito de sodio, sodium metabisulfite |
| salsa de soja dulce | sweet soy sauce | salsa de soja dulce, sweet soy sauce |
| soja | soybeans | soja, soybeans |
| cebolla frita | fried onion | cebolla frita, fried onion |
| harina de tapioca | tapioca flour | harina de tapioca, tapioca flour |
| sal | salt | sal, salt |
| azúcar | sugar | azúcar, sugar |
| alfa-tocoferol | alpha-tocopherol | alfa-tocoferol, alpha-tocopherol |
| tocoferoles mixtos concentrados | mixed concentrated tocopherols | tocoferoles mixtos concentrados, mixed concentrated tocopherols |
| BHA | BHA | BHA, BHA |
| glutamato monosódico | monosodium glutamate | glutamato monosódico, monosodium glutamate |
| inosinato disódico | disodium inosinate | inosinato disódico, disodium inosinate |
| guanilato disódico | disodium guanylate | guanilato disódico, disodium guanylate |
| saborizante sintético | synthetic flavouring | saborizante sintético, synthetic flavouring |
| huevo | egg | huevo, egg |
| leche | milk | leche, milk |
| ácido ascórbico | ascorbic acid | ácido ascórbico, ascorbic acid |
| ajo en polvo | garlic powder | ajo en polvo, garlic powder |
| regulador de acidez | acidity regulator | regulador de acidez, acidity regulator |
| estabilizante vegetal | vegetable stabiliser | estabilizante vegetal, vegetable stabiliser |
| fosfatos | phosphates | fosfatos, phosphates |
| pimienta molida | ground pepper | pimienta molida, ground pepper |
| vitamina A | vitamin A | vitamina A, vitamin A |
| vitamina B1 | vitamin B1 | vitamina B1, vitamin B1 |
| vitamina B6 | vitamin B6 | vitamina B6, vitamin B6 |
| vitamina B12 | vitamin B12 | vitamina B12, vitamin B12 |
| niacina | niacin | niacina, niacin |
| ácido fólico | folic acid | ácido fólico, folic acid |
| ácido pantoténico | pantothenic acid | ácido pantoténico, pantothenic acid |
| colorante caramelo I | caramel colour I | colorante caramelo I, caramel colour I |
| hierro | iron | hierro, iron |
| TBHQ | TBHQ | TBHQ, TBHQ |
| tartrazina CI 19140 | tartrazine CI 19140 | tartrazina CI 19140, tartrazine CI 19140 |

**Fuente / Source:** [Nilaigizi.id (BPOM registration transcription)](https://www.nilaigizi.id/product/indomie-mi-goreng)  
**Tipo / Type:** `regulatory_database_transcription`  
**Alcance / Supports:** Indonesian ingredient transcription linked to BPOM registration MD240935004300027; third-party database, not manufacturer page. Formula/package must be checked against local wrapper.

---

### Fanta Naranja Japón 500 ml / Fanta Orange Japan 500 ml

- **ID:** `fanta-orange-japan-500ml`
- **Foto real / Real photo:** [Ver envase / View package](https://tshop.r10s.jp/nozomi-market/cabinet/202509_20/f16-74-1.jpg) · [Fuente / Source](https://item.rakuten.co.jp/nozomi-market/f16-74/)
- **Marca / Brand:** Fanta
- **País / Country:** Japan
- **Mercado / Market:** Japan
- **Envase / Package:** 500 ml PET (manufacturer-listed size)
- **Categoría / Category:** `orange_soda`
- **Barcode:** No registrado / Not recorded
- **Estado / Status:** `ready` · **Verificación:** `manufacturer_website`
- **Descripción (ES):** Gaseosa Fanta de naranja del mercado japonés, con edulcorantes y colorante caroteno.
- **Description (EN):** Japanese-market Fanta orange soda with sweeteners and carotene colour.

**Ingredientes declarados / Declared ingredients**

果糖ぶどう糖液糖（国内製造）／炭酸、香料、酸味料、酸化防止剤（ビタミンC）、甘味料（アセスルファムK、スクラロース、ステビア）、カロチン色素

**Respuestas aceptadas / Accepted answers (9)**

| Español | English | Alias / Aliases |
|---|---|---|
| jarabe de fructosa y glucosa | high-fructose glucose syrup | jarabe de fructosa y glucosa, high-fructose glucose syrup |
| gas carbónico | carbon dioxide | gas carbónico, carbon dioxide |
| saborizante | flavouring | saborizante, flavouring |
| acidulante | acidulant | acidulante, acidulant |
| vitamina C | vitamin C | vitamina C, vitamin C |
| acesulfame K | acesulfame K | acesulfame K, acesulfame K |
| sucralosa | sucralose | sucralosa, sucralose |
| estevia | stevia | estevia, stevia |
| colorante caroteno | carotene colour | colorante caroteno, carotene colour |

**Fuente / Source:** [Coca-Cola Japan](https://www.coca-cola.com/jp/ja/brands/fanta/products)  
**Tipo / Type:** `manufacturer_website`  
**Alcance / Supports:** Official Coca-Cola Japan product ingredient list for Fanta Orange. The 500 ml PET size is shown in official product announcements; formulation varies by market and revision.

---

### Barilla Salsa Basilico 400 g / Barilla Basilico Sauce 400 g

- **ID:** `barilla-basilico-sauce-italy-400g`
- **Foto real / Real photo:** [Ver envase / View package](https://www.gosupps.com/media/catalog/product/7/1/71uJ9hp7EFL.jpg) · [Fuente / Source](https://www.gosupps.com/barilla-basilico-pasta-and-pizza-sauce-400g-italy-non-gmo-project-verified-vegan-gluten-free-no-added-colour-or-presevatives-pasta-pizza-400-g-pack-of-1.html)
- **Marca / Brand:** Barilla
- **País / Country:** Italy
- **Mercado / Market:** Latin America product page / Italian-style recipe
- **Envase / Package:** 400 g jar
- **Categoría / Category:** `pasta_sauce`
- **Barcode:** No registrado / Not recorded
- **Estado / Status:** `ready` · **Verificación:** `manufacturer_website`
- **Descripción (ES):** Salsa italiana de tomate y albahaca con cebolla y aceite de girasol.
- **Description (EN):** Italian-style tomato and basil pasta sauce with onion and sunflower oil.

**Ingredientes declarados / Declared ingredients**

Pulpa de tomate 72%, concentrado de tomate 14%, cebolla, aceite de girasol, albahaca 2%, azúcar, sal, aroma natural.

**Respuestas aceptadas / Accepted answers (8)**

| Español | English | Alias / Aliases |
|---|---|---|
| pulpa de tomate | tomato pulp | pulpa de tomate, tomato pulp |
| concentrado de tomate | tomato concentrate | concentrado de tomate, tomato concentrate |
| cebolla | onion | cebolla, onion |
| aceite de girasol | sunflower oil | aceite de girasol, sunflower oil |
| albahaca | basil | albahaca, basil |
| azúcar | sugar | azúcar, sugar |
| sal | salt | sal, salt |
| aroma natural | natural flavouring | aroma natural, natural flavouring |

**Fuente / Source:** [Barilla Latinoamérica](https://www.barilla.com/es-la/productos/salsas/salsas-rojas/salsa-basilico)  
**Tipo / Type:** `manufacturer_website`  
**Alcance / Supports:** Official Barilla product page lists 400 g and the complete ingredient declaration.

---

### Barilla Salsa Arrabbiata 400 g / Barilla Arrabbiata Sauce 400 g

- **ID:** `barilla-arrabbiata-sauce-italy-400g`
- **Foto real / Real photo:** [Ver envase / View package](https://thumbnail.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/552911813925290-71a56d77-6546-4ca9-888f-714a2a3e57ee.jpg) · [Fuente / Source](https://www.coupang.com/vp/products/2347357)- **Marca / Brand:** Barilla
- **País / Country:** Italy
- **Mercado / Market:** Latin America product page / Italian-style recipe
- **Envase / Package:** 400 g jar
- **Categoría / Category:** `pasta_sauce`
- **Barcode:** No registrado / Not recorded
- **Estado / Status:** `ready` · **Verificación:** `manufacturer_website`
- **Descripción (ES):** Salsa picante de tomate con pimiento rojo, ajo, perejil y guindilla.
- **Description (EN):** Spicy tomato sauce with red pepper, garlic, parsley and chilli.

**Ingredientes declarados / Declared ingredients**

Pulpa de tomate 82%, concentrado de tomate 7,9%, aceite de girasol, pimientos rojos, ajo, sal, perejil, azúcar, guindilla 0,1%.

**Respuestas aceptadas / Accepted answers (9)**

| Español | English | Alias / Aliases |
|---|---|---|
| pulpa de tomate | tomato pulp | pulpa de tomate, tomato pulp |
| concentrado de tomate | tomato concentrate | concentrado de tomate, tomato concentrate |
| aceite de girasol | sunflower oil | aceite de girasol, sunflower oil |
| pimientos rojos | red peppers | pimientos rojos, red peppers |
| ajo | garlic | ajo, garlic |
| sal | salt | sal, salt |
| perejil | parsley | perejil, parsley |
| azúcar | sugar | azúcar, sugar |
| guindilla | chilli pepper | guindilla, chilli pepper |

**Fuente / Source:** [Barilla Latinoamérica](https://www.barilla.com/es-la/productos/salsas/salsas-rojas/salsa-arrabbiata)  
**Tipo / Type:** `manufacturer_website`  
**Alcance / Supports:** Official Barilla product page lists 400 g and ingredient declaration.

---

### Salsa de soja Kikkoman / Kikkoman Soy Sauce

- **ID:** `kikkoman-soy-sauce-india-500ml`
- **Foto real / Real photo:** [Ver envase / View package](https://www.luckystore.in/cdn/shop/files/Kikkoman-Soy-Sauce-Pet-Bottle_-500-ml-luckystore-59967512_1080x.png?v=1752232591) · [Fuente / Source](https://www.luckystore.in/products/kikkoman-soy-sauce-500ml-pet-bottle-500-ml)- **Marca / Brand:** Kikkoman
- **País / Country:** Japan
- **Mercado / Market:** India
- **Envase / Package:** 500 ml (one of the manufacturer-listed pack sizes)
- **Categoría / Category:** `soy_sauce`
- **Estado / Status:** `ready` · **Verificación:** `manufacturer_website`
- **Descripción (ES):** Salsa de soja naturalmente fermentada, comercializada en India.
- **Description (EN):** Naturally brewed soy sauce sold in India.

**Ingredientes declarados / Declared ingredients**

Water, Soybeans (24%), Wheat, Salt.

**Respuestas aceptadas / Accepted answers (4)**

| Español | English | Alias / Aliases |
|---|---|---|
| agua | water | agua, water |
| soja | soybeans | soja, soybeans, soybean |
| trigo | wheat | trigo, wheat |
| sal | salt | sal, salt |

**Fuente / Source:** [Kikkoman India](https://kikkomanindia.com/products/kikkoman-soy-sauce)  
**Tipo / Type:** `manufacturer_website`  
**Alcance / Supports:** Official Kikkoman India product page lists the ingredients and available 500 ml pack size.

---

### New Yakult / New Yakult

- **ID:** `yakult-new-yakult-japan-65ml`
- **Foto real / Real photo:** [Ver envase / View package](https://www.costco.co.jp/medias/sys_master/images/hd1/hf7/414384885792798.jpg) · [Fuente / Source](https://www.costco.co.jp/Fresh-Frozen-Chilled/Dairy/New-Yakult-65ml-x-50/p/70174)- **Marca / Brand:** Yakult
- **País / Country:** Japan
- **Mercado / Market:** Japan
- **Envase / Package:** 65 ml bottle
- **Categoría / Category:** `fermented_drink`
- **Estado / Status:** `ready` · **Verificación:** `manufacturer_website`
- **Descripción (ES):** Bebida láctea fermentada probiótica de la línea japonesa New Yakult.
- **Description (EN):** Probiotic fermented milk drink from Japan's New Yakult line.

**Ingredientes declarados / Declared ingredients**

Glucose-fructose syrup (made in Japan), sugar, skimmed milk powder / flavorings.

**Respuestas aceptadas / Accepted answers (4)**

| Español | English | Alias / Aliases |
|---|---|---|
| jarabe de glucosa y fructosa | glucose-fructose syrup | jarabe de glucosa y fructosa, glucose-fructose syrup |
| azúcar | sugar | azúcar, sugar |
| leche descremada en polvo | skimmed milk powder | leche descremada en polvo, skimmed milk powder, skim milk powder |
| aromatizantes | flavorings | aromatizantes, flavorings, flavourings |

**Fuente / Source:** [Yakult Honsha](https://www.yakult.co.jp/english/inbound/yakult/)  
**Tipo / Type:** `manufacturer_website`  
**Alcance / Supports:** Official Yakult Japan page lists New Yakult 65 ml and its ingredient declaration.

---

### Nissin Cup Noodles sabor pollo / Nissin Cup Noodles Chicken

- **ID:** `nissin-cup-noodles-chicken-us-64g`
- **Foto real / Real photo:** [Ver envase / View package](https://d2lnr5mha7bycj.cloudfront.net/product-image/file/large_a3ef9456-084f-4e88-b69c-ef3859095498.jpg) · [Fuente / Source](https://shop.foodmaxx.com/store/foodmaxx/products/34599-nissin-soup-ramen-noodle-chicken-flavor-2-25-oz)- **Marca / Brand:** Nissin
- **País / Country:** United States
- **Mercado / Market:** United States
- **Envase / Package:** 64 g paper cup
- **Categoría / Category:** `instant_noodles`
- **Estado / Status:** `ready` · **Verificación:** `manufacturer_website`
- **Descripción (ES):** Fideos instantáneos sabor pollo · fórmula estadounidense.
- **Description (EN):** Chicken-flavored instant noodles · United States formula.

**Ingredientes declarados / Declared ingredients**

Enriched flour (wheat flour, niacin, reduced iron, thiamine mononitrate, riboflavin, folic acid), palm oil, salt, dried carrot flake, autolyzed yeast extract, citric acid, concentrated green cabbage juice, dextrose, disodium guanylate, disodium inosinate, disodium succinate, dried corn, dried parsley, egg white, garlic powder, hydrolyzed corn protein, hydrolyzed soy protein, lactose, maltodextrin, natural and artificial flavor, onion powder, potassium carbonate, potassium chloride, powdered chicken, rendered chicken fat, silicon dioxide, sodium alginate, sodium carbonate, sodium tripolyphosphate, soybean, spice and color, sugar, TBHQ, wheat.

**Respuestas aceptadas / Accepted answers (40)**

| Español | English | Alias / Aliases |
|---|---|---|
| harina de trigo enriquecida | enriched wheat flour | harina de trigo enriquecida, enriched wheat flour, harina enriquecida |
| harina de trigo | wheat flour | harina de trigo, wheat flour |
| niacina | niacin | niacina, niacin |
| hierro reducido | reduced iron | hierro reducido, reduced iron |
| mononitrato de tiamina | thiamine mononitrate | mononitrato de tiamina, thiamine mononitrate |
| riboflavina | riboflavin | riboflavina, riboflavin |
| ácido fólico | folic acid | ácido fólico, folic acid |
| aceite de palma | palm oil | aceite de palma, palm oil |
| sal | salt | sal, salt |
| zanahoria deshidratada | dried carrot | zanahoria deshidratada, dried carrot |
| extracto de levadura autolizada | autolyzed yeast extract | extracto de levadura autolizada, autolyzed yeast extract |
| ácido cítrico | citric acid | ácido cítrico, citric acid |
| jugo concentrado de repollo verde | concentrated green cabbage juice | jugo concentrado de repollo verde, concentrated green cabbage juice |
| dextrosa | dextrose | dextrosa, dextrose |
| guanilato disódico | disodium guanylate | guanilato disódico, disodium guanylate |
| inosinato disódico | disodium inosinate | inosinato disódico, disodium inosinate |
| succinato disódico | disodium succinate | succinato disódico, disodium succinate |
| maíz deshidratado | dried corn | maíz deshidratado, dried corn |
| perejil deshidratado | dried parsley | perejil deshidratado, dried parsley |
| clara de huevo | egg white | clara de huevo, egg white |
| ajo en polvo | garlic powder | ajo en polvo, garlic powder |
| proteína de maíz hidrolizada | hydrolyzed corn protein | proteína de maíz hidrolizada, hydrolyzed corn protein |
| proteína de soja hidrolizada | hydrolyzed soy protein | proteína de soja hidrolizada, hydrolyzed soy protein |
| lactosa | lactose | lactosa, lactose |
| maltodextrina | maltodextrin | maltodextrina, maltodextrin |
| aroma natural y artificial | natural and artificial flavor | aroma natural y artificial, natural and artificial flavor |
| cebolla en polvo | onion powder | cebolla en polvo, onion powder |
| carbonato de potasio | potassium carbonate | carbonato de potasio, potassium carbonate |
| cloruro de potasio | potassium chloride | cloruro de potasio, potassium chloride |
| pollo en polvo | powdered chicken | pollo en polvo, powdered chicken |
| grasa de pollo | chicken fat | grasa de pollo, chicken fat, rendered chicken fat |
| dióxido de silicio | silicon dioxide | dióxido de silicio, silicon dioxide |
| alginato de sodio | sodium alginate | alginato de sodio, sodium alginate |
| carbonato de sodio | sodium carbonate | carbonato de sodio, sodium carbonate |
| trifosfato de sodio | sodium tripolyphosphate | trifosfato de sodio, sodium tripolyphosphate |
| soja | soybean | soja, soybean, soybeans |
| especias y colorantes | spice and color | especias y colorantes, spice and color |
| azúcar | sugar | azúcar, sugar |
| TBHQ | TBHQ | TBHQ, TBHQ, tertiary butylhydroquinone |
| trigo | wheat | trigo, wheat |

**Fuente / Source:** [Nissin Foods USA](https://www.nissinfoods.com/product/cup-noodles/cup-noodles-chicken/)  
**Tipo / Type:** `manufacturer_website`  
**Alcance / Supports:** Official Nissin USA page publishes the 64 g serving and full ingredient statement for Chicken Cup Noodles.

---

### Oishi Prawn Crackers Original / Oishi Prawn Crackers Original

- **ID:** `oishi-prawn-crackers-philippines-original-24g`
- **Foto real / Real photo:** [Ver envase / View package](https://zbga.shopsuki.ph/cdn/shop/files/4891208040143_800x.jpg?v=1753152481) · [Fuente / Source](https://zbga.shopsuki.ph/products/oishi-prawn-crackers-original-24g)
- **Marca / Brand:** Oishi
- **País / Country:** Philippines
- **Mercado / Market:** Philippines
- **Envase / Package:** 24 g pack (also listed in 60 g and 90 g sizes)
- **Categoría / Category:** `shrimp_crackers`
- **Estado / Status:** `ready` · **Verificación:** `manufacturer_website`
- **Descripción (ES):** Snack crocante de camarón, tapioca y maíz · versión original filipina.
- **Description (EN):** Crispy shrimp, tapioca and corn snack · Philippine Original version.

**Ingredientes declarados / Declared ingredients**

Wheat, Tapioca Starch, Corn Starch, Vegetable Oil (may consist of Coconut Oil and/or Palm Olein), Sugar, Iodized Salt (Salt with Potassium Iodide), Shrimp, Flavor Enhancers (Monosodium Glutamate, Disodium Inosinate, Disodium Guanylate), FD&C Yellow No. 5 (Tartrazine), Vitamin A Palmitate, FD&C Red No. 40, TBHQ and/or BHA/BHT Antioxidant.

**Respuestas aceptadas / Accepted answers (19)**

| Español | English | Alias / Aliases |
|---|---|---|
| trigo | wheat | trigo, wheat |
| almidón de tapioca | tapioca starch | almidón de tapioca, tapioca starch |
| almidón de maíz | corn starch | almidón de maíz, corn starch |
| aceite vegetal | vegetable oil | aceite vegetal, vegetable oil |
| aceite de coco | coconut oil | aceite de coco, coconut oil |
| oleína de palma | palm olein | oleína de palma, palm olein |
| azúcar | sugar | azúcar, sugar |
| sal yodada | iodized salt | sal yodada, iodized salt |
| yodo de potasio | potassium iodide | yodo de potasio, potassium iodide |
| camarón | shrimp | camarón, shrimp, prawn |
| glutamato monosódico | monosodium glutamate | glutamato monosódico, monosodium glutamate, MSG |
| inosinato disódico | disodium inosinate | inosinato disódico, disodium inosinate |
| guanilato disódico | disodium guanylate | guanilato disódico, disodium guanylate |
| tartrazina | tartrazine | tartrazina, tartrazine, FD&C Yellow No. 5 |
| palmitato de vitamina A | vitamin A palmitate | palmitato de vitamina A, vitamin A palmitate |
| rojo 40 | Red 40 | rojo 40, Red 40, FD&C Red No. 40 |
| TBHQ | TBHQ | TBHQ, TBHQ |
| BHA | BHA | BHA, BHA, butylated hydroxyanisole |
| BHT | BHT | BHT, BHT, butylated hydroxytoluene |

**Fuente / Source:** [Oishi Philippines / Liwayway Marketing Corporation](https://www.oishi.com.ph/products/oishi-prawn-crackers/)  
**Tipo / Type:** `manufacturer_website`  
**Alcance / Supports:** Official Oishi Philippines product page lists Original flavor, pack sizes and ingredients; precautionary facility statements are excluded.

---

### Sanpellegrino Aranciata / Sanpellegrino Aranciata

- **ID:** `sanpellegrino-aranciata-italy-330ml`
- **Foto real / Real photo:** [Ver envase / View package](https://shopping.c.yimg.jp/lib/tokyo-syusui/20241119nbkk052.jpg) · [Fuente / Source](https://store.shopping.yahoo.co.jp/tokyo-syusui/8252350048.html)
- **Marca / Brand:** Sanpellegrino
- **País / Country:** Italy
- **Mercado / Market:** Italy
- **Envase / Package:** 330 ml can
- **Categoría / Category:** `orange_soda`
- **Estado / Status:** `ready` · **Verificación:** `manufacturer_website`
- **Descripción (ES):** Bebida gasificada de naranja con 16% de jugo de naranja de concentrado.
- **Description (EN):** Sparkling orange drink with 16% orange juice from concentrate.

**Ingredientes declarados / Declared ingredients**

Water, orange juice from concentrate (16%), sugar, carbon dioxide, lemon juice concentrate, orange extract (0.1%), natural orange flavouring.

**Respuestas aceptadas / Accepted answers (7)**

| Español | English | Alias / Aliases |
|---|---|---|
| agua | water | agua, water |
| jugo de naranja concentrado | orange juice from concentrate | jugo de naranja concentrado, orange juice from concentrate |
| azúcar | sugar | azúcar, sugar |
| dióxido de carbono | carbon dioxide | dióxido de carbono, carbon dioxide, CO2 |
| jugo de limón concentrado | lemon juice concentrate | jugo de limón concentrado, lemon juice concentrate |
| extracto de naranja | orange extract | extracto de naranja, orange extract |
| aroma natural de naranja | natural orange flavouring | aroma natural de naranja, natural orange flavouring, natural orange flavoring |

**Fuente / Source:** [Sanpellegrino](https://www.sanpellegrino.com/beverages/aranciata)  
**Tipo / Type:** `manufacturer_website`  
**Alcance / Supports:** Official Sanpellegrino product page lists the 330 ml can and ingredient statement.

---

### Pringles Paprika / Pringles Paprika

- **ID:** `pringles-paprika-germany-165g`
- **Foto real / Real photo:** [Ver envase / View package](https://discountdragon.co.uk/cdn/shop/files/pringles_paprika.png?v=1754653982) · [Fuente / Source](https://discountdragon.co.uk/products/pringles-paprika-165g)- **Marca / Brand:** Pringles
- **País / Country:** Germany
- **Mercado / Market:** Germany
- **Envase / Package:** 165 g canister
- **Categoría / Category:** `potato_chips`
- **Estado / Status:** `ready` · **Verificación:** `manufacturer_website`
- **Descripción (ES):** Snack de papa con condimento de pimentón · fórmula alemana.
- **Description (EN):** Paprika-seasoned potato snack · German formula.

**Ingredientes declarados / Declared ingredients**

Potato puree powder, sunflower oil, corn flour, wheat flour, paprika seasoning (sugar, paprika powder, monosodium glutamate, disodium guanylate, disodium inosinate, dextrose, yeast powder, onion powder, salt, granulated broth (salt, hydrolyzed vegetable protein, sunflower oil), flavourings, garlic powder, paprika extract, citric acid, sweet whey powder), rice flour, maltodextrin, emulsifier E471, rapeseed oil, salt, annatto norbixin.

**Respuestas aceptadas / Accepted answers (24)**

| Español | English | Alias / Aliases |
|---|---|---|
| polvo de puré de papa | potato puree powder | polvo de puré de papa, potato puree powder |
| aceite de girasol | sunflower oil | aceite de girasol, sunflower oil |
| harina de maíz | corn flour | harina de maíz, corn flour |
| harina de trigo | wheat flour | harina de trigo, wheat flour |
| azúcar | sugar | azúcar, sugar |
| pimentón en polvo | paprika powder | pimentón en polvo, paprika powder |
| glutamato monosódico | monosodium glutamate | glutamato monosódico, monosodium glutamate, MSG |
| guanilato disódico | disodium guanylate | guanilato disódico, disodium guanylate |
| inosinato disódico | disodium inosinate | inosinato disódico, disodium inosinate |
| dextrosa | dextrose | dextrosa, dextrose |
| levadura en polvo | yeast powder | levadura en polvo, yeast powder |
| cebolla en polvo | onion powder | cebolla en polvo, onion powder |
| sal | salt | sal, salt |
| proteína vegetal hidrolizada | hydrolyzed vegetable protein | proteína vegetal hidrolizada, hydrolyzed vegetable protein |
| aromatizantes | flavourings | aromatizantes, flavourings, flavorings |
| ajo en polvo | garlic powder | ajo en polvo, garlic powder |
| extracto de pimentón | paprika extract | extracto de pimentón, paprika extract |
| ácido cítrico | citric acid | ácido cítrico, citric acid |
| suero dulce en polvo | sweet whey powder | suero dulce en polvo, sweet whey powder |
| harina de arroz | rice flour | harina de arroz, rice flour |
| maltodextrina | maltodextrin | maltodextrina, maltodextrin |
| emulsionante E471 | emulsifier E471 | emulsionante E471, emulsifier E471, mono- and diglycerides |
| aceite de colza | rapeseed oil | aceite de colza, rapeseed oil, canola oil |
| norbixina de annatto | annatto norbixin | norbixina de annatto, annatto norbixin |

**Fuente / Source:** [Pringles Germany](https://www.pringles.com/de/products/flavours/pringles-paprika.html)  
**Tipo / Type:** `manufacturer_website`  
**Alcance / Supports:** Official Pringles Germany page provides the German-market ingredient list; may-contain soy statement is not treated as an ingredient.

---

### Glico Pretz sabor tomate / Glico Tomato Pretz

- **ID:** `glico-tomato-pretz-japan-53g`
- **Foto real / Real photo:** [Ver envase / View package](https://www.glico.com/assets/images/large/%E3%80%90%E7%AB%8B%E4%BD%93%E7%94%BB%E5%83%8F%E3%80%9153G_%EF%BE%84%EF%BE%8F%EF%BE%84%EF%BE%8C%EF%BE%9F%EF%BE%98%EF%BD%AF%EF%BE%82_20231204__1.jpg) · [Fuente / Source](https://www.glico.com/jp/product/snack_biscuit_cookie/pretz/46436/)- **Marca / Brand:** Glico
- **País / Country:** Japan
- **Mercado / Market:** Japan
- **Envase / Package:** 53 g pack
- **Categoría / Category:** `tomato_pretzels`
- **Estado / Status:** `ready` · **Verificación:** `manufacturer_website`
- **Descripción (ES):** Pretzels salados con tomate y vinagre de tomate · producto japonés.
- **Description (EN):** Savory pretzel sticks with tomato and tomato vinegar · Japanese product.

**Ingredientes declarados / Declared ingredients**

Wheat flour (made in Japan), vegetable oil, shortening, sugar, tomato paste, starch, brewed vinegar (tomato vinegar), yeast, vegetable paste, onion seasoning, salt, dried spinach, pepper; processed starch, seasoning (inorganic salts etc.), flavouring, emulsifier, acidulant, spice extract.

**Respuestas aceptadas / Accepted answers (19)**

| Español | English | Alias / Aliases |
|---|---|---|
| harina de trigo | wheat flour | harina de trigo, wheat flour |
| aceite vegetal | vegetable oil | aceite vegetal, vegetable oil |
| shortening | shortening | shortening, shortening, grasa vegetal |
| azúcar | sugar | azúcar, sugar |
| pasta de tomate | tomato paste | pasta de tomate, tomato paste |
| almidón | starch | almidón, starch |
| vinagre de tomate | tomato vinegar | vinagre de tomate, tomato vinegar |
| levadura | yeast | levadura, yeast |
| pasta de vegetales | vegetable paste | pasta de vegetales, vegetable paste |
| condimento de cebolla | onion seasoning | condimento de cebolla, onion seasoning |
| sal | salt | sal, salt |
| espinaca deshidratada | dried spinach | espinaca deshidratada, dried spinach |
| pimienta | pepper | pimienta, pepper |
| almidón modificado | modified starch | almidón modificado, modified starch, processed starch |
| sazonador | seasoning | sazonador, seasoning |
| aromatizante | flavouring | aromatizante, flavouring, flavoring |
| emulsionante | emulsifier | emulsionante, emulsifier |
| acidulante | acidulant | acidulante, acidulant |
| extracto de especias | spice extract | extracto de especias, spice extract |

**Fuente / Source:** [Ezaki Glico](https://www.glico.com/jp/product/snack_biscuit_cookie/pretz/46436/)  
**Tipo / Type:** `manufacturer_website`  
**Alcance / Supports:** Official Glico Japan product page lists Tomato Pretz, 53 g, JAN 4901005521315 and its Japanese raw-material declaration.

---

### MILO en polvo / MILO Powder

- **ID:** `milo-powder-australia-200g`
- **Foto real / Real photo:** [Ver envase / View package](https://australiansnacks.com/cdn/shop/files/Milo_Small_Tin.jpg?v=1778165221&width=1946) · [Fuente / Source](https://australiansnacks.com/products/milo-small-tin)- **Marca / Brand:** MILO
- **País / Country:** Australia
- **Mercado / Market:** Australia
- **Envase / Package:** 200 g pack
- **Categoría / Category:** `malt_drink_powder`
- **Estado / Status:** `ready` · **Verificación:** `manufacturer_website`
- **Descripción (ES):** Preparado en polvo de malta y cacao · fórmula australiana.
- **Description (EN):** Malted cocoa drink powder · Australian formula.

**Ingredientes declarados / Declared ingredients**

Extract of malt barley or malt barley and rice, milk solids, sugar, cocoa, choc malt blend (soy), minerals (calcium, iron), vitamins (C, B3, B6, B2, D, B12).

**Respuestas aceptadas / Accepted answers (16)**

| Español | English | Alias / Aliases |
|---|---|---|
| extracto de malta de cebada | extract of malt barley | extracto de malta de cebada, extract of malt barley |
| malta de cebada | malt barley | malta de cebada, malt barley |
| arroz | rice | arroz, rice |
| sólidos de leche | milk solids | sólidos de leche, milk solids |
| azúcar | sugar | azúcar, sugar |
| cacao | cocoa | cacao, cocoa |
| mezcla de malta y chocolate | choc malt blend | mezcla de malta y chocolate, choc malt blend |
| soja | soy | soja, soy |
| calcio | calcium | calcio, calcium |
| hierro | iron | hierro, iron |
| vitamina C | vitamin C | vitamina C, vitamin C |
| niacina | niacin | niacina, niacin, vitamin B3 |
| vitamina B6 | vitamin B6 | vitamina B6, vitamin B6 |
| riboflavina | riboflavin | riboflavina, riboflavin, vitamin B2 |
| vitamina D | vitamin D | vitamina D, vitamin D |
| vitamina B12 | vitamin B12 | vitamina B12, vitamin B12 |

**Fuente / Source:** [Nestlé Australia / MILO Australia](https://www.milo.com.au/powder)  
**Tipo / Type:** `manufacturer_website`  
**Alcance / Supports:** Official MILO Australia page lists package sizes including 200 g and the ingredient statement.

---

### Chupa Chups chupetines frutales / Chupa Chups Fruit Lollipops

- **ID:** `chupa-chups-fruit-lollipops-spain-300g`
- **Foto real / Real photo:** [Ver envase / View package](https://www.treatsfromoz.com/cdn/shop/files/379909_2_1200x.jpg?v=1714640114) · [Fuente / Source](https://www.treatsfromoz.com/products/chupa-chups-lollipops-best-of-25-pack-300g)- **Marca / Brand:** Chupa Chups
- **País / Country:** Spain
- **Mercado / Market:** Spain / assorted fruit flavours
- **Envase / Package:** 300 g assorted bag (25 lollipops)
- **Categoría / Category:** `lollipop`
- **Estado / Status:** `ready` · **Verificación:** `manufacturer_product_specification`
- **Descripción (ES):** Bolsa surtida de chupetines frutales; se usa la declaración específica de sabores frutales.
- **Description (EN):** Assorted fruit lollipops; uses the fruit-flavour ingredient declaration.

**Ingredientes declarados / Declared ingredients**

Sugar, glucose syrup, fruit puree from concentrate (apple, cherry, raspberry, pineapple, lime, lemon, strawberry, peach, banana, orange, blueberry, blackberry, mango, watermelon, kiwi) (3%), acids (citric acid, lactic acid, malic acid), flavourings, concentrates (beetroot, spirulina).

**Respuestas aceptadas / Accepted answers (24)**

| Español | English | Alias / Aliases |
|---|---|---|
| azúcar | sugar | azúcar, sugar |
| jarabe de glucosa | glucose syrup | jarabe de glucosa, glucose syrup |
| puré de fruta concentrado | fruit puree from concentrate | puré de fruta concentrado, fruit puree from concentrate |
| manzana | apple | manzana, apple |
| cereza | cherry | cereza, cherry |
| frambuesa | raspberry | frambuesa, raspberry |
| ananá | pineapple | ananá, pineapple |
| lima | lime | lima, lime |
| limón | lemon | limón, lemon |
| frutilla | strawberry | frutilla, strawberry |
| durazno | peach | durazno, peach |
| banana | banana | banana, banana |
| naranja | orange | naranja, orange |
| arándano | blueberry | arándano, blueberry |
| mora | blackberry | mora, blackberry |
| mango | mango | mango, mango |
| sandía | watermelon | sandía, watermelon |
| kiwi | kiwi | kiwi, kiwi |
| ácido cítrico | citric acid | ácido cítrico, citric acid |
| ácido láctico | lactic acid | ácido láctico, lactic acid |
| ácido málico | malic acid | ácido málico, malic acid |
| aromatizantes | flavourings | aromatizantes, flavourings, flavorings |
| concentrado de remolacha | beetroot concentrate | concentrado de remolacha, beetroot concentrate |
| espirulina | spirulina | espirulina, spirulina |

**Fuente / Source:** [Chupa Chups SAU / Alimentium product specification](https://gestiona.alimentiumconnect.com/Multimedia/Data_52214/ce966f4e-cc7d-4985-a4d9-6636f024c207.pdf)  
**Tipo / Type:** `manufacturer_product_specification`  
**Alcance / Supports:** Chupa Chups supplier technical specification identifies Spanish origin and a separate fruit-flavour ingredient declaration; this record represents fruit flavours only, not the strawberry-and-cream variant.

---

### MAGGI salsa de tomate, chile y sabor agridulce / MAGGI Hot & Sweet Tomato Chilli Sauce

- **ID:** `maggi-hot-sweet-tomato-chilli-india-200g`
- **Foto real / Real photo:** [Ver envase / View package](https://www.bbassets.com/media/uploads/p/xl/266058_12-maggi-hot-sweet-tomato-chilli-sauce.jpg) · [Fuente / Source](https://www.bigbasket.com/pd/266058/maggi-hot-sweet-tomato-chilli-sauce-200-g-bottle/)- **Marca / Brand:** MAGGI
- **País / Country:** India
- **Mercado / Market:** India
- **Envase / Package:** 200 g bottle
- **Categoría / Category:** `chili_sauce`
- **Estado / Status:** `ready` · **Verificación:** `retailer_label_transcription`
- **Descripción (ES):** Salsa india agridulce de tomate y chile · transcripción comercial de etiqueta.
- **Description (EN):** Indian sweet-and-hot tomato chilli sauce · retailer label transcription.

**Ingredientes declarados / Declared ingredients**

Water, Sugar, Tomato paste (11.9%), Red chilli puree (6.6%), Iodized salt, Acidity regulator (260), Starch, Mixed Spices, Garlic powder, Thickener (415), Onion powder, Preservative (211).

**Respuestas aceptadas / Accepted answers (12)**

| Español | English | Alias / Aliases |
|---|---|---|
| agua | water | agua, water |
| azúcar | sugar | azúcar, sugar |
| pasta de tomate | tomato paste | pasta de tomate, tomato paste |
| puré de chile rojo | red chilli puree | puré de chile rojo, red chilli puree, red chili puree |
| sal yodada | iodized salt | sal yodada, iodized salt |
| regulador de acidez 260 | acidity regulator 260 | regulador de acidez 260, acidity regulator 260, acetic acid |
| almidón | starch | almidón, starch |
| mezcla de especias | mixed spices | mezcla de especias, mixed spices |
| ajo en polvo | garlic powder | ajo en polvo, garlic powder |
| espesante 415 | thickener 415 | espesante 415, thickener 415, xanthan gum |
| cebolla en polvo | onion powder | cebolla en polvo, onion powder |
| conservante 211 | preservative 211 | conservante 211, preservative 211, sodium benzoate |

**Fuente / Source:** [BigBasket (Nestlé India product listing)](https://business.bigbasket.com/pd/266058/maggi-hot-sweet-tomato-chilli-sauce-200-g-bottle/)  
**Tipo / Type:** `retailer_label_transcription`  
**Alcance / Supports:** Retailer listing transcribes the ingredient declaration, identifies Nestlé India and a 200 g pack; manufacturer brand page confirms product identity but not full ingredients.

---
### ColaCao Original / ColaCao Original

- **ID:** `colacao-original-spain-383g`
- **Foto real / Real photo:** [Ver envase / View package](https://www.polichollo.com/cdn/shop/files/6239.jpg?v=1758785698) · [Fuente / Source](https://www.polichollo.com/products/colacao-original-383-gr)- **Marca / Brand:** ColaCao
- **País / Country:** Spain
- **Mercado / Market:** Spain
- **Envase / Package:** 383 g tin
- **Categoría / Category:** `malt_cocoa_powder`
- **Estado / Status:** `ready` · **Verificación:** `manufacturer_website`
- **Descripción (ES):** Preparado español de cacao con cereal kola-malteado.
- **Description (EN):** Spanish cocoa drink powder with malted kola cereal.

**Ingredientes declarados / Declared ingredients**

Sugar, natural defatted cocoa (22%), malted kola cereal cream (wheat flour, barley malt extract, natural flavour: cola nut extract), mineral salts (calcium, phosphorus), flavourings, salt.

**Respuestas aceptadas / Accepted answers (10)**

| Español | English | Alias / Aliases |
|---|---|---|
| azúcar | sugar | azúcar, sugar |
| cacao desgrasado natural | natural defatted cocoa | cacao desgrasado natural, natural defatted cocoa |
| harina de trigo | wheat flour | harina de trigo, wheat flour |
| extracto de malta de cebada | barley malt extract | extracto de malta de cebada, barley malt extract |
| extracto de nuez de cola | cola nut extract | extracto de nuez de cola, cola nut extract |
| sales minerales | mineral salts | sales minerales, mineral salts |
| calcio | calcium | calcio, calcium |
| fósforo | phosphorus | fósforo, phosphorus |
| aromatizantes | flavourings | aromatizantes, flavourings, flavorings |
| sal | salt | sal, salt |

**Fuente / Source:** [Idilia Foods / ColaCao](https://colacao.es/productos/colacao-original)  
**Tipo / Type:** `manufacturer_website`  
**Alcance / Supports:** Official ColaCao Spain product page lists the 383 g format and ingredient declaration.

---

### Goya Frijoles Negros / Goya Black Beans

- **ID:** `goya-black-beans-us-15-5oz`
- **Foto real / Real photo:** [Ver envase / View package](https://shop.goya.com/cdn/shop/products/BlackBeans_28c155a8-f3f3-451f-ae76-79f70c54993c.png?v=1661812943&width=1080) · [Fuente / Source](https://shop.goya.com/products/goya-black-beans)- **Marca / Brand:** Goya
- **País / Country:** United States
- **Mercado / Market:** United States
- **Envase / Package:** 15.5 oz can (also offered in other sizes)
- **Categoría / Category:** `canned_beans`
- **Estado / Status:** `ready` · **Verificación:** `manufacturer_website`
- **Descripción (ES):** Frijoles negros en conserva con agua y sal.
- **Description (EN):** Canned black beans with water and salt.

**Ingredientes declarados / Declared ingredients**

Black beans, water, salt.

**Respuestas aceptadas / Accepted answers (3)**

| Español | English | Alias / Aliases |
|---|---|---|
| frijoles negros | black beans | frijoles negros, black beans |
| agua | water | agua, water |
| sal | salt | sal, salt |

**Fuente / Source:** [Goya Foods](https://www.goya.com/en/products/black-beans-can/)  
**Tipo / Type:** `manufacturer_website`  
**Alcance / Supports:** Official Goya product page lists the 15.5 oz format among available sizes and gives the three-ingredient declaration.

---

### Calbee Jagabee natural / Calbee Jagabee Plain

- **ID:** `calbee-jagabee-plain-japan-38g`
- **Foto real / Real photo:** [Ver envase / View package](https://cdn.askul.co.jp/img/product/3L2/UK71811_3L2.jpg) · [Fuente / Source](https://www.askul.co.jp/p/UK71811/)- **Marca / Brand:** Calbee
- **País / Country:** Japan
- **Mercado / Market:** Japan
- **Envase / Package:** 38 g pack
- **Categoría / Category:** `potato_snack`
- **Estado / Status:** `ready` · **Verificación:** `manufacturer_website`
- **Descripción (ES):** Bastones de papa sin sal añadida, versión natural japonesa.
- **Description (EN):** Unseasoned Japanese potato sticks with no added salt.

**Ingredientes declarados / Declared ingredients**

Potatoes (United States), vegetable oil, antioxidant (vitamin C).

**Respuestas aceptadas / Accepted answers (3)**

| Español | English | Alias / Aliases |
|---|---|---|
| papas | potatoes | papas, potatoes |
| aceite vegetal | vegetable oil | aceite vegetal, vegetable oil |
| vitamina C | vitamin C | vitamina C, vitamin C, ascorbic acid |

**Fuente / Source:** [Calbee Japan](https://www.calbee.co.jp/products/detail/?p=20250121145024)  
**Tipo / Type:** `manufacturer_website`  
**Alcance / Supports:** Official Calbee Japan page lists the 38 g Plain product and its three-item ingredient declaration.

---

### Tajín Clásico / Tajín Clásico

- **ID:** `tajin-clasico-mexico-142g`
- **Foto real / Real photo:** [Ver envase / View package](https://availmru.com/cdn/shop/files/Untitled_design.png?v=1771200468) · [Fuente / Source](https://availmru.com/products/tajin-clasico-seasoning)- **Marca / Brand:** Tajín
- **País / Country:** Mexico
- **Mercado / Market:** United States
- **Envase / Package:** 5 oz bottle (also 14 oz and other sizes)
- **Categoría / Category:** `seasoning_blend`
- **Estado / Status:** `ready` · **Verificación:** `manufacturer_website`
- **Descripción (ES):** Condimento de chile, limón y sal marina.
- **Description (EN):** Chili, lime and sea salt seasoning.

**Ingredientes declarados / Declared ingredients**

Mild chili peppers, lime, sea salt.

**Respuestas aceptadas / Accepted answers (3)**

| Español | English | Alias / Aliases |
|---|---|---|
| chiles suaves | mild chili peppers | chiles suaves, mild chili peppers, mild chile peppers |
| limón | lime | limón, lime |
| sal marina | sea salt | sal marina, sea salt |

**Fuente / Source:** [Tajín USA](https://www.tajin.com/us/tajin-clasico-seasoning-new/)  
**Tipo / Type:** `manufacturer_website`  
**Alcance / Supports:** Official Tajín page lists the Clásico ingredient trio and available pack sizes.

---

### Want Want galletas de arroz con algas / Want Want Seaweed Rice Crackers

- **ID:** `want-want-seaweed-rice-crackers-tw-102g`
- **Foto real / Real photo:** [Ver envase / View package](https://eorder.soda-mall.com/hung-hom/media/catalog/product/cache/9b588f459139fa4fbe58d45626be4c98/3/7/37558_1.jpg) · [Fuente / Source](https://eorder.soda-mall.com/hung-hom/want-want-seaweed-rice-cracker-102g.html)- **Marca / Brand:** Want Want
- **País / Country:** Taiwan
- **Mercado / Market:** Taiwan / China
- **Envase / Package:** 102 g pack (also 136 g)
- **Categoría / Category:** `rice_crackers`
- **Estado / Status:** `ready` · **Verificación:** `manufacturer_product_specification`
- **Descripción (ES):** Galletas de arroz tipo senbei con tiras de alga.
- **Description (EN):** Senbei-style rice crackers with seaweed strips.

**Ingredientes declarados / Declared ingredients**

Japonica rice, palm oil, seaweed strips.

**Respuestas aceptadas / Accepted answers (3)**

| Español | English | Alias / Aliases |
|---|---|---|
| arroz japónica | japonica rice | arroz japónica, japonica rice |
| aceite de palma | palm oil | aceite de palma, palm oil |
| tiras de alga | seaweed strips | tiras de alga, seaweed strips |

**Fuente / Source:** [I Lan Foods / Taiwantrade product specification](https://wantwant.en.taiwantrade.com/product/seaweed-rice-crackers-202147.html)  
**Tipo / Type:** `manufacturer_product_specification`  
**Alcance / Supports:** Product specification identifies Want Want seaweed rice crackers, place of origin Taiwan/China, ingredient list and 102 g / 136 g pack sizes.

---

### Want Want Shelly Senbei Original / Want Want Shelly Senbei Original

- **ID:** `want-want-shelly-senbei-china-122g`
- **Foto real / Real photo:** [Ver envase / View package](https://www.tastysnack.asia/cdn/shop/files/WantWant-ShelleySenbei_122g_365d7f98-0b27-4383-91ff-1de65d897116_1024x.png?v=1700399006) · [Fuente / Source](https://www.tastysnack.asia/products/want-want-shelley-senbei-122g-1)- **Marca / Brand:** Want Want
- **País / Country:** China
- **Mercado / Market:** Singapore retail pack
- **Envase / Package:** 122 g pack
- **Categoría / Category:** `rice_crackers`
- **Estado / Status:** `ready` · **Verificación:** `retailer_label_transcription`
- **Descripción (ES):** Galletitas de arroz senbei originales de Want Want, versión comercializada en Singapur.
- **Description (EN):** Original Want Want senbei rice crackers, Singapore retail listing.

**Ingredientes declarados / Declared ingredients**

Japonica rice, palm oil, sugar, salt, gelatin, flavour enhancer (monosodium glutamate / E621, disodium 5'-inosinate / E631, disodium 5'-guanylate / E627).

**Respuestas aceptadas / Accepted answers (8)**

| Español | English | Alias / Aliases |
|---|---|---|
| arroz japónica | japonica rice | arroz japónica, japonica rice |
| aceite de palma | palm oil | aceite de palma, palm oil |
| azúcar | sugar | azúcar, sugar |
| sal | salt | sal, salt |
| gelatina | gelatin | gelatina, gelatin |
| glutamato monosódico | monosodium glutamate | glutamato monosódico, monosodium glutamate, MSG, E621 |
| inosinato disódico | disodium 5'-inosinate | inosinato disódico, disodium 5'-inosinate, E631 |
| guanilato disódico | disodium 5'-guanylate | guanilato disódico, disodium 5'-guanylate, E627 |

**Fuente / Source:** [NTUC FairPrice (retailer label transcription)](https://www.fairprice.com.sg/product/want-want-shelly-senbei-rice-cracker-original-122g-420042)  
**Tipo / Type:** `retailer_label_transcription`  
**Alcance / Supports:** Retailer product page gives 122 g pack, China origin and ingredient declaration; precautionary traces are excluded.

---

### SKITTLES Original / SKITTLES Original

- **ID:** `skittles-original-us-61-5g`
- **Foto real / Real photo:** [Ver envase / View package](https://lollyhood.com.au/cdn/shop/files/Skittles-Original-Chewy-Candy-Full-Size-2-17-oz-Bag_9c05242d-b8bf-47a3-ac8d-bfbdd709dc8a.d90e5dd4464032c6ac9ade58ee7f7e90.avif?v=1765284807&width=1445) · [Fuente / Source](https://lollyhood.com.au/products/skittles-original-61-5g)- **Marca / Brand:** Skittles
- **País / Country:** United States
- **Mercado / Market:** United States
- **Envase / Package:** 61.5 g single pack
- **Categoría / Category:** `fruit_candy`
- **Estado / Status:** `ready` · **Verificación:** `manufacturer_product_specification`
- **Descripción (ES):** Caramelos masticables frutales multicolor, fórmula estadounidense.
- **Description (EN):** Colorful fruit-flavored chewy candy, United States formula.

**Ingredientes declarados / Declared ingredients**

Sugar, corn syrup, hydrogenated palm kernel oil; less than 2% of: citric acid, tapioca dextrin, modified corn starch, natural and artificial flavors, colors (Red 40 Lake, Yellow 5 Lake, Blue 2 Lake, Yellow 6 Lake, titanium dioxide, Blue 1 Lake, Yellow 6, Red 40, Yellow 5, Blue 1), sodium citrate, carnauba wax.

**Respuestas aceptadas / Accepted answers (19)**

| Español | English | Alias / Aliases |
|---|---|---|
| azúcar | sugar | azúcar, sugar |
| jarabe de maíz | corn syrup | jarabe de maíz, corn syrup |
| aceite de palmiste hidrogenado | hydrogenated palm kernel oil | aceite de palmiste hidrogenado, hydrogenated palm kernel oil |
| ácido cítrico | citric acid | ácido cítrico, citric acid |
| dextrina de tapioca | tapioca dextrin | dextrina de tapioca, tapioca dextrin |
| almidón de maíz modificado | modified corn starch | almidón de maíz modificado, modified corn starch |
| aromas naturales y artificiales | natural and artificial flavors | aromas naturales y artificiales, natural and artificial flavors, natural and artificial flavourings |
| rojo 40 lake | Red 40 Lake | rojo 40 lake, Red 40 Lake |
| amarillo 5 lake | Yellow 5 Lake | amarillo 5 lake, Yellow 5 Lake |
| azul 2 lake | Blue 2 Lake | azul 2 lake, Blue 2 Lake |
| amarillo 6 lake | Yellow 6 Lake | amarillo 6 lake, Yellow 6 Lake |
| dióxido de titanio | titanium dioxide | dióxido de titanio, titanium dioxide |
| azul 1 lake | Blue 1 Lake | azul 1 lake, Blue 1 Lake |
| amarillo 6 | Yellow 6 | amarillo 6, Yellow 6 |
| rojo 40 | Red 40 | rojo 40, Red 40 |
| amarillo 5 | Yellow 5 | amarillo 5, Yellow 5 |
| azul 1 | Blue 1 | azul 1, Blue 1 |
| citrato de sodio | sodium citrate | citrato de sodio, sodium citrate |
| cera de carnauba | carnauba wax | cera de carnauba, carnauba wax |

**Fuente / Source:** [Mars Wrigley (manufacturer product specification)](https://www.webstaurantstore.com/documents/nutrition/mars_full_size_milk_chocolate_candy_bar_variety_pack_nutrition_information.pdf)  
**Tipo / Type:** `manufacturer_product_specification`  
**Alcance / Supports:** Mars Wrigley product specification PDF includes the SKITTLES Original ingredient statement and 61.5 g single pack; source is manufacturer documentation hosted by a foodservice retailer.

---

### Ülker Halley / Ülker Halley

- **ID:** `ulker-halley-turkey-30g`
- **Foto real / Real photo:** [Ver envase / View package](https://turcamart.com/cdn/shop/products/Halley-Biskuvi-30-Gr-24-Adet-2.jpg?v=1617185656&width=700) · [Fuente / Source](https://turcamart.com/products/ulker-halley-chocolate-24s-30-g)- **Marca / Brand:** Ülker
- **País / Country:** Turkey
- **Mercado / Market:** Turkey
- **Envase / Package:** 30 g single pack
- **Categoría / Category:** `chocolate_sandwich_cake`
- **Estado / Status:** `ready` · **Verificación:** `retailer_label_transcription`
- **Descripción (ES):** Galletita sándwich de cacao con marshmallow y cobertura de chocolate con leche.
- **Description (EN):** Cocoa sandwich biscuit with marshmallow and milk chocolate coating.

**Ingredientes declarados / Declared ingredients**

Milk chocolate (sugar, cocoa butter, cocoa mass, whole milk powder, skimmed milk powder, emulsifiers: ammonium phosphatides, polyglycerol polyricinoleate, soy lecithin, flavouring, salt), wheat flour, marshmallow (sugar, invert sugar syrup, water, humectant sorbitol, beef gelatin, flavouring), palm oil, invert sugar syrup, sugar, raising agents (ammonium hydrogen carbonate, sodium hydrogen carbonate, disodium diphosphate), skimmed milk powder, salt, soy lecithin, egg, hazelnut, acidity regulator (citric acid), milk flavourings, flour treatment agent (sodium metabisulphite).

**Respuestas aceptadas / Accepted answers (23)**

| Español | English | Alias / Aliases |
|---|---|---|
| azúcar | sugar | azúcar, sugar |
| manteca de cacao | cocoa butter | manteca de cacao, cocoa butter |
| pasta de cacao | cocoa mass | pasta de cacao, cocoa mass |
| leche entera en polvo | whole milk powder | leche entera en polvo, whole milk powder |
| leche descremada en polvo | skimmed milk powder | leche descremada en polvo, skimmed milk powder |
| fosfátidos de amonio | ammonium phosphatides | fosfátidos de amonio, ammonium phosphatides |
| polirricinoleato de poliglicerol | polyglycerol polyricinoleate | polirricinoleato de poliglicerol, polyglycerol polyricinoleate |
| lecitina de soja | soy lecithin | lecitina de soja, soy lecithin |
| aromatizante | flavouring | aromatizante, flavouring, flavoring |
| sal | salt | sal, salt |
| harina de trigo | wheat flour | harina de trigo, wheat flour |
| jarabe de azúcar invertido | invert sugar syrup | jarabe de azúcar invertido, invert sugar syrup |
| agua | water | agua, water |
| sorbitol | sorbitol | sorbitol, sorbitol |
| gelatina bovina | beef gelatin | gelatina bovina, beef gelatin |
| aceite de palma | palm oil | aceite de palma, palm oil |
| bicarbonato de amonio | ammonium hydrogen carbonate | bicarbonato de amonio, ammonium hydrogen carbonate |
| bicarbonato de sodio | sodium hydrogen carbonate | bicarbonato de sodio, sodium hydrogen carbonate |
| difosfato disódico | disodium diphosphate | difosfato disódico, disodium diphosphate |
| huevo | egg | huevo, egg |
| avellana | hazelnut | avellana, hazelnut |
| ácido cítrico | citric acid | ácido cítrico, citric acid |
| metabisulfito de sodio | sodium metabisulphite | metabisulfito de sodio, sodium metabisulphite |

**Fuente / Source:** [Cepte Şok (retailer label transcription)](https://www.sokmarket.com.tr/ulker-halley-30-g-p-4650)  
**Tipo / Type:** `retailer_label_transcription`  
**Alcance / Supports:** Retailer label transcription identifies 30 g pack, Turkish origin and the detailed ingredient declaration. Precautionary sesame traces are excluded.

---

### Marmite extracto de levadura / Marmite Yeast Extract

- **ID:** `marmite-yeast-extract-uk-250g`
- **Foto real / Real photo:** [Ver envase / View package](https://www.ocado.com/images-v3/eafa5127-d256-497b-9609-4869092accd6/355ad06b-9456-4032-9724-ab017a84da8c/1120x1120.jpg) · [Fuente / Source](https://www.ocado.com/products/marmite-original-yeast-extract-spread/11125011)- **Marca / Brand:** Marmite
- **País / Country:** United Kingdom
- **Mercado / Market:** United Kingdom
- **Envase / Package:** 250 g jar
- **Categoría / Category:** `yeast_spread`
- **Estado / Status:** `ready` · **Verificación:** `manufacturer_website`
- **Descripción (ES):** Pasta salada de extracto de levadura enriquecida con vitaminas B.
- **Description (EN):** Savory yeast extract spread fortified with B vitamins.

**Ingredientes declarados / Declared ingredients**

Yeast extract (contains barley, wheat, oats, rye), salt, vegetable juice concentrate, vitamins (thiamin, riboflavin, niacin, vitamin B12 and folic acid), natural flavouring (contains celery).

**Respuestas aceptadas / Accepted answers (14)**

| Español | English | Alias / Aliases |
|---|---|---|
| extracto de levadura | yeast extract | extracto de levadura, yeast extract |
| cebada | barley | cebada, barley |
| trigo | wheat | trigo, wheat |
| avena | oats | avena, oats |
| centeno | rye | centeno, rye |
| sal | salt | sal, salt |
| concentrado de jugo de vegetales | vegetable juice concentrate | concentrado de jugo de vegetales, vegetable juice concentrate |
| tiamina | thiamin | tiamina, thiamin, vitamin B1 |
| riboflavina | riboflavin | riboflavina, riboflavin, vitamin B2 |
| niacina | niacin | niacina, niacin, vitamin B3 |
| vitamina B12 | vitamin B12 | vitamina B12, vitamin B12 |
| ácido fólico | folic acid | ácido fólico, folic acid |
| aromatizante natural | natural flavouring | aromatizante natural, natural flavouring, natural flavoring |
| apio | celery | apio, celery |

**Fuente / Source:** [Unilever UK / Marmite](https://www.unileverfoodsolutions.co.uk/product/null-1-EN-592258.html)  
**Tipo / Type:** `manufacturer_website`  
**Alcance / Supports:** Official Unilever Food Solutions UK product page provides the Marmite ingredient declaration; 250 g retail format cross-checked against Tesco.

---

### Jarabe de arce puro canadiense / Pure Canadian Maple Syrup

- **ID:** `mcbaigs-pure-maple-syrup-canada`
- **Foto real / Real photo:** [Ver envase / View package](https://mcbaigs.com/1.png) · [Fuente / Source](https://mcbaigs.com/)- **Marca / Brand:** McBaigs
- **País / Country:** Canada
- **Mercado / Market:** Canada
- **Envase / Package:** Bottle size not specified on source page
- **Categoría / Category:** `maple_syrup`
- **Estado / Status:** `ready` · **Verificación:** `manufacturer_website`
- **Descripción (ES):** Jarabe de arce canadiense 100% puro, sin ingredientes añadidos.
- **Description (EN):** 100% pure Canadian maple syrup with no added ingredients.

**Ingredientes declarados / Declared ingredients**

100% pure maple syrup.

**Respuestas aceptadas / Accepted answers (1)**

| Español | English | Alias / Aliases |
|---|---|---|
| jarabe de arce | maple syrup | jarabe de arce, maple syrup, syrup |

**Fuente / Source:** [McBaigs](https://www.mcbaigs.com/nutrition-fact/)  
**Tipo / Type:** `manufacturer_website`  
**Alcance / Supports:** Producer page identifies the product as 100% pure Canadian maple syrup; no package size is claimed.

---


---

### Mayonesa japonesa KEWPIE / KEWPIE Japanese Mayonnaise

- **ID:** `kewpie-japanese-mayonnaise-japan-450g`
- **Foto real / Real photo:** [Ver envase / View package](https://www.kewpieshop.com/cdn/shop/files/KA_Mayo_Import_450g_Front_1198x1198.jpg?v=1762924635) · [Fuente / Source](https://www.kewpieshop.com/collections/kewpie-mayonnaise)- **Marca / Brand:** KEWPIE
- **País / Country:** Japan
- **Mercado / Market:** Japan
- **Envase / Package:** 450 g bottle
- **Categoría / Category:** `condiment_sauce`
- **Estado / Status:** `ready` · **Verificación:** `manufacturer_website`
- **Descripción (ES):** Mayonesa japonesa cremosa elaborada con yema de huevo y una mezcla de vinagres.
- **Description (EN):** Creamy Japanese mayonnaise made with egg yolks and a blend of vinegars.

**Ingredientes declarados / Declared ingredients**

Vegetable oil (canola oil, soybean oil), egg yolk, vinegar, salt, monosodium glutamate, spice, natural flavour.

**Respuestas aceptadas / Accepted answers (9)**

| Español | English | Alias / Aliases |
|---|---|---|
| aceite vegetal | vegetable oil | aceite vegetal, vegetable oil |
| aceite de canola | canola oil | aceite de canola, canola oil |
| aceite de soja | soybean oil | aceite de soja, soybean oil, aceite de soya, soy oil |
| yema de huevo | egg yolk | yema de huevo, egg yolk, yema |
| vinagre | vinegar | vinagre, vinegar |
| sal | salt | sal, salt |
| glutamato monosódico | monosodium glutamate | glutamato monosódico, monosodium glutamate, MSG, E621 |
| especias | spice | especias, spice, especia |
| aromatizante natural | natural flavour | aromatizante natural, natural flavour, natural flavor, saborizante natural |

**Fuente / Source:** [KEWPIE official shop — Japanese-origin 450 g product](https://www.kewpieshop.com/products/kewpie-mayonnaise-450-g-product-of-japan)  
**Tipo / Type:** `manufacturer_website`  
**Alcance / Supports:** Official KEWPIE shop listing identifies the 450 g Japanese-origin product and gives its ingredient statement. This record does not use the separate US-made formulation.

---

### Galletitas Parle-G / Parle-G Biscuits

- **ID:** `parle-g-biscuits-india`
- **Foto real / Real photo:** [Ver envase / View package](https://www.jiomart.com/images/product/600x600/491539619/parle-g-original-glucose-biscuits-100-g-product-images-o491539619-p491539619-1-202208121332.jpg) · [Fuente / Source](https://www.jiomart.com/p/groceries/parle-g-biscuits-110-g-get-20-g-extra/491539619)- **Marca / Brand:** Parle
- **País / Country:** India
- **Mercado / Market:** India
- **Envase / Package:** Pack size varies by market; ingredient transcription only
- **Categoría / Category:** `plain_cookies`
- **Estado / Status:** `ready` · **Verificación:** `retailer_label_transcription`
- **Descripción (ES):** Clásicas galletitas dulces de trigo de la India, con leche y sabor a vainilla.
- **Description (EN):** Classic Indian sweet wheat biscuits made with milk and vanilla flavour.

**Ingredientes declarados / Declared ingredients**

Refined wheat flour (maida) 68%, sugar, refined palm oil, invert sugar syrup (sugar, citric acid), iodised salt, raising agents (INS 503(ii), INS 500(ii)), milk solids, flour treatment agent (INS 1101(i)), emulsifier of vegetable origin (INS 472e), added artificial vanilla flavour (dextrose/glucose, levulose/fructose).

**Respuestas aceptadas / Accepted answers (14)**

| Español | English | Alias / Aliases |
|---|---|---|
| harina de trigo refinada | refined wheat flour | harina de trigo refinada, refined wheat flour, maida, harina de trigo, wheat flour |
| azúcar | sugar | azúcar, sugar |
| aceite de palma refinado | refined palm oil | aceite de palma refinado, refined palm oil, aceite de palma, palm oil |
| jarabe de azúcar invertido | invert sugar syrup | jarabe de azúcar invertido, invert sugar syrup |
| ácido cítrico | citric acid | ácido cítrico, citric acid, E330 |
| sal yodada | iodised salt | sal yodada, iodised salt, iodized salt, sal |
| gasificante INS 503(ii) | raising agent INS 503(ii) | gasificante INS 503(ii), raising agent INS 503(ii), bicarbonato de amonio, ammonium bicarbonate, E503(ii) |
| gasificante INS 500(ii) | raising agent INS 500(ii) | gasificante INS 500(ii), raising agent INS 500(ii), bicarbonato de sodio, sodium bicarbonate, E500(ii) |
| sólidos lácteos | milk solids | sólidos lácteos, milk solids, leche en polvo, milk powder |
| agente de tratamiento de harina INS 1101(i) | flour treatment agent INS 1101(i) | agente de tratamiento de harina INS 1101(i), flour treatment agent INS 1101(i), INS 1101(i) |
| emulsionante INS 472e | emulsifier INS 472e | emulsionante INS 472e, emulsifier INS 472e, E472e, DATEM |
| aromatizante artificial de vainilla | artificial vanilla flavour | aromatizante artificial de vainilla, artificial vanilla flavour, artificial vanilla flavor, vainilla |
| dextrosa | dextrose | dextrosa, dextrose, glucosa, glucose |
| levulosa | levulose | levulosa, levulose, fructosa, fructose |

**Fuente / Source:** [Parle official brand page](https://www.parleproducts.com/brands/parle-g) · [Secondary pack transcription](https://halalscan.app/p/parle-g)  
**Tipo / Type:** `retailer_label_transcription`  
**Alcance / Supports:** Parle's official page confirms the Parle-G product family; the detailed ingredient declaration is a secondary transcription of a retail pack. No single package weight is asserted because sizes vary.


---

### Whittaker's Peanut Slab / Whittaker's Peanut Slab

- **ID:** `whittakers-peanut-slab-new-zealand-50g`
- **Foto real / Real photo:** [Ver envase / View package](https://cdn11.bigcommerce.com/s-3oxcprqsip/images/stencil/1280x1280/products/47072/57254/R151470_40__12773.1666362870.jpg?c=1) · [Fuente / Source](https://spoil.co.nz/whittakers-peanut-slab-milk-chocolate-bar-50g/)
- **País / Country:** New Zealand
- **Mercado / Market:** New Zealand
- **Envase / Package:** 50 g slab
- **Categoría / Category:** `chocolate_bar`
- **Estado / Status:** `ready` · **Verificación:** `manufacturer_website`
- **Descripción (ES):** Chocolate con leche neozelandés con maní tostado.
- **Description (EN):** New Zealand milk chocolate with roasted peanuts.

**Ingredientes declarados / Declared ingredients**

Milk chocolate [sugar, cocoa solids 33% (pure cocoa butter and cocoa mass), New Zealand milk powder 17%, emulsifier (soy lecithin), vanilla flavour]; roasted peanuts 35%.

**Respuestas aceptadas / Accepted answers (7)**

| Español | English | Alias / Aliases |
|---|---|---|
| azúcar | sugar | azúcar, sugar |
| manteca de cacao | cocoa butter | manteca de cacao, cocoa butter |
| pasta de cacao | cocoa mass | pasta de cacao, cocoa mass |
| leche en polvo | milk powder | leche en polvo, milk powder |
| lecitina de soja | soy lecithin | lecitina de soja, soy lecithin |
| aromatizante de vainilla | vanilla flavour | aromatizante de vainilla, vanilla flavour, vanilla flavor |
| maní tostado | roasted peanuts | maní tostado, roasted peanuts, cacahuetes tostados, peanuts |

**Fuente / Source:** [Whittaker's](https://www.whittakers.co.nz/en_WW/products/peanut/slab)  
**Tipo / Type:** `manufacturer_website`  
**Alcance / Supports:** Official Whittaker's product page identifies the New Zealand-made 50 g Peanut Slab and gives its full ingredient statement. Precautionary may-contain tree nuts and gluten are not treated as ingredients.


---

### Ouma Buttermilk Rusks / Ouma Buttermilk Rusks

- **ID:** `ouma-buttermilk-rusks-south-africa-500g`
- **Foto real / Real photo:** [Ver envase / View package](https://cdn.shopify.com/s/files/1/1900/6813/products/OUMA_Traditional_Rusks_500g_1024x1024.jpg?v=1610748507) · [Fuente / Source](https://bokkiesbiltong.com/products/ouma-rusks)- **Marca / Brand:** Ouma
- **País / Country:** South Africa
- **Mercado / Market:** South Africa
- **Envase / Package:** 500 g pack
- **Categoría / Category:** `plain_cookies`
- **Estado / Status:** `ready` · **Verificación:** `retailer_label_transcription`
- **Descripción (ES):** Bizcochos secos sudafricanos tradicionales con suero de leche.
- **Description (EN):** Traditional South African buttermilk rusks.

**Ingredientes declarados / Declared ingredients**

Wheat flour (gluten), sugar, vegetable fat (palm fruit, TBHQ), buttermilk powder (3%) (cow's milk), raising agents (E450, E500, E170), flavourings (contains milk and soy), salt.

**Respuestas aceptadas / Accepted answers (11)**

| Español | English | Alias / Aliases |
|---|---|---|
| harina de trigo | wheat flour | harina de trigo, wheat flour, gluten |
| azúcar | sugar | azúcar, sugar |
| grasa vegetal | vegetable fat | grasa vegetal, vegetable fat |
| aceite de palma | palm oil | aceite de palma, palm oil, palm fruit |
| TBHQ | TBHQ | TBHQ, TBHQ, tertiary butylhydroquinone |
| suero de leche en polvo | buttermilk powder | suero de leche en polvo, buttermilk powder |
| gasificante E450 | raising agent E450 | gasificante E450, raising agent E450, difosfatos, diphosphates |
| gasificante E500 | raising agent E500 | gasificante E500, raising agent E500, carbonatos de sodio, sodium carbonates |
| carbonato de calcio E170 | calcium carbonate E170 | carbonato de calcio E170, calcium carbonate E170, E170 |
| aromatizantes | flavourings | aromatizantes, flavourings, flavorings |
| sal | salt | sal, salt |

**Fuente / Source:** [SaffaTrading](https://www.saffatrading.co.za/Ouma-Buttermilk-Rusks)  
**Tipo / Type:** `retailer_label_transcription`  
**Alcance / Supports:** Retail listing provides the 500 g pack and an ingredient declaration. It is a secondary transcription, not an official manufacturer specification.


---

### Pasta de curry rojo Mae Ploy / Mae Ploy Red Curry Paste

- **ID:** `mae-ploy-red-curry-paste-thailand-1kg`
- **Foto real / Real photo:** [Ver envase / View package](https://asianpantry.com.au/cdn/shop/files/7f9934225e395c823644634acd20d312.webp?crop=center&height=1200&v=1765256672&width=1200) · [Fuente / Source](https://asianpantry.com.au/products/mae-ploy-red-curry-paste-1kg)
- **País / Country:** Thailand
- **Mercado / Market:** United Kingdom foodservice listing
- **Envase / Package:** 1 kg foodservice pouch
- **Categoría / Category:** `curry_paste`
- **Estado / Status:** `ready` · **Verificación:** `foodservice_specification`
- **Descripción (ES):** Pasta tailandesa de curry rojo con hierbas, especias y pasta de camarón.
- **Description (EN):** Thai red curry paste with herbs, spices and shrimp paste.

**Ingredientes declarados / Declared ingredients**

Garlic 21.5%, dried red chilli 19.0%, lemongrass 18.5%, shallot 14.5%, salt 13.0%, galangal 6.0%, shrimp paste (shrimp 80%, salt) 4.5%, kaffir lime peel 2.5%, pepper 0.5%.

**Respuestas aceptadas / Accepted answers (10)**

| Español | English | Alias / Aliases |
|---|---|---|
| ajo | garlic | ajo, garlic |
| chile rojo seco | dried red chilli | chile rojo seco, dried red chilli, dried red chili, ají rojo seco |
| hierba limón | lemongrass | hierba limón, lemongrass, limoncillo |
| chalota | shallot | chalota, shallot |
| sal | salt | sal, salt |
| galanga | galangal | galanga, galangal |
| pasta de camarón | shrimp paste | pasta de camarón, shrimp paste, pasta de gambas |
| camarón | shrimp | camarón, shrimp, gamba |
| piel de lima kaffir | kaffir lime peel | piel de lima kaffir, kaffir lime peel, cáscara de lima kaffir |
| pimienta | pepper | pimienta, pepper |

**Fuente / Source:** [Henderson Foodservice](https://www.henderson-foodservice.com/productpdf/download/file/id/987/name/Mae_Ploy_Red_Curry_Paste_BD_%252812x1kg%2529.pdf/)  
**Tipo / Type:** `foodservice_specification`  
**Alcance / Supports:** Foodservice specification identifies Mae Ploy Red Curry Paste in 1 kg pouches and provides ingredient percentages and subcomponents, including shrimp paste.


---

### VEGEMITE Original / VEGEMITE Original

- **ID:** `vegemite-original-australia-220g`
- **Foto real / Real photo:** [Ver envase / View package](https://www.instacart.com/image-server/1864x1864/www.instacart.com/assets/domains/product-image/file/large_3a33d897-ded2-4563-bbfb-c6b087c9d25b.jpg) · [Fuente / Source](https://www.instacart.com/products/25576303-vegemite-yeast-extract-220-g)
- **País / Country:** Australia
- **Mercado / Market:** Australia
- **Envase / Package:** 220 g jar
- **Categoría / Category:** `yeast_spread`
- **Estado / Status:** `ready` · **Verificación:** `manufacturer_data_sheet`
- **Descripción (ES):** Pasta australiana salada de extracto de levadura, enriquecida con vitaminas B.
- **Description (EN):** Australian savoury yeast extract spread enriched with B vitamins.

**Ingredientes declarados / Declared ingredients**

Yeast extract (from yeast grown on barley and wheat), salt, mineral salt (508), malt extract (from barley), colour (150c), flavours, niacin, thiamine, riboflavin, folate.

**Respuestas aceptadas / Accepted answers (12)**

| Español | English | Alias / Aliases |
|---|---|---|
| extracto de levadura | yeast extract | extracto de levadura, yeast extract |
| cebada | barley | cebada, barley |
| trigo | wheat | trigo, wheat |
| sal | salt | sal, salt |
| cloruro de potasio (INS 508) | potassium chloride (INS 508) | cloruro de potasio (INS 508), potassium chloride (INS 508), E508 |
| extracto de malta | malt extract | extracto de malta, malt extract |
| caramelo (INS 150c) | caramel colour (INS 150c) | caramelo (INS 150c), caramel colour (INS 150c), caramel color, E150c |
| aromatizantes | flavours | aromatizantes, flavours, flavors |
| niacina | niacin | niacina, niacin, vitamina B3, vitamin B3 |
| tiamina | thiamine | tiamina, thiamine, vitamina B1, vitamin B1 |
| riboflavina | riboflavin | riboflavina, riboflavin, vitamina B2, vitamin B2 |
| folato | folate | folato, folate, ácido fólico, folic acid |

**Fuente / Source:** [Bega Foods / Bega Foodservice](https://superiorfs.com.au/documents/PDF/KV220_1.pdf)  
**Tipo / Type:** `manufacturer_data_sheet`  
**Alcance / Supports:** Bega product data sheet identifies the 220 g jar, barcode and ingredient declaration. The manufacturer foodservice page independently confirms the formula and Australian origin.


---

### LU Véritable Petit Beurre / LU Véritable Petit Beurre

- **ID:** `lu-petit-beurre-france-25g`
- **Foto real / Real photo:** [Ver envase / View package](https://cstatic.transgourmet.fr/tg-ecommerce/images/products/detail2/376311.jpg) · [Fuente / Source](https://www.transgourmet.fr/restauration-commerciale/produit/lu-veritable-petit-beurre-x3--277437.html)- **Marca / Brand:** LU
- **País / Country:** France
- **Mercado / Market:** France
- **Envase / Package:** 25 g sleeve (3 biscuits)
- **Categoría / Category:** `plain_cookies`
- **Estado / Status:** `ready` · **Verificación:** `manufacturer_technical_sheet`
- **Descripción (ES):** Galletitas francesas de manteca tipo petit beurre.
- **Description (EN):** French butter petit-beurre biscuits.

**Ingredientes declarados / Declared ingredients**

Wheat flour 73%, sugar, butter 13%, skimmed milk powder, salt, raising agents (ammonium hydrogen carbonate, sodium hydrogen carbonate), acidity regulator (citric acid), flavouring. May contain eggs and sesame.

**Respuestas aceptadas / Accepted answers (9)**

| Español | English | Alias / Aliases |
|---|---|---|
| harina de trigo | wheat flour | harina de trigo, wheat flour |
| azúcar | sugar | azúcar, sugar |
| manteca | butter | manteca, butter |
| leche descremada en polvo | skimmed milk powder | leche descremada en polvo, skimmed milk powder, nonfat dry milk |
| sal | salt | sal, salt |
| bicarbonato de amonio | ammonium hydrogen carbonate | bicarbonato de amonio, ammonium hydrogen carbonate, E503 |
| bicarbonato de sodio | sodium hydrogen carbonate | bicarbonato de sodio, sodium hydrogen carbonate, E500 |
| ácido cítrico | citric acid | ácido cítrico, citric acid, E330 |
| aromatizante | flavouring | aromatizante, flavouring, flavoring |

**Fuente / Source:** [Groupe Pomona / LU](https://cdn.api.groupe-pomona.fr/public/products/0029760/branch/es/medias/veritable-petit-beurre-en-etui-25-g-lu_0029760_es_technical.pdf)  
**Tipo / Type:** `manufacturer_technical_sheet`  
**Alcance / Supports:** Technical sheet updated 25 September 2025 identifies the 25 g three-biscuit sleeve and detailed ingredients. Precautionary egg and sesame traces are excluded.


---

### Pocky Matcha / Pocky Matcha

- **ID:** `pocky-matcha-us-40g`
- **Foto real / Real photo:** [Ver envase / View package](https://candyblastshop.com/cdn/shop/files/GlicoPocky-MatchaGreenTea3.webp?v=1707861021&width=1445) · [Fuente / Source](https://candyblastshop.com/products/glico-pocky-matcha-green-tea)
- **País / Country:** United States
- **Mercado / Market:** United States
- **Envase / Package:** 40 g box
- **Categoría / Category:** `chocolate_biscuit_sticks`
- **Estado / Status:** `ready` · **Verificación:** `manufacturer_website`
- **Descripción (ES):** Palitos de galletita cubiertos con sabor a té verde matcha, versión comercializada en Estados Unidos.
- **Description (EN):** Biscuit sticks with matcha green tea flavour, US-market formulation.

**Ingredientes declarados / Declared ingredients**

Enriched flour (wheat flour, ferrous fumarate, niacinamide, thiamin mononitrate, riboflavin, folic acid), sugar, fully hydrogenated palm oil, whole milk powder, lactose, modified food starch, inulin, vegetable shortening (palm oil, fully hydrogenated palm oil), whole wheat flour, malt extract, green tea powder, artificial flavor, soy lecithin, salt, sodium bicarbonate, baker's yeast.

**Respuestas aceptadas / Accepted answers (21)**

| Español | English | Alias / Aliases |
|---|---|---|
| harina de trigo | wheat flour | harina de trigo, wheat flour |
| fumarato ferroso | ferrous fumarate | fumarato ferroso, ferrous fumarate |
| niacinamida | niacinamide | niacinamida, niacinamide |
| mononitrato de tiamina | thiamin mononitrate | mononitrato de tiamina, thiamin mononitrate |
| riboflavina | riboflavin | riboflavina, riboflavin |
| ácido fólico | folic acid | ácido fólico, folic acid |
| azúcar | sugar | azúcar, sugar |
| aceite de palma totalmente hidrogenado | fully hydrogenated palm oil | aceite de palma totalmente hidrogenado, fully hydrogenated palm oil |
| leche entera en polvo | whole milk powder | leche entera en polvo, whole milk powder |
| lactosa | lactose | lactosa, lactose |
| almidón alimentario modificado | modified food starch | almidón alimentario modificado, modified food starch |
| inulina | inulin | inulina, inulin |
| grasa vegetal | vegetable shortening | grasa vegetal, vegetable shortening |
| harina integral de trigo | whole wheat flour | harina integral de trigo, whole wheat flour |
| extracto de malta | malt extract | extracto de malta, malt extract |
| té verde en polvo | green tea powder | té verde en polvo, green tea powder, matcha |
| aromatizante artificial | artificial flavor | aromatizante artificial, artificial flavor, artificial flavour |
| lecitina de soja | soy lecithin | lecitina de soja, soy lecithin |
| sal | salt | sal, salt |
| bicarbonato de sodio | sodium bicarbonate | bicarbonato de sodio, sodium bicarbonate |
| levadura de panadería | baker's yeast | levadura de panadería, baker's yeast |

**Fuente / Source:** [Ezaki Glico USA](https://www.glico.com/us/product/pocky/18857/)  
**Tipo / Type:** `manufacturer_website`  
**Alcance / Supports:** Official Glico USA product page lists Pocky Matcha 1.41 oz (40 g) and the US-market ingredient statement. This is not asserted to be the Japanese-market formula.


---

### Samyang Buldak Original / Samyang Buldak Original

- **ID:** `samyang-buldak-original-us`
- **Foto real / Real photo:** [Ver envase / View package](https://www.ramencrate.co.nz/cdn/shop/files/SamyangOriginalBuldakHotChickenInstantNoodles-Plain.png?v=1768252565&width=1445) · [Fuente / Source](https://www.ramencrate.co.nz/products/samyang-original-hot-chicken-ramen)
- **País / Country:** South Korea
- **Mercado / Market:** United States
- **Envase / Package:** Single retail pack; size not specified on source page
- **Categoría / Category:** `instant_noodles`
- **Estado / Status:** `ready` · **Verificación:** `manufacturer_website`
- **Descripción (ES):** Fideos instantáneos coreanos picantes con salsa sabor pollo.
- **Description (EN):** Korean spicy instant noodles with chicken-flavoured sauce.

**Ingredientes declarados / Declared ingredients**

Noodles: Wheat flour, food starch-modified, palm oil, less than 2% of wheat gluten, salt, glycerin, soy lecithin, polyglycerol esters of fatty acids, potassium carbonate, sodium carbonate, sodium phosphate dibasic, guar gum, tocopherols, riboflavin (color). Sauce: Water, artificial chicken flavor powder (artificial flavor, dextrin, wheat starch, sugar, salt, yeast extract, natural flavor, disodium 5'-ribonucleotide, maltodextrin, corn starch), soy sauce seasoning (soybeans, water, salt, wheat, sodium carbonate, high fructose corn syrup, disodium 5'-ribonucleotide, garlic, steviol glycoside, maltodextrin, sugar), sugar, hot pepper seasoning [red pepper, dextrin, salt, sugar, onion powder, artificial flavor, garlic powder, silicon dioxide, soy sauce (water, soybeans, wheat, salt), capsicum oleoresin, paprika oleoresin, monosodium glutamate, disodium inosinate, disodium guanylate], soybean oil, onion, red pepper seed oil, garlic, food starch-modified, capsicum oleoresin, paprika oleoresin, black pepper powder, natural and artificial curry flavor (cumin, salt, maltodextrin, artificial flavor). Flake: sesame, dried seaweed.

**Respuestas aceptadas / Accepted answers (42)**

| Español | English | Alias / Aliases |
|---|---|---|
| harina de trigo | wheat flour | harina de trigo, wheat flour |
| almidón alimentario modificado | modified food starch | almidón alimentario modificado, modified food starch |
| aceite de palma | palm oil | aceite de palma, palm oil |
| gluten de trigo | wheat gluten | gluten de trigo, wheat gluten |
| sal | salt | sal, salt |
| glicerina | glycerin | glicerina, glycerin |
| lecitina de soja | soy lecithin | lecitina de soja, soy lecithin |
| ésteres de poliglicerol de ácidos grasos | polyglycerol esters of fatty acids | ésteres de poliglicerol de ácidos grasos, polyglycerol esters of fatty acids |
| carbonato de potasio | potassium carbonate | carbonato de potasio, potassium carbonate |
| carbonato de sodio | sodium carbonate | carbonato de sodio, sodium carbonate |
| fosfato disódico | sodium phosphate dibasic | fosfato disódico, sodium phosphate dibasic |
| goma guar | guar gum | goma guar, guar gum |
| tocoferoles | tocopherols | tocoferoles, tocopherols |
| riboflavina | riboflavin | riboflavina, riboflavin |
| agua | water | agua, water |
| aromatizante artificial | artificial flavor | aromatizante artificial, artificial flavor |
| dextrina | dextrin | dextrina, dextrin |
| azúcar | sugar | azúcar, sugar |
| extracto de levadura | yeast extract | extracto de levadura, yeast extract |
| aromatizante natural | natural flavor | aromatizante natural, natural flavor |
| 5'-ribonucleótido disódico | disodium 5'-ribonucleotide | 5'-ribonucleótido disódico, disodium 5'-ribonucleotide |
| maltodextrina | maltodextrin | maltodextrina, maltodextrin |
| almidón de maíz | corn starch | almidón de maíz, corn starch |
| soja | soybeans | soja, soybeans, soya |
| jarabe de maíz de alta fructosa | high fructose corn syrup | jarabe de maíz de alta fructosa, high fructose corn syrup |
| ajo | garlic | ajo, garlic |
| glucósido de esteviol | steviol glycoside | glucósido de esteviol, steviol glycoside |
| chile rojo | red pepper | chile rojo, red pepper |
| cebolla en polvo | onion powder | cebolla en polvo, onion powder |
| dióxido de silicio | silicon dioxide | dióxido de silicio, silicon dioxide |
| oleorresina de capsicum | capsicum oleoresin | oleorresina de capsicum, capsicum oleoresin |
| oleorresina de pimentón | paprika oleoresin | oleorresina de pimentón, paprika oleoresin |
| glutamato monosódico | monosodium glutamate | glutamato monosódico, monosodium glutamate, MSG, E621 |
| inosinato disódico | disodium inosinate | inosinato disódico, disodium inosinate, E631 |
| guanilato disódico | disodium guanylate | guanilato disódico, disodium guanylate, E627 |
| aceite de soja | soybean oil | aceite de soja, soybean oil |
| cebolla | onion | cebolla, onion |
| aceite de semilla de chile rojo | red pepper seed oil | aceite de semilla de chile rojo, red pepper seed oil |
| pimienta negra en polvo | black pepper powder | pimienta negra en polvo, black pepper powder |
| comino | cumin | comino, cumin |
| sésamo | sesame | sésamo, sesame, ajonjolí |
| algas marinas secas | dried seaweed | algas marinas secas, dried seaweed |

**Fuente / Source:** [Samyang America](https://beta.samyangamerica.com/buldak/original)  
**Tipo / Type:** `manufacturer_website`  
**Alcance / Supports:** Official Samyang America product page supplies ingredient declarations for noodles, sauce and flakes for the US-market Buldak Original product. Package size is not stated in the catalog.


---

### Lao Gan Ma Chili Crisp picante / Lao Gan Ma Spicy Chili Crisp

- **ID:** `lao-gan-ma-spicy-chili-crisp-canada-210g`
- **Foto real / Real photo:** [Ver envase / View package](https://www.formosamarket.com/cdn/shop/files/8sG7c0s3gyvL_8102dcd2-6a20-4c84-b571-32c5119c279d_1200x1200.jpg?v=1733645038) · [Fuente / Source](https://www.formosamarket.com/products/lao-gan-ma-xiang-cui-la-granny-crispy-chili-oil)
- **País / Country:** China
- **Mercado / Market:** Canada
- **Envase / Package:** 210 g jar
- **Categoría / Category:** `condiment_sauce`
- **Estado / Status:** `ready` · **Verificación:** `retailer_label_transcription`
- **Descripción (ES):** Condimento chino de aceite con chile, cebolla, frijoles negros y pimienta de Sichuan.
- **Description (EN):** Chinese chilli oil condiment with chilli, onion, black beans and Sichuan pepper.

**Ingredientes declarados / Declared ingredients**

Soybean oil, chili, onion, black bean, salt, sugar, Chinese prickly ash, monosodium glutamate (E621).

**Respuestas aceptadas / Accepted answers (8)**

| Español | English | Alias / Aliases |
|---|---|---|
| aceite de soja | soybean oil | aceite de soja, soybean oil, soy oil |
| chile | chili | chile, chili, chilli, ají |
| cebolla | onion | cebolla, onion |
| frijoles negros | black beans | frijoles negros, black beans, porotos negros |
| sal | salt | sal, salt |
| azúcar | sugar | azúcar, sugar |
| pimienta de Sichuan | Chinese prickly ash | pimienta de Sichuan, Chinese prickly ash, Sichuan pepper |
| glutamato monosódico | monosodium glutamate | glutamato monosódico, monosodium glutamate, MSG, E621 |

**Fuente / Source:** [Voilà by Sobeys](https://voila.ca/products/lao-gan-ma-spicy-chilli-crisp-210-g/597325EA)  
**Tipo / Type:** `retailer_label_transcription`  
**Alcance / Supports:** Canadian retailer listing identifies the 210 g jar and ingredient list. The Chinese country of origin is attributed to the product brand and should be treated as a market/product identification rather than a manufacturer-issued technical sheet.


---

### Galletitas Bourbon Alfort Mini Chocolate / Bourbon Alfort Mini Chocolate Biscuits

- **ID:** `bourbon-alfort-mini-chocolate-japan-61g`
- **Foto real / Real photo:** [Ver envase / View package](https://media.nedigital.sg/fairprice/90201057_XL1_20260129151713_bd42fa977237fe5b5675fe72c379c62b.jpg) · [Fuente / Source](https://www.fairprice.com.sg/product/bourbon-alfort-mini-chocolate-2)- **Marca / Brand:** Bourbon
- **País / Country:** Japan
- **Mercado / Market:** Thailand retail listing
- **Envase / Package:** 61 g box
- **Categoría / Category:** `chocolate_cookies`
- **Estado / Status:** `ready` · **Verificación:** `retailer_label_transcription`
- **Descripción (ES):** Mini galletitas japonesas de trigo integral cubiertas con chocolate con leche.
- **Description (EN):** Japanese mini whole-wheat biscuits topped with milk chocolate.

**Ingredientes declarados / Declared ingredients**

Sugar, wheat flour, whole milk powder, cacao mass, shortening, vegetable oil, cocoa butter, whole wheat flour, wheat bran, salt, wheat germ, modified starch, emulsifier (from soy), baking powder, flavourings.

**Respuestas aceptadas / Accepted answers (15)**

| Español | English | Alias / Aliases |
|---|---|---|
| azúcar | sugar | azúcar, sugar |
| harina de trigo | wheat flour | harina de trigo, wheat flour |
| leche entera en polvo | whole milk powder | leche entera en polvo, whole milk powder |
| pasta de cacao | cacao mass | pasta de cacao, cacao mass, cocoa mass |
| grasa vegetal | shortening | grasa vegetal, shortening |
| aceite vegetal | vegetable oil | aceite vegetal, vegetable oil |
| manteca de cacao | cocoa butter | manteca de cacao, cocoa butter |
| harina integral de trigo | whole wheat flour | harina integral de trigo, whole wheat flour |
| salvado de trigo | wheat bran | salvado de trigo, wheat bran |
| sal | salt | sal, salt |
| germen de trigo | wheat germ | germen de trigo, wheat germ |
| almidón modificado | modified starch | almidón modificado, modified starch |
| emulsionante de soja | emulsifier from soy | emulsionante de soja, emulsifier from soy, soy emulsifier |
| polvo de hornear | baking powder | polvo de hornear, baking powder, raising agent |
| aromatizantes | flavourings | aromatizantes, flavourings, flavorings |

**Fuente / Source:** [TOPS Online](https://www.tops.co.th/en/bourbon-alfort-mini-chocolate-biscuit-61g-4901360245567)  
**Tipo / Type:** `retailer_label_transcription`  
**Alcance / Supports:** Retail listing identifies the 61 g product, Japan as country of origin, barcode and ingredient declaration. Product packaging may be revised by the manufacturer.


---

### Asahi Calpis Water / Asahi Calpis Water

- **ID:** `calpis-water-taiwan-australia-500ml`
- **Foto real / Real photo:** [Ver envase / View package](https://kufu-ya.com/cdn/shop/files/image-73f4392c-f609-4b05-aff2-b9fcab77346c.jpg?v=1720337151) · [Fuente / Source](https://kufu-ya.com/products/a00000438a)- **Marca / Brand:** Calpis / Asahi
- **País / Country:** Taiwan
- **Mercado / Market:** Australia
- **Envase / Package:** 500 ml bottle
- **Categoría / Category:** `fermented_drink`
- **Estado / Status:** `ready` · **Verificación:** `retailer_label_transcription`
- **Descripción (ES):** Bebida láctea dulce y ligeramente ácida de la marca Calpis, versión de origen taiwanés vendida en Australia.
- **Description (EN):** Sweet, lightly tangy Calpis milk drink, Taiwan-origin version sold in Australia.

**Ingredientes declarados / Declared ingredients**

Water, sugar, skim milk powder, yeast, acidity regulators (330, 331), flavour, thickener (soybean starch).

**Respuestas aceptadas / Accepted answers (8)**

| Español | English | Alias / Aliases |
|---|---|---|
| agua | water | agua, water |
| azúcar | sugar | azúcar, sugar |
| leche descremada en polvo | skim milk powder | leche descremada en polvo, skim milk powder |
| levadura | yeast | levadura, yeast |
| ácido cítrico (INS 330) | citric acid (INS 330) | ácido cítrico (INS 330), citric acid (INS 330), E330 |
| citrato de sodio (INS 331) | sodium citrate (INS 331) | citrato de sodio (INS 331), sodium citrate (INS 331), E331 |
| aromatizante | flavour | aromatizante, flavour, flavor |
| almidón de soja | soybean starch | almidón de soja, soybean starch, soya starch |

**Fuente / Source:** [Woolworths Australia](https://www.woolworths.com.au/shop/productdetails/6057799/asahi-calpis-water)  
**Tipo / Type:** `retailer_label_transcription`  
**Alcance / Supports:** Australian retailer listing identifies a 500 ml bottle, ingredient declaration and explicitly labels the product as Product of Taiwan.


---

### Heinz Baked Beanz / Heinz Baked Beanz

- **ID:** `heinz-baked-beanz-uk-415g`
- **Foto real / Real photo:** [Ver envase / View package](https://www.armstrongcountryfoods.com/cdn/shop/products/heinzbeans_640x.jpg?v=1609851988) · [Fuente / Source](https://www.armstrongcountryfoods.com/products/heinz-baked-beans)- **Marca / Brand:** Heinz
- **País / Country:** United Kingdom
- **Mercado / Market:** United Kingdom
- **Envase / Package:** 415 g can
- **Categoría / Category:** `canned_beans`
- **Estado / Status:** `ready` · **Verificación:** `manufacturer_website`
- **Descripción (ES):** Porotos blancos horneados en salsa de tomate, versión británica.
- **Description (EN):** British baked white beans in tomato sauce.

**Ingredientes declarados / Declared ingredients**

Beans (51%), Tomatoes (34%), Water, Sugar, Spirit Vinegar, Modified Corn Flour, Salt, Spice Extracts, Herb Extract.

**Respuestas aceptadas / Accepted answers (9)**

| Español | English | Alias / Aliases |
|---|---|---|
| porotos | beans | porotos, beans, alubias, judías |
| tomate | tomatoes | tomate, tomatoes, tomates |
| agua | water | agua, water |
| azúcar | sugar | azúcar, sugar |
| vinagre de alcohol | spirit vinegar | vinagre de alcohol, spirit vinegar, vinagre destilado |
| harina de maíz modificada | modified corn flour | harina de maíz modificada, modified corn flour, almidón de maíz modificado |
| sal | salt | sal, salt |
| extractos de especias | spice extracts | extractos de especias, spice extracts |
| extracto de hierbas | herb extract | extracto de hierbas, herb extract |

**Fuente / Source:** [Heinz UK](https://www.heinz.com/en-GB/products/05000157024671-baked-beanz)  
**Tipo / Type:** `manufacturer_website`  
**Alcance / Supports:** Official Heinz UK page lists the 415 g product and the ingredient declaration. The formula is the UK Baked Beanz, not other regional Heinz baked-bean recipes.


---

### Cadbury Lunch Bar / Cadbury Lunch Bar

- **ID:** `cadbury-lunch-bar-south-africa-48g`
- **Foto real / Real photo:** [Ver envase / View package](https://static.wixstatic.com/media/e0cac8_099a71d4080947248e782c589370e157~mv2.png/v1/fill/w_509%2Ch_509%2Cal_c%2Cq_85%2Cenc_avif%2Cquality_auto/e0cac8_099a71d4080947248e782c589370e157~mv2.png) · [Fuente / Source](https://www.pantry-plus.com/product-page/cadbury-lunch-bar-48g-1-x-40)- **Marca / Brand:** Cadbury
- **País / Country:** South Africa
- **Mercado / Market:** South Africa
- **Envase / Package:** 48 g bar (official page lists 23 g, 48 g and 62 g sizes)
- **Categoría / Category:** `chocolate_bar`
- **Estado / Status:** `ready` · **Verificación:** `manufacturer_website`
- **Descripción (ES):** Barra sudafricana con oblea, caramelo, maní y arroz crocante, cubierta de chocolate.
- **Description (EN):** South African wafer bar with chewy caramel, peanuts and crisped rice, coated in chocolate.

**Ingredientes declarados / Declared ingredients**

Sugar, Glucose Syrup, Vegetable Fats [Palm Fruit, Sunflower Seed (Antioxidant-TBHQ), Shea Nut, Illipe Seed, Sal Seed (Soya) (Citric Acid)], Peanuts (9%), Cocoa Butter, Wheat Flour, Full Cream Milk Powder, Cocoa Mass, Rice Flour, Whey Permeate, Invert Sugar, Whey Powder, Emulsifiers (E442, E471, E476, E322-Soya), Humectant (Glycerol), Salt, Flavourings, Raising Agent (E500), Colourants (E122, E142, E104, E110), Barley Malt, Acidifying Agent (E334), Preservative (E223).

**Respuestas aceptadas / Accepted answers (34)**

| Español | English | Alias / Aliases |
|---|---|---|
| azúcar | sugar | azúcar, sugar |
| jarabe de glucosa | glucose syrup | jarabe de glucosa, glucose syrup |
| grasa vegetal | vegetable fat | grasa vegetal, vegetable fat |
| fruto de palma | palm fruit | fruto de palma, palm fruit |
| semilla de girasol | sunflower seed | semilla de girasol, sunflower seed |
| TBHQ | TBHQ | TBHQ, TBHQ, tertiary butylhydroquinone |
| nuez de karité | shea nut | nuez de karité, shea nut |
| semilla de illipe | illipe seed | semilla de illipe, illipe seed |
| sal seed | sal seed | sal seed, sal seed |
| ácido cítrico | citric acid | ácido cítrico, citric acid, E330 |
| maní | peanuts | maní, peanuts, cacahuetes |
| manteca de cacao | cocoa butter | manteca de cacao, cocoa butter |
| harina de trigo | wheat flour | harina de trigo, wheat flour |
| leche entera en polvo | full cream milk powder | leche entera en polvo, full cream milk powder |
| pasta de cacao | cocoa mass | pasta de cacao, cocoa mass |
| harina de arroz | rice flour | harina de arroz, rice flour |
| permeado de suero | whey permeate | permeado de suero, whey permeate |
| azúcar invertido | invert sugar | azúcar invertido, invert sugar |
| suero en polvo | whey powder | suero en polvo, whey powder |
| emulsionante E442 | emulsifier E442 | emulsionante E442, emulsifier E442 |
| emulsionante E471 | emulsifier E471 | emulsionante E471, emulsifier E471 |
| polirricinoleato de poliglicerol E476 | polyglycerol polyricinoleate E476 | polirricinoleato de poliglicerol E476, polyglycerol polyricinoleate E476, E476 |
| lecitina de soja E322 | soy lecithin E322 | lecitina de soja E322, soy lecithin E322, E322 |
| glicerol | glycerol | glicerol, glycerol, glycerin |
| sal | salt | sal, salt |
| aromatizantes | flavourings | aromatizantes, flavourings, flavorings |
| gasificante E500 | raising agent E500 | gasificante E500, raising agent E500, carbonato de sodio, sodium carbonate |
| colorante E122 | colour E122 | colorante E122, colour E122, azorubina |
| colorante E142 | colour E142 | colorante E142, colour E142, verde S |
| colorante E104 | colour E104 | colorante E104, colour E104, amarillo de quinoleína |
| colorante E110 | colour E110 | colorante E110, colour E110, amarillo ocaso |
| malta de cebada | barley malt | malta de cebada, barley malt |
| ácido tartárico E334 | tartaric acid E334 | ácido tartárico E334, tartaric acid E334, E334 |
| metabisulfito de sodio E223 | sodium metabisulphite E223 | metabisulfito de sodio E223, sodium metabisulphite E223, E223 |

**Fuente / Source:** [Cadbury South Africa](https://www.cadbury.co.za/product/cadbury-lunch-bar)  
**Tipo / Type:** `manufacturer_website`  
**Alcance / Supports:** Official Cadbury South Africa product page lists available sizes including 48 g and the full ingredient declaration. Precautionary may-contain statements are excluded.


---

### Gyoza Ajinomoto / Ajinomoto Gyoza

- **ID:** `ajinomoto-gyoza-japan-276g`
- **Foto real / Real photo:** [Ver envase / View package](https://delivery.youmetown.com/img/goods/5/4901001397457_5.jpg) · [Fuente / Source](https://delivery.youmetown.com/shop/g/g4901001397457/)- **Marca / Brand:** Ajinomoto
- **País / Country:** Japan
- **Mercado / Market:** Japan
- **Envase / Package:** 276 g pack (12 pieces)
- **Categoría / Category:** `frozen_dumplings`
- **Estado / Status:** `ready` · **Verificación:** `manufacturer_website`
- **Descripción (ES):** Empanaditas japonesas congeladas rellenas de vegetales y carnes, con masa fina.
- **Description (EN):** Japanese frozen pan-fried dumplings filled with vegetables and meat in a thin wrapper.

**Ingredientes declarados / Declared ingredients**

Vegetables (cabbage, onion, Chinese chive, garlic), meats (chicken, pork), textured soy protein, pork fat, sugar, soy sauce, oyster sauce, binder (textured soy protein, egg white), salt, hydrolyzed protein, vegetable oil, spices, flavour oil, wrapper (wheat flour, vegetable oil, starch, dextrin, salt, soy flour); seasonings (amino acids, etc.), emulsifier, thickening polysaccharides, sodium caseinate.

**Respuestas aceptadas / Accepted answers (25)**

| Español | English | Alias / Aliases |
|---|---|---|
| repollo | cabbage | repollo, cabbage |
| cebolla | onion | cebolla, onion |
| cebollino chino | Chinese chive | cebollino chino, Chinese chive, nira |
| ajo | garlic | ajo, garlic |
| pollo | chicken | pollo, chicken |
| cerdo | pork | cerdo, pork |
| proteína de soja texturizada | textured soy protein | proteína de soja texturizada, textured soy protein, soya texturizada |
| grasa de cerdo | pork fat | grasa de cerdo, pork fat |
| azúcar | sugar | azúcar, sugar |
| salsa de soja | soy sauce | salsa de soja, soy sauce |
| salsa de ostras | oyster sauce | salsa de ostras, oyster sauce |
| clara de huevo | egg white | clara de huevo, egg white |
| sal | salt | sal, salt |
| proteína hidrolizada | hydrolyzed protein | proteína hidrolizada, hydrolyzed protein |
| aceite vegetal | vegetable oil | aceite vegetal, vegetable oil |
| especias | spices | especias, spices |
| aceite saborizante | flavour oil | aceite saborizante, flavour oil, flavor oil |
| harina de trigo | wheat flour | harina de trigo, wheat flour |
| almidón | starch | almidón, starch |
| dextrina | dextrin | dextrina, dextrin |
| harina de soja | soy flour | harina de soja, soy flour |
| potenciadores del sabor (aminoácidos) | flavour enhancers (amino acids) | potenciadores del sabor (aminoácidos), flavour enhancers (amino acids), seasonings |
| emulsionante | emulsifier | emulsionante, emulsifier |
| polisacáridos espesantes | thickening polysaccharides | polisacáridos espesantes, thickening polysaccharides |
| caseinato de sodio | sodium caseinate | caseinato de sodio, sodium caseinate |

**Fuente / Source:** [Ajinomoto Frozen Foods Japan](https://www.ffa.ajinomoto.com/products/detail/id/293)  
**Tipo / Type:** `manufacturer_website`  
**Alcance / Supports:** Official Ajinomoto page identifies the 12-piece 276 g pack, JAN code and detailed Japanese ingredient declaration. Ingredient names are translated from the manufacturer listing.


---

### Koala's March Chocolate / Koala's March Chocolate

- **ID:** `lotte-koalas-march-chocolate-japan-48g`
- **Foto real / Real photo:** [Ver envase / View package](https://i5.walmartimages.com/seo/Lotte-Koala-no-March-Chocolate-48g-10-pack-Made-in-JAPAN-Limited-Version-Tokyo-Sakura-Mall_90cbe901-3b6a-4a0f-976b-9dc7f5434872.63776c0d23e38266c9fa7faed3607ab9.jpeg) · [Fuente / Source](https://www.walmart.com/ip/Lotte-Koala-no-March-Chocolate-48g-10-pack-Made-in-JAPAN-Limited-Version-Tokyo-Sakura-Mall/13330713609)
- **País / Country:** Japan
- **Mercado / Market:** Japan
- **Envase / Package:** 48 g box
- **Categoría / Category:** `filled_cookies`
- **Estado / Status:** `ready` · **Verificación:** `manufacturer_website`
- **Descripción (ES):** Pequeñas galletitas japonesas rellenas de chocolate.
- **Description (EN):** Japanese bite-size biscuits filled with chocolate.

**Ingredientes declarados / Declared ingredients**

Sugar, wheat flour, vegetable oil, cacao mass, starch, shortening, lactose, whole milk powder, liquid egg, cocoa powder, whey powder, salt, cream powder, cocoa butter, calcium carbonate, leavening agent, trehalose, emulsifier (soy-derived), caramel colour, seasoning (amino acids), flavouring.

**Respuestas aceptadas / Accepted answers (21)**

| Español | English | Alias / Aliases |
|---|---|---|
| azúcar | sugar | azúcar, sugar |
| harina de trigo | wheat flour | harina de trigo, wheat flour |
| aceite vegetal | vegetable oil | aceite vegetal, vegetable oil |
| pasta de cacao | cacao mass | pasta de cacao, cacao mass, cocoa mass |
| almidón | starch | almidón, starch |
| grasa vegetal | shortening | grasa vegetal, shortening |
| lactosa | lactose | lactosa, lactose |
| leche entera en polvo | whole milk powder | leche entera en polvo, whole milk powder |
| huevo líquido | liquid egg | huevo líquido, liquid egg |
| cacao en polvo | cocoa powder | cacao en polvo, cocoa powder |
| suero en polvo | whey powder | suero en polvo, whey powder |
| sal | salt | sal, salt |
| crema en polvo | cream powder | crema en polvo, cream powder |
| manteca de cacao | cocoa butter | manteca de cacao, cocoa butter |
| carbonato de calcio | calcium carbonate | carbonato de calcio, calcium carbonate, E170 |
| gasificante | leavening agent | gasificante, leavening agent, raising agent |
| trehalosa | trehalose | trehalosa, trehalose |
| emulsionante de soja | soy-derived emulsifier | emulsionante de soja, soy-derived emulsifier, soy emulsifier |
| colorante caramelo | caramel colour | colorante caramelo, caramel colour, caramel color |
| potenciador del sabor (aminoácidos) | seasoning (amino acids) | potenciador del sabor (aminoácidos), seasoning (amino acids) |
| aromatizante | flavouring | aromatizante, flavouring, flavoring |

**Fuente / Source:** [Lotte Japan](https://www.lotte.co.jp/products/catalogue/choco/04/detail01.html)  
**Tipo / Type:** `manufacturer_website`  
**Alcance / Supports:** Official Lotte product page identifies Koala's March Chocolate 48 g and the full ingredient declaration in Japanese.


---

### Koala's March Strawberry / Koala's March Strawberry

- **ID:** `lotte-koalas-march-strawberry-japan-46g`
- **Foto real / Real photo:** [Ver envase / View package](https://img06.weeecdn.com/item/image/157/702/581B86FB45799BAF.jpeg) · [Fuente / Source](https://www.sayweee.com/zh/product/Lotte-Koala-Strawberry-Chocolate-Biscuit/2134227)- **Marca / Brand:** Lotte
- **País / Country:** Japan
- **Mercado / Market:** Japan
- **Envase / Package:** 46 g box
- **Categoría / Category:** `filled_cookies`
- **Estado / Status:** `ready` · **Verificación:** `manufacturer_website`
- **Descripción (ES):** Galletitas japonesas de color rosa rellenas de chocolate sabor frutilla.
- **Description (EN):** Japanese pink biscuits filled with strawberry-flavoured chocolate.

**Ingredientes declarados / Declared ingredients**

Sugar, wheat flour, vegetable oil, lactose, starch, shortening, cocoa butter, whole milk powder, whey powder, liquid egg, maltitol, strawberry powder, cream powder, salt, calcium carbonate, leavening agent, colours (caramel, red yeast rice, beet red), flavouring, emulsifier (soy-derived).

**Respuestas aceptadas / Accepted answers (21)**

| Español | English | Alias / Aliases |
|---|---|---|
| azúcar | sugar | azúcar, sugar |
| harina de trigo | wheat flour | harina de trigo, wheat flour |
| aceite vegetal | vegetable oil | aceite vegetal, vegetable oil |
| lactosa | lactose | lactosa, lactose |
| almidón | starch | almidón, starch |
| grasa vegetal | shortening | grasa vegetal, shortening |
| manteca de cacao | cocoa butter | manteca de cacao, cocoa butter |
| leche entera en polvo | whole milk powder | leche entera en polvo, whole milk powder |
| suero en polvo | whey powder | suero en polvo, whey powder |
| huevo líquido | liquid egg | huevo líquido, liquid egg |
| maltitol | maltitol | maltitol, maltitol |
| frutilla en polvo | strawberry powder | frutilla en polvo, strawberry powder, fresa en polvo |
| crema en polvo | cream powder | crema en polvo, cream powder |
| sal | salt | sal, salt |
| carbonato de calcio | calcium carbonate | carbonato de calcio, calcium carbonate, E170 |
| gasificante | leavening agent | gasificante, leavening agent |
| colorante caramelo | caramel colour | colorante caramelo, caramel colour, caramel color |
| arroz de levadura roja | red yeast rice | arroz de levadura roja, red yeast rice |
| rojo de remolacha | beet red | rojo de remolacha, beet red |
| aromatizante | flavouring | aromatizante, flavouring, flavoring |
| emulsionante de soja | soy-derived emulsifier | emulsionante de soja, soy-derived emulsifier, soy emulsifier |

**Fuente / Source:** [Lotte Japan](https://www.lotte.co.jp/products/catalogue/choco/04/detail10.html)  
**Tipo / Type:** `manufacturer_website`  
**Alcance / Supports:** Official Lotte product page identifies Koala's March Strawberry 46 g and its distinct ingredient declaration. It is a separate formulation from the chocolate variant.


---

### Pasta de especias Tikka Masala Patak's / Patak's Tikka Masala Spice Paste

- **ID:** `pataks-tikka-masala-paste-uk`
- **Foto real / Real photo:** [Ver envase / View package](https://www.bestwaywholesale.co.uk/img/products/1000/4/5011308000994.jpg) · [Fuente / Source](https://www.bestwaywholesale.co.uk/product/135216-1)- **Marca / Brand:** Patak's
- **País / Country:** United Kingdom
- **Mercado / Market:** United Kingdom
- **Envase / Package:** Product page does not specify pack size
- **Categoría / Category:** `curry_paste`
- **Estado / Status:** `ready` · **Verificación:** `manufacturer_website`
- **Descripción (ES):** Pasta de especias para preparar tikka masala, con cúrcuma, pimentón, comino y cilantro.
- **Description (EN):** Spice paste for tikka masala with turmeric, paprika, cumin and coriander.

**Ingredientes declarados / Declared ingredients**

Water, Ground Spices (19%) [Turmeric, Paprika (4%), Cumin (3%), Coriander (3%), Spices], Rapeseed Oil, Salt, Maize Flour, Acids (Acetic Acid, Citric Acid), Tamarind, Garlic Powder, Cumin Seed, Paprika Extract, Dried Fenugreek Leaf, Dried Coriander Leaf.

**Respuestas aceptadas / Accepted answers (17)**

| Español | English | Alias / Aliases |
|---|---|---|
| agua | water | agua, water |
| cúrcuma | turmeric | cúrcuma, turmeric |
| pimentón | paprika | pimentón, paprika |
| comino | cumin | comino, cumin |
| cilantro | coriander | cilantro, coriander, coriandro |
| especias | spices | especias, spices |
| aceite de colza | rapeseed oil | aceite de colza, rapeseed oil, canola oil |
| sal | salt | sal, salt |
| harina de maíz | maize flour | harina de maíz, maize flour, corn flour |
| ácido acético | acetic acid | ácido acético, acetic acid, E260 |
| ácido cítrico | citric acid | ácido cítrico, citric acid, E330 |
| tamarindo | tamarind | tamarindo, tamarind |
| ajo en polvo | garlic powder | ajo en polvo, garlic powder |
| semillas de comino | cumin seed | semillas de comino, cumin seed |
| extracto de pimentón | paprika extract | extracto de pimentón, paprika extract |
| hoja seca de fenogreco | dried fenugreek leaf | hoja seca de fenogreco, dried fenugreek leaf, hoja de methi |
| hoja seca de cilantro | dried coriander leaf | hoja seca de cilantro, dried coriander leaf |

**Fuente / Source:** [Patak's UK](https://www.pataks.co.uk/products/spice-pastes/tikka-masala-paste)  
**Tipo / Type:** `manufacturer_website`  
**Alcance / Supports:** Official Patak's UK page gives the complete ingredient statement and notes possible mustard, peanut and nut traces; precautionary traces are excluded.


---

### Salsa TABASCO Original / TABASCO Original Red Sauce

- **ID:** `tabasco-original-red-sauce-us-148ml`
- **Foto real / Real photo:** [Ver envase / View package](https://thumbnail.coupangcdn.com/thumbnails/remote/492x492ex/image/TW_vendor_inventory/5310/9c4b2baa92af18d54eac583d2de15dec1eaa769176554e4f85af051b7603.jpg) · [Fuente / Source](https://www.tw.coupang.com/products/TABASCO-%E5%A1%94%E5%B7%B4%E6%96%AF%E7%A7%91%E8%BE%A3%E6%A4%92%E9%86%AC-21006242848276)- **Marca / Brand:** TABASCO
- **País / Country:** United States
- **Mercado / Market:** United States
- **Envase / Package:** 5 fl oz (148 ml) bottle
- **Categoría / Category:** `condiment_sauce`
- **Estado / Status:** `ready` · **Verificación:** `manufacturer_website`
- **Descripción (ES):** Salsa picante clásica de Luisiana elaborada con vinagre, chile rojo y sal.
- **Description (EN):** Classic Louisiana hot sauce made with vinegar, red pepper and salt.

**Ingredientes declarados / Declared ingredients**

Distilled vinegar, red pepper and salt.

**Respuestas aceptadas / Accepted answers (3)**

| Español | English | Alias / Aliases |
|---|---|---|
| vinagre destilado | distilled vinegar | vinagre destilado, distilled vinegar |
| chile rojo | red pepper | chile rojo, red pepper, ají rojo |
| sal | salt | sal, salt |

**Fuente / Source:** [TABASCO / McIlhenny Company](https://shop.tabasco.com/products/original-red-sauce/)  
**Tipo / Type:** `manufacturer_website`  
**Alcance / Supports:** Official TABASCO store page identifies the 5 fl oz bottle and the three ingredients: distilled vinegar, red pepper and salt.


---

### Papas fritas Walkers Cheese & Onion / Walkers Cheese & Onion Crisps

- **ID:** `walkers-cheese-onion-crisps-uk`
- **Foto real / Real photo:** [Ver envase / View package](https://cdn.media.amplience.net/i/Brakes/115408_2?%24pdp-mobile%24=&fmt=auto&img404=image-not-available&locale=en-gb&v=1) · [Fuente / Source](https://www.brake.co.uk/drinks-snacks/snacks-confectionery/crisps-snacks-nuts/crisps/walkers-cheese-onion-crisps-32-5g/p/115408)- **Marca / Brand:** Walkers
- **País / Country:** United Kingdom
- **Mercado / Market:** United Kingdom
- **Envase / Package:** Single retail bag; size not specified on product page
- **Categoría / Category:** `potato_chips`
- **Estado / Status:** `ready` · **Verificación:** `manufacturer_website`
- **Descripción (ES):** Papas fritas británicas sabor queso y cebolla.
- **Description (EN):** British potato crisps flavoured with cheese and onion.

**Ingredientes declarados / Declared ingredients**

Potatoes, Vegetable Oils (Sunflower, Rapeseed, in varying proportions), Cheese & Onion Seasoning [Dried Onion, Salt, Dried Milk Whey, Lactose (from Milk), Sugar, Flavouring (contains Milk), Cheese Powder (from Milk), Dried Yeast, Acids (Citric Acid, Malic Acid), Whey Protein (from Milk), Dried Garlic, Colours (Annatto Bixin, Paprika Extract)], Antioxidants (Rosemary Extract, Ascorbic Acid, Tocopherol Rich Extract, Citric Acid).

**Respuestas aceptadas / Accepted answers (20)**

| Español | English | Alias / Aliases |
|---|---|---|
| papas | potatoes | papas, potatoes, patatas |
| aceite de girasol | sunflower oil | aceite de girasol, sunflower oil |
| aceite de colza | rapeseed oil | aceite de colza, rapeseed oil, canola oil |
| cebolla seca | dried onion | cebolla seca, dried onion |
| sal | salt | sal, salt |
| suero de leche en polvo | dried milk whey | suero de leche en polvo, dried milk whey |
| lactosa | lactose | lactosa, lactose |
| azúcar | sugar | azúcar, sugar |
| aromatizante | flavouring | aromatizante, flavouring, flavoring |
| queso en polvo | cheese powder | queso en polvo, cheese powder |
| levadura seca | dried yeast | levadura seca, dried yeast |
| ácido cítrico | citric acid | ácido cítrico, citric acid, E330 |
| ácido málico | malic acid | ácido málico, malic acid, E296 |
| proteína de suero | whey protein | proteína de suero, whey protein |
| ajo seco | dried garlic | ajo seco, dried garlic |
| bixina de achiote | annatto bixin | bixina de achiote, annatto bixin |
| extracto de pimentón | paprika extract | extracto de pimentón, paprika extract |
| extracto de romero | rosemary extract | extracto de romero, rosemary extract |
| ácido ascórbico | ascorbic acid | ácido ascórbico, ascorbic acid, vitamina C, vitamin C |
| extracto rico en tocoferoles | tocopherol rich extract | extracto rico en tocoferoles, tocopherol rich extract, vitamin E |

**Fuente / Source:** [Walkers UK](https://www.walkers.co.uk/our-range/walkers-crisps/cheese-and-onion)  
**Tipo / Type:** `manufacturer_website`  
**Alcance / Supports:** Official Walkers UK product page provides the complete ingredient statement, including seasoning components and antioxidants. Precautionary may-contain allergens are excluded.


---

### Sopa miso vegetariana Marukome Ryotei No Aji con tofu / Marukome Ryotei No Aji Tofu Vegetarian Miso Soup

- **ID:** `marukome-ryotei-no-aji-tofu-vegetarian-152g`
- **Foto real / Real photo:** [Ver envase / View package](https://www.nikankitchen.com/Images/Products/marukome-instant-miso-soup-with-tofu--153g.png) · [Fuente / Source](https://www.nikankitchen.com/ja/products/91/marukome-ryotei-no-aji-instant-miso-soup-with-tofu-152g)- **Marca / Brand:** Marukome
- **País / Country:** Japan
- **Mercado / Market:** International foodservice / export listing
- **Envase / Package:** 152 g pack
- **Categoría / Category:** `instant_soup`
- **Estado / Status:** `ready` · **Verificación:** `manufacturer_website`
- **Descripción (ES):** Sopa instantánea japonesa de miso con tofu, wakame y cebolla de verdeo; sin gluten y sin MSG añadido.
- **Description (EN):** Japanese instant miso soup with tofu, wakame and green onion; gluten-free and no added MSG.

**Ingredientes declarados / Declared ingredients**

Soup base: Rice Miso (Filtered Water, Soybeans, Rice, Salt), Filtered Water, Alcohol, Sugar, Hydrolyzed Protein, Powdered Yeast Extract, Salt, Onion Extract, Kelp Extract, Shiitake Mushroom Extract Powder. Garnish: Dried Tofu (Soybeans, Calcium Sulfate), Dried Wakame Seaweed, Dried Green Onion.

**Respuestas aceptadas / Accepted answers (15)**

| Español | English | Alias / Aliases |
|---|---|---|
| agua filtrada | filtered water | agua filtrada, filtered water |
| soja | soybeans | soja, soybeans, soya |
| arroz | rice | arroz, rice |
| sal | salt | sal, salt |
| alcohol | alcohol | alcohol, alcohol |
| azúcar | sugar | azúcar, sugar |
| proteína hidrolizada | hydrolyzed protein | proteína hidrolizada, hydrolyzed protein |
| extracto de levadura en polvo | powdered yeast extract | extracto de levadura en polvo, powdered yeast extract |
| extracto de cebolla | onion extract | extracto de cebolla, onion extract |
| extracto de alga kombu | kelp extract | extracto de alga kombu, kelp extract, kombu |
| polvo de extracto de shiitake | shiitake mushroom extract powder | polvo de extracto de shiitake, shiitake mushroom extract powder, hongo shiitake |
| tofu seco | dried tofu | tofu seco, dried tofu |
| sulfato de calcio | calcium sulfate | sulfato de calcio, calcium sulfate, E516 |
| alga wakame seca | dried wakame seaweed | alga wakame seca, dried wakame seaweed |
| cebolla de verdeo seca | dried green onion | cebolla de verdeo seca, dried green onion, spring onion |

**Fuente / Source:** [Marukome Global](https://www.marukome.co.jp/global/en/products_post/instant_035/)  
**Tipo / Type:** `manufacturer_website`  
**Alcance / Supports:** Official Marukome Global page lists the 152 g vegetarian tofu miso soup and separate soup-base and garnish ingredient declarations.


---

### Chicle Lotte Xylitol sabor cola / Lotte Xylitol Gum Cola

- **ID:** `lotte-xylitol-cola-gum-japan-14pcs`
- **Foto real / Real photo:** [Ver envase / View package](https://www.tajimaya-cc.net/upload/save_image/0000045990601.jpg) · [Fuente / Source](https://www.tajimaya-cc.net/products/240962)- **Marca / Brand:** Lotte
- **País / Country:** Japan
- **Mercado / Market:** Japan
- **Envase / Package:** 14-piece pack
- **Categoría / Category:** `chewing_gum`
- **Estado / Status:** `ready` · **Verificación:** `manufacturer_website`
- **Descripción (ES):** Chicle japonés sin azúcar sabor cola, endulzado con xilitol y maltitol.
- **Description (EN):** Japanese sugar-free cola gum sweetened with xylitol and maltitol.

**Ingredientes declarados / Declared ingredients**

Maltitol, vegetable oil / sweeteners (xylitol, aspartame-L-phenylalanine compound), gum base, thickener (gum arabic), vitamin C, flavouring, glazing agent, colours (gardenia, safflower yellow), hesperidin; contains gelatin.

**Respuestas aceptadas / Accepted answers (13)**

| Español | English | Alias / Aliases |
|---|---|---|
| maltitol | maltitol | maltitol, maltitol |
| aceite vegetal | vegetable oil | aceite vegetal, vegetable oil |
| xilitol | xylitol | xilitol, xylitol |
| aspartamo | aspartame | aspartamo, aspartame, E951 |
| base de goma | gum base | base de goma, gum base |
| goma arábiga | gum arabic | goma arábiga, gum arabic, E414 |
| vitamina C | vitamin C | vitamina C, vitamin C, ácido ascórbico |
| aromatizante | flavouring | aromatizante, flavouring, flavoring |
| agente de glaseado | glazing agent | agente de glaseado, glazing agent |
| colorante de gardenia | gardenia colour | colorante de gardenia, gardenia colour, gardenia color |
| amarillo de cártamo | safflower yellow | amarillo de cártamo, safflower yellow |
| hesperidina | hesperidin | hesperidina, hesperidin |
| gelatina | gelatin | gelatina, gelatin |

**Fuente / Source:** [Lotte Japan](https://www.lotte.co.jp/products/catalogue/gum/04/detail123.html)  
**Tipo / Type:** `manufacturer_website`  
**Alcance / Supports:** Official Lotte Japan page identifies Xylitol Gum Cola, 14 pieces, and the ingredient declaration in Japanese.


### Branston Original Pickle / Branston Original Pickle

- **ID:** `branston-original-pickle-uk-360g`
- **Foto real / Real photo:** [Ver envase / View package](https://www.britsuperstore.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/b/r/branston_pickle_360g-1670931748.jpg) · [Fuente / Source](https://www.britsuperstore.com/uk/browse-by-section/groceries/pickles/branston/branston-pickle-360g.html)
- **País / Country:** United Kingdom
- **Mercado / Market:** United Kingdom
- **Envase / Package:** 360 g jar
- **Categoría / Category:** `pickle`
- **Estado / Status:** `ready` · **Verificación:** `manufacturer_website`
- **Descripción (ES):** Pickle británico agridulce de verduras, vinagre y especias.
- **Description (EN):** British sweet-and-tangy vegetable pickle with vinegar and spices.

**Ingredientes declarados / Declared ingredients**

Vegetables in variable proportions (52%) (carrot, rutabaga, onion, cauliflower), sugar, barley malt vinegar, water, spirit vinegar, tomato purée, date paste (dates, rice flour), salt, apple pulp, modified maize starch, colour (sulphite ammonia caramel), onion powder, concentrated lemon juice, spices, colouring food (roasted barley malt extract), herb and spice extracts.

**Respuestas aceptadas / Accepted answers (21)**

| Español | English | Alias / Aliases |
|---|---|---|
| zanahoria | carrot | zanahoria, carrot |
| nabo sueco | swede | nabo sueco, swede, rutabaga |
| cebolla | onion | cebolla, onion |
| coliflor | cauliflower | coliflor, cauliflower |
| azúcar | sugar | azúcar, sugar |
| vinagre de malta de cebada | barley malt vinegar | vinagre de malta de cebada, barley malt vinegar |
| agua | water | agua, water |
| vinagre de alcohol | spirit vinegar | vinagre de alcohol, spirit vinegar |
| puré de tomate | tomato purée | puré de tomate, tomato purée, tomato puree |
| pasta de dátiles | date paste | pasta de dátiles, date paste |
| dátiles | dates | dátiles, dates |
| harina de arroz | rice flour | harina de arroz, rice flour |
| sal | salt | sal, salt |
| pulpa de manzana | apple pulp | pulpa de manzana, apple pulp |
| almidón de maíz modificado | modified maize starch | almidón de maíz modificado, modified maize starch, modified corn starch |
| colorante caramelo de sulfito amónico | sulphite ammonia caramel colour | colorante caramelo de sulfito amónico, sulphite ammonia caramel colour, sulphite ammonia caramel color |
| cebolla en polvo | onion powder | cebolla en polvo, onion powder |
| jugo concentrado de limón | concentrated lemon juice | jugo concentrado de limón, concentrated lemon juice |
| especias | spices | especias, spices |
| extracto de malta de cebada tostada | roasted barley malt extract | extracto de malta de cebada tostada, roasted barley malt extract |
| extractos de hierbas y especias | herb and spice extracts | extractos de hierbas y especias, herb and spice extracts |

**Fuente / Source:** [Branston](https://www.bringoutthebranston.co.uk/range/pickle/original-pickle/)  
**Tipo / Type:** `manufacturer_website`  
**Alcance / Supports:** Official Branston UK product page lists the Original Pickle ingredients, vegetable composition and available jar sizes.

### Pocky Almond Crush / Pocky Almond Crush

- **ID:** `pocky-almond-crush-us-41g`
- **Foto real / Real photo:** [Ver envase / View package](https://smoke2snack.com/cdn/shop/files/L9536806.jpg?v=1714817390) · [Fuente / Source](https://smoke2snack.com/products/buy-now-pocky-almond-crush-41g-best-cookies-shop-in-canada)- **Marca / Brand:** Glico
- **País / Country:** United States
- **Mercado / Market:** United States
- **Envase / Package:** 1.45 oz (41 g) box
- **Categoría / Category:** `chocolate_biscuit_sticks`
- **Estado / Status:** `ready` · **Verificación:** `manufacturer_website`
- **Descripción (ES):** Palitos de galleta cubiertos con chocolate con leche y almendras.
- **Description (EN):** Biscuit sticks coated with milk chocolate and roasted almonds.

**Ingredientes declarados / Declared ingredients**

Enriched flour (wheat flour, ferrous fumarate, niacinamide, thiamin mononitrate, riboflavin, folic acid), sugar, almond, whole milk powder, cacao butter equivalent (palm oil, sunflower oil, lecithin, tocopherol concentrate (preservative)), chocolate liquor, cacao butter, whole wheat flour, vegetable shortening (palm oil, fully hydrogenated palm oil), artificial flavor, salt, soy lecithin, PGPR, baker's yeast.

**Respuestas aceptadas / Accepted answers (22)**

| Español | English | Alias / Aliases |
|---|---|---|
| harina de trigo | wheat flour | harina de trigo, wheat flour |
| fumarato ferroso | ferrous fumarate | fumarato ferroso, ferrous fumarate |
| niacinamida | niacinamide | niacinamida, niacinamide |
| mononitrato de tiamina | thiamin mononitrate | mononitrato de tiamina, thiamin mononitrate, vitamina B1, vitamin B1 |
| riboflavina | riboflavin | riboflavina, riboflavin, vitamina B2, vitamin B2 |
| ácido fólico | folic acid | ácido fólico, folic acid |
| azúcar | sugar | azúcar, sugar |
| almendras | almond | almendras, almond, almendra |
| leche entera en polvo | whole milk powder | leche entera en polvo, whole milk powder |
| aceite de palma | palm oil | aceite de palma, palm oil |
| aceite de girasol | sunflower oil | aceite de girasol, sunflower oil |
| lecitina | lecithin | lecitina, lecithin |
| concentrado de tocoferoles | tocopherol concentrate | concentrado de tocoferoles, tocopherol concentrate |
| licor de chocolate | chocolate liquor | licor de chocolate, chocolate liquor |
| manteca de cacao | cacao butter | manteca de cacao, cacao butter, cocoa butter |
| harina integral de trigo | whole wheat flour | harina integral de trigo, whole wheat flour |
| grasa vegetal | vegetable shortening | grasa vegetal, vegetable shortening |
| saborizante artificial | artificial flavor | saborizante artificial, artificial flavor, artificial flavour |
| sal | salt | sal, salt |
| lecitina de soja | soy lecithin | lecitina de soja, soy lecithin |
| PGPR | PGPR | PGPR, PGPR, polirricinoleato de poliglicerol, polyglycerol polyricinoleate |
| levadura de panadería | baker's yeast | levadura de panadería, baker's yeast, baker yeast |

**Fuente / Source:** [Ezaki Glico USA](https://www.glico.com/us/product/pocky/18957/)  
**Tipo / Type:** `manufacturer_website`  
**Alcance / Supports:** Official Glico USA product page gives Pocky Almond Crush 1.45 oz and full US-market ingredients; may-contain statement excluded.

### Nestlé Chocapic / Nestlé Chocapic

- **ID:** `chocapic-cereal-france-1kg`
- **Foto real / Real photo:** [Ver envase / View package](https://media.cdnws.com/_i/311030/5903/450/7/03.jpeg) · [Fuente / Source](https://www.clic-shopping.com/petit-dejeuner/cereales-enfants-ados-adultes/nestle-cereales-petales-au-chocolat-chocapic-430g-750g-ou-1-kg.html)- **Marca / Brand:** Nestlé
- **País / Country:** France
- **Mercado / Market:** France
- **Envase / Package:** 1 kg foodservice pack (French product sheet)
- **Categoría / Category:** `breakfast_cereal`
- **Estado / Status:** `ready` · **Verificación:** `retailer_specification`
- **Descripción (ES):** Cereal de trigo integral con chocolate, según ficha de producto francesa.
- **Description (EN):** Whole-wheat chocolate breakfast cereal, per a French product specification.

**Ingredientes declarados / Declared ingredients**

Whole wheat flour 37.5%, wheat flour 18.5%, chocolate powder 18.1% (sugar, cocoa powder), corn semolina, glucose syrup, barley malt extract (barley, malted barley), sunflower oil, calcium carbonate, sugar, malted barley flour, emulsifier (lecithins), salt, natural flavours, iron, vitamins B3, B5, D, B6, B1, B2 and B9.

**Respuestas aceptadas / Accepted answers (23)**

| Español | English | Alias / Aliases |
|---|---|---|
| harina integral de trigo | whole wheat flour | harina integral de trigo, whole wheat flour |
| harina de trigo | wheat flour | harina de trigo, wheat flour |
| azúcar | sugar | azúcar, sugar |
| cacao en polvo | cocoa powder | cacao en polvo, cocoa powder |
| sémola de maíz | corn semolina | sémola de maíz, corn semolina |
| jarabe de glucosa | glucose syrup | jarabe de glucosa, glucose syrup |
| extracto de malta de cebada | barley malt extract | extracto de malta de cebada, barley malt extract |
| cebada | barley | cebada, barley |
| cebada malteada | malted barley | cebada malteada, malted barley |
| aceite de girasol | sunflower oil | aceite de girasol, sunflower oil |
| carbonato de calcio | calcium carbonate | carbonato de calcio, calcium carbonate, E170 |
| harina de cebada malteada | malted barley flour | harina de cebada malteada, malted barley flour |
| lecitinas | lecithins | lecitinas, lecithins, lecitina, lecithin |
| sal | salt | sal, salt |
| aromas naturales | natural flavours | aromas naturales, natural flavours, natural flavors |
| hierro | iron | hierro, iron |
| niacina | niacin | niacina, niacin, vitamina B3, vitamin B3 |
| ácido pantoténico | pantothenic acid | ácido pantoténico, pantothenic acid, vitamina B5, vitamin B5 |
| vitamina D | vitamin D | vitamina D, vitamin D |
| vitamina B6 | vitamin B6 | vitamina B6, vitamin B6 |
| vitamina B1 | vitamin B1 | vitamina B1, vitamin B1, tiamina, thiamin |
| vitamina B2 | vitamin B2 | vitamina B2, vitamin B2, riboflavina, riboflavin |
| vitamina B9 | vitamin B9 | vitamina B9, vitamin B9, ácido fólico, folic acid |

**Fuente / Source:** [METRO France product specification](https://cdn.metro-group.com/fr/fr_psh_164572001001_02.pdf)  
**Tipo / Type:** `retailer_specification`  
**Alcance / Supports:** French METRO product specification for Chocapic 1 kg, GTIN 7613032779566, states French origin and ingredient list; not manufacturer-hosted.

### Lotus Biscoff Speculoos / Lotus Biscoff Speculoos

- **ID:** `lotus-biscoff-speculoos-belgium-250g`
- **Foto real / Real photo:** [Ver envase / View package](https://www.baktotaal.nl/media/catalog/product/cache/eb002657933dbd4c15eb7abaeee5f499/L/o/Lotus_Biscoff_Speculoos_Koekjes_250g_20d6.jpg) · [Fuente / Source](https://www.baktotaal.nl/lotus-biscoff-speculoos-koekjes-250g)
- **País / Country:** Belgium
- **Mercado / Market:** Belgium
- **Envase / Package:** 250 g pack
- **Categoría / Category:** `plain_cookies`
- **Estado / Status:** `ready` · **Verificación:** `manufacturer_website`
- **Descripción (ES):** Galletitas especiadas belgas tipo speculoos.
- **Description (EN):** Belgian spiced speculoos biscuits.

**Ingredientes declarados / Declared ingredients**

Wheat flour, sugar, vegetable oils (palm oil, rapeseed oil), candy sugar syrup, raising agent (sodium hydrogen carbonate), soya flour, salt, cinnamon.

**Respuestas aceptadas / Accepted answers (9)**

| Español | English | Alias / Aliases |
|---|---|---|
| harina de trigo | wheat flour | harina de trigo, wheat flour |
| azúcar | sugar | azúcar, sugar |
| aceite de palma | palm oil | aceite de palma, palm oil |
| aceite de colza | rapeseed oil | aceite de colza, rapeseed oil, canola oil |
| jarabe de azúcar candi | candy sugar syrup | jarabe de azúcar candi, candy sugar syrup, candi syrup |
| gasificante bicarbonato de sodio | sodium hydrogen carbonate | gasificante bicarbonato de sodio, sodium hydrogen carbonate, baking soda, bicarbonato de sodio |
| harina de soja | soya flour | harina de soja, soya flour, soy flour |
| sal | salt | sal, salt |
| canela | cinnamon | canela, cinnamon |

**Fuente / Source:** [Lotus Bakeries Belgium](https://www.lotusbakeries.be/nl/producten/speculoos)  
**Tipo / Type:** `manufacturer_website`  
**Alcance / Supports:** Official Lotus Bakeries Belgium product page lists Speculoos 250 g and its ingredient declaration in Dutch.

### Kraft Dinner Original Macaroni & Cheese / Kraft Dinner Original Macaroni & Cheese

- **ID:** `kraft-dinner-original-canada-200g`
- **Foto real / Real photo:** [Ver envase / View package](https://i.ebayimg.com/images/g/QO0AAOSwMONlxhfH/s-l1200.jpg) · [Fuente / Source](https://www.ebay.com/itm/404789694750)
- **País / Country:** Canada
- **Mercado / Market:** Canada
- **Envase / Package:** 200 g box
- **Categoría / Category:** `boxed_macaroni`
- **Estado / Status:** `ready` · **Verificación:** `manufacturer_website`
- **Descripción (ES):** Macarrones con salsa de queso en polvo, versión canadiense.
- **Description (EN):** Macaroni with powdered cheese sauce, Canadian-market formula.

**Ingredientes declarados / Declared ingredients**

Pasta (wheat), cheese sauce (whey powder, cheddar cheese, salt, butter, paprika, turmeric, annatto, natural flavours, citric acid (acidulant), sodium phosphate).

**Respuestas aceptadas / Accepted answers (12)**

| Español | English | Alias / Aliases |
|---|---|---|
| trigo | wheat | trigo, wheat |
| pasta | pasta | pasta, pasta, macarrones, macaroni |
| suero en polvo | whey powder | suero en polvo, whey powder |
| queso cheddar | cheddar cheese | queso cheddar, cheddar cheese |
| sal | salt | sal, salt |
| manteca | butter | manteca, butter |
| pimentón | paprika | pimentón, paprika |
| cúrcuma | turmeric | cúrcuma, turmeric |
| achiote | annatto | achiote, annatto, roucou |
| aromas naturales | natural flavours | aromas naturales, natural flavours, natural flavors |
| ácido cítrico | citric acid | ácido cítrico, citric acid, E330 |
| fosfato de sodio | sodium phosphate | fosfato de sodio, sodium phosphate |

**Fuente / Source:** [Kraft Heinz Canada](https://www.kraftheinz.com/en-CA/kraft-dinner/products/00068100904826-original-macaroni-and-cheese-dinner)  
**Tipo / Type:** `manufacturer_website`  
**Alcance / Supports:** Official Kraft Heinz Canada page lists Original Macaroni and Cheese Dinner, 200 g size, and Canadian ingredient declaration.

### Barilla Pesto alla Genovese / Barilla Pesto alla Genovese

- **ID:** `barilla-pesto-alla-genovese-italy-190g`
- **Foto real / Real photo:** [Ver envase / View package](https://www.londonfoodhall.co.uk/cdn/shop/files/71klFCMgGwL.jpg?v=1771342205&width=1946) · [Fuente / Source](https://www.londonfoodhall.co.uk/products/barilla-pesto-genovese-sauce-190g)
- **País / Country:** Italy
- **Mercado / Market:** Latin America product page; made in Italy
- **Envase / Package:** 190 g jar
- **Categoría / Category:** `pesto`
- **Estado / Status:** `ready` · **Verificación:** `manufacturer_website`
- **Descripción (ES):** Pesto con albahaca, anacardos y quesos italianos; fórmula de la ficha regional.
- **Description (EN):** Basil pesto with cashews and Italian cheeses, per the regional product page.

**Ingredientes declarados / Declared ingredients**

Sunflower oil, basil 30%, cashew nuts, Parmigiano Reggiano DOP cheese 5% (milk), corn fibre, whey powder, salt, milk proteins, natural flavours (milk), extra virgin olive oil, sugar, acidity regulator (lactic acid), garlic.

**Respuestas aceptadas / Accepted answers (14)**

| Español | English | Alias / Aliases |
|---|---|---|
| aceite de girasol | sunflower oil | aceite de girasol, sunflower oil |
| albahaca | basil | albahaca, basil |
| anacardos | cashew nuts | anacardos, cashew nuts, cashews, castañas de cajú |
| queso Parmigiano Reggiano | Parmigiano Reggiano cheese | queso Parmigiano Reggiano, Parmigiano Reggiano cheese |
| leche | milk | leche, milk |
| fibra de maíz | corn fibre | fibra de maíz, corn fibre, corn fiber |
| suero en polvo | whey powder | suero en polvo, whey powder |
| sal | salt | sal, salt |
| proteínas de leche | milk proteins | proteínas de leche, milk proteins |
| aromas naturales | natural flavours | aromas naturales, natural flavours, natural flavors |
| aceite de oliva virgen extra | extra virgin olive oil | aceite de oliva virgen extra, extra virgin olive oil |
| azúcar | sugar | azúcar, sugar |
| ácido láctico | lactic acid | ácido láctico, lactic acid, E270 |
| ajo | garlic | ajo, garlic |

**Fuente / Source:** [Barilla](https://www.barilla.com/es-la/productos/pestos/pesto/pesto-alla-genovese)  
**Tipo / Type:** `manufacturer_website`  
**Alcance / Supports:** Official Barilla Spanish-language regional page lists 190 g, ingredient details and says produced in Italy; this is the specific regional recipe.

### Monster Munch Pickled Onion / Monster Munch Pickled Onion

- **ID:** `monster-munch-pickled-onion-uk`
- **Foto real / Real photo:** [Ver envase / View package](https://www.walkers.co.uk/prod/s3fs-public/2026-04/2515_Walkers%20Monster%20Munch%20Pickled%20Onion%2040g_Beauty.png) · [Fuente / Source](https://www.walkers.co.uk/products)
- **País / Country:** United Kingdom
- **Mercado / Market:** United Kingdom
- **Envase / Package:** Pack size varies; individual snack bag
- **Categoría / Category:** `corn_snack`
- **Estado / Status:** `ready` · **Verificación:** `manufacturer_website`
- **Descripción (ES):** Snack inflado de maíz con sabor a cebolla encurtida.
- **Description (EN):** Puffed maize snack with pickled onion flavour.

**Ingredientes declarados / Declared ingredients**

Maize, rapeseed oil, pickled onion seasoning (flavourings, whey permeate (from milk), onion powder, sugar, flavour enhancers (monosodium glutamate, disodium 5'-ribonucleotide), salt, potassium chloride, garlic powder, hydrolysed soya protein, citric acid, spices).

**Respuestas aceptadas / Accepted answers (15)**

| Español | English | Alias / Aliases |
|---|---|---|
| maíz | maize | maíz, maize, corn |
| aceite de colza | rapeseed oil | aceite de colza, rapeseed oil, canola oil |
| aromatizantes | flavourings | aromatizantes, flavourings, flavorings |
| permeado de suero | whey permeate | permeado de suero, whey permeate |
| leche | milk | leche, milk |
| cebolla en polvo | onion powder | cebolla en polvo, onion powder |
| azúcar | sugar | azúcar, sugar |
| glutamato monosódico | monosodium glutamate | glutamato monosódico, monosodium glutamate, MSG, E621 |
| 5'-ribonucleótido disódico | disodium 5'-ribonucleotide | 5'-ribonucleótido disódico, disodium 5'-ribonucleotide, E635 |
| sal | salt | sal, salt |
| cloruro de potasio | potassium chloride | cloruro de potasio, potassium chloride, E508 |
| ajo en polvo | garlic powder | ajo en polvo, garlic powder |
| proteína de soja hidrolizada | hydrolysed soya protein | proteína de soja hidrolizada, hydrolysed soya protein, hydrolyzed soy protein |
| ácido cítrico | citric acid | ácido cítrico, citric acid, E330 |
| especias | spices | especias, spices |

**Fuente / Source:** [Walkers UK](https://www.walkers.co.uk/our-range/family-snacks/monster-munch-pickled-onion)  
**Tipo / Type:** `manufacturer_website`  
**Alcance / Supports:** Official Walkers UK product page gives Pickled Onion Monster Munch ingredients; exact retail pack size varies.

### Cadbury Wispa Gold / Cadbury Wispa Gold

- **ID:** `cadbury-wispa-gold-uk-48g`
- **Foto real / Real photo:** [Ver envase / View package](https://assets.iceland.co.uk/i/iceland/cadbury_wispa_gold_chocolate_bar_48g_86639_T596.jpg) · [Fuente / Source](https://www.iceland.co.uk/p/cadbury-wispa-gold-chocolate-bar-48g/86639.html)
- **País / Country:** United Kingdom
- **Mercado / Market:** United Kingdom
- **Envase / Package:** 48 g bar
- **Categoría / Category:** `chocolate_bar`
- **Estado / Status:** `ready` · **Verificación:** `manufacturer_website`
- **Descripción (ES):** Barra de chocolate con leche aireado y caramelo.
- **Description (EN):** Aerated milk chocolate bar with caramel.

**Ingredientes declarados / Declared ingredients**

Milk, sugar, glucose syrup, cocoa butter, vegetable fats (palm, shea), glucose-fructose syrup, cocoa mass, whey powder (from milk), emulsifiers (E442, E471), salt, sodium carbonate, flavourings.

**Respuestas aceptadas / Accepted answers (14)**

| Español | English | Alias / Aliases |
|---|---|---|
| leche | milk | leche, milk |
| azúcar | sugar | azúcar, sugar |
| jarabe de glucosa | glucose syrup | jarabe de glucosa, glucose syrup |
| manteca de cacao | cocoa butter | manteca de cacao, cocoa butter |
| aceite de palma | palm oil | aceite de palma, palm oil |
| grasa de karité | shea fat | grasa de karité, shea fat |
| jarabe de glucosa y fructosa | glucose-fructose syrup | jarabe de glucosa y fructosa, glucose-fructose syrup |
| masa de cacao | cocoa mass | masa de cacao, cocoa mass |
| suero en polvo | whey powder | suero en polvo, whey powder |
| emulsionante E442 | E442 emulsifier | emulsionante E442, E442 emulsifier, amonio fosfátidos, ammonium phosphatides |
| emulsionante E471 | E471 emulsifier | emulsionante E471, E471 emulsifier, mono y diglicéridos de ácidos grasos |
| sal | salt | sal, salt |
| carbonato de sodio | sodium carbonate | carbonato de sodio, sodium carbonate |
| aromatizantes | flavourings | aromatizantes, flavourings, flavorings |

**Fuente / Source:** [Cadbury UK](https://www.cadbury.co.uk/products/cadbury-wispa-gold-chocolate-bar-48g/)  
**Tipo / Type:** `manufacturer_website`  
**Alcance / Supports:** Official Cadbury UK page identifies Wispa Gold 48 g and its UK ingredients; may-contain nuts is precautionary and excluded.

### HP Brown Sauce / HP Brown Sauce

- **ID:** `hp-brown-sauce-uk-255g`
- **Foto real / Real photo:** [Ver envase / View package](https://boropantry.co.uk/cdn/shop/files/hp-sauce-original-255g-bottle.jpg?v=1772915542) · [Fuente / Source](https://boropantry.co.uk/products/hp-sauce-original-255g-classic-brown-sauce-for-meats-sausages)- **Marca / Brand:** HP
- **País / Country:** United Kingdom
- **Mercado / Market:** United Kingdom
- **Envase / Package:** 255 g glass bottle
- **Categoría / Category:** `brown_sauce`
- **Estado / Status:** `ready` · **Verificación:** `manufacturer_website`
- **Descripción (ES):** Salsa marrón británica con tomate, dátiles y tamarindo.
- **Description (EN):** British brown sauce with tomatoes, dates and tamarind.

**Ingredientes declarados / Declared ingredients**

Tomatoes, malt vinegar (with barley), molasses, glucose-fructose syrup, spirit vinegar, sugar, dates, modified corn starch, rye flour, salt, spices, flavourings, tamarind.

**Respuestas aceptadas / Accepted answers (14)**

| Español | English | Alias / Aliases |
|---|---|---|
| tomates | tomatoes | tomates, tomatoes, tomate |
| vinagre de malta | malt vinegar | vinagre de malta, malt vinegar |
| cebada | barley | cebada, barley |
| melaza | molasses | melaza, molasses |
| jarabe de glucosa y fructosa | glucose-fructose syrup | jarabe de glucosa y fructosa, glucose-fructose syrup |
| vinagre de alcohol | spirit vinegar | vinagre de alcohol, spirit vinegar |
| azúcar | sugar | azúcar, sugar |
| dátiles | dates | dátiles, dates |
| almidón de maíz modificado | modified corn starch | almidón de maíz modificado, modified corn starch, modified maize starch |
| harina de centeno | rye flour | harina de centeno, rye flour |
| sal | salt | sal, salt |
| especias | spices | especias, spices |
| aromatizantes | flavourings | aromatizantes, flavourings, flavorings |
| tamarindo | tamarind | tamarindo, tamarind |

**Fuente / Source:** [Heinz / HP](https://www.heinz.com/fr-FR/produits/05000111001007-hp-brown-flacon-verre-255-g-x-12)  
**Tipo / Type:** `manufacturer_website`  
**Alcance / Supports:** Official Heinz France listing for HP Brown 255 g glass bottle gives ingredients in French; product is the UK-style HP Brown Sauce.

### Heinz Saucy Sauce / Heinz Saucy Sauce

- **ID:** `heinz-saucy-sauce-uk-415ml`
- **Foto real / Real photo:** [Ver envase / View package](https://cdn.grocefully.com/storage/v1/object/public/images/tesco/304408612/1.jpeg) · [Fuente / Source](https://www.grocefully.com/uk/product/heinz-saucy-sauce-mayonnaise-ketchup-sauce-5000157143365)- **Marca / Brand:** Heinz
- **País / Country:** United Kingdom
- **Mercado / Market:** United Kingdom
- **Envase / Package:** 415 ml bottle
- **Categoría / Category:** `condiment_sauce`
- **Estado / Status:** `ready` · **Verificación:** `manufacturer_website`
- **Descripción (ES):** Salsa que combina mayonesa Heinz y ketchup de tomate.
- **Description (EN):** Sauce combining Heinz mayonnaise and tomato ketchup.

**Ingredientes declarados / Declared ingredients**

Rapeseed oil (40%), tomato purée (22%), spirit vinegar, sugar, egg yolk (3%), starch, salt, mustard seeds, spice and herb extract (contains celery), antioxidant (calcium disodium EDTA).

**Respuestas aceptadas / Accepted answers (11)**

| Español | English | Alias / Aliases |
|---|---|---|
| aceite de colza | rapeseed oil | aceite de colza, rapeseed oil, canola oil |
| puré de tomate | tomato purée | puré de tomate, tomato purée, tomato puree |
| vinagre de alcohol | spirit vinegar | vinagre de alcohol, spirit vinegar |
| azúcar | sugar | azúcar, sugar |
| yema de huevo | egg yolk | yema de huevo, egg yolk |
| almidón | starch | almidón, starch |
| sal | salt | sal, salt |
| semillas de mostaza | mustard seeds | semillas de mostaza, mustard seeds |
| extracto de especias y hierbas | spice and herb extract | extracto de especias y hierbas, spice and herb extract |
| apio | celery | apio, celery |
| EDTA cálcico disódico | calcium disodium EDTA | EDTA cálcico disódico, calcium disodium EDTA, E385 |

**Fuente / Source:** [Heinz UK](https://www.heinz.com/en-GB/products/05000157143365-saucy-sauce)  
**Tipo / Type:** `manufacturer_website`  
**Alcance / Supports:** Official Heinz UK page lists Saucy Sauce 415 ml and ingredients, including celery in spice and herb extract.

### Haldiram's Aloo Bhujia

- **ID:** `haldiram-aloo-bhujia-india-400g`
- **Foto real / Real photo:** [Ver envase / View package](https://shubhamfoods.co.uk/cdn/shop/files/Buy_haldiram_aloo_bhujia_online_UK.jpg?v=1748007853) · [Fuente / Source](https://shubhamfoods.co.uk/products/buy-haldiram-aloo-bhujia-400g-online-uk)
- **País / Country:** India
- **Mercado / Market:** India
- **Envase / Package:** 400 g pack
- **Categoría / Category:** `namkeen_snack`
- **Estado / Status:** `ready` · **Verificación:** `manufacturer_website`
- **Descripción (ES):** Snack indio crujiente de papa y harina de garbanzo, sazonado con especias.
- **Description (EN):** Indian crispy potato and gram-flour snack seasoned with spices.

**Ingredientes declarados / Declared ingredients**

Potatoes (44%), vegetable oil (peanut and corn), gram pulse flour (4%), tepary beans flour (2%), starch (sago), salt, coriander powder, cumin powder, mango powder, ginger powder, red chilli powder, mace powder, nutmeg powder, mint leaves powder, citric acid powder; natural, nature-identical and artificial flavouring substances.

**Respuestas aceptadas / Accepted answers (17)**

| Español | English | Alias / Aliases |
|---|---|---|
| papa | potatoes | papa, potatoes |
| aceite de maní | peanut oil | aceite de maní, peanut oil, groundnut oil |
| aceite de maíz | corn oil | aceite de maíz, corn oil, maize oil |
| harina de garbanzo | gram pulse flour | harina de garbanzo, gram pulse flour, besan, chickpea flour |
| harina de frijol tepary | tepary beans flour | harina de frijol tepary, tepary beans flour |
| almidón de sagú | sago starch | almidón de sagú, sago starch, sago |
| sal | salt | sal, salt |
| cilantro en polvo | coriander powder | cilantro en polvo, coriander powder, ground coriander |
| comino en polvo | cumin powder | comino en polvo, cumin powder, ground cumin |
| mango en polvo | mango powder | mango en polvo, mango powder, amchur, dried mango powder |
| jengibre en polvo | ginger powder | jengibre en polvo, ginger powder |
| chile rojo en polvo | red chilli powder | chile rojo en polvo, red chilli powder, red chili powder |
| macis | mace | macis, mace |
| nuez moscada en polvo | nutmeg powder | nuez moscada en polvo, nutmeg powder |
| hojas de menta en polvo | mint leaves powder | hojas de menta en polvo, mint leaves powder, mint powder |
| ácido cítrico | citric acid | ácido cítrico, citric acid, E330 |
| saborizantes | flavouring substances | saborizantes, flavouring substances, flavoring substances |

**Fuente / Source:** [Haldiram Foods](https://haldiramfoods.com/product/aloo-bhujia-400-gms/)  
**Tipo / Type:** `manufacturer_website`  
**Alcance / Supports:** Official Haldiram Foods India product page lists Aloo Bhujia 400 g, full ingredients, peanut allergen and Product of India statement.

### McVitie's Jaffa Cakes

- **ID:** `mcvities-jaffa-cakes-uk-110g`
- **Foto real / Real photo:** [Ver envase / View package](https://www.britsuperstore.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/m/c/mcvities_jaffa_cakes_10_pack_-1749470185.jpg) · [Fuente / Source](https://www.britsuperstore.com/uk/mcvities-jaffa-cakes-10-pack.html)
- **País / Country:** United Kingdom
- **Mercado / Market:** United Kingdom
- **Envase / Package:** 110 g pack
- **Categoría / Category:** `snack_cake`
- **Estado / Status:** `ready` · **Verificación:** `manufacturer_website`
- **Descripción (ES):** Bizcochitos británicos con centro de naranja y cobertura de chocolate negro.
- **Description (EN):** British sponge cakes with an orange centre and dark chocolate topping.

**Ingredientes declarados / Declared ingredients**

Glucose-fructose syrup, dark chocolate (19%) [sugar, cocoa mass, vegetable fats (palm, shea), butter oil (milk), cocoa butter, emulsifiers (soya lecithin, E476), natural flavouring], sugar, flour (wheat flour, calcium, iron, niacin, thiamin), whole egg, water, dextrose, concentrated orange juice, glucose syrup, vegetable oils (sunflower, palm), humectant (glycerine), citric acid, pectin, raising agents (disodium diphosphate, ammonium bicarbonate, sodium bicarbonate), dried whole egg, sodium citrates, natural orange flavouring, curcumin, soya lecithin.

**Respuestas aceptadas / Accepted answers (32)**

| Español | English | Alias / Aliases |
|---|---|---|
| jarabe de glucosa y fructosa | glucose-fructose syrup | jarabe de glucosa y fructosa, glucose-fructose syrup |
| azúcar | sugar | azúcar, sugar |
| masa de cacao | cocoa mass | masa de cacao, cocoa mass |
| grasa de palma | palm fat | grasa de palma, palm fat, palm oil |
| grasa de karité | shea fat | grasa de karité, shea fat |
| aceite de manteca de leche | butter oil | aceite de manteca de leche, butter oil |
| leche | milk | leche, milk |
| manteca de cacao | cocoa butter | manteca de cacao, cocoa butter |
| lecitina de soja | soya lecithin | lecitina de soja, soya lecithin, soy lecithin |
| polirricinoleato de poliglicerol | polyglycerol polyricinoleate | polirricinoleato de poliglicerol, polyglycerol polyricinoleate, E476, PGPR |
| aroma natural | natural flavouring | aroma natural, natural flavouring, natural flavoring |
| harina de trigo | wheat flour | harina de trigo, wheat flour |
| calcio | calcium | calcio, calcium |
| hierro | iron | hierro, iron |
| niacina | niacin | niacina, niacin |
| tiamina | thiamin | tiamina, thiamin |
| huevo entero | whole egg | huevo entero, whole egg |
| agua | water | agua, water |
| dextrosa | dextrose | dextrosa, dextrose |
| jugo concentrado de naranja | concentrated orange juice | jugo concentrado de naranja, concentrated orange juice |
| jarabe de glucosa | glucose syrup | jarabe de glucosa, glucose syrup |
| aceite de girasol | sunflower oil | aceite de girasol, sunflower oil |
| glicerina | glycerine | glicerina, glycerine, glycerin, E422 |
| ácido cítrico | citric acid | ácido cítrico, citric acid, E330 |
| pectina | pectin | pectina, pectin, E440 |
| difosfato disódico | disodium diphosphate | difosfato disódico, disodium diphosphate, E450 |
| bicarbonato de amonio | ammonium bicarbonate | bicarbonato de amonio, ammonium bicarbonate, E503 |
| bicarbonato de sodio | sodium bicarbonate | bicarbonato de sodio, sodium bicarbonate, baking soda, E500 |
| huevo entero deshidratado | dried whole egg | huevo entero deshidratado, dried whole egg |
| citratos de sodio | sodium citrates | citratos de sodio, sodium citrates |
| aroma natural de naranja | natural orange flavouring | aroma natural de naranja, natural orange flavouring, natural orange flavoring |
| curcumina | curcumin | curcumina, curcumin, E100 |

**Fuente / Source:** [McVitie's](https://mcvities.com/en-gb/jaffa-cakes)  
**Tipo / Type:** `manufacturer_website`  
**Alcance / Supports:** Official McVitie's UK page lists the Jaffa Cakes ingredient declaration and selectable pack sizes including 110 g.

### Jell-O Strawberry Gelatin Dessert Mix

- **ID:** `jello-strawberry-gelatin-us-6oz`
- **Foto real / Real photo:** [Ver envase / View package](https://drryor7280ntb.cloudfront.net/media/catalog/product/1/0/10043000200510.jpg) · [Fuente / Source](https://www.foodservicedirect.com/jello-strawberry-gelatin-6-ounce-24-case-40430.html)- **Marca / Brand:** Jell-O
- **País / Country:** United States
- **Mercado / Market:** United States
- **Envase / Package:** 6 oz (170 g) pouch
- **Categoría / Category:** `gelatin_dessert`
- **Estado / Status:** `ready` · **Verificación:** `manufacturer_website`
- **Descripción (ES):** Postre de gelatina sabor frutilla artificial, mezcla en polvo.
- **Description (EN):** Artificially strawberry-flavoured powdered gelatin dessert mix.

**Ingredientes declarados / Declared ingredients**

Sugar, gelatin, adipic acid, contains less than 2% of artificial flavor, disodium phosphate, sodium citrate, fumaric acid, Red 40.

**Respuestas aceptadas / Accepted answers (8)**

| Español | English | Alias / Aliases |
|---|---|---|
| azúcar | sugar | azúcar, sugar |
| gelatina | gelatin | gelatina, gelatin |
| ácido adípico | adipic acid | ácido adípico, adipic acid, E355 |
| sabor artificial | artificial flavor | sabor artificial, artificial flavor, artificial flavour |
| fosfato disódico | disodium phosphate | fosfato disódico, disodium phosphate, E339 |
| citrato de sodio | sodium citrate | citrato de sodio, sodium citrate, E331 |
| ácido fumárico | fumaric acid | ácido fumárico, fumaric acid, E297 |
| rojo 40 | Red 40 | rojo 40, Red 40, Allura Red AC, E129 |

**Fuente / Source:** [Kraft Heinz / Jell-O](https://www.kraftheinz.com/jell-o/products/00043000200513-strawberry-gelatin-dessert-mix)  
**Tipo / Type:** `manufacturer_website`  
**Alcance / Supports:** Official Kraft Heinz Jell-O US page identifies the Strawberry Gelatin Dessert Mix 6 oz pouch and its ingredient list.

### Kikkoman Teriyaki Marinade & Sauce

- **ID:** `kikkoman-teriyaki-marinade-us-296ml`
- **Foto real / Real photo:** [Ver envase / View package](https://media.sobeys.com/original/754000000025700000000001396445_VOILA_dcf46b082fc1fdf7dfb132ab43b7ae4ad2bf5bbc.JPG) · [Fuente / Source](https://www.sobeys.com/products/kikkoman-teriyaki-marinade---sauce-296-ml)- **Marca / Brand:** Kikkoman
- **País / Country:** United States
- **Mercado / Market:** United States
- **Envase / Package:** 10 fl oz (296 ml) bottle
- **Categoría / Category:** `teriyaki_sauce`
- **Estado / Status:** `ready` · **Verificación:** `manufacturer_website`
- **Descripción (ES):** Salsa y marinada teriyaki estadounidense a base de salsa de soja, azúcar y vino.
- **Description (EN):** US teriyaki marinade and sauce made with soy sauce, sugar and wine.

**Ingredientes declarados / Declared ingredients**

Soy sauce (water, soybeans, wheat, salt), sugar, wine, water, vinegar, salt, sodium benzoate (preservative), onion powder, natural flavours, succinic acid, garlic powder.

**Respuestas aceptadas / Accepted answers (12)**

| Español | English | Alias / Aliases |
|---|---|---|
| agua | water | agua, water |
| soja | soybeans | soja, soybeans, soy, soya |
| trigo | wheat | trigo, wheat |
| sal | salt | sal, salt |
| azúcar | sugar | azúcar, sugar |
| vino | wine | vino, wine |
| vinagre | vinegar | vinagre, vinegar |
| benzoato de sodio | sodium benzoate | benzoato de sodio, sodium benzoate, E211 |
| cebolla en polvo | onion powder | cebolla en polvo, onion powder |
| aromas naturales | natural flavours | aromas naturales, natural flavours, natural flavors |
| ácido succínico | succinic acid | ácido succínico, succinic acid, E363 |
| ajo en polvo | garlic powder | ajo en polvo, garlic powder |

**Fuente / Source:** [Kikkoman USA](https://kikkomanusa.com/products/teriyaki-marinade-sauce/)  
**Tipo / Type:** `manufacturer_website`  
**Alcance / Supports:** Official Kikkoman USA product page identifies the 10 fl oz (296 ml) Teriyaki Marinade & Sauce and provides the ingredient list.

### Pringles Crema Agria y Cebolla / Pringles Sour Cream & Onion

- **ID:** `pringles-sour-cream-onion-spain-40g`
- **Foto real / Real photo:** [Ver envase / View package](https://www.supermercadosruizgalan.es/documents/10180/204342/224128_G.jpg) · [Fuente / Source](https://www.supermercadosruizgalan.es/detalle/-/Producto/pringles-sour-cream-onion-40g/224128)- **Marca / Brand:** Pringles
- **País / Country:** Spain
- **Mercado / Market:** Spain
- **Envase / Package:** 40 g pack
- **Categoría / Category:** `potato_chips`
- **Estado / Status:** `ready` · **Verificación:** `manufacturer_website`
- **Descripción (ES):** Papas apilables sabor crema agria y cebolla, fórmula comercializada en España.
- **Description (EN):** Stackable sour cream and onion potato crisps, Spanish-market formulation.

**Ingredientes declarados / Declared ingredients**

Dried potatoes, sunflower oil, corn flour, wheat flour, rice flour, sour cream and onion seasoning (wheat starch, flavour enhancers {monosodium glutamate, disodium guanylate, disodium inosinate}, onion powder, dextrose, sunflower oil, salt, modified corn starch, milk flavourings, maltodextrin, sugar, sweet whey powder (milk), sour cream powder (milk), glucose syrup powder, acids (citric acid, malic acid), milk proteins), maltodextrin, emulsifier (E471), rapeseed oil, salt, colour (annatto norbixin).

**Respuestas aceptadas / Accepted answers (26)**

| Español | English | Alias / Aliases |
|---|---|---|
| papas deshidratadas | dried potatoes | papas deshidratadas, dried potatoes |
| aceite de girasol | sunflower oil | aceite de girasol, sunflower oil |
| harina de maíz | corn flour | harina de maíz, corn flour, maize flour |
| harina de trigo | wheat flour | harina de trigo, wheat flour |
| harina de arroz | rice flour | harina de arroz, rice flour |
| almidón de trigo | wheat starch | almidón de trigo, wheat starch |
| glutamato monosódico | monosodium glutamate | glutamato monosódico, monosodium glutamate, MSG, E621 |
| guanilato disódico | disodium guanylate | guanilato disódico, disodium guanylate, E627 |
| inosinato disódico | disodium inosinate | inosinato disódico, disodium inosinate, E631 |
| cebolla en polvo | onion powder | cebolla en polvo, onion powder |
| dextrosa | dextrose | dextrosa, dextrose |
| sal | salt | sal, salt |
| almidón de maíz modificado | modified corn starch | almidón de maíz modificado, modified corn starch, modified maize starch |
| aromas de leche | milk flavourings | aromas de leche, milk flavourings, milk flavorings |
| leche | milk | leche, milk |
| maltodextrina | maltodextrin | maltodextrina, maltodextrin |
| azúcar | sugar | azúcar, sugar |
| suero de leche dulce en polvo | sweet whey powder | suero de leche dulce en polvo, sweet whey powder |
| nata acidificada en polvo | sour cream powder | nata acidificada en polvo, sour cream powder |
| jarabe de glucosa en polvo | glucose syrup powder | jarabe de glucosa en polvo, glucose syrup powder |
| ácido cítrico | citric acid | ácido cítrico, citric acid, E330 |
| ácido málico | malic acid | ácido málico, malic acid, E296 |
| proteínas de leche | milk proteins | proteínas de leche, milk proteins |
| emulsionante E471 | E471 emulsifier | emulsionante E471, E471 emulsifier, mono y diglicéridos |
| aceite de colza | rapeseed oil | aceite de colza, rapeseed oil, canola oil |
| norbixina de achiote | annatto norbixin | norbixina de achiote, annatto norbixin, E160b |

**Fuente / Source:** [Pringles España](https://www.pringles.com/es/products/40g/pringles-sour-cream-and-onion-40g.html)  
**Tipo / Type:** `manufacturer_website`  
**Alcance / Supports:** Official Pringles Spain product page lists the 40 g Sour Cream and Onion product, its Spanish ingredient declaration and 40 g nutrition panel; precautionary may-contain soy excluded.

### Calbee Kappa Ebisen

- **ID:** `calbee-kappa-ebisen-japan-130g`
- **Foto real / Real photo:** [Ver envase / View package](https://cookingsan.com/9149-product_hd/calbee-kappa-ebisen-shrimp-snack.jpg) · [Fuente / Source](https://cookingsan.com/en/snacks/1257-calbee-kappa-ebisen-shrimp-snack-4901330106720.html)- **Marca / Brand:** Calbee
- **País / Country:** Japan
- **Mercado / Market:** Japan
- **Envase / Package:** 130 g bag (regional availability varies)
- **Categoría / Category:** `shrimp_snack`
- **Estado / Status:** `ready` · **Verificación:** `manufacturer_website`
- **Descripción (ES):** Snack japonés crocante de camarón elaborado con harina de trigo.
- **Description (EN):** Japanese crunchy shrimp snack made with wheat flour and shrimp.

**Ingredientes declarados / Declared ingredients**

Wheat flour (made in Japan), vegetable oil, starch, shrimp, sugar, salt; leavening agent, seasoning (amino acids, etc.), sweetener (licorice).

**Respuestas aceptadas / Accepted answers (10)**

| Español | English | Alias / Aliases |
|---|---|---|
| harina de trigo | wheat flour | harina de trigo, wheat flour |
| aceite vegetal | vegetable oil | aceite vegetal, vegetable oil |
| almidón | starch | almidón, starch |
| camarón | shrimp | camarón, shrimp, prawn |
| azúcar | sugar | azúcar, sugar |
| sal | salt | sal, salt |
| gasificante | leavening agent | gasificante, leavening agent, raising agent |
| potenciadores del sabor | flavour enhancers | potenciadores del sabor, flavour enhancers, flavor enhancers |
| aminoácidos | amino acids | aminoácidos, amino acids |
| regaliz | licorice | regaliz, licorice, liquorice |

**Fuente / Source:** [Calbee Japan](https://www.calbee.co.jp/products/detail/?p=20230410102049)  
**Tipo / Type:** `manufacturer_website`  
**Alcance / Supports:** Official Calbee Japan page lists Kappa Ebisen ingredients in Japanese, including wheat, vegetable oil, starch, shrimp, sugar and salt; 130 g pack listed for selected regions.

### Walkers Wotsits Really Cheesy

- **ID:** `walkers-wotsits-really-cheesy-uk-22g`
- **Foto real / Real photo:** [Ver envase / View package](https://www.vendingwarehouse.co.uk/user/products/large/9fbce4af4eb775bd2196e47ac1fdfac8.jpg) · [Fuente / Source](https://www.vendingwarehouse.co.uk/walkers-wotsits-really-cheesy-crisps-225g-32-pack)- **Marca / Brand:** Walkers
- **País / Country:** United Kingdom
- **Mercado / Market:** United Kingdom
- **Envase / Package:** 22.5 g individual pack (99 Calorie range)
- **Categoría / Category:** `cheese_puffs`
- **Estado / Status:** `ready` · **Verificación:** `manufacturer_website`
- **Descripción (ES):** Snack inflado de maíz con sabor a queso, horneado y vegetariano.
- **Description (EN):** Baked vegetarian maize snack with a cheesy flavour.

**Ingredientes declarados / Declared ingredients**

Maize, rapeseed oil, cheese flavour [dried cheese (from milk) (7%), milk lactose, flavour enhancer (disodium 5'-ribonucleotide), acid (lactic acid), colours (paprika extract, annatto), natural flavourings, salt, potassium chloride].

**Respuestas aceptadas / Accepted answers (12)**

| Español | English | Alias / Aliases |
|---|---|---|
| maíz | maize | maíz, maize, corn |
| aceite de colza | rapeseed oil | aceite de colza, rapeseed oil, canola oil |
| queso deshidratado | dried cheese | queso deshidratado, dried cheese |
| leche | milk | leche, milk |
| lactosa | lactose | lactosa, lactose |
| 5'-ribonucleótido disódico | disodium 5'-ribonucleotide | 5'-ribonucleótido disódico, disodium 5'-ribonucleotide, E635 |
| ácido láctico | lactic acid | ácido láctico, lactic acid, E270 |
| extracto de pimentón | paprika extract | extracto de pimentón, paprika extract |
| achiote | annatto | achiote, annatto, E160b |
| aromatizantes naturales | natural flavourings | aromatizantes naturales, natural flavourings, natural flavorings |
| sal | salt | sal, salt |
| cloruro de potasio | potassium chloride | cloruro de potasio, potassium chloride, E508 |

**Fuente / Source:** [Walkers UK](https://www.walkers.co.uk/our-range/family-snacks/99-calorie/wotsits-really-cheesy-pkg)  
**Tipo / Type:** `manufacturer_website`  
**Alcance / Supports:** Official Walkers UK page gives Wotsits Really Cheesy ingredient declaration and 22.5 g serving details.

### Campbell's Chicken Broth

- **ID:** `campbells-chicken-broth-latam-298ml`
- **Foto real / Real photo:** [Ver envase / View package](https://latorremx.vtexassets.com/arquivos/ids/175721/68661-frontal.jpg?v=637793363311170000) · [Fuente / Source](https://www.latorre.com.gt/caldo-pollo-campbells-lata-68661/p)- **Marca / Brand:** Campbell's
- **País / Country:** United States
- **Mercado / Market:** Latin America regional product page
- **Envase / Package:** Can; page does not specify net weight
- **Categoría / Category:** `chicken_broth`
- **Estado / Status:** `ready` · **Verificación:** `manufacturer_website`
- **Descripción (ES):** Caldo de pollo Campbell's con extracto de apio y proteína de soja.
- **Description (EN):** Campbell's chicken broth with celery extract and soy protein.

**Ingredientes declarados / Declared ingredients**

Chicken broth, contains less than 2% of chicken fat, salt, yeast extract, monosodium glutamate, corn oil, natural flavour, soy protein concentrate, dehydrated chicken, celery extract.

**Respuestas aceptadas / Accepted answers (11)**

| Español | English | Alias / Aliases |
|---|---|---|
| caldo de pollo | chicken broth | caldo de pollo, chicken broth |
| grasa de pollo | chicken fat | grasa de pollo, chicken fat |
| sal | salt | sal, salt |
| extracto de levadura | yeast extract | extracto de levadura, yeast extract |
| glutamato monosódico | monosodium glutamate | glutamato monosódico, monosodium glutamate, MSG, E621 |
| aceite de maíz | corn oil | aceite de maíz, corn oil |
| saborizante natural | natural flavour | saborizante natural, natural flavour, natural flavor |
| concentrado de proteína de soja | soy protein concentrate | concentrado de proteína de soja, soy protein concentrate |
| pollo deshidratado | dehydrated chicken | pollo deshidratado, dehydrated chicken |
| extracto de apio | celery extract | extracto de apio, celery extract |
| apio | celery | apio, celery |

**Fuente / Source:** [The Campbell's Company Latin America](https://www.campbells.com/es/products/sopas-condensadas/caldo-de-pollo/)  
**Tipo / Type:** `manufacturer_website`  
**Alcance / Supports:** Official Campbell's Latin America product page gives Chicken Broth ingredients and nutrition; page does not identify a fixed can size.

### Gatorade Thirst Quencher Lemon Lime

- **ID:** `gatorade-lemon-lime-us-828ml`
- **Foto real / Real photo:** [Ver envase / View package](https://i5.walmartimages.com/asr/c6f7a672-cf82-45d9-832b-d1dc5cf7dbc9_1.011dd39082d2a776fb34ca124a867d73.jpeg) · [Fuente / Source](https://www.walmart.com/ip/45081813)- **Marca / Brand:** Gatorade
- **País / Country:** United States
- **Mercado / Market:** United States
- **Envase / Package:** 28 fl oz (828 ml) bottle
- **Categoría / Category:** `sports_drink`
- **Estado / Status:** `ready` · **Verificación:** `manufacturer_specification_pdf`
- **Descripción (ES):** Bebida deportiva sabor lima-limón, fórmula estadounidense con colorante amarillo 5.
- **Description (EN):** US lemon-lime sports drink with Yellow 5 colouring.

**Ingredientes declarados / Declared ingredients**

Water, sugar, dextrose, citric acid, sodium citrate, monopotassium phosphate, gum arabic, glycerol ester of rosin, natural flavour, salt, Yellow 5.

**Respuestas aceptadas / Accepted answers (11)**

| Español | English | Alias / Aliases |
|---|---|---|
| agua | water | agua, water |
| azúcar | sugar | azúcar, sugar |
| dextrosa | dextrose | dextrosa, dextrose |
| ácido cítrico | citric acid | ácido cítrico, citric acid, E330 |
| citrato de sodio | sodium citrate | citrato de sodio, sodium citrate, E331 |
| fosfato monopotásico | monopotassium phosphate | fosfato monopotásico, monopotassium phosphate, E340 |
| goma arábiga | gum arabic | goma arábiga, gum arabic, E414 |
| éster de glicerol de colofonia | glycerol ester of rosin | éster de glicerol de colofonia, glycerol ester of rosin, ester gum, E445 |
| aroma natural | natural flavour | aroma natural, natural flavour, natural flavor |
| sal | salt | sal, salt |
| amarillo 5 | Yellow 5 | amarillo 5, Yellow 5, E102 |

**Fuente / Source:** [PepsiCo / Gatorade](https://digitalassets.pepsico.com/m/bcda87d0d381017/original/00052000135152_L1.pdf)  
**Tipo / Type:** `manufacturer_specification_pdf`  
**Alcance / Supports:** PepsiCo-hosted product label PDF for Gatorade Lemon Lime 28 fl oz (828 ml), with ingredient statement and nutrition panel.

### M&M'S Peanut Butter Chocolate Candies

- **ID:** `mms-peanut-butter-us-283oz`
- **Foto real / Real photo:** [Ver envase / View package](https://i5.walmartimages.com/seo/M-M-s-Peanut-Butter-Milk-Chocolate-Candy-Share-Size-2-83-oz-Bag_4296b78c-9638-4554-aed1-8fde2e3a6d73.b346b704c898a3201e068b7bc10d6f45.jpeg) · [Fuente / Source](https://www.walmart.com/ip/38253472)- **Marca / Brand:** M&M'S
- **País / Country:** United States
- **Mercado / Market:** United States
- **Envase / Package:** 2.83 oz (80 g) sharing-size pack
- **Categoría / Category:** `chocolate_candy`
- **Estado / Status:** `ready` · **Verificación:** `manufacturer_website`
- **Descripción (ES):** Confites M&M'S con chocolate con leche y centro de mantequilla de maní.
- **Description (EN):** M&M'S milk chocolate candies with a peanut butter centre.

**Ingredientes declarados / Declared ingredients**

Milk chocolate (sugar, cocoa butter, chocolate, skim milk, milkfat, lactose, peanuts, soy lecithin, salt, artificial flavors), sugar, partially defatted peanuts, partially hydrogenated palm kernel oil, less than 2% of cornstarch, dextrose, corn syrup, natural flavor, salt, gum acacia, colours (Red 40 Lake, Blue 2 Lake, Blue 1 Lake, Yellow 5, Yellow 6, Red 40, Blue 1, Blue 2, Yellow 5 Lake, Yellow 6 Lake), dextrin, propyl gallate.

**Respuestas aceptadas / Accepted answers (24)**

| Español | English | Alias / Aliases |
|---|---|---|
| azúcar | sugar | azúcar, sugar |
| manteca de cacao | cocoa butter | manteca de cacao, cocoa butter |
| chocolate | chocolate | chocolate, chocolate |
| leche descremada | skim milk | leche descremada, skim milk |
| grasa láctea | milkfat | grasa láctea, milkfat |
| lactosa | lactose | lactosa, lactose |
| maní | peanuts | maní, peanuts, peanut, cacahuate |
| lecitina de soja | soy lecithin | lecitina de soja, soy lecithin |
| sal | salt | sal, salt |
| saborizantes artificiales | artificial flavors | saborizantes artificiales, artificial flavors, artificial flavourings |
| maní parcialmente desgrasado | partially defatted peanuts | maní parcialmente desgrasado, partially defatted peanuts |
| aceite de palmiste parcialmente hidrogenado | partially hydrogenated palm kernel oil | aceite de palmiste parcialmente hidrogenado, partially hydrogenated palm kernel oil |
| almidón de maíz | cornstarch | almidón de maíz, cornstarch, maize starch |
| dextrosa | dextrose | dextrosa, dextrose |
| jarabe de maíz | corn syrup | jarabe de maíz, corn syrup |
| sabor natural | natural flavor | sabor natural, natural flavor, natural flavour |
| goma arábiga | gum acacia | goma arábiga, gum acacia, E414 |
| rojo 40 | Red 40 | rojo 40, Red 40, E129 |
| azul 2 | Blue 2 | azul 2, Blue 2, E132 |
| azul 1 | Blue 1 | azul 1, Blue 1, E133 |
| amarillo 5 | Yellow 5 | amarillo 5, Yellow 5, E102 |
| amarillo 6 | Yellow 6 | amarillo 6, Yellow 6, E110 |
| dextrina | dextrin | dextrina, dextrin |
| galato de propilo | propyl gallate | galato de propilo, propyl gallate, E310 |

**Fuente / Source:** [Mars Foodservices](https://www.marsfoodservices.com/product/m-ms-brand-peanut-butter-chocolate-candies)  
**Tipo / Type:** `manufacturer_website`  
**Alcance / Supports:** Official Mars Foodservices product page identifies M&M'S Peanut Butter sharing-size 2.83 oz packs and provides the ready-to-eat ingredient declaration.

## Argentina catalog expansion — 17 November 2026 (5-product batch; 30-product milestone)

Added five Argentina-market products: Havanna Alfajor Chocolate Clásico (55 g unit; barcode 7791875000440), Yogurísimo Bebible Frutilla (1 L; barcode 7790742567024), Vacalin Dulce de Leche Original (400 g; barcode 7790616000411), Arcor Turrón & Maní (25 g; EAN-8 77940131), and Baggio Pronto Multifruta (1 L; barcode 7790036974453). Ingredient statements are transcribed from public Open Food Facts records surfaced through ShelfPedia / FoodNutriFacts; Vacalin's base recipe is also supported by the manufacturer's technical sheet. Product photos are real package images from retailers. Every record includes Spanish and English accepted answers, aliases, market, and separate ingredient/image source references. Packaging remains the final authority where formulations change.


### Alfajor Havanna Chocolate Clásico

- **ID:** `havanna-alfajor-chocolate-clasico-ar-55g`
- **Foto real / Real photo:** [Ver envase / View package](https://saboraustral.com.au/cdn/shop/files/AlfajorHavannaUnidad.png?v=1770893973&width=1946) · [Fuente / Source](https://saboraustral.com.au/products/alfajor-havana-chocolate-clasico-x1-un)
- **Marca / Brand:** Havanna
- **País / Country:** Argentina
- **Mercado / Market:** Argentina
- **Envase / Package:** 55 g unidad (caja de 12 unidades, 660 g)
- **Categoría / Category:** `chocolate_alfajor`
- **Estado / Status:** `ready` · **Verificación:** `packaging_transcription_secondary`
- **Descripción (ES):** Alfajor clásico relleno de dulce de leche y cubierto con chocolate.
- **Description (EN):** Classic chocolate-coated alfajor filled with dulce de leche.

**Ingredientes declarados / Declared ingredients**

Dulce de leche [leche, azúcar, glucosa, bicarbonato de sodio, sorbato de potasio, vainillina], harina de trigo enriquecida [hierro, niacina, tiamina, ácido fólico, riboflavina], cobertura de chocolate [lecitina de soja], azúcar, margarina, huevo, glucosa, fécula de maíz, miel, cacao en polvo, sal, sorbitol, bicarbonato de sodio, bicarbonato de amonio, esencia natural de limón, esencia artificial de almendra, vainillina.

**Fuente / Source:** [FoodNutriFacts / Open Food Facts](https://www.foodnutrifacts.com/products/havanna-alfajores-chocolate-cl-sico-7791875000440)  
**Tipo / Type:** `packaging_transcription_secondary`  
**Alcance / Supports:** Public ingredient declaration and barcode 7791875000440; the source identifies a 55 g unit in a 660 g box.

### Yogurísimo Bebible Frutilla

- **ID:** `yogurisimo-bebible-frutilla-ar-1l`
- **Foto real / Real photo:** [Ver envase / View package](https://jumboargentina.vtexassets.com/arquivos/ids/602255/Yogurt-Entero-Yogurt-simo-Bebible-Frutilla-1-L-1-25643.jpg?v=637353912168900000) · [Fuente / Source](https://www.jumbo.com.ar/yogur-entero-yogurisimo-bebible-tetra-frutilla-x-1litro/p)
- **Marca / Brand:** La Serenísima
- **País / Country:** Argentina
- **Mercado / Market:** Argentina
- **Envase / Package:** 1 litro
- **Categoría / Category:** `drinkable_yogurt`
- **Estado / Status:** `ready` · **Verificación:** `packaging_transcription_secondary`
- **Descripción (ES):** Yogur entero bebible sabor frutilla.
- **Description (EN):** Full-fat strawberry drinkable yogurt.

**Ingredientes declarados / Declared ingredients**

Leche parcialmente descremada reducida en lactosa fortificada con calcio, jugo de frutilla, sólidos lácteos, maltodextrina, azúcar, vitamina C, ácido láctico, ácido málico, saborizante, goma gellan, carboximetilcelulosa, pectina y carmín.

**Fuente / Source:** [ShelfPedia / Open Food Facts](https://shelfpedia.com/es-ar/producto/7790742567024-yogurt-bebible/)  
**Tipo / Type:** `packaging_transcription_secondary`  
**Alcance / Supports:** Ingredient declaration and barcode 7790742567024 for the 1 L strawberry drinkable yogurt.

### Dulce de Leche Vacalin Original

- **ID:** `vacalin-dulce-de-leche-original-ar-400g`
- **Foto real / Real photo:** [Ver envase / View package](https://masonlineprod.vtexassets.com/arquivos/ids/321579/Dulce-De-Leche-Vacal-n-400-G-1-56646.jpg?v=638500233691530000) · [Fuente / Source](https://www.masonline.com.ar/dulce-de-leche-vacalin-400-g-2/p)
- **Marca / Brand:** Vacalin
- **País / Country:** Argentina
- **Mercado / Market:** Argentina
- **Envase / Package:** 400 g
- **Categoría / Category:** `dulce_de_leche`
- **Estado / Status:** `ready` · **Verificación:** `packaging_transcription_secondary`
- **Descripción (ES):** Dulce de leche argentino clásico.
- **Description (EN):** Traditional Argentine milk caramel spread.

**Ingredientes declarados / Declared ingredients**

Leche entera, azúcar, glucosa, aromatizante sabor vainilla y conservante sorbato de potasio (INS 202).

**Fuente / Source:** [ShelfPedia / Open Food Facts](https://shelfpedia.com/es-ar/producto/7790616000411-dulce-de-leche/) · [Ficha técnica oficial Vacalin](https://www.vacalin.com.ar/img_subcategorias/090914283978_FichaTEC-DDLOriginal2024.pdf)  
**Tipo / Type:** `packaging_transcription_secondary` + manufacturer technical sheet  
**Alcance / Supports:** Label transcription and barcode 7790616000411; the manufacturer sheet supports the base recipe and package range.

### Turrón & Maní Arcor

- **ID:** `arcor-turron-mani-ar-25g`
- **Foto real / Real photo:** [Ver envase / View package](https://masonlineprod.vtexassets.com/arquivos/ids/319688/front-view-506.jpg?v=639059036328270000) · [Fuente / Source](https://www.masonline.com.ar/turron-de-mani-arcor-25-gr-2/p)
- **Marca / Brand:** Arcor
- **País / Country:** Argentina
- **Mercado / Market:** Argentina
- **Envase / Package:** 25 g
- **Categoría / Category:** `peanut_nougat`
- **Estado / Status:** `ready` · **Verificación:** `packaging_transcription_secondary`
- **Descripción (ES):** Turrón blando de maní con jarabe de glucosa.
- **Description (EN):** Soft peanut nougat bar with glucose syrup.

**Ingredientes declarados / Declared ingredients**

Jarabe de glucosa, harina de trigo enriquecida (hierro, ácido fólico, tiamina, riboflavina, niacina), azúcar, maní tostado (10%), aceite de girasol, proteína vegetal hidrolizada, sal, lecitina de soja, gelatina, bicarbonato de sodio y aroma artificial.

**Fuente / Source:** [ShelfPedia / Open Food Facts](https://shelfpedia.com/es-ar/producto/77940131-turron-mani/)  
**Tipo / Type:** `packaging_transcription_secondary`  
**Alcance / Supports:** Ingredient declaration and EAN-8 77940131 for Arcor Turrón & Maní 25 g.

### Baggio Pronto Multifruta

- **ID:** `baggio-pronto-multifruta-ar-1l`
- **Foto real / Real photo:** [Ver envase / View package](https://acdn-us.mitiendanube.com/stores/004/462/347/products/el-granero-141-ed55ae6938d339d71816624915194813-1024-1024-d1759abde3153bc9a317144338412089-1024-1024.webp) · [Fuente / Source](https://superastorga.com.ar/productos/baggio-x-1l-jugo-multifruta/)
- **Marca / Brand:** Baggio
- **País / Country:** Argentina
- **Mercado / Market:** Argentina
- **Envase / Package:** 1 litro
- **Categoría / Category:** `multifruit_juice_drink`
- **Estado / Status:** `ready` · **Verificación:** `packaging_transcription_secondary`
- **Descripción (ES):** Bebida multifruta con banana, durazno, naranja y ananá.
- **Description (EN):** Multifruit juice drink with banana, peach, orange and pineapple.

**Ingredientes declarados / Declared ingredients**

Agua, puré de banana, pulpa concentrada de durazno, jugo concentrado de naranja, jugo concentrado de ananá, vitamina C, ácido cítrico, citrato de sodio, eritorbato de sodio, ácido ascórbico, sucralosa y glucósidos de esteviol.

**Fuente / Source:** [ShelfPedia / Open Food Facts](https://shelfpedia.com/es-ar/producto/7790036974453-pronto/)  
**Tipo / Type:** `packaging_transcription_secondary`  
**Alcance / Supports:** Ingredient declaration and barcode 7790036974453 for Baggio Pronto 1 L multifruit juice drink.


### Galletitas Jorgito con Chips

- **ID:** `jorgito-galletitas-chips-ar-120g`
- **Foto oficial / Official photo:** [Ver envase / View package](https://alfajores-jorgito.com/media/8275694ddcaf0a1b6a9bb2cfc2522c86.webp)
- **Marca / Brand:** Jorgito
- **País / Country:** Argentina
- **Mercado / Market:** Argentina
- **Envase / Package:** 120 g
- **Categoría / Category:** `chocolate_chip_cookies`
- **Estado / Status:** `ready` · **Verificación:** `manufacturer_website`
- **Descripción (ES):** Galletitas de vainilla con chips de chocolate semiamargo.
- **Description (EN):** Vanilla cookies with semi-sweet chocolate chips.

**Ingredientes declarados / Declared ingredients**

Harina de trigo enriquecida, azúcar, grasa vacuna, gotas de baño de repostería semiamargo (lecitina de soja INS 322, triestearato de sorbitán INS 492, aromatizante), gotas de chocolate semiamargo (lecitina de soja INS 322, polirricinoleato de poliglicerol INS 476, aromatizante), azúcar invertido, leche descremada en polvo, sal, bicarbonato de sodio INS 500ii, bicarbonato de amonio INS 503ii, lecitina de soja INS 322, esencia de vainilla, bixina INS 160b y curcumina INS 100i. La harina enriquecida aporta hierro, ácido fólico, tiamina, riboflavina y niacina.

**Fuente de ingredientes / Ingredient source:** [Jorgito — fabricante / manufacturer](https://alfajores-jorgito.com/producto/galletitas-chips)  
**Fuente de imagen / Image source:** [Imagen oficial / Official product image](https://alfajores-jorgito.com/media/8275694ddcaf0a1b6a9bb2cfc2522c86.webp)


### Alfajor Smams Glorioso

- **ID:** `smams-alfajor-glorioso-ar-75g`
- **Foto oficial / Official photo:** [Ver envase / View package](https://www.smams.com.ar/images/stories/virtuemart/product/gloriosoWebSmams.jpg)
- **Marca / Brand:** Smams
- **País / Country:** Argentina
- **Mercado / Market:** Argentina
- **Envase / Package:** 75 g
- **Categoría / Category:** `gluten_free_alfajor`
- **Estado / Status:** `ready` · **Verificación:** `manufacturer_website`
- **Descripción (ES):** Alfajor sin gluten de dulce de leche y chips de chocolate, bañado en chocolate semiamargo.
- **Description (EN):** Gluten-free dulce de leche and chocolate-chip alfajor coated in semi-sweet compound chocolate.

**Ingredientes declarados / Declared ingredients**

Tapa de galletita: almidón de maíz, harina de arroz, azúcar, aceite de girasol alto oleico, agua, jarabe de glucosa, cacao en polvo, sal, aromatizantes de vainilla y limón. Dulce de leche: leche entera, azúcar, glucosa, sólidos lácteos, almidón, sabor vainilla. Chips de chocolate. Baño de repostería semiamargo.

**Fuente de ingredientes / Ingredient source:** [Smams — fabricante / manufacturer](https://www.smams.com.ar/index.php/productos/snacks-alfajores/alfajor-glorioso-detail)  
**Fuente de imagen / Image source:** [Imagen oficial / Official product image](https://www.smams.com.ar/images/stories/virtuemart/product/gloriosoWebSmams.jpg)


### Alfajor Smams Dulce de Leche Triple

- **ID:** `smams-alfajor-dulce-leche-triple-ar-81g`
- **Foto oficial / Official photo:** [Ver envase / View package](https://www.smams.com.ar/images/stories/virtuemart/product/alfajorTripleWeb68.jpg)
- **Marca / Brand:** Smams
- **País / Country:** Argentina
- **Mercado / Market:** Argentina
- **Envase / Package:** 81 g
- **Categoría / Category:** `gluten_free_triple_alfajor`
- **Estado / Status:** `ready` · **Verificación:** `manufacturer_website`
- **Descripción (ES):** Alfajor triple sin gluten de dulce de leche bañado en chocolate semiamargo.
- **Description (EN):** Triple gluten-free dulce de leche alfajor coated in semi-sweet compound chocolate.

**Ingredientes declarados / Declared ingredients**

Tapa de galletita: almidón de maíz, harina de arroz, azúcar, aceite de girasol alto oleico, agua, jarabe de glucosa, cacao en polvo, sal, espesante INS 415, emulsionante INS 322, leudantes INS 500ii e INS 503ii, conservante INS 282, aromatizantes de vainilla y limón. Dulce de leche: leche entera, azúcar, glucosa, sólidos lácteos, almidón, estabilizante INS 406, leudante INS 500ii, sabor vainilla, conservante INS 202. Baño de repostería semiamargo.

**Fuente de ingredientes / Ingredient source:** [Smams — fabricante / manufacturer](https://www.smams.com.ar/index.php/productos/snacks-alfajores/alfajor-dulce-de-leche-triple-detail)  
**Fuente de imagen / Image source:** [Imagen oficial / Official product image](https://www.smams.com.ar/images/stories/virtuemart/product/alfajorTripleWeb68.jpg)


### Alfajor Smams Dulce de Leche

- **ID:** `smams-alfajor-dulce-leche-ar-50g`
- **Foto oficial / Official photo:** [Ver envase / View package](https://www.smams.com.ar/images/stories/virtuemart/product/alfajorSimpleWeb.jpg)
- **Marca / Brand:** Smams
- **País / Country:** Argentina
- **Mercado / Market:** Argentina
- **Envase / Package:** 50 g
- **Categoría / Category:** `gluten_free_alfajor`
- **Estado / Status:** `ready` · **Verificación:** `manufacturer_website`
- **Descripción (ES):** Alfajor sin gluten de dulce de leche bañado en chocolate semiamargo.
- **Description (EN):** Gluten-free dulce de leche alfajor coated in semi-sweet compound chocolate.

**Ingredientes declarados / Declared ingredients**

Dulce de leche: leche entera, azúcar, glucosa, sólidos lácteos, almidón, estabilizante INS 406, leudante INS 500ii, sabor vainilla, conservante INS 202. Tapas: almidón de maíz, harina de arroz, azúcar, aceite de girasol alto oleico, agua, jarabe de glucosa, cacao en polvo, sal, espesante INS 415, emulsionante INS 322, leudantes INS 500ii e INS 503ii, conservante INS 282, aromatizantes de vainilla y limón. Baño de repostería semiamargo.

**Fuente de ingredientes / Ingredient source:** [Smams — fabricante / manufacturer](https://www.smams.com.ar/index.php/productos/snacks-alfajores/alfajor-dulce-de-leche-detail)  
**Fuente de imagen / Image source:** [Imagen oficial / Official product image](https://www.smams.com.ar/images/stories/virtuemart/product/alfajorSimpleWeb.jpg)


### Saladix Jamón

- **ID:** `saladix-jamon-ar-100g`
- **Foto oficial / Official photo:** [Ver envase / View package](https://www.arcor.com/ar/uploads/product_images/90101003871.jpg)
- **Marca / Brand:** Arcor / Saladix
- **País / Country:** Argentina
- **Mercado / Market:** Argentina
- **Envase / Package:** 100 g
- **Categoría / Category:** `savory_crackers`
- **Estado / Status:** `ready` · **Verificación:** `packaging_transcription_secondary`
- **Descripción (ES):** Galletitas snack saladas sabor jamón, con queso.
- **Description (EN):** Ham-flavoured savoury snack crackers with cheese.

**Ingredientes declarados / Declared ingredients**

Harina de trigo enriquecida (harina de trigo, hierro, ácido fólico, tiamina, riboflavina); grasa bovina refinada; azúcar; jarabe de glucosa; queso en polvo 29%; extracto de malta; aceite de girasol alto oleico; sal; leudantes químicos (bicarbonato de sodio, bicarbonato de amonio); emulsionante (lecitina de soja/soya); aromatizantes artificiales (aromas jamón, aroma parmesano).

**Fuente de ingredientes / Ingredient source:** [Transcripción de etiqueta / Package-label transcription](https://shelfpedia.com/es-ar/producto/7790580716707-saladix-jamon/)  
**Fuente de imagen / Image source:** [Imagen oficial Arcor / Official Arcor image](https://www.arcor.com/ar/uploads/product_images/90101003871.jpg)


### Maná Livianas Vainilla

- **ID:** `mana-livianas-vainilla-ar-145g`
- **Foto oficial / Official photo:** [Ver envase / View package](https://www.arcor.com/ar/uploads/product_images/2874b9cbfc8afc12e8c31b5efc13439e.jpg)
- **Marca / Brand:** Bagley / Arcor / Maná
- **País / Country:** Argentina
- **Mercado / Market:** Argentina
- **Envase / Package:** 145 g
- **Categoría / Category:** `vanilla_cookies`
- **Estado / Status:** `ready` · **Verificación:** `packaging_transcription_secondary`
- **Descripción (ES):** Galletitas livianas tipo María sabor vainilla.
- **Description (EN):** Light vanilla tea biscuits.

**Ingredientes declarados / Declared ingredients**

Harina de trigo enriquecida (hierro, ácido fólico, tiamina, riboflavina, niacina), azúcar, aceite de girasol alto oleico, jarabe de glucosa, extracto de malta, permeado de suero en polvo, sal, leudantes químicos (bicarbonato de amonio, bicarbonato de sodio), emulsionantes (mono y diglicéridos de ácidos grasos, lecitina de soja), mejorador de la harina (metabisulfito de sodio), aromatizante artificial (vainillina).

**Fuente de ingredientes / Ingredient source:** [Transcripción de etiqueta / Package-label transcription](https://shelfpedia.com/es-ar/producto/7790040720107-mana-livianas-sabor-vainilla/)  
**Fuente de imagen / Image source:** [Imagen oficial Arcor / Official Arcor image](https://www.arcor.com/ar/uploads/product_images/2874b9cbfc8afc12e8c31b5efc13439e.jpg)


### Bon o Bon Leche

- **ID:** `bon-o-bon-leche-ar-15g`
- **Foto oficial / Official photo:** [Ver envase / View package](https://www.arcor.com/ar/uploads/product_images/90101004303.jpg)
- **Marca / Brand:** Arcor / Bon o Bon
- **País / Country:** Argentina
- **Mercado / Market:** Argentina
- **Envase / Package:** 15 g por bombón
- **Categoría / Category:** `peanut_chocolate_candy`
- **Estado / Status:** `ready` · **Verificación:** `packaging_transcription_secondary`
- **Descripción (ES):** Bombón de chocolate con leche y oblea relleno con crema de maní.
- **Description (EN):** Milk chocolate and wafer bonbon filled with peanut cream.

**Ingredientes declarados / Declared ingredients**

Azúcar, aceites vegetales (palma interesterificado y fraccionado, girasol alto oleico, soja hidrogenado), maní tostado 15%, leche descremada en polvo, harina de trigo enriquecida, manteca de cacao, cacao en polvo, leche entera en polvo, masa de cacao, sal, emulsionantes (lecitina de soja, poliglicerol polirricinoleato), bicarbonato de sodio, aromatizantes artificiales (aroma a avellana, etil vainillina), chocolate con leche 19%.

**Fuente de ingredientes / Ingredient source:** [Transcripción de etiqueta / Package-label transcription](https://shelfpedia.com/es-ar/producto/7790580106959-bon-o-bon-leche/)  
**Fuente de imagen / Image source:** [Imagen oficial Arcor / Official Arcor image](https://www.arcor.com/ar/uploads/product_images/90101004303.jpg)


### Maná Bañada

- **ID:** `mana-banada-ar-23g`
- **Foto oficial / Official photo:** [Ver envase / View package](https://www.arcor.com/ar/uploads/product_images/c52f60efe5d599c02536394f60c80f35.jpg)
- **Marca / Brand:** Bagley / Arcor / Maná
- **País / Country:** Argentina
- **Mercado / Market:** Argentina
- **Envase / Package:** 23 g
- **Categoría / Category:** `chocolate_covered_filled_cookie`
- **Estado / Status:** `ready` · **Verificación:** `packaging_transcription_secondary`
- **Descripción (ES):** Galletita de vainilla con relleno sabor limón, cubierta con chocolate semiamargo.
- **Description (EN):** Vanilla biscuit with lemon-flavoured filling, coated in semi-sweet chocolate.

**Ingredientes declarados / Declared ingredients**

Harina de trigo enriquecida; chocolate semiamargo 32% (azúcar, masa de cacao, manteca de cacao, emulsionantes: lecitina de soja, poliglicerol polirricinoleato, triestearato de sorbitán; aromatizante); azúcar; grasa bovina refinada; aceite de girasol alto oleico; jarabe de glucosa; almidón; permeado de suero en polvo; sal; leudantes químicos (bicarbonato de amonio, bicarbonato de sodio); emulsionantes (lecitina de soja, mono y diglicéridos de ácidos grasos); acidulante (ácido cítrico); aromatizantes artificiales (vainillina, aroma limón).

**Fuente de ingredientes / Ingredient source:** [Transcripción de etiqueta / Package-label transcription](https://www.youtube.com/watch?v=hfhOkS5YXlw)  
**Fuente de imagen / Image source:** [Imagen oficial Arcor / Official Arcor image](https://www.arcor.com/ar/uploads/product_images/c52f60efe5d599c02536394f60c80f35.jpg)


### Cereal Mix Frutilla y Chía

- **ID:** `cereal-mix-frutilla-chia-ar-207g`
- **Foto oficial / Official photo:** [Ver envase / View package](https://www.arcor.com/ar/uploads/product_images/90101010783.jpg)
- **Marca / Brand:** Arcor · Cereal Mix
- **País / Country:** Argentina
- **Mercado / Market:** Argentina
- **Envase / Package:** 207 g
- **Categoría / Category:** `oat_strawberry_chia_cookies`
- **Estado / Status:** `ready` · **Verificación:** `packaging_transcription_secondary`
- **Descripción (ES):** Galletitas de avena con frutilla deshidratada, semillas de chía y ciruela.
- **Description (EN):** Oat cookies with dried strawberry, chia seeds and dried plum.

**Ingredientes declarados / Declared ingredients**

Harina de trigo enriquecida (hierro, ácido fólico, tiamina, riboflavina, niacina); azúcar; aceite de girasol alto oleico; avena arrollada (8%); ciruela deshidratada; frutilla deshidratada (2%); semillas de chía (2%); leche descremada en polvo; sal; fructosa; leudantes químicos (bicarbonato de amonio, bicarbonato de sodio); emulsionantes (mono y diglicéridos de ácidos grasos, ésteres de ácidos grasos con propilenglicol, sales de ácidos grasos con potasio, lecitina de soja); mejorador de la harina (metabisulfito de sodio); aromatizantes artificiales (vainillina, aroma frutilla).

**Fuente de ingredientes / Ingredient source:** [Vea / transcripción de etiqueta](https://www.vea.com.ar/galletas-cereal-mix-frutilla-chia-x207g/p)  
**Fuente de imagen / Image source:** [Imagen oficial Arcor / Official Arcor image](https://www.arcor.com/ar/uploads/product_images/90101010783.jpg)


### Mogul 50% Frutas

- **ID:** `mogul-50-frutas-ar-50g`
- **Foto oficial / Official photo:** [Ver envase / View package](https://www.arcor.com/ar/uploads/product_images/7a86dcc8d67cf6f14e215c114c88f7ac.jpg)
- **Marca / Brand:** Arcor · Mogul
- **País / Country:** Argentina
- **Mercado / Market:** Argentina
- **Envase / Package:** 50 g
- **Categoría / Category:** `fruit_gummies`
- **Estado / Status:** `ready` · **Verificación:** `packaging_transcription_secondary`
- **Descripción (ES):** Pastillas de goma sabor frutal con la leyenda 50% jugo de fruta en el envase.
- **Description (EN):** Fruit-flavoured gummy candies with a 50% fruit juice claim on the pack.

**Ingredientes declarados / Declared ingredients**

Jarabe de glucosa, azúcar, almidón, gelificante gelatina/grenetina, acidulante ácido cítrico, colorante rojo allura (INS 129), colorante amarillo ocaso (INS 110), colorante tartrazina (INS 102), colorante azul brillante (INS 133), aromatizantes artificiales.

**Fuente de ingredientes / Ingredient source:** [Vea / transcripción de etiqueta](https://www.vea.com.ar/gomitas-frutales-mogul-50-gr-2/p)  
**Fuente de imagen / Image source:** [Imagen oficial Arcor / Official Arcor image](https://www.arcor.com/ar/uploads/product_images/7a86dcc8d67cf6f14e215c114c88f7ac.jpg)


### Natural Break Nutritivo

- **ID:** `natural-break-nutritivo-ar-27g`
- **Foto oficial / Official photo:** [Ver envase / View package](https://www.arcor.com/ar/uploads/product_images/f03914b674d5470d245747decd9967cc.jpg)
- **Marca / Brand:** Arcor · Natural Break
- **País / Country:** Argentina
- **Mercado / Market:** Argentina
- **Envase / Package:** 27 g
- **Categoría / Category:** `nut_seed_mix`
- **Estado / Status:** `ready` · **Verificación:** `manufacturer_document`
- **Descripción (ES):** Mix salado de maní, semillas de girasol, castañas de cajú y almendras.
- **Description (EN):** A savoury mix of salted peanuts, sunflower seeds, cashews and almonds.

**Ingredientes declarados / Declared ingredients**

Maní salado, semillas de girasol, castañas de cajú, almendras.

**Fuente de ingredientes / Ingredient source:** [Arcor](https://www.arcor.com/ar/uploads/downloads/888b06bf766c4684d47217660a75a6b0.pdf)  
**Fuente de imagen / Image source:** [Imagen oficial Arcor / Official Arcor image](https://www.arcor.com/ar/uploads/product_images/f03914b674d5470d245747decd9967cc.jpg)


### Natural Break Energía

- **ID:** `natural-break-energia-ar-30g`
- **Foto oficial / Official photo:** [Ver envase / View package](https://www.arcor.com/ar/uploads/product_images/e3a671ee24e99d80742597b922df29b2.jpg)
- **Marca / Brand:** Arcor · Natural Break
- **País / Country:** Argentina
- **Mercado / Market:** Argentina
- **Envase / Package:** 30 g
- **Categoría / Category:** `dried_fruit_nut_mix`
- **Estado / Status:** `ready` · **Verificación:** `manufacturer_document`
- **Descripción (ES):** Mix de frutas y semillas con chips de banana, pasas de uva, maní tostado y semillas de girasol.
- **Description (EN):** A fruit and seed mix with banana chips, raisins, roasted peanuts and sunflower seeds.

**Ingredientes declarados / Declared ingredients**

Chips de banana, pasas de uva, maní tostado, semillas de girasol peladas.

**Fuente de ingredientes / Ingredient source:** [Arcor](https://www.arcor.com/ar/uploads/downloads/888b06bf766c4684d47217660a75a6b0.pdf)  
**Fuente de imagen / Image source:** [Imagen oficial Arcor / Official Arcor image](https://www.arcor.com/ar/uploads/product_images/e3a671ee24e99d80742597b922df29b2.jpg)


### Águila Extra Fino 60% Cacao

- **ID:** `aguila-60-cacao-ar-14g`
- **Foto oficial / Official photo:** [Ver envase / View package](https://www.arcor.com/ar/uploads/product_images/3d288f9fd14d1c5b516e8232c5319624.jpg)
- **Marca / Brand:** Águila · Arcor
- **País / Country:** Argentina
- **Mercado / Market:** Argentina
- **Envase / Package:** 14 g
- **Categoría / Category:** `dark_chocolate`
- **Estado / Status:** `ready` · **Verificación:** `retailer_label_transcription`
- **Descripción (ES):** Chocolate amargo individual con 60% de cacao.
- **Description (EN):** Individual dark chocolate bar with 60% cocoa.

**Ingredientes declarados / Declared ingredients**

Masa de cacao, azúcar, manteca de cacao, cacao en polvo, grasa anhidra de leche, emulsionante lecitina de soja, aromatizante artificial vainillina, aromatizante artificial etil vainillina.

**Fuente de ingredientes / Ingredient source:** [Vea / transcripción de etiqueta](https://www.vea.com.ar/barrita-chocolate-aguila-60cacao-x14g/p)  
**Fuente de imagen / Image source:** [Imagen oficial Arcor / Official Arcor image](https://www.arcor.com/ar/uploads/product_images/3d288f9fd14d1c5b516e8232c5319624.jpg)


## Argentina catalog expansion — 17 November 2026 (sixth batch)

Added 10 products with complete package-transcribed ingredient declarations and real package photographs. Ingredient references point to ShelfPedia pages backed by Open Food Facts (ODbL); image references are recorded separately and point to retailer-hosted package photos. Precautionary may-contain statements are documented but excluded from ingredient answers.

### Mermelada de Durazno Arcor

- **ID:** `mermelada-durazno-ar-454g`
- **Foto del envase / Package photo:** [Ver producto / View package](https://xpallet.com.ar/arcor-mermelada-de-durazno-sin-tacc-454-g/)
- **Marca / Brand:** Arcor
- **País / Country:** Argentina
- **Mercado / Market:** Argentina
- **Envase / Package:** 454 g
- **Categoría / Category:** `peach_jam`
- **Estado / Status:** `ready` · **Verificación:** `packaging_transcription_secondary`
- **Descripción (ES):** Mermelada de durazno en frasco, elaborada con pulpa de fruta.
- **Description (EN):** Peach jam in a glass jar, made with fruit pulp.

**Ingredientes declarados / Declared ingredients**

Jarabe de glucosa, azúcar, pulpa de durazno, acidulante (ácido cítrico), gelificante (pectina), aromatizante artificial, conservador (sorbato de potasio), colorante (INS 150d), antiespumante (INS 900).

**Fuente de ingredientes / Ingredient source:** [ShelfPedia / Open Food Facts](https://shelfpedia.com/es-ar/producto/7795184119756-mermelada-de-durazno/)  
**Fuente de imagen / Image source:** [XPallet](https://xpallet.com.ar/arcor-mermelada-de-durazno-sin-tacc-454-g/)


### Polenta Instantánea Presto Pronta

- **ID:** `polenta-instantanea-arcor-ar-500g`
- **Foto del envase / Package photo:** [Ver producto / View package](https://amazonasfoods.com/es/products/arcor-polenta-prestopronta-500-grs)
- **Marca / Brand:** Arcor · Presto Pronta
- **País / Country:** Argentina
- **Mercado / Market:** Argentina
- **Envase / Package:** 500 g
- **Categoría / Category:** `instant_polenta`
- **Estado / Status:** `ready` · **Verificación:** `packaging_transcription_secondary`
- **Descripción (ES):** Harina de maíz precocida para preparar polenta instantánea.
- **Description (EN):** Pre-cooked corn flour for making instant polenta.

**Ingredientes declarados / Declared ingredients**

Harina de maíz precocida.

**Fuente de ingredientes / Ingredient source:** [ShelfPedia / Open Food Facts](https://shelfpedia.com/es-ar/producto/7790580660000-polenta-instantanea/)  
**Fuente de imagen / Image source:** [Amazonas Foods](https://amazonasfoods.com/es/products/arcor-polenta-prestopronta-500-grs)


### Rocklets

- **ID:** `rocklets-arcor-ar-40g`
- **Foto del envase / Package photo:** [Ver producto / View package](https://www.rimoldimayorista.com.ar/categorias/rocklets-confites-40g-28386.html)
- **Marca / Brand:** Arcor · Rocklets
- **País / Country:** Argentina
- **Mercado / Market:** Argentina
- **Envase / Package:** 40 g
- **Categoría / Category:** `candy_coated_milk_chocolate`
- **Estado / Status:** `ready` · **Verificación:** `packaging_transcription_secondary`
- **Descripción (ES):** Confites de chocolate con leche recubiertos por una cobertura crocante de colores.
- **Description (EN):** Milk chocolate candies coated in a colourful crunchy shell.

**Ingredientes declarados / Declared ingredients**

Chocolate con leche 68% (azúcar; masa de cacao; leche entera en polvo; manteca de cacao; grasa vegetal equivalente a la manteca de cacao; leche descremada en polvo; emulsionantes: lecitina de soja, poliglicerol polirricinoleato; aromatizante: vainillina); azúcar; estabilizante: goma arábiga; glaseante: cera carnauba; colorantes: dióxido de titanio (E171), tartrazina (E102), rojo allura (E129), amarillo ocaso (E110), azul brillante (E133), indigotina (E132).

**Fuente de ingredientes / Ingredient source:** [ShelfPedia / Open Food Facts](https://shelfpedia.com/es-ar/producto/7790580327415-rocklets/)  
**Fuente de imagen / Image source:** [Rimoldi Mayorista](https://www.rimoldimayorista.com.ar/categorias/rocklets-confites-40g-28386.html)


### Saladix Horneados sabor Pizza

- **ID:** `saladix-pizza-ar-30g`
- **Foto del envase / Package photo:** [Ver producto / View package](https://www.farmacity.com/galletitas-saladix-sabor-pizza-x-30-gr/p)
- **Marca / Brand:** Arcor · Saladix
- **País / Country:** Argentina
- **Mercado / Market:** Argentina
- **Envase / Package:** 30 g
- **Categoría / Category:** `pizza_flavoured_crackers`
- **Estado / Status:** `ready` · **Verificación:** `packaging_transcription_secondary`
- **Descripción (ES):** Galletitas snack horneadas con sabor a pizza.
- **Description (EN):** Baked savoury snack crackers with pizza flavour.

**Ingredientes declarados / Declared ingredients**

Harina de trigo enriquecida (hierro 0,0030%, ácido fólico 0,00022%, tiamina 0,00063%, riboflavina 0,00013%, niacina 0,0013%), grasa bovina refinada, azúcar, jarabe de glucosa, tomate deshidratado, queso en polvo 2%, extracto de malta, aceite de girasol alto oleico, sal, orégano, leudantes químicos (bicarbonato de sodio, bicarbonato de amonio), emulsionante (lecitina de soja), aromatizantes artificiales (aroma pizza, aroma queso).

**Fuente de ingredientes / Ingredient source:** [ShelfPedia / Open Food Facts](https://shelfpedia.com/es-ar/producto/7790580387006-saladix-sabor-pizza/)  
**Fuente de imagen / Image source:** [Farmacity](https://www.farmacity.com/galletitas-saladix-sabor-pizza-x-30-gr/p)


### Puré de Tomate Arcor

- **ID:** `pure-tomate-arcor-ar-530g`
- **Foto del envase / Package photo:** [Ver producto / View package](https://www.toledodigital.com.ar/pure-de-tomate-arcor-530g-20356/p)
- **Marca / Brand:** Arcor
- **País / Country:** Argentina
- **Mercado / Market:** Argentina
- **Envase / Package:** 530 g
- **Categoría / Category:** `tomato_puree`
- **Estado / Status:** `ready` · **Verificación:** `packaging_transcription_secondary`
- **Descripción (ES):** Puré de tomate en envase de 530 gramos.
- **Description (EN):** Tomato purée in a 530-gram carton.

**Ingredientes declarados / Declared ingredients**

Tomate, regulador de acidez (ácido cítrico).

**Fuente de ingredientes / Ingredient source:** [ShelfPedia / Open Food Facts](https://shelfpedia.com/es-ar/producto/7790580138868-pure-de-tomate/)  
**Fuente de imagen / Image source:** [Toledo Digital](https://www.toledodigital.com.ar/pure-de-tomate-arcor-530g-20356/p)


### Arvejas Secas Remojadas Arcor

- **ID:** `arvejas-secas-remojadas-arcor-ar-300g`
- **Foto del envase / Package photo:** [Ver producto / View package](https://pampadirect.com/arcor-arvejas-soaked-dry-peas-ideal-for-salads-no-preservatives-added-gluten-free-300-g-10-58-oz-can/)
- **Marca / Brand:** Arcor
- **País / Country:** Argentina
- **Mercado / Market:** Argentina
- **Envase / Package:** 300 g (195 g peso escurrido)
- **Categoría / Category:** `canned_peas`
- **Estado / Status:** `ready` · **Verificación:** `packaging_transcription_secondary`
- **Descripción (ES):** Arvejas secas remojadas listas para usar en ensaladas y comidas.
- **Description (EN):** Soaked dried peas, ready to use in salads and meals.

**Ingredientes declarados / Declared ingredients**

Arvejas secas remojadas.

**Fuente de ingredientes / Ingredient source:** [ShelfPedia / Open Food Facts](https://shelfpedia.com/es-ar/producto/7790580132392-arvejas-secas-remojadas/)  
**Fuente de imagen / Image source:** [Pampa Direct](https://pampadirect.com/arcor-arvejas-soaked-dry-peas-ideal-for-salads-no-preservatives-added-gluten-free-300-g-10-58-oz-can/)


### Tomates Peritas Arcor

- **ID:** `tomates-peritas-arcor-ar-400g`
- **Foto del envase / Package photo:** [Ver producto / View package](https://www.disco.com.ar/tomate-perita-en-lata-arcor-400-gr/p)
- **Marca / Brand:** Arcor
- **País / Country:** Argentina
- **Mercado / Market:** Argentina
- **Envase / Package:** 400 g
- **Categoría / Category:** `canned_peeled_tomatoes`
- **Estado / Status:** `ready` · **Verificación:** `packaging_transcription_secondary`
- **Descripción (ES):** Tomates peritas pelados conservados en jugo de tomate.
- **Description (EN):** Peeled pear tomatoes preserved in tomato juice.

**Ingredientes declarados / Declared ingredients**

Tomate pelado, jugo de tomates, regulador de acidez (ácido cítrico).

**Fuente de ingredientes / Ingredient source:** [ShelfPedia / Open Food Facts](https://shelfpedia.com/es-ar/producto/7790580567903-tomates-peritas/)  
**Fuente de imagen / Image source:** [Disco / Jumbo](https://www.disco.com.ar/tomate-perita-en-lata-arcor-400-gr/p)


### Cereal Mix Semillas & Chips

- **ID:** `cereal-mix-semillas-chips-ar-207g`
- **Foto del envase / Package photo:** [Ver producto / View package](https://ecomodico.com/p/galletitas-cereal-mix-de-semillas-y-chips-x-207-gr/6bf8b862-1caf-4fae-a8c9-b861cf63bcc7)
- **Marca / Brand:** Arcor · Cereal Mix
- **País / Country:** Argentina
- **Mercado / Market:** Argentina
- **Envase / Package:** 207 g
- **Categoría / Category:** `seed_chocolate_oat_cookies`
- **Estado / Status:** `ready` · **Verificación:** `packaging_transcription_secondary`
- **Descripción (ES):** Galletitas de avena con mezcla de semillas y chips de chocolate.
- **Description (EN):** Oat cookies with a mix of seeds and chocolate chips.

**Ingredientes declarados / Declared ingredients**

Harina de trigo, hierro, ácido fólico, tiamina, riboflavina, niacina, azúcar, avena arrollada (12%), aceite de girasol alto oleico, baño de repostería (8%), lecitina de girasol, triestearato de sorbitán, aromatizante, semilla de quinoa, semilla de amaranto, semilla de chía, semilla de amapola, semilla de sésamo blanco tostado, semilla de sésamo negro, leche descremada en polvo, jarabe de glucosa, sal, mono y diglicéridos de ácidos grasos, ésteres de ácidos grasos con propilenglicol, lecitina de soja, sales de ácidos grasos con potasio, ésteres de mono y diglicéridos de ácidos grasos con diacetil tartárico, estearoil lactilato de sodio, bicarbonato de amonio, bicarbonato de sodio, aroma Graham, aroma chocolate, metabisulfito de sodio. Puede contener almendra, cebada, centeno, huevo y maní.

**Fuente de ingredientes / Ingredient source:** [ShelfPedia / Open Food Facts](https://shelfpedia.com/es-ar/producto/7790040135758-cereal-mix-semillas-chips/)  
**Fuente de imagen / Image source:** [Ecomodico](https://ecomodico.com/p/galletitas-cereal-mix-de-semillas-y-chips-x-207-gr/6bf8b862-1caf-4fae-a8c9-b861cf63bcc7)


### Mermelada de Frutilla Arcor

- **ID:** `mermelada-frutilla-arcor-ar-454g`
- **Foto del envase / Package photo:** [Ver producto / View package](https://www.masonline.com.ar/mermelada-arcor-de-frutilla-454gr-2/p)
- **Marca / Brand:** Arcor
- **País / Country:** Argentina
- **Mercado / Market:** Argentina
- **Envase / Package:** 454 g
- **Categoría / Category:** `strawberry_jam`
- **Estado / Status:** `ready` · **Verificación:** `packaging_transcription_secondary`
- **Descripción (ES):** Mermelada de frutilla en frasco de vidrio.
- **Description (EN):** Strawberry jam in a glass jar.

**Ingredientes declarados / Declared ingredients**

Frutillas, azúcar, jarabe de glucosa, gelificante (pectina), acidulante (ácido cítrico), conservador (sorbato de potasio), antiespumante (INS 900).

**Fuente de ingredientes / Ingredient source:** [ShelfPedia / Open Food Facts](https://shelfpedia.com/es-ar/producto/7790580509606-mermelada-de-frutilla/)  
**Fuente de imagen / Image source:** [Más Online](https://www.masonline.com.ar/mermelada-arcor-de-frutilla-454gr-2/p)


### Cereal Mix Avena & Manzana

- **ID:** `cereal-mix-avena-manzana-ar-180g`
- **Foto del envase / Package photo:** [Ver producto / View package](https://www.disco.com.ar/galletas-cereal-mix-avena-y-manzana-x180g-2/p)
- **Marca / Brand:** Arcor · Cereal Mix
- **País / Country:** Argentina
- **Mercado / Market:** Argentina
- **Envase / Package:** 180 g
- **Categoría / Category:** `oat_apple_cookies`
- **Estado / Status:** `ready` · **Verificación:** `packaging_transcription_secondary`
- **Descripción (ES):** Galletitas de avena con manzana deshidratada.
- **Description (EN):** Oat cookies with dried apple.

**Ingredientes declarados / Declared ingredients**

Avena arrollada, harina de trigo enriquecida (hierro, ácido fólico, tiamina, riboflavina, niacina), azúcar, aceite de girasol alto oleico, manzana deshidratada, alimento a base de salvado y harina de maíz, jarabe de glucosa, sal, leudantes químicos (fosfato monocálcico, bicarbonato de sodio, bicarbonato de amonio), emulsionantes (mono y diglicéridos de ácidos grasos, ésteres de ácidos grasos con propilenglicol, estearato de potasio, lecitina de soja), antioxidante (BHT), aromatizante artificial (aroma manzana).

**Fuente de ingredientes / Ingredient source:** [ShelfPedia / Open Food Facts](https://shelfpedia.com/es-ar/producto/7790040135796-cereal-mix-avena-manzana/)  
**Fuente de imagen / Image source:** [Disco / Jumbo](https://www.disco.com.ar/galletas-cereal-mix-avena-y-manzana-x180g-2/p)


### Sal Fina Dos Anclas

- **ID:** `dos-anclas-sal-fina-ar-500g`
- **Foto del envase / Package photo:** [Ver producto / View package](https://www.cordiez.com.ar/sal-fina-paquete-dos-anclas-500-gr/p)
- **Marca / Brand:** Dos Anclas
- **País / Country:** Argentina
- **Mercado / Market:** Argentina
- **Envase / Package:** 500 g
- **Categoría / Category:** `salt`
- **Estado / Status:** `ready` · **Verificación:** `retailer_label_transcription`
- **Descripción (ES):** Sal fina argentina con antiaglutinantes y yodato de potasio.
- **Description (EN):** Argentine fine salt with anti-caking agents and potassium iodate.

**Ingredientes declarados / Declared ingredients**

Sal (cloruro de sodio), antiaglutinante carbonato de magnesio (INS 504i), almidón de maíz, dióxido de silicio (INS 551), yodato de potasio (INS 917).

**Respuestas aceptadas / Accepted answers**

- sal / salt · sal, salt, cloruro de sodio, sodium chloride
- carbonato de magnesio / magnesium carbonate · carbonato de magnesio, magnesium carbonate, INS 504i, E504i
- almidón de maíz / corn starch · almidón de maíz, corn starch, maize starch
- dióxido de silicio / silicon dioxide · dióxido de silicio, silicon dioxide, INS 551, E551
- yodato de potasio / potassium iodate · yodato de potasio, potassium iodate, INS 917

**Fuente de ingredientes / Ingredient source:** [Jumbo](https://www.jumbo.com.ar/sal-fina-dos-anclas-500-gr-3/p)  
**Fuente de imagen / Image source:** [Cordiez](https://www.cordiez.com.ar/sal-fina-paquete-dos-anclas-500-gr/p)

### Bizcocho Salado Don Satur

- **ID:** `don-satur-bizcocho-salado-ar-200g`
- **Foto del envase / Package photo:** [Ver producto / View package](https://www.mercadodelaraza.com/products/don-satur-bizcochos-salado-200-g)
- **Marca / Brand:** Don Satur
- **País / Country:** Argentina
- **Mercado / Market:** Argentina
- **Envase / Package:** 200 g
- **Categoría / Category:** `savory_biscuits`
- **Estado / Status:** `ready` · **Verificación:** `packaging_transcription_secondary`
- **Descripción (ES):** Bizcochos salados de grasa, un clásico argentino para acompañar el mate.
- **Description (EN):** Traditional Argentine savory fat crackers, often enjoyed with mate.

**Ingredientes declarados / Declared ingredients**

Harina de trigo enriquecida (hierro 0,0030%, ácido fólico 0,00022%, tiamina 0,00063% (B1), riboflavina 0,00013% (B2), niacina 0,0013%), grasa bovina refinada, agua, sal, azúcar.

**Respuestas aceptadas / Accepted answers**

- harina de trigo enriquecida / enriched wheat flour · harina de trigo enriquecida, enriched wheat flour, harina de trigo, wheat flour
- hierro / iron · hierro, iron
- ácido fólico / folic acid · ácido fólico, folic acid, folato, folate
- tiamina / thiamine · tiamina, thiamine, vitamina B1, vitamin B1
- riboflavina / riboflavin · riboflavina, riboflavin, vitamina B2, vitamin B2
- niacina / niacin · niacina, niacin, vitamina B3, vitamin B3
- grasa bovina refinada / refined beef fat · grasa bovina refinada, refined beef fat, beef fat
- agua / water · agua, water
- sal / salt · sal, salt
- azúcar / sugar · azúcar, sugar

**Fuente de ingredientes / Ingredient source:** [ShelfPedia / Open Food Facts](https://shelfpedia.com/es-ar/producto/7795735000328-bizcocho-salado/)  
**Fuente de imagen / Image source:** [Mercado de la Raza](https://www.mercadodelaraza.com/products/don-satur-bizcochos-salado-200-g)

### Chocolino Cacao en Polvo

- **ID:** `chocolino-la-virginia-ar-180g`
- **Foto del envase / Package photo:** [Ver producto / View package](https://www.toledodigital.com.ar/cacao-en-polvo-chocolino-bolsa-180g-16355/p)
- **Marca / Brand:** La Virginia · Chocolino
- **País / Country:** Argentina
- **Mercado / Market:** Argentina
- **Envase / Package:** 180 g
- **Categoría / Category:** `chocolate_drink_powder`
- **Estado / Status:** `ready` · **Verificación:** `packaging_transcription_secondary`
- **Descripción (ES):** Cacao granulado fortificado para preparar bebidas chocolatadas.
- **Description (EN):** Fortified granular cocoa powder for chocolate drinks.

**Ingredientes declarados / Declared ingredients**

Azúcar blanco común, cacao solubilizado, sal, sulfato de zinc, vitamina B3, vitamina B6, vitamina B2, vitamina B12, aroma, emulsionante: lecitinas.

**Respuestas aceptadas / Accepted answers**

- azúcar blanco / white sugar · azúcar blanco, white sugar, azúcar, sugar
- cacao solubilizado / solubilized cocoa · cacao solubilizado, solubilized cocoa, cacao, cocoa
- sal / salt · sal, salt
- sulfato de zinc / zinc sulfate · sulfato de zinc, zinc sulfate
- vitamina B3 / vitamin B3 · vitamina B3, vitamin B3, niacina, niacin
- vitamina B6 / vitamin B6 · vitamina B6, vitamin B6, piridoxina, pyridoxine
- vitamina B2 / vitamin B2 · vitamina B2, vitamin B2, riboflavina, riboflavin
- vitamina B12 / vitamin B12 · vitamina B12, vitamin B12, cobalamina, cobalamin
- aroma / flavouring · aroma, flavouring, flavoring
- lecitinas / lecithins · lecitinas, lecithins, lecitina, lecithin, E322

**Fuente de ingredientes / Ingredient source:** [ShelfPedia / Open Food Facts](https://shelfpedia.com/es-ar/producto/7790150830857-chocolino/)  
**Fuente de imagen / Image source:** [Toledo Digital](https://www.toledodigital.com.ar/cacao-en-polvo-chocolino-bolsa-180g-16355/p)

### Sonrisas

- **ID:** `sonrisas-bagley-ar-108g`
- **Foto del envase / Package photo:** [Ver producto / View package](https://www.supermami.com.ar/super/producto/galletas-sonrisas-x-108-gr/_/A-2142219-2142219-s)
- **Marca / Brand:** Bagley
- **País / Country:** Argentina
- **Mercado / Market:** Argentina
- **Envase / Package:** 108 g
- **Categoría / Category:** `filled_cookies`
- **Estado / Status:** `ready` · **Verificación:** `packaging_transcription_secondary`
- **Descripción (ES):** Galletitas dulces rellenas sabor frambuesa.
- **Description (EN):** Sweet raspberry-flavoured sandwich cookies.

**Ingredientes declarados / Declared ingredients**

Harina de trigo enriquecida (hierro 0,0030%, ácido fólico 0,00022%, tiamina 0,00063%, riboflavina 0,00013%, niacina 0,0013%), azúcar, jarabe de maíz de alta fructosa, aceite de girasol alto oleico, grasa bovina refinada, avena arrollada, carbonato de calcio, leche descremada en polvo, sal, almidón, jugo de manzana, leudantes químicos (bicarbonato de sodio, bicarbonato de amonio), gelificante (agar), emulsionante (lecitina de soja), acidulante (ácido tartárico), mejorador de harina (metabisulfito de sodio), colorante (ácido carmínico, INS 120), aromatizantes artificiales (aroma frambuesa, vainillina).

**Respuestas aceptadas / Accepted answers**

- harina de trigo enriquecida / enriched wheat flour · harina de trigo enriquecida, enriched wheat flour, harina de trigo, wheat flour
- hierro / iron · hierro, iron
- ácido fólico / folic acid · ácido fólico, folic acid
- tiamina / thiamine · tiamina, thiamine, vitamina B1, vitamin B1
- riboflavina / riboflavin · riboflavina, riboflavin, vitamina B2, vitamin B2
- niacina / niacin · niacina, niacin, vitamina B3, vitamin B3
- azúcar / sugar · azúcar, sugar
- jarabe de maíz de alta fructosa / high-fructose corn syrup · jarabe de maíz de alta fructosa, high-fructose corn syrup, JMAF, HFCS
- aceite de girasol alto oleico / high-oleic sunflower oil · aceite de girasol alto oleico, high-oleic sunflower oil, aceite de girasol, sunflower oil
- grasa bovina refinada / refined beef fat · grasa bovina refinada, refined beef fat
- avena arrollada / rolled oats · avena arrollada, rolled oats, avena, oats
- carbonato de calcio / calcium carbonate · carbonato de calcio, calcium carbonate
- leche descremada en polvo / skimmed milk powder · leche descremada en polvo, skimmed milk powder, skim milk powder
- sal / salt · sal, salt
- almidón / starch · almidón, starch
- jugo de manzana / apple juice · jugo de manzana, apple juice
- bicarbonato de sodio / sodium bicarbonate · bicarbonato de sodio, sodium bicarbonate, E500
- bicarbonato de amonio / ammonium bicarbonate · bicarbonato de amonio, ammonium bicarbonate, E503
- agar / agar · agar, agar, agar-agar, E406
- lecitina de soja / soy lecithin · lecitina de soja, soy lecithin, E322
- ácido tartárico / tartaric acid · ácido tartárico, tartaric acid, E334
- metabisulfito de sodio / sodium metabisulfite · metabisulfito de sodio, sodium metabisulfite, E223
- ácido carmínico / carminic acid · ácido carmínico, carminic acid, INS 120, E120
- aroma frambuesa / raspberry flavouring · aroma frambuesa, raspberry flavouring, raspberry flavoring
- vainillina / vanillin · vainillina, vanillin

**Fuente de ingredientes / Ingredient source:** [ShelfPedia / Open Food Facts](https://shelfpedia.com/es-ar/producto/5796440133488-sonrisas/)  
**Fuente de imagen / Image source:** [Super MaMi / Dino Online](https://www.supermami.com.ar/super/producto/galletas-sonrisas-x-108-gr/_/A-2142219-2142219-s)

### Dulce de Leche Clásico La Serenísima

- **ID:** `serenisima-dulce-leche-clasico-ar-1kg`
- **Foto del envase / Package photo:** [Ver producto / View package](https://www.jumbo.com.ar/dulce-de-leche-clasico-x-1-kg-la-serenisima/p)
- **Marca / Brand:** La Serenísima
- **País / Country:** Argentina
- **Mercado / Market:** Argentina
- **Envase / Package:** 1 kg
- **Categoría / Category:** `dulce_de_leche`
- **Estado / Status:** `ready` · **Verificación:** `packaging_transcription_secondary`
- **Descripción (ES):** Dulce de leche clásico en pote de un kilo.
- **Description (EN):** Classic dulce de leche in a one-kilogram tub.

**Ingredientes declarados / Declared ingredients**

Leche, azúcar, glucosa, conservante (sorbato de potasio), aromatizante (artificial vainilla).

**Respuestas aceptadas / Accepted answers**

- leche / milk · leche, milk
- azúcar / sugar · azúcar, sugar
- glucosa / glucose · glucosa, glucose
- sorbato de potasio / potassium sorbate · sorbato de potasio, potassium sorbate, E202
- aromatizante artificial de vainilla / artificial vanilla flavouring · aromatizante artificial de vainilla, artificial vanilla flavouring, artificial vanilla flavoring, vainilla artificial

**Fuente de ingredientes / Ingredient source:** [ShelfPedia / Open Food Facts](https://shelfpedia.com/es-ar/producto/7790742104304-dulce-de-leche-clasico/)  
**Fuente de imagen / Image source:** [Jumbo](https://www.jumbo.com.ar/dulce-de-leche-clasico-x-1-kg-la-serenisima/p)

### Yerba Mate Playadito

- **ID:** `playadito-yerba-mate-ar-500g`
- **Foto del envase / Package photo:** [Ver producto / View package](https://mate-ufa.com/mate/66-playadito-1kg.html)
- **Marca / Brand:** Playadito · Cooperativa Liebig
- **País / Country:** Argentina
- **Mercado / Market:** Argentina
- **Envase / Package:** 500 g
- **Categoría / Category:** `yerba_mate`
- **Estado / Status:** `ready` · **Verificación:** `packaging_transcription_secondary`
- **Descripción (ES):** Yerba mate argentina tradicional elaborada con palo.
- **Description (EN):** Traditional Argentine yerba mate blend with stems.

**Ingredientes declarados / Declared ingredients**

100% yerba mate (Ilex paraguariensis). Sin aditivos.

**Respuestas aceptadas / Accepted answers**

- yerba mate / yerba mate · yerba mate, yerba mate, Ilex paraguariensis, mate

**Fuente de ingredientes / Ingredient source:** [ShelfPedia / Open Food Facts](https://shelfpedia.com/es-ar/producto/7793704000911-playadito/)  
**Fuente de imagen / Image source:** [Mate-UFA](https://mate-ufa.com/mate/66-playadito-1kg.html)

### Yerba Mate Amanda Tradicional

- **ID:** `amanda-yerba-mate-tradicional-ar-500g`
- **Foto del envase / Package photo:** [Ver producto / View package](https://www.cebate.pt/pt/yerba-mate/139-yerba-mate-tradicional-amanda-500gr-7792710000182.html)
- **Marca / Brand:** Amanda
- **País / Country:** Argentina
- **Mercado / Market:** Argentina
- **Envase / Package:** 500 g
- **Categoría / Category:** `yerba_mate`
- **Estado / Status:** `ready` · **Verificación:** `packaging_transcription_secondary`
- **Descripción (ES):** Yerba mate tradicional argentina elaborada con palo.
- **Description (EN):** Traditional Argentine yerba mate blend with stems.

**Ingredientes declarados / Declared ingredients**

Yerba mate (Ilex paraguariensis).

**Respuestas aceptadas / Accepted answers**

- yerba mate / yerba mate · yerba mate, yerba mate, Ilex paraguariensis, mate

**Fuente de ingredientes / Ingredient source:** [ShelfPedia / Open Food Facts](https://shelfpedia.com/es-ar/producto/7792710000182-yerba-mate-tradicional/)  
**Fuente de imagen / Image source:** [Cebate](https://www.cebate.pt/pt/yerba-mate/139-yerba-mate-tradicional-amanda-500gr-7792710000182.html)

### Mayonesa Clásica Hellmann's

- **ID:** `hellmanns-mayonesa-clasica-ar`
- **Foto del envase / Package photo:** [Ver producto / View package](https://www.hellmanns.com/ar/p/mayonesa-clasica.html/07794000006058)
- **Marca / Brand:** Hellmann's · Unilever
- **País / Country:** Argentina
- **Mercado / Market:** Argentina
- **Envase / Package:** Presentación argentina; tamaño no especificado en la página oficial
- **Categoría / Category:** `mayonnaise`
- **Estado / Status:** `ready` · **Verificación:** `manufacturer_website`
- **Descripción (ES):** Mayonesa clásica argentina con huevo y aceite vegetal.
- **Description (EN):** Argentine classic mayonnaise made with egg and vegetable oil.

**Ingredientes declarados / Declared ingredients**

Agua, aceite vegetal, huevo líquido, almidón modificado, azúcar, vinagre de alcohol, sal, jugo de limón concentrado, estabilizante: goma xántica, acidulante: ácido fosfórico, conservador: ácido sórbico, aromatizantes idénticos a los naturales y natural, secuestrante: EDTA disódico cálcico y colorante: betacaroteno.

**Respuestas aceptadas / Accepted answers**

- agua / water · agua, water
- aceite vegetal / vegetable oil · aceite vegetal, vegetable oil
- huevo líquido / liquid egg · huevo líquido, liquid egg, huevo, egg
- almidón modificado / modified starch · almidón modificado, modified starch
- azúcar / sugar · azúcar, sugar
- vinagre de alcohol / alcohol vinegar · vinagre de alcohol, alcohol vinegar
- sal / salt · sal, salt
- jugo de limón concentrado / concentrated lemon juice · jugo de limón concentrado, concentrated lemon juice, concentrated lemon
- goma xántica / xanthan gum · goma xántica, xanthan gum, E415
- ácido fosfórico / phosphoric acid · ácido fosfórico, phosphoric acid, E338
- ácido sórbico / sorbic acid · ácido sórbico, sorbic acid, E200
- aromatizantes / flavourings · aromatizantes, flavourings, flavorings
- EDTA disódico cálcico / calcium disodium EDTA · EDTA disódico cálcico, calcium disodium EDTA, E385
- betacaroteno / beta-carotene · betacaroteno, beta-carotene, E160a

**Fuente de ingredientes / Ingredient source:** [Hellmann's Argentina](https://www.hellmanns.com/ar/p/mayonesa-clasica.html/07794000006058)  
**Fuente de imagen / Image source:** [Hellmann's Argentina / Unilever](https://www.hellmanns.com/ar/p/mayonesa-clasica.html/07794000006058)

### Chocolinas

- **ID:** `chocolinas-bagley-ar-150g`
- **Foto del envase / Package photo:** [Ver producto / View package](https://www.jumbo.com.ar/galletitas-chocolinas-150-gr/p)
- **Marca / Brand:** Bagley
- **País / Country:** Argentina
- **Mercado / Market:** Argentina
- **Envase / Package:** 150 g
- **Categoría / Category:** `chocolate_cookies`
- **Estado / Status:** `ready` · **Verificación:** `retailer_label_transcription`
- **Descripción (ES):** Galletitas clásicas de chocolate, muy usadas para preparar chocotorta.
- **Description (EN):** Classic chocolate cookies, widely used to make chocotorta.

**Ingredientes declarados / Declared ingredients**

Harina de trigo enriquecida (hierro, ácido fólico, tiamina, riboflavina, niacina), azúcar, grasa bovina refinada, cacao en polvo, jarabe de glucosa, sal, leudante químico (bicarbonato de sodio), leudante químico (bicarbonato de amonio), colorante caramelo (E150d), emulsionante (lecitina de soja), mejorador de harina (metabisulfito de sodio), aromatizante artificial (vainillina).

**Respuestas aceptadas / Accepted answers**

- harina de trigo enriquecida / enriched wheat flour · harina de trigo enriquecida, enriched wheat flour, harina de trigo, wheat flour
- hierro / iron · hierro, iron
- ácido fólico / folic acid · ácido fólico, folic acid, folato, folate
- tiamina / thiamine · tiamina, thiamine, vitamina B1, vitamin B1
- riboflavina / riboflavin · riboflavina, riboflavin, vitamina B2, vitamin B2
- niacina / niacin · niacina, niacin, vitamina B3, vitamin B3
- azúcar / sugar · azúcar, sugar
- grasa bovina refinada / refined beef fat · grasa bovina refinada, refined beef fat, grasa vacuna, beef fat
- cacao en polvo / cocoa powder · cacao en polvo, cocoa powder, cacao, cocoa
- jarabe de glucosa / glucose syrup · jarabe de glucosa, glucose syrup
- sal / salt · sal, salt
- bicarbonato de sodio / sodium bicarbonate · bicarbonato de sodio, sodium bicarbonate, E500, INS 500
- bicarbonato de amonio / ammonium bicarbonate · bicarbonato de amonio, ammonium bicarbonate, E503, INS 503
- colorante caramelo E150d / caramel colour E150d · colorante caramelo E150d, caramel colour E150d, caramel color E150d, E150d
- lecitina de soja / soy lecithin · lecitina de soja, soy lecithin, E322
- metabisulfito de sodio / sodium metabisulfite · metabisulfito de sodio, sodium metabisulfite, E223
- vainillina / vanillin · vainillina, vanillin

**Fuente de ingredientes / Ingredient source:** [Vea](https://www.vea.com.ar/galletitas-chocolinas-150-gr/p)  
**Fuente de imagen / Image source:** [Jumbo](https://www.jumbo.com.ar/galletitas-chocolinas-150-gr/p)

### Criollitas Original

- **ID:** `criollitas-bagley-ar-100g`
- **Foto del envase / Package photo:** [Ver producto / View package](https://www.frat.com.ar/galleta-criollitas-original-100-gr/p)
- **Marca / Brand:** Bagley
- **País / Country:** Argentina
- **Mercado / Market:** Argentina
- **Envase / Package:** 100 g
- **Categoría / Category:** `savory_crackers`
- **Estado / Status:** `ready` · **Verificación:** `packaging_transcription_secondary`
- **Descripción (ES):** Galletitas crackers originales de Bagley, de sabor salado.
- **Description (EN):** Bagley original savory crackers.

**Ingredientes declarados / Declared ingredients**

Harina de trigo enriquecida (hierro, ácido fólico, tiamina, riboflavina, niacina), grasa bovina refinada, sal, extracto de malta (cebada), jarabe de glucosa, levadura, leudante químico (bicarbonato de sodio), emulsionante (lecitina de soja).

**Respuestas aceptadas / Accepted answers**

- harina de trigo enriquecida / enriched wheat flour · harina de trigo enriquecida, enriched wheat flour, harina de trigo, wheat flour
- hierro / iron · hierro, iron
- ácido fólico / folic acid · ácido fólico, folic acid, folato, folate
- tiamina / thiamine · tiamina, thiamine, vitamina B1, vitamin B1
- riboflavina / riboflavin · riboflavina, riboflavin, vitamina B2, vitamin B2
- niacina / niacin · niacina, niacin, vitamina B3, vitamin B3
- grasa bovina refinada / refined beef fat · grasa bovina refinada, refined beef fat, grasa vacuna, beef fat
- sal / salt · sal, salt
- extracto de malta / malt extract · extracto de malta, malt extract, malta, malt
- jarabe de glucosa / glucose syrup · jarabe de glucosa, glucose syrup
- levadura / yeast · levadura, yeast
- bicarbonato de sodio / sodium bicarbonate · bicarbonato de sodio, sodium bicarbonate, E500
- lecitina de soja / soy lecithin · lecitina de soja, soy lecithin, E322

**Fuente de ingredientes / Ingredient source:** [ShelfPedia / Open Food Facts](https://shelfpedia.com/es-ar/producto/7790040377707-criollitas-original/)  
**Fuente de imagen / Image source:** [Frat Almacenar](https://www.frat.com.ar/galleta-criollitas-original-100-gr/p)

### Boca de Dama

- **ID:** `boca-de-dama-terrabusi-ar-170g`
- **Foto del envase / Package photo:** [Ver producto / View package](https://pampadirect.com/galletitas-boca-de-dama-sweet-classic-argentinian-cookies-170-g-6-oz/)
- **Marca / Brand:** Terrabusi
- **País / Country:** Argentina
- **Mercado / Market:** Argentina
- **Envase / Package:** 170 g
- **Categoría / Category:** `sweet_cookies`
- **Estado / Status:** `ready` · **Verificación:** `retailer_label_transcription`
- **Descripción (ES):** Galletitas dulces clásicas con notas de almendra, limón y vainilla.
- **Description (EN):** Classic sweet biscuits with almond, lemon and vanilla notes.

**Ingredientes declarados / Declared ingredients**

Harina de trigo enriquecida (hierro, ácido fólico, vitamina B1, vitamina B2, niacina), azúcar, grasa vacuna refinada, almidón, jarabe de maíz de alta fructosa, sal, leudante químico (bicarbonato de sodio), leudante químico (bicarbonato de amonio), emulsionante (lecitina de soja), aromatizante idéntico al natural almendra, aromatizante natural limón, aromatizante artificial vainilla.

**Respuestas aceptadas / Accepted answers**

- harina de trigo enriquecida / enriched wheat flour · harina de trigo enriquecida, enriched wheat flour, harina de trigo, wheat flour
- hierro / iron · hierro, iron
- ácido fólico / folic acid · ácido fólico, folic acid, folato, folate
- tiamina / thiamine · tiamina, thiamine, vitamina B1, vitamin B1
- riboflavina / riboflavin · riboflavina, riboflavin, vitamina B2, vitamin B2
- niacina / niacin · niacina, niacin, vitamina B3, vitamin B3
- azúcar / sugar · azúcar, sugar
- grasa vacuna refinada / refined beef fat · grasa vacuna refinada, refined beef fat, grasa bovina, beef fat
- almidón / starch · almidón, starch
- jarabe de maíz de alta fructosa / high-fructose corn syrup · jarabe de maíz de alta fructosa, high-fructose corn syrup, JMAF, HFCS
- sal / salt · sal, salt
- bicarbonato de sodio / sodium bicarbonate · bicarbonato de sodio, sodium bicarbonate, E500
- bicarbonato de amonio / ammonium bicarbonate · bicarbonato de amonio, ammonium bicarbonate, E503
- lecitina de soja / soy lecithin · lecitina de soja, soy lecithin, E322
- aromatizante de almendra / almond flavouring · aromatizante de almendra, almond flavouring, almond flavoring
- aromatizante natural de limón / natural lemon flavouring · aromatizante natural de limón, natural lemon flavouring, natural lemon flavoring
- aromatizante artificial de vainilla / artificial vanilla flavouring · aromatizante artificial de vainilla, artificial vanilla flavouring, artificial vanilla flavoring, vainillina, vanillin

**Fuente de ingredientes / Ingredient source:** [Vea](https://www.vea.com.ar/galletitas-dulces-boca-de-dama-terrabusi-170-gr/p)  
**Fuente de imagen / Image source:** [Pampa Direct](https://pampadirect.com/galletitas-boca-de-dama-sweet-classic-argentinian-cookies-170-g-6-oz/)

### Anillos Terrabusi

- **ID:** `anillos-terrabusi-ar-300g`
- **Foto del envase / Package photo:** [Ver producto / View package](https://www.mitiendamondelez.com.ar/galletitas-anillitos-clasicos-terrabusi-300g-2028730/p)
- **Marca / Brand:** Terrabusi
- **País / Country:** Argentina
- **Mercado / Market:** Argentina
- **Envase / Package:** 300 g
- **Categoría / Category:** `sweet_cookies`
- **Estado / Status:** `ready` · **Verificación:** `retailer_label_transcription`
- **Descripción (ES):** Galletitas dulces con forma de anillo y cobertura de colores.
- **Description (EN):** Sweet ring-shaped cookies with colourful icing.

**Ingredientes declarados / Declared ingredients**

Harina de trigo, hierro, ácido fólico, vitamina B1, vitamina B2, niacina, azúcar, grasa vacuna refinada, jarabe de maíz de alta fructosa, cacao en polvo, sal, gelatina, leudante químico (bicarbonato de sodio), leudante químico (bicarbonato de amonio), fosfato monocálcico, colorante caramelo III, colorante carmín, colorante cúrcuma, emulsionante lecitina de soja, aromatizante artificial vainilla, aromatizante idéntico al natural cereza, aromatizante idéntico al natural limón, espesante goma guar, acidulante ácido cítrico.

**Respuestas aceptadas / Accepted answers**

- harina de trigo / wheat flour · harina de trigo, wheat flour
- hierro / iron · hierro, iron
- ácido fólico / folic acid · ácido fólico, folic acid, folato, folate
- tiamina / thiamine · tiamina, thiamine, vitamina B1, vitamin B1
- riboflavina / riboflavin · riboflavina, riboflavin, vitamina B2, vitamin B2
- niacina / niacin · niacina, niacin, vitamina B3, vitamin B3
- azúcar / sugar · azúcar, sugar
- grasa vacuna refinada / refined beef fat · grasa vacuna refinada, refined beef fat, grasa bovina, beef fat
- jarabe de maíz de alta fructosa / high-fructose corn syrup · jarabe de maíz de alta fructosa, high-fructose corn syrup, JMAF, HFCS
- cacao en polvo / cocoa powder · cacao en polvo, cocoa powder, cacao, cocoa
- sal / salt · sal, salt
- gelatina / gelatin · gelatina, gelatin
- bicarbonato de sodio / sodium bicarbonate · bicarbonato de sodio, sodium bicarbonate, E500
- bicarbonato de amonio / ammonium bicarbonate · bicarbonato de amonio, ammonium bicarbonate, E503
- fosfato monocálcico / monocalcium phosphate · fosfato monocálcico, monocalcium phosphate, E341
- colorante caramelo III / caramel colour III · colorante caramelo III, caramel colour III, caramel color III, E150c
- colorante carmín / carmine colour · colorante carmín, carmine colour, carmine color, E120
- colorante cúrcuma / turmeric colour · colorante cúrcuma, turmeric colour, turmeric color, curcumin, E100
- lecitina de soja / soy lecithin · lecitina de soja, soy lecithin, E322
- aromatizante artificial de vainilla / artificial vanilla flavouring · aromatizante artificial de vainilla, artificial vanilla flavouring, artificial vanilla flavoring, vainillina, vanillin
- aromatizante de cereza / cherry flavouring · aromatizante de cereza, cherry flavouring, cherry flavoring
- aromatizante de limón / lemon flavouring · aromatizante de limón, lemon flavouring, lemon flavoring
- goma guar / guar gum · goma guar, guar gum, E412
- ácido cítrico / citric acid · ácido cítrico, citric acid, E330

**Fuente de ingredientes / Ingredient source:** [Jumbo](https://www.jumbo.com.ar/galletitas-dulces-anillitos-terrabusi-300-gr/p)  
**Fuente de imagen / Image source:** [Mi Tienda Mondelez Argentina](https://www.mitiendamondelez.com.ar/galletitas-anillitos-clasicos-terrabusi-300g-2028730/p)

### Terrabusi Chips

- **ID:** `terrabusi-chips-ar-144g`
- **Foto del envase / Package photo:** [Ver producto / View package](https://pampadirect.com/terrabusi-chips-cookies-classic-sweet-cookies-with-chocolate-chips-144-g-5-07-oz-ea-pack-of-3/)
- **Marca / Brand:** Terrabusi
- **País / Country:** Argentina
- **Mercado / Market:** Argentina
- **Envase / Package:** 144 g
- **Categoría / Category:** `chocolate_chip_cookies`
- **Estado / Status:** `ready` · **Verificación:** `retailer_label_transcription`
- **Descripción (ES):** Galletitas dulces con chips de chocolate.
- **Description (EN):** Sweet cookies with chocolate chips.

**Ingredientes declarados / Declared ingredients**

Harina de trigo enriquecida (hierro, ácido fólico, vitamina B1, vitamina B2, niacina), azúcar, aceite vegetal, aceite vegetal hidrogenado, cacao en polvo, jarabe de maíz de alta fructosa, sal, dextrosa, leche descremada en polvo, leudante químico (bicarbonato de sodio), leudante químico (bicarbonato de amonio), emulsionante lecitina de soja, emulsionante lecitina de girasol, sorbitán triestearato, aromatizante artificial vainillina.

**Respuestas aceptadas / Accepted answers**

- harina de trigo enriquecida / enriched wheat flour · harina de trigo enriquecida, enriched wheat flour, harina de trigo, wheat flour
- hierro / iron · hierro, iron
- ácido fólico / folic acid · ácido fólico, folic acid, folato, folate
- tiamina / thiamine · tiamina, thiamine, vitamina B1, vitamin B1
- riboflavina / riboflavin · riboflavina, riboflavin, vitamina B2, vitamin B2
- niacina / niacin · niacina, niacin, vitamina B3, vitamin B3
- azúcar / sugar · azúcar, sugar
- aceite vegetal / vegetable oil · aceite vegetal, vegetable oil
- aceite vegetal hidrogenado / hydrogenated vegetable oil · aceite vegetal hidrogenado, hydrogenated vegetable oil
- cacao en polvo / cocoa powder · cacao en polvo, cocoa powder, cacao, cocoa
- jarabe de maíz de alta fructosa / high-fructose corn syrup · jarabe de maíz de alta fructosa, high-fructose corn syrup, JMAF, HFCS
- sal / salt · sal, salt
- dextrosa / dextrose · dextrosa, dextrose, glucose
- leche descremada en polvo / skimmed milk powder · leche descremada en polvo, skimmed milk powder, skim milk powder
- bicarbonato de sodio / sodium bicarbonate · bicarbonato de sodio, sodium bicarbonate, E500
- bicarbonato de amonio / ammonium bicarbonate · bicarbonato de amonio, ammonium bicarbonate, E503
- lecitina de soja / soy lecithin · lecitina de soja, soy lecithin, E322
- lecitina de girasol / sunflower lecithin · lecitina de girasol, sunflower lecithin, E322
- sorbitán triestearato / sorbitan tristearate · sorbitán triestearato, sorbitan tristearate, E492
- vainillina / vanillin · vainillina, vanillin

**Fuente de ingredientes / Ingredient source:** [Jumbo](https://www.jumbo.com.ar/galletitas-dulces-variedad-terrabusi-144-gr/p)  
**Fuente de imagen / Image source:** [Pampa Direct](https://pampadirect.com/terrabusi-chips-cookies-classic-sweet-cookies-with-chocolate-chips-144-g-5-07-oz-ea-pack-of-3/)

---

## Argentina catalog expansion — 17 November 2026 (seventh batch)

Added three verified Argentina-market products across beverages and dairy: Cunnington Cola Classic (2.25 L), Cunnington Ginger Ale Classic (1.5 L), and La Serenísima Nutrición Activa Yogur Firme Vainilla (190 g). Ingredient declarations and real package images have separate provenance records; the yogurt uses the manufacturer's current ingredient list and official product image.

### Cunnington Cola Classic

- **ID:** `cunnington-cola-classic-ar-2250ml`
- **Foto del envase / Package photo:** [Ver producto / View package](https://www.masonline.com.ar/gaseosa-cunnington-cola-2-25-l-3/p)
- **Marca / Brand:** Cunnington
- **País / Country:** Argentina
- **Mercado / Market:** Argentina
- **Envase / Package:** 2.25 L
- **Categoría / Category:** `soft_drink`
- **Estado / Status:** `ready` · **Verificación:** `retailer_label_transcription`
- **Descripción (ES):** Gaseosa cola clásica argentina · ¿Podés adivinar qué contiene?
- **Description (EN):** Argentinian classic cola · Can you guess what's inside?

**Ingredientes declarados / Declared ingredients**

Agua carbonatada, azúcar, JMAF (jarabe de maíz de alta fructosa), colorante caramelo (INS 150d), aromatizante, acidulante ácido fosfórico (INS 338), conservante benzoato de sodio, cafeína.

**Respuestas aceptadas / Accepted answers**

- agua carbonatada / carbonated water · agua carbonatada, carbonated water
- azúcar / sugar · azúcar, sugar
- jarabe de maíz de alta fructosa / high-fructose corn syrup · jarabe de maíz de alta fructosa, high-fructose corn syrup, JMAF, HFCS
- colorante caramelo (INS 150d) / caramel color (INS 150d) · colorante caramelo (INS 150d), caramel color (INS 150d), caramelo 150d, E150d
- aromatizante / flavouring · aromatizante, flavouring, aromatizantes, flavoring
- ácido fosfórico (INS 338) / phosphoric acid (INS 338) · ácido fosfórico (INS 338), phosphoric acid (INS 338), ácido fosfórico, E338
- benzoato de sodio / sodium benzoate · benzoato de sodio, sodium benzoate, E211
- cafeína / caffeine · cafeína, caffeine

**Fuente de ingredientes / Ingredient source:** [Jumbo](https://www.jumbo.com.ar/gaseosa-cunnington-cola-2-25lt/p)  
**Fuente de imagen / Image source:** [Más Online](https://www.masonline.com.ar/gaseosa-cunnington-cola-2-25-l-3/p)

---

### Cunnington Ginger Ale Classic

- **ID:** `cunnington-ginger-ale-classic-ar-1500ml`
- **Foto del envase / Package photo:** [Ver producto / View package](https://www.masonline.com.ar/gaseosa-cunnington-ginger-ale-classic-1-5-l-2/p)
- **Marca / Brand:** Cunnington
- **País / Country:** Argentina
- **Mercado / Market:** Argentina
- **Envase / Package:** 1.5 L
- **Categoría / Category:** `soft_drink`
- **Estado / Status:** `ready` · **Verificación:** `retailer_label_transcription`
- **Descripción (ES):** Gaseosa ginger ale argentina · ¿Reconocés sus ingredientes?
- **Description (EN):** Argentinian ginger ale soda · Can you identify its ingredients?

**Ingredientes declarados / Declared ingredients**

Agua carbonatada, JMAF (jarabe de maíz de alta fructosa), azúcar, acidulante ácido cítrico (INS 330), aromatizante, conservante benzoato de sodio, colorante caramelo (INS 150d), antioxidante eritorbato de sodio (INS 316).

**Respuestas aceptadas / Accepted answers**

- agua carbonatada / carbonated water · agua carbonatada, carbonated water
- jarabe de maíz de alta fructosa / high-fructose corn syrup · jarabe de maíz de alta fructosa, high-fructose corn syrup, JMAF, HFCS
- azúcar / sugar · azúcar, sugar
- ácido cítrico (INS 330) / citric acid (INS 330) · ácido cítrico (INS 330), citric acid (INS 330), ácido cítrico, E330
- aromatizante / flavouring · aromatizante, flavouring, aromatizantes, flavoring
- benzoato de sodio / sodium benzoate · benzoato de sodio, sodium benzoate, E211
- colorante caramelo (INS 150d) / caramel color (INS 150d) · colorante caramelo (INS 150d), caramel color (INS 150d), caramelo 150d, E150d
- eritorbato de sodio (INS 316) / sodium erythorbate (INS 316) · eritorbato de sodio (INS 316), sodium erythorbate (INS 316), eritorbato de sodio, E316

**Fuente de ingredientes / Ingredient source:** [Jumbo](https://www.jumbo.com.ar/gaseosa-cunnington-ginger-ale-1-5lt-3/p)  
**Fuente de imagen / Image source:** [Más Online](https://www.masonline.com.ar/gaseosa-cunnington-ginger-ale-classic-1-5-l-2/p)

---

### Yogur Firme Vainilla La Serenísima

- **ID:** `serenisima-yogur-firme-vainilla-190g`
- **Foto del envase / Package photo:** [Ver producto / View package](https://laserenisimanutricion.com.ar/productos/yogures/firmes-y-cremosos/firme-vainilla-190g/)
- **Marca / Brand:** La Serenísima · Nutrición Activa
- **País / Country:** Argentina
- **Mercado / Market:** Argentina
- **Envase / Package:** 190 g
- **Categoría / Category:** `yogurt`
- **Estado / Status:** `ready` · **Verificación:** `manufacturer_website`
- **Descripción (ES):** Yogur firme parcialmente descremado sabor vainilla · ¿Qué ingredientes tiene?
- **Description (EN):** Part-skimmed vanilla set yogurt · What's in it?

**Ingredientes declarados / Declared ingredients**

Leche parcialmente descremada pasteurizada, azúcar de caña, leche en polvo descremada, almidón modificado de maíz, gelatina, cultivos lácticos, cultivos probióticos (Lactobacillus casei DN-114 001, Bifidobacterium lactis DN-173 010), vitaminas A, D y B12, aromas.

**Respuestas aceptadas / Accepted answers**

- leche parcialmente descremada pasteurizada / pasteurized partly skimmed milk · leche parcialmente descremada pasteurizada, pasteurized partly skimmed milk, leche parcialmente descremada, partly skimmed milk
- azúcar de caña / cane sugar · azúcar de caña, cane sugar
- leche en polvo descremada / skimmed milk powder · leche en polvo descremada, skimmed milk powder, leche descremada en polvo, skim milk powder
- almidón modificado de maíz / modified corn starch · almidón modificado de maíz, modified corn starch, almidón modificado
- gelatina / gelatin · gelatina, gelatin
- cultivos lácticos / lactic cultures · cultivos lácticos, lactic cultures, cultivos lácticos
- Lactobacillus casei / Lactobacillus casei · Lactobacillus casei, Lactobacillus casei, cultivo probiótico Lactobacillus casei
- Bifidobacterium lactis / Bifidobacterium lactis · Bifidobacterium lactis, Bifidobacterium lactis, cultivo probiótico Bifidobacterium lactis
- vitamina A / vitamin A · vitamina A, vitamin A
- vitamina D / vitamin D · vitamina D, vitamin D
- vitamina B12 / vitamin B12 · vitamina B12, vitamin B12, cobalamina, cobalamin
- aromas / flavourings · aromas, flavourings, aroma, flavorings

**Fuente de ingredientes / Ingredient source:** [La Serenísima (fabricante)](https://laserenisimanutricion.com.ar/productos/yogures/firmes-y-cremosos/firme-vainilla-190g/)  
**Fuente de imagen / Image source:** [La Serenísima Nutrición (official)](https://laserenisimanutricion.com.ar/productos/yogures/firmes-y-cremosos/firme-vainilla-190g/)


---

## Argentina catalog expansion — 17 November 2026 (eighth batch)

Added three La Campagnola pantry products with separate, traceable ingredient and package-image sources: BC Mayonnaise (500 g), Tuna Loin in Sunflower Oil (170 g), and Napolitana Tomato Sauce (350 g). Retailer ingredient transcriptions were checked against the matching product listings; allergen-only trailing terms are not treated as scored ingredients.

### Mayonesa BC La Campagnola

- **ID:** `bc-mayonesa-la-campagnola-500g-ar`
- **Foto del envase / Package photo:** [Ver producto / View package](https://pampadirect.com/bc-la-campagnola-mayonesa-classic-mayonnaise-made-with-sunflower-oil-gluten-free-500-g-1-1-lb-pouch-squeeze/)
- **Marca / Brand:** BC · La Campagnola
- **País / Country:** Argentina
- **Mercado / Market:** Argentina
- **Envase / Package:** 500 g
- **Categoría / Category:** `mayonnaise`
- **Estado / Status:** `ready` · **Verificación:** `retailer_label_transcription`
- **Descripción (ES):** Mayonesa clásica BC elaborada con aceite de girasol.
- **Description (EN):** BC classic mayonnaise made with sunflower oil.

**Ingredientes declarados / Declared ingredients**

Agua, aceite vegetal de girasol, almidón modificado, azúcar, vinagre de alcohol, sal, huevo entero deshidratado, jugo de limón concentrado, aromatizante idéntico al natural, acidulante ácido láctico, acidulante ácido fosfórico, estabilizante goma xántica, estabilizante goma guar, conservador sorbato de potasio, secuestrante EDTA, colorante betacaroteno (INS 160a(i)), antioxidante BHA, antioxidante BHT.

**Respuestas aceptadas / Accepted answers**

- agua / water · agua, water
- aceite vegetal de girasol / sunflower vegetable oil · aceite vegetal de girasol, sunflower vegetable oil, aceite de girasol, sunflower oil
- almidón modificado / modified starch · almidón modificado, modified starch
- azúcar / sugar · azúcar, sugar
- vinagre de alcohol / alcohol vinegar · vinagre de alcohol, alcohol vinegar
- sal / salt · sal, salt
- huevo entero deshidratado / dehydrated whole egg · huevo entero deshidratado, dehydrated whole egg, huevo en polvo, egg
- jugo de limón concentrado / concentrated lemon juice · jugo de limón concentrado, concentrated lemon juice
- aromatizante idéntico al natural / nature-identical flavouring · aromatizante idéntico al natural, nature-identical flavouring, aromatizante, flavoring
- ácido láctico / lactic acid · ácido láctico, lactic acid, INS 270
- ácido fosfórico / phosphoric acid · ácido fosfórico, phosphoric acid, INS 338
- goma xántica / xanthan gum · goma xántica, xanthan gum, goma xantana, INS 415
- goma guar / guar gum · goma guar, guar gum, I, N, S,  , 4, 1, 2
- sorbato de potasio / potassium sorbate · sorbato de potasio, potassium sorbate, INS 202
- EDTA / EDTA · EDTA, EDTA, edetato disódico, disodium EDTA
- betacaroteno / beta-carotene · betacaroteno, beta-carotene, INS 160a(i)
- BHA / BHA · BHA, BHA, butilhidroxianisol, butylated hydroxyanisole, INS 320
- BHT / BHT · BHT, BHT, butilhidroxitolueno, butylated hydroxytoluene, INS 321

**Fuente de ingredientes / Ingredient source:** [Jumbo](https://www.jumbo.com.ar/mayonesa-la-campagnola-500-gr-2/p)  
**Fuente de imagen / Image source:** [Pampa Direct](https://pampadirect.com/bc-la-campagnola-mayonesa-classic-mayonnaise-made-with-sunflower-oil-gluten-free-500-g-1-1-lb-pouch-squeeze/)

---

### Lomo de Atún en Aceite La Campagnola

- **ID:** `la-campagnola-lomo-atun-aceite-170g-ar`
- **Foto del envase / Package photo:** [Ver producto / View package](https://pampadirect.com/la-campagnola-tuna-loin-in-oil-170-g-6-0-oz/)
- **Marca / Brand:** La Campagnola
- **País / Country:** Argentina
- **Mercado / Market:** Argentina
- **Envase / Package:** 170 g (125 g escurrido)
- **Categoría / Category:** `canned_fish`
- **Estado / Status:** `ready` · **Verificación:** `retailer_label_transcription`
- **Descripción (ES):** Lomos de atún conservados en aceite de girasol.
- **Description (EN):** Tuna loins preserved in sunflower oil.

**Ingredientes declarados / Declared ingredients**

Atún, aceite vegetal (girasol), sal.

**Respuestas aceptadas / Accepted answers**

- atún / tuna · atún, tuna, atún listado, skipjack tuna
- aceite vegetal de girasol / sunflower vegetable oil · aceite vegetal de girasol, sunflower vegetable oil, aceite de girasol, sunflower oil
- sal / salt · sal, salt

**Fuente de ingredientes / Ingredient source:** [Jumbo](https://www.jumbo.com.ar/atun-la-campagnola-en-aceite-170gr/p)  
**Fuente de imagen / Image source:** [Pampa Direct](https://pampadirect.com/la-campagnola-tuna-loin-in-oil-170-g-6-0-oz/)

---

### Salsa Napolitana La Campagnola

- **ID:** `la-campagnola-salsa-napolitana-350g-ar`
- **Foto del envase / Package photo:** [Ver producto / View package](https://www.masonline.com.ar/salsa-de-tomate-la-campagnola-napolitana-350-g/p)
- **Marca / Brand:** La Campagnola
- **País / Country:** Argentina
- **Mercado / Market:** Argentina
- **Envase / Package:** 350 g
- **Categoría / Category:** `pasta_sauce`
- **Estado / Status:** `ready` · **Verificación:** `retailer_label_transcription`
- **Descripción (ES):** Salsa de tomate estilo napolitana con vegetales y especias.
- **Description (EN):** Neapolitan-style tomato sauce with vegetables and spices.

**Ingredientes declarados / Declared ingredients**

Puré de tomates, tomate en cubos, cebolla, zanahoria, aceite vegetal de girasol, azúcar, sal (0,5%), especias, ajo, aromatizante natural.

**Respuestas aceptadas / Accepted answers**

- puré de tomates / tomato purée · puré de tomates, tomato purée, pure de tomate, tomato puree
- tomate en cubos / diced tomatoes · tomate en cubos, diced tomatoes, tomates en cubos, tomato cubes
- cebolla / onion · cebolla, onion
- zanahoria / carrot · zanahoria, carrot
- aceite vegetal de girasol / sunflower vegetable oil · aceite vegetal de girasol, sunflower vegetable oil, aceite de girasol, sunflower oil
- azúcar / sugar · azúcar, sugar
- sal / salt · sal, salt
- especias / spices · especias, spices
- ajo / garlic · ajo, garlic
- aromatizante natural / natural flavouring · aromatizante natural, natural flavouring, aromatizante, natural flavoring

**Fuente de ingredientes / Ingredient source:** [Jumbo](https://www.jumbo.com.ar/salsa-napol-premium-x-350-gr-la-campagnola/p)  
**Fuente de imagen / Image source:** [Más Online](https://www.masonline.com.ar/salsa-de-tomate-la-campagnola-napolitana-350-g/p)


## Argentina catalog expansion — 17 November 2026 (ninth batch)

Added three products with matching package photographs and separately recorded ingredient declarations: Bagley Kesitas Queso (75 g), Gallo Snacks Chips Queso (50 g), and Cuisine & Co Galletitas Dulces Sabor Leche (260 g). Ingredient declarations come from Jumbo; package photographs are separately sourced from OnCity, Jumbo and Vea. Precautionary allergen statements and repeated allergen-category terms are not scored as ingredients.

### Kesitas Queso

- **ID:** `kesitas-queso-75g-ar`
- **Package photo:** [View package / Ver envase](https://www.oncity.com/galletitas-kesitas-snack-saladas-con-queso-paquete-75-grs-95876/p)
- **Brand:** Bagley · Kesitas
- **Country:** Argentina
- **Market:** Argentina
- **Package:** 75 g
- **Category:** `cheese_crackers`
- **Status:** `ready` · **Verification:** `retailer_label_transcription`
- **Description (ES):** Galletitas saladas horneadas con queso azul y sabor a queso.
- **Description (EN):** Baked savory crackers made with blue cheese and cheese flavour.

**Declared ingredients / Ingredientes declarados**

Harina de trigo, hierro, ácido fólico, tiamina, riboflavina, niacina, aceite de girasol alto oleico, grasa bovina refinada, sal, queso azul (1%), jarabe de glucosa, paprika, leudante químico bicarbonato de amonio, leudante químico fosfato monocálcico, leudante químico bicarbonato de sodio, emulsionante lecitina de soja/soya, mejorador de harina metabisulfito de sodio, aromatizante artificial aroma queso, sulfitos. La página también enumera sulfitos y derivados de trigo, leche y soja como declaraciones de alérgenos; no se puntúan por separado.

**Accepted answers / Respuestas aceptadas**

- harina de trigo / wheat flour · harina de trigo, wheat flour
- hierro / iron · hierro, iron
- ácido fólico / folic acid · ácido fólico, folic acid
- tiamina / thiamine · tiamina, thiamine, vitamina B1, vitamin B1
- riboflavina / riboflavin · riboflavina, riboflavin, vitamina B2, vitamin B2
- niacina / niacin · niacina, niacin
- aceite de girasol alto oleico / high-oleic sunflower oil · aceite de girasol alto oleico, high-oleic sunflower oil, aceite alto oleico, high oleic sunflower oil
- grasa bovina refinada / refined beef fat · grasa bovina refinada, refined beef fat
- sal / salt · sal, salt
- queso azul / blue cheese · queso azul, blue cheese
- jarabe de glucosa / glucose syrup · jarabe de glucosa, glucose syrup
- paprika / paprika · paprika, paprika, pimentón
- bicarbonato de amonio / ammonium bicarbonate · bicarbonato de amonio, ammonium bicarbonate
- fosfato monocálcico / monocalcium phosphate · fosfato monocálcico, monocalcium phosphate
- bicarbonato de sodio / sodium bicarbonate · bicarbonato de sodio, sodium bicarbonate
- lecitina de soja / soy lecithin · lecitina de soja, soy lecithin
- metabisulfito de sodio / sodium metabisulfite · metabisulfito de sodio, sodium metabisulfite
- aromatizante artificial sabor queso / artificial cheese flavouring · aromatizante artificial sabor queso, artificial cheese flavouring, aroma queso, cheese flavouring

**Ingredient source:** [Bagley · Kesitas listing](https://www.jumbo.com.ar/galletitas-kesitas-75-gr/p)  
**Image source:** [OnCity](https://www.oncity.com/galletitas-kesitas-snack-saladas-con-queso-paquete-75-grs-95876/p)

### Gallo Snacks Chips Queso

- **ID:** `gallo-chips-queso-50g-ar`
- **Package photo:** [View package / Ver envase](https://www.jumbo.com.ar/galletitas-snacks-gallo-queso-50g/p)
- **Brand:** Gallo
- **Country:** Argentina
- **Market:** Argentina
- **Package:** 50 g
- **Category:** `rice_snacks`
- **Status:** `ready` · **Verification:** `retailer_label_transcription`
- **Description (ES):** Snack horneado de arroz sabor queso.
- **Description (EN):** Cheese-flavoured baked rice snack.

**Declared ingredients / Ingredientes declarados**

Harina de arroz, grasa vacuna refinada, almidón de maíz, leche descremada, sal, azúcar, aceite de girasol, aromatizante/saborizante, colorante betacaroteno, colorante amarillo ocaso, emulsionante ésteres de ácidos grasos con poliglicerol, emulsionante mono y diglicéridos de ácidos grasos, emulsionante polioxietilen sorbitán monooleato, antioxidante tocoferoles concentrado mezcla, antioxidante ter butil hidroquinona. La mención final «leche» corresponde a la declaración de alérgeno y no se cuenta dos veces; «derivados de soja» aparece como puede contener.

**Accepted answers / Respuestas aceptadas**

- harina de arroz / rice flour · harina de arroz, rice flour
- grasa vacuna refinada / refined beef fat · grasa vacuna refinada, refined beef fat
- almidón de maíz / corn starch · almidón de maíz, corn starch, fécula de maíz, cornstarch
- leche descremada / skimmed milk · leche descremada, skimmed milk, leche desnatada
- sal / salt · sal, salt
- azúcar / sugar · azúcar, sugar
- aceite de girasol / sunflower oil · aceite de girasol, sunflower oil
- aromatizante/saborizante / flavouring · aromatizante/saborizante, flavouring, aromatizante, saborizante, flavoring
- betacaroteno / beta-carotene · betacaroteno, beta-carotene, colorante betacaroteno
- amarillo ocaso / sunset yellow · amarillo ocaso, sunset yellow, amarillo ocaso FCF, E110
- ésteres de ácidos grasos con poliglicerol / polyglycerol esters of fatty acids · ésteres de ácidos grasos con poliglicerol, polyglycerol esters of fatty acids, ésteres de poliglicerol
- mono y diglicéridos de ácidos grasos / mono- and diglycerides of fatty acids · mono y diglicéridos de ácidos grasos, mono- and diglycerides of fatty acids, mono y diglicéridos
- polisorbato 80 / polysorbate 80 · polisorbato 80, polysorbate 80, polioxietilen sorbitán monooleato
- tocoferoles concentrados / concentrated tocopherols · tocoferoles concentrados, concentrated tocopherols, tocoferoles
- terbutil hidroquinona / tertiary butylhydroquinone · terbutil hidroquinona, tertiary butylhydroquinone, TBHQ, ter butil hidroquinona

**Ingredient source:** [Gallo listing](https://www.jumbo.com.ar/galletitas-snacks-gallo-queso-50g/p)  
**Image source:** [Jumbo](https://www.jumbo.com.ar/galletitas-snacks-gallo-queso-50g/p)

### Galletitas Dulces Sabor Leche Cuisine & Co

- **ID:** `cuisine-co-galletitas-leche-260g-ar`
- **Package photo:** [View package / Ver envase](https://www.vea.com.ar/galletitas-dulces-sabor-leche-260-grs-cuisine-co/p)
- **Brand:** Cuisine & Co
- **Country:** Argentina
- **Market:** Argentina
- **Package:** 260 g
- **Category:** `sweet_cookies`
- **Status:** `ready` · **Verification:** `retailer_label_transcription`
- **Description (ES):** Galletitas dulces sabor leche, de industria argentina.
- **Description (EN):** Sweet milk-flavoured biscuits made in Argentina.

**Declared ingredients / Ingredientes declarados**

Harina de trigo 000, hierro, ácido fólico, tiamina (B1), riboflavina (B2), niacina, azúcar, grasa bovina refinada, jarabe de alta fructosa, suero de leche, sal, leudante químico INS 503(ii), leudante químico INS 450(i), emulsionante INS 322, mejorador INS 223, mejorador INS 1100, mejorador INS 1101(i), esencia de leche condensada idéntica a natural, esencia artificial de vainilla. La página agrega derivados de trigo, leche y soja como declaración de alérgenos.

**Accepted answers / Respuestas aceptadas**

- harina de trigo 000 / wheat flour 000 · harina de trigo 000, wheat flour 000, harina de trigo, wheat flour
- hierro / iron · hierro, iron
- ácido fólico / folic acid · ácido fólico, folic acid
- tiamina / thiamine · tiamina, thiamine, vitamina B1, vitamin B1
- riboflavina / riboflavin · riboflavina, riboflavin, vitamina B2, vitamin B2
- niacina / niacin · niacina, niacin
- azúcar / sugar · azúcar, sugar
- grasa bovina refinada / refined beef fat · grasa bovina refinada, refined beef fat
- jarabe de alta fructosa / high-fructose syrup · jarabe de alta fructosa, high-fructose syrup, jarabe de maíz de alta fructosa, high-fructose corn syrup
- suero de leche / whey · suero de leche, whey, suero lácteo
- sal / salt · sal, salt
- bicarbonato de amonio (INS 503(ii)) / ammonium bicarbonate (INS 503(ii)) · bicarbonato de amonio (INS 503(ii)), ammonium bicarbonate (INS 503(ii)), INS 503(ii)
- difosfato disódico (INS 450(i)) / disodium diphosphate (INS 450(i)) · difosfato disódico (INS 450(i)), disodium diphosphate (INS 450(i)), INS 450(i)
- lecitina (INS 322) / lecithin (INS 322) · lecitina (INS 322), lecithin (INS 322), INS 322
- metabisulfito de sodio (INS 223) / sodium metabisulfite (INS 223) · metabisulfito de sodio (INS 223), sodium metabisulfite (INS 223), INS 223
- amilasas (INS 1100) / amylases (INS 1100) · amilasas (INS 1100), amylases (INS 1100), amilasas, amylases, INS 1100
- proteasa (INS 1101(i)) / protease (INS 1101(i)) · proteasa (INS 1101(i)), protease (INS 1101(i)), proteasa, protease, INS 1101(i)
- esencia de leche condensada idéntica a natural / nature-identical condensed milk flavouring · esencia de leche condensada idéntica a natural, nature-identical condensed milk flavouring, esencia de leche condensada
- esencia artificial de vainilla / artificial vanilla flavouring · esencia artificial de vainilla, artificial vanilla flavouring, esencia de vainilla, vanilla essence

**Ingredient source:** [Cuisine & Co listing](https://www.jumbo.com.ar/galletitas-dulces-sabor-leche-260-grs-cuisine-co/p)  
**Image source:** [Vea](https://www.vea.com.ar/galletitas-dulces-sabor-leche-260-grs-cuisine-co/p)


## Argentina catalog expansion — 17 November 2026 (tenth batch)

Added four products: Gallo Snacks Chips Jamón 150 g, Don Satur Pepas 300 g, Trio Pepas 500 g, and Smams Pepas Membrillo 150 g. The first three ingredient declarations are transcribed from Jumbo; Smams ingredients use the manufacturer's official declaration because retailer text differs. Each package photograph has a separate image source record. Allergen-only statements and precautionary traces are excluded from accepted answers.

### Chips Gallo Snacks Sabor Jamón

- **ID:** `gallo-chips-jamon-150g-ar`
- **Package photo:** [View package / Ver envase](https://www.masonline.com.ar/chips-gallo-snacks-sabor-jamon-150-g-2/p)
- **Brand:** Gallo Snacks
- **Country:** Argentina
- **Market:** Argentina
- **Package:** 150 g
- **Category:** `rice_snacks`
- **Status:** `ready` · **Verification:** `retailer_label_transcription`
- **Description (ES):** Snack crocante y horneado a base de arroz, sabor jamón.
- **Description (EN):** Crunchy baked rice snack with ham flavour.

**Declared ingredients / Ingredientes declarados**

Harina de arroz, grasa vacuna refinada, almidón de maíz, leche descremada, sal, azúcar, aceite de girasol, aromatizante/saborizante, ésteres de ácidos grasos con poliglicerol, mono y diglicéridos de ácidos grasos, polioxietilen sorbitán monooleato, tocoferoles concentrados mezcla, terbutil hidroquinona, colorante caramelo IV. La mención final «leche» se trata como declaración de alérgeno repetida y «puede contener derivados de soja» no se puntúa.

**Accepted answers / Respuestas aceptadas**

- harina de arroz / rice flour · harina de arroz, rice flour
- grasa vacuna refinada / refined beef fat · grasa vacuna refinada, refined beef fat
- almidón de maíz / corn starch · almidón de maíz, corn starch, fécula de maíz, cornstarch
- leche descremada / skimmed milk · leche descremada, skimmed milk
- sal / salt · sal, salt
- azúcar / sugar · azúcar, sugar
- aceite de girasol / sunflower oil · aceite de girasol, sunflower oil
- aromatizante/saborizante / flavouring · aromatizante/saborizante, flavouring, aromatizante, saborizante, flavoring
- ésteres de ácidos grasos con poliglicerol / polyglycerol esters of fatty acids · ésteres de ácidos grasos con poliglicerol, polyglycerol esters of fatty acids, ésteres de poliglicerol
- mono y diglicéridos de ácidos grasos / mono- and diglycerides of fatty acids · mono y diglicéridos de ácidos grasos, mono- and diglycerides of fatty acids, mono y diglicéridos
- polisorbato 80 / polysorbate 80 · polisorbato 80, polysorbate 80, polioxietilen sorbitán monooleato
- tocoferoles concentrados mezcla / mixed concentrated tocopherols · tocoferoles concentrados mezcla, mixed concentrated tocopherols, tocoferoles
- terbutil hidroquinona / tertiary butylhydroquinone · terbutil hidroquinona, tertiary butylhydroquinone, TBHQ, ter butil hidroxiquinona
- colorante caramelo IV / caramel colour IV · colorante caramelo IV, caramel colour IV, caramelo IV, caramel color IV

**Ingredient source:** [Gallo Snacks listing](https://www.jumbo.com.ar/chips-gallo-snacks-arroz-jamon-x150g/p)  
**Image source:** [Más Online](https://www.masonline.com.ar/chips-gallo-snacks-sabor-jamon-150-g-2/p)

### Pepas Don Satur

- **ID:** `don-satur-pepas-membrillo-300g-ar`
- **Package photo:** [View package / Ver envase](https://www.masonline.com.ar/galletitas-dulces-pepas-don-satur-300-g-2/p)
- **Brand:** Don Satur
- **Country:** Argentina
- **Market:** Argentina
- **Package:** 300 g
- **Category:** `sweet_cookies`
- **Status:** `ready` · **Verification:** `retailer_label_transcription`
- **Description (ES):** Galletitas dulces argentinas con centro de mermelada de membrillo.
- **Description (EN):** Argentine sweet biscuits with a quince jam centre.

**Declared ingredients / Ingredientes declarados**

Harina de trigo enriquecida, hierro, ácido fólico, tiamina, riboflavina, niacina, azúcar, oleomargarina, mermelada de membrillo, colorante rojo allura AC (INS 129), agua, esencia de vainilla, colorante natural amarillo annatto (INS 160b). Se excluyen «derivados de trigo» y «sulfitos» porque aparecen como declaraciones de alérgenos; «soya» figura como puede contener.

**Accepted answers / Respuestas aceptadas**

- harina de trigo enriquecida / enriched wheat flour · harina de trigo enriquecida, enriched wheat flour, harina de trigo, wheat flour
- hierro / iron · hierro, iron
- ácido fólico / folic acid · ácido fólico, folic acid
- tiamina / thiamine · tiamina, thiamine, vitamina B1, vitamin B1
- riboflavina / riboflavin · riboflavina, riboflavin, vitamina B2, vitamin B2
- niacina / niacin · niacina, niacin
- azúcar / sugar · azúcar, sugar
- oleomargarina / oleomargarine · oleomargarina, oleomargarine
- mermelada de membrillo / quince jam · mermelada de membrillo, quince jam, dulce de membrillo, quince paste
- rojo allura AC (INS 129) / allura red AC (INS 129) · rojo allura AC (INS 129), allura red AC (INS 129), rojo allura, allura red, E129, INS 129
- agua / water · agua, water
- esencia de vainilla / vanilla flavouring · esencia de vainilla, vanilla flavouring, aroma de vainilla, vanilla essence
- amarillo annatto (INS 160b) / annatto yellow (INS 160b) · amarillo annatto (INS 160b), annatto yellow (INS 160b), annatto, achiote, E160b, INS 160b

**Ingredient source:** [Don Satur listing](https://www.jumbo.com.ar/pepas-don-satur-x300gr/p)  
**Image source:** [Más Online](https://www.masonline.com.ar/galletitas-dulces-pepas-don-satur-300-g-2/p)

### Pepas Trio

- **ID:** `trio-pepas-membrillo-500g-ar`
- **Package photo:** [View package / Ver envase](https://www.masonline.com.ar/galletitas-pepas-trio-500-gr-2/p)
- **Brand:** Trio
- **Country:** Argentina
- **Market:** Argentina
- **Package:** 500 g
- **Category:** `sweet_cookies`
- **Status:** `ready` · **Verification:** `retailer_label_transcription`
- **Description (ES):** Pepas dulces con mermelada de membrillo en paquete familiar.
- **Description (EN):** Family-size sweet thumbprint biscuits with quince jam.

**Declared ingredients / Ingredientes declarados**

Harina 000, hierro, ácido fólico, tiamina (B1), riboflavina (B2), niacina, mermelada de membrillo, acidulante ácido cítrico (INS 330), aromatizante a membrillo, colorante rojo allura AC (INS 129), azúcar, oleomargarina bovina, almidón de maíz, leche entera en polvo, aromatizante a vainilla, leudante bicarbonato de amonio (INS 503(ii)), emulsionante lecitina (INS 322), colorante curcumina (INS 100(i)), colorante annatto (INS 160b). La mención final «leche» y los derivados de trigo/soja se excluyen como declaraciones de alérgenos.

**Accepted answers / Respuestas aceptadas**

- harina de trigo 000 / wheat flour 000 · harina de trigo 000, wheat flour 000, harina 000, wheat flour
- hierro / iron · hierro, iron
- ácido fólico / folic acid · ácido fólico, folic acid
- tiamina / thiamine · tiamina, thiamine, vitamina B1, vitamin B1
- riboflavina / riboflavin · riboflavina, riboflavin, vitamina B2, vitamin B2
- niacina / niacin · niacina, niacin
- mermelada de membrillo / quince jam · mermelada de membrillo, quince jam, dulce de membrillo, quince paste
- ácido cítrico (INS 330) / citric acid (INS 330) · ácido cítrico (INS 330), citric acid (INS 330), ácido cítrico, citric acid, E330, INS 330
- aromatizante a membrillo / quince flavouring · aromatizante a membrillo, quince flavouring, aroma a membrillo, quince flavoring
- rojo allura AC (INS 129) / allura red AC (INS 129) · rojo allura AC (INS 129), allura red AC (INS 129), rojo allura, allura red, E129, INS 129
- azúcar / sugar · azúcar, sugar
- oleomargarina bovina / beef oleomargarine · oleomargarina bovina, beef oleomargarine
- almidón de maíz / corn starch · almidón de maíz, corn starch, fécula de maíz, cornstarch
- leche entera en polvo / whole milk powder · leche entera en polvo, whole milk powder, leche en polvo, milk powder
- aromatizante a vainilla / vanilla flavouring · aromatizante a vainilla, vanilla flavouring, esencia de vainilla, vanilla flavoring
- bicarbonato de amonio (INS 503(ii)) / ammonium bicarbonate (INS 503(ii)) · bicarbonato de amonio (INS 503(ii)), ammonium bicarbonate (INS 503(ii)), bicarbonato de amonio, ammonium bicarbonate, E503(ii), INS 503(ii)
- lecitina (INS 322) / lecithin (INS 322) · lecitina (INS 322), lecithin (INS 322), lecitina, lecithin, E322, INS 322
- curcumina (INS 100(i)) / curcumin (INS 100(i)) · curcumina (INS 100(i)), curcumin (INS 100(i)), curcumina, curcumin, E100(i), INS 100(i)
- annatto (INS 160b) / annatto colour (INS 160b) · annatto (INS 160b), annatto colour (INS 160b), annatto, achiote, E160b, INS 160b

**Ingredient source:** [Trio listing](https://www.jumbo.com.ar/pepas-trio-500-gr/p)  
**Image source:** [Más Online](https://www.masonline.com.ar/galletitas-pepas-trio-500-gr-2/p)

### Pepas con Membrillo Smams

- **ID:** `smams-pepas-membrillo-150g-ar`
- **Package photo:** [View package / Ver envase](https://rojasglutenfree.com/productos/pepas-de-membrillo-150gr-smams/)
- **Brand:** Smams
- **Country:** Argentina
- **Market:** Argentina
- **Package:** 150 g
- **Category:** `gluten_free_cookies`
- **Status:** `ready` · **Verification:** `manufacturer_ingredient_declaration`
- **Description (ES):** Pepas sin TACC rellenas con dulce de membrillo.
- **Description (EN):** Gluten-free thumbprint cookies filled with quince paste.

**Declared ingredients / Ingredientes declarados**

Dulce de membrillo, almidón de maíz, aceite vegetal interesterificado, azúcar, harina de arroz, agua, jarabe de glucosa, jarabe de maíz de alta fructosa, miel, sal, emulsionante lecitina de soja, espesante goma xántica, leudantes químicos bicarbonato de sodio y bicarbonato de amonio, conservante propionato de calcio, aromatizantes esencia de vainilla y leche condensada. Se usa la declaración de ingredientes publicada por el fabricante; las advertencias de posibles trazas de alérgenos se excluyen.

**Accepted answers / Respuestas aceptadas**

- dulce de membrillo / quince paste · dulce de membrillo, quince paste, mermelada de membrillo, quince jam
- almidón de maíz / corn starch · almidón de maíz, corn starch, fécula de maíz, cornstarch
- aceite vegetal interesterificado / interesterified vegetable oil · aceite vegetal interesterificado, interesterified vegetable oil
- azúcar / sugar · azúcar, sugar
- harina de arroz / rice flour · harina de arroz, rice flour
- agua / water · agua, water
- jarabe de glucosa / glucose syrup · jarabe de glucosa, glucose syrup
- jarabe de maíz de alta fructosa / high-fructose corn syrup · jarabe de maíz de alta fructosa, high-fructose corn syrup, jarabe de alta fructosa, high-fructose syrup
- miel / honey · miel, honey
- sal / salt · sal, salt
- lecitina de soja / soy lecithin · lecitina de soja, soy lecithin, lecitina de soya, soya lecithin
- goma xántica / xanthan gum · goma xántica, xanthan gum, goma xanthan, xanthan
- bicarbonato de sodio / sodium bicarbonate · bicarbonato de sodio, sodium bicarbonate, baking soda, E500(ii)
- bicarbonato de amonio / ammonium bicarbonate · bicarbonato de amonio, ammonium bicarbonate, E503(ii)
- propionato de calcio / calcium propionate · propionato de calcio, calcium propionate, E282
- esencia de vainilla / vanilla flavouring · esencia de vainilla, vanilla flavouring, aroma de vainilla, vanilla essence
- esencia de leche condensada / condensed milk flavouring · esencia de leche condensada, condensed milk flavouring, aroma de leche condensada

**Ingredient source:** [Smams listing](https://www.smams.ar/index.php/productos/pepas-membrillo-detail)  
**Image source:** [Rojas Gluten Free](https://rojasglutenfree.com/productos/pepas-de-membrillo-150gr-smams/)
