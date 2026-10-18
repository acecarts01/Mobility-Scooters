import React from 'react';
import { SITE, CONTACT, BRAND } from '@/src/config/site';
import Nav from '@/src/components/Nav';
import Footer from '@/src/components/Footer';
import JsonLd from '@/src/components/JsonLd';
import Image from 'next/image';
import { ShieldCheck, Truck, History, Users, Award, MapPin } from 'lucide-react';

export const metadata = {
  title: `About Us | ${SITE.name}`,
  description: `Discover the 40-year medical heritage of ${SITE.name}. Australia's specialists in mobility scooters, folding scooters, and clinical-grade technical aids.`,
  alternates: { canonical: `https://${SITE.domain}/about/` }
};

export default function AboutPage() {
  return (
    <>
      <JsonLd type="AboutPage" />
      <Nav />
      <main id="main">
        {/* Hero Section */}
        <section className="bg-charcoal text-white py-24 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#007A78 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
          <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Built on 40 Years of <span className="text-primary">Clinical Heritage</span>.</h1>
            <p className="text-xl text-gray-300">Butler Trading Pty. Ltd. (Est. 1985) — Adelaide&apos;s original mobility technical aid specialists.</p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/5] relative rounded-3xl overflow-hidden shadow-2xl">
                <Image 
                  src="https://picsum.photos/seed/showroom-2/800/1000" 
                  alt="Our Heritage" 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary text-white p-8 rounded-2xl shadow-xl max-w-xs">
                <p className="font-bold text-4xl mb-1">1985</p>
                <p className="text-sm opacity-80 uppercase tracking-widest font-bold">Founded in Adelaide</p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-charcoal">The Butler Trading Story</h2>
              <div className="space-y-6 text-charcoal/70 leading-relaxed text-lg">
                <p>
                  Founded by the Butler family in 1985, our mission was simple: to provide the people of South Australia with clinical-grade mobility solutions that prioritize safety and technical excellence.
                </p>
                <p>
                  Today, while our footprint has expanded across Australia, our core values remain unchanged. We aren&apos;t just a retail store; we are technical aid specialists who understand the complex engineering behind every heavy-duty and folding mobility scooter we stock.
                </p>
                <p>
                  Every machine in our range is speed-governed to 10 km/h, ensuring legal pedestrian classification under Australian Road Rule 204. We take our responsibility to your safety seriously.
                </p>
              </div>
              <div className="mt-12 grid grid-cols-2 gap-8 border-t border-gray-100 pt-8">
                <div>
                  <p className="text-3xl font-bold text-primary mb-1">1,400+</p>
                  <p className="text-xs text-charcoal/40 font-bold uppercase">5-Star Reviews</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary mb-1">100%</p>
                  <p className="text-xs text-charcoal/40 font-bold uppercase">Family Owned</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Grid */}
        <section className="py-20 bg-accent">
          <div className="container mx-auto px-4 text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Australians Choose Us</h2>
            <p className="text-charcoal/60">The pillars of our 40-year reputation.</p>
          </div>
          <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
            {[
              { title: "Clinical Expertise", icon: <ShieldCheck size={32} />, text: "We don't just sell scooters; we understand the biomechanics and safety requirements of mobility aids." },
              { title: "National Support", icon: <Truck size={32} />, text: "Based in Adelaide with a rapid logistics network serving every state and territory in Australia." },
              { title: "Verified Heritage", icon: <History size={32} />, text: "Nearly four decades of continuous operation as Butler Trading Pty. Ltd. (ABN: 84 008 071 323)." }
            ].map((value, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center group hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-6 group-hover:medical-gradient group-hover:text-white transition-all">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-charcoal/60 text-sm leading-relaxed">{value.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Milestones */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold mb-16 text-center">Our <span className="text-primary">Journey</span></h2>
            <div className="space-y-12 relative">
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gray-200 -translate-x-1/2" />
              {BRAND.milestones.map((milestone, i) => (
                <div key={i} className={`flex flex-col md:flex-row gap-8 items-center ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="flex-1 text-center md:text-right">
                    {i % 2 !== 0 && (
                      <div className="hidden md:block">
                        <span className="text-3xl font-bold text-primary">{milestone.year}</span>
                        <p className="text-charcoal/60 mt-2">{milestone.event}</p>
                      </div>
                    )}
                    {i % 2 === 0 && (
                      <div className="md:text-left">
                         <span className="text-3xl font-bold text-primary">{milestone.year}</span>
                         <p className="text-charcoal/60 mt-2">{milestone.event}</p>
                      </div>
                    )}
                  </div>
                  <div className="w-8 h-8 rounded-full medical-gradient border-4 border-white shadow-lg relative z-10 shrink-0" />
                  <div className="flex-1 md:hidden">
                    <span className="text-xl font-bold text-primary">{milestone.year}</span>
                    <p className="text-charcoal/60 mt-1">{milestone.event}</p>
                  </div>
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact/HQ */}
        <section className="py-20 bg-charcoal text-white">
          <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-8">National Headquarters</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <MapPin className="text-primary shrink-0" />
                  <div>
                    <p className="font-bold text-lg">{CONTACT.address}</p>
                    <p className="text-gray-400">Main showroom and technical service centre.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Users className="text-primary shrink-0" />
                  <div>
                    <p className="font-bold text-lg">BUTLER TRADING PTY. LTD.</p>
                    <p className="text-gray-400">ABN: <a href="https://abr.business.gov.au/ABN/View?abn=84008071323" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">{CONTACT.abn}</a></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="aspect-video relative rounded-2xl overflow-hidden grayscale opacity-50">
               <Image src="https://picsum.photos/seed/adelaide/800/450" alt="Adelaide Panorama" fill className="object-cover" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
