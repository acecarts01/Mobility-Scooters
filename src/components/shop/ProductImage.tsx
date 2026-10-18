"use client";

import React, { useState } from "react";
import Image from "next/image";
import { CATALOG_IMAGE_REGISTRY } from "@/lib/product-images";

interface ProductImageProps {
  productId: string;
  fallbackTitle: string;
  className?: string;
  priority?: boolean;
}

export function ProductImage({
  productId,
  fallbackTitle,
  className = "w-full h-64 object-contain",
  priority = false
}: ProductImageProps) {
  const [hasError, setHasError] = useState(false);
  const config = CATALOG_IMAGE_REGISTRY[productId];

  if (!config || hasError) {
    return (
      <div className={`flex flex-col items-center justify-center bg-[#F4F1EA] text-[#1E252B] p-4 rounded-lg border border-teal-100 ${className}`}>
        <svg className="w-12 h-12 text-[#007A78] mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 16V6a1 1 0 00-1-1H4" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8h6l4 4v4h-3" />
        </svg>
        <span className="text-xs font-semibold text-center text-[#1E252B] line-clamp-2">{fallbackTitle}</span>
        <span className="text-[10px] tracking-wider uppercase text-[#007A78] mt-1 font-bold">ARR 204 Compliant</span>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full overflow-hidden rounded-lg bg-white flex items-center justify-center">
      <Image
        src={config.localPath}
        alt={config.altText}
        width={600}
        height={450}
        priority={priority}
        className={className}
        onError={() => setHasError(true)}
      />
    </div>
  );
}
