/**
 * @module Loyalty Hooks
 * @description Хуки для работы с системой лояльности
 */

import { useEffect, useState } from 'react';
import { supabase } from '../client';
import type { Database } from '../types';

type LoyaltyPoints = Database['public']['Tables']['loyalty_points']['Row'];

export function useLoyalty(userId: string | undefined) {
  const [points, setPoints] = useState<LoyaltyPoints[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!userId) {
      setLoading(false);
      return;
    }

    async function fetchLoyaltyPoints() {
      try {
        const { data, error } = await supabase
          .from('loyalty_points')
          .select('*')
          .eq('user_id', userId);

        if (error) throw error;
        setPoints(data);
      } catch (e) {
        setError(e instanceof Error ? e : new Error('Unknown error'));
      } finally {
        setLoading(false);
      }
    }

    fetchLoyaltyPoints();
  }, [userId]);

  return { points, loading, error };
}