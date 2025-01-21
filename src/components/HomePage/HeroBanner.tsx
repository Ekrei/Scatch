import React from 'react';
import { ChevronRight } from 'lucide-react';
import advert from '../HomePage/advert.png';

export const HeroBanner: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md mb-8 overflow-hidden">
      <div 
        className="relative w-full aspect-[16/9] bg-cover bg-center flex items-end"
        style={{ backgroundImage: "url('https://s3-alpha-sig.figma.com/img/8b57/050e/2068cfebcf46f3f43258ac189726035f?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YbrMJGipEu-DIBuQcMq0MS3KTMoL67GffKpAAmKBpwxX9DzRgItfIyNFnTVHibR~9~hSUNQ0viw0D5nLYGWZ2G7GB5jg~zXbEHk3om7-z~xt08aFq7sTTdtkXqeFfB963Dc3TKnB~QZY1ZqRBsVj7TAVJDIBWhMnhhN1eBgG6LIfX4BubY0rh6junlT0kBC2jwUEsnB4KsGEVUgFCYZQqNJr04W4f9A52NtQ2-~5SPBjdIc1Rup3Tfy69DNsCYveiCgXJPUTMDh7yvkgdChMf~NI-83V2o4YLO09mMoMBi18NLy7YH51bq7DSzAnJ5cHXOng0hHmTm57p1dg3Yi16Q__')" }}
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