import React, { useState } from 'react';
import { PersonalInfoForm } from './PersonalInfoForm';
import type { PersonalInfoData } from './types';

export const PersonalInfo: React.FC = () => {
  const [formData, setFormData] = useState<PersonalInfoData>({
    firstName: 'Иван',
    lastName: 'Иванов',
    email: 'ivan@example.com',
    phone: '+7 (999) 999-99-99',
    address: 'г. Москва, ул. Примерная, д. 1, кв. 1'
  });

  const handleChange = (field: keyof PersonalInfoData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Сохранено:', formData);
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-6">Личные данные</h2>
      <PersonalInfoForm
        formData={formData}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </div>
  );
};