import React from 'react';
import { useOrders } from '../../lib/supabase/hooks/useOrders';

interface OrderHistoryProps {
  userId: string | undefined;
}

export const OrderHistory: React.FC<OrderHistoryProps> = ({ userId }) => {
  const { orders, loading, error } = useOrders(userId);

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка: {error.message}</div>;

  return (
    <div>
      <h2 className="text-xl font-semibold mb-6">История заказов</h2>
      {orders.length > 0 ? (
        orders.map(order => (
          <div key={order.id} className="mb-4">
            <h3>Заказ №{order.id}</h3>
            <p>Статус: {order.status}</p>
            <p>Сумма: {order.total}₽</p>
          </div>
        ))
      ) : (
        <p>У вас нет заказов.</p>
      )}
    </div>
  );
};