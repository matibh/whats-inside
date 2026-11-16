# Product catalog

The game loads its playable products from `products.json`. A product is playable only when its `status` is `ready`.

## Curation rules

- Prefer the exact market/packaging variant shown in the game.
- Record the full ingredient statement as printed by the manufacturer.
- Keep ingredient answers aligned with the label; do not infer ingredients from nutrition data, allergens, or similar products.
- Add English and Spanish aliases only when they are genuinely equivalent to a printed ingredient.
- Do not accept broad guesses that are not on the label (for example, an allergen is not automatically an ingredient answer).
- Save the manufacturer/source URL and image source for every product.
- Keep products with incomplete or ambiguous labels out of gameplay using `status: "pending"`.

## Current product

Nutella is the first playable entry. Its ingredient wording is based on Ferrero's Cono Sur product page. The package image is sourced from Open Food Facts; the barcode currently identifies the image record and should not be treated as proof that the photographed package is the exact Argentine-market variant.

Open Food Facts is a community-maintained database. Its API is useful for discovery and images, but each product must be checked against a manufacturer label before being marked ready.
