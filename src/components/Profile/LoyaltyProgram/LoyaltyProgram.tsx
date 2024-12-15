import React from 'react';
import { Gift } from 'lucide-react';
import { BonusCard } from './BonusCard';
import { BonusHistory } from './BonusHistory';

const MOCK_TRANSACTIONS = [
  { orderId: 'ORD-001', date: '15 марта 2024', amount: 62 },
  { orderId: 'ORD-002', date: '10 марта 2024', amount: 44 },
];

export const LoyaltyProgram: React.FC = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-6">Программа лояльности</h2>
      
      <div className="space-y-6">
        <BonusCard balance={150} />

        <div className="flex items-start space-x-4">
          <div className="p-2 bg-blue-100 rounded-lg">
            <Gift size={24} className="text-blue-600" />
          </div>
          <div>
            <h3 className="font-medium mb-1">Как получать бонусы</h3>
            <p className="text-sm text-gray-600">
              Получайте 5% от суммы каждой покупки в виде бонусов. 1 бонус = 1 рубль при оплате следующих покупок.
            </p>
          </div>
        </div>

        <BonusHistory transactions={MOCK_TRANSACTIONS} />
      </div>
    </div>
  );
};