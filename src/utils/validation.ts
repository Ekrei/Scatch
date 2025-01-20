/**
 * @module validation
 * @description Утилиты для валидации форм
 */

/**
 * @interface ValidationRule
 * @property {function} test - Функция проверки значения
 * @property {string} message - Сообщение об ошибке
 */
export interface ValidationRule {
  test: (value: string) => boolean;
  message: string;
}

/**
 * Правило проверки обязательного поля
 * @constant
 */
export const required: ValidationRule = {
  test: (value) => value.trim().length > 0,
  message: 'Обязательное поле',
};

/**
 * Правило проверки email адреса
 * @constant
 */
export const email: ValidationRule = {
  test: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
  message: 'Некорректный email адрес',
};

/**
 * Правило проверки телефонного номера
 * @constant
 */
export const phone: ValidationRule = {
  test: (value) => /^\+7\s?\(\d{3}\)\s?\d{3}-\d{2}-\d{2}$/.test(value),
  message: 'Формат: +7 (999) 999-99-99',
};

/**
 * Создает правило проверки минимальной длины
 * @function
 * @param {number} length - Минимальная длина
 * @returns {ValidationRule} Правило валидации
 */
export const minLength = (length: number): ValidationRule => ({
  test: (value) => value.length >= length,
  message: `Минимум ${length} символов`,
});

/**
 * Проверяет значение по набору правил
 * @function
 * @param {string} value - Проверяемое значение
 * @param {ValidationRule[]} rules - Массив правил валидации
 * @returns {string | undefined} Сообщение об ошибке или undefined
 */
export const validate = (
  value: string,
  rules: ValidationRule[]
): string | undefined => {
  for (const rule of rules) {
    if (!rule.test(value)) {
      return rule.message;
    }
  }
  return undefined;
};