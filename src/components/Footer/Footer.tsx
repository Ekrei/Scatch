import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, GamepadIcon } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#E6E9F2] mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Магазин канцтоваров «Scatch»</h3>
            <div className="space-y-2">
              <p className="flex items-center text-gray-600">
                <Phone size={16} className="mr-2" />
                +7 (999) 999-99-99
              </p>
              <p className="flex items-center text-gray-600">
                <Mail size={16} className="mr-2" />
                info@scatch.ru
              </p>
              <p className="flex items-center text-gray-600">
                <MapPin size={16} className="mr-2" />
                г. Москва, ул. Примерная, 1
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">О магазине</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-600 hover:text-gray-900">О нас</Link></li>
              <li><Link to="/delivery" className="text-gray-600 hover:text-gray-900">Доставка</Link></li>
              <li><Link to="/payment" className="text-gray-600 hover:text-gray-900">Оплата</Link></li>
              <li><Link to="/contacts" className="text-gray-600 hover:text-gray-900">Контакты</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Покупателям</h3>
            <ul className="space-y-2">
              <li><Link to="/catalog" className="text-gray-600 hover:text-gray-900">Каталог</Link></li>
              <li><Link to="/sales" className="text-gray-600 hover:text-gray-900">Акции</Link></li>
              <li><Link to="/loyalty" className="text-gray-600 hover:text-gray-900">Программа лояльности</Link></li>
              <li><Link to="/games" className="text-gray-600 hover:text-gray-900 flex items-center">
                <GamepadIcon size={16} className="mr-2" />
                Игры
              </Link></li>
              <li><Link to="/faq" className="text-gray-600 hover:text-gray-900">Вопрос-ответ</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Мы в соцсетях</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-900">VK</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Telegram</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-300 mt-8 pt-8 text-center text-gray-600">
          <p>© 2024 Scatch. Все права защищены</p>
        </div>
      </div>
    </footer>
  );
};