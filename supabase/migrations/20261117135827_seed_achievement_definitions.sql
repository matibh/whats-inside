insert into public.achievements(id,name_i18n,description_i18n,icon,points,criteria) values
('first_daily','{"es":"Primera partida","en":"First Daily"}','{"es":"Completá tu primer desafío diario.","en":"Complete your first Daily challenge."}','flag',10,'{"daily_games_played":1}'),
('perfect_daily','{"es":"Ingredientes perfectos","en":"Perfect ingredients"}','{"es":"Encontrá todos los ingredientes de un desafío.","en":"Find every ingredient in a challenge."}','star',50,'{"daily_games_perfect":1}'),
('streak_3','{"es":"Tres al hilo","en":"Three in a row"}','{"es":"Mantené una racha de 3 días.","en":"Reach a 3-day streak."}','flame',30,'{"current_streak":3}'),
('streak_7','{"es":"Una semana","en":"A full week"}','{"es":"Mantené una racha de 7 días.","en":"Reach a 7-day streak."}','calendar',100,'{"current_streak":7}'),
('points_1000','{"es":"Mil puntos","en":"One thousand"}','{"es":"Acumulá 1.000 puntos diarios.","en":"Earn 1,000 Daily points."}','trophy',25,'{"total_daily_points":1000}'),
('points_5000','{"es":"Cinco mil puntos","en":"Five thousand"}','{"es":"Acumulá 5.000 puntos diarios.","en":"Earn 5,000 Daily points."}','award',75,'{"total_daily_points":5000}'),
('ingredients_50','{"es":"Buen paladar","en":"Good taste"}','{"es":"Encontrá 50 ingredientes en Daily.","en":"Find 50 ingredients in Daily."}','leaf',30,'{"total_ingredients_found":50}'),
('daily_10','{"es":"Diez desafíos","en":"Ten Dailies"}','{"es":"Completá 10 desafíos diarios.","en":"Complete 10 Daily challenges."}','medal',50,'{"daily_games_played":10}')
on conflict(id) do nothing;
