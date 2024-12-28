import React from 'react';
import { CatalogSearch } from '../components/Catalog/CatalogSearch';
import { CatalogFilters } from '../components/Catalog/CatalogFilters';
import { CatalogSort } from '../components/Catalog/CatalogSort';
import { CatalogGrid } from '../components/Catalog/CatalogGrid';
import { useCatalogFilters } from '../hooks/useCatalogFilters';
import { MOCK_PRODUCTS } from '../data/mockProducts';

const CATEGORIES = [
  { id: 'office', label: 'Офисные принадлежности' },
  { id: 'paper', label: 'Бумажная продукция' },
  { id: 'stationery', label: 'Канцтовары' },
];

export const CatalogPage: React.FC = () => {
  const {
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    priceRange,
    setPriceRange,
    sortOption,
    setSortOption,
    filteredProducts,
  } = useCatalogFilters(MOCK_PRODUCTS);

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Каталог товаров</h1>
        <CatalogSort value={sortOption} onChange={setSortOption} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1">
          <CatalogFilters
            categories={CATEGORIES}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            priceRange={priceRange}
            onPriceRangeChange={setPriceRange}
          />
        </div>

        <div className="lg:col-span-3">
          <div className="mb-6">
            <CatalogSearch value={searchQuery} onChange={setSearchQuery} />
          </div>

          {filteredProducts.length > 0 ? (
            <CatalogGrid products={filteredProducts} />
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500">По вашему запросу ничего не найдено</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};