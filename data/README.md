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

The first batch contains 10 Argentine-market products. The products are useful as a working catalog, but the source register makes clear which entries come directly from manufacturers and which rely on retailer or secondary transcriptions. Review package variants again before using the catalog for commercial or safety-critical claims.
