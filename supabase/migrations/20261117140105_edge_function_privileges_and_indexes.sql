grant select on private.daily_challenge_answers to service_role;
grant select,insert,update,delete on private.product_answers to service_role;
grant select,insert,update,delete on public.daily_play_sessions to service_role;
grant select on public.products,public.daily_challenges to service_role;
grant select,insert,update,delete on public.daily_attempts,public.user_stats,public.user_achievements,public.ingredient_mastery,public.practice_attempts to service_role;
create index if not exists daily_play_sessions_user_id_idx on public.daily_play_sessions(user_id,started_at desc);
