import React from 'react';
import { SITE, FAQ, CONTACT } from '@/src/config/site';
import Nav from '@/src/components/Nav';
import Footer from '@/src/components/Footer';
import JsonLd from '@/src/components/JsonLd';
import { HelpCircle, ChevronRight, Phone, MessageCircle } from 'lucide-react';
import Link from 'next/link';

import FAQClient from '@/src/components/faq/FAQClient';

export const metadata = {
  title: `Frequently Asked Questions | ${SITE.name}`,
  description: `Find expert answers on Australian mobility scooter regulations, GST-free eligibility, and travel rules. Your guide to electric mobility scooters for sale.`,
  alternates: { canonical: `https://${SITE.domain}/faq/` },
  openGraph: {
    type: 'website',
    siteName: SITE.name,
    title: `Frequently Asked Questions | ${SITE.name}`,
    description: `Find expert answers on Australian mobility scooter regulations, GST-free eligibility, and travel rules.`,
    url: `https://${SITE.domain}/faq/`,
  },
  twitter: {
    card: 'summary_large_image',
    title: `Frequently Asked Questions | ${SITE.name}`,
    description: `Find expert answers on Australian mobility scooter regulations, GST-free eligibility, and travel rules.`,
  },
  other: {
    'og:updated_time': new Date().toISOString(),
  },
};

export default function FAQPage() {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "FAQ", url: "/faq/" }
  ];

  return (
    <>
      <JsonLd type="FAQPage" data={FAQ} />
      <JsonLd type="BreadcrumbList" data={breadcrumbs} />
      <Nav />
      <main id="main">
        {/* Header */}
        <section className="bg-accent py-16 md:py-20">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
              <HelpCircle size={32} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-charcoal">Frequently Asked Questions</h1>
            <p className="text-lg md:text-xl text-charcoal/60 leading-relaxed">
              Expert advice on mobility regulations, safety standards, battery care, and technical specifications for the Australian market.
            </p>
          </div>
        </section>

        {/* Interactive FAQ Client Section */}
        <section className="py-8 md:py-16 bg-white min-h-[500px]">
          <FAQClient faqItems={FAQ} />
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-charcoal text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Still Have Questions?</h2>
            <div className="flex flex-wrap justify-center gap-6">
              <Link 
                href={`tel:${CONTACT.phone}`}
                className="bg-primary text-white px-8 py-4 rounded-xl font-bold flex items-center gap-3 hover:bg-primary/90 transition-all"
              >
                <Phone size={20} /> Call Technical Support
              </Link>
              <Link 
                href="/contact/"
                className="bg-white text-charcoal px-8 py-4 rounded-xl font-bold flex items-center gap-3 hover:bg-gray-100 transition-all"
              >
                <MessageCircle size={20} /> Message Sales Desk
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
