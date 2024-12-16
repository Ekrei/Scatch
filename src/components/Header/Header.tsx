import React from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingCart, Heart, User } from 'lucide-react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

export const Header: React.FC = () => {
  const cartItemsCount = useSelector((state: RootState) => 
    state.cart.items.reduce((acc, item) => acc + item.quantity, 0)
  );

  return (
    <header className="bg-[#E6E9F2] py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <img src="src/components/Header/logo.png" alt="Scatch" className="h-10" />
          </Link>
          
          <div className="flex-1 max-w-xl mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Поиск товаров"
                className="w-full py-2 px-4 pr-10 rounded-full border-none focus:ring-2 focus:ring-blue-300"
              />
              <Search className="absolute right-3 top-2.5 text-gray-400" size={20} />
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <Link to="/account" className="flex items-center">
              <User size={24} className="text-gray-700" />
            </Link>
            <Link to="/cart" className="flex items-center">
              <div className="relative">
                <ShoppingCart size={24} className="text-gray-700" />
                {cartItemsCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartItemsCount}
                  </span>
                )}
              </div>
            </Link>
            <Link to="/wishlist">
              <Heart size={24} className="text-gray-700" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};