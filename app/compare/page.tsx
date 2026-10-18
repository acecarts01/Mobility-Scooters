'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';
import { X, ArrowLeft, ShoppingCart, CheckCircle2 } from 'lucide-react';
import { useCompare } from '@/src/context/CompareContext';
import { SITE, CONTACT } from '@/src/config/site';

const specsToCompare = [
  { key: 'range', label: 'Driving Range' },
  { key: 'weight', label: 'Net Weight' },
  { key: 'speed', label: 'Top Speed' },
  { key: 'capacity', label: 'Max Capacity' },
  { key: 'battery', label: 'Battery Capacity' },
  { key: 'charging', label: 'Charging Time' },
];

export default function ComparePage() {
  const { compareList, removeFromCompare, clearCompare } = useCompare();

  if (compareList.length === 0) {
    return (
      <div className="min-h-screen bg-accent flex flex-col items-center justify-center p-4">
        <div className="text-center max-w-md">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-6">
            <CheckCircle2 size={40} />
          </div>
          <h1 className="text-3xl font-bold mb-4 text-charcoal">Comparison Empty</h1>
          <p className="text-charcoal/60 mb-8">Add up to 3 scooters to see a side-by-side technical comparison.</p>
          <Link href="/shop/" className="medical-gradient text-white px-8 py-4 rounded-xl font-bold block">
            Browse All Scooters
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white border-b border-gray-100 py-6 sticky top-0 z-40 shadow-sm">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/shop/" className="p-2 hover:bg-accent rounded-full transition-colors">
              <ArrowLeft size={24} />
            </Link>
            <h1 className="text-2xl font-bold text-charcoal">Product Comparison</h1>
          </div>
          <button 
            onClick={clearCompare}
            className="text-sm font-bold text-primary hover:underline"
          >
            Clear All
          </button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="overflow-x-auto no-scrollbar pb-8">
          <table className="w-full border-collapse min-w-[800px]">
            <thead>
              <tr>
                <th className="w-1/4 p-4 border-b border-gray-100 text-left bg-white sticky left-0 z-10">
                  <span className="text-xs font-bold text-charcoal/40 uppercase tracking-widest">Specifications</span>
                </th>
                {compareList.map((product) => (
                  <th key={product.slug} className="w-1/4 p-6 border-b border-gray-100 relative group min-w-[250px]">
                    <button 
                      onClick={() => removeFromCompare(product.slug)}
                      className="absolute top-2 right-2 p-1 text-charcoal/30 hover:text-red-500 transition-colors"
                      aria-label="Remove from comparison"
                    >
                      <X size={20} />
                    </button>
                    <div className="product-frame mb-4 h-48 relative rounded-xl overflow-hidden bg-accent/30">
                      <Image 
                        src={`https://picsum.photos/seed/${product.slug}/400/300`} 
                        alt={product.name} 
                        fill 
                        className="object-contain p-4"
                      />
                    </div>
                    <h2 className="font-bold text-lg mb-2 line-clamp-2 min-h-[3.5rem]">{product.name}</h2>
                    <div className="text-2xl font-bold text-primary mb-4">${product.price.toLocaleString()}</div>
                    <Link 
                      href={`/shop/${product.category}/${product.slug}/`}
                      className="medical-gradient text-white w-full py-3 rounded-xl font-bold text-sm inline-block text-center hover:shadow-lg transition-shadow"
                    >
                      View Details
                    </Link>
                  </th>
                ))}
                {Array.from({ length: Math.max(0, 3 - compareList.length) }).map((_, i) => (
                  <th key={i} className="w-1/4 p-6 border-b border-gray-100 bg-accent/10 rounded-t-2xl">
                    <div className="h-full flex flex-col items-center justify-center text-charcoal/20 py-12">
                      <div className="w-12 h-12 border-2 border-dashed border-charcoal/20 rounded-full flex items-center justify-center mb-4 text-2xl">
                        +
                      </div>
                      <p className="font-bold text-sm">Add Slot</p>
                      <Link href="/shop/" className="text-xs font-bold text-primary mt-2 hover:underline">Browse</Link>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {specsToCompare.map((spec) => (
                <tr key={spec.key} className="group">
                  <td className="p-5 border-b border-gray-50 bg-white font-bold text-sm text-charcoal sticky left-0 z-10 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.05)]">
                    {spec.label}
                  </td>
                  {compareList.map((product) => (
                    <td key={`${product.slug}-${spec.key}`} className="p-5 border-b border-gray-50 text-center text-sm font-medium text-charcoal/80 group-hover:bg-accent/5">
                      {product.specs?.[spec.key] || '—'}
                    </td>
                  ))}
                  {Array.from({ length: Math.max(0, 3 - compareList.length) }).map((_, i) => (
                    <td key={i} className="p-5 border-b border-gray-50 bg-accent/5" />
                  ))}
                </tr>
              ))}
              <tr>
                <td className="p-5 border-b border-gray-50 bg-white sticky left-0 z-10" />
                {compareList.map((product) => (
                  <td key={product.slug} className="p-8 border-b border-gray-50 text-center">
                    <Link 
                      href={`https://wa.me/${CONTACT.whatsapp.replace('+', '')}?text=Hi, I would like to order the ${product.name}`}
                      className="bg-charcoal text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-opacity-90 transition-all flex items-center justify-center gap-2"
                    >
                      Order Now
                    </Link>
                  </td>
                ))}
                {Array.from({ length: Math.max(0, 3 - compareList.length) }).map((_, i) => (
                  <td key={i} className="p-8 border-b border-gray-50 bg-accent/5" />
                ))}
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="mt-12 p-8 bg-accent rounded-3xl">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center shrink-0">
              <CheckCircle2 size={32} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-charcoal mb-2">Technical Decision Support</h3>
              <p className="text-charcoal/60">Every mobility scooter shown here is 100% Pedestrian Legal (ARR 204) and GST-Free. If you need clinical guidance on motor power versus terrain capability, our specialists are available for immediate consultation.</p>
            </div>
            <Link href={`tel:${CONTACT.phone}`} className="medical-gradient text-white px-8 py-4 rounded-xl font-bold whitespace-nowrap">
              Call Specialist
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
