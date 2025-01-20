import { useEffect, useState } from 'react';
import { supabase } from '../client';
import type { Database } from '../types';

type WishlistItem = Database['public']['Tables']['wishlist']['Row'];

export function useWishlist(userId: string | undefined) {
  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!userId) {
      setLoading(false);
      return;
    }

    async function fetchWishlist() {
      try {
        const { data, error } = await supabase
          .from('wishlist')
          .select('*')
          .eq('user_id', userId);

        if (error) throw error;
        setWishlist(data);
      } catch (e) {
        setError(e instanceof Error ? e : new Error('Unknown error'));
      } finally {
        setLoading(false);
      }
    }

    fetchWishlist();
  }, [userId]);

  return { wishlist, loading, error };
} 