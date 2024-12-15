import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart } from 'lucide-react';
import { removeFromWishlist } from '../store/slices/wishlistSlice';
import { addToCart } from '../store/slices/cartSlice';
import type { RootState } from '../store/store';

export const WishlistPage: React.FC = () => {
  const wishlistItems = useSelector((state: RootState) => state.wishlist.items);
  const dispatch = useDispatch();

  if (wishlistItems.length === 0) {
    return (
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Избранное</h1>
        <div className="bg-white rounded-lg shadow-sm p-8 text-center">
          <Heart size={48} className="mx-auto mb-4 text-gray-400" />
          <h2 className="text-xl font-semibold mb-2">В избранном пока пусто</h2>
          <p className="text-gray-600 mb-6">
            Добавляйте товары в избранное, чтобы следить за изменениями цен и быстро находить нужные товары
          </p>
          <Link
            to="/"
            className="inline-block bg-[#E6E9F2] text-gray-900 px-6 py-3 rounded-lg hover:bg-[#d8dbe4]"
          >
            Перейти к покупкам
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Избранное</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {wishlistItems.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-sm p-4">
            <div className="relative">
              <img
                src={item.images[0]}
                alt={item.title}
                className="w-full h-48 object-contain mb-4"
              />
              <button
                onClick={() => dispatch(removeFromWishlist(item.id))}
                className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-50"
              >
                <Heart size={20} className="text-red-500" />
              </button>
            </div>
            <h3 className="text-lg font-medium mb-2">{item.title}</h3>
            <div className="flex items-baseline mb-4">
              <span className="text-xl font-bold">{item.price}₽</span>
              {item.oldPrice && (
                <span className="ml-2 text-sm text-gray-400 line-through">
                  {item.oldPrice}₽
                </span>
              )}
            </div>
            <button
              onClick={() => dispatch(addToCart(item))}
              className="w-full bg-[#E6E9F2] text-gray-900 py-2 rounded-lg hover:bg-[#d8dbe4] flex items-center justify-center"
            >
              <ShoppingCart size={20} className="mr-2" />
              В корзину
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};