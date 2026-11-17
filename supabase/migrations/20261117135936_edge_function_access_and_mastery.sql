alter table private.daily_play_sessions set schema public;
alter table public.daily_play_sessions enable row level security;
revoke all on public.daily_play_sessions from public,anon,authenticated;
grant select,insert,update,delete on public.daily_play_sessions to service_role;

create or replace function public.get_daily_answer_key(p_challenge_id uuid)
returns jsonb language sql security invoker set search_path=''
as $$ select ingredients from private.daily_challenge_answers where challenge_id=p_challenge_id $$;
revoke all on function public.get_daily_answer_key(uuid) from public,anon,authenticated;
grant execute on function public.get_daily_answer_key(uuid) to service_role;

create or replace function public.get_product_answer_key(p_product_id text)
returns jsonb language sql security invoker set search_path=''
as $$ select ingredients from private.product_answers where product_id=p_product_id $$;
revoke all on function public.get_product_answer_key(text) from public,anon,authenticated;
grant execute on function public.get_product_answer_key(text) to service_role;

create or replace function public.record_ingredient_mastery(p_user_id uuid,p_category text,p_found integer,p_available integer)
returns void language plpgsql set search_path=''
as $$
begin
 insert into public.ingredient_mastery(user_id,category,attempts,ingredients_found,ingredients_available,updated_at)
 values(p_user_id,p_category,1,p_found,p_available,now())
 on conflict(user_id,category) do update set attempts=public.ingredient_mastery.attempts+1,
 ingredients_found=public.ingredient_mastery.ingredients_found+excluded.ingredients_found,
 ingredients_available=public.ingredient_mastery.ingredients_available+excluded.ingredients_available,updated_at=now();
end;
$$;
revoke all on function public.record_ingredient_mastery(uuid,text,integer,integer) from public,anon,authenticated;
grant execute on function public.record_ingredient_mastery(uuid,text,integer,integer) to service_role;
