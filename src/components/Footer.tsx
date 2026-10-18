'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, CheckCircle2 } from 'lucide-react';
import { SITE, CONTACT, COMPLIANCE } from '@/src/config/site';
import BatteryDashboard from './BatteryDashboard';

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 medical-gradient rounded-lg flex items-center justify-center text-white font-bold">
                LS
              </div>
              <div>
                <span className="font-bold text-lg block leading-none uppercase">LIFESTYLE</span>
                <span className="text-[10px] tracking-widest text-white/50 uppercase">Mobility Australia</span>
              </div>
            </Link>
            <p className="text-white/60 text-sm mb-6 leading-relaxed">
              Australia’s trusted choice for premium mobility scooters since 1985. We specialise in independence through clinical excellence.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center hover:bg-primary transition-colors cursor-pointer border border-white/10 group">
                <div className="w-5 h-5 bg-white/20 rounded-sm group-hover:bg-white/40 transition-colors" />
              </div>
              <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center hover:bg-primary transition-colors cursor-pointer border border-white/10 group">
                <div className="w-5 h-5 bg-white/20 rounded-sm group-hover:bg-white/40 transition-colors" />
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6 text-primary-light">The Shop</h3>
            <ul className="space-y-4 text-white/60 text-sm font-medium">
              <li><Link href="/shop/portable-folding/" className="hover:text-white transition-colors">Portable & Folding</Link></li>
              <li><Link href="/shop/mid-size-everyday/" className="hover:text-white transition-colors">Mid-Size & Everyday</Link></li>
              <li><Link href="/shop/heavy-duty-all-terrain/" className="hover:text-white transition-colors">Heavy-Duty & All-Terrain</Link></li>
              <li><Link href="/shop/ramps-hoists/" className="hover:text-white transition-colors">Ramps & Hoists</Link></li>
              <li><Link href="/shop/accessories/" className="hover:text-white transition-colors">Accessories & Parts</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6 text-primary-light">Support</h3>
            <ul className="space-y-4 text-white/60 text-sm font-medium">
              <li><Link href="/about/" className="hover:text-white transition-colors">About Lifestyle Mobility</Link></li>
              <li><Link href="/faq/" className="hover:text-white transition-colors">Safety & Regulations FAQ</Link></li>
              <li><Link href="/reviews/" className="hover:text-white transition-colors">Customer Reviews</Link></li>
              <li><Link href="/tracking/" className="hover:text-white transition-colors">Track Your Order</Link></li>
              <li><Link href="/contact/" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link href="/reply-portal/" className="hover:text-white transition-colors">Staff Reply Portal</Link></li>
              <li><BatteryDashboard /></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6 text-primary-light">Headquarters</h3>
            <ul className="space-y-4 text-white/60 text-sm">
              <li className="flex gap-3">
                <Phone size={18} className="text-primary-light shrink-0" />
                <span className="font-bold">{CONTACT.phone}</span>
              </li>
              <li className="flex gap-3">
                <div className="w-4.5 h-4.5 bg-primary-light rounded-sm shrink-0 flex items-center justify-center text-[10px] text-charcoal font-bold">W</div>
                <span>{CONTACT.whatsapp} (SMS Concierge)</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 size={18} className="text-primary-light shrink-0" />
                <span>{CONTACT.address}</span>
              </li>
              <li className="mt-6 pt-6 border-t border-white/5">
                <p className="text-[10px] text-white/40 uppercase tracking-widest mb-2 font-bold">Legal Entity</p>
                <p className="text-xs font-bold text-white/80">{CONTACT.entity}</p>
                <p className="text-[10px] text-white/40">ABN: <a href="https://abr.business.gov.au/ABN/View?abn=84008071323" target="_blank" rel="noopener noreferrer" className="hover:text-primary-light underline decoration-white/20">{CONTACT.abn}</a></p>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-white/30 uppercase tracking-[0.2em] font-bold">
          <p>© {new Date().getFullYear()} {SITE.name}. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy/" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service/" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/refund-policy/" className="hover:text-white transition-colors">Refund Policy</Link>
          </div>
        </div>
        
        <div className="mt-8 p-6 bg-white/5 rounded-2xl text-[9px] text-white/40 leading-relaxed max-w-5xl mx-auto text-center italic border border-white/5">
          {COMPLIANCE.disclaimer}
        </div>
      </div>
    </footer>
  );
}
