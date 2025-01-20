import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useAuth, useLoyaltyBalance } from '../lib/supabase/hooks';
import { supabase } from '../lib/supabase/client';
import { CheckoutForm, CheckoutFormData } from '../components/Checkout/CheckoutForm';
import { OrderSummary } from '../components/Checkout/OrderSummary';
import { clearCart } from '../store/slices/cartSlice';

export const CheckoutPage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useAuth();
  const { balance, addPoints } = useLoyaltyBalance(user?.id);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [useLoyaltyPoints, setUseLoyaltyPoints] = React.useState(false);

  const handleSubmit = async (formData: CheckoutFormData) => {
    if (!user) {
      navigate('/login');
      return;
    }

    setIsSubmitting(true);

    try {
      // Создаем заказ
      const { data: order, error: orderError } = await supabase
        .from('orders')
        .insert({
          user_id: user.id,
          status: 'pending',
          total: 1000 // Заменить на реальную сумму
        })
        .select()
        .single();

      if (orderError) throw orderError;

      // Начисляем бонусные баллы (5% от суммы заказа)
      await addPoints(Math.floor(order.total * 0.05), 'order');

      // Очищаем корзину
      dispatch(clearCart());

      // Перенаправляем на страницу успешного оформления
      navigate('/checkout/success', { state: { orderId: order.id } });
    } catch (error) {
      console.error('Checkout error:', error);
      // Добавить обработку ошибок
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8">Оформление заказа</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <CheckoutForm onSubmit={handleSubmit} isSubmitting={isSubmitting} />
        </div>
        <div>
          <OrderSummary
            loyaltyPoints={balance.total}
            onUseLoyaltyPoints={setUseLoyaltyPoints}
          />
        </div>
      </div>
    </div>
  );
};