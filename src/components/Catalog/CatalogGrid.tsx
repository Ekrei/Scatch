import React from 'react';
import { ProductCard } from '../ProductCard/ProductCard';
import type { Product } from '../../types/product';

interface CatalogGridProps {
  products: Product[];
}

export const CatalogGrid: React.FC<CatalogGridProps> = ({ products }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};