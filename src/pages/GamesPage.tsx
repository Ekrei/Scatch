import React from 'react';
import { MemoryGame } from '../components/Games/MemoryGame/MemoryGame';

export const GamesPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8">Игры</h1>
      <MemoryGame />
    </div>
  );
};