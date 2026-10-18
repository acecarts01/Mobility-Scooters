'use client';

import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ShoppingCart, 
  Phone, 
  Menu, 
  X, 
  ChevronRight, 
  CheckCircle2, 
  ShieldCheck, 
  Truck, 
  CreditCard,
  HelpCircle as Help,
  ChevronRight as Right,
  CheckCircle2 as Check
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { SITE, CONTACT, SHOP, CATEGORIES, PRODUCTS, BRAND, FAQ, COMPLIANCE } from '@/src/config/site';
import JsonLd from '@/src/components/JsonLd';
import ReviewSlider from '@/src/components/ReviewSlider';
import Nav from '@/src/components/Nav';
import Footer from '@/src/components/Footer';
import { ProductImage } from '@/src/components/shop/ProductImage';

export default function HomeClient() {
  return (
    <>
      <JsonLd type="Organization" />
      <JsonLd type="FAQPage" />
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-white">
          {/* Subtle background pattern */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#007A78 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
          
          <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-12 py-16">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col justify-center"
            >
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-xs font-bold mb-6 w-fit">
                <ShieldCheck size={14} />
                <span>Australia’s Trusted Clinical Specialist</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-charcoal mb-6 leading-tight">
                Mobility Scooters <span className="text-primary underline decoration-accent decoration-8 underline-offset-4">for Sale</span> Australia.
              </h1>
              <p className="text-lg text-charcoal/70 mb-8 max-w-xl leading-relaxed">
                Looking for the best <span className="font-bold text-charcoal text-primary">electric mobility scooter Australia</span> has to offer? We provide clinical-grade, 100% pedestrian-legal solutions—from travel-ready <span className="font-bold text-charcoal text-primary">folding mobility scooter</span> models to robust <span className="font-bold text-charcoal text-primary">heavy-duty mobility scooter</span> and <span className="font-bold text-charcoal text-primary">all-terrain mobility scooter</span> explorers. 
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/shop/" 
                  className="medical-gradient text-white px-8 py-5 rounded-2xl font-bold text-lg text-center shadow-xl shadow-primary/20 hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
                >
                  Browse Range <ChevronRight size={20} />
                </Link>
                <Link 
                  href="/contact/" 
                  className="bg-white text-charcoal border-2 border-gray-100 px-8 py-5 rounded-2xl font-bold text-lg text-center hover:bg-accent transition-colors flex items-center justify-center gap-2"
                >
                  Quick Quote
                </Link>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square md:aspect-video lg:aspect-square relative rounded-3xl overflow-hidden shadow-2xl border-8 border-accent">
                <Image 
                  src="https://picsum.photos/seed/scooter/800/800" 
                  alt="Premium All-Terrain Mobility Scooter Australia" 
                  fill 
                  className="object-cover"
                  priority
                />
              </div>
              {/* Floating trust badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-2xl border border-gray-100 max-w-[200px] hidden sm:block">
                <div className="flex items-center gap-2 text-primary font-bold mb-1">
                  <CheckCircle2 size={16} />
                  <span>GST-FREE</span>
                </div>
                <p className="text-[10px] text-charcoal/60 leading-tight">Tax-exempt medical devices for eligible Australian buyers.</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Trust & Compliance Badge Bar */}
        <section className="bg-white py-8 border-b border-gray-100 shadow-sm relative z-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <p className="font-bold text-sm text-charcoal leading-none mb-1">100% Pedestrian Legal</p>
                  <p className="text-[10px] text-charcoal/40 uppercase tracking-widest font-bold">ARR Rule 204 Compliant</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <CreditCard size={20} />
                </div>
                <div>
                  <p className="font-bold text-sm text-charcoal leading-none mb-1">GST-Free Medical Aids</p>
                  <p className="text-[10px] text-charcoal/40 uppercase tracking-widest font-bold">Sec 38-45 Health Act</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <Truck size={20} />
                </div>
                <div>
                  <p className="font-bold text-sm text-charcoal leading-none mb-1">National Support</p>
                  <p className="text-[10px] text-charcoal/40 uppercase tracking-widest font-bold">Australia-Wide Delivery</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <p className="font-bold text-sm text-charcoal leading-none mb-1">Expert Technical Aid</p>
                  <p className="text-[10px] text-charcoal/40 uppercase tracking-widest font-bold">40 Years Heritage</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Categories */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Specialist <span className="text-primary">Electric Mobility Scooter Australia</span> Range</h2>
              <p className="text-charcoal/60 max-w-2xl mx-auto">From travel-ready folding models to bariatric all-terrain explorers.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {CATEGORIES.slice(0, 3).map((cat) => (
                <Link 
                  key={cat.slug} 
                  href={`/shop/${cat.slug}/`}
                  className="group relative h-80 overflow-hidden rounded-2xl shadow-lg"
                >
                  <Image 
                    src={`https://picsum.photos/seed/${cat.slug}/600/800`} 
                    alt={cat.name} 
                    fill 
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{cat.name}</h3>
                    <p className="text-white/80 text-sm mb-4">{cat.description}</p>
                    <span className="inline-flex items-center gap-2 text-primary-light font-bold">
                      View Range <ChevronRight size={18} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-20 bg-accent">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Buy <span className="text-primary">Heavy-Duty & All-Terrain Mobility Scooter</span> Online</h2>
                <p className="text-charcoal/60">The most trusted mobility solutions in Australia.</p>
              </div>
              <Link href="/shop/" className="font-bold text-primary flex items-center gap-2 hover:underline">
                View All Products <ChevronRight size={20} />
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {PRODUCTS.filter(p => p.featured).map((product) => (
                <div key={product.slug} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow flex flex-col">
                  <div className="product-frame mb-6 relative">
                    <ProductImage 
                      productId={product.id} 
                      fallbackTitle={product.name} 
                      className="object-contain"
                    />
                    {product.badge && (
                      <span className="absolute top-4 left-4 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider z-10">
                        {product.badge}
                      </span>
                    )}
                    <span className="absolute top-4 right-4 bg-charcoal text-white text-[8px] font-bold px-3 py-1 rounded-full uppercase tracking-wider z-10">
                      Finance Available
                    </span>
                  </div>
                  <h3 className="font-bold text-xl mb-2 line-clamp-1">{product.name}</h3>
                  <p className="text-sm text-charcoal/60 mb-6 line-clamp-2">{product.shortDescription}</p>
                  <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-primary">${product.price.toLocaleString()} AUD</span>
                      <span className="text-[10px] block text-charcoal/40 tracking-widest uppercase">— 0% GST / GST-Free</span>
                    </div>
                    <Link 
                      href={`/shop/${product.category}/${product.slug}/`}
                      className="bg-accent text-primary p-3 rounded-xl hover:medical-gradient hover:text-white transition-all"
                    >
                      <ChevronRight size={20} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Customer Reviews Slider */}
        <ReviewSlider />

        {/* Scooter Selector Quiz CTA */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="bg-charcoal rounded-[2rem] p-8 md:p-16 text-white relative overflow-hidden shadow-2xl">
              <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 bg-primary/20 text-primary-light px-4 py-2 rounded-full text-xs font-bold mb-6">
                    <Help size={14} />
                    <span>Clinical Selection Tool</span>
                  </div>
                  <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">Not sure which <span className="text-primary-light">scooter</span> fits your life?</h2>
                  <p className="text-xl text-gray-400 mb-10 leading-relaxed">Take our interactive 3-step quiz to find the perfect match based on your height, terrain requirements, and travel needs.</p>
                  <Link 
                    href="/quiz/" 
                    className="inline-flex items-center gap-3 bg-primary text-white px-10 py-5 rounded-2xl font-bold text-lg hover:scale-[1.05] transition-transform shadow-xl shadow-primary/20"
                  >
                    Start Selection Quiz <Right size={20} />
                  </Link>
                </div>
                <div className="relative hidden lg:block">
                   <div className="aspect-square relative bg-white/5 rounded-3xl border border-white/10 flex items-center justify-center">
                      <div className="text-center p-8">
                         <div className="w-20 h-20 medical-gradient rounded-full flex items-center justify-center text-white mx-auto mb-6 shadow-2xl">
                            <Help size={40} />
                         </div>
                         <div className="space-y-4">
                            <div className="h-4 w-48 bg-white/10 rounded-full mx-auto" />
                            <div className="h-4 w-64 bg-white/10 rounded-full mx-auto" />
                            <div className="h-4 w-32 bg-white/10 rounded-full mx-auto opacity-50" />
                         </div>
                      </div>
                      {/* Floating result card */}
                      <motion.div 
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-2xl border border-white/20 text-charcoal"
                      >
                         <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                               <Check size={20} />
                            </div>
                            <div>
                               <p className="text-[10px] font-bold text-charcoal/40 uppercase">Top Match</p>
                               <p className="text-xs font-bold">AeroFold™ Travel</p>
                            </div>
                         </div>
                      </motion.div>
                   </div>
                </div>
              </div>
              <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-primary opacity-10 rounded-full blur-3xl" />
            </div>
          </div>
        </section>

        {/* Standards & Compliance Section */}
        <section className="py-24 bg-accent/30">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 relative">
                 <div className="aspect-video relative rounded-3xl overflow-hidden shadow-xl">
                   <Image 
                    src="https://picsum.photos/seed/mobility-assurance/800/450" 
                    alt="Australian Mobility Scooter Standards & ARR 204 Pedestrian Safety" 
                    fill 
                    className="object-cover" 
                   />
                 </div>
                 <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-4">
                    <div className="w-12 h-12 medical-gradient rounded-full flex items-center justify-center text-white font-bold">ARR</div>
                    <div>
                      <p className="text-xs font-bold text-charcoal uppercase">Rule 204 Pedestrian Legal</p>
                      <p className="text-[10px] text-charcoal/60">Governed to 10 km/h for shared footpaths</p>
                    </div>
                 </div>
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl md:text-5xl font-bold mb-8 text-charcoal">Australian <span className="text-primary">Standards &</span> Legal Certification.</h2>
                <p className="text-lg text-charcoal/70 mb-8 leading-relaxed">
                  Every electric scooter delivered by Lifestyle Mobility Scooters is fully certified under AS/NZS 3695.2 and governed in strict adherence to Australian Road Rule 204.
                </p>
                <div className="space-y-6 mb-10">
                   {[
                     "100% GST-Free medical exemption under Sec 38-45 of the A New Tax System (GST) Act 1999",
                     "ARR 204 certified pedestrian status: Ride on footpaths, crossings & shopping centres",
                     "CASA / IATA certified UN38.3 lithium battery options for commercial domestic flights",
                     "Zero driver licence or vehicle registration required across all Australian states"
                   ].map((item, i) => (
                     <div key={i} className="flex gap-4 items-center">
                        <Check size={20} className="text-primary shrink-0" />
                        <span className="font-bold text-charcoal/80">{item}</span>
                     </div>
                   ))}
                </div>
                <Link href="/shop/" className="text-primary font-bold flex items-center gap-2 hover:underline text-lg">
                  Explore Certified Scooters <Right size={20} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Authority / About Section */}
        <section className="py-24 bg-white overflow-hidden">
          <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
              <div className="relative z-10">
                <h2 className="text-4xl font-bold mb-8 leading-tight">
                  Nearly <span className="text-primary">40 Years</span> of Adelaide Medical Heritage.
                </h2>
                <div className="space-y-8">
                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 medical-gradient rounded-xl flex items-center justify-center text-white font-bold text-xl">
                      85
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Established 1985</h3>
                      <p className="text-charcoal/60">Butler Trading Pty. Ltd. has been serving the Adelaide community since 1985, bringing decades of technical mobility expertise to every customer.</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-xl flex items-center justify-center text-primary">
                      <Truck size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Australia-Wide Footprint</h3>
                      <p className="text-charcoal/60">While we call South Australia home, our logistics network provides rapid delivery and local service partners across all major cities.</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-xl flex items-center justify-center text-primary">
                      <ShieldCheck size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Pedestrian Legal Range</h3>
                      <p className="text-charcoal/60">Every heavy-duty and folding mobility scooter Australia we stock is speed-governed to 10 km/h, ensuring legal pedestrian classification under ARR 204.</p>
                    </div>
                  </div>
                </div>
                <Link href="/about/" className="inline-block mt-12 font-bold text-primary border-b-2 border-primary pb-1 hover:text-primary-light hover:border-primary-light transition-all">
                  Read Our Full Story
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] relative rounded-3xl overflow-hidden shadow-2xl">
                <Image 
                  src="https://picsum.photos/seed/heritage/800/1000" 
                  alt="Our Adelaide showroom" 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-8 rounded-2xl shadow-xl max-w-xs">
                <p className="text-primary font-bold text-3xl mb-1">100%</p>
                <p className="font-bold text-charcoal mb-2">Family Owned</p>
                <p className="text-xs text-charcoal/60">Australian owned and operated medical equipment specialists.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Support Banner */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="medical-gradient rounded-3xl p-8 md:p-16 text-white text-center relative overflow-hidden shadow-2xl">
              <div className="relative z-10 max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Need Expert Advice?</h2>
                <p className="text-xl opacity-90 mb-10">Our Adelaide-based specialists are ready to help you find the perfect mobility solution for your lifestyle.</p>
                <div className="flex flex-wrap justify-center gap-6">
                  <Link href="/contact/" className="bg-white text-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-opacity-90 transition-all">
                    Request Price List
                  </Link>
                  <Link href={`tel:${CONTACT.phone}`} className="bg-charcoal text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-opacity-90 transition-all">
                    Call 1800 703 244
                  </Link>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-32 -mt-32" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full -ml-24 -mb-24" />
            </div>
          </div>
        </section>

        {/* FAQ Preview */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Common <span className="text-primary">Questions</span></h2>
              <p className="text-charcoal/60">Expert advice on Australian mobility regulations.</p>
            </div>
            <div className="space-y-6">
              {FAQ.map((item, i) => (
                <div key={i} className="border border-gray-100 rounded-2xl p-6 shadow-sm">
                  <h3 className="font-bold text-lg mb-3 flex items-center gap-3">
                    <span className="w-8 h-8 medical-gradient rounded-lg flex items-center justify-center text-white text-xs">Q</span>
                    {item.question}
                  </h3>
                  <p className="text-charcoal/70 pl-11">{item.answer}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link href="/faq/" className="text-primary font-bold hover:underline">
                View All Frequently Asked Questions
              </Link>
            </div>
          </div>
      </section>
    </>
  );
}
