import React from 'react';
import { SITE } from '@/src/config/site';
import Nav from '@/src/components/Nav';
import Footer from '@/src/components/Footer';
import { Truck, Search, MapPin, Package, Clock } from 'lucide-react';

export const metadata = {
  title: `Order Tracking | ${SITE.name}`,
  description: `Track your mobility scooter delivery status. National logistics for electric mobility scooters and technical aids across Australia.`,
  alternates: { canonical: `https://${SITE.domain}/tracking/` },
  robots: { index: false, follow: true }
};

export default function TrackingPage() {
  return (
    <>
      <Nav />
      <main id="main">
        {/* Header */}
        <section className="bg-accent py-20">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
              <Truck size={32} />
            </div>
            <h1 className="text-4xl font-bold mb-6 text-charcoal">Track Your Delivery</h1>
            <p className="text-xl text-charcoal/60 leading-relaxed">
              Enter your order details to see the real-time status of your mobility equipment.
            </p>
          </div>
        </section>

        {/* Tracking Form */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-xl">
            <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-2xl">
              <div className="space-y-6">
                <div>
                  <label htmlFor="order_id" className="block text-xs font-bold text-charcoal/40 uppercase tracking-widest mb-2">Order Number</label>
                  <div className="relative">
                    <input 
                      type="text" 
                      id="order_id"
                      placeholder="e.g. LS-45091"
                      className="w-full bg-accent border-none rounded-xl py-4 pl-12 pr-4 text-sm focus:ring-2 focus:ring-primary/20 transition-all font-bold"
                    />
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal/30" size={18} />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-charcoal/40 uppercase tracking-widest mb-2">Billing Email</label>
                  <input 
                    type="email" 
                    id="email"
                    placeholder="email@example.com"
                    className="w-full bg-accent border-none rounded-xl py-4 px-4 text-sm focus:ring-2 focus:ring-primary/20 transition-all font-bold"
                  />
                </div>
                <button className="w-full medical-gradient text-white py-5 rounded-2xl font-bold text-lg shadow-xl shadow-primary/20 hover:scale-[1.02] transition-all">
                  Track Delivery Status
                </button>
              </div>
            </div>

            {/* Delivery Info */}
            <div className="mt-16 grid grid-cols-2 gap-8 text-center">
              <div className="p-6">
                <MapPin className="text-primary mx-auto mb-4" />
                <h3 className="font-bold mb-1">Live Tracking</h3>
                <p className="text-xs text-charcoal/60">GPS-enabled tracking on all heavy-duty mobility scooter freight.</p>
              </div>
              <div className="p-6">
                <Clock className="text-primary mx-auto mb-4" />
                <h3 className="font-bold mb-1">Pre-Delivery Call</h3>
                <p className="text-xs text-charcoal/60">Our technicians call 1 hour before arrival for home setup.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
