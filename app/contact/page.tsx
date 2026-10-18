import React from 'react';
import { SITE, CONTACT } from '@/src/config/site';
import Nav from '@/src/components/Nav';
import Footer from '@/src/components/Footer';
import { Phone, Mail, MapPin, MessageCircle, Clock, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import ContactForm from '@/src/components/forms/ContactForm';

export const metadata = {
  title: `Contact Us | ${SITE.name}`,
  description: `Contact our Adelaide-based mobility specialists. Get expert advice on mobility scooters for sale Australia, folding scooters, and technical aids.`,
  alternates: { canonical: `https://${SITE.domain}/contact/` }
};

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main id="main">
        {/* Header */}
        <section className="bg-charcoal text-white py-24">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Expert <span className="text-primary">Clinical</span> Advice.</h1>
            <p className="text-xl text-gray-400">Our Adelaide specialists are ready to help you choose the right mobility solution for your needs.</p>
          </div>
        </section>

        {/* Contact Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-bold mb-8 text-charcoal">Get in Touch</h2>
                <div className="space-y-8">
                  <div className="flex gap-6">
                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0">
                      <Phone size={28} />
                    </div>
                    <div>
                      <p className="text-sm text-charcoal/40 uppercase tracking-widest font-bold mb-1">Phone (Toll Free)</p>
                      <p className="text-2xl font-bold text-charcoal">{CONTACT.phone}</p>
                      <p className="text-sm text-charcoal/60 mt-1">Available 9am - 5pm ACST, Mon-Fri</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0">
                      <Mail size={28} />
                    </div>
                    <div>
                      <p className="text-sm text-charcoal/40 uppercase tracking-widest font-bold mb-1">Email Inquiry</p>
                      <p className="text-2xl font-bold text-charcoal">{CONTACT.email}</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0">
                      <MapPin size={28} />
                    </div>
                    <div>
                      <p className="text-sm text-charcoal/40 uppercase tracking-widest font-bold mb-1">National HQ & Showroom</p>
                      <p className="text-xl font-bold text-charcoal leading-tight">{CONTACT.address}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-accent rounded-3xl p-8 border border-gray-100 shadow-sm">
                <div className="flex items-center gap-2 text-primary font-bold mb-4">
                  <Clock size={18} />
                  <span className="uppercase tracking-widest text-xs">Response Guarantee</span>
                </div>
                <p className="text-charcoal/80 leading-relaxed italic">
                  &quot;Our technical aid specialists aim to respond to all web inquiries within 2 business hours during Adelaide trading time.&quot;
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white border border-gray-100 rounded-3xl p-8 md:p-12 shadow-2xl relative z-10">
              <h3 className="text-2xl font-bold mb-8">Send an Inquiry</h3>
              <ContactForm />
            </div>
          </div>
        </section>

        {/* WhatsApp Banner */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <Link 
              href={`https://wa.me/${CONTACT.whatsapp.replace('+', '')}`}
              className="bg-[#25D366] rounded-3xl p-10 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl hover:scale-[1.01] transition-transform"
            >
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md">
                   <MessageCircle size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Fast-Track via WhatsApp</h3>
                  <p className="opacity-90">Message our SMS concierge desk for instant technical photos and stock updates.</p>
                </div>
              </div>
              <span className="bg-white text-[#25D366] px-8 py-4 rounded-xl font-bold text-lg">Message Now</span>
            </Link>
          </div>
        </section>

        {/* Trust signals */}
        <section className="py-20 bg-accent border-y border-gray-100">
           <div className="container mx-auto px-4">
             <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-50 grayscale">
                <div className="flex items-center gap-3">
                   <CheckCircle2 size={24} />
                   <span className="font-bold text-sm tracking-widest uppercase">ARR 204 Compliant</span>
                </div>
                <div className="flex items-center gap-3">
                   <CheckCircle2 size={24} />
                   <span className="font-bold text-sm tracking-widest uppercase">GST-Free Medical Aids</span>
                </div>
                <div className="flex items-center gap-3">
                   <CheckCircle2 size={24} />
                   <span className="font-bold text-sm tracking-widest uppercase">Aust. Owned & Operated</span>
                </div>
             </div>
           </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
