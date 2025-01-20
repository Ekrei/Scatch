import React from 'react';
import { useProducts } from '../lib/supabase/hooks/useProducts';
import { CatalogGrid } from '../components/Catalog/CatalogGrid';

export const CatalogPage: React.FC = () => {
  const { products, loading, error } = useProducts();

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка: {error.message}</div>;

  return (
    <div className="max-w-7xl mx-auto px-4">
      <h1 className="text-2xl font-bold mb-6">Каталог товаров</h1>
      <CatalogGrid products={products} />
    </div>
  );
};