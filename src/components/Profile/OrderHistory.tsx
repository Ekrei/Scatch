import React from 'react';
import { Package2 } from 'lucide-react';

interface Order {
  id: string;
  date: string;
  status: string;
  total: number;
  items: Array<{
    id: string;
    name: string;
    quantity: number;
    price: number;
  }>;
}

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
    status: "Доставлен",
    total: 890,
    items: [
      { id: "3", name: "Тетрадь в клетку", quantity: 5, price: 89 },
      { id: "4", name: "Карандаш чернографитный", quantity: 4, price: 35 }
    ]
  }
];

export const OrderHistory: React.FC = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">История заказов</h2>
      {MOCK_ORDERS.map((order) => (
        <div key={order.id} className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold">Заказ {order.id}</h3>
              <p className="text-gray-600">от {order.date}</p>
            </div>
            <div className="flex items-center">
              <Package2 className="mr-2 text-green-500" />
              <span className="text-green-500">{order.status}</span>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-4">
            {order.items.map((item) => (
              <div key={item.id} className="flex justify-between py-2">
                <span>{item.name} × {item.quantity}</span>
                <span>{item.price * item.quantity}₽</span>
              </div>
            ))}
            <div className="border-t border-gray-200 pt-4 mt-4 flex justify-between font-semibold">
              <span>Итого:</span>
              <span>{order.total}₽</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};