import React from 'react';
import { User, Package, CreditCard, HelpCircle, FileText } from 'lucide-react';
import { ProfileMenuItem } from './ProfileMenuItem';
import { ProfileAvatar } from './ProfileAvatar';

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
      <ProfileAvatar 
        name="Иван Иванов"
        imageUrl="https://placehold.co/100x100"
      />
      <div className="p-2">
        {menuItems.map((item) => (
          <ProfileMenuItem key={item.path} {...item} />
        ))}
      </div>
    </nav>
  );
};