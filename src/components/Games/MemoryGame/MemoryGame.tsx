/**
 * @module MemoryGame
 * @description Игра "Найди пару" с системой достижений и наград
 */

import React, { useState, useEffect } from 'react';
import { useAuth } from '../../../lib/supabase/hooks/useAuth';
import { useAchievements } from '../../../lib/supabase/hooks/useAchievements';
import { supabase } from '../../../lib/supabase/client';
import { Sparkles } from 'lucide-react';

/**
 * @interface Card
 * @property {number} id - Идентификатор карточки
 * @property {string} image - URL изображения
 * @property {string} name - Название предмета
 * @property {boolean} isFlipped - Перевернута ли карточка
 * @property {boolean} isMatched - Найдена ли пара
 */
interface Card {
  id: number;
  image: string;
  name: string;
  isFlipped: boolean;
  isMatched: boolean;
}

/**
 * Массив данных для карточек
 * @constant
 */
const CARDS_DATA = [
  { id: 1, image: 'https://images.unsplash.com/photo-1585336261022-680e295ce3fe?w=200', name: 'Карандаш' },
  { id: 2, image: 'https://images.unsplash.com/photo-1595231712607-a92e81c609e6?w=200', name: 'Ручка' },
  { id: 3, image: 'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=200', name: 'Линейка' },
  { id: 4, image: 'https://images.unsplash.com/photo-1600815831561-55f993a3f7ab?w=200', name: 'Ластик' },
  { id: 5, image: 'https://images.unsplash.com/photo-1568205612837-017257d2310a?w=200', name: 'Тетрадь' },
  { id: 6, image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=200', name: 'Степлер' },
];

/**
 * Компонент игры "Найди пару"
 * @component
 * @example
 * ```tsx
 * <MemoryGame />
 * ```
 */
export const MemoryGame: React.FC = () => {
  const { user } = useAuth();
  const { checkGameAchievements } = useAchievements(user?.id);
  const [cards, setCards] = useState<Card[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [matchedPairs, setMatchedPairs] = useState<number>(0);
  const [moves, setMoves] = useState<number>(0);
  const [isGameComplete, setIsGameComplete] = useState<boolean>(false);

  useEffect(() => {
    const shuffledCards = [...CARDS_DATA, ...CARDS_DATA]
      .sort(() => Math.random() - 0.5)
      .map((card, index) => ({
        ...card,
        id: index,
        isFlipped: false,
        isMatched: false,
      }));
    setCards(shuffledCards);
  }, []);

  const handleCardClick = async (clickedId: number) => {
    if (
      flippedCards.length === 2 ||
      cards[clickedId].isFlipped ||
      cards[clickedId].isMatched
    ) {
      return;
    }

    const newCards = [...cards];
    newCards[clickedId].isFlipped = true;
    setCards(newCards);
    
    const newFlippedCards = [...flippedCards, clickedId];
    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      setMoves(moves + 1);
      const [firstId, secondId] = newFlippedCards;
      
      if (cards[firstId].name === cards[secondId].name) {
        // Найдена пара
        newCards[firstId].isMatched = true;
        newCards[secondId].isMatched = true;
        setCards(newCards);
        setMatchedPairs(matchedPairs + 1);
        setFlippedCards([]);

        if (matchedPairs + 1 === CARDS_DATA.length) {
          setIsGameComplete(true);
          if (user) {
            try {
              // Начисляем бонусы за победу
              const points = Math.max(100 - moves * 5, 10);
              await supabase.from('loyalty_points').insert({
                user_id: user.id,
                points,
                source: 'memory_game'
              });

              // Получаем количество побед
              const { count } = await supabase
                .from('game_results')
                .select('*', { count: 'exact' })
                .eq('user_id', user.id)
                .eq('game_type', 'memory_game');

              // Записываем результат игры
              await supabase.from('game_results').insert({
                user_id: user.id,
                game_type: 'memory_game',
                score: points,
                moves: moves
              });

              // Проверяем достижения
              if (count !== null) {
                await checkGameAchievements('memory_game_wins', count + 1);
              }
            } catch (error) {
              console.error('Error processing game completion:', error);
            }
          }
        }
      } else {
        // Карточки не совпали
        setTimeout(() => {
          newCards[firstId].isFlipped = false;
          newCards[secondId].isFlipped = false;
          setCards(newCards);
          setFlippedCards([]);
        }, 1000);
      }
    }
  };

  const resetGame = () => {
    const shuffledCards = [...CARDS_DATA, ...CARDS_DATA]
      .sort(() => Math.random() - 0.5)
      .map((card, index) => ({
        ...card,
        id: index,
        isFlipped: false,
        isMatched: false,
      }));
    setCards(shuffledCards);
    setFlippedCards([]);
    setMatchedPairs(0);
    setMoves(0);
    setIsGameComplete(false);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-4">Найди пару</h2>
        <p className="text-gray-600 mb-2">Ходов: {moves}</p>
        <p className="text-gray-600">Найдено пар: {matchedPairs} из {CARDS_DATA.length}</p>
      </div>

      <div className="grid grid-cols-3 md:grid-cols-4 gap-4 mb-8">
        {cards.map((card) => (
          <button
            key={card.id}
            onClick={() => handleCardClick(card.id)}
            className={`aspect-square rounded-lg transition-all duration-300 transform ${
              card.isFlipped || card.isMatched
                ? 'rotate-y-180'
                : 'bg-[#E6E9F2] hover:bg-[#d8dbe4]'
            }`}
            disabled={isGameComplete}
          >
            {(card.isFlipped || card.isMatched) ? (
              <img
                src={card.image}
                alt={card.name}
                className="w-full h-full object-cover rounded-lg"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <Sparkles className="text-gray-400" size={32} />
              </div>
            )}
          </button>
        ))}
      </div>

      {isGameComplete && (
        <div className="text-center">
          <h3 className="text-xl font-bold text-green-600 mb-4">
            Поздравляем! Игра завершена за {moves} ходов
          </h3>
          <button
            onClick={resetGame}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          >
            Играть снова
          </button>
        </div>
      )}
    </div>
  );
};