import React from 'react';
import { Heart } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/slices/cartSlice';
import type { Product } from '../../types/product';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="bg-white rounded-lg shadow-md p-4 relative">
      <button className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full">
        <Heart size={20} className="text-gray-400" />
      </button>
      
      <img
        src={product.images[0]}
        alt={product.title}
        className="w-full h-48 object-contain mb-4"
      />
      
      <h3 className="text-lg font-medium mb-2">{product.title}</h3>
      
      <div className="flex items-baseline mb-4">
        <span className="text-xl font-bold">{product.price}₽</span>
        {product.oldPrice && (
          <span className="ml-2 text-sm text-gray-400 line-through">
            {product.oldPrice}₽
          </span>
        )}
      </div>

      <button
        onClick={() => dispatch(addToCart(product))}
        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
      >
        В корзину
      </button>
    </div>
  );
};