# Ingredora — Project Master Guide

> **Purpose:** this is the working source of truth for project decisions, implementation status, security constraints, pending work, and the order of execution. Read it before making changes and update it in the same work session whenever a decision, implementation, migration, deployment, or test changes the project state.
>
> **Last updated:** 2026-11-19 (10 new private-only US Daily products added and scheduled)
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

The long-term account/progression experience may eventually consist of six areas (Profile, Achievements, Levels & XP, Cosmetics, Statistics, Activity). For production v1, achievements and achievement-linked cosmetics are deferred; only the approved active game/progression features remain.
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
| Achievements | Deferred entirely to the next product version; no achievement UI, unlock evaluation, or rewards in production v1 |
| Achievement rewards | Deferred with achievements; no achievement cosmetics awarded in production v1 |
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

- **DEPLOYED** — migration `group_product_categories_for_explorer_achievements` creates the private category map and updates `private.get_player_achievement_metrics`; 118/118 slugs mapped, 12 groups, 0 unmapped ready categories.
- **TESTED (database)** — live metrics return macro-category counts; progress for both Explorer category achievements was recalculated. Existing unlock rows were retained and completed progress was preserved for already-unlocked achievements. Security Advisor now shows 12 expected RLS-enabled/no-policy informational findings (the new private mapping table adds one); the Free-plan leaked-password warning remains unchanged.
- **DONE — Explorer macro-category taxonomy:** all 118 ready-product category slugs are explicitly mapped in `private.product_category_groups` to 12 broad groups: Beverages, Dairy & Desserts, Cookies & Bakery, Chocolate & Sweets, Savory Snacks, Sauces & Condiments, Canned & Preserved, Soups & Broths, Grains & Pasta, Prepared Foods, Spreads, and Pantry & Seasonings. The table is private, RLS-enabled, and has no client grants. `unique_categories` now counts these broad groups instead of 118 granular slugs; no current ready category is unmapped.
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
- Implemented and verified the curated 12-group Explorer taxonomy covering all 118 current ready-product category slugs.
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
- [x] Audit all criteria/metrics and implement the 12-group Explorer taxonomy (118/118 current category slugs mapped).
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
- **2026-11-18:** Added the dedicated social media and growth strategy document, based on current platform guidance and audience research.

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


### Practice completion failure and validation concurrency — 2026-11-18

- **ROOT CAUSE CONFIRMED FROM LIVE POSTGRES LOGS:** submit-practice v21 repeatedly returned HTTP 500 because complete_practice_round invokes private.evaluate_player_achievements, which invokes private.get_player_achievement_metrics; that function reads private.product_category_groups, but the service_role lacked SELECT on that private table. The PostgreSQL log explicitly reported permission denied for table product_category_groups / SQLSTATE 42501. This is why each Practice round failed to save and the client displayed the Skip retry message.
- **FIXED (live DB):** granted SELECT on private.product_category_groups to service_role only. Verified service_role=true, anon=false, authenticated=false. Executed private.get_player_achievement_metrics under SET ROLE service_role successfully after the grant. This restores the achievement-evaluation step inside the round-completion transaction; no client-facing access to the private table was granted.
- **CONFIRMED USER SESSION IMPACT:** latest affected Practice session 47bcaf36-21d0-4379-97e4-86cff350608b had no submitted products or attempts and remained incomplete; it was not mutated during diagnosis. Other recent failed sessions likewise had no completed attempts.
- **IMPLEMENTED (frontend source, commit f80a87b0b56fc46c1fde2eaf4b8d33cdf7cb35de):** ingredient validation requests are now issued concurrently instead of waiting in a serial promise queue. The append-only cumulative answer snapshot and row lock make the newest cumulative request authoritative; stale earlier requests are rejected without overwriting it. The client waits for all in-flight checks before Practice finalization. This reduces avoidable queue delay but does not eliminate network round-trip latency.
- **CACHE BUSTER:** index.html now loads app.js?v=instant-answer-feedback-20261118f.
- **VALIDATION LATENCY OBSERVED:** recent validate-ingredient v8 server execution was approximately 119–130 ms for POST requests in available logs; network round-trip adds additional latency. No local answer key was exposed because that would reveal the private catalogue to the browser.
- **NOT YET VERIFIED:** after the SELECT grant, no new authenticated Practice round has yet been completed end-to-end. GitHub Pages publication and browser QA remain pending. The fix is grounded in the exact PostgreSQL permission error and a successful read-only execution of the affected metrics function as service_role.


### Validation preflight optimization — 2026-11-18

- **DEPLOYED (Supabase Edge Function):** validate-ingredient v9 adds Access-Control-Max-Age: 86400 to its CORS response. This allows browsers to cache the cross-origin OPTIONS preflight for up to 24 hours and avoids paying an additional preflight round-trip for every ingredient check.
- **LATENCY NOTE:** the latest available v8 function logs showed approximately 119–130 ms execution for POST validation; repeated OPTIONS requests were separately visible. The client now dispatches cumulative validation requests concurrently rather than serially. This improves perceived response time but server verification still requires network communication.
- **ROUND SAVE ROOT CAUSE:** the service_role-only SELECT grant on private.product_category_groups resolves the exact SQLSTATE 42501 observed during complete_practice_round. The round-completion transaction remains responsible for persisting each product immediately; the final Practice screen aggregates the saved per-product results.
- **NOT YET VERIFIED:** no new authenticated Practice session has been run after the permission grant and v9 deployment. Do not claim end-to-end or browser QA until performed.

### Practice local hash validation — 2026-11-18

- **PRODUCT DECISION (explicitly approved):** implement and test local answer feedback in Practice first. Do not change Daily until Practice passes functional and browser regression testing.
- **DEPLOYED (Supabase Edge Function):** `practice-answer-hashes` v1 returns SHA-256 hashes for the ten requested Practice products only. Each product receives a fresh random 128-bit salt per preparation request. Hash inputs use the same normalization as the frontend/server validator (lowercase, Unicode decomposition and diacritic removal, punctuation filtering, whitespace collapse). Response includes hash-to-ingredient indexes and total ingredient count, but never raw ingredient names, aliases, or answer keys. The endpoint verifies all ten products are ready and rejects products reserved for current/future Daily challenges. JWT verification is disabled because homepage preparation starts before sign-in; the function uses only server-side service-role access and returns hashes, not raw keys.
- **SECURITY LIMITATION (intentional first barrier):** salted SHA-256 hashes are not equivalent to secret answer keys. Since ingredient vocabulary is guessable, a determined user can run a dictionary attack against downloaded hashes. This is an obfuscation barrier only, not cryptographic secrecy. Do not describe it as preventing extraction.
- **IMPLEMENTED (frontend source):** homepage loads the Practice catalog, selects ten unique products with image URLs, requests only their hash bundles, and enables Start Practice once metadata and hashes are ready. External image loading runs in the background and no longer gates the Practice button; images may still be loading or fail independently.
- **IMPLEMENTED (frontend source):** Practice computes SHA-256 locally with Web Crypto and compares guesses against the downloaded salted hashes. Correct/incorrect markers, found count, and provisional score are rendered without waiting for the network. Daily still uses the existing server validation path and was not changed.
- **SERVER INTEGRITY PRESERVED:** each Practice guess is still sent to `validate-ingredient` in the background so the server can record its append-only accepted-guess snapshot. Final score, XP, achievements and persisted results continue to be calculated by `submit-practice` / the transactional database RPC, not trusted from the browser. Practice still waits for in-flight server snapshot requests before finalizing; if server checks fail, local feedback remains visible, but saving a round after the strict deadline still requires a timely server-accepted snapshot. The strict 15-second deadline is unchanged.
- **FRONTEND COMMITS:** `1c3e62bcfffaca7478ddf1945186554d3d859b54` (local hash preparation and Practice validation), `1b09f96579254c4cbebbab1f48a1d9ec30dbbaac` (cache buster), `59b5fc390ab5900a8fff161aad4f30df8bea124a` (keep local feedback independent of server snapshot network errors). Latest cache buster: `app.js?v=local-practice-hashes-20261118a`.
- **NOT YET VERIFIED:** no live call to `practice-answer-hashes`, authenticated end-to-end Practice session, deployed GitHub Pages browser test, local hash parity test against real catalog data, or full regression pass has been performed. Do not mark Practice as working until these tests pass.
- **NEXT QA:** verify hash endpoint response contains no raw ingredients; compare local hash results with server results for English/Spanish names, accents, aliases, punctuation, whitespace, duplicate aliases and duplicate guesses; test all 10 rounds, 15-second expiry, Skip, Stop, save/retry, XP and achievements. Only after Practice passes should the same local-hash approach be evaluated for Daily.


### Practice button readiness UX correction — 2026-11-18

- **IMPLEMENTED (frontend source):** the Practice start button is never disabled during catalog/hash/image preparation or on preparation errors. Clicking it before preparation finishes waits for the preparation promise's current work rather than immediately failing.
- **IMPLEMENTED (frontend source):** removed the parenthesized catalog-size suffix from the Practice ready label. The previously visible `(201)` was `catalog.length`, i.e. the number of products returned in the Practice catalog, not the number of products in the session or a game level.
- **NOT YET VERIFIED:** GitHub Pages deployment and browser interaction after this correction remain pending.


### JavaScript syntax regression — 2026-11-18

- **ROOT CAUSE:** a stray double quote after `t("practiceReady")` in `updateLanguage()` caused `Uncaught SyntaxError: Unexpected string` at app.js line 88. This prevented the entire frontend script from parsing.
- **FIXED (frontend source):** removed the extra quote; no other behavior was intentionally changed.
- **NOT YET VERIFIED:** GitHub Pages deployment, browser load, and Practice interaction must be checked after deployment. Do not mark browser QA complete based on this source correction alone.

- **CACHE BUSTER:** updated the script URL to `app.js?v=local-practice-hashes-20261118b` so browsers do not keep the broken cached script.


### Second Practice JavaScript syntax regression — 2026-11-18

- **ROOT CAUSE:** two more stray double quotes remained in `preparePracticeSession()` and `finishPracticeSession()`, both in calls to `status(..., t("practiceReady"))`. The browser reported `missing ) after argument list` at line 169; the second malformed call was also corrected before it could surface.
- **FIXED (frontend source):** removed both extra quotes without changing Practice logic.
- **CACHE BUSTER:** `app.js?v=local-practice-hashes-20261118c` in `index.html` forces clients to fetch the corrected script.
- **NOT YET VERIFIED:** GitHub Pages deployment and browser loading/Practice interaction remain pending.


### Eliminación de esperas innecesarias en Skip / Stop Practice — 2026-11-18

- IMPLEMENTADO (frontend source): Skip Product ya no espera a que terminen las peticiones de snapshots de respuestas antes de enviar el salto. El endpoint submit-practice recibe las respuestas acumuladas y las puntúa del lado servidor si la ronda sigue dentro de los 15 segundos; si el usuario salta después del límite, la regla existente de cero puntos por skip tardío permanece intacta.
- IMPLEMENTADO (frontend source): End Practice / Stop Practice tampoco espera esas peticiones cuando se pulsa dentro de los 15 segundos. Si se pulsa después del límite, conserva la espera por snapshots ya aceptados por el servidor, necesaria para recuperar únicamente respuestas validadas antes del deadline. No se añadió ningún retraso artificial ni se cambió el temporizador.
- VALIDACIÓN DE SOURCE: el archivo completo app.js parsea correctamente con new Function tras retirar su import ESM superior. Cache buster actualizado a app.js?v=local-practice-hashes-20261118d.
- PENDING: GitHub Pages deployment y browser QA real de Skip Product / Stop Practice. No afirmar que el comportamiento visual o la latencia real ya fueron verificados.


### Copy de Practice visible desde el primer render — 2026-11-18

- IMPLEMENTADO (frontend source): el texto `Ten random products · 15 seconds each.` aparece en el HTML inicial, sin esperar autenticación, catálogo, hashes ni precarga de imágenes.
- IMPLEMENTADO (frontend source): al cambiar idioma, el status muestra inmediatamente la traducción de `practiceReady`, siempre que no haya un error real que deba permanecer visible.
- IMPLEMENTADO (frontend source): la carga del catálogo y la preparación de hashes ya no limpian ni reemplazan ese texto por un estado de carga. El botón y la preparación mantienen su comportamiento existente.
- VALIDACIÓN DE SOURCE: `app.js` completo parseado correctamente con `new Function` tras retirar el import ESM superior. Cache buster actualizado a `local-practice-hashes-20261118e`.
- PENDING: GitHub Pages deployment y browser QA visual.


## 4.7 Practice — non-blocking local-first interaction (implementation in progress)

- Practice gameplay UI advances locally: product start, feedback, score, Skip, Stop, timer expiry, and the final result do not await Supabase responses. Early skips preserve locally earned points; skips after the 15-second deadline score zero.
- Practice start creates the server session asynchronously. Local answer-hash validation continues while that request is pending.
- Practice answer snapshots and round submissions are serialized through a background promise queue so snapshots for a round precede its completion, and a completion precedes snapshots for the next product.
- Server-side scoring, answer-key evaluation, XP ledger writes, and session completion remain authoritative. Achievement evaluation is disabled for production v1.
- The browser's 15-second timer remains local. The server still enforces its own 15-second deadline from the timestamp it records for each round. Because the next local round starts before the previous completion response returns, server-side round timestamps can trail the visual start by request/processing latency; this is not an exact shared clock. Do not describe the two clocks as perfectly synchronized.
- Background sync retries transient network/5xx/429 failures up to four attempts. This implementation does not yet provide a durable IndexedDB outbox across tab closure; a closed tab or persistent outage can leave Practice results unsynced.
- Daily code and Daily submission flow are unchanged.
- **Implemented in source:** frontend app.js non-blocking Practice flow; cache-buster updated in index.html.
- **Not yet deployed/verified:** GitHub Pages deployment, parser/integration tests, and browser QA. Do not mark Practice release-ready until these checks pass.


### Practice instant-start preparation cache — 2026-11-18

- IMPLEMENTED IN SOURCE: successful Practice preparation is now persisted in browser `localStorage` as a versioned cache containing the 10 selected safe product records and the salted ingredient hashes/index mappings. Hash maps are serialized as entry arrays and reconstructed as `Map` objects on restore.
- IMPLEMENTED IN SOURCE: cache lifetime is 20 minutes. On a return visit with a valid cache, the set and answer hashes are available synchronously before the user clicks Start Practice; the click can begin the local game without waiting for the catalog or hash endpoints.
- IMPLEMENTED IN SOURCE: image loading remains independent and does not block the click or start timer.
- IMPLEMENTED IN SOURCE: when there is no valid cache (first visit, expired/corrupt cache, or cleared site data), the click immediately changes the button label to `STARTING…` / `INICIANDO…`, leaves the button enabled, and waits for the required product/hash preparation before starting the first 15-second round. The timer does not consume time while hashes are unavailable. Repeated clicks during this pending start are ignored.
- IMPLEMENTED IN SOURCE: if the asynchronous server session cannot be created (including a cached product that became ineligible or reserved for Daily), the local game is stopped, the user is returned to Practice, the stale cache is cleared, and the error is shown. The server remains authoritative for session eligibility and scoring.
- SECURITY NOTE: the local cache stores the same salted hashes already delivered to the browser for local Practice validation; it does not contain plaintext answer keys. This is obfuscation, not strong protection against dictionary attacks or a determined client.
- DAILY: no Daily frontend flow, answer validation, or timer code was changed.
- VALIDATION: full `app.js` source parsed successfully with `new Function` after removing its ESM import. This validates syntax only, not runtime behavior.
- CACHE BUSTER: `app.js?v=practice-instant-cache-20261118a`.
- PENDING: verify GitHub Pages deployment, exercise warm-cache and cold-cache clicks in a real browser, test stale Daily-reserved cache recovery, and confirm no regression in Skip/Stop/answer feedback. Do not claim browser QA or end-to-end success until performed.


## 18. Eliminación del indicador visual de XP/nivel — 2026-11-18

- **IMPLEMENTED (frontend source):** se elimina del resultado de Practice/Daily el indicador combinado `+XP · LEVEL/NIVEL`. No se muestra XP ni nivel en ese bloque de resultados.
- **SCOPE:** este cambio es exclusivamente visual. No modifica los eventos del ledger, los XP históricos, las funciones transaccionales, los puntajes, los logros ni los datos de cuentas existentes. No reintroducir niveles en la interfaz sin una nueva decisión explícita.
- **BUG INVESTIGATION — Practice result showed 0% / 0:** la sesión más reciente inspeccionada (18 Nov 2026, 19:53 local) quedó cerrada en backend con 3 intentos, 350 puntos, 3 respuestas correctas y 44 ingredientes totales. Sus tres intentos fueron persistidos y las llamadas `submit-practice` correspondientes respondieron HTTP 200. Por lo tanto, el 0% / 0 observado en pantalla no coincide con el resultado guardado y apunta a que la interfaz mostró el estado local/provisional antes de la reconciliación asíncrona del servidor. Esto es un diagnóstico probable basado en los datos persistidos y el flujo frontend; no se ha reproducido en navegador.
- **CACHE BUSTER:** `app.js?v=practice-no-level-reward-20261118a`.
- **QA:** sintaxis completa de `app.js` validada tras retirar el import ESM. Browser QA y verificación visual post-deploy pendientes.


### Practice — fallback de imágenes (2026-11-18)

- **SCOPE:** fallback de imágenes habilitado únicamente en Practice. Daily conserva su carga y su imagen principal sin cambios.
- **DATABASE:** migration `practice_product_image_fallbacks` agrega `public.products.fallback_image_url` y crea el bucket público `practice-product-backups` en Supabase Storage (límite 5 MiB por objeto; MIME permitidos: JPEG, PNG, WebP y AVIF). El bucket comienza vacío; no se han copiado imágenes ni asignado URLs secundarias automáticamente.
- **FRONTEND SOURCE:** Practice admite productos con imagen principal o secundaria; precarga ambas en orden y muestra la secundaria si la principal falla. Si ambas fallan, conserva el placeholder existente. La selección y la carga de imágenes siguen sin bloquear el botón ni los 15 segundos de juego.
- **CACHE:** se versiona el cache local de Practice a v2 para descartar registros anteriores sin el nuevo campo.
- **PENDING:** poblar `fallback_image_url` con URLs alternativas verificadas o subir copias autorizadas al bucket y asignar sus URLs. Hasta entonces, productos sin una secundaria configurada seguirán usando solo su imagen principal y el placeholder si falla.
- **DAILY:** no se modificaron la función `daily-challenge`, el frontend Daily ni su temporizador.
- **QA:** pendiente de parseo automatizado, comprobación de URLs reales, prueba de principal fallida/secundaria correcta, ambas fallidas y regresión visual en navegador.


### Imágenes de productos — alcance Practice y Daily (2026-11-18)

- Fuente compartida: `public.products.fallback_image_url`. Practice recibe el campo desde `practice-catalog` v2.
- Daily: `daily-challenge` v8 devuelve la URL alternativa del producto asociado al desafío. El frontend prueba imagen principal y luego alternativa al preparar Daily; durante la ronda también usa el fallback del producto.
- Bucket `practice-product-backups`: público, JPEG/PNG/WebP/AVIF, máximo 5 MiB. La URL pública se sirve por CDN. Referencia: https://supabase.com/docs/guides/storage/serving/downloads
- Función `mirror-product-images` v1 desplegada para copiar imágenes primarias que se puedan descargar, validar su firma binaria y tamaño, subirlas al bucket y guardar el fallback. Lotes de hasta 30 productos. **La ejecución y cobertura de las 230 copias siguen pendientes**.
- Los registros de `daily_challenges` mantienen su imagen principal; la alternativa se consulta desde `products` para evitar duplicar imágenes.
- QA pendiente: ejecutar mirroring, revisar productos fallidos y prueba visual en navegador para Practice y Daily.


### Product-card language switching — 2026-11-18

- **IMPLEMENTED (frontend source):** extracted the current product's localized name, description, and label rendering into `refreshSelectedProductLanguage()`. `setProduct()` uses the same helper when a round starts, and `updateLanguage()` calls it whenever the player switches EN/ES. The visible Practice or Daily product card therefore updates immediately without requesting the catalog again, reloading the product image, restarting the round, or changing guesses, score, validation, session state, or the 15-second timer.
- **DATA CONFIRMED:** the Pepas Trio record already contains both `description_i18n.en` and `description_i18n.es`; the server's `practice-catalog` v2 selects `description_i18n`. No database or Edge Function change was needed.
- **COMMITS:** app.js `939f1645ed561c87b64a24d63a812a18dd6d9123`; index.html cache-buster commit `30c8b44e7bd125ea12ff26908c495aab8c47c806`. New cache-buster: `app.js?v=live-product-language-switch-20261118a`.
- **QA STATUS:** source change and live catalog field availability confirmed. Browser interaction and visual QA have not yet been performed; do not claim they have passed.


## 19. Social media content and growth strategy — 2026-11-18

- **DOCUMENT CREATED:** [INGREDORA_SOCIAL_MEDIA_GROWTH_STRATEGY.md](INGREDORA_SOCIAL_MEDIA_GROWTH_STRATEGY.md) contains the strategic playbook for YouTube, TikTok, Instagram, X and Facebook.
- **SCOPE:** audience research, current platform guidance, positioning, five platform-specific strategies, 100 content concepts (20 per platform), 50 bilingual hooks, tone and editorial rules, EN/ES approach, production workflow, 30-day calendar, acquisition funnel, measurement framework, 15 fully developed post examples and 90-day execution plan.
- **RESEARCH SNAPSHOT:** compiled on 2026-11-18. Includes DataReportal Digital 2027: Argentina (late-2026 figures available at publication) plus official platform guidance from YouTube, TikTok, Meta/Instagram/Facebook and X. Source links and caveats are included in the strategy document.
- **PRODUCT ACCURACY:** the document distinguishes current public gameplay from deferred Profile/Achievements/Cosmetics UI. It instructs social content not to expose private catalog answer keys or imply unavailable features.
- **STATUS:** documentation only. No application code, database schema, Supabase function, catalog data, gameplay rules or user records were modified. The calendar begins 2026-11-19 and is a proposed schedule, not a published content plan.


## 20. Daily and Practice silent loading UI — 2026-11-19

- USER REQUEST: Daily may continue checking the challenge, loading product metadata, and verifying/preloading its image, but must not show transient status text such as “Checking today's challenge…” or “The mystery is still preparing.” Practice may continue loading the catalog and preparing its product/hash set, but must not display the helper line “Ten random products · 15 seconds each.”
- REMOVED FROM THE VISIBLE UI: the Daily status line, Practice status line, Daily eyebrow “TODAY'S CHALLENGE”, and Practice eyebrow “GLOBAL PRACTICE”. The mode titles, descriptions, game controls, and all other copy remain unchanged.
- INTERNAL BEHAVIOR PRESERVED: checkDaily(), renderChallenge(), loadCatalog(), preparePracticeSession(), image preloading, answer-hash preparation, button readiness/disabled state, and error/status assignments in JavaScript were not redesigned. The status helper safely no-ops when those removed status elements are absent. Loading and checking continue; only their on-screen announcements are removed.
- SCOPE: frontend presentation only. No Daily or Practice validation, scoring, answer keys, timers, session creation, API/Edge Function, database, catalog, or user data changes.
- CACHE BUSTER: app.js?v=silent-loading-clean-ui-20261119a.
- QA STATUS: pending full JavaScript syntax validation, HTML/source checks, GitHub Pages deployment verification, and browser QA. Do not claim browser behavior verified until tested.

## 21. Daily local-first interaction — 2026-11-19

- **DEPLOYED** — `daily-challenge` returns a salted SHA-256 answer-hash bundle only to an authenticated user who has not already completed today's Daily. No ingredient strings or aliases are returned. Hashes use the same normalization as Practice; this is a client-feedback optimization, not strong protection against dictionary attacks.
- **DEPLOYED** — Daily opens immediately and starts its local 15-second countdown on click while `start-daily` completes asynchronously. Submission waits for the authenticated server session ID. The local timer begins at click, so it cannot extend the server's strict 15-second deadline.
- **DEPLOYED** — Daily ingredient feedback and provisional score are calculated locally. The result screen appears with provisional totals immediately; `submit-daily` still recalculates and transactionally saves the official score, combo, found/missed ingredients, attempt, XP and achievements, then reconciles the screen.
- **UNCHANGED** — Practice code path, scoring formula, Daily XP values, one-attempt policy, timer duration, database schema and transactional completion RPC.
- **LIMITATION** — salted hashes are susceptible to dictionary guessing; do not describe them as strong secrecy.
- **QA** — syntax and deployment checks recorded separately. Authenticated browser gameplay, slow-network, offline, replay and duplicate-submission tests remain pending.

## 22. Daily product metadata and timeout recovery — 2026-11-19

- **FIXED** — `daily-challenge` now includes the public product name, market label and bilingual descriptions in its challenge metadata. It still does not expose ingredient answers; aliases remain available only as salted hashes to authenticated eligible players.
- **FIXED** — `start-daily` can replace an expired, unconsumed session only after confirming there is no saved Daily attempt. A consumed session or existing attempt remains non-replayable. This recovers abandoned sessions without allowing a second official attempt.
- **FIXED** — Daily's client submits with a 500 ms safety margin before the server's strict 15-second deadline, accounting for the timer tick and request transit. Server-side timing and one-attempt validation remain authoritative. Practice timer is unchanged.
- **FIXED** — the result error state renders explicit empty-list placeholders instead of leaving YOU FOUND / YOU MISSED visually blank. On successful official submission, server-provided ingredient lists replace those placeholders.
- **QA** — JavaScript syntax and source checks passed; deployed Edge Function versions and GitHub Actions are verified separately. Browser end-to-end QA remains pending.

- **FOLLOW-UP FIX** — Daily's public challenge payload now includes the product ID as well as its public display metadata. The game view reuses the image URL that was already successfully preloaded for the Daily card, avoiding a second unnecessary image fetch when switching into the round.

## 23. Daily timer and atomic results transition — 2026-11-19

- **TIMER:** removed the Daily-only 14.5-second early cutoff. Daily now counts down through 1 to 0 and calls finish at 0 (15 seconds from the local click timestamp). Practice timer behavior is unchanged.
- **RESULT TRANSITION:** Daily no longer waits for the local hash-validation promise before submitting the final answer snapshot. It submits directly to the authoritative `submit-daily` endpoint when the timer reaches zero.
- **ATOMIC UI:** the result screen is not revealed with empty ingredient lists. The game screen remains visible at 0 while the official submission is processed; after the server returns, score, percentage, found list, missed list and progression are populated before the result screen is shown. Achievement unlocks are deferred and are not processed.
- **SECURITY / GAME RULES:** no answer strings or aliases were added to the client. `submit-daily` still validates the session against the server-side 15,000 ms limit and remains authoritative for score, found/missed lists, attempt consumption and progression. Achievement evaluation was subsequently disabled for production v1; no scoring, XP, or Practice rules changed.
- **CACHE BUSTER:** `app.js?v=daily-zero-atomic-results-20261119a`.
- **QA:** JavaScript parser check passed before commit. GitHub Pages deployment and authenticated browser timing/network QA remain pending; do not claim the visual behavior is browser-verified.

## 24. Daily result language and achievement endpoint fix — 2026-11-19

- Fixed the Daily result language switch: when the result is active, switching EN/ES now re-renders both the found and missed ingredient lists from the already received localized result payload. Practice result rendering remains separate.
- Removed a duplicate result-language refresh call from the language button handler.
- Achievement unlock rendering now caches the achievement catalog response in memory, so language changes do not issue another request each time.
- Fixed `get-player-achievements` Edge Function v2. The prior implementation called `admin.rpc("get_player_achievements")`, but the actual function lives in the non-exposed `private` schema; PostgREST returned 404/PGRST202, surfaced to the browser as 500. The Edge Function now verifies the user as before and reads the public achievement catalog and that authenticated user's unlocked-achievement rows using the service-role client. Hidden achievements remain filtered unless unlocked. No schema, RLS, scoring, XP, or achievement criteria changes.
- Frontend JavaScript parser check passed. Edge Function v2 deployed with JWT verification enabled. Browser QA is still pending; verify the Daily result language switch in the live GitHub Pages deployment after Pages publishes this commit.
- Cache buster: `daily-results-language-fix-20261119a`.

## 25. Daily submission deadline race and dark timer contrast — 2026-11-19

- Fixed a narrow race in Daily completion: `submit-daily` checks the elapsed time immediately when the request reaches the authenticated Edge Function and captures that server-measured `elapsed` value before answer-key lookup and scoring. The database RPC previously checked the clock a second time after those operations, which could reject a request that had reached the server within 15 seconds simply because server-side processing crossed the deadline.
- Updated `public.complete_daily_attempt` to accept only `p_elapsed_ms` from 0 through 15,000 and use that measured value for the recorded attempt, without a second wall-clock deadline check. Verified the RPC is executable only by `service_role`, not `anon` or `authenticated`; the browser cannot bypass the Edge Function's 15-second check. Session ownership, unconsumed state, session expiry, published challenge, atomic consume/insert, XP, and achievements remain enforced.
- This does not add gameplay time: submissions arriving at the Edge Function after 15,000 ms are still rejected by `submit-daily`. Only backend processing latency after an on-time arrival is excluded.
- Improved dark-theme contrast for the timer label, helper text, and numeric countdown with explicit light foreground colors.
- Cache buster: `daily-timer-contrast-submit-race-20261119a`. SQL definition/grants and frontend CSS/cache were checked after the change. Browser QA remains pending.


## 26. Daily answer-key corrections and Practice return lifecycle — 2026-11-19

- **FIXED — Havanna Daily 2026-11-23:** replaced `private.daily_challenge_answers.ingredients` with the exact master answer key from `private.product_answers` for product `havanna-galletitas-limon-6u-ar`. The key now contains 21 ingredients.
- **FIXED — Sancor Shake Daily 2026-11-28:** replaced the Daily answer key with the exact master key for `sancor-shake-chocolatada-1l-ar`. The key now contains 7 ingredients.
- **VERIFIED:** both Daily JSON answer keys exactly equal their master `private.product_answers.ingredients` values; every entry has Spanish and English names plus an aliases array. No product metadata, challenge dates/status, scoring, timer, Practice answers, or user records were changed.
- **VERIFIED — automatic Daily → Practice eligibility:** deployed `practice-catalog` v2 calculates the current date in `America/Argentina/Buenos_Aires` and excludes products only when they have a `scheduled` or `published` Daily challenge with `challenge_date >=` that local date. Once a Daily date is in the past, the product is automatically included in the next Practice catalog response; no manual move, delete, or status update is required.
- **DEFENSE IN DEPTH:** deployed `practice-answer-hashes` v1 independently applies the same Argentina-local date/status reservation check before issuing Practice answer hashes. `start-practice` also validates Daily reservations server-side.
- **CACHE CAVEAT:** the browser's Practice preparation cache has a 20-minute lifetime. A tab using a previously prepared/cached product set may not display a newly returned Daily product until that cache is refreshed/expired; this does not change backend eligibility. The next catalog/hash preparation and server-side session validation remain authoritative.
- **QA:** SQL verification confirmed 21/21 exact match for Havanna and 7/7 exact match for Sancor, with zero incomplete entries. Edge Function source inspection confirmed the lifecycle filters. No browser-midnight rollover test was performed.


## 27. Ten additional Daily challenges — 2026-11-19

- **SCHEDULED:** added 10 consecutive Argentina-market Daily challenges for 2026-12-17 through 2026-12-26. The existing 30 challenges remain intact; the schedule now contains 40 distinct dates and 40 distinct products, with no product reused.
- **PRODUCTS / DATES:** Dec 17 A.1. Original Steak Sauce 10 oz; Dec 18 Ajinomoto Gyoza; Dec 19 Bonne Maman Strawberry Extra Jam; Dec 20 Cadbury Dairy Milk 45 g; Dec 21 Original Cheerios; Dec 22 Glico Tomato Pretz; Dec 23 Goya Black Beans; Dec 24 Haldiram's Aloo Bhujia; Dec 25 VEGEMITE Original; Dec 26 Whittaker's Peanut Slab.
- **BILINGUAL DATA:** every scheduled row has a product image URL, Spanish and English challenge descriptions, and product names/descriptions in both `name_i18n` and `description_i18n`.
- **ANSWER KEYS:** each new `private.daily_challenge_answers.ingredients` value was copied from that product's existing `private.product_answers.ingredients` master key. SQL verification confirmed exact equality for all 10 products. Ingredient entries were verified to contain English name, Spanish name, and aliases; counts range from 3 to 25.
- **ELIGIBILITY:** only the 10 selected ready products were marked `daily_eligible=true`; no other catalog products were changed. Daily uniqueness and the existing expired-Daily → Practice return lifecycle remain unchanged.
- **TIME WINDOW:** challenges use the existing Argentina Daily window, 00:00 to 00:00 local time (`03:00 UTC` boundaries for these December dates), status `scheduled`.
- **SCOPE:** no frontend, Edge Function, timer, scoring, XP, achievement, session, or user-account changes. Product image URLs exist; actual image rendering/availability was not browser-tested. External manufacturer/technical sources were identified for the selected keys; this database audit is not a substitute for physical-packaging verification where market/variant differences may exist.
- **QA:** SQL read-back confirmed 10/10 dates, unique products, bilingual metadata, non-empty image URLs, Daily keys present, exact master-key equality, and eligibility. Browser Daily gameplay and image-load QA remain pending.

- **POST-AUDIT CORRECTION — IMPORTANT:** the 10 products scheduled for 2026-12-17 through 2026-12-26 were pre-existing catalog records, not newly curated products created from scratch in the private catalog. All 10 IDs were confirmed present in the historical public repository snapshot. They therefore violate the Practice-only rule for the public historical 200-product baseline. They were not deleted or rescheduled during the 2026-11-19 follow-up; they remain scheduled pending a separate replacement operation. Do not treat this batch as a compliant Daily precedent.


## 28. Ten new private-only US Daily products — 2026-11-19

- **CREATED FROM SCRATCH:** 10 new US-market product variants were added to the private catalog. All 10 IDs were checked against both historical public product JSON files and have zero matches; none has appeared in the public repository snapshot.
- **PRIVATE CATALOG FIRST:** added all 10 product records to `matibh/whats-inside-catalog/data/products-world.json`, 20 ingredient/image provenance records to `data/sources-world.json`, and full bilingual ingredient records to `data/catalog-master.md`. Updated private README counts and eligibility rules. The repository remains private.
- **PRODUCTS / DATES:** Dec 27 Cinnamon Toast Crunch 12 oz; Dec 28 REESE'S PUFFS 11.5 oz; Dec 29 Jif Creamy Peanut Butter 16 oz; Dec 30 PLANTERS Salted Dry Roasted Peanuts 1.75 oz; Dec 31 Cheez-It Original 1.5 oz; Jan 1 Frank's RedHot Original 12 oz; Jan 2 French's Classic Yellow Mustard 8 oz; Jan 3 HERSHEY'S Milk Chocolate 1.55 oz; Jan 4 Mott's No Sugar Added Cinnamon Applesauce 3.2 oz; Jan 5 Pepperidge Farm Goldfish Cheddar 6.6 oz.
- **CATEGORY MAPPING:** added `peanut_butter` to Spreads and `applesauce` to Canned & Preserved; reused existing categories for the other new products. Verified 118/118 ready-product category slugs mapped across the same 12 macro groups, with zero unmapped categories.
- **BILINGUAL COMPLETENESS:** every product has a Spanish and English display name, description, and ingredient answer entries. Ingredient counts: 27, 31, 8, 14, 22, 5, 9, 8, 6, and 24 respectively. Every answer entry has Spanish, English, and aliases.
- **SOURCE PROVENANCE:** manufacturer product/SmartLabel sources back the ingredient declarations; package images have separately recorded image-source provenance. Some image sources are retailers rather than manufacturers. The actual image URLs were visually inspected through source results, but app/browser rendering has not been tested.
- **SUPABASE IMPORT:** inserted 10 new rows into `public.products` with `daily_eligible=true`, 10 matching master keys into `private.product_answers`, 10 scheduled `public.daily_challenges` rows, and 10 corresponding `private.daily_challenge_answers` rows copied from the master keys. No schema or RLS changes.
- **SCHEDULE:** 2026-12-27 through 2027-01-05, one product per day, Argentina local midnight to midnight, status `scheduled`, market `Argentina`.
- **VERIFICATION:** all 10 product IDs were absent from the public historical snapshot before import; SQL read-back confirmed 10/10 dates, 10 distinct new products, bilingual metadata, non-empty image URLs, `daily_eligible=true`, zero incomplete ingredient entries, and exact equality between each Daily key and its private master key. Full schedule currently has 50 rows across 50 dates and 50 unique product IDs.
- **IMPORTANT REMAINING REMEDIATION:** the separate 2026-12-17–2026-12-26 batch remains non-compliant because all 10 products are in the historical public snapshot. It was not modified in this operation. Replace those 10 with new private-only products before their dates; do not delete historical Daily records without an explicit replacement plan.
- **SCOPE:** no frontend, Edge Functions, timer, scoring, XP, achievements, user records, or Practice code changed. Browser Daily gameplay and rendered image QA remain pending.


## Production v1 scope correction — achievements deferred

- **PRODUCT DECISION (2026-11-19):** all achievements are postponed to the next product version. Production v1 must not show achievement unlock messages, achievement lists, achievement indicators, or achievement reward notifications.
- **FRONTEND:** removed the result-screen achievement renderer and its call to `get-player-achievements`; removed the `achievementReward` element and achievement-specific styling. Daily and Practice result screens retain score, ingredient lists, and existing XP/progression display.
- **BACKEND:** disabled achievement evaluation inside `public.complete_daily_attempt` and `public.complete_practice_round`. The RPCs return an empty `unlocked` array for backward compatibility. XP, scores, combos, 15-second limits, attempts, stats, ingredient mastery, and Practice completion bonus remain unchanged.
- **DATA PRESERVATION:** existing achievement definitions, progress rows, unlock rows, cosmetics, and user records were not deleted or modified. The feature is dormant for v1 and can be re-enabled in a later version.
- **EDGE FUNCTIONS:** existing submit functions may continue forwarding an empty `unlocked` array; no achievement content is exposed to the frontend and no new unlock evaluation occurs.
- **QA:** static source and SQL verification performed; browser gameplay regression remains pending.
