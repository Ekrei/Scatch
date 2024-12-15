import React from 'react';
import { CreditCard } from 'lucide-react';

interface BonusCardProps {
  balance: number;
}

export const BonusCard: React.FC<BonusCardProps> = ({ balance }) => {
  return (
    <div className="bg-[#E6E9F2] rounded-lg p-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-medium mb-2">Ваш текущий баланс</h3>
          <p className="text-3xl font-bold">{balance} бонусов</p>
        </div>
        <CreditCard size={48} className="text-gray-600" />
      </div>
    </div>
  );
};