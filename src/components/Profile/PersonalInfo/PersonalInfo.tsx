import React, { useState } from 'react';
import { PersonalInfoForm } from './PersonalInfoForm';

export const PersonalInfo: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: 'Иван',
    lastName: 'Иванов',
    email: 'ivan@example.com',
    phone: '+7 (999) 999-99-99',
    address: 'Россия, Приморский край, г. Владивосток, ул. Светланская, 22'
  });

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
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