# WHAT'S INSIDE? — Curated product catalog

The game reads playable products from `products.json`. A product is eligible when `status` is `ready`.

## Editorial policy

- Catalog products are tied to a specific market and, whenever possible, an exact package size / barcode.
- Use manufacturer sources first. Retailer pages are acceptable when they reproduce the product's ingredient declaration and no better manufacturer source is available.
- Open Food Facts is a discovery aid, not the source of truth for our curated ingredient statements.
- Preserve the ingredient statement in `ingredientsText`; `ingredients` is the normalized answer list used by the game.
- Ingredient answers include English and Spanish names. Aliases must be genuine synonyms, not broad guesses.
- Do not mix ingredients, allergens, traces, nutrition facts, or taxonomy tags. “May contain” statements are not game answers.
- Keep country, package size, source, and source quality explicit. A brand name alone is not a sufficiently precise product identity.
- If the source does not identify a complete ingredient statement, mark the product `pending` until it is researched further.
- Ingredient order follows the source statement. Subcomponents inside compound ingredients should be captured in the raw statement and progressively modeled as nested components; do not silently invent them.

## Data files

- `products.json`: product identity, source transcription, ingredient answer list and game metadata.
- `sources.json`: source register, publisher, URL, source type, and the claims each source supports.

## Source quality labels

- `manufacturer_website`: manufacturer-published information.
- `retailer_label_transcription`: retailer listing that reproduces the label.
- `packaging_transcription_secondary`: secondary transcription of packaging / Open Food Facts data.

The Argentina catalog currently contains 20 products. The source register makes clear which entries come directly from manufacturers and which rely on retailer or secondary transcriptions. Review package variants again before using the catalog for commercial or safety-critical claims.


## Regional catalogs

- `products.json` + `sources.json`: Argentina-market edition. The game presents this catalog under 🇦🇷 Argentina.
- `products-world.json` + `sources-world.json`: international edition. Each record names the country/market whose label is represented (for example, US Coca-Cola is not interchangeable with Argentine Coca-Cola).
- `region` is a game/catalog grouping (`argentina` or `world`); `country` and `market` preserve the actual origin and market of the specific label.
- Never merge two regional recipes merely because the brand/product name matches. A separate market/package record and source are required when ingredients differ.
- The World catalog currently starts with 8 products from Italy, the United States and Switzerland. It is a curated starter set, not a claim of worldwide coverage.
- World products are sourced from manufacturer/brand ingredient pages. Package size is included when the source identifies it; where a product page is variant-based, the package is marked as a market reference and must be rechecked against a physical label before expanding.


## World catalog expansion — 16 November 2026

The World catalog now contains 18 product records. New US-market products include Cheerios, Froot Loops, Frosted Flakes, Campbell's Tomato Soup, Campbell's Chicken Noodle Soup, SNICKERS, RITZ, Lay's Classic, Doritos Nacho Cheese (explicitly a school-foodservice formulation), and REESE'S Snack Size Cups. Ingredient source quality is recorded per product; some entries use retailer label transcription or foodservice documentation and must not be generalized to every package or market. All game answers include Spanish and English labels and aliases.


## Registro maestro / Master register

El archivo [`catalog-master.md`](./catalog-master.md) reúne todas las fichas de productos de Argentina y World, sus ingredientes declarados, las respuestas aceptadas en español e inglés, alias y fuentes. Actualizarlo en cada tanda junto con los JSON.

The [`catalog-master.md`](./catalog-master.md) file consolidates every Argentina and World product, declared ingredients, accepted Spanish and English answers, aliases, and sources. Update it with every new batch alongside the JSON files.


## World catalog expansion — 16 November 2026 (continued)

Added 10 further World records: Kikkoman Soy Sauce (India-market), New Yakult (Japan), Nissin Cup Noodles Chicken (US), Oishi Prawn Crackers Original (Philippines), Sanpellegrino Aranciata (Italy), Pringles Paprika (Germany), Glico Tomato Pretz (Japan), MILO Powder (Australia), Chupa Chups Fruit Lollipops (Spain), and MAGGI Hot & Sweet Tomato Chilli Sauce (India). Source types are recorded per item. Nissin's compound flour enrichment and flavour subcomponents are represented in accepted answers; Chupa Chups record applies only to fruit flavours; Oishi precautionary facility statements and Pringles may-contain soy are excluded. MAGGI ingredients rely on a retailer transcription, not a complete manufacturer ingredient page.


## World catalog expansion — 16 November 2026 (milestone batch)

Added 10 records: ColaCao Original (Spain), Goya Black Beans (US), Calbee Jagabee Plain (Japan), Tajín Clásico (Mexico brand / US market), Want Want Seaweed Rice Crackers (Taiwan/China), Want Want Shelly Senbei (China-origin Singapore retail listing), SKITTLES Original (US), Ülker Halley (Turkey), Marmite Yeast Extract (UK), and Pure Canadian Maple Syrup (Canada). Source quality is item-specific. Want Want Shelly Senbei and Ülker Halley use retailer label transcriptions; SKITTLES uses a Mars Wrigley specification PDF hosted by a foodservice retailer. The maple syrup record intentionally does not claim a package size.


## World catalog expansion — 16 November 2026 (100-product milestone)

Added KEWPIE Japanese Mayonnaise (Japan; official KEWPIE shop ingredient listing for the 450 g Japanese-origin product) and Parle-G (India; detailed ingredient declaration from a secondary pack transcription, with the brand family confirmed on Parle's official site). The KEWPIE record is specifically the Japanese-origin formulation, not the separate US-made recipe. Parle-G's package size is not fixed in the catalog because pack sizes vary. Both products include Spanish and English accepted answers and aliases; source quality is explicitly recorded per product.
