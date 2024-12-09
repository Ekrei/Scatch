import { Product } from '../types/product';

export const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    title: 'Линейка пластиковая',
    price: 64,
    description: 'Линейка пластиковая для школы и офиса',
    characteristics: {
      'Длина': '30 см',
      'Материал': 'Пластик',
    },
    images: ['https://placehold.co/300x300?text=Линейка'],
    category: 'Канцтовары',
    inStock: 10
  },
  {
    id: '2',
    title: 'Ручка шариковая',
    price: 45,
    oldPrice: 59,
    description: 'Шариковая ручка с синими чернилами',
    characteristics: {
      'Цвет чернил': 'Синий',
      'Толщина линии': '0.7 мм',
    },
    images: ['https://placehold.co/300x300?text=Ручка'],
    category: 'Канцтовары',
    inStock: 150
  },
  {
    id: '3',
    title: 'Тетрадь в клетку',
    price: 89,
    description: '48 листов, плотная обложка',
    characteristics: {
      'Листов': '48',
      'Разлиновка': 'Клетка',
    },
    images: ['https://placehold.co/300x300?text=Тетрадь'],
    category: 'Бумажная продукция',
    inStock: 200
  },
  {
    id: '4',
    title: 'Карандаш чернографитный',
    price: 35,
    oldPrice: 45,
    description: 'Чернографитный карандаш твердости HB',
    characteristics: {
      'Твердость': 'HB',
      'Материал': 'Дерево',
    },
    images: ['https://placehold.co/300x300?text=Карандаш'],
    category: 'Канцтовары',
    inStock: 300
  },
  {
    id: '5',
    title: 'Ластик',
    price: 25,
    description: 'Мягкий ластик для карандаша',
    characteristics: {
      'Размер': '4x2x1 см',
      'Материал': 'Каучук',
    },
    images: ['https://placehold.co/300x300?text=Ластик'],
    category: 'Канцтовары',
    inStock: 250
  },
  {
    id: '6',
    title: 'Степлер',
    price: 299,
    oldPrice: 349,
    description: 'Степлер для скоб №24/6, 26/6',
    characteristics: {
      'Тип скоб': '24/6, 26/6',
      'Материал': 'Пластик/металл',
    },
    images: ['https://placehold.co/300x300?text=Степлер'],
    category: 'Офисные принадлежности',
    inStock: 75
  },
  {
    id: '7',
    title: 'Маркер перманентный',
    price: 89,
    description: 'Перманентный маркер черного цвета',
    characteristics: {
      'Цвет': 'Черный',
      'Толщина линии': '1-2 мм',
    },
    images: ['https://placehold.co/300x300?text=Маркер'],
    category: 'Канцтовары',
    inStock: 120
  },
  {
    id: '8',
    title: 'Клей-карандаш',
    price: 79,
    description: 'Клей-карандаш для бумаги',
    characteristics: {
      'Вес': '21 г',
      'Тип': 'Без растворителя',
    },
    images: ['https://placehold.co/300x300?text=Клей'],
    category: 'Канцтовары',
    inStock: 180
  },
  {
    id: '9',
    title: 'Скрепки канцелярские',
    price: 49,
    description: 'Металлические скрепки, 100 шт',
    characteristics: {
      'Количество': '100 шт',
      'Размер': '28 мм',
    },
    images: ['https://placehold.co/300x300?text=Скрепки'],
    category: 'Офисные принадлежности',
    inStock: 150
  },
  {
    id: '10',
    title: 'Папка-регистратор',
    price: 259,
    oldPrice: 299,
    description: 'Папка-регистратор с арочным механизмом',
    characteristics: {
      'Формат': 'A4',
      'Ширина корешка': '50 мм',
    },
    images: ['https://placehold.co/300x300?text=Папка'],
    category: 'Офисные принадлежности',
    inStock: 90
  }
];