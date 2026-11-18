# Ingredora — Project Master Guide

> **Purpose:** this is the working source of truth for project decisions, implementation status, security constraints, pending work, and the order of execution. Read it before making changes and update it in the same work session whenever a decision, implementation, migration, deployment, or test changes the project state.
>
> **Last updated:** 2026-11-18 (strict timers and grouped Explorer categories)  
> **Repository:** `matibh/whats-inside` (public frontend, branch `main`)  
> **Private catalog:** `matibh/whats-inside-catalog` (must remain private)  
> **Product name:** Ingredora (formerly Whatsinside)

---

## 1. Project overview

Ingredora is a bilingual (Spanish / English) ingredient-discovery game. Players inspect real food products and try to identify their ingredients within short timed rounds.

Core game modes:
- **Daily:** one globally shared daily product/challenge, with competitive attempts and rankings.
- **Practice:** a session of products for non-Daily play, with server-validated attempts.
- **Rankings:** public competitive ranking based on eligible game results.

The long-term account/progression experience consists of six areas:
1. Profile
2. Achievements
3. Levels & XP
4. Cosmetics
5. Statistics
6. Activity

### Product decisions already approved

| Area | Decision |
|---|---|
| Identity | Unique username |
| Profile visibility | Public and shareable |
| Avatar | Preset gallery only; no user uploads |
| Levels | Yes |
| Progression | XP and levels |
| Public activity | Yes |
| Account requirement | Account required to play and save progress; no guest progression |
| Achievements | Permanent unlocks |
| Achievement rewards | Cosmetic only |
| XP from achievements | None; avoid double rewards |
| Social features | No clans, friends, DMs, or achievement rankings |
| Economy | No coins or shop |
| Extra tasks | No additional mission system |

Cosmetic rewards must not grant gameplay advantages or score bonuses.

---

## 2. Non-negotiable project rules

These constraints apply to every future change.

### Catalog and answer security
- The private catalog repository is the editorial source of truth and **must remain private**.
- Product answer keys and complete ingredient answer data must stay server-side.
- The public frontend may receive safe product metadata only.
- Never add new answer-bearing products, ingredient statements, aliases, or answer keys to this public repository.
- The historical `data/` snapshot in this public repository contains 200 old products (80 Argentina-market and 120 international). Those records and their answers are already public in Git history. They are **Practice-only** and must never be used for competitive Daily challenges.
- Deleting historical files from the latest commit does not make already-public Git history secret.

### Daily uniqueness and lifecycle
- **Never repeat a product in Daily**, including across different dates.
- If a Daily challenge expires, its product returns to the eligible Practice pool.
- If there are 10 eligible products, a Practice session must contain 10 unique products.
- Daily assignment and eligibility must be checked against published and scheduled challenges, not just past dates.
- Do not silently weaken uniqueness rules to make catalog assignment easier.

### Game/session integrity
- All competitive scoring and answer validation must be authoritative on the backend.
- A product can be submitted only once within a Practice session.
- A Daily session can be consumed only once.
- Keep writes atomic where multiple records/stats/unlocks must succeed together.
- Enforce ownership, expiry, eligibility, and idempotency on the server; never trust client-supplied score or answer correctness.
- Account required: do not add guest submission paths.

### UI and QA
- Do not change visual styles, layout, colors, spacing, or copy unless explicitly requested.
- Every product must have an image.
- An image URL existing in the database is **not proof** that the image loads. Verify HTTP response and/or browser rendering before marking it as tested.
- Desktop homepage, Daily, and Practice should fit without scrolling, but do not achieve this by ugly compression or sacrificing readability.
- Never report visual/browser QA as complete unless it was actually performed.
- When a frontend commit is pushed to `main`, allow GitHub Pages deployment to propagate and hard-refresh with `Ctrl+F5` before visual validation.

---

## 3. Architecture and repositories

### Frontend
- Repository: `matibh/whats-inside`
- Branch: `main`
- Hosting: GitHub Pages via GitHub Actions; pushes to `main` trigger deployment.
- Main app is currently implemented in `index.html` / frontend JavaScript and CSS.
- Public URL: https://matibh.github.io/whats-inside/

### Private catalog
- Repository: `matibh/whats-inside-catalog`
- Must remain private.
- Holds the complete editorial catalog and answer data.
- Do not move answer-bearing material into the public frontend repository.

### Backend
- Supabase project ref: `xblqghhhchffuqkmzgta`
- Project URL: https://xblqghhhchffuqkmzgta.supabase.co
- Supabase organization: `qwxbbuzomysltytxtkrw`
- Current plan: Free (`tier_free`).

### Security boundary
- Frontend: UI, safe product metadata, user interaction.
- Supabase Edge Functions: authenticated orchestration and server-side validation.
- Database/RPC: authoritative transactions, scoring persistence, answer-key access through privileged server-side functions.
- Private answer tables and answer-key RPCs must not be callable by `anon` or ordinary `authenticated` clients.

---

## 4. Current implementation status

Status labels:
- **DONE** — implemented and supported by code/database inspection or deployment evidence.
- **PARTIAL** — foundation exists, but user-facing integration or full verification is incomplete.
- **PENDING** — not implemented or not yet verified.

### 4.1 Game and frontend

- **DONE** — bilingual Spanish/English interface.
- **DONE** — 15-second rounds, ingredient entry, feedback, scoring, and result reveal.
- **DONE** — browser tab title follows the selected language.
- **DONE** — ingredient answer feedback displays a check/cross at the end of the ingredient label.
- **DONE** — Practice session controls prevent switching to Daily, Practice, Rankings, or changing mode while a session is active; Stop Practice unlocks navigation. Recent commit: `989812d`.
- **DONE** — YOUR GUESSES counter colors follow the logo palette (light `#e5f0d9`, dark `#294632`). Recent commit: `f9354b1`.
- **DONE** — Practice server-session integration sends `session_id` from both round submission paths; `startPractice` is asynchronous and calls `start-practice`. Recent commits include `ac36bb6` and cache-buster `7a0d6`.
- **DONE** — earlier frontend removal of direct answer-key retrieval; commits included `02f7723` and cache-buster `a2dd4c3`.
- **DONE** — check/cross presentation commit `63e2b4d`.
- **PENDING** — full desktop and mobile browser regression pass after the recent backend/session changes.
- **PENDING** — verify the deployed GitHub Pages build is current after latest commits; hard refresh before testing.
- **PENDING** — verify all catalog product images actually load, not merely that image URLs are populated.

### 4.2 Practice sessions and secure submissions

Implemented backend foundation:
- `public.practice_play_sessions` and `public.practice_play_session_products`.
- RLS enabled; direct `anon` and `authenticated` table privileges revoked; `service_role` retains access.
- Session expiry: 30 minutes.
- 10 unique products per session.
- **Removed 2026-11-18 at the user's request:** the 3-sessions-per-10-minutes start throttle. No replacement throttle is currently configured.
- `start-practice` requires a JWT/user, validates the 10 unique ready product IDs supplied by the frontend, checks Daily reservations, creates a session and records product order/timing. The frontend still chooses the candidate set; independent server-side random selection remains pending.
- `submit-practice` requires authentication, checks session ownership and expiry, verifies product membership, prevents duplicate submissions, obtains the answer key server-side, and calculates the result on the backend.
- `complete_practice_round(uuid,uuid,text,text,integer,integer,integer,integer)` atomically marks the session product submitted and inserts the attempt. If insertion fails, the transaction rolls back.
- RPC execution is restricted to `service_role`; `anon` and `authenticated` cannot execute it.
- Basic elapsed-time and score/count coherence checks exist in the RPC.

Remaining:
- **DONE — server-authoritative per-product timer deployed** — start-practice v3 stores the ordered product list and starts the first round on the server; complete_practice_round checks each round against its server timestamp and starts the next round only after the previous one is submitted.
- **DONE — Stop Practice closes the server session** — stop_after is persisted before completion; the RPC closes the session without starting another product or awarding the full-session bonus.
- **PENDING** — authenticated end-to-end HTTP/browser test of start → play → submit → persisted result.
- **PENDING** — test expired session, wrong owner, product not in session, duplicate submission, and rate limit through real endpoint calls.
- **PENDING** — consider cleanup of session rows older than 7 days and an index on `expires_at`; this is maintenance, not a launch blocker unless volume warrants it.
- **DEPLOYED** — migration `enforce_strict_15_second_round_deadline`; Edge Functions `submit-daily` v12 and `submit-practice` v19; frontend commits `81ca3da`, `30f91a7`, and cache-buster `293b7ad` (GitHub Pages workflow succeeded).
- **TESTED (SQL transaction + rollback)** — Daily and Practice RPCs both rejected submissions at 15.001 seconds; no test rows were retained. Browser QA and authenticated HTTP end-to-end QA remain pending.
- **DONE — strict server-authoritative 15-second timer deployed** — Practice submissions are rejected as soon as server time passes `round_started_at + 15 seconds`; there is no network grace. Late skips may advance but receive zero score. The next product timer starts at the server timestamp with no artificial 1.1-second transition delay. The client-supplied `elapsed_ms` is ignored for authority. SQL transaction tests confirmed a submission at 15.001 seconds is rejected and rolled back.

### 4.3 Daily sessions and submissions

- **DONE** — `start-daily` requires authentication and no longer returns an answer key.
- **DONE** — `submit-daily` calls the transactional `complete_daily_attempt(...)` RPC.
- **DONE** — transaction locks and validates the user's Daily session, checks the challenge is published, consumes the session, inserts the attempt, updates Daily stats and ingredient mastery, evaluates current achievements, and stores unlocks atomically.
- **DONE** — the RPC returns only the attempt fields needed by the client plus unlocked achievements; it does not return user ID, challenge ID, or submitted answers.
- **DONE** — RPC is executable only by `service_role`.
- **DONE** — a reversible transaction test was performed; no test rows were left behind.
- **DONE — strict server-authoritative 15-second enforcement deployed** — submit-daily v12 and `complete_daily_attempt` reject any submission received after `started_at + 15 seconds`, with no network grace. Frontend timer uses the server `started_at` value. SQL transaction tests confirmed a submission at 15.001 seconds is rejected and rolled back.
- **PENDING** — real authenticated Daily start/submit browser test, including duplicate/replay and expired-session cases.
- **PENDING** — verify Daily product assignment and no-repeat invariant against the complete schedule/catalog before extending future dates.

### 4.4 Answer-key exposure

- **DONE** — `practice-answer-key` endpoint was retired and returns HTTP 410.
- **DONE** — `validate-ingredient` endpoint was retired (410).
- **DONE** — `start-daily` no longer returns `answer_key`.
- **DONE** — frontend no longer contains calls/references for the old answer-key retrieval flow.
- **DONE** — Practice and Daily submissions obtain answer keys inside privileged backend code through server-side RPCs.
- **DONE** — answer-key RPC permissions were inspected; `anon` and `authenticated` do not have EXECUTE.
- **PENDING** — final deployed endpoint audit to ensure no alternate public endpoint, debug route, log, or response leaks answer data.
- **IMPORTANT** — the public historical 200-product snapshot is already exposed in Git history and cannot be treated as secret. Keep it out of Daily.

### 4.5 Profiles and authentication foundation

- **DONE** — 5 Auth users and 5 linked public profiles were found; 0 orphan profiles/users in the audit.
- **DONE** — `profiles` has a case-insensitive unique username index (`lower(username)`).
- **DONE** — `handle_new_user()` trigger creates a profile from Auth user metadata.
- **DONE** — added `username_changed_at timestamptz` and `avatar_id text`.
- **DONE** — profile guard prevents a real username change for 30 days; case-only changes are normalized back to the original username.
- **DONE** — trigger updates `updated_at`.
- **DONE** — direct table UPDATE was revoked from PUBLIC/anon/authenticated; authenticated users may update only `username`. They cannot directly update cooldown timestamp or avatar fields.
- **PARTIAL** — profile table/read foundation exists, but no profile editor UI or public profile page yet.
- **PENDING** — reserved username policy and server-side enforcement.
- **PENDING** — define avatar preset IDs/gallery and ownership/equipping validation.
- **PENDING** — decide whether/how to migrate or review the 5 existing accounts; do not delete or modify them without an explicit migration plan.
- **NOTE** — legacy `avatar_url` remains for compatibility, but normal users cannot update it directly.

### 4.6 Supabase security and plan constraints

- Supabase organization is currently on the **Free** plan.
- Auth leaked-password protection was reported disabled. Supabase makes this feature available from Pro; it cannot be enabled on the current Free plan. Do not claim it has been enabled or suggest that a dashboard toggle will bypass the plan restriction.
- RLS enabled/no-policy warnings on private/service-role-only tables can be expected when direct client access is intentionally denied. Verify grants and policies before changing them; do not weaken the security boundary merely to silence an advisor warning.
- Re-run Security Advisor after the final schema changes and record which warnings are expected versus actionable.
- Official reference: https://supabase.com/docs/guides/auth/password-security

---

## 5. Progression system — decisions and pending implementation

### 5.1 XP award values — IMPLEMENTED (browser QA pending)

The following values are implemented in the live completion RPCs and have generated XP ledger events. Verify through authenticated browser/API tests before considering the feature release-ready.

| Event | Proposed XP | Status |
|---|---:|---|
| Complete a Daily | 50 XP | Implemented transactionally |
| Complete one non-skipped Practice product | 10 XP | Implemented transactionally |
| Complete all 10 Practice products without skips | +20 XP bonus | Implemented transactionally |
| Unlock an achievement | 0 XP | Approved principle: achievements give cosmetics only |

No XP should be awarded for achievements. Gameplay-valid XP and cosmetic achievement rewards remain separate.

### 5.2 Level thresholds — IMPLEMENTED

These ten thresholds are seeded in private.level_definitions and used by the current progression implementation:

| Level | Name | XP threshold |
|---:|---|---:|
| 1 | Beginner | 0 |
| 2 | Curious | 100 |
| 3 | Explorer | 250 |
| 4 | Apprentice | 500 |
| 5 | Ingredient Hunter | 850 |
| 6 | Food Detective | 1,300 |
| 7 | Specialist | 1,850 |
| 8 | Expert | 2,500 |
| 9 | Master | 3,300 |
| 10 | Legend | 4,300 |

Levels continue beyond 10. Current implementation adds 1,200 XP for level 11 and increases the next interval by 100 XP per level. Automated boundary tests remain pending.

### 5.3 XP technical requirements

Implemented architecture:
- Append-only `private.player_xp_events` ledger with unique `(user_id,event_type,source_id)` idempotency key.
- Daily source is the unique Daily attempt ID; Practice product source is the unique Practice attempt ID; full-session bonus source is the Practice session ID.
- Daily and Practice XP awards are inside their completion transactions.
- `public.user_stats.xp_total` and level are updated server-side; the client reads progression through an authenticated Edge Function.
- Current awards: 50 XP per Daily, 10 XP per non-skipped Practice product, +20 XP for a 10/10 Practice session with no skips; achievements award 0 XP.

Pending release QA:
- Test duplicate submissions, retries, concurrent requests, partial/skipped sessions and level-boundary crossings with authenticated users.
- Define formal reversal/refund behavior before introducing deletion or invalidation of attempts.
- Confirm cumulative lifetime XP remains the intended long-term rule.

**Current status:** XP ledger, XP awards, level table, level calculation and progression endpoint are implemented. Browser QA and concurrency/idempotency tests remain pending.

---

## 6. Achievements

### Existing database catalog

The live catalog contains 50 achievements across Getting Started (6), Daily (8), Accuracy (7), Combo (4), Practice (7), Score (4), Explorer (7), and Loyalty (7). The original eight achievements were the legacy seed set; migration history and unlock-ID continuity still need a dedicated preservation audit. There are 19 unlock rows across 5 user accounts at the last database snapshot.

There are currently 19 unlock records in `user_achievements` (5 user accounts exist).

### Audit snapshot — 2026-11-18

- **DONE — criteria/metric-key coverage inspected:** all 50 achievement definitions reference metric keys returned by `private.get_player_achievement_metrics`; no missing metric keys were found. The evaluator updates progress and grants each unlock idempotently.
- **DONE — current reward/points policy checked:** all 50 `achievements.points` values are 0; the player-achievement read RPC does not expose a points field. Achievements remain cosmetic-only and award no XP.
- **DONE — legacy reference integrity checked:** the eight legacy IDs remain present in the current catalog and there are 0 orphan rows in `user_achievements`. This confirms current referential integrity, not a full historical snapshot comparison.
- **DONE — reward references checked:** all 24 non-null achievement reward IDs match active rows in `private.cosmetic_definitions`. Actual asset-file/browser rendering verification remains pending.
- **DONE — country alias normalization:** `normalize_country_aliases_for_explorer_achievements` maps `Brasil` and `Brazil` to one country for Explorer metrics and recalculates current `countries_3` progress. Before this correction the ready catalog had 25 raw country labels; after normalization it has 24. No `countries_3` unlock had been granted, so no permanent unlock was revoked.

- **DEPLOYED** — migration `group_product_categories_for_explorer_achievements` creates the private category map and updates `private.get_player_achievement_metrics`; 116/116 slugs mapped, 12 groups, 0 unmapped ready categories.
- **TESTED (database)** — live metrics return macro-category counts; progress for both Explorer category achievements was recalculated. Existing unlock rows were retained and completed progress was preserved for already-unlocked achievements. Security Advisor now shows 12 expected RLS-enabled/no-policy informational findings (the new private mapping table adds one); the Free-plan leaked-password warning remains unchanged.
- **DONE — Explorer macro-category taxonomy:** all 116 ready-product category slugs are explicitly mapped in `private.product_category_groups` to 12 broad groups: Beverages, Dairy & Desserts, Cookies & Bakery, Chocolate & Sweets, Savory Snacks, Sauces & Condiments, Canned & Preserved, Soups & Broths, Grains & Pasta, Prepared Foods, Spreads, and Pantry & Seasonings. The table is private, RLS-enabled, and has no client grants. `unique_categories` now counts these broad groups instead of 116 granular slugs; no current ready category is unmapped.
- **DONE — category progress recalculated:** all existing `categories_3` / `categories_5` progress rows were recomputed using the 12-group taxonomy. The two already-unlocked achievements were preserved permanently and their displayed progress remains complete.
- **NOTE** — 10 ready products have no country value; null countries are excluded from the distinct-country metric.


### Agreed reward policy
- Achievements are permanent.
- Rewards are cosmetic only.
- Achievements grant 0 XP.
- No gameplay advantages, score multipliers, or currency rewards.

Implemented foundation:
- 50 stable achievement records with category, tier, ES/EN names/descriptions, criteria and cosmetic reward IDs.
- `private.user_achievement_progress` tracks progress; `private.evaluate_player_achievements` performs idempotent unlock evaluation and grants linked cosmetics transactionally.
- Authenticated `get-player-achievements` endpoint is deployed; result screens display unlock notifications.

Pending audit and QA:
- Cross-check all 50 criteria metric keys against the live metrics function; no missing metric keys found.
- Implemented and verified the curated 12-group Explorer taxonomy covering all 116 current ready-product category slugs.
- Complete threshold, streak/date-boundary, repeated-trigger, and concurrent-unlock tests.
- Verify the eight legacy IDs remain in the catalog, current unlock references have no orphans, all 50 `points` values are 0, and the player-achievement RPC does not expose `points`.
- Compare legacy unlock continuity against an authoritative historical snapshot if one is available; do not change achievement IDs or unlock rows without that evidence.
- Test thresholds, repeated triggers, streak/date boundaries, simultaneous unlocks and hidden-achievement privacy.
- Browser QA for achievement list/details/hidden states remains pending.

---

## 7. Cosmetics

Approved:
- Preset avatar gallery; no image uploads.
- Achievement rewards are cosmetic only.
- No shop, coins, paid currency, or gameplay-affecting items.

Implemented database/backend foundation:
- 30 active cosmetic definitions across avatar, frame, background, title and effect types.
- `private.user_cosmetics` stores ownership; achievement rewards are granted transactionally.
- New-user trigger provisions the five default cosmetic slots and default-owned inventory.
- Authenticated get/equip Edge Functions are deployed; equip checks ownership and active status.

Pending:
- Verify all 30 `asset_key` values map to real shipped assets and check fallbacks for retired/missing assets.
- Build the gallery/equip UI and show equipped cosmetics on profiles.
- Test unauthorized equip attempts and default inventory for existing/new users.

---

## 8. Public profiles, statistics, and activity

### Profile
Planned public, shareable profile should include only intentional public information, such as:
- Username and preset avatar.
- Level and XP progress.
- Achievement showcase.
- Selected cosmetic.
- Selected gameplay statistics.
- Public activity feed, according to the approved public-activity setting.

Pending decisions/implementation:
- Public profile route/URL format and not-found behavior.
- Which statistics and activity events are public by default.
- Whether users can hide individual activity event types (while profile remains public).
- Username reserved words, normalization, and moderation rules.
- Profile UI/editor and sharing metadata.

### Statistics
Potential statistics to design and validate:
- Daily attempts/completions and streak.
- Practice rounds completed.
- Correct ingredients and accuracy.
- Score totals/bests.
- Product/category exploration, if catalog tags are reliable.

Do not expose private answer data or other users' sensitive account data. Define denominators and time windows clearly so metrics are not misleading.

### Activity
- Public activity is approved.
- Use a controlled allowlist of event types (e.g. level reached, achievement unlocked, selected challenge milestones).
- Do not publish submitted guesses, answer keys, private session data, or detailed behavioral telemetry.
- Make feed writes idempotent and paginate efficiently.

---

## 9. Implementation roadmap and gates

Follow this order. Do not skip ahead and leave foundations inconsistent.

### Phase 0 — Existing game and security hardening
- [x] Remove public answer-key retrieval paths.
- [x] Validate the frontend's 10 unique Practice product IDs, readiness and Daily reservations server-side (the candidate set is still chosen client-side; independent server-side random selection remains pending).
- [x] Add server-side Practice session ownership, expiry, unique-product, and duplicate-submit checks.
- [x] Make Practice attempt persistence atomic.
- [x] Remove answer key from Daily start response.
- [x] Make Daily completion and related stats/unlocks transactional.
- [x] Add profile username uniqueness and 30-day change cooldown foundation.
- [x] Enforce a hard 15-second deadline for Daily and each Practice product on the server, with no network grace or artificial inter-round pause.
- [ ] Complete real authenticated browser/API QA for Daily and Practice.
- [x] Re-run endpoint/RPC/grants audit; client write grants and completion RPC ACLs verified.
- [x] Re-run Supabase Security Advisor and document expected/actionable warnings (10 informational restricted-table findings; leaked-password protection warning is a Free-plan limitation).

**Gate:** do not treat hardening as fully QA-approved until real authenticated endpoint/browser tests pass.

### Phase 1 — Profile foundation
- [x] Unique case-insensitive username foundation.
- [x] Profile creation trigger.
- [x] Username cooldown enforcement.
- [x] Avatar ID column foundation.
- [ ] Reserved username enforcement.
- [ ] Define preset avatar catalog.
- [ ] Profile edit UI.
- [ ] Public profile page and shareable URL.
- [ ] Profile privacy/activity display behavior.

### Phase 2 — XP and Levels
- [x] Implement XP awards: 50 Daily / 10 per non-skipped Practice product / +20 only for all 10 products completed without skips.
- [x] Create XP ledger with unique (user_id,event_type,source_id) idempotency key.
- [x] Add transactional XP awards to Daily and Practice.
- [x] Add once-only full-session bonus.
- [x] Add level calculation and progression read endpoint.
- [x] Add frontend XP reward display and level/total-XP badge.
- [ ] Test duplicates, retries, concurrent events, partial/skipped Practice and level boundaries.
- [ ] Browser QA for Daily and Practice XP rewards, badge refresh and level-up feedback.

### Phase 3 — Achievements
- [x] Implement 50 achievement definitions with categories, tiers, ES/EN copy, criteria and cosmetic reward IDs.
- [x] Implement private progress tracking and transactional idempotent unlock evaluation.
- [x] Award linked cosmetics transactionally.
- [x] Deploy authenticated achievement read endpoint and result-screen unlock notifications.
- [x] Audit all criteria/metrics and implement the 12-group Explorer taxonomy (116/116 current category slugs mapped).
- [x] Audit legacy IDs/unlock references and confirm `achievements.points` remains 0 with no read-RPC exposure.
- [ ] Build/verify full achievement list, details and hidden states in browser.
- [ ] Test all thresholds and edge cases.

### Phase 4 — Cosmetics
- [x] Create 30 cosmetic definitions and inventory schema.
- [x] Award achievement cosmetics transactionally.
- [x] Implement ownership-checked equip RPC and authenticated get/equip endpoints.
- [x] Provision five default cosmetics on new-user signup.
- [ ] Verify asset files, defaults for existing accounts and retired-item fallback.
- [ ] Implement gallery/equip UI and public profile display.
- [ ] Test unauthorized equip attempts.

### Phase 5 — Public profiles, statistics, activity
- [ ] Finalize public profile fields and route.
- [ ] Implement public profile page and share/share-preview metadata.
- [ ] Define and implement public statistics.
- [ ] Define activity event allowlist and privacy behavior.
- [ ] Implement feed creation, pagination, and UI.
- [ ] Test public access boundaries and data minimization.

### Phase 6 — Full QA, release readiness
- [ ] Desktop browser regression: homepage, Daily, Practice, rankings, profile, achievements, cosmetics.
- [ ] Mobile browser regression at supported viewport sizes.
- [ ] Spanish and English copy/layout parity.
- [ ] Light and dark theme contrast/readability.
- [ ] No-scroll target on desktop homepage/Daily/Practice without cramped layout.
- [ ] Test all scoring/combo/duplicate/skip/stop flows.
- [ ] Test authentication, session expiry, replay, ownership, and rate limits.
- [ ] Verify every product image loads (HTTP + browser visual check).
- [ ] Check console errors, failed network requests, and accessibility basics.
- [ ] Verify GitHub Pages deployment and cache-buster.
- [ ] Final Supabase grants/RLS/RPC/Edge Function audit.
- [ ] Document any accepted limitations and launch blockers.

---

## 10. Known game rules and scoring behavior

- Round duration: exactly 15 seconds. The server rejects submissions received after the 15-second deadline; there is no network grace. Practice transitions directly to the next product using its server start timestamp, without an artificial 1.1-second pause.
- Combo scoring: first correct ingredient = 100 points; second consecutive correct = 150; third consecutive correct = 150, for 400 total in that example.
- Each consecutive correct after the first adds the combo bonus (+50).
- An incorrect guess resets the combo.
- A duplicate guess does not score and does not change the combo.
- Practice Stop preserves the current round/result flow as implemented; do not regress this behavior.
- Skip Product awards the configured skip behavior and must not duplicate skipped products.
- Practice results should list products actually played, not unplayed products remaining in the session.
- Daily product is global/shared; rankings are worldwide.
- Practice archive/history is part of the intended experience.

Before changing any scoring rule, inspect the current implementation and tests, then update this guide and the test expectations together.

---

## 11. Edge Functions and database objects — known inventory

Known Edge Functions:
- `start-practice` — authenticated; creates server-side Practice session.
- `submit-practice` — authenticated; validates and records Practice result.
- `practice-answer-key` — retired; returns 410.
- `start-daily` — authenticated; creates Daily play session and returns safe challenge data only.
- `submit-daily` — authenticated; submits Daily result through transaction.
- `daily-challenge` — public safe challenge metadata only.
- `practice-catalog` — public safe product metadata only.
- `leaderboard` — public allowlisted ranking data.
- `validate-ingredient` — retired; returns 410.

Known important database objects:
- `public.profiles`
- `public.achievements`
- `public.user_achievements`
- `public.practice_play_sessions`
- `public.practice_play_session_products`
- `public.daily_play_sessions`
- `public.daily_attempts`
- `public.practice_attempts`
- `private.daily_challenge_answers`
- `private.product_answers`
- RPCs `complete_practice_round(...)`, `complete_daily_attempt(...)`, and privileged answer-key retrieval RPCs.

This is a known inventory from prior implementation work, not a substitute for re-inspecting the live project before migrations. Verify actual function versions, schema, grants, and deployed code before modifying anything.

---

## 12. Required workflow for every future work session

At the beginning of each work session:
1. Read this guide in full.
2. Check the latest GitHub commits and current branch.
3. Inspect the relevant frontend files, Edge Functions, schema, RPCs, and tests before editing.
4. Compare live implementation with the status recorded here; correct stale status before proceeding.
5. Identify the next unchecked task in the roadmap and its dependencies.
6. State the exact scope and acceptance criteria before implementation.

During implementation:
1. Make the smallest coherent change; avoid unrelated UI/style changes.
2. Keep secret data server-side.
3. Use migrations for database changes and preserve rollback/safety considerations.
4. Add or update tests with each behavior change.
5. Verify actual deployment/version after deploying Edge Functions.
6. Never claim a test passed unless it was actually run and its result inspected.

At the end of each work session:
1. Record files changed, migrations, function versions, commit SHA, and deployment status.
2. Mark checklist items only when implementation and required verification are complete.
3. Separate **implemented**, **deployed**, and **tested** states.
4. Record known limitations, failed tests, and remaining blockers.
5. Update the **Last updated** date.
6. Commit this guide update to the public frontend repository in the same work session whenever project state changes.

### Status vocabulary
- **Implemented:** code/schema change exists.
- **Deployed:** deployed to the intended environment.
- **Tested:** the relevant test was actually executed and passed.
- **Verified in browser:** the user-facing behavior was inspected in a real browser.
- **Pending:** not done or evidence is missing.

Never collapse these statuses into a single “done”.

---

## 13. Current next actions

The next work should proceed in this order:

1. Complete authenticated API/browser QA for Daily and Practice, especially the strict 15-second cutoff, replay, expiry, ownership, skip, Stop Practice, and full-session bonus.
2. Resolve the Explorer macro-category decision; finish achievement threshold/edge-case QA and verify cosmetic asset files in browser.
3. Implement reserved-username enforcement and the profile editor/public profile page.
4. Continue XP/achievement/cosmetic regression tests; do not recreate existing systems.
5. Update this guide after every completed subtask and keep it as the navigation point for future sessions.

---

## 14. Change log

- **2026-11-18:** Consolidated project decisions, catalog/security rules, Practice and Daily hardening, profile foundation, progression proposals, achievement/cosmetic design, roadmap, QA gates, and operating workflow into this master guide.

## 15. Live audit refresh — 2026-11-18

### Important correction to earlier status
Work continued after the first guide commit. XP, achievements and cosmetics are no longer merely planned: their database foundation and several Edge Functions are already deployed. Do not recreate these systems.

### Repository
- Latest frontend commits include 41a9633 (XP/level display), 160cb49 (localization), 3969483 (total XP badge), 784e080 (cache refresh), e178345 and 3eca0e0 (achievement unlock result notifications).
- app.js uses authenticated Edge Functions for progression and achievements. Code inspection is not browser QA.

### Supabase live inventory
- start-practice v2 (JWT), submit-practice v15 (JWT), start-daily v4 (JWT), submit-daily v10 (JWT).
- get-player-progression v2, get-player-achievements v1, get-player-cosmetics v1, equip-player-cosmetic v1 (all JWT required).
- practice-catalog v1, daily-challenge v7 and leaderboard v2 are public read endpoints with safe/allowlisted data.
- practice-answer-key v3 and validate-ingredient v3 are still marked ACTIVE in deployment metadata, but source code returns HTTP 410.
- reset-daily-test v5 is deployed and must be inspected/removed or strongly restricted before public launch.
- Database snapshot: 5 profiles, 74 Practice attempts, 5 Daily attempts, 79 XP ledger events, 50 achievements, 19 achievement unlocks, 30 cosmetic definitions, 33 user cosmetic inventory rows, 10 level definitions.

### XP and levels — implemented, QA pending
- Daily completion awards 50 XP in complete_daily_attempt, inside the same transaction as the attempt and stats.
- Each non-skipped Practice product awards 10 XP in complete_practice_round.
- The +20 XP Practice session bonus is awarded only when all 10 products are submitted and none was skipped.
- XP ledger uniqueness is (user_id,event_type,source_id), preventing duplicate awards for the same source event.
- Snapshot: 5 Daily ledger events at 50 XP and 74 Practice product events at 10 XP; no full-session bonus event existed at audit time.
- Thresholds 0, 100, 250, 500, 850, 1300, 1850, 2500, 3300 and 4300 are seeded in private.level_definitions.
- Post-level-10 curve exists in both private.calculate_player_level and get-player-progression v2. Add automated boundary tests to prevent formula drift.
- Frontend displays XP rewards and a level/total-XP badge. Visual browser QA remains pending.

### Achievements and cosmetics — implemented foundation, QA pending
- Deployed catalog contains 50 achievements with categories, tiers, localized names/descriptions, criteria and cosmetic reward IDs.
- private.user_achievement_progress stores progress; private.evaluate_player_achievements performs idempotent unlock evaluation and awards linked cosmetics transactionally.
- 30 active cosmetic definitions exist across avatar, frame, background, title and effect types; 33 user inventory rows existed at audit time.
- Authenticated get/equip Edge Functions use private RPCs; equip RPC checks ownership and active status before updating the profile cosmetic slot.
- Achievement result notifications were added in frontend commits e178345 and 3eca0e0.
- Still pending: audit all 50 metric definitions, legacy unlock preservation, actual shipped asset mappings, default inventory provisioning, and browser QA.

### Security remediation performed
- Audit found anon and authenticated had broad table privileges on several public tables, including INSERT/UPDATE/DELETE/TRUNCATE/REFERENCES/TRIGGER. RLS alone does not neutralize TRUNCATE.
- Applied migration revoke_public_client_table_write_privileges: revoked INSERT, UPDATE, DELETE, TRUNCATE, REFERENCES and TRIGGER on all existing public tables from anon and authenticated; granted only column-level UPDATE on profiles.username to authenticated.
- Post-migration verification confirmed no public table permits anon/authenticated INSERT, DELETE, TRUNCATE or table-level UPDATE. Authenticated can update profiles.username only; avatar columns are not directly updatable. Existing SELECT privileges remain governed by RLS.
- Attempt to alter default privileges failed due insufficient privilege and was not applied. Future public tables must have their grants explicitly audited in each migration; do not assume default privileges were changed.
- Security Advisor after remediation: 10 INFO RLS-enabled/no-policy findings (private/service-role-only and session tables intentionally deny direct access) and one WARN for leaked-password protection disabled. Current Supabase Free plan does not support enabling that feature; Pro is required.
- Performance Advisor: 5 unindexed foreign keys and 2 unused indexes. Review after functional QA; do not drop indexes based only on low current traffic.

### Open logic and QA findings
- submit-daily v10 does not reject a submission after 15 seconds; it caps stored elapsed_ms at 15,000. Practice elapsed time is client-supplied and clamped. If 15 seconds is a hard competitive limit, enforce it server-side.
- start-practice v2 validates ten IDs sent by the frontend but does not independently choose/randomize the product set server-side.
- Authenticated end-to-end Daily/Practice browser and API tests were not performed during this audit.
- reset-daily-test v5 was inspected: JWT required and handler always returns HTTP 410; no reset action is performed. Removal is optional cleanup.

### Next actions
1. Inspect reset-daily-test v5 and remove/restrict it safely.
2. Complete authenticated API/browser QA for Daily and Practice, including duplicate/replay, expiry, ownership, skip, 10/10 bonus, and XP idempotency.
3. Enforce the 15-second rule server-side if required by the competitive game design.
4. Audit all 50 achievement metrics and all 30 cosmetic asset mappings/default inventory behavior.
5. Review public SELECT policies and column exposure; preserve the least-privilege write grants established by the remediation migration.
6. Continue profile UI/reserved username work; do not rebuild XP, achievements or cosmetic database foundations.
### Follow-up checks: achievements and cosmetics
- private.get_player_achievement_metrics was inspected. It derives Practice completion/perfect counts from non-skipped attempts, Practice sessions from completed full_completion sessions, combo from recorded max_combo, and Explorer product/category/country counts from unique played product IDs. Daily accuracy achievements require at least 10 Daily attempts; Practice accuracy requires at least 50 non-skipped Practice products.
- Auth signup trigger handle_new_user creates the profile with default cosmetic slots and inserts all default_owned cosmetics into private.user_cosmetics. Five default cosmetics are configured (avatar_default, frame_default, bg_default, title_curious, effect_none).
- Existing users had 6 or 9 cosmetics each at audit time; all five accounts have the five defaults plus achievement unlocks.
- The 50-achievement category distribution is: Getting Started 6, Daily 8, Accuracy 7, Combo 4, Practice 7, Score 4, Explorer 7, Loyalty 7.
## 16. Server-authoritative round timer — 2026-11-18

### Design and implementation
- Daily: `start-daily` already returns the server-created `started_at`; frontend now uses that timestamp for its countdown. `submit-daily` v11 rejects elapsed time above 16,500 ms. `complete_daily_attempt` independently rechecks elapsed time using `clock_timestamp()` after locking the session and stores `least(elapsed, 15000)`.
- Practice: migration `enforce_server_side_round_timers` added `round_order` and `round_started_at` to `practice_play_session_products`, plus `stop_requested` to `practice_play_sessions` and a unique partial index on `(session_id, round_order)`.
- `start-practice` v3 writes the submitted product order and sets a server-generated start timestamp only for round 1. It returns `first_round_started_at`.
- `submit-practice` v18 reads the server timestamp, rejects non-skipped late submissions, ignores the client elapsed value for authority, and passes a normalized market (`Argentina` or `World`) to the completion RPC. This also fixes a pre-existing failure: `practice_attempts.market` only permits `Argentina`/`World`, while product records may contain country-specific market strings.
- `complete_practice_round` independently calculates elapsed time from the locked product row, rejects non-skipped attempts after 16,500 ms, and caps stored elapsed at 15,000 ms. It starts the next product timer at the server with a 1,100 ms transition offset.
- Stop Practice sends `stop_after`; Edge Function marks `stop_requested` before the transaction. The completion RPC closes the session without starting another round and without a full-session bonus unless all ten products were actually submitted.
- A Skip action is accepted after the deadline so the player can advance, but if it arrives after 15,000 ms the server forces score/correct count/combo to zero; skipped products receive no XP. A Skip used before 15 seconds can retain any partial score entered before skipping.
- The 1.5-second grace is an intentional network tolerance: a non-skipped submission arriving between 15,000 and 16,500 ms is accepted and may retain its score, while persisted elapsed is capped at 15,000 ms. This is a deliberate compromise that technically permits up to 1.5 seconds of extra scoring time; it should be reviewed if strict competitive timing is required.

### Deployments
- Supabase migration applied: `enforce_server_side_round_timers`.
- Edge Function versions deployed with JWT verification enabled: `start-practice` v3, `submit-practice` v18, `submit-daily` v11.
- Frontend commits: `82e7d2b3501cb2b12691630f0f4d073bf23d9d03` (timer integration) and `790c0e3158b2f33f7e5324b7aa5c2d4fab03add7` (cache-buster `server-round-timer-20261118`).
- GitHub Pages workflow for cache-buster commit `790c0e3` completed successfully (run 44365960347). This verifies deployment workflow success, not visual browser QA.

### Verification performed
- Reversible Practice RPC test passed: a 17-second non-skipped round was rejected; a valid round persisted a 10 XP result and initialized the next round timestamp; Stop Practice closed the session and did not start another product. Transaction was rolled back; no test rows persisted.
- Reversible Daily RPC test passed: a 17-second attempt was rejected; a valid 1-second attempt completed and stored elapsed at or below 15,000 ms. Transaction was rolled back; no test rows persisted.
- Post-change live counts remained unchanged: 74 Practice attempts, 5 Daily attempts, 79 XP ledger events; zero active Practice/Daily sessions.
- Verified `complete_daily_attempt` and `complete_practice_round` are executable by `service_role` only; anon/authenticated EXECUTE is false.
- Verified timer columns and order index exist. Public client write privilege audit still returns true for the condition that all anon/authenticated INSERT/UPDATE/DELETE/TRUNCATE privileges are absent.
- Security Advisor remains at 10 informational RLS-enabled/no-policy findings on intentionally restricted tables and one leaked-password protection warning (Free plan limitation).

### Not yet verified
- No authenticated live Edge Function session was run because no test-user credentials/session token were available in this work session.
- No real browser QA was performed. The GitHub Pages workflow succeeded, but timer display, Skip, Stop Practice, and Daily expiry still require visual/interactive browser verification.
- The 1.5-second grace and 1.1-second Practice transition offset should be checked under real network latency and on mobile devices.

### Late Skip hardening follow-up
- Migration `zero_late_skipped_practice_scores` updates `complete_practice_round`: a skipped submission arriving after 15,000 ms has score, correct count and combo forced to zero at the database layer.
- `submit-practice` v18 applies the same rule to the response payload so the result screen matches the stored attempt.
- Reversible RPC test passed for a late skipped product: stored score/correct count were zero; Stop Practice still closed the session; no rows persisted after rollback.

## 17. Header simplificado y aplazamiento de Profile/Achievements — 2026-11-18

- **IMPLEMENTED (frontend source):** el header ya no incluye el badge de nivel/XP.
- **IMPLEMENTED (frontend source):** con sesión iniciada, el identificador visible del header es únicamente el username (`user_metadata.username`), no el email. El botón de sesión (SIGN IN / SIGN OUT) se conserva como acción independiente.
- **VERIFIED (live DB):** los 5 perfiles existentes tienen `user_metadata.username` coincidente con `public.profiles.username`; no hace falta una consulta adicional ni modificar cuentas para mostrar el username actual.
- **DECISIÓN DE PRODUCTO:** Profile, Achievements, Cosmetics y la experiencia de Levels/XP quedan preparados en backend, pero sus pantallas/experiencia completa de usuario se aplazan. No crear todavía páginas de perfil, editor de perfil, galería cosmética ni listado/detalle de logros.
- **SCOPE DE ESTE CAMBIO:** solo se simplifica la identidad del header. No se alteran datos, tablas, RPCs, Edge Functions, XP acumulado, niveles calculados ni unlocks existentes.
- **QA:** código actualizado en `index.html` y `app.js`; pendiente verificar visualmente el header en navegador después del despliegue de GitHub Pages.


### Answer feedback regression fix — 2026-11-18

- **DEPLOYED TO MAIN** — frontend commit `df562f4` applies one normalized answer-feedback renderer to both Daily and Practice. It compares submitted guesses with the server-returned matched/rejected answer arrays using the same accent/case/whitespace normalization, rather than relying on exact raw-string equality.
- **DEPLOYED TO MAIN** — correct guesses now receive a visible green `✓`; incorrect guesses receive a red `✕`. Explicit `.chip.good` and `.chip.bad` styles prevent all guesses from inheriting the default green appearance.
- **DEPLOYED TO MAIN** — Daily now reads score and correct count from the nested `attempt` object when those fields are not at the response root; this matches the live `submit-daily` response shape.
- **DEPLOYED TO MAIN** — Practice updates the per-round found counter and applies the same feedback renderer for normal and skipped submissions.
- **CACHE BUSTER** — `index.html` now loads `app.js?v=answer-feedback-20261118`.
- **NOT YET VERIFIED** — GitHub Pages deployment and authenticated browser QA have not yet been confirmed. Backend answer validation and scoring functions were not modified; strict 15-second server enforcement remains unchanged.


### Immediate answer feedback restoration — 2026-11-18

- **IMPLEMENTED (Supabase migration):** `restore_instant_server_answer_feedback` creates a private per-session/product answer-check counter table with RLS enabled and direct client privileges revoked.
- **IMPLEMENTED (Supabase migrations):** `bound_answer_checks_to_append_only_guesses` adds append-only guess history enforcement; `fix_answer_check_counter_initial_value` fixes the initial counter row so the first answer can be checked correctly. The server limits each round to 80 submitted guesses; clients cannot replace earlier guesses to brute-force different answer lists at the same count. The private RPC verifies session ownership, active round, product membership, expiry, and the strict 15-second deadline.
- **DEPLOYED (Supabase Edge Function):** `validate-ingredient` v5 now authenticates the player, loads the answer key only server-side, compares the cumulative guesses, and returns only matched/rejected submitted strings plus provisional count/score/combo data. It does not return the answer key or ingredient list.
- **IMPLEMENTED (frontend source):** `addGuess()` queues an authenticated validation request for each new ingredient in both Daily and Practice, shows a neutral pending state while the request is in flight, applies ✓/✕ as soon as the response arrives, and updates provisional found count and score. Existing final submit endpoints remain authoritative for persisted score, XP, achievements, and result records.
- **IMPLEMENTED (frontend source):** the validation request sequence prevents older responses from overwriting newer feedback; final submission remains authoritative and the strict 15-second deadline is unchanged.
- **CACHE BUSTER:** `index.html` now loads `app.js?v=instant-answer-feedback-20261118c`.
- **SECURITY NOTE:** answer keys remain in privileged server-side RPCs; the validation endpoint returns only correctness for guesses actually submitted. The database tracks append-only guess history and caps a round at 80 guesses. Security Advisor reports 12 expected RLS-enabled/no-policy informational findings (the new private counter table adds one); leaked-password protection remains unavailable on the Free plan.
- **DEPLOYED:** Supabase migration and Edge Function v5. Frontend commits are tracked in GitHub; Pages deployment and authenticated Daily/Practice browser QA are still pending.
- **NOT YET VERIFIED:** no live authenticated request or browser interaction was performed in this work session. Network latency means feedback is immediate after the server response, not a purely local zero-latency comparison. If the network is unavailable, the chip remains pending and the final server submission remains authoritative.


### Regression fix — answer validation and Practice skip — 2026-11-18

- **ROOT CAUSE IDENTIFIED:** the Edge Function called `admin.rpc("consume_game_answer_check")`, but the database function existed only in the non-exposed `private` schema. Supabase JS RPC defaults to `public`, so PostgREST could not resolve the function and the Edge Function incorrectly translated that failure to HTTP 408, `Round is no longer active`. This explains why no answer-check counter rows were created and no guesses received ✓/✕.
- **IMPLEMENTED (Supabase migration):** `expose_service_only_answer_check_rpc` adds a `public.consume_game_answer_check` security-definer wrapper that delegates to the private function. Execute permission is revoked from PUBLIC/anon/authenticated and granted only to service_role. PostgREST schema reload was requested. SQL privilege audit confirms anon=false, authenticated=false, service_role=true for both wrappers.
- **IMPLEMENTED (Supabase migration):** `stabilize_in_round_answer_validation` keeps the strict 15-second server deadline but validates the incoming guess list before loading answer-key data, so internal answer-key lookup time cannot cause an accepted-in-time guess to be rejected afterward.
- **DEPLOYED (Supabase Edge Function):** `validate-ingredient` v6 calls the now-resolvable public service-only RPC and returns a distinct 503 for infrastructure errors instead of disguising them as an expired round.
- **ROOT CAUSE IDENTIFIED (Practice skip):** both Practice submission catch blocks previously recorded a failed round and called `finishPracticeSession()`. A transient skip/save failure therefore ended the entire session.
- **IMPLEMENTED (frontend source):** failed Practice submissions now keep the current Practice session open, restore a retryable Skip product action, and do not append a fake completed/skipped round. The ingredient input is disabled until a new round starts; the next round resets it.
- **CACHE BUSTER:** `index.html` now loads `app.js?v=instant-answer-feedback-20261118d`.
- **NOT YET VERIFIED:** no authenticated live answer request or browser interaction has been run after this correction. GitHub Pages deployment is not confirmed. The hard 15-second deadline and authoritative final scoring remain unchanged.


### Validation latency, final-round save, duplicate marks and image loading — 2026-11-18

- **DEPLOYED (Supabase SQL):** `public.validate_game_answer_check` is a service-role-only security-definer RPC. It validates the authenticated session, active product and strict 15-second deadline, enforces append-only guess history, and returns the private answer key only to the service-role Edge Function in one database roundtrip.
- **DEPLOYED (Supabase Edge Function):** `validate-ingredient` v8 now uses the consolidated RPC instead of multiple sequential database lookups per guess. Answer keys are never returned to the browser.
- **DEPLOYED (Supabase Edge Function):** `submit-practice` v21 recovers the last server-accepted cumulative answer list if the final submit request arrives after 15 seconds. It does not accept guesses that were not validated by the server before the deadline. The completion RPC verifies that the answer-check snapshot was timestamped at or before the round deadline.
- **DEPLOYED (Supabase SQL):** `public.get_practice_answer_snapshot` is service-role-only and reads the append-only validated guess snapshot for the current user's active Practice round.
- **DEPLOYED (Supabase SQL):** `public.complete_practice_round` permits delayed transport of the final submit only when the saved answer-check snapshot is timely. It still does not permit a late answer check or grant extra play time.
- **IMPLEMENTED (frontend source, commit `f546d2593e9f2b1d7259f96b16d12c03231e95d3`):** Practice waits for any validation request already queued before submitting the final round. A queued request still has to pass the server's hard deadline; the client does not extend the timer.
- **IMPLEMENTED (frontend source, commit `f546d2593e9f2b1d7259f96b16d12c03231e95d3`):** Practice image preparation now awaits actual image loading and selects only products whose image successfully loads. This prevents a non-resolving image URL from entering the next Practice session.
- **IMPLEMENTED (frontend CSS, commit `40ce7c477c474beba00a6b95d680f616eabfff65`):** removed the duplicate CSS pseudo-element ✓/✕ marks; JavaScript now renders a single check or cross per guess.
- **DEPLOYED (Supabase Edge Function):** `start-practice` v4 removes the 3-sessions-per-10-minutes throttle as explicitly requested. Authentication, 10 unique ready products, Daily reservation checks and session expiry remain.
- **CACHE BUSTER:** `index.html` now loads `app.js?v=instant-answer-feedback-20261118e`.
- **SECURITY:** verified EXECUTE privileges for `validate_game_answer_check`, `get_practice_answer_snapshot`, `complete_practice_round` and `consume_game_answer_check`: anon=false, authenticated=false, service_role=true.
- **SECURITY ADVISOR:** 12 expected RLS-enabled/no-policy informational findings remain for private/service-role-only tables. Leaked-password protection remains disabled on Free plan.
- **NOT YET VERIFIED:** no authenticated live HTTP/browser session has been played after these changes. GitHub Pages deployment and visual/browser QA are pending.
- **KNOWN BAD IMAGE URL:** `jorgito-alfajor-choco-blanco-55g` currently references a non-resolving `tiendajorgito.com.ar` image host. The product will now be excluded from Practice unless its image loads. Replace its catalog URL with a verified working official asset before making it eligible again.
