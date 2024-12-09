import React from 'react';
import { useParams } from 'react-router-dom';
import { Heart, ShoppingCart } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/slices/cartSlice';

const MOCK_PRODUCT = {
  id: '1',
  title: 'Линейка пластиковая',
  price: 64,
  description: 'Линейка изготовлена из качественного пластика, предназначена для чертежных работ в образовательных учреждениях и офисе.',
  characteristics: {
    'Длина': '30 см',
    'Материал': 'Пластик',
    'Единица продажи': 'штука',
  },
  images: [
    'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=300&q=80',
    'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=300&q=80',
  ],
  category: 'Канцтовары',
  inStock: 10
};

export const ProductPage: React.FC = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [selectedImage, setSelectedImage] = React.useState(0);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Product Images */}
      <div>
        <div className="bg-white rounded-lg p-4 mb-4">
          <img
            src={MOCK_PRODUCT.images[selectedImage]}
            alt={MOCK_PRODUCT.title}
            className="w-full h-96 object-contain"
          />
        </div>
        <div className="grid grid-cols-5 gap-2">
          {MOCK_PRODUCT.images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`bg-white rounded-lg p-2 ${
                selectedImage === index ? 'ring-2 ring-blue-500' : ''
              }`}
            >
              <img
                src={image}
                alt={`${MOCK_PRODUCT.title} ${index + 1}`}
                className="w-full h-20 object-contain"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Product Info */}
      <div>
        <h1 className="text-3xl font-bold mb-4">{MOCK_PRODUCT.title}</h1>
        <div className="flex items-center justify-between mb-6">
          <div>
            <span className="text-3xl font-bold">{MOCK_PRODUCT.price}₽</span>
          </div>
          <div className="flex space-x-4">
            <button
              onClick={() => dispatch(addToCart(MOCK_PRODUCT))}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg flex items-center space-x-2 hover:bg-blue-700"
            >
              <ShoppingCart size={20} />
              <span>В корзину</span>
            </button>
            <button className="border border-gray-300 p-3 rounded-lg hover:bg-gray-50">
              <Heart size={20} />
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Характеристики</h2>
          <dl className="grid grid-cols-2 gap-4">
            {Object.entries(MOCK_PRODUCT.characteristics).map(([key, value]) => (
              <div key={key}>
                <dt className="text-gray-600">{key}</dt>
                <dd className="font-medium">{value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="bg-white rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Описание</h2>
          <p className="text-gray-700">{MOCK_PRODUCT.description}</p>
        </div>
      </div>
    </div>
  );
};