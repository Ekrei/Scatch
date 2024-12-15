import React from 'react';
import { NavLink } from 'react-router-dom';
import { User, Package, CreditCard, Bell } from 'lucide-react';

export const ProfileNav: React.FC = () => {
  const navItems = [
    { icon: User, text: 'Личные данные', path: '/profile' },
    { icon: Package, text: 'История заказов', path: '/profile/orders' },
    { icon: CreditCard, text: 'Способы оплаты', path: '/profile/payment' },
    { icon: Bell, text: 'Уведомления', path: '/profile/notifications' },
  ];

  return (
    <nav className="bg-white rounded-lg shadow-md p-4">
      <ul className="space-y-2">
        {navItems.map(({ icon: Icon, text, path }) => (
          <li key={path}>
            <NavLink
              to={path}
              end={path === '/profile'}
              className={({ isActive }) =>
                `flex items-center p-3 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-700 hover:bg-gray-50'
                }`
              }
            >
              <Icon size={20} className="mr-3" />
              {text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};