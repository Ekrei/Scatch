import React from 'react';
import { User, Mail, Phone, MapPin } from 'lucide-react';
import { FormInput } from './FormInput';
import type { PersonalInfoData } from './types';

interface PersonalInfoFormProps {
  formData: PersonalInfoData;
  onChange: (field: keyof PersonalInfoData, value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export const PersonalInfoForm: React.FC<PersonalInfoFormProps> = ({
  formData,
  onChange,
  onSubmit,
}) => {
  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormInput
          label="Имя"
          icon={User}
          value={formData.firstName}
          onChange={(value) => onChange('firstName', value)}
          isSecure
        />
        <FormInput
          label="Фамилия"
          icon={User}
          value={formData.lastName}
          onChange={(value) => onChange('lastName', value)}
          isSecure
        />
      </div>

      <FormInput
        label="Email"
        icon={Mail}
        type="email"
        value={formData.email}
        onChange={(value) => onChange('email', value)}
        isSecure
      />

      <FormInput
        label="Телефон"
        icon={Phone}
        type="tel"
        value={formData.phone}
        onChange={(value) => onChange('phone', value)}
        isSecure
      />

      <FormInput
        label="Адрес доставки"
        icon={MapPin}
        value={formData.address}
        onChange={(value) => onChange('address', value)}
        isSecure
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
  );
};