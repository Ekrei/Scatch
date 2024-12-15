import React from 'react';
import { OrderCard } from './OrderCard';
import type { Order } from '../../../types/order';

const MOCK_ORDERS: Order[] = [
  {
    id: "ORD-001",
    date: "2024-03-15",
    status: "Доставлен",
    total: 1250,
    items: [
      { id: "1", name: "Линейка пластиковая", quantity: 2, price: 64 },
      { id: "2", name: "Ручка шариковая", quantity: 3, price: 45 }
    ]
  },
  {
    id: "ORD-002",
    date: "2024-03-10",
    status: "В пути",
    total: 890,
    items: [
      { id: "3", name: "Тетрадь в клетку", quantity: 5, price: 89 },
      { id: "4", name: "Карандаш чернографитный", quantity: 4, price: 35 }
    ]
  }
];

export const OrderHistory: React.FC = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-6">История заказов</h2>
      <div className="space-y-4">
        {MOCK_ORDERS.map((order) => (
          <OrderCard key={order.id} order={order} />
        ))}
      </div>
    </div>
  );
};