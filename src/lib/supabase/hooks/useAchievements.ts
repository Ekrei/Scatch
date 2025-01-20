import { useEffect, useState } from 'react';
import { supabase } from '../client';

interface Achievement {
  id: string;
  name: string;
  description: string;
  condition_type: string;
  condition_value: number;
  reward_coins: number;
}

interface UserAchievement {
  id: string;
  achievement_id: string;
  unlocked_at: string;
  achievement: Achievement;
}

export function useAchievements(userId: string | undefined) {
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const [userAchievements, setUserAchievements] = useState<UserAchievement[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!userId) {
      setLoading(false);
      return;
    }

    async function fetchAchievements() {
      try {
        // Получаем все достижения
        const { data: allAchievements, error: achievementsError } = await supabase
          .from('achievements')
          .select('*')
          .order('condition_value', { ascending: true });

        if (achievementsError) throw achievementsError;

        // Получаем достижения пользователя
        const { data: userAchievs, error: userAchievsError } = await supabase
          .from('user_achievements')
          .select(`
            *,
            achievement:achievements(*)
          `)
          .eq('user_id', userId);

        if (userAchievsError) throw userAchievsError;

        setAchievements(allAchievements);
        setUserAchievements(userAchievs);
      } catch (e) {
        setError(e instanceof Error ? e : new Error('Unknown error'));
      } finally {
        setLoading(false);
      }
    }

    fetchAchievements();
  }, [userId]);

  // Функция для проверки достижений после победы в игре
  const checkGameAchievements = async (gameType: string, wins: number) => {
    if (!userId) return;

    try {
      // Получаем все достижения для данного типа игры, которые еще не получены
      const unlockedAchievementIds = userAchievements.map(ua => ua.achievement_id);
      const availableAchievements = achievements.filter(
        a => a.condition_type === gameType &&
        a.condition_value <= wins &&
        !unlockedAchievementIds.includes(a.id)
      );

      // Если есть новые достижения
      for (const achievement of availableAchievements) {
        // Добавляем достижение пользователю
        const { error: achievementError } = await supabase
          .from('user_achievements')
          .insert({
            user_id: userId,
            achievement_id: achievement.id
          });

        if (achievementError) throw achievementError;

        // Начисляем награду в catcoins
        const { error: pointsError } = await supabase
          .from('loyalty_points')
          .insert({
            user_id: userId,
            points: achievement.reward_coins,
            source: 'achievement'
          });

        if (pointsError) throw pointsError;

        // Отправляем уведомление
        const { error: notificationError } = await supabase
          .from('notifications')
          .insert({
            user_id: userId,
            title: `Новое достижение: ${achievement.name}!`,
            message: `${achievement.description}. Награда: ${achievement.reward_coins} catcoins`
          });

        if (notificationError) throw notificationError;
      }
    } catch (e) {
      console.error('Error checking achievements:', e);
    }
  };

  return {
    achievements,
    userAchievements,
    loading,
    error,
    checkGameAchievements
  };
}