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
  // ... card data remains the same
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
  // ... rest of the code remains the same
};