import React from 'react';
import { ChevronRight } from 'lucide-react';
import banner from '../../components/HomePage/advert.png'

export const HeroBanner: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-8 mb-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold mb-4">СКИДКИ</h2>
          <h3 className="text-xl mb-4">НА МЕБЕЛЬ И ТЕХНИКУ<br />ДЛЯ ОФИСА</h3>
          <button className="bg-gray-200 px-6 py-2 rounded-full flex items-center">
            Подробнее <ChevronRight size={20} className="ml-2" />
          </button>
        </div>
        <img 
          // src="https://placehold.co/500x500?text=Office+Chair"
          src={banner}
          alt="Office Chair"
          className="w-64 h-64 object-contain"
        />
      </div>
    </div>
  );
};