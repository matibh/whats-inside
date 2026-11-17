# Backend setup — What's Inside

## Decisions

- Daily is one global challenge per calendar day, shared by every player.
- The official challenge uses the `America/Argentina/Buenos_Aires` calendar.
- Guest players can play the public experience without an account.
- Accounts are optional; authentication is required only to save an official Daily result and appear in leaderboards.
- Practice is unlimited and never changes competitive Daily rankings.
- Daily answer keys are stored in the non-exposed `private` schema. Browser clients must never receive them before a challenge closes.

## Supabase project

1. Supabase project created for this project: **Ingredora**, region **South America (São Paulo), `sa-east-1`**.
2. Project reference: `xblqghhhchffuqkmzgta`; project URL: `https://xblqghhhchffuqkmzgta.supabase.co`.
3. Keep the database password and `service_role` / secret key private. Never commit either value.
4. The publishable key is designed for browser use when RLS and policies are correctly configured. Store it in local environment variables; do not hardcode it in source files.
5. In Authentication → URL Configuration, add the production GitHub Pages URL and local development URL. The exact production URL should be confirmed from the repository's Pages settings before launch.

## Apply the database schema

Install the Supabase CLI, then from the repository root run:

```bash
supabase login
supabase link --project-ref YOUR_PROJECT_REF
supabase db push
```

The initial migration creates profiles, daily challenges, protected answer storage, attempts, statistics, achievements, and ingredient mastery tables.

## Security model

- The `private.daily_challenge_answers` table is not exposed to `anon` or `authenticated`.
- The browser never writes competitive scores directly.
- A future Edge Function must load the private answer key, normalize submitted aliases, calculate score on the server, and enforce one attempt per authenticated user per challenge.
- A unique database constraint on `(challenge_id, user_id)` is the final guard against duplicate Daily submissions.
- Do not publish the current Daily product's ingredient list or aliases in static JSON, JavaScript bundles, HTML, or public API responses.
- The current static product JSON contains answer keys. It must be split into safe public product metadata and protected answer records before a public competitive Daily launches. This is a required migration, not an optional hardening task.

## Local secrets

Use an untracked `.env.local` file for local values. Never put Supabase secrets in Git. The browser may use only the publishable/anon key; the service-role key belongs exclusively in Edge Function secrets.
