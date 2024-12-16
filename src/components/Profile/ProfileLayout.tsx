import React from 'react';
import { ProfileSidebar } from './ProfileSidebar/ProfileSidebar';

interface ProfileLayoutProps {
  children: React.ReactNode;
}

export const ProfileLayout: React.FC<ProfileLayoutProps> = ({ children }) => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <h1 className="text-2xl font-bold mb-6">Личный кабинет</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-1">
          <ProfileSidebar />
        </div>
        <div className="md:col-span-3">
          <div className="bg-white rounded-lg shadow-sm p-6">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};