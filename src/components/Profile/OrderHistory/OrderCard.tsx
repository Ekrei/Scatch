import React from 'react';
import { Package2, ChevronRight } from 'lucide-react';
import { OrderItem } from '../../../types/order';

interface OrderCardProps {
  order: {
    id: string;
    date: string;
    status: string;
    total: number;
    items: OrderItem[];
  };
}

export const OrderCard: React.FC<OrderCardProps> = ({ order }) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm text-gray-500">Заказ от {order.date}</div>
            <div className="font-medium">№{order.id}</div>
          </div>
          <div className="flex items-center text-sm">
            <Package2 size={16} className="mr-2 text-blue-500" />
            <span>{order.status}</span>
          </div>
        </div>
      </div>
      
      <div className="p-4">
        {order.items.map((item) => (
          <div key={item.id} className="flex justify-between py-2">
            <div className="flex-1">
              <span className="text-sm">{item.name}</span>
              <span className="text-sm text-gray-500 ml-2">× {item.quantity}</span>
            </div>
            <span className="text-sm font-medium">{item.price * item.quantity}₽</span>
          </div>
        ))}
        
        <div className="mt-4 pt-4 border-t border-gray-200 flex justify-between items-center">
          <div className="text-sm text-gray-500">Итого</div>
          <div className="font-semibold">{order.total}₽</div>
        </div>
      </div>
      
      <button className="w-full p-3 text-sm text-gray-600 hover:bg-gray-50 flex items-center justify-center border-t border-gray-200">
        Подробнее <ChevronRight size={16} className="ml-1" />
      </button>
    </div>
  );
};