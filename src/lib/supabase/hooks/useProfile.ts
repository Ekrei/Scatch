import { useEffect, useState } from 'react';
import { supabase } from '../client';
import type { Database } from '../types';

type Profile = Database['public']['Tables']['profiles']['Row'];
type ProfileUpdate = Database['public']['Tables']['profiles']['Update'];

export function useProfile(userId: string | undefined) {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!userId) {
      setLoading(false);
      return;
    }

    async function fetchProfile() {
      try {
        // Сначала пытаемся получить профиль
        const { data, error } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', userId)
          .single();

        if (error) {
          // Если профиль не найден, создаем новый
          if (error.code === 'PGRST116') {
            const { data: userData } = await supabase.auth.getUser();
            if (userData.user) {
              const { data: newProfile, error: createError } = await supabase
                .from('profiles')
                .insert([
                  {
                    id: userId,
                    email: userData.user.email,
                  },
                ])
                .select()
                .single();

              if (createError) throw createError;
              setProfile(newProfile);
            }
          } else {
            throw error;
          }
        } else {
          setProfile(data);
        }
      } catch (e) {
        setError(e instanceof Error ? e : new Error('Unknown error'));
      } finally {
        setLoading(false);
      }
    }

    fetchProfile();
  }, [userId]);

  const updateProfile = async (updates: ProfileUpdate) => {
    if (!userId) throw new Error('User not authenticated');

    try {
      const { data, error } = await supabase
        .from('profiles')
        .update(updates)
        .eq('id', userId)
        .select()
        .single();

      if (error) throw error;
      setProfile(data);
      return data;
    } catch (e) {
      const error = e instanceof Error ? e : new Error('Unknown error');
      setError(error);
      throw error;
    }
  };

  return { profile, loading, error, updateProfile };
}