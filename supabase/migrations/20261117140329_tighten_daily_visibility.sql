revoke execute on function public.rls_auto_enable() from public,anon,authenticated;
drop policy if exists "Published challenges are public" on public.daily_challenges;
create policy "Published challenges are public"
  on public.daily_challenges for select to anon,authenticated
  using(status='published' and now()>=starts_at and now()<ends_at);
