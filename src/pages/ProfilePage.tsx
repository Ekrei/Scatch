import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ProfileSidebar } from '../components/Profile/ProfileSidebar/ProfileSidebar';
import { PersonalInfo } from '../components/Profile/PersonalInfo/PersonalInfo';
import { OrderHistory } from '../components/Profile/OrderHistory/OrderHistory';
import { LoyaltyProgram } from '../components/Profile/LoyaltyProgram/LoyaltyProgram';

export const ProfilePage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Личный кабинет</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-1">
          <ProfileSidebar />
        </div>
        <div className="md:col-span-3">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <Routes>
              <Route index element={<PersonalInfo />} />
              <Route path="orders" element={<OrderHistory />} />
              <Route path="loyalty" element={<LoyaltyProgram />} />
              <Route path="faq" element={<div>Вопросы и ответы</div>} />
              <Route path="terms" element={<div>Договоры и условия оплаты</div>} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};