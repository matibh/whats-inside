-- Security and query-planning hardening applied to Ingredora.
create or replace function public.set_updated_at()
returns trigger language plpgsql set search_path = ''
as $$
begin new.updated_at = now(); return new; end;
$$;
revoke execute on function public.handle_new_user() from public, anon, authenticated;
revoke execute on function public.set_updated_at() from public, anon, authenticated;

drop policy if exists "Users can update their own profile" on public.profiles;
create policy "Users can update their own profile" on public.profiles for update to authenticated
using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);
drop policy if exists "Users can read their own daily attempts" on public.daily_attempts;
create policy "Users can read their own daily attempts" on public.daily_attempts for select to authenticated using ((select auth.uid()) = user_id);
drop policy if exists "Users can read their own practice attempts" on public.practice_attempts;
create policy "Users can read their own practice attempts" on public.practice_attempts for select to authenticated using ((select auth.uid()) = user_id);
drop policy if exists "Users can read their own stats" on public.user_stats;
create policy "Users can read their own stats" on public.user_stats for select to authenticated using ((select auth.uid()) = user_id);
drop policy if exists "Users can read their own achievements" on public.user_achievements;
create policy "Users can read their own achievements" on public.user_achievements for select to authenticated using ((select auth.uid()) = user_id);
drop policy if exists "Users can read their own ingredient mastery" on public.ingredient_mastery;
create policy "Users can read their own ingredient mastery" on public.ingredient_mastery for select to authenticated using ((select auth.uid()) = user_id);
create index if not exists daily_attempts_user_id_idx on public.daily_attempts(user_id);
create index if not exists user_achievements_achievement_id_idx on public.user_achievements(achievement_id);
