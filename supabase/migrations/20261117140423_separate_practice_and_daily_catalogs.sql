alter table public.products add column if not exists daily_eligible boolean not null default false;
alter table public.daily_challenges
  add constraint daily_challenges_product_id_fkey
  foreign key (product_id) references public.products(id);

create or replace function private.enforce_daily_eligible_product()
returns trigger language plpgsql set search_path=''
as $$
declare eligible boolean;
begin
  select p.daily_eligible into eligible from public.products p where p.id=new.product_id;
  if coalesce(eligible,false) is not true then
    raise exception 'Daily challenges require a product marked daily_eligible';
  end if;
  return new;
end;
$$;
revoke all on function private.enforce_daily_eligible_product() from public,anon,authenticated;
grant execute on function private.enforce_daily_eligible_product() to service_role;
drop trigger if exists daily_challenge_product_eligibility on public.daily_challenges;
create trigger daily_challenge_product_eligibility
before insert or update of product_id on public.daily_challenges
for each row execute function private.enforce_daily_eligible_product();
