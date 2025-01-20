import { useEffect, useState } from 'react';
import { supabase } from '../client';
import type { Database } from '../types';

type Category = Database['public']['Tables']['categories']['Row'];

export function useCategories() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const { data, error } = await supabase
          .from('categories')
          .select('*')
          .order('name');

        if (error) throw error;
        setCategories(data);
      } catch (e) {
        setError(e instanceof Error ? e : new Error('Unknown error'));
      } finally {
        setLoading(false);
      }
    }

    fetchCategories();
  }, []);

  const addCategory = async (name: string, description?: string) => {
    try {
      const slug = name.toLowerCase().replace(/\s+/g, '-');
      const { data, error } = await supabase
        .from('categories')
        .insert({ name, slug, description })
        .select()
        .single();

      if (error) throw error;
      setCategories(prev => [...prev, data]);
      return data;
    } catch (e) {
      setError(e instanceof Error ? e : new Error('Unknown error'));
      throw e;
    }
  };

  const updateCategory = async (id: string, updates: Partial<Omit<Category, 'id'>>) => {
    try {
      const { data, error } = await supabase
        .from('categories')
        .update(updates)
        .eq('id', id)
        .select()
        .single();

      if (error) throw error;
      setCategories(prev => prev.map(cat => cat.id === id ? data : cat));
      return data;
    } catch (e) {
      setError(e instanceof Error ? e : new Error('Unknown error'));
      throw e;
    }
  };

  return { categories, loading, error, addCategory, updateCategory };
}