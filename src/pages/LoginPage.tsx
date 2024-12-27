import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthLayout } from '../components/Auth/AuthLayout';
import { FormInput } from '../components/Auth/FormInput';

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt:', formData);
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
      title="Вход в аккаунт"
      subtitle="Нет аккаунта?"
      linkText="Зарегистрироваться"
      linkTo="/register"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
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
          placeholder="Введите пароль"
        />

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember_me"
              type="checkbox"
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
              Запомнить меня
            </label>
          </div>

          <div className="text-sm">
            <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
              Забыли пароль?
            </a>
          </div>
        </div>

        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Войти
        </button>
      </form>
    </AuthLayout>
  );
};