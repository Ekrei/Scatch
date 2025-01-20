/*
  # Добавление таблицы для результатов игры

  1. Новые таблицы
    - `game_results`
      - `id` (uuid, primary key)
      - `user_id` (uuid, foreign key to auth.users)
      - `game_type` (text) - тип игры
      - `score` (integer) - набранные очки
      - `moves` (integer) - количество ходов
      - `completed_at` (timestamp) - время завершения
      
  2. Security
    - Enable RLS on `game_results` table
    - Add policies for authenticated users
*/

CREATE TABLE IF NOT EXISTS game_results (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users NOT NULL,
  game_type text NOT NULL,
  score integer NOT NULL,
  moves integer NOT NULL,
  completed_at timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now()
);

ALTER TABLE game_results ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can insert their own game results"
  ON game_results
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can view their own game results"
  ON game_results
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);