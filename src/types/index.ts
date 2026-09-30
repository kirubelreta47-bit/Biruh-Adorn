export type Category =
  | 'all'
  | 'necklaces'
  | 'bracelets'
  | 'rings'
  | 'earrings'
  | 'sets'
  | 'ear-cuffs';

export interface Product {
  id: string;
  name: string;
  category: Category;
  categoryLabel: string;
  price: number;
  shortDescription: string;
  description: string;
  images: string[];
  material: string;
  details: string[];
  care: string[];
  isFeatured?: boolean;
  isNew?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedSize?: string;
}

export type ActivePage = 'home' | 'shop' | 'custom' | 'maker' | 'about' | 'contact';
