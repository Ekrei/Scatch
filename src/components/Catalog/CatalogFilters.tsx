import React from 'react';
import { Filter } from 'lucide-react';

interface FilterOption {
  id: string;
  label: string;
}

interface CatalogFiltersProps {
  categories: FilterOption[];
  selectedCategory: string | null;
  onCategoryChange: (category: string | null) => void;
  priceRange: { min: number; max: number };
  onPriceRangeChange: (range: { min: number; max: number }) => void;
}

export const CatalogFilters: React.FC<CatalogFiltersProps> = ({
  categories,
  selectedCategory,
  onCategoryChange,
  priceRange,
  onPriceRangeChange,
}) => {
  return (
    <div className="bg-white rounded-lg p-4 space-y-6">
      <div className="flex items-center gap-2 pb-4 border-b">
        <Filter size={20} />
        <h2 className="font-medium">Фильтры</h2>
      </div>

      <div>
        <h3 className="font-medium mb-3">Категории</h3>
        <div className="space-y-2">
          <button
            onClick={() => onCategoryChange(null)}
            className={`w-full text-left px-2 py-1 rounded ${
              selectedCategory === null ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50'
            }`}
          >
            Все категории
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`w-full text-left px-2 py-1 rounded ${
                selectedCategory === category.id ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-medium mb-3">Цена</h3>
        <div className="flex gap-2">
          <input
            type="number"
            value={priceRange.min}
            onChange={(e) => onPriceRangeChange({ ...priceRange, min: Number(e.target.value) })}
            placeholder="От"
            className="w-full px-3 py-1 border rounded"
          />
          <input
            type="number"
            value={priceRange.max}
            onChange={(e) => onPriceRangeChange({ ...priceRange, max: Number(e.target.value) })}
            placeholder="До"
            className="w-full px-3 py-1 border rounded"
          />
        </div>
      </div>
    </div>
  );
};