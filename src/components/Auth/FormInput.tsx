/**
 * @module FormInput
 * @description Компонент поля ввода с поддержкой валидации
 */

import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

/**
 * @interface FormInputProps
 * @property {string} id - Идентификатор поля
 * @property {string} label - Текст метки поля
 * @property {string} type - Тип поля ввода
 * @property {string} value - Значение поля
 * @property {function} onChange - Обработчик изменения значения
 * @property {string} [placeholder] - Placeholder текст
 * @property {string} [error] - Текст ошибки
 * @property {boolean} [required] - Обязательное поле
 */
interface FormInputProps {
  id: string;
  label: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  error?: string;
  required?: boolean;
}

/**
 * Компонент поля ввода с поддержкой валидации и показа/скрытия пароля
 * @component
 * @example
 * ```tsx
 * <FormInput
 *   id="email"
 *   label="Email"
 *   type="email"
 *   value={email}
 *   onChange={handleChange}
 *   error={errors.email}
 *   required
 * />
 * ```
 */
export const FormInput: React.FC<FormInputProps> = ({
  id,
  label,
  type: initialType,
  value,
  onChange,
  placeholder,
  error,
  required = true,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const type = initialType === 'password' ? (showPassword ? 'text' : 'password') : initialType;

  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="mt-1 relative">
        <input
          id={id}
          name={id}
          type={type}
          value={value}
          onChange={onChange}
          required={required}
          placeholder={placeholder}
          className={`appearance-none block w-full px-3 py-2 border ${
            error ? 'border-red-300' : 'border-gray-300'
          } rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
        />
        {initialType === 'password' && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-500"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        )}
      </div>
      {error && (
        <p className="mt-2 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
};