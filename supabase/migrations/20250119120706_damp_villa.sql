/*
  # Система достижений

  1. Новые таблицы
    - `achievements`
      - `id` (uuid, primary key)
      - `name` (text) - название достижения
      - `description` (text) - описание достижения
      - `condition_type` (text) - тип условия (например, 'memory_game_wins')
      - `condition_value` (integer) - значение условия (например, количество побед)
      - `reward_coins` (integer) - награда в catcoins
    
    - `user_achievements`
      - `id` (uuid, primary key)
      - `user_id` (uuid, foreign key to auth.users)
      - `achievement_id` (uuid, foreign key to achievements)
      - `unlocked_at` (timestamp)

  2. Security
    - Enable RLS on both tables
    - Add appropriate policies
*/

-- Таблица достижений
CREATE TABLE IF NOT EXISTS achievements (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text NOT NULL,
  condition_type text NOT NULL,
  condition_value integer NOT NULL,
  reward_coins integer NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Таблица полученных пользователями достижений
CREATE TABLE IF NOT EXISTS user_achievements (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users NOT NULL,
  achievement_id uuid REFERENCES achievements NOT NULL,
  unlocked_at timestamptz DEFAULT now(),
  UNIQUE(user_id, achievement_id)
);

-- Включаем RLS
ALTER TABLE achievements ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_achievements ENABLE ROW LEVEL SECURITY;

-- Политики для achievements
CREATE POLICY "Anyone can read achievements"
  ON achievements
  FOR SELECT
  TO authenticated
  USING (true);

-- Политики для user_achievements
CREATE POLICY "Users can read own achievements"
  ON user_achievements
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

-- Вставляем начальные достижения
INSERT INTO achievements (name, description, condition_type, condition_value, reward_coins) VALUES
  ('Новичок', 'Выиграйте свою первую игру в "Найди пару"', 'memory_game_wins', 1, 50),
  ('Опытный игрок', 'Выиграйте 5 игр в "Найди пару"', 'memory_game_wins', 5, 100),
  ('Мастер памяти', 'Выиграйте 10 игр в "Найди пару"', 'memory_game_wins', 10, 200),
  ('Легенда', 'Выиграйте 25 игр в "Найди пару"', 'memory_game_wins', 25, 500);