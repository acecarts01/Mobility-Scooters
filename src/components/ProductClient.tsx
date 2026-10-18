'use client';

import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  CheckCircle2, 
  ShieldCheck, 
  Truck, 
  CreditCard, 
  ShoppingCart, 
  ArrowRightLeft, 
  FileText, 
  Phone,
  Settings,
  Info,
  ChevronRight
} from 'lucide-react';
import { CONTACT } from '@/src/config/site';
import { useCompare } from '@/src/context/CompareContext';
import { useCart } from '@/src/context/CartContext';
import { useState } from 'react';
import { ProductImage } from './shop/ProductImage';
import { Product, PRODUCTS_CATALOG } from '@/src/lib/catalog';
import { ARR204Badge } from './ARR204Badge';
import Footer from '@/src/components/Footer';

export default function ProductClient({ 
  product, 
  relatedProducts 
}: { 
  product: Product; 
  relatedProducts?: Product[]; 
}) {
  const { addToCompare, isComparing, removeFromCompare } = useCompare();
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);
  const [activeTab, setActiveTab] = useState<'description' | 'specs'>('description');

  const related = relatedProducts && relatedProducts.length > 0
    ? relatedProducts
    : PRODUCTS_CATALOG
        .filter(p => p.id !== product.id && (p.categorySlug === product.categorySlug || p.category === product.category))
        .slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const specRows = [
    { label: 'Safe Working Load', value: `${product.specs.safeWorkingLoadKg}kg` },
    { label: 'Max Speed', value: `${product.specs.maxSpeedKmh}km/h (ARR 204 Governed)` },
    { label: 'Estimated Range', value: `${product.specs.estimatedRangeKm}km` },
    { label: 'Total Weight', value: `${product.specs.totalWeightKg}kg` },
    { label: 'Heaviest Part', value: product.specs.heaviestPartKg ? `${product.specs.heaviestPartKg}kg` : 'N/A' },
    { label: 'Battery System', value: product.specs.batteryType },
    { label: 'Battery Capacity', value: product.specs.batteryCapacityWh ? `${product.specs.batteryCapacityWh}Wh` : 'N/A' },
    { label: 'Motor Output', value: product.specs.motorOutputWatts ? `${product.specs.motorOutputWatts}W` : 'N/A' },
    { label: 'Turning Radius', value: product.specs.turningRadiusMm ? `${product.specs.turningRadiusMm}mm` : 'N/A' },
    { label: 'Ground Clearance', value: product.specs.groundClearanceMm ? `${product.specs.groundClearanceMm}mm` : 'N/A' },
    { label: 'Tyre Compound', value: product.specs.tyreType },
    { label: 'Warranty', value: `${product.specs.warrantyYears} Years Clinical Parts & Labour` },
  ].filter(row => row.value !== '0kg' && row.value !== '0km' && row.value !== '0W' && row.value !== '0mm');

  return (
    <div className="min-h-screen bg-white pb-32 md:pb-0">
      <header className="bg-white border-b border-gray-100 p-4 sticky top-0 z-40">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/" className="font-bold text-primary flex items-center gap-2">
            <div className="w-8 h-8 medical-gradient rounded-lg flex items-center justify-center text-white text-xs">LS</div>
            <span className="hidden sm:inline">LIFESTYLE MOBILITY</span>
          </Link>
          <Link href={`/shop/${product.categorySlug}/`} className="text-sm font-bold hover:text-primary transition-colors text-charcoal/60 flex items-center gap-1">
            Back to Catalog <ChevronRight size={16} />
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Image Gallery */}
          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="product-frame border-2 border-accent rounded-[2.5rem] relative group bg-white shadow-sm overflow-hidden"
            >
              <ProductImage 
                productId={product.id} 
                fallbackTitle={product.name} 
                className="object-contain p-12"
                priority
              />
              
              {/* Badges */}
              <div className="absolute top-6 left-6 z-10 flex flex-col gap-2">
                {product.badge && (
                  <span className="bg-primary text-white text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
                    {product.badge}
                  </span>
                )}
                {product.specs.airlineApproved && (
                  <span className="bg-blue-600 text-white text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest flex items-center gap-2 shadow-lg">
                    <ShieldCheck size={14} /> CASA / IATA Flight Certified
                  </span>
                )}
              </div>
            </motion.div>
            
            <div className="bg-accent/30 rounded-3xl p-6 border border-accent flex items-center gap-4">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm shrink-0">
                <Truck size={24} />
              </div>
              <div>
                <p className="font-bold text-sm text-charcoal leading-none mb-1">National Logistics Network</p>
                <p className="text-[10px] text-charcoal/40 uppercase tracking-widest font-bold">Rapid Metro & Regional Dispatch</p>
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[10px] font-bold text-primary tracking-[0.2em] uppercase bg-primary/10 px-3 py-1 rounded-full">{product.brand}</span>
                <span className="text-[10px] font-bold text-charcoal/30 tracking-[0.2em] uppercase">{product.category}</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-charcoal mb-6 leading-tight">{product.name}</h1>
              <div className="flex flex-col gap-1">
                <span className="text-4xl font-bold text-primary tracking-tighter">${product.price.toLocaleString()} AUD</span>
                <span className="text-[11px] font-bold text-charcoal/40 uppercase tracking-widest">
                  100% GST-Exempt <span className="text-charcoal/20 font-medium">| Sec 38-45 Health Act</span>
                </span>
              </div>
            </div>

            <div className="mb-10">
               <ARR204Badge maxSpeedKmh={product.specs.maxSpeedKmh} />
            </div>

            {/* Tabs */}
            <div className="mb-12">
              <div className="flex gap-10 border-b border-gray-100 mb-8 overflow-x-auto no-scrollbar">
                <button 
                  onClick={() => setActiveTab('description')} 
                  className={`pb-4 text-xs font-bold uppercase tracking-[0.2em] transition-all border-b-2 shrink-0 ${activeTab === 'description' ? 'border-primary text-primary' : 'border-transparent text-charcoal/40 hover:text-charcoal'}`}
                >
                  Product Insights
                </button>
                <button 
                  onClick={() => setActiveTab('specs')} 
                  className={`pb-4 text-xs font-bold uppercase tracking-[0.2em] transition-all border-b-2 shrink-0 ${activeTab === 'specs' ? 'border-primary text-primary' : 'border-transparent text-charcoal/40 hover:text-charcoal'}`}
                >
                  Technical Engineering
                </button>
              </div>
              <button 
                onClick={() => isComparing(product.id) ? removeFromCompare(product.id) : addToCompare(product)}
                className={`w-full py-4 rounded-2xl font-bold text-xs uppercase tracking-[0.2em] text-center transition-all flex items-center justify-center gap-3 border-2 ${
                  isComparing(product.id)
                    ? 'bg-primary text-white border-primary'
                    : 'bg-white text-primary border-primary hover:bg-primary/5'
                }`}
              >
                <ArrowRightLeft size={18} /> {isComparing(product.id) ? 'Comparing' : 'Compare Models'}
              </button>

              <AnimatePresence mode="wait">
                {activeTab === 'description' ? (
                  <motion.div 
                    key="description"
                    initial={{ opacity: 0, y: 10 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-6"
                  >
                    <p className="text-lg text-charcoal/70 leading-relaxed font-medium">
                      {product.fullDescription}
                    </p>
                    <div className="p-6 bg-accent rounded-3xl border border-charcoal/5">
                      <h4 className="text-[10px] font-bold text-charcoal/40 uppercase tracking-widest mb-4 flex items-center gap-2">
                        <Settings size={14} /> Clinical Highlights
                      </h4>
                      <ul className="space-y-3">
                        {product.includedAccessories.map((acc, i) => (
                          <li key={i} className="flex items-center gap-3 text-sm font-bold text-charcoal/80">
                            <CheckCircle2 size={16} className="text-primary" /> {acc}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div 
                    key="specs"
                    initial={{ opacity: 0, y: 10 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    exit={{ opacity: 0, y: -10 }}
                  >
                    <div className="bg-charcoal text-white rounded-[2rem] p-8 md:p-10 shadow-2xl relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-64 h-64 bg-primary opacity-5 rounded-full blur-3xl -mr-32 -mt-32" />
                      <table className="w-full relative z-10">
                        <tbody>
                          {specRows.map((row, i) => (
                            <tr key={i} className="border-b border-white/5 last:border-0">
                              <td className="py-4 text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] w-1/2">{row.label}</td>
                              <td className="py-4 font-bold text-primary-light text-sm text-right">{row.value}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Desktop CTAs */}
            <div className="hidden md:flex flex-col gap-4 mb-12">
              <div className="flex gap-4">
                <button 
                  onClick={handleAddToCart}
                  className="flex-[2] medical-gradient text-white py-6 rounded-2xl font-bold text-lg shadow-xl shadow-primary/20 hover:scale-[1.02] transition-all flex items-center justify-center gap-3"
                >
                  <ShoppingCart size={24} /> {added ? 'Added to Cart!' : 'Buy via EFT / PayID'}
                </button>
              </div>
            </div>

            <div className="pt-8 border-t border-gray-100 flex gap-10 grayscale opacity-40">
               <div className="flex flex-col items-center gap-2">
                 <ShieldCheck size={32} />
                 <span className="text-[9px] font-bold uppercase tracking-widest text-center">TGA Exempt<br/>Device</span>
               </div>
               <div className="flex flex-col items-center gap-2">
                 <CheckCircle2 size={32} />
                 <span className="text-[9px] font-bold uppercase tracking-widest text-center">Australian Standard<br/>AS/NZS 3695</span>
               </div>
               <div className="flex flex-col items-center gap-2 ml-auto">
                 <Info size={32} />
                 <span className="text-[9px] font-bold uppercase tracking-widest text-center">Expert clinical<br/>adelaide support</span>
               </div>
            </div>
          </div>
        </div>

        {/* Related Products Section */}
        {related.length > 0 && (
          <section className="mt-20 pt-16 border-t border-gray-100">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
              <div>
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
                  Same Category Selection
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-charcoal tracking-tight">
                  Related Mobility Solutions
                </h2>
                <p className="text-charcoal/60 text-sm mt-1 max-w-xl">
                  Compare other certified models from the {product.category} collection, calibrated to Australian road safety standards.
                </p>
              </div>
              <Link 
                href={`/shop/${product.categorySlug}/`} 
                className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:underline shrink-0 group"
              >
                View All in {product.category}
                <ChevronRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {related.map((item) => (
                <motion.div
                  key={item.id}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white border border-gray-100 rounded-3xl p-5 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all flex flex-col group"
                >
                  <Link href={`/shop/${item.categorySlug}/${item.slug}/`} className="flex flex-col flex-1">
                    <div className="product-frame aspect-[4/3] mb-4 relative overflow-hidden bg-accent/20 rounded-2xl flex items-center justify-center p-4">
                      <ProductImage
                        productId={item.id}
                        fallbackTitle={item.name}
                        className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                        {item.badge ? (
                          <span className="bg-primary text-white text-[9px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
                            {item.badge}
                          </span>
                        ) : (
                          <span className="bg-charcoal text-white text-[9px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
                            {item.brand}
                          </span>
                        )}
                        {item.gstExempt && (
                          <span className="bg-emerald-600 text-white text-[8px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider shadow-sm">
                            GST-Free
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="text-[10px] font-bold text-charcoal/40 uppercase tracking-widest mb-1.5">
                      {item.subcategory || item.brand}
                    </div>

                    <h3 className="font-bold text-charcoal group-hover:text-primary transition-colors text-base line-clamp-2 min-h-[3rem] mb-3 leading-snug">
                      {item.name}
                    </h3>

                    {item.specs && (
                      <div className="flex flex-wrap gap-2 mb-4 text-[11px] text-charcoal/60">
                        {item.specs.safeWorkingLoadKg > 0 && (
                          <span className="bg-gray-100 px-2 py-0.5 rounded-md font-medium">
                            {item.specs.safeWorkingLoadKg}kg SWL
                          </span>
                        )}
                        {item.specs.estimatedRangeKm > 0 && (
                          <span className="bg-gray-100 px-2 py-0.5 rounded-md font-medium">
                            {item.specs.estimatedRangeKm}km Range
                          </span>
                        )}
                        {item.specs.airlineApproved && (
                          <span className="bg-blue-50 text-blue-700 px-2 py-0.5 rounded-md font-bold">
                            Flight Safe
                          </span>
                        )}
                      </div>
                    )}

                    <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] text-charcoal/40 uppercase font-semibold block leading-none mb-0.5">Online Price</span>
                        <span className="text-xl font-bold text-primary tracking-tight">
                          ${item.price.toLocaleString()} AUD
                        </span>
                      </div>
                      <div className="w-9 h-9 rounded-xl bg-accent text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                        <ChevronRight size={18} />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </section>
        )}
      </main>

      {/* Site Footer */}
      <Footer />

      {/* Sticky Mobile Bottom Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-[100] bg-white border-t border-gray-100 p-4 pb-safe shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
        <div className="flex gap-3">
          <Link 
            href={`tel:${CONTACT.phone}`} 
            className="w-14 h-14 bg-charcoal text-white rounded-xl flex items-center justify-center shrink-0 shadow-lg"
            aria-label="Call Specialist"
          >
            <Phone size={24} />
          </Link>
          <button 
            onClick={handleAddToCart}
            className="flex-1 medical-gradient text-white rounded-xl font-bold text-xs uppercase tracking-widest shadow-lg flex items-center justify-center gap-2"
          >
            <ShoppingCart size={18} />
            {added ? 'Added!' : 'Buy Now'}
          </button>
        </div>
      </div>
    </div>
  );
}
