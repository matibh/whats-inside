# WHAT'S INSIDE?

A fast bilingual daily game about guessing the ingredients in real food products.

## Current catalog

- **150 curated products**: 30 Argentina-market products and 120 international products.
- Spanish and English ingredient answers, with accepted aliases.
- Real product/package photos with separate image-source records.
- Ingredient statements and image provenance are tracked in `data/sources.json` and `data/sources-world.json`.
- The Argentina and World catalogs are maintained separately in `data/products.json` and `data/products-world.json`.
- Product additions are curated and checked; Open Food Facts is a discovery/source record, not a live runtime dependency.

## Game

- 15-second rounds
- English / Spanish interface
- Ingredient entry separated by commas
- Instant feedback and scoring
- Results reveal found and missed ingredients
- Dark theme with saved preference

## Deploy

This repository is published with GitHub Pages using GitHub Actions. Every push to `main` triggers a deployment.

## Run locally

Open `index.html` in a browser.
