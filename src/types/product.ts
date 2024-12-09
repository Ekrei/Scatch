export interface Product {
  id: string;
  title: string;
  price: number;
  oldPrice?: number;
  description: string;
  characteristics: Record<string, string>;
  images: string[];
  category: string;
  inStock: number;
}