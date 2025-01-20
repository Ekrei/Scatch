/*
  # Настройка системы уведомлений

  1. Новые таблицы
    - `notifications`
      - `id` (uuid, primary key)
      - `user_id` (uuid, foreign key to auth.users)
      - `title` (text) - заголовок уведомления
      - `message` (text) - текст уведомления
      - `read` (boolean) - статус прочтения
      - `created_at` (timestamp) - дата создания
  
  2. Security
    - Enable RLS on `notifications` table
    - Add policies for authenticated users to:
      - Read their own notifications
      - Update read status of their notifications
*/

CREATE TABLE IF NOT EXISTS notifications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users NOT NULL,
  title text NOT NULL,
  message text NOT NULL,
  read boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE notifications ENABLE ROW LEVEL SECURITY;

-- Политика для чтения своих уведомлений
CREATE POLICY "Users can read own notifications"
  ON notifications
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

-- Политика для обновления статуса прочтения
CREATE POLICY "Users can update read status of own notifications"
  ON notifications
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);