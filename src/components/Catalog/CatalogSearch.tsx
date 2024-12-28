import React from 'react';
import { Search } from 'lucide-react';

interface CatalogSearchProps {
  value: string;
  onChange: (value: string) => void;
}

export const CatalogSearch: React.FC<CatalogSearchProps> = ({ value, onChange }) => {
  return (
    <div className="relative">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Поиск товаров..."
        className="w-full px-4 py-2 pl-10 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
      <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
    </div>
  );
};