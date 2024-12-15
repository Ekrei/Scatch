import React from 'react';

interface BonusTransaction {
  orderId: string;
  date: string;
  amount: number;
}

interface BonusHistoryProps {
  transactions: BonusTransaction[];
}

export const BonusHistory: React.FC<BonusHistoryProps> = ({ transactions }) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <div className="p-4 border-b border-gray-200">
        <h3 className="font-medium">История начислений</h3>
      </div>
      <div className="p-4">
        <div className="space-y-4">
          {transactions.map((transaction) => (
            <div key={transaction.orderId} className="flex justify-between items-center">
              <div>
                <div className="text-sm font-medium">Заказ №{transaction.orderId}</div>
                <div className="text-sm text-gray-500">{transaction.date}</div>
              </div>
              <div className="text-green-500 font-medium">+{transaction.amount} бонуса</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};