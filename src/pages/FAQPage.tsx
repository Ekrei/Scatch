import React from 'react';
import { Search } from 'lucide-react';
import { FAQSection } from '../components/FAQ/FAQSection';
import { faqData } from '../data/faqData';

export const FAQPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const filterQuestions = (questions: typeof faqData.delivery.questions) => {
    if (!searchQuery) return questions;
    
    return questions.filter(
      q => 
        q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.answer.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Вопросы и ответы</h1>
      
      <div className="relative mb-8">
        <input
          type="text"
          placeholder="Поиск по вопросам..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-4 py-2 pl-10 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
      </div>

      {Object.entries(faqData).map(([key, section]) => {
        const filteredQuestions = filterQuestions(section.questions);
        if (filteredQuestions.length === 0) return null;
        
        return (
          <FAQSection
            key={key}
            title={section.title}
            questions={filteredQuestions}
          />
        );
      })}
    </div>
  );
};