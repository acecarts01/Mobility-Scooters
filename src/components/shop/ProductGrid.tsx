"use client";

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  SlidersHorizontal, 
  Search, 
  X, 
  Check, 
  Plane, 
  RotateCcw, 
  ArrowUpDown, 
  Weight, 
  Gauge, 
  DollarSign,
  ChevronDown
} from 'lucide-react';
import { Product } from '@/src/lib/catalog';
import { ProductCard } from './ProductCard';

interface ProductGridProps {
  initialProducts: Product[];
}

type SortOption = 
  | 'default'
  | 'price-asc'
  | 'price-desc'
  | 'weight-asc'
  | 'weight-desc'
  | 'range-desc'
  | 'range-asc';

export function ProductGrid({ initialProducts }: ProductGridProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<SortOption>('default');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState<string | null>(null);
  const [minPrice, setMinPrice] = useState<string>('');
  const [maxPrice, setMaxPrice] = useState<string>('');
  const [weightRange, setWeightRange] = useState<string | null>(null);
  const [drivingRange, setDrivingRange] = useState<string | null>(null);
  const [selectedCapacity, setSelectedCapacity] = useState<string | null>(null);
  const [selectedAirline, setSelectedAirline] = useState<boolean | null>(null);
  const [selectedFolding, setSelectedFolding] = useState<string | null>(null);
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  // Extract unique categories
  const categories = useMemo(() => {
    const map = new Map<string, string>();
    initialProducts.forEach((p) => {
      if (p.categorySlug && p.category) {
        map.set(p.categorySlug, p.category);
      }
    });
    return Array.from(map.entries());
  }, [initialProducts]);

  // Combined Filter and Sort Pipeline
  const filteredAndSortedProducts = useMemo(() => {
    // 1. Filter
    let list = initialProducts.filter(product => {
      // Search text
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        const matches = 
          product.name.toLowerCase().includes(q) || 
          product.sku.toLowerCase().includes(q) ||
          product.brand.toLowerCase().includes(q) ||
          product.category.toLowerCase().includes(q) ||
          product.shortDescription.toLowerCase().includes(q);
        if (!matches) return false;
      }

      // Category
      if (selectedCategory && product.categorySlug !== selectedCategory && product.category !== selectedCategory) {
        return false;
      }

      // Price filter
      if (priceRange === 'under-2000' && product.price >= 2000) return false;
      if (priceRange === '2000-4000' && (product.price < 2000 || product.price > 4000)) return false;
      if (priceRange === '4000-6000' && (product.price < 4000 || product.price > 6000)) return false;
      if (priceRange === '6000-plus' && product.price < 6000) return false;
      if (priceRange === 'custom') {
        const min = minPrice ? parseFloat(minPrice) : 0;
        const max = maxPrice ? parseFloat(maxPrice) : Infinity;
        if (product.price < min || product.price > max) return false;
      }

      // Total Weight filter (kg)
      const weight = product.specs?.totalWeightKg || 0;
      if (weightRange === 'under-25' && (weight === 0 || weight >= 25)) return false;
      if (weightRange === '25-50' && (weight < 25 || weight > 50)) return false;
      if (weightRange === '50-100' && (weight < 50 || weight > 100)) return false;
      if (weightRange === '100-plus' && weight < 100) return false;

      // Driving Range filter (km)
      const range = product.specs?.estimatedRangeKm || 0;
      if (drivingRange === 'under-20' && (range === 0 || range >= 20)) return false;
      if (drivingRange === '20-35' && (range < 20 || range > 35)) return false;
      if (drivingRange === '35-50' && (range < 35 || range > 50)) return false;
      if (drivingRange === '50-plus' && range < 50) return false;

      // Safe Working Load Capacity
      if (selectedCapacity === 'standard') {
        if (product.specs.safeWorkingLoadKg <= 0 || product.specs.safeWorkingLoadKg > 120) return false;
      } else if (selectedCapacity === 'medium') {
        if (product.specs.safeWorkingLoadKg <= 120 || product.specs.safeWorkingLoadKg > 150) return false;
      } else if (selectedCapacity === 'bariatric') {
        if (product.specs.safeWorkingLoadKg <= 150) return false;
      }

      // Airline Flight Safe
      if (selectedAirline !== null && product.specs.airlineApproved !== selectedAirline) {
        return false;
      }

      // Mechanism / Folding
      if (selectedFolding && !product.subcategorySlug?.includes(selectedFolding)) {
        return false;
      }

      return true;
    });

    // 2. Sort
    if (sortBy === 'price-asc') {
      list = [...list].sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      list = [...list].sort((a, b) => b.price - a.price);
    } else if (sortBy === 'weight-asc') {
      list = [...list].sort((a, b) => {
        const wA = a.specs?.totalWeightKg || 9999;
        const wB = b.specs?.totalWeightKg || 9999;
        return wA - wB;
      });
    } else if (sortBy === 'weight-desc') {
      list = [...list].sort((a, b) => {
        const wA = a.specs?.totalWeightKg || 0;
        const wB = b.specs?.totalWeightKg || 0;
        return wB - wA;
      });
    } else if (sortBy === 'range-desc') {
      list = [...list].sort((a, b) => {
        const rA = a.specs?.estimatedRangeKm || 0;
        const rB = b.specs?.estimatedRangeKm || 0;
        return rB - rA;
      });
    } else if (sortBy === 'range-asc') {
      list = [...list].sort((a, b) => {
        const rA = a.specs?.estimatedRangeKm || 9999;
        const rB = b.specs?.estimatedRangeKm || 9999;
        return rA - rB;
      });
    }

    return list;
  }, [
    initialProducts,
    searchQuery,
    selectedCategory,
    priceRange,
    minPrice,
    maxPrice,
    weightRange,
    drivingRange,
    selectedCapacity,
    selectedAirline,
    selectedFolding,
    sortBy
  ]);

  const resetFilters = () => {
    setSearchQuery('');
    setSortBy('default');
    setSelectedCategory(null);
    setPriceRange(null);
    setMinPrice('');
    setMaxPrice('');
    setWeightRange(null);
    setDrivingRange(null);
    setSelectedCapacity(null);
    setSelectedAirline(null);
    setSelectedFolding(null);
  };

  const hasActiveFilters = 
    searchQuery !== '' ||
    sortBy !== 'default' ||
    selectedCategory !== null ||
    priceRange !== null ||
    weightRange !== null ||
    drivingRange !== null ||
    selectedCapacity !== null ||
    selectedAirline !== null ||
    selectedFolding !== null;

  // Sidebar Control Panel JSX (used in desktop sidebar & mobile drawer)
  const filtersContent = (
    <div className="space-y-8 text-charcoal">
      {/* 1. SORT CONTROL PANEL */}
      <div className="bg-white rounded-2xl p-5 border border-primary/10 shadow-sm">
        <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider mb-4 pb-2 border-b border-gray-100">
          <ArrowUpDown size={15} />
          <span>Sort Products</span>
        </div>
        
        <div className="space-y-1.5">
          {[
            { id: 'default', label: 'Recommended / Default' },
            { id: 'price-asc', label: 'Price: Low to High ($)' },
            { id: 'price-desc', label: 'Price: High to Low ($)' },
            { id: 'weight-asc', label: 'Weight: Lightest First (kg)' },
            { id: 'weight-desc', label: 'Weight: Heaviest First (kg)' },
            { id: 'range-desc', label: 'Driving Range: Longest First (km)' },
            { id: 'range-asc', label: 'Driving Range: Shortest First (km)' },
          ].map(opt => (
            <button
              key={opt.id}
              onClick={() => setSortBy(opt.id as SortOption)}
              className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all flex items-center justify-between group ${
                sortBy === opt.id 
                  ? 'bg-primary text-white font-bold shadow-sm' 
                  : 'bg-accent/30 text-charcoal/80 hover:bg-accent hover:text-charcoal'
              }`}
            >
              <span>{opt.label}</span>
              {sortBy === opt.id && <Check size={14} className="shrink-0" />}
            </button>
          ))}
        </div>
      </div>

      {/* 2. PRICE FILTER */}
      <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
        <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider mb-4 pb-2 border-b border-gray-100">
          <DollarSign size={15} />
          <span>Filter by Price</span>
        </div>
        <div className="space-y-1.5 mb-3">
          {[
            { id: 'under-2000', label: 'Under $2,000 AUD' },
            { id: '2000-4000', label: '$2,000 \u2013 $4,000 AUD' },
            { id: '4000-6000', label: '$4,000 \u2013 $6,000 AUD' },
            { id: '6000-plus', label: '$6,000+ High-End / Bariatric' },
          ].map(opt => (
            <button
              key={opt.id}
              onClick={() => setPriceRange(priceRange === opt.id ? null : opt.id)}
              className={`w-full text-left px-3.5 py-2 rounded-xl text-xs font-medium transition-all flex items-center justify-between ${
                priceRange === opt.id 
                  ? 'bg-primary/10 border border-primary text-primary font-bold' 
                  : 'bg-accent/20 text-charcoal/80 hover:bg-accent/40 border border-transparent'
              }`}
            >
              <span>{opt.label}</span>
              {priceRange === opt.id && <Check size={14} />}
            </button>
          ))}
        </div>

        {/* Custom Price Range Input */}
        <div className="pt-2 border-t border-gray-100">
          <p className="text-[10px] font-bold text-charcoal/50 uppercase tracking-wider mb-2">Custom Price ($)</p>
          <div className="flex items-center gap-2">
            <input 
              type="number"
              placeholder="Min"
              value={minPrice}
              onChange={(e) => {
                setMinPrice(e.target.value);
                setPriceRange('custom');
              }}
              className="w-1/2 bg-accent/40 px-3 py-1.5 rounded-lg text-xs font-medium border border-gray-200 outline-none focus:border-primary"
            />
            <span className="text-xs text-charcoal/40 font-bold">-</span>
            <input 
              type="number"
              placeholder="Max"
              value={maxPrice}
              onChange={(e) => {
                setMaxPrice(e.target.value);
                setPriceRange('custom');
              }}
              className="w-1/2 bg-accent/40 px-3 py-1.5 rounded-lg text-xs font-medium border border-gray-200 outline-none focus:border-primary"
            />
          </div>
        </div>
      </div>

      {/* 3. PRODUCT WEIGHT FILTER */}
      <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
        <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider mb-4 pb-2 border-b border-gray-100">
          <Weight size={15} />
          <span>Filter by Total Weight</span>
        </div>
        <div className="space-y-1.5">
          {[
            { id: 'under-25', label: 'Under 25kg (Ultra-Light Travel)' },
            { id: '25-50', label: '25kg \u2013 50kg (Compact Boot)' },
            { id: '50-100', label: '50kg \u2013 100kg (Mid-Size)' },
            { id: '100-plus', label: '100kg+ (Heavy-Duty Cruiser)' },
          ].map(opt => (
            <button
              key={opt.id}
              onClick={() => setWeightRange(weightRange === opt.id ? null : opt.id)}
              className={`w-full text-left px-3.5 py-2 rounded-xl text-xs font-medium transition-all flex items-center justify-between ${
                weightRange === opt.id 
                  ? 'bg-primary/10 border border-primary text-primary font-bold' 
                  : 'bg-accent/20 text-charcoal/80 hover:bg-accent/40 border border-transparent'
              }`}
            >
              <span>{opt.label}</span>
              {weightRange === opt.id && <Check size={14} />}
            </button>
          ))}
        </div>
      </div>

      {/* 4. DRIVING RANGE FILTER */}
      <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
        <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider mb-4 pb-2 border-b border-gray-100">
          <Gauge size={15} />
          <span>Filter by Driving Range</span>
        </div>
        <div className="space-y-1.5">
          {[
            { id: 'under-20', label: 'Under 20km (Suburban/Local)' },
            { id: '20-35', label: '20km \u2013 35km (Daily Independence)' },
            { id: '35-50', label: '35km \u2013 50km (Extended Touring)' },
            { id: '50-plus', label: '50km+ (Ultra Long-Range Rural)' },
          ].map(opt => (
            <button
              key={opt.id}
              onClick={() => setDrivingRange(drivingRange === opt.id ? null : opt.id)}
              className={`w-full text-left px-3.5 py-2 rounded-xl text-xs font-medium transition-all flex items-center justify-between ${
                drivingRange === opt.id 
                  ? 'bg-primary/10 border border-primary text-primary font-bold' 
                  : 'bg-accent/20 text-charcoal/80 hover:bg-accent/40 border border-transparent'
              }`}
            >
              <span>{opt.label}</span>
              {drivingRange === opt.id && <Check size={14} />}
            </button>
          ))}
        </div>
      </div>

      {/* 5. SAFE WORKING LOAD CAPACITY */}
      <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
        <h3 className="text-[10px] font-bold text-charcoal/50 uppercase tracking-widest mb-3">Safe Working Load (SWL)</h3>
        <div className="space-y-1.5">
          {[
            { id: 'standard', label: 'Up to 120kg (Standard)' },
            { id: 'medium', label: '121kg \u2013 150kg (Mid-Range)' },
            { id: 'bariatric', label: '150kg+ (Heavy-Duty Bariatric)' },
          ].map(opt => (
            <button 
              key={opt.id}
              onClick={() => setSelectedCapacity(selectedCapacity === opt.id ? null : opt.id)}
              className={`w-full text-left px-3.5 py-2 rounded-xl text-xs font-medium transition-all flex items-center justify-between ${
                selectedCapacity === opt.id 
                  ? 'bg-primary/10 border border-primary text-primary font-bold' 
                  : 'bg-accent/20 text-charcoal/80 hover:bg-accent/40 border border-transparent'
              }`}
            >
              <span>{opt.label}</span>
              {selectedCapacity === opt.id && <Check size={14} />}
            </button>
          ))}
        </div>
      </div>

      {/* 6. CATEGORIES */}
      <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
        <h3 className="text-[10px] font-bold text-charcoal/50 uppercase tracking-widest mb-3">Clinical Category</h3>
        <div className="space-y-1.5">
          <button 
            onClick={() => setSelectedCategory(null)}
            className={`w-full text-left px-3.5 py-2 rounded-xl text-xs font-semibold transition-all flex items-center justify-between ${
              !selectedCategory 
                ? 'bg-primary text-white font-bold' 
                : 'bg-accent/30 text-charcoal hover:bg-accent'
            }`}
          >
            <span>All Categories ({initialProducts.length})</span>
            {!selectedCategory && <Check size={14} />}
          </button>
          {categories.map(([slug, name]) => {
            const count = initialProducts.filter(p => p.categorySlug === slug || p.category === name).length;
            return (
              <button 
                key={slug}
                onClick={() => setSelectedCategory(slug)}
                className={`w-full text-left px-3.5 py-2 rounded-xl text-xs font-medium transition-all flex items-center justify-between ${
                  selectedCategory === slug 
                    ? 'bg-primary text-white font-bold' 
                    : 'bg-accent/30 text-charcoal/80 hover:bg-accent'
                }`}
              >
                <span className="truncate pr-2">{name}</span>
                <span className="text-[10px] opacity-75">({count})</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 7. TRAVEL STANDARDS & MECHANISMS */}
      <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm space-y-4">
        <div>
          <h3 className="text-[10px] font-bold text-charcoal/50 uppercase tracking-widest mb-2">Aviation Standards</h3>
          <button 
            onClick={() => setSelectedAirline(selectedAirline === true ? null : true)}
            className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-2.5 border ${
              selectedAirline === true 
                ? 'bg-blue-50 border-blue-600 text-blue-700 font-bold' 
                : 'bg-accent/20 border-transparent text-charcoal/80 hover:bg-accent/40'
            }`}
          >
            <Plane size={15} />
            <span>CASA / IATA Flight Safe</span>
          </button>
        </div>

        <div>
          <h3 className="text-[10px] font-bold text-charcoal/50 uppercase tracking-widest mb-2">Folding Mechanism</h3>
          <div className="space-y-1.5">
            {[
              { id: 'remote-auto-folding', label: 'Remote Auto-Folding' },
              { id: 'modular-take-apart', label: 'Modular Take-Apart' },
            ].map(opt => (
              <button 
                key={opt.id}
                onClick={() => setSelectedFolding(selectedFolding === opt.id ? null : opt.id)}
                className={`w-full text-left px-3.5 py-2 rounded-xl text-xs font-medium transition-all flex items-center justify-between ${
                  selectedFolding === opt.id 
                    ? 'bg-primary/10 border border-primary text-primary font-bold' 
                    : 'bg-accent/20 text-charcoal/80 hover:bg-accent/40 border border-transparent'
                }`}
              >
                <span>{opt.label}</span>
                {selectedFolding === opt.id && <Check size={14} />}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start">
        {/* SIDEBAR CONTROL PANEL - DESKTOP */}
        <aside className="hidden lg:block w-80 shrink-0">
          <div className="sticky top-24 space-y-6">
            <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold text-charcoal flex items-center gap-2">
                  <SlidersHorizontal size={18} className="text-primary" />
                  Control Panel
                </h2>
                <p className="text-[11px] text-charcoal/50 font-medium">Filter & Sort Catalog</p>
              </div>
              {hasActiveFilters && (
                <button 
                  onClick={resetFilters}
                  className="text-[11px] font-bold text-primary uppercase tracking-wider hover:underline flex items-center gap-1 bg-primary/5 px-2.5 py-1.5 rounded-lg transition-colors"
                >
                  <RotateCcw size={12} /> Clear All
                </button>
              )}
            </div>

            {/* Scrollable Filters Content */}
            <div className="max-h-[calc(100vh-180px)] overflow-y-auto pr-1 space-y-6 no-scrollbar">
              {filtersContent}
            </div>
          </div>
        </aside>

        {/* MAIN CATALOG VIEW */}
        <div className="flex-1 min-w-0 w-full">
          {/* Search & Mobile Filter Bar */}
          <div className="bg-white rounded-3xl p-4 md:p-6 shadow-sm border border-gray-100 mb-8 space-y-4">
            <div className="flex flex-col md:flex-row gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-charcoal/30" size={20} />
                <input 
                  type="text"
                  placeholder="Search by model, brand, category, or SKU..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-accent/40 rounded-2xl py-4 pl-14 pr-6 text-charcoal placeholder:text-charcoal/40 font-medium focus:ring-2 focus:ring-primary/20 transition-all outline-none border border-transparent focus:border-primary/20"
                />
              </div>

              {/* Quick Sort Dropdown in Top Bar */}
              <div className="relative shrink-0 flex items-center">
                <div className="relative w-full md:w-56">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as SortOption)}
                    className="w-full appearance-none bg-accent/50 text-charcoal font-bold text-xs py-4 pl-4 pr-10 rounded-2xl border border-transparent hover:border-gray-200 focus:border-primary outline-none cursor-pointer"
                  >
                    <option value="default">Sort: Default Featured</option>
                    <option value="price-asc">Sort: Price (Low to High)</option>
                    <option value="price-desc">Sort: Price (High to Low)</option>
                    <option value="weight-asc">Sort: Weight (Lightest First)</option>
                    <option value="weight-desc">Sort: Weight (Heaviest First)</option>
                    <option value="range-desc">Sort: Range (Longest First)</option>
                    <option value="range-asc">Sort: Range (Shortest First)</option>
                  </select>
                  <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-charcoal/40 pointer-events-none" />
                </div>
              </div>

              {/* Mobile Filter Trigger Button */}
              <button 
                onClick={() => setIsMobileFiltersOpen(true)}
                className="lg:hidden flex items-center justify-center gap-2.5 bg-primary text-white px-6 py-4 rounded-2xl font-bold text-sm shadow-md transition-all hover:bg-primary/90"
              >
                <SlidersHorizontal size={18} />
                <span>Filters & Sort</span>
                {hasActiveFilters && (
                  <span className="bg-white text-primary text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold">
                    !
                  </span>
                )}
              </button>
            </div>

            {/* Active Filter Chips */}
            {hasActiveFilters && (
              <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-gray-100">
                <span className="text-[10px] font-bold text-charcoal/40 uppercase tracking-wider mr-1">Active:</span>

                {sortBy !== 'default' && (
                  <span className="inline-flex items-center gap-1.5 bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full">
                    Sort: {sortBy.replace('-', ': ')}
                    <button onClick={() => setSortBy('default')} aria-label="Clear sort">
                      <X size={13} />
                    </button>
                  </span>
                )}

                {selectedCategory && (
                  <span className="inline-flex items-center gap-1.5 bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full">
                    Category: {categories.find(([s]) => s === selectedCategory)?.[1] || selectedCategory}
                    <button onClick={() => setSelectedCategory(null)} aria-label="Clear category">
                      <X size={13} />
                    </button>
                  </span>
                )}

                {priceRange && (
                  <span className="inline-flex items-center gap-1.5 bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full">
                    Price: {priceRange}
                    <button onClick={() => { setPriceRange(null); setMinPrice(''); setMaxPrice(''); }} aria-label="Clear price">
                      <X size={13} />
                    </button>
                  </span>
                )}

                {weightRange && (
                  <span className="inline-flex items-center gap-1.5 bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full">
                    Weight: {weightRange}
                    <button onClick={() => setWeightRange(null)} aria-label="Clear weight">
                      <X size={13} />
                    </button>
                  </span>
                )}

                {drivingRange && (
                  <span className="inline-flex items-center gap-1.5 bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full">
                    Range: {drivingRange}
                    <button onClick={() => setDrivingRange(null)} aria-label="Clear range">
                      <X size={13} />
                    </button>
                  </span>
                )}

                {selectedCapacity && (
                  <span className="inline-flex items-center gap-1.5 bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full">
                    SWL: {selectedCapacity}
                    <button onClick={() => setSelectedCapacity(null)} aria-label="Clear capacity">
                      <X size={13} />
                    </button>
                  </span>
                )}

                {selectedAirline && (
                  <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-xs font-bold px-3 py-1 rounded-full">
                    Flight Safe
                    <button onClick={() => setSelectedAirline(null)} aria-label="Clear flight safe">
                      <X size={13} />
                    </button>
                  </span>
                )}

                <button 
                  onClick={resetFilters}
                  className="text-[11px] font-bold text-red-600 hover:underline ml-2"
                >
                  Reset All
                </button>
              </div>
            )}
          </div>

          {/* Results Summary Bar */}
          <div className="flex items-center justify-between mb-8 px-2">
            <p className="text-sm text-charcoal/60 font-medium">
              Showing <span className="text-charcoal font-bold text-base">{filteredAndSortedProducts.length}</span> of {initialProducts.length} mobility solutions
            </p>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/5 border border-primary/10 px-3 py-1 rounded-full">
                ARR 204 & GST-Free
              </span>
            </div>
          </div>

          {/* Product Grid */}
          {filteredAndSortedProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
              <AnimatePresence mode="popLayout">
                {filteredAndSortedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </AnimatePresence>
            </div>
          ) : (
            <div className="bg-white rounded-[2.5rem] py-24 px-6 text-center border-2 border-dashed border-gray-200">
              <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center text-primary/40 mx-auto mb-6 shadow-sm">
                <Search size={36} />
              </div>
              <h2 className="text-2xl font-bold text-charcoal mb-3">No matching mobility models found</h2>
              <p className="text-charcoal/60 mb-8 max-w-md mx-auto leading-relaxed text-sm">
                No products match the selected price, weight, or driving range combination. Try widening your filters.
              </p>
              <button 
                onClick={resetFilters}
                className="bg-primary text-white px-8 py-4 rounded-xl font-bold text-sm hover:scale-[1.02] transition-transform shadow-lg shadow-primary/20"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      </div>

      {/* MOBILE FILTER & SORT DRAWER */}
      <AnimatePresence>
        {isMobileFiltersOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileFiltersOpen(false)}
              className="fixed inset-0 bg-charcoal/80 backdrop-blur-sm z-[100] lg:hidden"
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 w-full max-w-[340px] bg-[#FAF8F5] z-[110] lg:hidden flex flex-col shadow-2xl"
            >
              <div className="p-5 border-b border-gray-200 bg-white flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-bold text-charcoal">Filter & Sort</h2>
                  <p className="text-[11px] text-charcoal/50">Control panel</p>
                </div>
                <button 
                  onClick={() => setIsMobileFiltersOpen(false)} 
                  className="p-2 bg-accent rounded-full hover:bg-accent/80 transition-colors"
                  aria-label="Close filters"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-5 space-y-6">
                {filtersContent}
              </div>

              <div className="p-4 border-t border-gray-200 bg-white flex gap-3">
                <button 
                  onClick={resetFilters}
                  className="flex-1 bg-accent text-charcoal py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-accent/80 transition-all"
                >
                  Reset All
                </button>
                <button 
                  onClick={() => setIsMobileFiltersOpen(false)}
                  className="flex-[2] medical-gradient text-white py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider shadow-lg hover:scale-[1.02] transition-all"
                >
                  Show ({filteredAndSortedProducts.length})
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
