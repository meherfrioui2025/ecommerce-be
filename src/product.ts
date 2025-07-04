import { v4 as uuidv4 } from "uuid";
import { Product } from "./types/product.js";

const mockProducts: Product[] = [
  {
    id: "1",
    name: "Premium Wireless Headphones",
    description:
      "Experience crystal-clear audio with our premium wireless headphones featuring noise cancellation and 30-hour battery life.",
    price: 79.99,
    originalPrice: 99.99,
    category: "electronics",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
    rating: 4.5,
    reviewCount: 128,
    inStock: true,
    stockCount: 45,
    isOnSale: true,
    tags: ["wireless", "audio", "premium"],
  },
  {
    id: "2",
    name: "Designer Fashion Jacket",
    description:
      "Elevate your style with this premium designer jacket crafted from high-quality materials.",
    price: 159.99,
    category: "fashion",
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
    rating: 4.2,
    reviewCount: 89,
    inStock: true,
    stockCount: 23,
    tags: ["fashion", "designer", "jacket"],
  },
  {
    id: "3",
    name: "Latest Smartphone Pro",
    description:
      "The most advanced smartphone with cutting-edge technology, professional cameras, and lightning-fast performance.",
    price: 899.99,
    category: "electronics",
    image:
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
    rating: 4.8,
    reviewCount: 245,
    inStock: true,
    stockCount: 12,
    isNew: true,
    tags: ["smartphone", "technology", "premium"],
  },
  {
    id: "4",
    name: "Modern Home Decor Set",
    description:
      "Transform your living space with this elegant home decor collection featuring modern design elements.",
    price: 149.99,
    category: "home",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
    rating: 4.3,
    reviewCount: 67,
    inStock: true,
    stockCount: 31,
    tags: ["home", "decor", "modern"],
  },
  {
    id: "5",
    name: "Professional Camera Lens",
    description:
      "Capture stunning photos with this professional-grade camera lens perfect for photography enthusiasts.",
    price: 599.99,
    category: "electronics",
    image:
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
    rating: 4.6,
    reviewCount: 156,
    inStock: true,
    stockCount: 8,
    tags: ["camera", "photography", "professional"],
  },
  {
    id: "6",
    name: "Luxury Timepiece",
    description:
      "A sophisticated luxury watch that combines timeless elegance with modern precision craftsmanship.",
    price: 1299.99,
    category: "fashion",
    image:
      "https://images.unsplash.com/photo-1524592094714-0f0654e20314?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
    rating: 4.9,
    reviewCount: 78,
    inStock: true,
    stockCount: 5,
    isPremium: true,
    tags: ["watch", "luxury", "timepiece"],
  },
  {
    id: "7",
    name: "Athletic Running Shoes",
    description:
      "High-performance running shoes designed for comfort, durability, and optimal athletic performance.",
    price: 129.99,
    category: "fashion",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
    rating: 4.4,
    reviewCount: 203,
    inStock: true,
    stockCount: 67,
    tags: ["shoes", "athletic", "running"],
  },
  {
    id: "8",
    name: "Premium Laptop Pro",
    description:
      "Powerful laptop with high-performance processors, stunning display, and all-day battery life for professionals.",
    price: 1599.99,
    category: "electronics",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
    rating: 4.7,
    reviewCount: 189,
    inStock: true,
    stockCount: 15,
    isBestseller: true,
    tags: ["laptop", "professional", "premium"],
  },
  {
    id: "9",
    name: "Premium Wireless Headphones",
    description:
      "Experience crystal-clear audio with our premium wireless headphones featuring noise cancellation and 30-hour battery life.",
    price: 20,
    originalPrice: 30.99,
    category: "electronics",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
    rating: 4.5,
    reviewCount: 128,
    inStock: false,
    stockCount: 0,
    isOnSale: true,
    tags: ["wireless", "audio", "premium"],
  },
  {
    id: "9",
    name: "Drone",
    description:
      "Experience crystal-clear audio with our premium wireless headphones featuring noise cancellation and 30-hour battery life.",
    price: 40,
    originalPrice: 60,
    category: "electronics",
    image:
      "https://images.unsplash.com/photo-1521405924368-64c5b84bec60?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.5,
    reviewCount: 128,
    inStock: true,
    stockCount: 45,
    isOnSale: true,
    tags: ["wireless", "audio", "premium"],
  },
];

export function getMockProducts(count: number): Product[] {
  const result: Product[] = [];

  for (let i = 0; i < count; i++) {
    const base = mockProducts[Math.floor(Math.random() * mockProducts.length)];

    const newProduct: Product = {
      ...base,
      id: uuidv4(),
      name: `${base.name} #${i + 1}`,
      price: parseFloat((base.price * (0.9 + Math.random() * 0.2)).toFixed(2)), // ±10%
      stockCount: Math.floor(Math.random() * 100) + 1,
      rating: parseFloat((4 + Math.random()).toFixed(1)),
      reviewCount: Math.floor(Math.random() * 300),
    };

    result.push(newProduct);
  }

  return result;
}

export default mockProducts;
