# Backend setup — What's Inside

## Product decisions

- One global Daily challenge per Buenos Aires calendar date.
- Daily uses `America/Argentina/Buenos_Aires`, not the visitor's device timezone.
- Guests can use public product discovery and Practice; authentication is required for official Daily results and ranking.
- One official Daily attempt per authenticated user and challenge.
- Practice attempts do not affect competitive Daily points or streaks.
- The browser never receives Daily answer keys before the challenge closes.

## Catalog architecture

- Canonical source of truth: private repository [matibh/whats-inside-catalog](https://github.com/matibh/whats-inside-catalog).
- The private repository contains `data/catalog-master.md`, `data/products.json`, `data/products-world.json`, `data/sources.json`, and `data/sources-world.json`.
- Keep that repository private. Do not mirror new answer-bearing catalog files into this public code repository.
- The 200 products already present in this public repository and its Git history are legacy Practice-only products. Their `daily_eligible` flag must remain false permanently.
- New Daily products must be curated in the private repository, imported to Supabase (metadata to `public.products`, answer keys to `private.product_answers` and/or `private.daily_challenge_answers`), and only then scheduled. The browser receives safe metadata; validation remains server-side.
- Update the JSON catalogs, source registries, and master Markdown together for every product batch.

## Supabase project

- Project: **Ingredora**
- Region: **South America (São Paulo), `sa-east-1`**
- Project ref: `xblqghhhchffuqkmzgta`
- URL: `https://xblqghhhchffuqkmzgta.supabase.co`
- The browser uses a publishable key only. Never expose the service-role key or secret key.

## Deployed database foundation

The following objects are deployed:

- Public: `profiles`, `daily_challenges`, `daily_attempts`, `practice_attempts`, `user_stats`, `achievements`, `user_achievements`, `ingredient_mastery`, `products`, `daily_play_sessions`.
- Private: `daily_challenge_answers`, `product_answers`.
- Privileged RPCs, callable only by `service_role`: `get_daily_answer_key`, `get_product_answer_key`, `record_daily_stats`, `record_ingredient_mastery`.

All public tables have RLS enabled. Private answer tables have RLS enabled and no browser policies. Browser roles cannot read either private answer table or execute answer-key/statistics RPCs. The Edge Functions use the Supabase service-role runtime environment.

## Edge Functions

Base URL: `https://xblqghhhchffuqkmzgta.supabase.co/functions/v1`

| Function | JWT gateway | Purpose |
|---|---:|---|
| `daily-challenge` | No | Read today's published challenge metadata; never returns answers |
| `start-daily` | Yes | Create the authenticated player's single Daily session |
| `submit-daily` | Yes | Validate aliases and score server-side; save one official result |
| `practice-catalog` | No | Return safe product metadata, excluding current/future Daily products |
| `submit-practice` | No | Validate a completed Practice round server-side; saves history if signed in |
| `leaderboard` | No | Return today's ranking or all-time points |

The function sources are committed under `supabase/functions/<function-name>/index.ts`. The 200 historical products are available to the Practice API; their answers are validated server-side and returned only after a Practice submission.

## Catalog import and Daily eligibility

The 200 historical catalog products (80 Argentina, 120 World) and their 2,933 ingredient records are imported. Safe metadata is in `public.products`; answer records are in `private.product_answers`. All imported historical products have `daily_eligible = false`, because their answer keys are already public in this repository and its Git history. No Daily challenges or Daily answer keys have been seeded.

The new private catalog repository has been created and the current master register, both product JSON catalogs, and both source registries have been copied and verified there. This is a source-of-truth separation for future catalog work; it does not remove the legacy public copies or make the historical products safe for competitive Daily.

**Launch blocker:** no competitive Daily should be scheduled until a new, private-only product pool has been curated, imported and verified. Do not change visibility or rewrite history in the public code repository without explicit owner approval.

## Authentication setup still required

In Supabase Dashboard → Authentication → URL Configuration, configure:

- Site URL: the production GitHub Pages URL.
- Additional redirect URL: `https://matibh.github.io/whats-inside/`.
- Local redirect URL: `http://localhost:8000/`.

Email confirmation is enabled in the current local Supabase config. Confirm the production Auth settings in the dashboard before enabling account registration from the frontend.

## Local development

The existing site is static and loads JSON with `fetch()`. Run it over HTTP (for example, `python -m http.server 8000`) instead of opening `file://`.

The user prefers the Supabase dashboard / connected integration workflow; no CLI installation is required for the work completed through the connected Supabase integration.
