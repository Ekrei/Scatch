import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthLayout } from '../components/Auth/AuthLayout';
import { FormInput } from '../components/Auth/FormInput';

export const RegisterPage: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      setErrors(prev => ({ ...prev, confirmPassword: 'Пароли не совпадают' }));
      return;
    }

    console.log('Registration attempt:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <AuthLayout
      title="Регистрация"
      subtitle="Уже есть аккаунт?"
      linkText="Войти"
      linkTo="/login"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <FormInput
            id="firstName"
            label="Имя"
            type="text"
            value={formData.firstName}
            onChange={handleChange}
            error={errors.firstName}
            placeholder="Иван"
          />

          <FormInput
            id="lastName"
            label="Фамилия"
            type="text"
            value={formData.lastName}
            onChange={handleChange}
            error={errors.lastName}
            placeholder="Иванов"
          />
        </div>

        <FormInput
          id="email"
          label="Email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          placeholder="example@email.com"
        />

        <FormInput
          id="password"
          label="Пароль"
          type="password"
          value={formData.password}
          onChange={handleChange}
          error={errors.password}
          placeholder="Минимум 8 символов"
        />

        <FormInput
          id="confirmPassword"
          label="Подтвердите пароль"
          type="password"
          value={formData.confirmPassword}
          onChange={handleChange}
          error={errors.confirmPassword}
          placeholder="Повторите пароль"
        />

        <div className="flex items-center">
          <input
            id="terms"
            type="checkbox"
            required
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
            Я согласен с{' '}
            <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
              условиями использования
            </a>
          </label>
        </div>

        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Зарегистрироваться
        </button>
      </form>
    </AuthLayout>
  );
};