/**
 * @module API
 * @description RTK Query API для взаимодействия с бэкендом
 */

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Product } from '../types/product';

/**
 * API для работы с данными
 * @example
 * ```ts
 * const { data: products } = useGetProductsQuery();
 * const { data: product } = useGetProductQuery(id);
 * ```
 */
export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    /**
     * Получение списка всех товаров
     * @returns {Product[]} Массив товаров
     */
    getProducts: builder.query<Product[], void>({
      query: () => 'products',
    }),
    
    /**
     * Получение информации о конкретном товаре
     * @param {string} id - ID товара
     * @returns {Product} Информация о товаре
     */
    getProduct: builder.query<Product, string>({
      query: (id) => `products/${id}`,
    }),
  }),
});