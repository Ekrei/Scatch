import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import { useOrder } from '../lib/supabase/hooks';

export const CheckoutSuccessPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const orderId = location.state?.orderId;
  const { order, loading } = useOrder(orderId);

  if (!orderId) {
    navigate('/');
    return null;
  }

  if (loading) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-16 text-center">
        <div className="animate-pulse">Загрузка...</div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-16">
      <div className="text-center mb-8">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h1 className="text-2xl font-bold mb-2">Заказ успешно оформлен!</h1>
        <p className="text-gray-600">
          Номер заказа: {order?.id}
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <h2 className="text-lg font-semibold mb-4">Детали заказа</h2>
        <div className="space-y-4">
          {order?.items.map((item) => (
            <div key={item.id} className="flex justify-between">
              <span>{item.product_id}</span>
              <span>{item.price}₽</span>
            </div>
          ))}
          <div className="border-t pt-4 flex justify-between font-semibold">
            <span>Итого</span>
            <span>{order?.total}₽</span>
          </div>
        </div>
      </div>

      <div className="flex justify-center space-x-4">
        <button
          onClick={() => navigate('/profile/orders')}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Мои заказы
        </button>
        <button
          onClick={() => navigate('/')}
          className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
        >
          На главную
        </button>
      </div>
    </div>
  );
};