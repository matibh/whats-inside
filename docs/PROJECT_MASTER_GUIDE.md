# Ingredora — Project Master Guide

> **Purpose:** this is the working source of truth for project decisions, implementation status, security constraints, pending work, and the order of execution. Read it before making changes and update it in the same work session whenever a decision, implementation, migration, deployment, or test changes the project state.
>
> **Last updated:** 2026-11-18 (live audit refresh)  
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
- Rate limit: 3 sessions per user per 10 minutes.
- `start-practice` requires a JWT/user, checks 10 unique ready product IDs, checks Daily reservations, creates a session and records its products.
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
- **DONE — server-authoritative timer deployed** — each new Practice product row stores its server-side `round_started_at` and `round_order`; the completion RPC independently checks elapsed wall-clock time. Non-skipped submissions are accepted through 15 seconds plus a 1.5-second network grace, while persisted elapsed time is capped at 15,000 ms. The client-supplied `elapsed_ms` is ignored for authority.

### 4.3 Daily sessions and submissions

- **DONE** — `start-daily` requires authentication and no longer returns an answer key.
- **DONE** — `submit-daily` calls the transactional `complete_daily_attempt(...)` RPC.
- **DONE** — transaction locks and validates the user's Daily session, checks the challenge is published, consumes the session, inserts the attempt, updates Daily stats and ingredient mastery, evaluates current achievements, and stores unlocks atomically.
- **DONE** — the RPC returns only the attempt fields needed by the client plus unlocked achievements; it does not return user ID, challenge ID, or submitted answers.
- **DONE** — RPC is executable only by `service_role`.
- **DONE** — a reversible transaction test was performed; no test rows were left behind.
- **DONE — server-authoritative 15-second enforcement deployed** — submit-daily v11 and complete_daily_attempt calculate elapsed time from the server session start, reject submissions after 16.5 seconds (15 seconds + 1.5-second network grace), and persist at most 15,000 ms. Frontend timer now uses the server `started_at` value.
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

Once rewards and thresholds are approved:
- Create an append-only/idempotent XP ledger.
- Use unique source references so retries cannot grant XP twice.
- Daily XP source should be the unique Daily attempt (or another immutable attempt identifier), not merely the calendar date.
- Practice per-product XP source should be the unique Practice attempt ID.
- Full-session bonus source should be the Practice session ID and only be awarded once when all 10 products are validly completed.
- Integrate awards inside the same database transaction that completes the corresponding Daily/Practice attempt, or use an equally safe transactional design.
- Keep authoritative total XP and current level server-derived. Do not trust client totals/level.
- Define behavior for deleted/invalid attempts, refunds/reversals, and replayed requests before production.
- Define whether XP is cumulative lifetime XP; recommendation is cumulative and never spent.
- Add tests for duplicate submission, retry, concurrent submissions, partial sessions, and level boundary crossings.

**Current status:** XP ledger, XP awards, level table, level calculation and progression endpoint are implemented. Browser QA and concurrency/idempotency tests remain pending.

---

## 6. Achievements

### Existing database catalog

There are currently 50 achievement records in the live database; the original eight legacy entries have been expanded/replaced. Verify migration history before assuming legacy IDs were retained:
1. First Daily — Primer Daily
2. Ten Dailies — 10 Daily
3. Good taste — 50 ingredients
4. Perfect ingredients — Daily perfecto
5. One thousand — 1,000 puntos
6. Five thousand — 5,000 puntos
7. Three in a row — racha de 3 días
8. A full week — racha de 7 días

There are currently 19 unlock records in `user_achievements` (5 user accounts exist).

### Agreed reward policy
- Achievements are permanent.
- Rewards are cosmetic only.
- Achievements grant 0 XP.
- No gameplay advantages, score multipliers, or currency rewards.

### Pending work
- Audit the criteria and current consumers of `achievements.points` before removing, deprecating, or ignoring that field. Do not drop it blindly.
- Review the 8 existing achievements for naming, criteria, translations, and compatibility with existing unlocks.
- The earlier target proposal was a catalog of 50 achievements across Getting Started, Daily, Accuracy, Combo, Practice, Score, Explorer, and Loyalty. This is a planning target, not an approved final list.
- Define every achievement with stable ID, category, criteria, display name/description in ES/EN, hidden/visible status, and cosmetic reward ID.
- Explorer achievements require consistent product/catalog tags.
- Hidden achievements must not leak the current Daily product, answer key, or other secret challenge data.
- Ensure achievement evaluation is idempotent and transactional with the qualifying event.
- Preserve existing unlocks when migrating IDs or criteria.
- Add tests for thresholds, repeated triggers, streak boundaries, timezone/date boundaries, and simultaneous unlocks.

---

## 7. Cosmetics

Approved:
- Preset avatar gallery; no image uploads.
- Achievement rewards are cosmetic only.
- No shop, coins, paid currency, or gameplay-affecting items.

Pending:
- Define the preset avatar catalog and stable IDs.
- Define cosmetic types (avatar, frame, title, badge, theme, etc.) only where useful; do not expand scope without a reason.
- Create inventory/unlock records and equip state.
- Validate ownership and unlock eligibility on the server.
- Define default cosmetic and fallback behavior if an item is retired.
- Build gallery/equip UI and public display.
- Test that users cannot equip an unowned item or spoof a cosmetic ID.

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
- [x] Move Practice session selection and validation server-side.
- [x] Add server-side Practice session ownership, expiry, unique-product, and duplicate-submit checks.
- [x] Make Practice attempt persistence atomic.
- [x] Remove answer key from Daily start response.
- [x] Make Daily completion and related stats/unlocks transactional.
- [x] Add profile username uniqueness and 30-day change cooldown foundation.
- [x] Enforce 15-second Daily and per-product Practice timers on the server (with 1.5-second network grace; persisted elapsed capped at 15 seconds).
- [ ] Complete real authenticated browser/API QA for Daily and Practice.
- [ ] Re-run final security endpoint/RPC/grants audit.
- [ ] Re-run Supabase Security Advisor and document expected/actionable warnings.

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
- [ ] Audit existing 8 achievements and all consumers of `points`.
- [ ] Finalize catalog and criteria (target proposal: 50; not yet final).
- [ ] Define ES/EN text and stable IDs.
- [ ] Define cosmetic reward mapping.
- [ ] Implement/verify transactional idempotent unlock evaluation.
- [ ] Preserve historical unlocks.
- [ ] Add achievement list, detail, hidden achievement, and unlocked states.
- [ ] Test every criterion and edge case.

### Phase 4 — Cosmetics
- [ ] Define preset avatar and cosmetic catalogs.
- [ ] Implement inventory/unlocks/equipping schema.
- [ ] Enforce ownership server-side.
- [ ] Implement gallery and equip UI.
- [ ] Show selected cosmetics on profiles.
- [ ] Test unauthorized equip attempts and retired-item fallback.

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

- Round duration: 15 seconds. Backend allows a 1.5-second request grace after the deadline but caps the recorded elapsed time at 15,000 ms.
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

1. Complete authenticated API/browser QA for Daily and Practice, especially 15-second timeout, 1.5-second grace, replay, expiry, ownership, skip, Stop Practice, and full-session bonus.
2. Audit all 50 achievement criteria and 30 cosmetic asset mappings; confirm profile UI/default inventory behavior.
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
- `submit-practice` v17 reads the server timestamp, rejects non-skipped late submissions, ignores the client elapsed value for authority, and passes a normalized market (`Argentina` or `World`) to the completion RPC. This also fixes a pre-existing failure: `practice_attempts.market` only permits `Argentina`/`World`, while product records may contain country-specific market strings.
- `complete_practice_round` independently calculates elapsed time from the locked product row, rejects non-skipped attempts after 16,500 ms, and caps stored elapsed at 15,000 ms. It starts the next product timer at the server with a 1,100 ms transition offset.
- Stop Practice sends `stop_after`; Edge Function marks `stop_requested` before the transaction. The completion RPC closes the session without starting another round and without a full-session bonus unless all ten products were actually submitted.
- Skipped products can still be submitted after the timer, but remain skipped and receive no product XP; this preserves the explicit Skip action while preventing late scored submissions.
- The 1.5-second grace is an intentional network tolerance, not extra score time: persisted elapsed is capped at 15 seconds. This is a deliberate compromise between strict client experience and real network transit.

### Deployments
- Supabase migration applied: `enforce_server_side_round_timers`.
- Edge Function versions deployed with JWT verification enabled: `start-practice` v3, `submit-practice` v17, `submit-daily` v11.
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