import React from 'react';
import Nav from '@/src/components/Nav';
import Footer from '@/src/components/Footer';
import { ProductGrid } from '@/src/components/shop/ProductGrid';
import { SITE } from '@/src/config/site';
import { PRODUCTS_CATALOG } from '@/src/lib/catalog';

export const metadata = {
  title: `Shop Electric Mobility Scooters Australia | ARR 204 Compliant & GST-Free | ${SITE.name}`,
  description: `Browse our catalog of electric mobility scooters. 100% ARR 204 compliant for footpath use. All models are GST-free and speed-governed for Australian pedestrian legal use.`,
  alternates: {
    canonical: `https://${SITE.domain}/shop/`,
  },
};

export default function ShopPage() {
  return (
    <>
      <Nav />
      <main id="main">
        {/* Shop Hero */}
        <section className="bg-charcoal text-white py-24 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#007A78 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
          <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Clinical Mobility <span className="text-primary">Catalog</span>.
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              Butler Trading Pty. Ltd. (Est. 1985) offers 260+ specialized mobility solutions. All units are speed-governed to 10 km/h for Australian pedestrian legal compliance.
            </p>
          </div>
        </section>

        <section className="bg-accent/30 min-h-screen">
          <ProductGrid initialProducts={PRODUCTS_CATALOG} />
        </section>
      </main>
      <Footer />
    </>
  );
}
