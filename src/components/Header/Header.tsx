import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useAuth } from '../../lib/supabase/hooks/useAuth';
import { 
  User, 
  Heart, 
  ShoppingCart, 
  LogIn,
  GamepadIcon
} from 'lucide-react';
import { NotificationBell } from '../Notifications/NotificationBell';
import { RootState } from '../../store/store';
import logo from '../Header/logo.png';

export const Header: React.FC = () => {
  const { user } = useAuth();
  const cartItemsCount = useSelector((state: RootState) => 
    state.cart.items.reduce((acc, item) => acc + item.quantity, 0)
  );
  const wishlistCount = useSelector((state: RootState) =>
    state.wishlist.items.length
  );

  return (
    <header className="bg-[#E6E9F2] py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center h-full">
           <img src={logo} alt="Scatch" className="h-16 w-auto" />
          </Link>
          <nav className="flex items-center space-x-6">
            <Link 
              to="/games" 
              className="flex items-center text-gray-700 hover:text-blue-600"
              title="Игры"
            >
              <GamepadIcon className="h-6 w-6" />
            </Link>

            {user ? (
              <>
                <Link 
                  to="/profile" 
                  className="flex items-center text-gray-700 hover:text-blue-600"
                  title="Профиль"
                >
                  <User className="h-6 w-6" />
                </Link>
                <NotificationBell />
                <Link 
                  to="/wishlist" 
                  className="flex items-center text-gray-700 hover:text-blue-600 relative"
                  title="Избранное"
                >
                  <Heart className="h-6 w-6" />
                  {wishlistCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {wishlistCount}
                    </span>
                  )}
                </Link>
                <Link 
                  to="/cart" 
                  className="flex items-center text-gray-700 hover:text-blue-600 relative"
                  title="Корзина"
                >
                  <ShoppingCart className="h-6 w-6" />
                  {cartItemsCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {cartItemsCount}
                    </span>
                  )}
                </Link>
              </>
            ) : (
              <Link 
                to="/login" 
                className="flex items-center space-x-2 text-gray-700 hover:text-blue-600"
              >
                <LogIn className="h-6 w-6" />
                <span>Войти</span>
              </Link>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};