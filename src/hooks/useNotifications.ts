/**
 * @module useNotifications
 * @description Хук для работы с системой уведомлений
 */

import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase/client';
import { useAuth } from '../lib/supabase/hooks/useAuth';

/**
 * @interface Notification
 * @property {string} id - Идентификатор уведомления
 * @property {string} title - Заголовок
 * @property {string} message - Текст сообщения
 * @property {boolean} read - Статус прочтения
 * @property {string} createdAt - Дата создания
 */
interface Notification {
  id: string;
  title: string;
  message: string;
  read: boolean;
  created_at: string;
}

/**
 * Хук для работы с уведомлениями пользователя
 * @function
 * @example
 * ```tsx
 * const { notifications, markAsRead } = useNotifications();
 * ```
 */
export function useNotifications() {
  const { user } = useAuth();
  const [notifications, setNotifications] = useState<Notification[]>([]);

  useEffect(() => {
    if (!user) return;

    // Загрузка уведомлений
    const loadNotifications = async () => {
      const { data, error } = await supabase
        .from('notifications')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

      if (!error && data) {
        setNotifications(data);
      }
    };

    loadNotifications();

    // Подписка на новые уведомления
    const channel = supabase
      .channel('notifications')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'notifications',
          filter: `user_id=eq.${user.id}`,
        },
        (payload) => {
          setNotifications((prev) => [payload.new as Notification, ...prev]);
        }
      )
      .subscribe();

    return () => {
      channel.unsubscribe();
    };
  }, [user]);

  const markAsRead = async (notificationId: string) => {
    if (!user) return;

    const { error } = await supabase
      .from('notifications')
      .update({ read: true })
      .eq('id', notificationId)
      .eq('user_id', user.id);

    if (!error) {
      setNotifications((prev) =>
        prev.map((n) =>
          n.id === notificationId ? { ...n, read: true } : n
        )
      );
    }
  };

  return {
    notifications,
    markAsRead,
  };
}