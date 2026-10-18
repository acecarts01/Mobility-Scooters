"use client";

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  X, 
  ChevronDown, 
  ShieldCheck, 
  Truck, 
  BatteryCharging, 
  Wrench, 
  HelpCircle,
  Sparkles,
  Layers
} from 'lucide-react';
import { SITE } from '@/src/config/site';

export interface FAQItem {
  category?: string;
  question: string;
  answer: string;
}

interface FAQClientProps {
  faqItems: FAQItem[];
}

const CATEGORY_CONFIG: Record<string, { label: string; icon: React.ReactNode; desc: string }> = {
  'Regulation': {
    label: 'Regulation & Road Rules',
    icon: <ShieldCheck size={20} className="text-primary" />,
    desc: 'Australian Road Rule 204, licence exemptions, GST-free status & NDIS support'
  },
  'Shipping': {
    label: 'Shipping & Delivery',
    icon: <Truck size={20} className="text-primary" />,
    desc: 'Nationwide freight, metro dispatch, pallet unboxing & airline transit'
  },
  'Battery Care': {
    label: 'Battery Care & Charging',
    icon: <BatteryCharging size={20} className="text-primary" />,
    desc: 'Lithium vs. AGM technology, smart charging cycles & winter storage'
  },
  'Technical Support': {
    label: 'Technical Support & Specs',
    icon: <Wrench size={20} className="text-primary" />,
    desc: 'Safe Working Loads, incline ratings, tyre options & Australian warranty'
  }
};

export default function FAQClient({ faqItems }: FAQClientProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  
  // Track open state for categories
  const [openCategories, setOpenCategories] = useState<Record<string, boolean>>({
    'Regulation': true,
    'Shipping': true,
    'Battery Care': true,
    'Technical Support': true
  });

  // Track open state for individual questions (default first item in each category open)
  const [openQuestions, setOpenQuestions] = useState<Record<string, boolean>>({
    '0-0': true,
    '1-0': true,
    '2-0': true,
    '3-0': true
  });

  // Unique categories list
  const categoryKeys = ['Regulation', 'Shipping', 'Battery Care', 'Technical Support'];

  // Filter items based on search and selected category tab
  const filteredItems = useMemo(() => {
    return faqItems.filter(item => {
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = !q || 
        item.question.toLowerCase().includes(q) || 
        item.answer.toLowerCase().includes(q) ||
        (item.category && item.category.toLowerCase().includes(q));

      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [faqItems, searchQuery, selectedCategory]);

  // Group filtered items by category
  const groupedFAQs = useMemo(() => {
    const groups: Record<string, FAQItem[]> = {
      'Regulation': [],
      'Shipping': [],
      'Battery Care': [],
      'Technical Support': []
    };

    filteredItems.forEach(item => {
      const cat = item.category || 'Regulation';
      if (!groups[cat]) groups[cat] = [];
      groups[cat].push(item);
    });

    return groups;
  }, [filteredItems]);

  const toggleCategory = (cat: string) => {
    setOpenCategories(prev => ({
      ...prev,
      [cat]: !prev[cat]
    }));
  };

  const toggleQuestion = (id: string) => {
    setOpenQuestions(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const expandAll = () => {
    const allCats: Record<string, boolean> = {};
    const allQs: Record<string, boolean> = {};
    categoryKeys.forEach((cat, cIdx) => {
      allCats[cat] = true;
      groupedFAQs[cat]?.forEach((_, qIdx) => {
        allQs[`${cIdx}-${qIdx}`] = true;
      });
    });
    setOpenCategories(allCats);
    setOpenQuestions(allQs);
  };

  const collapseAll = () => {
    const noCats: Record<string, boolean> = {};
    categoryKeys.forEach(cat => {
      noCats[cat] = false;
    });
    setOpenCategories(noCats);
    setOpenQuestions({});
  };

  return (
    <div className="container mx-auto px-4 max-w-4xl py-12">
      {/* 1. Real-Time Search Input Field */}
      <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100 mb-8">
        <div className="relative">
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-charcoal/30" size={22} />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search questions by keyword (e.g. licence, battery, NDIS, incline, freight)..."
            className="w-full bg-accent/40 rounded-2xl py-4 pl-14 pr-12 text-charcoal placeholder:text-charcoal/40 text-sm md:text-base font-medium focus:ring-2 focus:ring-primary/20 transition-all outline-none border border-transparent focus:border-primary/20"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-charcoal/10 hover:bg-charcoal/20 text-charcoal/70 transition-colors"
              aria-label="Clear search"
            >
              <X size={16} />
            </button>
          )}
        </div>

        {/* Live Search Result Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 mt-4 pt-4 border-t border-gray-100 text-xs">
          <span className="font-semibold text-charcoal/60">
            {searchQuery ? (
              <>Showing <strong className="text-primary">{filteredItems.length}</strong> results for &ldquo;{searchQuery}&rdquo;</>
            ) : (
              <>Browse <strong className="text-charcoal">{faqItems.length}</strong> clinical answers across 4 categories</>
            )}
          </span>

          <div className="flex items-center gap-3">
            <button
              onClick={expandAll}
              className="text-primary font-bold hover:underline"
            >
              Expand All
            </button>
            <span className="text-charcoal/20">|</span>
            <button
              onClick={collapseAll}
              className="text-charcoal/50 hover:text-charcoal font-medium"
            >
              Collapse All
            </button>
          </div>
        </div>
      </div>

      {/* 2. Category Filter Pills */}
      <div className="flex flex-wrap gap-2 mb-10 overflow-x-auto pb-2 no-scrollbar">
        <button
          onClick={() => setSelectedCategory('all')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
            selectedCategory === 'all'
              ? 'bg-primary text-white shadow-sm'
              : 'bg-white border border-gray-100 text-charcoal/70 hover:bg-accent/40'
          }`}
        >
          <Layers size={14} />
          <span>All Categories</span>
          <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${selectedCategory === 'all' ? 'bg-white/20 text-white' : 'bg-gray-100 text-charcoal/60'}`}>
            {faqItems.length}
          </span>
        </button>

        {categoryKeys.map((catKey) => {
          const config = CATEGORY_CONFIG[catKey];
          const count = faqItems.filter(i => i.category === catKey).length;
          const isSelected = selectedCategory === catKey;

          return (
            <button
              key={catKey}
              onClick={() => setSelectedCategory(catKey)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                isSelected
                  ? 'bg-primary text-white shadow-sm'
                  : 'bg-white border border-gray-100 text-charcoal/70 hover:bg-accent/40'
              }`}
            >
              <span>{catKey}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${isSelected ? 'bg-white/20 text-white' : 'bg-gray-100 text-charcoal/60'}`}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* 3. Grouped Collapsible Categories */}
      {filteredItems.length > 0 ? (
        <div className="space-y-8">
          {categoryKeys.map((catKey, cIdx) => {
            const items = groupedFAQs[catKey] || [];
            if (items.length === 0) return null;

            const isCategoryOpen = openCategories[catKey] ?? true;
            const config = CATEGORY_CONFIG[catKey] || {
              label: catKey,
              icon: <HelpCircle size={20} className="text-primary" />,
              desc: ''
            };

            return (
              <div 
                key={catKey}
                className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm transition-shadow hover:shadow-md"
              >
                {/* Category Header Accordion Button */}
                <button
                  onClick={() => toggleCategory(catKey)}
                  className="w-full text-left p-6 md:p-8 flex items-center justify-between gap-4 bg-accent/20 hover:bg-accent/30 transition-colors border-b border-gray-100"
                  aria-expanded={isCategoryOpen}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shrink-0 shadow-sm">
                      {config.icon}
                    </div>
                    <div>
                      <div className="flex items-center gap-2.5">
                        <h2 className="text-lg md:text-xl font-bold text-charcoal">
                          {config.label}
                        </h2>
                        <span className="bg-primary/10 text-primary text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                          {items.length} {items.length === 1 ? 'Answer' : 'Answers'}
                        </span>
                      </div>
                      <p className="text-xs text-charcoal/50 mt-1 font-medium hidden sm:block">
                        {config.desc}
                      </p>
                    </div>
                  </div>

                  <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-sm text-charcoal/60">
                    <ChevronDown 
                      size={18} 
                      className={`transition-transform duration-200 ${isCategoryOpen ? 'rotate-180 text-primary' : ''}`}
                    />
                  </div>
                </button>

                {/* Questions Inside This Category */}
                <AnimatePresence initial={false}>
                  {isCategoryOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="divide-y divide-gray-100"
                    >
                      {items.map((item, qIdx) => {
                        const questionId = `${cIdx}-${qIdx}`;
                        const isQuestionOpen = openQuestions[questionId] ?? (qIdx === 0 && !searchQuery);

                        return (
                          <div key={qIdx} className="p-6 md:p-8 transition-colors hover:bg-accent/10">
                            <button
                              onClick={() => toggleQuestion(questionId)}
                              className="w-full text-left flex items-start justify-between gap-4 group"
                              aria-expanded={isQuestionOpen}
                            >
                              <div className="flex items-start gap-4">
                                <span className="w-7 h-7 medical-gradient rounded-lg flex items-center justify-center text-white text-[11px] font-bold shrink-0 mt-0.5 shadow-sm">
                                  Q
                                </span>
                                <h3 className="text-base md:text-lg font-bold text-charcoal group-hover:text-primary transition-colors leading-snug">
                                  {item.question}
                                </h3>
                              </div>
                              <div className="w-7 h-7 rounded-lg bg-accent/40 flex items-center justify-center shrink-0 text-charcoal/50 group-hover:bg-primary/10 group-hover:text-primary transition-colors mt-0.5">
                                <ChevronDown 
                                  size={16} 
                                  className={`transition-transform duration-200 ${isQuestionOpen ? 'rotate-180 text-primary' : ''}`} 
                                />
                              </div>
                            </button>

                            <AnimatePresence initial={false}>
                              {isQuestionOpen && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: 'auto', opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.2 }}
                                  className="overflow-hidden"
                                >
                                  <div className="pl-11 pt-4 text-charcoal/70 leading-relaxed text-sm md:text-base border-t border-gray-100/60 mt-4">
                                    {item.answer}
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      ) : (
        /* Empty State */
        <div className="bg-white rounded-3xl p-12 text-center border-2 border-dashed border-gray-200 my-8">
          <div className="w-16 h-16 rounded-full bg-accent text-charcoal/30 flex items-center justify-center mx-auto mb-4">
            <Search size={32} />
          </div>
          <h3 className="text-xl font-bold text-charcoal mb-2">No matching questions found</h3>
          <p className="text-charcoal/60 text-sm max-w-md mx-auto mb-6">
            We couldn&apos;t find any answers matching &ldquo;{searchQuery}&rdquo;. Try using broader terms like &ldquo;licence&rdquo;, &ldquo;battery&rdquo;, or &ldquo;freight&rdquo;.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
            }}
            className="bg-primary text-white px-6 py-3 rounded-xl font-bold text-sm shadow-md hover:bg-primary/90 transition-all"
          >
            Reset Search Filters
          </button>
        </div>
      )}

      {/* Regulatory Advisory Footnote */}
      <div className="mt-12 bg-primary/5 rounded-3xl p-6 md:p-8 border border-primary/10 flex items-start gap-4">
        <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
          <ShieldCheck size={22} />
        </div>
        <div>
          <h4 className="font-bold text-primary mb-1 uppercase tracking-wider text-xs">
            Australian Regulatory Advisory
          </h4>
          <p className="text-charcoal/70 text-xs md:text-sm leading-relaxed">
            {SITE.name} strictly adheres to Australian Road Rule 204. All our standard mobility scooters are speed-governed to 10 km/h, ensuring they are legally classified as pedestrian devices and do not require a driver&apos;s licence for operation in any Australian state or territory.
          </p>
        </div>
      </div>
    </div>
  );
}
