import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Trash2 } from 'lucide-react';
import { removeFromCart } from '../store/slices/cartSlice';
import type { RootState } from '../store/store';

export const CartPage: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  const total = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <div className="text-center py-16">
        <h2 className="text-2xl font-bold mb-4">Корзина пуста</h2>
        <p className="text-gray-600">Добавьте товары в корзину для оформления заказа</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <h1 className="text-2xl font-bold mb-6">Корзина</h1>
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.product.id}
              className="bg-white rounded-lg p-4 flex items-center gap-4"
            >
              <img
                src={item.product.images[0]}
                alt={item.product.title}
                className="w-24 h-24 object-contain"
              />
              <div className="flex-1">
                <h3 className="font-medium">{item.product.title}</h3>
                <p className="text-gray-600">
                  {item.product.price}₽ × {item.quantity}
                </p>
              </div>
              <button
                onClick={() => dispatch(removeFromCart(item.product.id))}
                className="p-2 text-gray-400 hover:text-red-500"
              >
                <Trash2 size={20} />
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg p-6 h-fit">
        <h2 className="text-xl font-bold mb-4">Итого</h2>
        <div className="space-y-2 mb-6">
          <div className="flex justify-between">
            <span>Товары ({cartItems.length})</span>
            <span>{total}₽</span>
          </div>
        </div>
        <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
          Оформить заказ
        </button>
      </div>
    </div>
  );
};