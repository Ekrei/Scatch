/**
 * @module useForm
 * @description Хук для управления формами с валидацией
 */

import { useState, useCallback } from 'react';
import { ValidationRule, validate } from '../utils/validation';

/**
 * @interface FormField
 * @property {string} value - Значение поля
 * @property {string} [error] - Текст ошибки
 * @property {ValidationRule[]} rules - Правила валидации
 */
interface FormField<T extends string> {
  value: string;
  error?: string;
  rules: ValidationRule[];
}

/**
 * @type FormFields
 * @description Тип для объекта полей формы
 */
type FormFields<T extends string> = Record<T, FormField<T>>;

/**
 * @interface UseFormProps
 * @property {Record<T, string>} initialValues - Начальные значения полей
 * @property {Record<T, ValidationRule[]>} validationRules - Правила валидации для полей
 */
interface UseFormProps<T extends string> {
  initialValues: Record<T, string>;
  validationRules: Record<T, ValidationRule[]>;
}

/**
 * Хук для управления формами с валидацией
 * @function
 * @example
 * ```tsx
 * const { fields, setValue, validateAll } = useForm({
 *   initialValues: { email: '', password: '' },
 *   validationRules: {
 *     email: [required, email],
 *     password: [required, minLength(6)]
 *   }
 * });
 * ```
 */
export function useForm<T extends string>({ 
  initialValues,
  validationRules,
}: UseFormProps<T>) {
  // ... rest of the code remains the same
}