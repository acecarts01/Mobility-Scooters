'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { SITE } from '@/src/config/site';

interface CompareContextType {
  compareList: any[];
  addToCompare: (product: any) => boolean;
  removeFromCompare: (slug: string) => void;
  clearCompare: () => void;
  isComparing: (slug: string) => boolean;
}

const CompareContext = createContext<CompareContextType>({
  compareList: [],
  addToCompare: () => false,
  removeFromCompare: () => {},
  clearCompare: () => {},
  isComparing: () => false,
});

export function CompareProvider({ children }: { children: React.ReactNode }) {
  const [compareList, setCompareList] = useState<any[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('ls-compare-list');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setTimeout(() => setCompareList(parsed), 0);
      } catch (e) {
        console.error("Failed to parse compare list");
      }
    }
  }, []);

  const addToCompare = (product: any) => {
    if (compareList.length >= 3) return false;
    if (compareList.find(p => p.slug === product.slug)) return true;
    
    const newList = [...compareList, product];
    setCompareList(newList);
    localStorage.setItem('ls-compare-list', JSON.stringify(newList));
    return true;
  };

  const removeFromCompare = (slug: string) => {
    const newList = compareList.filter(p => p.slug !== slug);
    setCompareList(newList);
    localStorage.setItem('ls-compare-list', JSON.stringify(newList));
  };

  const clearCompare = () => {
    setCompareList([]);
    localStorage.removeItem('ls-compare-list');
  };

  const isComparing = (slug: string) => compareList.some(p => p.slug === slug);

  return (
    <CompareContext.Provider value={{ compareList, addToCompare, removeFromCompare, clearCompare, isComparing }}>
      {children}
    </CompareContext.Provider>
  );
}

export const useCompare = () => useContext(CompareContext);
