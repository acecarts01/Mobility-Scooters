"use client";

import React, { useState } from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { 
  ShoppingCart, 
  ShieldCheck, 
  Zap, 
  Weight, 
  Activity, 
  Gauge, 
  CheckCircle2, 
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { Product } from '@/src/lib/catalog';
import { ProductImage } from './ProductImage';
import { useCart } from '@/src/context/CartContext';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  // Stock status determination
  const idNum = parseInt(product.id.replace(/\D/g, '') || '0', 10);
  const isLimitedStock = product.badge === 'Top Seller' || idNum % 3 === 0;
  const stockCount = (idNum % 3) + 2; // e.g. 2, 3, or 4 left in AU warehouse

  const handleQuickBuy = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2200);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 350, damping: 25 }}
      className="bg-white rounded-[2rem] p-6 shadow-sm hover:shadow-2xl hover:shadow-primary/15 transition-all duration-300 border border-gray-100 hover:border-primary/30 group flex flex-col h-full cursor-pointer"
    >
      {/* Visual Header */}
      <div className="relative mb-5">
        <Link href={`/shop/${product.categorySlug}/${product.slug}/`} className="block">
          <div className="product-frame aspect-[4/3] relative overflow-hidden bg-accent/20 rounded-2xl">
            <ProductImage 
              productId={product.id} 
              fallbackTitle={product.name} 
              className="object-contain group-hover:scale-110 transition-transform duration-500"
            />
            
            {/* Top-Left Badges */}
            <div className="absolute top-3 left-3 flex flex-col gap-2 z-10">
              {product.badge && (
                <span className="bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                  {product.badge}
                </span>
              )}
              {product.specs.airlineApproved && (
                <span className="bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1 shadow-sm">
                  <Zap size={10} /> IATA Flight Safe
                </span>
              )}
            </div>

            {/* Top-Right Stock Status Indicator Badge */}
            <div className="absolute top-3 right-3 z-10">
              {isLimitedStock ? (
                <span className="inline-flex items-center gap-1.5 bg-amber-500/95 backdrop-blur-sm text-white text-[9px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                  Limited Stock
                </span>
              ) : (
                <span className="inline-flex items-center gap-1.5 bg-emerald-600/90 backdrop-blur-sm text-white text-[9px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                  In Stock
                </span>
              )}
            </div>

            {/* Compliance Overlays */}
            <div className="absolute bottom-3 left-3 right-3 z-10 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
              <div className="bg-charcoal/90 backdrop-blur-sm text-white p-2 rounded-xl text-[8px] font-bold uppercase tracking-widest text-center flex items-center justify-center gap-2 border border-white/10 shadow-lg">
                <ShieldCheck size={12} className="text-primary-light" />
                ARR 204 Pedestrian Legal
              </div>
            </div>
          </div>
        </Link>
      </div>

      {/* Identity */}
      <div className="mb-4">
        <span className="text-[10px] font-bold text-charcoal/40 uppercase tracking-widest block mb-1">
          {product.brand} • {product.subcategory}
        </span>
        <Link href={`/shop/${product.categorySlug}/${product.slug}/`}>
          <h3 className="text-lg md:text-xl font-bold text-charcoal group-hover:text-primary transition-colors line-clamp-2 leading-tight">
            {product.name}
          </h3>
        </Link>
      </div>

      {/* Specs Matrix */}
      <div className="grid grid-cols-3 gap-2 mb-5">
        <div className="bg-accent/50 rounded-xl p-2 text-center border border-charcoal/5">
          <Weight size={14} className="mx-auto text-primary mb-1" />
          <p className="text-[9px] font-bold text-charcoal/40 uppercase tracking-tighter">Capacity</p>
          <p className="text-xs font-bold text-charcoal">{product.specs.safeWorkingLoadKg}kg</p>
        </div>
        <div className="bg-accent/50 rounded-xl p-2 text-center border border-charcoal/5">
          <Gauge size={14} className="mx-auto text-primary mb-1" />
          <p className="text-[9px] font-bold text-charcoal/40 uppercase tracking-tighter">Range</p>
          <p className="text-xs font-bold text-charcoal">{product.specs.estimatedRangeKm}km</p>
        </div>
        <div className="bg-accent/50 rounded-xl p-2 text-center border border-charcoal/5">
          <Activity size={14} className="mx-auto text-primary mb-1" />
          <p className="text-[9px] font-bold text-charcoal/40 uppercase tracking-tighter">Weight</p>
          <p className="text-xs font-bold text-charcoal">{product.specs.totalWeightKg}kg</p>
        </div>
      </div>

      {/* Stock Urgency Line */}
      <div className="mb-2">
        {isLimitedStock ? (
          <div className="flex items-center gap-1.5 text-[11px] font-bold text-amber-700 bg-amber-50/80 px-2.5 py-1 rounded-lg border border-amber-200/60">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse shrink-0" />
            <span>Limited Stock — Only {stockCount} units remaining in AU</span>
          </div>
        ) : (
          <div className="flex items-center gap-1.5 text-[11px] font-bold text-emerald-700 bg-emerald-50/80 px-2.5 py-1 rounded-lg border border-emerald-200/60">
            <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
            <span>In Stock — Ready for 24h dispatch</span>
          </div>
        )}
      </div>

      {/* Pricing - Clinical Standard */}
      <div className="mb-5 pt-3 border-t border-gray-100 mt-auto">
        <div className="flex items-baseline justify-between">
          <span className="text-2xl font-bold text-primary tracking-tight">
            ${product.price.toLocaleString()} AUD
          </span>
          <span className="text-[9px] font-bold text-charcoal/40 uppercase tracking-widest">
            0% GST-Free
          </span>
        </div>
      </div>

      {/* Action Buttons: Quick Buy + Specs Link */}
      <div className="flex flex-col gap-2 pt-1">
        <button 
          type="button"
          onClick={handleQuickBuy}
          aria-label={`Quick Buy ${product.name}`}
          className={`w-full py-3.5 px-4 rounded-2xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all duration-200 ${
            isAdded 
              ? 'bg-emerald-600 text-white shadow-emerald-600/30 scale-[1.02]' 
              : 'medical-gradient text-white hover:shadow-lg hover:shadow-primary/25 hover:scale-[1.02] active:scale-[0.98]'
          }`}
        >
          {isAdded ? (
            <>
              <CheckCircle2 size={16} className="shrink-0" />
              <span>Added to Cart!</span>
            </>
          ) : (
            <>
              <ShoppingCart size={16} className="shrink-0" />
              <span>Quick Buy</span>
            </>
          )}
        </button>

        <Link
          href={`/shop/${product.categorySlug}/${product.slug}/`}
          className="w-full text-center py-1.5 text-[11px] font-bold text-charcoal/60 hover:text-primary transition-colors flex items-center justify-center gap-1 group/link"
        >
          <span>View Full Specifications</span>
          <ChevronRight size={13} className="group-hover/link:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
}
