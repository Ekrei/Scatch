import React from 'react';
import { Heart } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../store/slices/cartSlice';
import { addToWishlist, removeFromWishlist } from '../../store/slices/wishlistSlice';
import type { Product } from '../../types/product';
import type { RootState } from '../../store/store';

interface ProductCardProps {
  product: Product;
  onProductClick?: (id: string) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onProductClick }) => {
  const dispatch = useDispatch();
  const isInWishlist = useSelector((state: RootState) => 
    state.wishlist.items.some(item => item.id === product.id)
  );

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(addToCart(product));
  };

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (isInWishlist) {
      dispatch(removeFromWishlist(product.id));
    } else {
      dispatch(addToWishlist(product));
    }
  };

  return (
    <div 
      className="bg-white rounded-lg shadow-md p-4 relative cursor-pointer"
      onClick={() => onProductClick?.(product.id)}
    >
      <button 
        className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full z-10"
        onClick={handleWishlistToggle}
      >
        <Heart 
          size={20} 
          className={isInWishlist ? "text-red-500 fill-current" : "text-gray-400"}
        />
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
        onClick={handleAddToCart}
        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
      >
        В корзину
      </button>
    </div>
  );
};