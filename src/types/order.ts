/**
 * @module Order
 * @description Типы данных, связанные с заказами
 */

/**
 * @interface OrderItem
 * @property {string} id - Идентификатор товара
 * @property {string} name - Название товара
 * @property {number} quantity - Количество
 * @property {number} price - Цена за единицу
 */
export interface OrderItem {
  id: string;
  name: string;
  quantity: number;
  price: number;
}

/**
 * @interface Order
 * @property {string} id - Идентификатор заказа
 * @property {string} date - Дата заказа
 * @property {string} status - Статус заказа
 * @property {number} total - Общая сумма
 * @property {OrderItem[]} items - Товары в заказе
 */
export interface Order {
  id: string;
  date: string;
  status: string;
  total: number;
  items: OrderItem[];
}