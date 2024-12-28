import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQSectionProps {
  title: string;
  questions: Array<{
    id: string;
    question: string;
    answer: string;
  }>;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ title, questions }) => {
  const [openId, setOpenId] = React.useState<string | null>(null);

  const toggleQuestion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <div className="space-y-4">
        {questions.map(({ id, question, answer }) => (
          <div
            key={id}
            className="bg-white rounded-lg shadow-sm overflow-hidden"
          >
            <button
              onClick={() => toggleQuestion(id)}
              className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50"
            >
              <span className="font-medium">{question}</span>
              {openId === id ? (
                <ChevronUp className="text-gray-500" />
              ) : (
                <ChevronDown className="text-gray-500" />
              )}
            </button>
            {openId === id && (
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                <p className="text-gray-600">{answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}