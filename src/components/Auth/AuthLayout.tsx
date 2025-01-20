/**
 * @module AuthLayout
 * @description Компонент разметки для страниц аутентификации
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { LogIn } from 'lucide-react';

/**
 * @interface AuthLayoutProps
 * @property {React.ReactNode} children - Дочерние элементы (форма)
 * @property {string} title - Заголовок страницы
 * @property {string} subtitle - Подзаголовок
 * @property {string} linkText - Текст ссылки
 * @property {string} linkTo - Путь для перехода
 */
interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  linkText: string;
  linkTo: string;
}

/**
 * Компонент разметки для страниц аутентификации
 * @component
 * @example
 * ```tsx
 * <AuthLayout
 *   title="Вход"
 *   subtitle="Нет аккаунта?"
 *   linkText="Зарегистрироваться"
 *   linkTo="/register"
 * >
 *   <LoginForm />
 * </AuthLayout>
 * ```
 */
export const AuthLayout: React.FC<AuthLayoutProps> = ({
  children,
  title,
  subtitle,
  linkText,
  linkTo,
}) => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <LogIn className="h-12 w-12 text-blue-600" />
        </div>
        <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">
          {title}
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          {subtitle}{' '}
          <Link to={linkTo} className="font-medium text-blue-600 hover:text-blue-500">
            {linkText}
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          {children}
        </div>
      </div>
    </div>
  );
};