import React from 'react';
import { User, Package, CreditCard, HelpCircle, FileText, LogOut } from 'lucide-react';
import { ProfileMenuItem } from './ProfileMenuItem';
import { ProfileAvatar } from './ProfileAvatar';
import { useAuth } from '../../../lib/supabase/hooks/useAuth';
import { useProfile } from '../../../lib/supabase/hooks/useProfile';
import { useNavigate } from 'react-router-dom';

export const ProfileSidebar: React.FC = () => {
  const { user, logout } = useAuth();
  const { profile } = useProfile(user?.id);
  const navigate = useNavigate();

  const menuItems = [
    { icon: User, text: 'Личные данные', path: '/profile' },
    { icon: Package, text: 'Мои заказы', path: '/profile/orders' },
    { icon: CreditCard, text: 'Программа лояльности', path: '/profile/loyalty' },
    { icon: HelpCircle, text: 'Вопросы и ответы', path: '/faq' },
    { icon: FileText, text: 'Договоры и условия оплаты', path: '/profile/terms' },
  ];

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Ошибка при выходе:', error);
    }
  };

  return (
    <nav className="bg-white rounded-lg shadow-sm">
      <ProfileAvatar 
        name={profile?.first_name ? `${profile.first_name} ${profile.last_name || ''}`.trim() : 'Гость'}
        imageUrl={`https://api.dicebear.com/7.x/initials/svg?seed=${profile?.first_name || 'Guest'}`}
      />
      <div className="p-2">
        {menuItems.map((item) => (
          <ProfileMenuItem key={item.path} {...item} />
        ))}
        <button
          onClick={handleLogout}
          className="w-full flex items-center px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 transition-colors"
        >
          <LogOut size={20} className="mr-3" />
          <span className="text-sm">Выйти</span>
        </button>
      </div>
    </nav>
  );
};