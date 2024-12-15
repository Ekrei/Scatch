import React from 'react';
import { NavLink } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';

interface ProfileMenuItemProps {
  icon: LucideIcon;
  text: string;
  path: string;
}

export const ProfileMenuItem: React.FC<ProfileMenuItemProps> = ({ icon: Icon, text, path }) => {
  return (
    <NavLink
      to={path}
      end={path === '/profile'}
      className={({ isActive }) =>
        `flex items-center px-4 py-3 rounded-lg transition-colors ${
          isActive
            ? 'bg-[#E6E9F2] text-gray-900'
            : 'text-gray-600 hover:bg-gray-100'
        }`
      }
    >
      <Icon size={20} className="mr-3" />
      <span className="text-sm">{text}</span>
    </NavLink>
  );
};