/**
 * @module useCatalogFilters
 * @description Хук для управления фильтрацией и сортировкой каталога товаров
 */

import { useState, useMemo } from 'react';
import type { Product } from '../types/product';
import type { SortOption } from '../components/Catalog/CatalogSort';

/**
 * Хук для фильтрации и сортировки списка товаров
 * @param {Product[]} products - Исходный массив товаров
 * @returns {Object} Объект с состоянием фильтров и отфильтрованным списком
 * 
 * @example
 * ```tsx
 * const {
 *   searchQuery,
 *   setSearchQuery,
 *   filteredProducts,
 *   // ... другие значения
 * } = useCatalogFilters(products);
 * ```
 */
export const useCatalogFilters = (products: Product[]) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 0 });
  const [sortOption, setSortOption] = useState<SortOption>('name-asc');

  /**
   * Отфильтрованный и отсортированный список товаров
   * @type {Product[]}
   */
  const filteredProducts = useMemo(() => {
    return products
      .filter((product) => {
        const matchesSearch = product.title
          .toLowerCase()
          .includes(searchQuery.toLowerCase());
        const matchesCategory = !selectedCategory || product.category === selectedCategory;
        const matchesPriceRange =
          (!priceRange.min || product.price >= priceRange.min) &&
          (!priceRange.max || product.price <= priceRange.max);

        return matchesSearch && matchesCategory && matchesPriceRange;
      })
      .sort((a, b) => {
        switch (sortOption) {
          case 'name-asc':
            return a.title.localeCompare(b.title);
          case 'name-desc':
            return b.title.localeCompare(a.title);
          case 'price-asc':
            return a.price - b.price;
          case 'price-desc':
            return b.price - a.price;
          default:
            return 0;
        }
      });
  }, [products, searchQuery, selectedCategory, priceRange, sortOption]);

  return {
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    priceRange,
    setPriceRange,
    sortOption,
    setSortOption,
    filteredProducts,
  };
};