'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { SITE } from '@/src/config/site';

interface CartItem {
  id: string;
  slug: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: any) => void;
  removeFromCart: (slug: string) => void;
  updateQuantity: (slug: string, quantity: number) => void;
  clearCart: () => void;
  total: number;
  itemCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const savedCart = localStorage.getItem(SITE.cartKey);
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart)); // eslint-disable-line react-hooks/set-state-in-effect
      } catch (e) {
        console.error('Failed to parse cart', e);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(SITE.cartKey, JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: any) => {
    setCart(prev => {
      const existing = prev.find(item => item.slug === product.slug);
      if (existing) {
        return prev.map(item => 
          item.slug === product.slug ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { 
        id: product.id,
        slug: product.slug, 
        name: product.name, 
        price: product.price, 
        quantity: 1,
        image: product.images?.[0]
      }];
    });
  };

  const removeFromCart = (slug: string) => {
    setCart(prev => prev.filter(item => item.slug !== slug));
  };

  const updateQuantity = (slug: string, quantity: number) => {
    if (quantity < 1) return;
    setCart(prev => prev.map(item => 
      item.slug === slug ? { ...item, quantity } : item
    ));
  };

  const clearCart = () => setCart([]);

  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart, total, itemCount }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
