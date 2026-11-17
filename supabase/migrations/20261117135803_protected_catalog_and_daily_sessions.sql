-- Public product metadata is separated from private ingredient answer keys.
create table if not exists public.products (
 id text primary key, name text not null, name_i18n jsonb not null default '{}'::jsonb,
 brand text, country text, market text, region text not null check(region in ('argentina','world')),
 category text not null, package text, image_url text, description_i18n jsonb not null default '{}'::jsonb,
 status text not null default 'ready' check(status in ('ready','draft','review'))
);
alter table public.products enable row level security;
drop policy if exists "Public can read ready product metadata" on public.products;
create policy "Public can read ready product metadata" on public.products for select to anon, authenticated using(status='ready');
grant select on public.products to anon, authenticated;

create table if not exists private.product_answers (
 product_id text primary key references public.products(id) on delete cascade,
 ingredients jsonb not null, ingredients_text text, source_id text, verification text,
 constraint product_answers_is_array check(jsonb_typeof(ingredients)='array')
);
alter table private.product_answers enable row level security;
revoke all on private.product_answers from public, anon, authenticated;
grant select,insert,update,delete on private.product_answers to service_role;

create table if not exists private.daily_play_sessions (
 id uuid primary key default gen_random_uuid(),
 challenge_id uuid not null references public.daily_challenges(id) on delete cascade,
 user_id uuid not null references auth.users(id) on delete cascade,
 started_at timestamptz not null default now(),
 expires_at timestamptz not null default(now()+interval '90 seconds'),
 consumed_at timestamptz, created_at timestamptz not null default now(),
 constraint one_daily_session_per_user unique(challenge_id,user_id),
 constraint daily_session_expiry_after_start check(expires_at>started_at)
);
alter table private.daily_play_sessions enable row level security;
revoke all on private.daily_play_sessions from public,anon,authenticated;
grant select,insert,update,delete on private.daily_play_sessions to service_role;

create index if not exists products_market_category_idx on public.products(market,category) where status='ready';
create index if not exists daily_attempts_challenge_score_idx on public.daily_attempts(challenge_id,score desc,elapsed_ms asc,submitted_at asc);

create or replace function public.record_daily_stats(p_user_id uuid,p_challenge_date date,p_score integer,p_correct_count integer,p_total_ingredients integer)
returns void language plpgsql set search_path=''
as $$
begin
 insert into public.user_stats(user_id,total_daily_points,daily_games_played,daily_games_perfect,current_streak,best_streak,last_daily_date,total_ingredients_found,updated_at)
 values(p_user_id,p_score,1,case when p_correct_count=p_total_ingredients then 1 else 0 end,1,1,p_challenge_date,p_correct_count,now())
 on conflict(user_id) do update set
 total_daily_points=public.user_stats.total_daily_points+excluded.total_daily_points,
 daily_games_played=public.user_stats.daily_games_played+1,
 daily_games_perfect=public.user_stats.daily_games_perfect+excluded.daily_games_perfect,
 current_streak=case when public.user_stats.last_daily_date=p_challenge_date-1 then public.user_stats.current_streak+1 when public.user_stats.last_daily_date=p_challenge_date then public.user_stats.current_streak else 1 end,
 best_streak=greatest(public.user_stats.best_streak,case when public.user_stats.last_daily_date=p_challenge_date-1 then public.user_stats.current_streak+1 when public.user_stats.last_daily_date=p_challenge_date then public.user_stats.current_streak else 1 end),
 last_daily_date=greatest(public.user_stats.last_daily_date,p_challenge_date),
 total_ingredients_found=public.user_stats.total_ingredients_found+excluded.total_ingredients_found,updated_at=now();
end;
$$;
revoke all on function public.record_daily_stats(uuid,date,integer,integer,integer) from public,anon,authenticated;
grant execute on function public.record_daily_stats(uuid,date,integer,integer,integer) to service_role;
