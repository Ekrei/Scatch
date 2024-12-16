import React, { useState } from 'react';
import { User, Mail, Phone, MapPin } from 'lucide-react';
import { FormInput } from './FormInput';

interface PersonalInfoForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
}

export const PersonalInfo: React.FC = () => {
  const [formData, setFormData] = useState<PersonalInfoForm>({
    firstName: 'Иван',
    lastName: 'Иванов',
    email: 'ivan@example.com',
    phone: '+7 (999) 999-99-99',
    address: 'г. Москва, ул. Примерная, д. 1, кв. 1'
  });

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // В будущем здесь будет отправка данных на сервер
    console.log('Сохранено:', formData);
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-6">Личные данные</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormInput
            label="Имя"
            icon={User}
            value={formData.firstName}
            onChange={(value) => handleChange('firstName', value)}
          />
          <FormInput
            label="Фамилия"
            icon={User}
            value={formData.lastName}
            onChange={(value) => handleChange('lastName', value)}
          />
        </div>

        <FormInput
          label="Email"
          icon={Mail}
          type="email"
          value={formData.email}
          onChange={(value) => handleChange('email', value)}
        />

        <FormInput
          label="Телефон"
          icon={Phone}
          type="tel"
          value={formData.phone}
          onChange={(value) => handleChange('phone', value)}
        />

        <FormInput
          label="Адрес доставки"
          icon={MapPin}
          value={formData.address}
          onChange={(value) => handleChange('address', value)}
        />

        <div className="flex justify-end space-x-4">
          <button
            type="button"
            className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
          >
            Отменить
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-[#E6E9F2] text-gray-900 rounded-lg hover:bg-[#d8dbe4]"
          >
            Сохранить
          </button>
        </div>
      </form>
    </div>
  );
};