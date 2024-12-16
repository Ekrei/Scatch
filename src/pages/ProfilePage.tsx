import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ProfileLayout } from '../components/Profile/ProfileLayout';
import { PersonalInfo } from '../components/Profile/PersonalInfo/PersonalInfo';
import { OrderHistory } from '../components/Profile/OrderHistory/OrderHistory';
import { LoyaltyProgram } from '../components/Profile/LoyaltyProgram/LoyaltyProgram';

export const ProfilePage: React.FC = () => {
  return (
    <ProfileLayout>
      <Routes>
        <Route index element={<PersonalInfo />} />
        <Route path="orders" element={<OrderHistory />} />
        <Route path="loyalty" element={<LoyaltyProgram />} />
        <Route path="faq" element={<div>Вопросы и ответы</div>} />
        <Route path="terms" element={<div>Договоры и условия оплаты</div>} />
      </Routes>
    </ProfileLayout>
  );
};