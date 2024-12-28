import React from 'react';
import { ArrowUpDown } from 'lucide-react';

export type SortOption = 'price-asc' | 'price-desc' | 'name-asc' | 'name-desc';

interface CatalogSortProps {
  value: SortOption;
  onChange: (value: SortOption) => void;
}

export const CatalogSort: React.FC<CatalogSortProps> = ({ value, onChange }) => {
  return (
    <div className="flex items-center gap-2">
      <ArrowUpDown size={20} className="text-gray-400" />
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as SortOption)}
        className="border-none bg-transparent focus:ring-0"
      >
        <option value="name-asc">По названию (А-Я)</option>
        <option value="name-desc">По названию (Я-А)</option>
        <option value="price-asc">По цене (возрастание)</option>
        <option value="price-desc">По цене (убывание)</option>
      </select>
    </div>
  );
};