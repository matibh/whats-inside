-- What's Inside: initial backend schema
-- Apply with: supabase db push
-- Daily answers live in the private schema and are never exposed to browser clients.

create extension if not exists pgcrypto;

create schema if not exists private;
revoke all on schema private from public, anon, authenticated;
grant usage on schema private to service_role;

create table if not exists public.profiles (
  user_id uuid primary key references auth.users(id) on delete cascade,
  username text not null,
  avatar_url text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint profiles_username_length check (char_length(username) between 3 and 20),
  constraint profiles_username_format check (username ~ '^[A-Za-z0-9_]+$')
);

create unique index if not exists profiles_username_lower_uidx
  on public.profiles (lower(username));

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists profiles_set_updated_at on public.profiles;
create trigger profiles_set_updated_at
before update on public.profiles
for each row execute function public.set_updated_at();

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
declare
  requested_username text;
  safe_username text;
begin
  requested_username := coalesce(new.raw_user_meta_data ->> 'username', '');
  safe_username := regexp_replace(requested_username, '[^A-Za-z0-9_]', '', 'g');

  if char_length(safe_username) < 3 then
    safe_username := 'player_' || substr(replace(new.id::text, '-', ''), 1, 8);
  end if;

  insert into public.profiles (user_id, username)
  values (new.id, safe_username)
  on conflict (user_id) do nothing;

  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
after insert on auth.users
for each row execute function public.handle_new_user();

create table if not exists public.daily_challenges (
  id uuid primary key default gen_random_uuid(),
  challenge_date date not null unique,
  market text not null check (market in ('Argentina', 'World')),
  product_id text not null,
  product_name text not null,
  image_url text,
  description_es text,
  description_en text,
  starts_at timestamptz not null,
  ends_at timestamptz not null,
  status text not null default 'scheduled'
    check (status in ('scheduled', 'published', 'closed')),
  created_at timestamptz not null default now(),
  constraint daily_challenge_valid_window check (ends_at > starts_at)
);

create index if not exists daily_challenges_status_date_idx
  on public.daily_challenges (status, challenge_date desc);

create table if not exists private.daily_challenge_answers (
  challenge_id uuid primary key references public.daily_challenges(id) on delete cascade,
  ingredients jsonb not null,
  created_at timestamptz not null default now(),
  constraint daily_answers_is_array check (jsonb_typeof(ingredients) = 'array')
);

create table if not exists public.daily_attempts (
  id uuid primary key default gen_random_uuid(),
  challenge_id uuid not null references public.daily_challenges(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  submitted_at timestamptz not null default now(),
  elapsed_ms integer not null check (elapsed_ms between 0 and 15000),
  score integer not null default 0 check (score >= 0),
  correct_count integer not null default 0 check (correct_count >= 0),
  total_ingredients integer not null check (total_ingredients > 0),
  submitted_answers text[] not null default '{}',
  created_at timestamptz not null default now(),
  constraint one_daily_attempt_per_user unique (challenge_id, user_id),
  constraint daily_attempt_correct_not_over_total check (correct_count <= total_ingredients)
);

create index if not exists daily_attempts_leaderboard_idx
  on public.daily_attempts (challenge_id, score desc, elapsed_ms asc);

create table if not exists public.practice_attempts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  product_id text not null,
  market text not null check (market in ('Argentina', 'World')),
  score integer not null default 0 check (score >= 0),
  correct_count integer not null default 0 check (correct_count >= 0),
  total_ingredients integer not null check (total_ingredients > 0),
  elapsed_ms integer not null check (elapsed_ms between 0 and 15000),
  played_at timestamptz not null default now(),
  constraint practice_attempt_correct_not_over_total check (correct_count <= total_ingredients)
);

create index if not exists practice_attempts_user_date_idx
  on public.practice_attempts (user_id, played_at desc);

create table if not exists public.user_stats (
  user_id uuid primary key references auth.users(id) on delete cascade,
  total_daily_points bigint not null default 0,
  daily_games_played integer not null default 0,
  daily_games_perfect integer not null default 0,
  current_streak integer not null default 0,
  best_streak integer not null default 0,
  last_daily_date date,
  total_ingredients_found bigint not null default 0,
  updated_at timestamptz not null default now(),
  constraint user_stats_nonnegative check (
    total_daily_points >= 0 and daily_games_played >= 0 and
    daily_games_perfect >= 0 and current_streak >= 0 and
    best_streak >= 0 and total_ingredients_found >= 0
  )
);

create table if not exists public.achievements (
  id text primary key,
  name_i18n jsonb not null,
  description_i18n jsonb not null,
  icon text not null,
  points integer not null default 0 check (points >= 0),
  criteria jsonb not null default '{}'::jsonb
);

create table if not exists public.user_achievements (
  user_id uuid not null references auth.users(id) on delete cascade,
  achievement_id text not null references public.achievements(id) on delete cascade,
  unlocked_at timestamptz not null default now(),
  primary key (user_id, achievement_id)
);

create table if not exists public.ingredient_mastery (
  user_id uuid not null references auth.users(id) on delete cascade,
  category text not null,
  attempts integer not null default 0,
  ingredients_found integer not null default 0,
  ingredients_available integer not null default 0,
  updated_at timestamptz not null default now(),
  primary key (user_id, category),
  constraint ingredient_mastery_nonnegative check (
    attempts >= 0 and ingredients_found >= 0 and ingredients_available >= 0
  )
);

alter table public.profiles enable row level security;
alter table public.daily_challenges enable row level security;
alter table public.daily_attempts enable row level security;
alter table public.practice_attempts enable row level security;
alter table public.user_stats enable row level security;
alter table public.achievements enable row level security;
alter table public.user_achievements enable row level security;
alter table public.ingredient_mastery enable row level security;

create policy "Profiles are readable by everyone"
  on public.profiles for select using (true);
create policy "Users can update their own profile"
  on public.profiles for update to authenticated
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

create policy "Published challenges are public"
  on public.daily_challenges for select
  using (status = 'published' and now() >= starts_at);

create policy "Users can read their own daily attempts"
  on public.daily_attempts for select to authenticated
  using (auth.uid() = user_id);
create policy "Users can read their own practice attempts"
  on public.practice_attempts for select to authenticated
  using (auth.uid() = user_id);
create policy "Users can read their own stats"
  on public.user_stats for select to authenticated
  using (auth.uid() = user_id);
create policy "Achievement definitions are public"
  on public.achievements for select using (true);
create policy "Users can read their own achievements"
  on public.user_achievements for select to authenticated
  using (auth.uid() = user_id);
create policy "Users can read their own ingredient mastery"
  on public.ingredient_mastery for select to authenticated
  using (auth.uid() = user_id);

-- No browser role receives INSERT/UPDATE/DELETE policies for competitive results,
-- stats, achievements, or private answers. Edge Functions use service_role and
-- must validate the challenge window, answers, elapsed time, and one-attempt rule.
revoke all on private.daily_challenge_answers from anon, authenticated;
revoke insert, update, delete on public.daily_attempts from anon, authenticated;
revoke insert, update, delete on public.user_stats from anon, authenticated;
revoke insert, update, delete on public.user_achievements from anon, authenticated;
revoke insert, update, delete on public.ingredient_mastery from anon, authenticated;

grant select on public.daily_challenges to anon, authenticated;
grant select on public.profiles, public.achievements to anon, authenticated;
grant select on public.daily_attempts, public.practice_attempts,
  public.user_stats, public.user_achievements, public.ingredient_mastery
  to authenticated;
