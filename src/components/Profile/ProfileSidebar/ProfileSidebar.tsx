import React from 'react';
import { User, Package, CreditCard, HelpCircle, FileText } from 'lucide-react';
import { ProfileMenuItem } from './ProfileMenuItem';

export const ProfileSidebar: React.FC = () => {
  const menuItems = [
    { icon: User, text: 'Личные данные', path: '/profile' },
    { icon: Package, text: 'Мои заказы', path: '/profile/orders' },
    { icon: CreditCard, text: 'Программа лояльности', path: '/profile/loyalty' },
    { icon: HelpCircle, text: 'Вопросы и ответы', path: '/profile/faq' },
    { icon: FileText, text: 'Договоры и условия оплаты', path: '/profile/terms' },
  ];

  return (
    <nav className="bg-white rounded-lg shadow-sm">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center">
          <img
            src="https://placehold.co/100x100"
            alt="Profile"
            className="w-16 h-16 rounded-full mr-4"
          />
          <div>
            <h2 className="text-lg font-semibold">Иван Иванов</h2>
          </div>
        </div>
      </div>
      <div className="p-2">
        {menuItems.map((item) => (
          <ProfileMenuItem key={item.path} {...item} />
        ))}
      </div>
    </nav>
  );
};