import { useEffect, useState } from 'react';
import { supabase } from '../client';
import type { Database } from '../types';

type Review = Database['public']['Tables']['reviews']['Row'];

export function useReviews(productId: string) {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchReviews() {
      try {
        const { data, error } = await supabase
          .from('reviews')
          .select(`
            *,
            profiles:user_id (
              first_name,
              last_name
            )
          `)
          .eq('product_id', productId)
          .order('created_at', { ascending: false });

        if (error) throw error;
        setReviews(data);
      } catch (e) {
        setError(e instanceof Error ? e : new Error('Unknown error'));
      } finally {
        setLoading(false);
      }
    }

    fetchReviews();
  }, [productId]);

  const addReview = async (review: Omit<Review, 'id' | 'created_at'>) => {
    try {
      const { data, error } = await supabase
        .from('reviews')
        .insert(review)
        .select(`
          *,
          profiles:user_id (
            first_name,
            last_name
          )
        `)
        .single();

      if (error) throw error;
      setReviews(prev => [data, ...prev]);
      return data;
    } catch (e) {
      setError(e instanceof Error ? e : new Error('Unknown error'));
      throw e;
    }
  };

  const updateReview = async (id: string, updates: Partial<Omit<Review, 'id'>>) => {
    try {
      const { data, error } = await supabase
        .from('reviews')
        .update(updates)
        .eq('id', id)
        .select()
        .single();

      if (error) throw error;
      setReviews(prev => prev.map(review => review.id === id ? data : review));
      return data;
    } catch (e) {
      setError(e instanceof Error ? e : new Error('Unknown error'));
      throw e;
    }
  };

  const deleteReview = async (id: string) => {
    try {
      const { error } = await supabase
        .from('reviews')
        .delete()
        .eq('id', id);

      if (error) throw error;
      setReviews(prev => prev.filter(review => review.id !== id));
    } catch (e) {
      setError(e instanceof Error ? e : new Error('Unknown error'));
      throw e;
    }
  };

  return { reviews, loading, error, addReview, updateReview, deleteReview };
}