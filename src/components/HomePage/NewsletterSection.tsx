import React from 'react';

interface PromotionCardProps {
  title: string;
  description: string;
  buttonText: string;
  imageUrl: string;
  bgColor: string;
}

const PromotionCard: React.FC<PromotionCardProps> = ({
  title,
  description,
  buttonText,
  imageUrl,
  bgColor,
}) => (
  <div className={`${bgColor} rounded-lg p-8 flex items-center justify-between`}>
    <div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <button className="bg-white px-6 py-2 rounded-full">
        {buttonText}
      </button>
    </div>
    <img 
      src={imageUrl}
      alt={title}
      className="w-32 h-32 object-cover rounded-lg"
    />
  </div>
);

export const NewsletterSection: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <PromotionCard
        title="Рассылка"
        description="Подпишитесь на рассылку и получайте новости об акциях"
        buttonText="Подписаться"
        imageUrl="https://placehold.co/300x300?text=Newsletter"
        bgColor="bg-[#E6E9F2]"
      />
      <PromotionCard
        title="Программа лояльности"
        description="Получайте бонусы за покупки"
        buttonText="Вступить в клуб"
        imageUrl="https://placehold.co/300x300?text=Loyalty"
        bgColor="bg-[#F8D7A4]"
      />
    </div>
  );
};