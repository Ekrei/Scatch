import React from 'react';
import { ChevronRight } from 'lucide-react';
import advert from '../../components/HomePage/advert.png';

export const HeroBanner: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md mb-8 overflow-hidden">
      <div 
        className="relative w-full aspect-[16/9] bg-cover bg-center flex items-end"
        style={{ backgroundImage: `url(${advert})` }}
      >
        <div className="w-full p-8 md:p-12 lg:p-16">
          <button className="bg-gray-200/90 backdrop-blur px-8 py-4 rounded-full flex items-center hover:bg-gray-300/90 transition-colors text-lg md:text-xl">
            Подробнее
            <ChevronRight className="ml-2 h-5 w-5 md:h-6 md:w-6" />
          </button>
        </div>
      </div>
    </div>
  );
};