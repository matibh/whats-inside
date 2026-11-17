# WHAT'S INSIDE?

A bilingual 15-second food-ingredient game: see a real packaged product and name as many of its ingredients as possible.

## Current catalog

- **200 curated products**: 80 Argentina-market products and 120 international products.
- Spanish and English ingredient answers, with accepted aliases.
- Product images and their provenance are tracked separately from ingredient declarations.
- Argentina and World catalogs live in `data/products.json` and `data/products-world.json`.
- Product additions are curated; Open Food Facts is a discovery aid, not a live runtime dependency.

## Current game

- 15-second rounds, English / Spanish interface.
- Enter ingredients separated by commas; both languages and curated aliases are accepted.
- 100 points per correct ingredient; duplicate and incorrect answers do not score.
- Results show found and missed ingredients, percentage, score, and sharing.
- Dark theme preference is saved locally.
- The current production game selects a random product from the chosen market. It is **not yet** the shared Daily Challenge or Practice archive.

## Product roadmap

1. Global Daily Challenge: one product shared by everyone each day, using the `America/Argentina/Buenos_Aires` date.
2. Practice: unlimited replay of archived challenges, with category and market filters.
3. Optional accounts: guests can play; signed-in players can save Daily results and appear in leaderboards.
4. Leaderboards, daily streaks, achievements, ingredient mastery, and spoiler-free share cards.

## Backend foundation

The Supabase schema and setup notes are in `supabase/` and `docs/backend-setup.md`.

**Important security note:** the existing static product JSON contains ingredient answers. A competitive Daily must not launch until answer keys are moved out of public assets and validation happens in a server-side Edge Function. Never commit database passwords, Supabase service-role keys, or other secrets.

## Deploy

The current site is published with GitHub Pages through GitHub Actions. The existing deployment workflow publishes the repository root on pushes to `main`.

## Run locally

The current static version loads JSON with `fetch()`, so do not open `index.html` directly via `file://`. Serve the repository over HTTP, for example:

```bash
python -m http.server 8000
```

Then open http://localhost:8000.

## Development status

The backend work is being developed on `feature/daily-challenge`; the published `main` branch remains unchanged until the work is reviewed and merged.
