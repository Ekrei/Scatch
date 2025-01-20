import { useEffect, useState } from 'react';
import { supabase } from '../client';

interface ProductStats {
  averageRating: number;
  totalReviews: number;
  salesCount: number;
}

export function useProductStats(productId: string) {
  const [stats, setStats] = useState<ProductStats>({
    averageRating: 0,
    totalReviews: 0,
    salesCount: 0
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchStats() {
      try {
        const [reviewStats, salesStats] = await Promise.all([
          supabase.rpc('get_product_review_stats', { product_id: productId }),
          supabase.rpc('get_product_sales_stats', { product_id: productId })
        ]);

        if (reviewStats.error) throw reviewStats.error;
        if (salesStats.error) throw salesStats.error;

        setStats({
          averageRating: reviewStats.data.average_rating || 0,
          totalReviews: reviewStats.data.total_reviews || 0,
          salesCount: salesStats.data.total_sales || 0
        });
      } catch (e) {
        setError(e instanceof Error ? e : new Error('Unknown error'));
      } finally {
        setLoading(false);
      }
    }

    fetchStats();
  }, [productId]);

  return { stats, loading, error };
}