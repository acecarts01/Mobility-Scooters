'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import { 
  ShoppingCart, 
  Phone, 
  Menu, 
  X, 
  ChevronRight, 
  ChevronDown, 
  CheckCircle2, 
  ShieldCheck, 
  CreditCard,
  Zap,
  Layers,
  Wrench,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { SITE, CONTACT, SHOP } from '@/src/config/site';
import BatteryDashboard from './BatteryDashboard';
import { useCart } from '@/src/context/CartContext';

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isShopOpen, setIsShopOpen] = useState(false);
  const [isMobileShopOpen, setIsMobileShopOpen] = useState(false);
  const shopTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const { itemCount: cartCount } = useCart();
  const [currentAnnouncement, setCurrentAnnouncement] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchSuggestions, setShowSearchSuggestions] = useState(false);

  const handleMouseEnterShop = () => {
    if (shopTimeoutRef.current) clearTimeout(shopTimeoutRef.current);
    setIsShopOpen(true);
  };

  const handleMouseLeaveShop = () => {
    shopTimeoutRef.current = setTimeout(() => {
      setIsShopOpen(false);
    }, 150);
  };

  const announcements = [
    { text: `ABN Verified: ${CONTACT.abn} • ${CONTACT.entity}`, icon: <CheckCircle2 size={14} /> },
    { text: `Save ${SHOP.cryptoDiscount}% with Crypto Payments (BTC/USDT)`, icon: <CreditCard size={14} /> },
    { text: "100% Pedestrian Legal & GST-Free • National Support", icon: <ShieldCheck size={14} /> }
  ];

  const searchSuggestions = [
    'folding mobility scooter',
    'all-terrain mobility scooter',
    'heavy-duty mobility scooter',
    'buy mobility scooter online',
    'portable mobility scooter'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentAnnouncement((prev) => (prev + 1) % announcements.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [announcements.length]);

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-primary text-white py-2 px-4 overflow-hidden relative h-9 z-50">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentAnnouncement}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-2 text-xs md:text-sm font-medium h-full"
          >
            {announcements[currentAnnouncement].icon}
            <span>{announcements[currentAnnouncement].text}</span>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <header className="sticky top-0 z-40 bg-white border-b border-gray-100 shadow-sm">
        <nav className="container mx-auto px-4 h-16 flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="w-10 h-10 medical-gradient rounded-lg flex items-center justify-center text-white font-bold">
              LS
            </div>
            <div className="hidden md:block">
              <span className="text-primary font-bold text-lg block leading-none">LIFESTYLE</span>
              <span className="text-[10px] tracking-widest text-charcoal/60 uppercase">Mobility Australia</span>
            </div>
          </Link>

          {/* Quick Search Suggestions */}
          <div className="hidden md:block flex-1 max-w-md relative">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search scooters..."
                className="w-full bg-accent border-none rounded-xl py-2 pl-4 pr-10 text-sm focus:ring-2 focus:ring-primary/20 transition-all"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setShowSearchSuggestions(e.target.value.length > 0);
                }}
                onFocus={() => searchQuery.length > 0 && setShowSearchSuggestions(true)}
                onBlur={() => setTimeout(() => setShowSearchSuggestions(false), 200)}
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 text-charcoal/30">
                <Menu size={16} />
              </div>
            </div>

            <AnimatePresence>
              {showSearchSuggestions && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-100 shadow-2xl rounded-2xl p-4 overflow-hidden"
                >
                  <p className="text-[10px] font-bold text-charcoal/40 uppercase tracking-widest mb-3">Popular Searches</p>
                  <div className="flex flex-col gap-1">
                    {searchSuggestions.map((suggestion) => (
                      <Link 
                        key={suggestion}
                        href={`/shop/?q=${suggestion.replace(/\s+/g, '+')}`}
                        className="text-sm py-2 px-3 hover:bg-accent rounded-lg transition-colors flex items-center justify-between group"
                      >
                        <span className={suggestion.toLowerCase().includes(searchQuery.toLowerCase()) ? 'font-bold text-primary' : 'text-charcoal/80'}>
                          {suggestion}
                        </span>
                        <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Desktop Navigation Links: Home, Shop, Blog, About, Contact */}
          <div className="hidden lg:flex items-center gap-6 shrink-0">
            <Link href="/" className="font-bold text-sm text-charcoal hover:text-primary transition-colors">
              Home
            </Link>

            {/* 2-Column Shop Dropdown Trigger */}
            <div 
              className="relative py-4"
              onMouseEnter={handleMouseEnterShop}
              onMouseLeave={handleMouseLeaveShop}
            >
              <Link 
                href="/shop/" 
                className="font-bold text-sm text-charcoal hover:text-primary transition-colors flex items-center gap-1 group py-1"
                onClick={() => setIsShopOpen(false)}
              >
                <span>Shop Scooters</span>
                <ChevronDown 
                  size={15} 
                  className={`transition-transform duration-200 ${isShopOpen ? 'rotate-180 text-primary' : 'text-charcoal/40 group-hover:text-primary'}`} 
                />
              </Link>

              {/* 2-Column Mega-Dropdown Menu */}
              <AnimatePresence>
                {isShopOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: 0.18, ease: 'easeOut' }}
                    className="absolute top-full left-1/2 -translate-x-1/2 w-[620px] bg-white rounded-3xl p-6 shadow-2xl border border-gray-100 z-50 overflow-hidden"
                  >
                    {/* Header */}
                    <div className="flex items-center justify-between pb-3 mb-4 border-b border-gray-100">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-primary flex items-center gap-1.5">
                        <Sparkles size={13} />
                        Clinical Mobility Departments
                      </span>
                      <Link 
                        href="/shop/" 
                        onClick={() => setIsShopOpen(false)}
                        className="text-xs font-bold text-primary hover:underline flex items-center gap-1"
                      >
                        All 141 Models <ChevronRight size={13} />
                      </Link>
                    </div>

                    {/* 2-Column Grid */}
                    <div className="grid grid-cols-2 gap-3">
                      {/* Column 1: Core Scooters */}
                      <div className="space-y-2">
                        <Link
                          href="/shop/portable-folding/"
                          onClick={() => setIsShopOpen(false)}
                          className="group flex items-start gap-3.5 p-3 rounded-2xl hover:bg-accent/40 transition-colors border border-transparent hover:border-gray-100"
                        >
                          <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:bg-primary group-hover:text-white transition-all">
                            <Zap size={18} />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-xs font-bold text-charcoal group-hover:text-primary transition-colors">
                                Folding & Travel
                              </span>
                              <span className="text-[9px] font-bold bg-blue-50 text-blue-700 px-1.5 py-0.5 rounded">
                                CASA Safe
                              </span>
                            </div>
                            <p className="text-[11px] text-charcoal/50 leading-snug mt-0.5">
                              Remote-fold & compact boot models from 22kg
                            </p>
                          </div>
                        </Link>

                        <Link
                          href="/shop/mid-size-everyday/"
                          onClick={() => setIsShopOpen(false)}
                          className="group flex items-start gap-3.5 p-3 rounded-2xl hover:bg-accent/40 transition-colors border border-transparent hover:border-gray-100"
                        >
                          <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:bg-primary group-hover:text-white transition-all">
                            <CheckCircle2 size={18} />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-xs font-bold text-charcoal group-hover:text-primary transition-colors">
                                Pavement & Everyday
                              </span>
                              <span className="text-[9px] font-bold bg-emerald-50 text-emerald-700 px-1.5 py-0.5 rounded">
                                39 Models
                              </span>
                            </div>
                            <p className="text-[11px] text-charcoal/50 leading-snug mt-0.5">
                              Shopping centres & daily community transit
                            </p>
                          </div>
                        </Link>

                        <Link
                          href="/shop/heavy-duty-all-terrain/"
                          onClick={() => setIsShopOpen(false)}
                          className="group flex items-start gap-3.5 p-3 rounded-2xl hover:bg-accent/40 transition-colors border border-transparent hover:border-gray-100"
                        >
                          <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:bg-primary group-hover:text-white transition-all">
                            <ShieldCheck size={18} />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-xs font-bold text-charcoal group-hover:text-primary transition-colors">
                                Heavy-Duty & All-Terrain
                              </span>
                              <span className="text-[9px] font-bold bg-amber-50 text-amber-800 px-1.5 py-0.5 rounded">
                                200kg SWL
                              </span>
                            </div>
                            <p className="text-[11px] text-charcoal/50 leading-snug mt-0.5">
                              Bariatric cruisers, off-road & cabin models
                            </p>
                          </div>
                        </Link>
                      </div>

                      {/* Column 2: Equipment & Master Catalog */}
                      <div className="space-y-2">
                        <Link
                          href="/shop/ramps-hoists/"
                          onClick={() => setIsShopOpen(false)}
                          className="group flex items-start gap-3.5 p-3 rounded-2xl hover:bg-accent/40 transition-colors border border-transparent hover:border-gray-100"
                        >
                          <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:bg-primary group-hover:text-white transition-all">
                            <Layers size={18} />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-xs font-bold text-charcoal group-hover:text-primary transition-colors">
                                Ramps & Car Hoists
                              </span>
                              <span className="text-[9px] font-bold bg-gray-100 text-charcoal/70 px-1.5 py-0.5 rounded">
                                25 Models
                              </span>
                            </div>
                            <p className="text-[11px] text-charcoal/50 leading-snug mt-0.5">
                              Telescopic suitcase ramps & 12V boot lifters
                            </p>
                          </div>
                        </Link>

                        <Link
                          href="/shop/batteries-accessories/"
                          onClick={() => setIsShopOpen(false)}
                          className="group flex items-start gap-3.5 p-3 rounded-2xl hover:bg-accent/40 transition-colors border border-transparent hover:border-gray-100"
                        >
                          <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:bg-primary group-hover:text-white transition-all">
                            <Wrench size={18} />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-xs font-bold text-charcoal group-hover:text-primary transition-colors">
                                Parts & Accessories
                              </span>
                              <span className="text-[9px] font-bold bg-gray-100 text-charcoal/70 px-1.5 py-0.5 rounded">
                                30 Items
                              </span>
                            </div>
                            <p className="text-[11px] text-charcoal/50 leading-snug mt-0.5">
                              Lithium battery packs, chargers & tyres
                            </p>
                          </div>
                        </Link>

                        <Link
                          href="/shop/"
                          onClick={() => setIsShopOpen(false)}
                          className="group flex items-start gap-3.5 p-3 rounded-2xl bg-primary/5 hover:bg-primary/10 transition-colors border border-primary/20"
                        >
                          <div className="w-10 h-10 rounded-xl medical-gradient text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-all">
                            <ArrowRight size={18} />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-xs font-bold text-primary">
                                Full Master Catalog
                              </span>
                              <span className="text-[9px] font-bold bg-primary text-white px-1.5 py-0.5 rounded">
                                141 Items
                              </span>
                            </div>
                            <p className="text-[11px] text-charcoal/60 leading-snug mt-0.5">
                              Compare all certified scooters & accessories
                            </p>
                          </div>
                        </Link>
                      </div>
                    </div>

                    {/* Bottom Trust & Compliance Bar */}
                    <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-[10px] text-charcoal/50">
                      <span className="font-semibold flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
                        100% ARR 204 Pedestrian Legal
                      </span>
                      <span className="font-semibold">GST-Free Medical Devices</span>
                      <Link 
                        href="/compare/" 
                        onClick={() => setIsShopOpen(false)}
                        className="text-primary font-bold hover:underline"
                      >
                        Compare Side-by-Side →
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/blog/" className="font-bold text-sm text-charcoal hover:text-primary transition-colors">Blog</Link>
            <Link href="/about/" className="font-bold text-sm text-charcoal hover:text-primary transition-colors">About</Link>
            <Link href="/contact/" className="font-bold text-sm text-charcoal hover:text-primary transition-colors">Contact</Link>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Link href={`tel:${CONTACT.phone}`} className="hidden sm:flex items-center gap-2 text-primary font-bold text-sm">
              <Phone size={16} />
              <span>{CONTACT.phone}</span>
            </Link>
            <Link href="/cart/" className="relative p-2 text-charcoal hover:text-primary transition-colors" aria-label="View Cart">
              <ShoppingCart size={22} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 medical-gradient text-white text-[9px] w-4.5 h-4.5 rounded-full flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </Link>
            <button 
              className="lg:hidden p-2" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="lg:hidden bg-white fixed inset-0 top-0 z-[60] p-6 flex flex-col gap-5 overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-4">
              <Link href="/" className="flex items-center gap-2 shrink-0">
                <div className="w-10 h-10 medical-gradient rounded-lg flex items-center justify-center text-white font-bold">LS</div>
                <span className="text-primary font-bold text-lg">LIFESTYLE</span>
              </Link>
              <button onClick={() => setIsMenuOpen(false)} className="p-2 bg-accent rounded-full" aria-label="Close menu">
                <X size={24} />
              </button>
            </div>
            
            <Link 
              href="/" 
              onClick={() => setIsMenuOpen(false)} 
              className="text-xl font-bold border-b pb-4 text-charcoal hover:text-primary transition-colors"
            >
              Home
            </Link>

            {/* Mobile Shop Accordion with 2-Column Grid */}
            <div className="border-b pb-4">
              <button
                onClick={() => setIsMobileShopOpen(!isMobileShopOpen)}
                className="flex items-center justify-between w-full text-xl font-bold text-charcoal py-2 text-left"
              >
                <span>Shop</span>
                <ChevronDown 
                  size={20} 
                  className={`transition-transform duration-200 ${isMobileShopOpen ? 'rotate-180 text-primary' : 'text-charcoal/50'}`} 
                />
              </button>
              
              <AnimatePresence>
                {isMobileShopOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="grid grid-cols-2 gap-2 pt-3 pb-1"
                  >
                    <Link 
                      href="/shop/portable-folding/" 
                      onClick={() => setIsMenuOpen(false)} 
                      className="p-3 bg-accent/40 rounded-xl text-xs font-bold text-charcoal hover:bg-primary/10"
                    >
                      Folding & Travel
                    </Link>
                    <Link 
                      href="/shop/mid-size-everyday/" 
                      onClick={() => setIsMenuOpen(false)} 
                      className="p-3 bg-accent/40 rounded-xl text-xs font-bold text-charcoal hover:bg-primary/10"
                    >
                      Pavement Models
                    </Link>
                    <Link 
                      href="/shop/heavy-duty-all-terrain/" 
                      onClick={() => setIsMenuOpen(false)} 
                      className="p-3 bg-accent/40 rounded-xl text-xs font-bold text-charcoal hover:bg-primary/10"
                    >
                      Heavy-Duty & Off-Road
                    </Link>
                    <Link 
                      href="/shop/ramps-hoists/" 
                      onClick={() => setIsMenuOpen(false)} 
                      className="p-3 bg-accent/40 rounded-xl text-xs font-bold text-charcoal hover:bg-primary/10"
                    >
                      Ramps & Hoists
                    </Link>
                    <Link 
                      href="/shop/batteries-accessories/" 
                      onClick={() => setIsMenuOpen(false)} 
                      className="p-3 bg-accent/40 rounded-xl text-xs font-bold text-charcoal hover:bg-primary/10"
                    >
                      Parts & Accessories
                    </Link>
                    <Link 
                      href="/shop/" 
                      onClick={() => setIsMenuOpen(false)} 
                      className="p-3 bg-primary text-white rounded-xl text-xs font-bold text-center flex items-center justify-center"
                    >
                      All 141 Models
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/blog/" onClick={() => setIsMenuOpen(false)} className="text-xl font-bold border-b pb-4 text-charcoal hover:text-primary transition-colors">Blog</Link>
            <Link href="/about/" onClick={() => setIsMenuOpen(false)} className="text-xl font-bold border-b pb-4 text-charcoal hover:text-primary transition-colors">About</Link>
            <Link href="/contact/" onClick={() => setIsMenuOpen(false)} className="text-xl font-bold border-b pb-4 text-charcoal hover:text-primary transition-colors">Contact</Link>
            
            <div className="pt-2 border-b pb-4">
              <BatteryDashboard trigger={
                <button className="flex items-center gap-3 text-xl font-bold text-primary w-full text-left">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                    <CheckCircle2 size={18} />
                  </div>
                  Battery Health Guide
                </button>
              } />
            </div>
            
            <div className="mt-auto">
              <Link 
                href={`tel:${CONTACT.phone}`} 
                className="w-full medical-gradient text-white py-4 rounded-xl flex items-center justify-center gap-3 font-bold text-lg shadow-lg"
              >
                <Phone size={24} />
                {CONTACT.phone}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
