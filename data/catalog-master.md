# WHAT'S INSIDE? — Registro maestro de productos / Master product register

Documento humano de control editorial. Se actualiza junto con los JSON cada vez que se agrega o modifica un producto. Los JSON siguen siendo los datos que consume el juego; este Markdown permite auditar los productos, ingredientes aceptados y fuentes.

Human-readable editorial register. Update alongside the JSON files whenever products are added or changed. JSON remains the game's data source; this file provides an audit trail.

- **Última actualización / Last updated:** 2026-11-16
- **Productos / Products:** 38
- **Argentina:** 20
- **World:** 18
- **Idiomas / Languages:** Español + English

## Reglas / Rules

1. Una ficha representa una presentación y mercado concretos; no mezclar fórmulas de países distintos.
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
- **Marca / Brand:** La Serenísima
- **País / Country:** Argentina
- **Mercado / Market:** Argentina
- **Envase / Package:** 1300 g
- **Categoría / Category:** `yogurt`
- **Barcode:** No registrado / Not recorded
- **Estado / Status:** `ready` · **Verificación:** `manufacturer_website`
- **Descripción (ES):** Yogur bebible de frutilla · ¿Qué ingredientes tiene?
- **Description (EN):** Strawberry drinkable yogurt · What's inside?

**Ingredientes declarados / Declared ingredients**

Leche parcialmente descremada pasteurizada, solución de sacarosa, gelatina, cultivos lácticos, cultivos probióticos (Lactobacillus casei DN-114 001, Bifidobacterium lactis DN-173 010), vitaminas A, D y B12, estabilizante (pectina extraída de cítricos), aromas, colorante natural carmín. CONTIENE LECHE.

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
- **Marca / Brand:** Toddy
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
- **Marca / Brand:** Maná · Bagley
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
- **Marca / Brand:** Jorgito
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
- **Marca / Brand:** Jorgito
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
- **Marca / Brand:** Mantecol
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

## World

### Nutella / Nutella

- **ID:** `nutella-italy-400g`
- **Marca / Brand:** Ferrero
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
- **Marca / Brand:** The Coca-Cola Company
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
- **Marca / Brand:** Mondelēz International
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
- **Marca / Brand:** Toblerone
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
- **Marca / Brand:** Hershey / Kit Kat
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
- **Marca / Brand:** General Mills
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
- **Marca / Brand:** WK Kellogg Co
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
- **Marca / Brand:** WK Kellogg Co
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
- **Marca / Brand:** Frito-Lay
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
- **Marca / Brand:** Frito-Lay
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
- **Marca / Brand:** The Hershey Company
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

