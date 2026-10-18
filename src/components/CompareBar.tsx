'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRightLeft, ArrowRight } from 'lucide-react';
import { useCompare } from '@/src/context/CompareContext';

export default function CompareBar() {
  const { compareList, removeFromCompare, clearCompare } = useCompare();

  if (compareList.length === 0) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-2xl"
      >
        <div className="medical-gradient text-white rounded-2xl shadow-2xl p-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4 overflow-x-auto no-scrollbar py-1">
            <div className="flex items-center gap-2 mr-2">
              <ArrowRightLeft size={20} />
              <span className="font-bold text-sm hidden sm:inline">Compare ({compareList.length}/3)</span>
            </div>
            {compareList.map((product) => (
              <div key={product.slug} className="relative group shrink-0">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center p-1 relative overflow-hidden">
                  <Image 
                    src={`https://picsum.photos/seed/${product.slug}/100/100`} 
                    alt={product.name} 
                    fill
                    className="object-contain"
                  />
                </div>
                <button
                  onClick={() => removeFromCompare(product.slug)}
                  className="absolute -top-2 -right-2 bg-charcoal text-white rounded-full w-5 h-5 flex items-center justify-center text-[10px] hover:bg-red-500 transition-colors"
                >
                  <X size={12} />
                </button>
              </div>
            ))}
            {compareList.length < 3 && (
              <div className="w-12 h-12 border-2 border-dashed border-white/30 rounded-lg flex items-center justify-center text-white/30 text-[10px] text-center font-bold px-1">
                Add +
              </div>
            )}
          </div>
          
          <div className="flex items-center gap-2">
            <button 
              onClick={clearCompare}
              className="text-xs font-bold hover:underline opacity-80"
            >
              Clear
            </button>
            <Link
              href="/compare/"
              className="bg-white text-primary px-4 py-2 rounded-xl font-bold text-sm flex items-center gap-2 hover:bg-accent transition-colors"
            >
              Compare <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
