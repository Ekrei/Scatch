import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { ProductCard } from '../ProductCard/ProductCard';
import type { Product } from '../../types/product';

interface ProductSectionProps {
  title: string;
  linkText: string;
  linkUrl: string;
  products: Product[];
}

export const ProductSection: React.FC<ProductSectionProps> = ({
  title,
  linkText,
  linkUrl,
  products,
}) => {
  const navigate = useNavigate();

  const handleProductClick = (productId: string) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className="mb-12">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">{title}</h2>
        <button 
          onClick={() => navigate(linkUrl)}
          className="text-blue-600 hover:text-blue-700 flex items-center"
        >
          {linkText} <ChevronRight size={20} />
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {products.map((product) => (
          <ProductCard 
            key={product.id} 
            product={product} 
            onProductClick={handleProductClick}
          />
        ))}
      </div>
    </div>
  );
};