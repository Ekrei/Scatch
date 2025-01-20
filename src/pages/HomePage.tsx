import React from 'react';
import { WelcomeMessage } from '../components/HomePage/WelcomeMessage';
import { HeroBanner } from '../components/HomePage/HeroBanner';
import { ProductSection } from '../components/HomePage/ProductSection';
import { NewsletterSection } from '../components/HomePage/NewsletterSection';
import { MOCK_PRODUCTS } from '../data/mockProducts';

export const HomePage: React.FC = () => {
  return (
    <div>
      <WelcomeMessage />
      <HeroBanner />
      
      <ProductSection
        title="Хиты продаж"
        linkText="Все товары"
        linkUrl="/catalog"
        products={MOCK_PRODUCTS.slice(0, 5)}
      />
      
      <ProductSection
        title="Новинки"
        linkText="Все новинки"
        linkUrl="/catalog/new"
        products={MOCK_PRODUCTS.slice(5, 10)}
      />
      
      <NewsletterSection />
    </div>
  );
};