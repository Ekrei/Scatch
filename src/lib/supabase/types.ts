export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          first_name: string | null
          last_name: string | null
          phone: string | null
          address: string | null
          email: string | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id: string
          first_name?: string | null
          last_name?: string | null
          phone?: string | null
          address?: string | null
          email?: string | null
        }
        Update: {
          first_name?: string | null
          last_name?: string | null
          phone?: string | null
          address?: string | null
          email?: string | null
        }
      }
      // ... остальные таблицы без изменений
    }
  }
}