"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { ShieldCheck, Zap, Cog, Sparkles } from 'lucide-react';

interface ProductThumbnailProps {
  src?: string;
  alt: string;
  sku: string;
  brand: string;
  categorySlug: string;
  categoryName?: string;
  airlineApproved?: boolean;
  arr204Compliant?: boolean;
  priority?: boolean;
  className?: string;
}

/**
 * Category-themed SVG Technical Schematics for items awaiting studio photography.
 * Zero layout shift (CLS = 0) with 4:3 fixed ratio.
 */
function SchematicSvg({ categorySlug, brand, sku }: { categorySlug: string; brand: string; sku: string }) {
  // Normalize category slug
  const cat = categorySlug.toLowerCase();

  if (cat.includes('folding') || cat.includes('portable')) {
    // Portable & Folding: Chassis with hinge joints and compact folded geometry
    return (
      <svg viewBox="0 0 400 300" className="w-full h-full text-primary" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="300" fill="#F8FAFA" />
        <defs>
          <pattern id="grid-fold" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#E2E8F0" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="400" height="300" fill="url(#grid-fold)" opacity="0.6" />
        
        {/* Technical Blueprint Annotations */}
        <text x="20" y="35" fill="#007A78" fontSize="10" fontFamily="monospace" fontWeight="bold" letterSpacing="1.5">
          TECHNICAL SCHEMATIC — FOLDING CHASSIS
        </text>
        <text x="20" y="50" fill="#64748B" fontSize="8" fontFamily="monospace">
          {`SPEC: ${brand.toUpperCase()} — REF: ${sku}`}
        </text>
        
        {/* Chassis Frame Schematic */}
        <g stroke="#007A78" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          {/* Main frame spine */}
          <path d="M 110 210 L 290 210" strokeDasharray="4 2" opacity="0.4" />
          <path d="M 120 200 L 280 200" />
          <path d="M 160 200 L 190 140 L 230 140 L 250 200" />
          {/* Tiller & Steering column */}
          <path d="M 140 200 L 170 90 L 155 85" />
          <path d="M 170 90 L 185 85" />
          {/* Fold Hinge Pivot */}
          <circle cx="190" cy="140" r="6" fill="#007A78" />
          <circle cx="190" cy="140" r="10" stroke="#007A78" strokeWidth="1" strokeDasharray="2 2" />
          {/* Seat mount */}
          <path d="M 210 140 L 210 105 L 260 105" />
          <rect x="200" y="95" width="60" height="10" rx="3" fill="#E6F2F2" />
          {/* Backrest */}
          <path d="M 255 100 L 260 60" />
          {/* Wheels (4-wheel architecture) */}
          <circle cx="130" cy="205" r="22" fill="#E6F2F2" strokeWidth="3" />
          <circle cx="130" cy="205" r="8" fill="#007A78" />
          <circle cx="270" cy="205" r="22" fill="#E6F2F2" strokeWidth="3" />
          <circle cx="270" cy="205" r="8" fill="#007A78" />
          {/* Anti-tip rear wheels */}
          <circle cx="300" cy="215" r="8" strokeWidth="1.5" />
        </g>
        
        {/* Fold Vector Arc */}
        <path d="M 175 75 A 50 50 0 0 1 240 90" stroke="#0D9488" strokeWidth="1.5" strokeDasharray="3 3" />
        <polygon points="243,90 236,86 240,82" fill="#0D9488" />
        
        <text x="200" y="270" textAnchor="middle" fill="#64748B" fontSize="9" fontFamily="sans-serif" fontWeight="600">
          [ AWAITING STUDIO ROTATIONAL ASSET ]
        </text>
      </svg>
    );
  }

  if (cat.includes('heavy-duty') || cat.includes('all-terrain')) {
    // Heavy Duty All-Terrain: High ground clearance, double wishbone, bariatric chassis
    return (
      <svg viewBox="0 0 400 300" className="w-full h-full text-primary" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="300" fill="#F8FAFA" />
        <defs>
          <pattern id="grid-hd" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#E2E8F0" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="400" height="300" fill="url(#grid-hd)" opacity="0.6" />
        
        <text x="20" y="35" fill="#007A78" fontSize="10" fontFamily="monospace" fontWeight="bold" letterSpacing="1.5">
          TECHNICAL SCHEMATIC — HEAVY DUTY 4x4 ALL-TERRAIN
        </text>
        <text x="20" y="50" fill="#64748B" fontSize="8" fontFamily="monospace">
          {`HIGH CLEARANCE PLATFORM — ${sku}`}
        </text>
        
        <g stroke="#1E252B" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          {/* Heavy Reinforced Base Chassis */}
          <path d="M 100 185 L 300 185" />
          <path d="M 110 170 L 290 170" stroke="#007A78" strokeWidth="2" />
          {/* Bull-bar / Front Bumper */}
          <path d="M 90 170 L 100 140 L 120 140" stroke="#007A78" strokeWidth="2.5" />
          {/* Suspension Coils */}
          <path d="M 125 185 L 125 155" strokeDasharray="3 2" />
          <path d="M 275 185 L 275 155" strokeDasharray="3 2" />
          {/* Captain Seat High-Back Orthopaedic */}
          <rect x="190" y="85" width="75" height="50" rx="6" fill="#E6F2F2" stroke="#007A78" strokeWidth="2" />
          <path d="M 265 90 L 275 50" stroke="#007A78" strokeWidth="3" />
          {/* Steering Console & Delta Tiller */}
          <path d="M 135 170 L 160 80 L 140 75" stroke="#007A78" strokeWidth="2.5" />
          {/* Large All-Terrain Pneumatic Wheels */}
          <circle cx="120" cy="195" r="32" fill="#E6F2F2" stroke="#1E252B" strokeWidth="4" />
          <circle cx="120" cy="195" r="14" fill="#007A78" stroke="none" />
          <circle cx="280" cy="195" r="32" fill="#E6F2F2" stroke="#1E252B" strokeWidth="4" />
          <circle cx="280" cy="195" r="14" fill="#007A78" stroke="none" />
          {/* Rugged Tread Notches */}
          <path d="M 100 175 L 94 170 M 140 175 L 146 170 M 260 175 L 254 170 M 300 175 L 306 170" stroke="#1E252B" strokeWidth="2.5" />
        </g>
        
        <text x="200" y="270" textAnchor="middle" fill="#64748B" fontSize="9" fontFamily="sans-serif" fontWeight="600">
          [ AWAITING STUDIO ROTATIONAL ASSET ]
        </text>
      </svg>
    );
  }

  if (cat.includes('ramps') || cat.includes('hoists')) {
    // Ramps & Hoists: Loading grade vector with vehicle tailgate
    return (
      <svg viewBox="0 0 400 300" className="w-full h-full text-primary" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="300" fill="#F8FAFA" />
        <defs>
          <pattern id="grid-ramp" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#E2E8F0" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="400" height="300" fill="url(#grid-ramp)" opacity="0.6" />
        
        <text x="20" y="35" fill="#007A78" fontSize="10" fontFamily="monospace" fontWeight="bold" letterSpacing="1.5">
          TECHNICAL SCHEMATIC — ACCESS RAMP & HOIST
        </text>
        <text x="20" y="50" fill="#64748B" fontSize="8" fontFamily="monospace">
          {`LOADING SYSTEM — ${sku}`}
        </text>
        
        <g stroke="#007A78" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          {/* Ground & Vehicle Sill */}
          <path d="M 50 230 L 350 230" stroke="#1E252B" strokeWidth="2" />
          <path d="M 270 230 L 270 120 L 350 120" stroke="#64748B" strokeWidth="3" />
          {/* Telescopic / Suitcase Ramp Plane */}
          <path d="M 80 230 L 280 120" stroke="#007A78" strokeWidth="4" />
          <path d="M 85 220 L 275 115" strokeDasharray="5 5" stroke="#0D9488" strokeWidth="2" />
          {/* Safety Raised Curbs */}
          <circle cx="80" cy="230" r="5" fill="#007A78" />
          <circle cx="280" cy="120" r="5" fill="#007A78" />
          {/* Gradient Slope Angle Notation */}
          <path d="M 120 230 A 40 40 0 0 0 135 200" stroke="#D97706" strokeWidth="1.5" />
          <text x="145" y="215" fill="#D97706" fontSize="10" fontFamily="monospace" fontWeight="bold">ARR GRADIENT &le; 1:8</text>
        </g>
        
        <text x="200" y="270" textAnchor="middle" fill="#64748B" fontSize="9" fontFamily="sans-serif" fontWeight="600">
          [ AWAITING STUDIO ROTATIONAL ASSET ]
        </text>
      </svg>
    );
  }

  if (cat.includes('batteries') || cat.includes('accessories')) {
    // Batteries & Electronics: Smart battery cell module & BMS circuitry
    return (
      <svg viewBox="0 0 400 300" className="w-full h-full text-primary" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="300" fill="#F8FAFA" />
        <defs>
          <pattern id="grid-bat" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#E2E8F0" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="400" height="300" fill="url(#grid-bat)" opacity="0.6" />
        
        <text x="20" y="35" fill="#007A78" fontSize="10" fontFamily="monospace" fontWeight="bold" letterSpacing="1.5">
          TECHNICAL SCHEMATIC — POWER MODULE & ACCESSORY
        </text>
        <text x="20" y="50" fill="#64748B" fontSize="8" fontFamily="monospace">
          {`BMS LITHIUM-ION ARCHITECTURE — ${sku}`}
        </text>
        
        <g stroke="#007A78" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {/* Battery Pack Enclosure */}
          <rect x="130" y="90" width="140" height="110" rx="10" fill="#E6F2F2" stroke="#1E252B" strokeWidth="3" />
          {/* Terminals */}
          <rect x="160" y="75" width="25" height="15" rx="3" fill="#1E252B" stroke="none" />
          <rect x="215" y="75" width="25" height="15" rx="3" fill="#DC2626" stroke="none" />
          <text x="172" y="86" fill="white" fontSize="10" fontWeight="bold">-</text>
          <text x="227" y="86" fill="white" fontSize="10" fontWeight="bold">+</text>
          {/* Smart BMS Status Display */}
          <rect x="150" y="120" width="100" height="45" rx="5" fill="#1E252B" />
          <path d="M 165 142 L 180 142 L 190 132 L 205 152 L 215 142 L 235 142" stroke="#10B981" strokeWidth="2" />
          {/* UN 38.3 Flight Cleared Stamp */}
          <text x="200" y="185" textAnchor="middle" fill="#007A78" fontSize="9" fontFamily="monospace" fontWeight="bold">
            IATA / CASA UN38.3 CERTIFIED
          </text>
        </g>
        
        <text x="200" y="270" textAnchor="middle" fill="#64748B" fontSize="9" fontFamily="sans-serif" fontWeight="600">
          [ AWAITING STUDIO ROTATIONAL ASSET ]
        </text>
      </svg>
    );
  }

  // Default: Mid-size Pavement & Everyday Shopping Runabout
  return (
    <svg viewBox="0 0 400 300" className="w-full h-full text-primary" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="300" fill="#F8FAFA" />
      <defs>
        <pattern id="grid-pav" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#E2E8F0" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="400" height="300" fill="url(#grid-pav)" opacity="0.6" />
      
      <text x="20" y="35" fill="#007A78" fontSize="10" fontFamily="monospace" fontWeight="bold" letterSpacing="1.5">
        TECHNICAL SCHEMATIC — PAVEMENT CLASS SCOOTER
      </text>
      <text x="20" y="50" fill="#64748B" fontSize="8" fontFamily="monospace">
        {`MODEL: ${brand.toUpperCase()} — SKU: ${sku}`}
      </text>
      
      <g stroke="#007A78" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        {/* Pavement scooter chassis */}
        <path d="M 115 195 L 285 195" />
        <path d="M 130 185 L 270 185" />
        {/* Footwell Platform */}
        <rect x="155" y="180" width="80" height="10" rx="3" fill="#E6F2F2" />
        {/* Front Wire Basket */}
        <rect x="110" y="105" width="30" height="25" rx="3" strokeDasharray="3 2" fill="none" />
        {/* Steering Tiller with headlight */}
        <path d="M 140 185 L 155 95 L 140 90" />
        <circle cx="155" cy="95" r="5" fill="#F59E0B" stroke="none" />
        {/* Mid-back ergonomic seat */}
        <rect x="210" y="115" width="55" height="30" rx="4" fill="#E6F2F2" />
        <path d="M 260 120 L 265 80" strokeWidth="3" />
        {/* 4 Wheels */}
        <circle cx="130" cy="200" r="22" fill="#E6F2F2" stroke="#1E252B" strokeWidth="3" />
        <circle cx="130" cy="200" r="8" fill="#007A78" />
        <circle cx="270" cy="200" r="22" fill="#E6F2F2" stroke="#1E252B" strokeWidth="3" />
        <circle cx="270" cy="200" r="8" fill="#007A78" />
      </g>
      
      <text x="200" y="270" textAnchor="middle" fill="#64748B" fontSize="9" fontFamily="sans-serif" fontWeight="600">
        [ AWAITING STUDIO ROTATIONAL ASSET ]
      </text>
    </svg>
  );
}

export function ProductThumbnail({
  src,
  alt,
  sku,
  brand,
  categorySlug,
  categoryName,
  airlineApproved = false,
  arr204Compliant = true,
  priority = false,
  className = ""
}: ProductThumbnailProps) {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // If no source provided, render schematic immediately
  const shouldRenderSchematic = !src || hasError;

  return (
    <div className={`relative w-full aspect-[4/3] overflow-hidden bg-[#F4F1EA]/60 rounded-2xl select-none ${className}`}>
      {/* 1. Underlying Category Schematic Placeholder (Guarantees zero CLS) */}
      <div className="absolute inset-0 z-0">
        <SchematicSvg categorySlug={categorySlug} brand={brand} sku={sku} />
      </div>

      {/* 2. Photo Layer if provided and not errored */}
      {!shouldRenderSchematic && (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority={priority}
          className={`object-contain p-4 z-10 transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          referrerPolicy="no-referrer"
        />
      )}

      {/* 3. Top-Left Compliance Badges */}
      <div className="absolute top-3 left-3 z-20 flex flex-col gap-1.5 pointer-events-none">
        <div className="bg-[#1E252B]/90 backdrop-blur-xs text-white text-[9px] font-mono font-bold px-2 py-0.5 rounded-md tracking-wider flex items-center gap-1 shadow-xs border border-white/10">
          <Cog size={10} className="text-[#007A78]" />
          <span>{sku}</span>
        </div>
        {airlineApproved && (
          <div className="bg-[#007A78] text-white text-[9px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wider flex items-center gap-1 shadow-xs">
            <Zap size={10} />
            <span>CASA Flight Safe</span>
          </div>
        )}
      </div>

      {/* 4. Bottom-Left ARR 204 Pedestrian Ready Stamp */}
      {arr204Compliant && (
        <div className="absolute bottom-3 left-3 z-20 pointer-events-none">
          <div className="bg-[#007A78]/95 backdrop-blur-xs text-white px-2.5 py-1 rounded-md text-[9px] font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-sm border border-white/20">
            <ShieldCheck size={12} className="text-[#F4F1EA]" />
            <span>ARR 204 Pedestrian Ready</span>
          </div>
        </div>
      )}

      {/* 5. Top-Right Brand Badge */}
      <div className="absolute top-3 right-3 z-20 pointer-events-none">
        <div className="bg-[#F4F1EA] text-[#1E252B] font-bold text-[9px] px-2 py-0.5 rounded-md uppercase tracking-wider border border-[#1E252B]/10 shadow-xs">
          {brand}
        </div>
      </div>
    </div>
  );
}

export default ProductThumbnail;
