import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ProfileLayout } from '../components/Profile/ProfileLayout';
import { PersonalInfo } from '../components/Profile/PersonalInfo/PersonalInfo';
import { OrderHistory } from '../components/Profile/OrderHistory';
import { LoyaltyProgram } from '../components/Profile/LoyaltyProgram/LoyaltyProgram';
import { useAuth } from '../lib/supabase/hooks/useAuth';

export const ProfilePage: React.FC = () => {
  const { user } = useAuth();

  return (
    <ProfileLayout>
      <Routes>
        <Route index element={<PersonalInfo userId={user?.id} />} />
        <Route path="orders" element={<OrderHistory userId={user?.id} />} />
        <Route path="loyalty" element={<LoyaltyProgram userId={user?.id} />} />
        <Route path="faq" element={<div>Вопросы и ответы</div>} />
        <Route path="terms" element={<div>Договоры и условия оплаты</div>} />
      </Routes>
    </ProfileLayout>
  );
};