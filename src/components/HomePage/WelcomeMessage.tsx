import React from 'react';
import { useAuth } from '../../lib/supabase/hooks/useAuth';
import { useProfile } from '../../lib/supabase/hooks/useProfile';

export const WelcomeMessage: React.FC = () => {
  const { user } = useAuth();
  const { profile } = useProfile(user?.id);
  const [greeting, setGreeting] = React.useState('');

  React.useEffect(() => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) {
      setGreeting('Доброе утро');
    } else if (hour >= 12 && hour < 18) {
      setGreeting('Добрый день');
    } else if (hour >= 18 && hour < 23) {
      setGreeting('Добрый вечер');
    } else {
      setGreeting('Доброй ночи');
    }
  }, []);

  if (!user) return null;

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 mb-8">
      <h2 className="text-xl">
        {greeting}, {profile?.first_name || 'уважаемый покупатель'}!
      </h2>
    </div>
  );
};