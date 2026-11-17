# WHAT'S INSIDE?

A bilingual 15-second food-ingredient game: see a real packaged product and name as many of its ingredients as possible.

## Current catalog

- **200 curated products**: 80 Argentina-market products and 120 international products.
- Spanish and English ingredient answers, with accepted aliases.
- Product images and their provenance are tracked separately from ingredient declarations.
- Argentina and World catalogs currently live in `data/products.json` and `data/products-world.json`.
- Product additions are curated; Open Food Facts is a discovery aid, not a live runtime dependency.

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

The matching source files and applied migrations are tracked under `supabase/`. The database has no product or challenge seed data yet, so these endpoints are backend foundations and the new experience is not live.

### Critical answer-key security requirement

This GitHub repository is currently **public**. Ingredient answers and aliases exist in the current catalog JSON files and in the repository's Git history (including the master catalog). Copying those answers into Supabase's private schema does not remove the public copies.

**Do not launch a competitive Daily while the repository or its history exposes answer keys.** Before seeding the protected catalog and scheduling challenges, choose a secure source for the full catalog (for example, a separate private repository or a deliberate repository privacy/history migration). Repository visibility and Git history must not be changed without an explicit decision from the owner.

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
