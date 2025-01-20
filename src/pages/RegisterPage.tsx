import React, { useState } from 'react';
import { useAuth } from '../lib/supabase/hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { AuthLayout } from '../components/Auth/AuthLayout';
import { FormInput } from '../components/Auth/FormInput';

export const RegisterPage: React.FC = () => {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setErrors({});

    // Валидация
    if (formData.password !== formData.confirmPassword) {
      setErrors({ confirmPassword: 'Пароли не совпадают' });
      return;
    }

    try {
      await register(formData.email, formData.password);
      navigate('/profile');
    } catch (error) {
      setError('Ошибка регистрации: ' + (error as Error).message);
    }
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
          placeholder="Минимум 6 символов"
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

        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Зарегистрироваться
        </button>
      </form>
      {error && <p className="mt-4 text-sm text-red-600">{error}</p>}
    </AuthLayout>
  );
};