/**
 * @module NotificationBell
 * @description Компонент колокольчика уведомлений с выпадающим списком
 */

import React from 'react';
import { Bell } from 'lucide-react';
import { useNotifications } from '../../hooks/useNotifications';
import { useAuth } from '../../lib/supabase/hooks/useAuth';

/**
 * Компонент колокольчика уведомлений
 * @component
 * @example
 * ```tsx
 * <NotificationBell />
 * ```
 */
export const NotificationBell: React.FC = () => {
  const { user } = useAuth();
  const [isOpen, setIsOpen] = React.useState(false);
  
  // Проверяем авторизацию перед использованием хука
  const notificationsData = useNotifications();
  const notifications = notificationsData?.notifications || [];
  const markAsRead = notificationsData?.markAsRead;

  // Если пользователь не авторизован, не показываем компонент
  if (!user) return null;

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 rounded-full hover:bg-gray-100"
      >
        <Bell size={20} />
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
            {unreadCount}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg z-50 
          sm:w-80 sm:right-0 
          max-sm:fixed max-sm:w-[calc(100%-2rem)] max-sm:right-4 max-sm:left-4 max-sm:mt-4"
        >
          <div className="p-4 border-b border-gray-100">
            <h3 className="font-semibold">Уведомления</h3>
          </div>
          <div className="max-h-96 overflow-y-auto">
            {notifications.length > 0 ? (
              notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`p-4 border-b border-gray-100 last:border-0 ${
                    !notification.read ? 'bg-blue-50' : ''
                  }`}
                  onClick={() => markAsRead?.(notification.id)}
                >
                  <p className="font-medium">{notification.title}</p>
                  <p className="text-sm text-gray-600">{notification.message}</p>
                  <p className="text-xs text-gray-500 mt-1">
                    {new Date(notification.created_at).toLocaleDateString('ru-RU')}
                  </p>
                </div>
              ))
            ) : (
              <div className="p-4 text-center text-gray-500">
                Нет новых уведомлений
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};