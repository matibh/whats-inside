# WHAT'S INSIDE?

A bilingual 15-second food-ingredient game: see a real packaged product and name as many of its ingredients as possible.

## Catalog architecture

- The canonical editorial catalog is maintained in the private repository: [matibh/whats-inside-catalog](https://github.com/matibh/whats-inside-catalog).
- It contains the bilingual master register, Argentina and World product JSON files, and their ingredient / image source registries.
- This public repository retains the historical 200-product catalog (80 Argentina, 120 World) for Practice compatibility and audit history. Its answers have been public in files and Git history; these products are permanently Practice-only and must never be made Daily-eligible.
- New products intended for competitive Daily must be curated in the private catalog, imported into Supabase's protected answer store, and exposed to the browser only as safe metadata.
- Whenever a batch is added or corrected, update the private JSON catalogs, source registries, and `data/catalog-master.md` together.

## Current game

- 15-second rounds, English / Spanish interface.
- Enter ingredients separated by commas; both languages and curated aliases are accepted.
- 100 points per correct ingredient; duplicate and incorrect answers do not score.
- Results show found and missed ingredients, percentage, score, and sharing.
- Dark theme preference is saved locally.
- The existing published game still uses a random product from the selected market. It is not yet the connected Daily / Practice experience.

## Product roadmap

1. **Daily Challenge** — one shared product per day, using the `America/Argentina/Buenos_Aires` calendar.
2. **Practice** — replay archived products with market and category filters.
3. **Optional accounts** — guests can explore; sign-in is required for official Daily attempts and rankings.
4. **Progression** — Daily streaks, achievements, ingredient mastery, and spoiler-free share cards.
5. **Leaderboards** — today's ranking and all-time points.

## Backend status

The Supabase project **Ingredora** is provisioned in São Paulo (`sa-east-1`). The schema, private answer storage, Daily session model, achievement definitions, and six Edge Functions have been deployed to the development project.

Edge Functions:

- `daily-challenge`
- `start-daily`
- `submit-daily`
- `practice-catalog`
- `submit-practice`
- `leaderboard`

The matching source files and applied migrations are tracked under `supabase/`. The 200 historical products and 2,933 ingredient records have been imported for Practice (public-safe metadata in `public.products`, answer records in `private.product_answers`). All historical products have `daily_eligible = false`. No Daily challenges have been scheduled, and the new frontend is not live.

### Critical answer-key security requirement

The public repository still contains the historical answer-bearing catalog files and their Git history. Moving the canonical catalog to a private repository does not erase those public copies.

**Do not launch a competitive Daily using any of the historical 200 products.** New Daily-eligible products must be created privately and imported into Supabase's protected answer store. Do not copy answer keys or aliases into this public repository.

Never commit database passwords, Supabase secret/service-role keys, or other private credentials. The browser may use only the publishable key.

## Deploy

The current published site is deployed with GitHub Pages through GitHub Actions. The existing workflow publishes the repository root on pushes to `main`.

Backend work remains on `feature/daily-challenge`; `main` has not been merged or deployed with these changes.

## Run locally

The current static version loads JSON with `fetch()`, so do not open `index.html` directly via `file://`. Serve the repository over HTTP, for example:

```bash
python -m http.server 8000
```

Then open http://localhost:8000.
