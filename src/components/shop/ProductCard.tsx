"use client";

import React, { useState } from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { 
  ShoppingCart, 
  ShieldCheck, 
  Zap, 
  Weight, 
  Gauge, 
  Activity,
  CheckCircle2, 
  ChevronRight,
  FileText
} from 'lucide-react';
import { Product } from '@/src/lib/catalog';
import { ProductThumbnail } from './ProductThumbnail';
import { useCart } from '@/src/context/CartContext';
import { formatAud, GST_FREE_LABEL } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  // Stock status determination
  const idNum = parseInt(product.id.replace(/\D/g, '') || '0', 10);
  const isLimitedStock = product.badge === 'Top Seller' || idNum % 3 === 0;
  const stockCount = (idNum % 3) + 2;

  const handleQuickBuy = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2200);
  };

  const primaryImage = product.images && product.images.length > 0 ? product.images[0] : undefined;

  return (
    <motion.article 
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.25 }}
      className="bg-white rounded-3xl p-5 md:p-6 shadow-sm hover:shadow-xl hover:shadow-[#007A78]/10 transition-all duration-300 border-2 border-[#1E252B]/10 hover:border-[#007A78] flex flex-col h-full group"
    >
      {/* 1. Visual Thumbnail with Category Schematic Fallback */}
      <div className="relative mb-4">
        <Link 
          href={`/shop/${product.categorySlug}/${product.slug}/`} 
          className="block focus:outline-hidden focus:ring-4 focus:ring-[#007A78]/40 rounded-2xl"
          aria-label={`View details for ${product.name}`}
        >
          <ProductThumbnail
            src={primaryImage}
            alt={product.name}
            sku={product.sku}
            brand={product.brand}
            categorySlug={product.categorySlug}
            airlineApproved={product.specs.airlineApproved}
            arr204Compliant={product.specs.arr204FootpathCompliant}
            className="group-hover:scale-[1.02] transition-transform duration-300"
          />

          {/* Top-Right Urgency Badge */}
          <div className="absolute top-3 right-3 z-30 pointer-events-none">
            {isLimitedStock ? (
              <span className="inline-flex items-center gap-1.5 bg-[#B45309] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                Limited Stock ({stockCount} Left)
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 bg-[#007A78] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                <span className="w-2 h-2 rounded-full bg-white" />
                In Stock (AU Warehouse)
              </span>
            )}
          </div>
        </Link>
      </div>

      {/* 2. Identity & ARR 204 Regulatory Tag */}
      <div className="mb-4">
        <div className="flex items-center justify-between gap-2 mb-1.5">
          <span className="text-xs font-bold text-[#1E252B]/60 uppercase tracking-wider">
            {product.brand} &bull; {product.subcategory || product.category}
          </span>
          <span className="inline-flex items-center gap-1 bg-[#F4F1EA] text-[#007A78] text-[10px] font-bold px-2.5 py-0.5 rounded-md border border-[#007A78]/20">
            <ShieldCheck size={12} />
            ARR 204 (&le; {product.specs.maxSpeedKmh}km/h)
          </span>
        </div>

        <Link 
          href={`/shop/${product.categorySlug}/${product.slug}/`}
          className="focus:outline-hidden focus:ring-2 focus:ring-[#007A78] rounded-sm block"
        >
          <h3 className="text-xl md:text-2xl font-bold text-[#1E252B] group-hover:text-[#007A78] transition-colors line-clamp-2 leading-snug">
            {product.name}
          </h3>
        </Link>
      </div>

      {/* 3. Specs Pill Matrix: Safe Working Load, Estimated Range, Total Weight */}
      <div className="grid grid-cols-3 gap-2 mb-4" role="list" aria-label="Key Specifications">
        <div className="bg-[#F4F1EA] rounded-xl p-2.5 text-center border border-[#1E252B]/10" role="listitem">
          <Weight size={16} className="mx-auto text-[#007A78] mb-1" aria-hidden="true" />
          <p className="text-[10px] font-extrabold text-[#1E252B]/60 uppercase tracking-tight">SWL Capacity</p>
          <p className="text-sm font-bold text-[#1E252B]">{product.specs.safeWorkingLoadKg} kg</p>
        </div>
        <div className="bg-[#F4F1EA] rounded-xl p-2.5 text-center border border-[#1E252B]/10" role="listitem">
          <Gauge size={16} className="mx-auto text-[#007A78] mb-1" aria-hidden="true" />
          <p className="text-[10px] font-extrabold text-[#1E252B]/60 uppercase tracking-tight">Max Range</p>
          <p className="text-sm font-bold text-[#1E252B]">{product.specs.estimatedRangeKm} km</p>
        </div>
        <div className="bg-[#F4F1EA] rounded-xl p-2.5 text-center border border-[#1E252B]/10" role="listitem">
          <Activity size={16} className="mx-auto text-[#007A78] mb-1" aria-hidden="true" />
          <p className="text-[10px] font-extrabold text-[#1E252B]/60 uppercase tracking-tight">Total Weight</p>
          <p className="text-sm font-bold text-[#1E252B]">{product.specs.totalWeightKg} kg</p>
        </div>
      </div>

      {/* 4. Pricing: Clinical Standard + GST Exemption statutory notice */}
      <div className="mb-4 pt-3 border-t-2 border-[#1E252B]/5 mt-auto">
        <div className="flex items-baseline justify-between flex-wrap gap-1">
          <span className="text-2xl md:text-3xl font-extrabold text-[#007A78] tracking-tight">
            {formatAud(product.price)}
          </span>
          <span className="bg-[#007A78]/10 text-[#007A78] text-xs font-extrabold px-2.5 py-1 rounded-md uppercase tracking-wider border border-[#007A78]/20">
            {GST_FREE_LABEL}
          </span>
        </div>
        <p className="text-[11px] text-[#1E252B]/60 font-medium mt-1">
          Sec 38-45 GST Act 1999 &bull; NDIS Funding Eligible
        </p>
      </div>

      {/* 5. Accessible Action CTAs (Minimum 48px touch targets) */}
      <div className="flex flex-col gap-2.5 pt-1">
        <div className="grid grid-cols-2 gap-2">
          {/* Quick Buy CTA */}
          <button 
            type="button"
            onClick={handleQuickBuy}
            aria-label={`Quick Buy ${product.name}`}
            className={`min-h-[48px] px-4 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xs transition-all duration-200 cursor-pointer focus:outline-hidden focus:ring-4 focus:ring-[#007A78]/30 ${
              isAdded 
                ? 'bg-[#007A78] text-white' 
                : 'bg-[#007A78] hover:bg-[#00605E] text-white active:scale-98'
            }`}
          >
            {isAdded ? (
              <>
                <CheckCircle2 size={18} className="shrink-0" />
                <span>Added!</span>
              </>
            ) : (
              <>
                <ShoppingCart size={18} className="shrink-0" />
                <span>Quick Buy</span>
              </>
            )}
          </button>

          {/* Direct NDIS Quote Trigger CTA */}
          <Link
            href={`/ndis-funding/?product=${encodeURIComponent(product.slug)}`}
            aria-label={`Request formal NDIS Quote for ${product.name}`}
            className="min-h-[48px] px-3 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 bg-[#F4F1EA] hover:bg-[#EAE4D7] text-[#1E252B] border-2 border-[#1E252B]/15 transition-all text-center focus:outline-hidden focus:ring-4 focus:ring-[#007A78]/30 active:scale-98"
          >
            <FileText size={16} className="text-[#007A78] shrink-0" />
            <span>NDIS Quote</span>
          </Link>
        </div>

        {/* View Full Specifications Link (>= 48px target) */}
        <Link
          href={`/shop/${product.categorySlug}/${product.slug}/`}
          className="min-h-[48px] w-full text-center px-4 rounded-xl text-sm font-bold text-[#1E252B] hover:text-[#007A78] hover:bg-[#F4F1EA]/60 border border-transparent hover:border-[#1E252B]/10 transition-all flex items-center justify-center gap-1.5 focus:outline-hidden focus:ring-2 focus:ring-[#007A78]"
        >
          <span>View Full Technical Specifications</span>
          <ChevronRight size={16} className="text-[#007A78] shrink-0" />
        </Link>
      </div>
    </motion.article>
  );
}

export default ProductCard;
