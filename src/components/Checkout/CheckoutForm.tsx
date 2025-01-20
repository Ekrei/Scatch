/**
 * @module CheckoutForm
 * @description Компонент формы оформления заказа
 */

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth, useProfile } from '../../lib/supabase/hooks';
import { FormInput } from '../Auth/FormInput';
import { User, Mail, Phone, MapPin } from 'lucide-react';
import { useForm } from '../../hooks/useForm';
import { required, email, phone } from '../../utils/validation';

/**
 * @interface CheckoutFormProps
 * @property {function} onSubmit - Обработчик отправки формы
 * @property {boolean} isSubmitting - Флаг отправки формы
 */
interface CheckoutFormProps {
  onSubmit: (data: CheckoutFormData) => void;
  isSubmitting: boolean;
}

/**
 * @interface CheckoutFormData
 * @property {string} firstName - Имя
 * @property {string} lastName - Фамилия
 * @property {string} email - Email
 * @property {string} phone - Телефон
 * @property {string} address - Адрес доставки
 */
export interface CheckoutFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
}

/**
 * Компонент формы оформления заказа
 * @component
 * @example
 * ```tsx
 * <CheckoutForm
 *   onSubmit={handleSubmit}
 *   isSubmitting={isSubmitting}
 * />
 * ```
 */
export const CheckoutForm: React.FC<CheckoutFormProps> = ({ onSubmit, isSubmitting }) => {
  // ... rest of the code remains the same
};