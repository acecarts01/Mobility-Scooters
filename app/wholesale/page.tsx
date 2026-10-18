import React from 'react';
import { SITE, CONTACT } from '@/src/config/site';
import Nav from '@/src/components/Nav';
import Footer from '@/src/components/Footer';
import { Building2, Package, Truck, CheckCircle2, Phone, Mail } from 'lucide-react';
import Link from 'next/link';
import WholesaleForm from '@/src/components/forms/WholesaleForm';

export const metadata = {
  title: `Wholesale & Bulk Orders | ${SITE.name}`,
  description: `Wholesale mobility scooters for sale. B2B pricing, medical equipment supply, and bulk inventory solutions for Australian medical retailers and clinics.`,
  alternates: { canonical: `https://${SITE.domain}/wholesale/` }
};

export default function WholesalePage() {
  return (
    <>
      <Nav />
      <main id="main">
        {/* Hero */}
        <section className="bg-charcoal text-white py-24">
          <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Wholesale Mobility <span className="text-primary">Supply</span>.</h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Butler Trading Pty. Ltd. provides commercial-grade mobility inventory to medical clinics, aged care facilities, and independent retailers across Australia.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact/" className="bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-primary/90 transition-all">
                  Apply for Wholesale Account
                </Link>
              </div>
            </div>
            <div className="bg-white/5 rounded-3xl p-8 border border-white/10">
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                  <Package className="text-primary mb-4" size={32} />
                  <h3 className="font-bold mb-2">Bulk Pricing</h3>
                  <p className="text-xs text-gray-400">Tiered discounts on volume orders starting from 5+ units.</p>
                </div>
                <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                  <Building2 className="text-primary mb-4" size={32} />
                  <h3 className="font-bold mb-2">B2B Portal</h3>
                  <p className="text-xs text-gray-400">Streamlined ordering and historical account management.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-4xl text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Partnering with Australia&apos;s Specialist</h2>
            <p className="text-charcoal/60 leading-relaxed">
              We leverage our 40 years of medical heritage to ensure your inventory meets the highest Australian standards.
            </p>
          </div>
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 max-w-5xl">
            <div className="space-y-6">
              {[
                "Priority national logistics and drop-shipping options.",
                "Full technical support and replacement parts inventory.",
                "Compliance certification (ARR 204 & AS/NZS 3695).",
                "Marketing collateral and showroom display support.",
                "Dedicated B2B account management."
              ].map((benefit, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-6 h-6 medical-gradient rounded-full flex items-center justify-center text-white shrink-0 mt-1">
                    <CheckCircle2 size={14} />
                  </div>
                  <p className="text-charcoal/80 font-medium">{benefit}</p>
                </div>
              ))}
            </div>
            <div className="bg-accent rounded-3xl p-10 flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-6">Direct B2B Contact</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <Phone className="text-primary" />
                  <div>
                    <p className="font-bold">1800 703 244</p>
                    <p className="text-sm text-charcoal/40 uppercase tracking-widest font-bold">Ask for Wholesale Desk</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Mail className="text-primary" />
                  <div>
                    <p className="font-bold">sales@lifestylemobilityscooters.com.au</p>
                    <p className="text-sm text-charcoal/40 uppercase tracking-widest font-bold">Subject: Wholesale Inquiry</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Wholesale Form Section */}
        <section className="py-20 bg-accent">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Start Your Wholesale Application</h2>
            <p className="text-charcoal/60 mb-12">Submit your details and our B2B desk will review your application within 24 hours.</p>
            <div className="max-w-3xl mx-auto text-left">
              <WholesaleForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
