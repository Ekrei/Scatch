/**
 * @module OrderSummary
 * @description Компонент отображения сводки заказа
 */

import React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../store/store';

/**
 * @interface OrderSummaryProps
 * @property {number} [loyaltyPoints] - Количество бонусных баллов
 * @property {function} [onUseLoyaltyPoints] - Обработчик использования бонусов
 */
interface OrderSummaryProps {
  loyaltyPoints?: number;
  onUseLoyaltyPoints?: (use: boolean) => void;
}

/**
 * Компонент сводки заказа с возможностью использования бонусов
 * @component
 * @example
 * ```tsx
 * <OrderSummary
 *   loyaltyPoints={1000}
 *   onUseLoyaltyPoints={(use) => console.log('Use points:', use)}
 * />
 * ```
 */
export const OrderSummary: React.FC<OrderSummaryProps> = ({
  loyaltyPoints = 0,
  onUseLoyaltyPoints
}) => {
  // ... rest of the code remains the same
};