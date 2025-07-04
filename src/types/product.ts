export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    originalPrice?: number;
    category: string;
    image: string;
    images?: string[];
    rating: number;
    reviewCount: number;
    inStock: boolean;
    stockCount: number;
    tags?: string[];
    isNew?: boolean;
    isOnSale?: boolean;
    isPremium?: boolean;
    isBestseller?: boolean;
  }