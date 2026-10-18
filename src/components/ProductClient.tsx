'use client';

import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import { 
  CheckCircle2, 
  ShieldCheck, 
  Truck, 
  ShoppingCart, 
  ArrowRightLeft, 
  FileText, 
  Phone,
  Settings,
  ChevronRight,
  Home,
  Check,
  Zap,
  Tag
} from 'lucide-react';
import { CONTACT } from '@/src/config/site';
import { useCompare } from '@/src/context/CompareContext';
import { useCart } from '@/src/context/CartContext';
import { useState } from 'react';
import { Product, PRODUCTS_CATALOG } from '@/src/lib/catalog';
import { ARR204Badge } from './shop/ARR204Badge';
import { ProductThumbnail } from './shop/ProductThumbnail';
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
    setTimeout(() => setAdded(false), 2200);
  };

  const specRows = [
    { label: 'Safe Working Load (SWL)', value: `${product.specs.safeWorkingLoadKg} kg` },
    { label: 'Governed Speed (ARR 204)', value: `${product.specs.maxSpeedKmh} km/h (Pedestrian Legal)` },
    { label: 'Estimated Driving Range', value: `${product.specs.estimatedRangeKm} km` },
    { label: 'Total Operating Weight', value: `${product.specs.totalWeightKg} kg` },
    { label: 'Heaviest Disassembled Component', value: product.specs.heaviestPartKg ? `${product.specs.heaviestPartKg} kg` : 'N/A' },
    { label: 'Battery Chemistry', value: product.specs.batteryType },
    { label: 'Pack Energy Capacity', value: product.specs.batteryCapacityWh ? `${product.specs.batteryCapacityWh} Wh` : 'N/A' },
    { label: 'Motor Rating (Continuous)', value: product.specs.motorOutputWatts ? `${product.specs.motorOutputWatts} Watts` : 'N/A' },
    { label: 'Turning Radius', value: product.specs.turningRadiusMm ? `${product.specs.turningRadiusMm} mm` : 'N/A' },
    { label: 'Obstacle Ground Clearance', value: product.specs.groundClearanceMm ? `${product.specs.groundClearanceMm} mm` : 'N/A' },
    { label: 'Tyre Specification', value: product.specs.tyreType },
    { label: 'Aviation Compliance', value: product.specs.airlineApproved ? 'CASA / IATA UN 38.3 Certified Flight Safe' : 'Standard Land Logistics Only' },
    { label: 'Statutory GST Status', value: '100% GST-Free (Sec 38-45 A New Tax System Act)' },
    { label: 'Clinical Warranty', value: `${product.specs.warrantyYears} Years Comprehensive Frame & Drivetrain` },
  ].filter(row => row.value !== '0 kg' && row.value !== '0 km' && row.value !== '0 Watts' && row.value !== '0 mm');

  const primaryImage = product.images && product.images.length > 0 ? product.images[0] : undefined;

  return (
    <div className="min-h-screen bg-white pb-36 md:pb-0">
      {/* Top Bar Navigation */}
      <header className="bg-white border-b border-gray-100 p-4 sticky top-0 z-40">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/" className="font-bold text-[#007A78] flex items-center gap-2">
            <div className="w-8 h-8 bg-[#007A78] rounded-lg flex items-center justify-center text-white text-xs font-bold">LS</div>
            <span className="hidden sm:inline font-bold tracking-tight text-[#1E252B]">LIFESTYLE MOBILITY AUSTRALIA</span>
          </Link>
          <Link 
            href={`/shop/${product.categorySlug}/`} 
            className="text-sm font-bold hover:text-[#007A78] transition-colors text-[#1E252B]/70 flex items-center gap-1"
          >
            <span>Back to {product.category}</span>
            <ChevronRight size={16} />
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 md:py-12">
        {/* Accessible Breadcrumbs Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-xs md:text-sm font-semibold text-[#1E252B]/60">
          <Link href="/" className="hover:text-[#007A78] flex items-center gap-1">
            <Home size={14} />
            <span>Home</span>
          </Link>
          <ChevronRight size={14} className="text-[#1E252B]/30" />
          <Link href="/shop/" className="hover:text-[#007A78]">
            Shop Catalog
          </Link>
          <ChevronRight size={14} className="text-[#1E252B]/30" />
          <Link href={`/shop/${product.categorySlug}/`} className="hover:text-[#007A78]">
            {product.category}
          </Link>
          <ChevronRight size={14} className="text-[#1E252B]/30" />
          <span className="text-[#007A78] font-bold truncate max-w-xs md:max-w-md" aria-current="page">
            {product.name}
          </span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Visual Presentation Column */}
          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="border-2 border-[#1E252B]/10 rounded-[2.5rem] relative bg-white shadow-sm overflow-hidden"
            >
              <ProductThumbnail
                src={primaryImage}
                alt={product.name}
                sku={product.sku}
                brand={product.brand}
                categorySlug={product.categorySlug}
                airlineApproved={product.specs.airlineApproved}
                arr204Compliant={product.specs.arr204FootpathCompliant}
                priority
              />

              {product.badge && (
                <div className="absolute top-6 left-6 z-30">
                  <span className="bg-[#007A78] text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-md">
                    {product.badge}
                  </span>
                </div>
              )}
            </motion.div>
            
            {/* National Logistics & Dispatch Notice */}
            <div className="bg-[#F4F1EA] rounded-3xl p-6 border border-[#1E252B]/10 flex items-center gap-4">
              <div className="w-12 h-12 bg-[#007A78] rounded-2xl flex items-center justify-center text-white shadow-sm shrink-0">
                <Truck size={24} />
              </div>
              <div>
                <p className="font-bold text-sm text-[#1E252B] leading-none mb-1">National Australia Logistics Network</p>
                <p className="text-xs text-[#1E252B]/60 font-semibold uppercase tracking-wider">
                  Insured Freight Direct from Panorama SA 5041 Facility
                </p>
              </div>
            </div>
          </div>

          {/* Product Commercial & Engineering Info Column */}
          <div>
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-bold text-[#007A78] tracking-widest uppercase bg-[#007A78]/10 px-3 py-1 rounded-full border border-[#007A78]/20">
                  {product.brand}
                </span>
                <span className="text-xs font-bold text-[#1E252B]/50 tracking-wider uppercase">
                  SKU: {product.sku}
                </span>
              </div>

              <h1 className="text-3xl md:text-5xl font-bold text-[#1E252B] mb-4 leading-tight">
                {product.name}
              </h1>

              {/* Pricing & GST Exemption Banner */}
              <div className="bg-[#F4F1EA] p-5 rounded-2xl border-2 border-[#1E252B]/10 mb-6 flex flex-wrap items-baseline justify-between gap-2">
                <div>
                  <span className="text-3xl md:text-4xl font-extrabold text-[#007A78] tracking-tight">
                    ${product.price.toLocaleString('en-AU', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} AUD
                  </span>
                  <p className="text-xs font-bold text-[#1E252B]/60 mt-1">
                    Free Nationwide Delivery on qualifying orders
                  </p>
                </div>
                <div className="text-right">
                  <span className="inline-block bg-[#007A78] text-white text-xs font-extrabold uppercase tracking-wider px-3 py-1 rounded-md shadow-xs">
                    100% GST-Free
                  </span>
                  <p className="text-[11px] font-semibold text-[#1E252B]/60 mt-1">
                    Sec 38-45 Health Act 1999
                  </p>
                </div>
              </div>
            </div>

            {/* ARR 204 Pedestrian Compliance Box */}
            <div className="mb-8">
              <ARR204Badge maxSpeedKmh={product.specs.maxSpeedKmh} />
            </div>

            {/* Product Insights & Specs Tabs */}
            <div className="mb-8">
              <div className="flex gap-8 border-b-2 border-gray-100 mb-6">
                <button 
                  onClick={() => setActiveTab('description')} 
                  className={`pb-3 text-xs md:text-sm font-bold uppercase tracking-wider transition-all border-b-2 -mb-0.5 ${
                    activeTab === 'description' 
                      ? 'border-[#007A78] text-[#007A78]' 
                      : 'border-transparent text-[#1E252B]/50 hover:text-[#1E252B]'
                  }`}
                >
                  Clinical Insights
                </button>
                <button 
                  onClick={() => setActiveTab('specs')} 
                  className={`pb-3 text-xs md:text-sm font-bold uppercase tracking-wider transition-all border-b-2 -mb-0.5 ${
                    activeTab === 'specs' 
                      ? 'border-[#007A78] text-[#007A78]' 
                      : 'border-transparent text-[#1E252B]/50 hover:text-[#1E252B]'
                  }`}
                >
                  Technical Specs Matrix
                </button>
              </div>

              <AnimatePresence mode="wait">
                {activeTab === 'description' ? (
                  <motion.div 
                    key="description"
                    initial={{ opacity: 0, y: 10 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-6"
                  >
                    <p className="text-base md:text-lg text-[#1E252B]/85 leading-relaxed font-normal">
                      {product.fullDescription}
                    </p>

                    {/* Inclusion Checklist */}
                    <div className="p-6 bg-[#F4F1EA] rounded-2xl border border-[#1E252B]/10">
                      <h4 className="text-xs font-bold text-[#1E252B] uppercase tracking-wider mb-4 flex items-center gap-2">
                        <Settings size={16} className="text-[#007A78]" /> Standard Factory Inclusions &amp; Accessories
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {product.includedAccessories.map((acc, i) => (
                          <li key={i} className="flex items-center gap-2.5 text-sm font-medium text-[#1E252B]">
                            <CheckCircle2 size={16} className="text-[#007A78] shrink-0" />
                            <span>{acc}</span>
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
                    <div className="bg-[#1E252B] text-white rounded-2xl p-6 md:p-8 shadow-xl">
                      <h4 className="text-xs font-mono font-bold text-[#007A78] uppercase tracking-widest mb-4">
                        TECHNICAL ENGINEERING BENCHMARKS
                      </h4>
                      <table className="w-full text-sm">
                        <tbody>
                          {specRows.map((row, i) => (
                            <tr key={i} className="border-b border-white/10 last:border-0">
                              <td className="py-3 text-xs font-bold text-[#F4F1EA]/60 uppercase tracking-wider w-1/2">
                                {row.label}
                              </td>
                              <td className="py-3 font-semibold text-white text-right">
                                {row.value}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Desktop Action CTAs */}
            <div className="hidden md:flex flex-col gap-3 mb-8">
              <div className="grid grid-cols-2 gap-3">
                <button 
                  onClick={handleAddToCart}
                  className="min-h-[52px] bg-[#007A78] hover:bg-[#00605E] text-white px-6 rounded-xl font-bold text-sm uppercase tracking-wider shadow-lg shadow-[#007A78]/25 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                >
                  <ShoppingCart size={20} />
                  <span>{added ? 'Added to Cart!' : 'Buy Online (EFT / Card)'}</span>
                </button>

                <Link 
                  href={`/ndis-funding/?product=${encodeURIComponent(product.slug)}`}
                  className="min-h-[52px] bg-[#F4F1EA] hover:bg-[#EAE4D7] text-[#1E252B] border-2 border-[#1E252B]/15 px-6 rounded-xl font-bold text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                >
                  <FileText size={20} className="text-[#007A78]" />
                  <span>Request NDIS Quote</span>
                </Link>
              </div>

              <button 
                onClick={() => isComparing(product.id) ? removeFromCompare(product.id) : addToCompare(product)}
                className={`min-h-[46px] w-full rounded-xl font-bold text-xs uppercase tracking-wider text-center transition-all flex items-center justify-center gap-2 border-2 ${
                  isComparing(product.id)
                    ? 'bg-[#1E252B] text-white border-[#1E252B]'
                    : 'bg-white text-[#1E252B] border-[#1E252B]/20 hover:border-[#1E252B]'
                }`}
              >
                <ArrowRightLeft size={16} /> 
                <span>{isComparing(product.id) ? 'Comparing in Model Matrix' : 'Add to Comparison Drawer'}</span>
              </button>
            </div>

            {/* Clinical & Regulatory Assurance Badges */}
            <div className="pt-6 border-t border-gray-100 flex flex-wrap gap-8 text-[#1E252B]/70">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider">
                <ShieldCheck size={20} className="text-[#007A78]" />
                <span>TGA Exempt Class I Medical Aid</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider">
                <CheckCircle2 size={20} className="text-[#007A78]" />
                <span>Australian Standard AS/NZS 3695</span>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products Grid */}
        {related.length > 0 && (
          <section className="mt-20 pt-16 border-t border-gray-100">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
              <div>
                <span className="bg-[#007A78]/10 text-[#007A78] text-xs font-extrabold uppercase tracking-wider px-3 py-1 rounded-full border border-[#007A78]/20 mb-2 inline-block">
                  Complementary Models
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-[#1E252B]">
                  Related Certified Mobility Solutions
                </h2>
              </div>
              <Link 
                href={`/shop/${product.categorySlug}/`} 
                className="text-sm font-bold text-[#007A78] hover:underline flex items-center gap-1 shrink-0"
              >
                <span>View All {product.category}</span>
                <ChevronRight size={16} />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {related.map((item) => (
                <div key={item.id} className="bg-white border-2 border-[#1E252B]/10 rounded-3xl p-5 hover:border-[#007A78] transition-all flex flex-col group">
                  <Link href={`/shop/${item.categorySlug}/${item.slug}/`} className="block mb-3">
                    <ProductThumbnail
                      src={item.images && item.images.length > 0 ? item.images[0] : undefined}
                      alt={item.name}
                      sku={item.sku}
                      brand={item.brand}
                      categorySlug={item.categorySlug}
                      airlineApproved={item.specs.airlineApproved}
                      arr204Compliant={item.specs.arr204FootpathCompliant}
                    />
                  </Link>

                  <div className="text-[11px] font-bold text-[#1E252B]/50 uppercase tracking-wider mb-1">
                    {item.brand} &bull; {item.specs.safeWorkingLoadKg}kg SWL
                  </div>

                  <Link href={`/shop/${item.categorySlug}/${item.slug}/`}>
                    <h3 className="font-bold text-[#1E252B] group-hover:text-[#007A78] transition-colors line-clamp-2 text-base leading-snug mb-3">
                      {item.name}
                    </h3>
                  </Link>

                  <div className="mt-auto pt-3 border-t border-gray-100 flex items-center justify-between">
                    <div>
                      <span className="text-lg font-bold text-[#007A78]">
                        ${item.price.toLocaleString('en-AU', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} AUD
                      </span>
                      <span className="block text-[10px] font-bold text-[#1E252B]/50 uppercase">
                        GST-Free
                      </span>
                    </div>
                    <Link 
                      href={`/shop/${item.categorySlug}/${item.slug}/`}
                      className="w-10 h-10 rounded-xl bg-[#F4F1EA] group-hover:bg-[#007A78] group-hover:text-white flex items-center justify-center transition-colors text-[#007A78]"
                      aria-label={`View ${item.name}`}
                    >
                      <ChevronRight size={18} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />

      {/* Sticky Bottom Mobile Conversion Drawer */}
      <div 
        className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t-2 border-[#1E252B]/10 p-3 pb-safe shadow-[0_-10px_30px_rgba(0,0,0,0.12)]"
        role="region"
        aria-label="Mobile Checkout & Quote Drawer"
      >
        <div className="flex items-center gap-2">
          {/* Direct 1800-Call Button (>= 48px) */}
          <a 
            href={`tel:${CONTACT.phone.replace(/\s+/g, '')}`}
            className="min-h-[48px] min-w-[48px] bg-[#1E252B] text-white rounded-xl flex items-center justify-center shadow-md active:scale-95"
            aria-label={`Call clinical hotline at ${CONTACT.phone}`}
          >
            <Phone size={20} className="text-[#007A78]" />
          </a>

          {/* Direct NDIS Quote Trigger Button (>= 48px) */}
          <Link
            href={`/ndis-funding/?product=${encodeURIComponent(product.slug)}`}
            className="min-h-[48px] flex-1 bg-[#F4F1EA] text-[#1E252B] border-2 border-[#1E252B]/15 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 active:scale-98"
          >
            <FileText size={16} className="text-[#007A78]" />
            <span>NDIS Quote</span>
          </Link>

          {/* Direct Buy / Cart Button (>= 48px) */}
          <button 
            type="button"
            onClick={handleAddToCart}
            className="min-h-[48px] flex-[1.3] bg-[#007A78] hover:bg-[#00605E] text-white rounded-xl font-bold text-xs uppercase tracking-wider shadow-md flex items-center justify-center gap-1.5 active:scale-98 cursor-pointer"
          >
            <ShoppingCart size={16} />
            <span>{added ? 'Added!' : 'Buy Now'}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
