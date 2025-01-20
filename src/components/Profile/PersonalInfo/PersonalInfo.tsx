import React, { useState } from 'react';
import { useAuth } from '../../../lib/supabase/hooks/useAuth';
import { useProfile } from '../../../lib/supabase/hooks/useProfile';
import { User, Mail, Phone, MapPin } from 'lucide-react';
import { FormInput } from './FormInput';
import type { PersonalInfoData } from './types';

export const PersonalInfo: React.FC = () => {
  const { user } = useAuth();
  const { profile, loading, error, updateProfile } = useProfile(user?.id);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState<PersonalInfoData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
  });

  React.useEffect(() => {
    if (profile) {
      setFormData({
        firstName: profile.first_name || '',
        lastName: profile.last_name || '',
        email: user?.email || '',
        phone: profile.phone || '',
        address: profile.address || '',
      });
    }
  }, [profile, user]);

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка: {error.message}</div>;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await updateProfile({
        first_name: formData.firstName || null,
        last_name: formData.lastName || null,
        phone: formData.phone || null,
        address: formData.address || null,
      });
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  if (!isEditing) {
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Личные данные</h2>
          <button
            onClick={() => setIsEditing(true)}
            className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Редактировать
          </button>
        </div>

        <div className="bg-white rounded-lg p-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center space-x-3">
              <User className="text-gray-400" />
              <div>
                <p className="text-sm text-gray-500">Имя</p>
                <p className="font-medium">{formData.firstName || '—'}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <User className="text-gray-400" />
              <div>
                <p className="text-sm text-gray-500">Фамилия</p>
                <p className="font-medium">{formData.lastName || '—'}</p>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <Mail className="text-gray-400" />
            <div>
              <p className="text-sm text-gray-500">Email</p>
              <p className="font-medium">{formData.email || '—'}</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <Phone className="text-gray-400" />
            <div>
              <p className="text-sm text-gray-500">Телефон</p>
              <p className="font-medium">{formData.phone || '—'}</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <MapPin className="text-gray-400" />
            <div>
              <p className="text-sm text-gray-500">Адрес</p>
              <p className="font-medium">{formData.address || '—'}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Редактирование профиля</h2>
        <button
          onClick={() => setIsEditing(false)}
          className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800"
        >
          Отмена
        </button>
      </div>

      <form onSubmit={handleSubmit} className="bg-white rounded-lg p-6 space-y-6">
        <div className="grid grid-cols-2 gap-6">
          <FormInput
            label="Имя"
            icon={User}
            value={formData.firstName}
            onChange={(value) => setFormData({ ...formData, firstName: value })}
          />
          <FormInput
            label="Фамилия"
            icon={User}
            value={formData.lastName}
            onChange={(value) => setFormData({ ...formData, lastName: value })}
          />
        </div>

        <FormInput
          label="Email"
          icon={Mail}
          value={formData.email}
          onChange={(value) => setFormData({ ...formData, email: value })}
          disabled
        />

        <FormInput
          label="Телефон"
          icon={Phone}
          value={formData.phone}
          onChange={(value) => setFormData({ ...formData, phone: value })}
        />

        <FormInput
          label="Адрес"
          icon={MapPin}
          value={formData.address}
          onChange={(value) => setFormData({ ...formData, address: value })}
        />

        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={() => setIsEditing(false)}
            className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
          >
            Отмена
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Сохранить
          </button>
        </div>
      </form>
    </div>
  );
};