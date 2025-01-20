import React from 'react';
import { useLoyalty } from '../../../lib/supabase/hooks/useLoyalty';
import { Coins } from 'lucide-react';

interface LoyaltyProgramProps {
  userId: string | undefined;
}

export const LoyaltyProgram: React.FC<LoyaltyProgramProps> = ({ userId }) => {
  const { points, loading, error } = useLoyalty(userId);

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка: {error.message}</div>;

  const totalCatcoins = points.reduce((total, point) => total + point.points, 0);

  return (
    <div>
      <div className="bg-white rounded-lg p-6 mb-6">
        <div className="flex items-center gap-3 mb-4">
          <Coins className="text-yellow-500" size={24} />
          <h2 className="text-xl font-semibold">Catcoins</h2>
        </div>
        
        <div className="flex items-baseline gap-2 mb-4">
          <span className="text-3xl font-bold">{totalCatcoins}</span>
          <span className="text-gray-500">монет</span>
        </div>

        <p className="text-gray-600 text-sm">
          Catcoins — это баллы лояльности магазина Scatch. Получайте их за покупки и участие в играх,
          используйте для оплаты до 20% стоимости заказов.
        </p>
      </div>

      <div className="bg-white rounded-lg p-6">
        <h3 className="font-semibold mb-4">История начислений</h3>
        <div className="space-y-3">
          {points.map((point, index) => (
            <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
              <div>
                <p className="font-medium">{point.source === 'memory_game' ? 'Игра "Найди пару"' : 'Покупка'}</p>
                <p className="text-sm text-gray-500">
                  {new Date(point.created_at).toLocaleDateString('ru-RU')}
                </p>
              </div>
              <span className="text-green-600 font-medium">+{point.points}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};