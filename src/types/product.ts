/**
 * @module Product
 * @description Типы данных, связанные с продуктами магазина
 */

/**
 * Интерфейс, описывающий структуру данных товара
 * 
 * @interface Product
 * @property {string} id - Уникальный идентификатор товара
 * @property {string} title - Название товара
 * @property {number} price - Текущая цена товара
 * @property {number} [oldPrice] - Старая цена товара (для акций)
 * @property {string} description - Описание товара
 * @property {Record<string, string>} characteristics - Характеристики товара
 * @property {string[]} images - Массив URL изображений товара
 * @property {string} category - Категория товара
 * @property {number} inStock - Количество товара в наличии
 */
export interface Product {
  id: string;
  title: string;
  price: number;
  oldPrice?: number;
  description: string;
  characteristics: Record<string, string>;
  images: string[];
  category: string;
  inStock: number;
}