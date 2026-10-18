import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { SITE, CONTACT } from '@/src/config/site';
import Nav from '@/src/components/Nav';
import Footer from '@/src/components/Footer';
import JsonLd from '@/src/components/JsonLd';
import { 
  FileText, 
  ShieldCheck, 
  CheckCircle2, 
  Phone, 
  Mail, 
  Clock, 
  ArrowRight, 
  UserCheck, 
  Activity, 
  Award,
  ChevronRight,
  ClipboardList
} from 'lucide-react';
import ARR204Badge from '@/src/components/shop/ARR204Badge';

export const metadata: Metadata = {
  title: 'NDIS Mobility Scooter Funding & Assistive Technology Quotes | Lifestyle Mobility',
  description: 'Official NDIS quote generator and assistive technology procurement for electric mobility scooters. Self-managed, plan-managed, and NDIA-managed participants across Australia.',
  alternates: {
    canonical: `https://${SITE.domain}/ndis-funding/`,
  },
  openGraph: {
    title: 'NDIS Mobility Scooter Funding Guide & Fast Formal Quotes',
    description: 'Procure ARR 204 compliant electric mobility scooters with NDIS funding. Fast itemised quotes with line item codes for Occupational Therapists and Plan Managers.',
    url: `https://${SITE.domain}/ndis-funding/`,
    type: 'website',
  },
};

export default function NDISFundingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <JsonLd 
        type="BreadcrumbList" 
        data={{
          items: [
            { name: 'Home', url: '/' },
            { name: 'NDIS Funding & Quotes', url: '/ndis-funding/' }
          ]
        }} 
      />

      <main id="main">
        {/* Hero Section */}
        <section className="bg-[#1E252B] text-white py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-radial-at-t from-[#007A78]/25 to-transparent pointer-events-none" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-[#007A78] text-white px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                <ShieldCheck size={16} /> Official Provider Documentation
              </div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
                NDIS Mobility Scooter Funding &amp; Itemised Quotes
              </h1>
              <p className="text-lg md:text-xl text-[#F4F1EA]/85 leading-relaxed mb-8">
                Fast-track your Assistive Technology (AT) capital funding with Butler Trading Pty. Ltd. We supply compliant quotes with formal NDIS support codes for Self-Managed, Plan-Managed, and Agency participants across Australia.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#quote-form" 
                  className="bg-[#007A78] hover:bg-[#00605E] text-white px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wider transition-all shadow-lg shadow-[#007A78]/30 flex items-center gap-2"
                >
                  <FileText size={18} /> Request Formal NDIS Quote
                </a>
                <Link 
                  href="/shop/" 
                  className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wider transition-all border border-white/20 flex items-center gap-2"
                >
                  Browse Catalog <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ARR 204 Regulatory Banner */}
        <section className="container mx-auto px-4 -mt-8 relative z-20">
          <ARR204Badge className="shadow-lg border-2 border-[#007A78]" />
        </section>

        {/* 3 Steps to NDIS Funding */}
        <section className="py-16 md:py-24 container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-2xl md:text-4xl font-bold text-[#1E252B] mb-4">
              How to Procure Your Scooter via NDIS
            </h2>
            <p className="text-base md:text-lg text-[#1E252B]/70">
              Clear, step-by-step guidance tailored to your specific NDIS management plan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#F4F1EA] p-8 rounded-3xl border border-[#1E252B]/10 relative">
              <div className="w-12 h-12 bg-[#007A78] text-white rounded-2xl flex items-center justify-center font-bold text-xl mb-6 shadow-sm">
                1
              </div>
              <h3 className="text-xl font-bold text-[#1E252B] mb-3">Self-Managed</h3>
              <p className="text-[#1E252B]/80 text-sm leading-relaxed mb-4">
                You can purchase any qualifying mobility scooter directly online. We supply a formal Tax Invoice marked <strong>100% GST-Free</strong> for immediate reimbursement via the myplace participant portal.
              </p>
              <ul className="space-y-2 text-xs font-semibold text-[#1E252B]/70">
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#007A78]" /> Instant GST-Free receipt</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#007A78]" /> Claim funds before or after order</li>
              </ul>
            </div>

            <div className="bg-[#F4F1EA] p-8 rounded-3xl border-2 border-[#007A78] relative shadow-md">
              <div className="w-12 h-12 bg-[#007A78] text-white rounded-2xl flex items-center justify-center font-bold text-xl mb-6 shadow-sm">
                2
              </div>
              <div className="absolute top-6 right-6 bg-[#007A78] text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                Most Popular
              </div>
              <h3 className="text-xl font-bold text-[#1E252B] mb-3">Plan-Managed</h3>
              <p className="text-[#1E252B]/80 text-sm leading-relaxed mb-4">
                Submit an inquiry below with your Plan Manager details. We issue a formal itemised quote directly to your Plan Manager with our registered ABN and bank details for direct settlement.
              </p>
              <ul className="space-y-2 text-xs font-semibold text-[#1E252B]/70">
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#007A78]" /> Direct invoicing to Plan Manager</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#007A78]" /> Zero out-of-pocket payment</li>
              </ul>
            </div>

            <div className="bg-[#F4F1EA] p-8 rounded-3xl border border-[#1E252B]/10 relative">
              <div className="w-12 h-12 bg-[#007A78] text-white rounded-2xl flex items-center justify-center font-bold text-xl mb-6 shadow-sm">
                3
              </div>
              <h3 className="text-xl font-bold text-[#1E252B] mb-3">Agency Managed (NDIA)</h3>
              <p className="text-[#1E252B]/80 text-sm leading-relaxed mb-4">
                For NDIA-managed plans requiring registered provider service agreements or OT trial reports, our clinical coordination team works directly with your Support Coordinator.
              </p>
              <ul className="space-y-2 text-xs font-semibold text-[#1E252B]/70">
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#007A78]" /> OT trial documentation</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#007A78]" /> Support Coordinator coordination</li>
              </ul>
            </div>
          </div>
        </section>

        {/* NDIS Quote Request Form */}
        <section id="quote-form" className="py-16 bg-[#F4F1EA] border-t border-[#1E252B]/10">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border-2 border-[#1E252B]/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#007A78] text-white flex items-center justify-center">
                  <ClipboardList size={20} />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#1E252B]">
                    Generate Formal NDIS Quote
                  </h2>
                  <p className="text-xs text-[#1E252B]/60 font-semibold uppercase tracking-wider">
                    Official Butler Trading Pty. Ltd. Documentation
                  </p>
                </div>
              </div>

              <form action="/api/forms/contact/" method="POST" className="space-y-5">
                <input type="hidden" name="source" value="NDIS-Quote-Portal" />
                <input type="hidden" name="subject" value="Formal NDIS Assistive Technology Quote Request" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#1E252B] uppercase tracking-wider mb-2">
                      Participant Full Name *
                    </label>
                    <input 
                      type="text" 
                      name="participantName" 
                      required 
                      className="w-full px-4 py-3.5 rounded-xl border-2 border-[#1E252B]/15 focus:border-[#007A78] text-sm focus:outline-hidden"
                      placeholder="e.g. Margaret Evans"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#1E252B] uppercase tracking-wider mb-2">
                      NDIS Participant Number *
                    </label>
                    <input 
                      type="text" 
                      name="ndisNumber" 
                      required 
                      className="w-full px-4 py-3.5 rounded-xl border-2 border-[#1E252B]/15 focus:border-[#007A78] text-sm focus:outline-hidden"
                      placeholder="e.g. 430 123 456"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#1E252B] uppercase tracking-wider mb-2">
                      Contact Email *
                    </label>
                    <input 
                      type="email" 
                      name="email" 
                      required 
                      className="w-full px-4 py-3.5 rounded-xl border-2 border-[#1E252B]/15 focus:border-[#007A78] text-sm focus:outline-hidden"
                      placeholder="participant@email.com.au"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#1E252B] uppercase tracking-wider mb-2">
                      Contact Phone *
                    </label>
                    <input 
                      type="tel" 
                      name="phone" 
                      required 
                      className="w-full px-4 py-3.5 rounded-xl border-2 border-[#1E252B]/15 focus:border-[#007A78] text-sm focus:outline-hidden"
                      placeholder="0400 123 456"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#1E252B] uppercase tracking-wider mb-2">
                      Plan Funding Management Type *
                    </label>
                    <select 
                      name="planType" 
                      className="w-full px-4 py-3.5 rounded-xl border-2 border-[#1E252B]/15 focus:border-[#007A78] text-sm focus:outline-hidden bg-white"
                    >
                      <option value="plan_managed">Plan-Managed (Direct Invoice to Plan Manager)</option>
                      <option value="self_managed">Self-Managed (Immediate Reimbursement)</option>
                      <option value="ndia_managed">Agency-Managed (NDIA Service Agreement)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#1E252B] uppercase tracking-wider mb-2">
                      Scooter Model or Category of Interest
                    </label>
                    <input 
                      type="text" 
                      name="productOfInterest" 
                      className="w-full px-4 py-3.5 rounded-xl border-2 border-[#1E252B]/15 focus:border-[#007A78] text-sm focus:outline-hidden"
                      placeholder="e.g. AeroFold Remote Folding or Heavy Duty"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#1E252B] uppercase tracking-wider mb-2">
                    Plan Manager Name &amp; Invoicing Email (if Plan-Managed)
                  </label>
                  <input 
                    type="text" 
                    name="planManagerDetails" 
                    className="w-full px-4 py-3.5 rounded-xl border-2 border-[#1E252B]/15 focus:border-[#007A78] text-sm focus:outline-hidden"
                    placeholder="e.g. MyPlanManager (invoices@myplanmanager.com.au)"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#1E252B] uppercase tracking-wider mb-2">
                    Additional Requirements or Occupational Therapist Notes
                  </label>
                  <textarea 
                    name="message" 
                    rows={4} 
                    className="w-full px-4 py-3.5 rounded-xl border-2 border-[#1E252B]/15 focus:border-[#007A78] text-sm focus:outline-hidden"
                    placeholder="Specify delivery postcode, user weight capacity requirements, ramp needs, or OT assessment timelines..."
                  />
                </div>

                <button 
                  type="submit" 
                  className="w-full min-h-[52px] bg-[#007A78] hover:bg-[#00605E] text-white font-bold text-sm uppercase tracking-wider rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <FileText size={18} />
                  <span>Submit &amp; Generate Formal Itemised Quote</span>
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Clinical Contact Hotline */}
        <section className="py-12 bg-white container mx-auto px-4 text-center">
          <div className="max-w-xl mx-auto space-y-4">
            <h3 className="text-xl font-bold text-[#1E252B]">
              Need Immediate Assistance from an Assistive Tech Specialist?
            </h3>
            <p className="text-sm text-[#1E252B]/70">
              Our clinical consultation desk assists participants, carers, and therapists across Australia Monday to Friday.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <a 
                href={`tel:${CONTACT.phone.replace(/\s+/g, '')}`} 
                className="inline-flex items-center gap-2 bg-[#1E252B] hover:bg-black text-white px-6 py-3.5 rounded-xl font-bold text-sm uppercase tracking-wider shadow-sm"
              >
                <Phone size={18} className="text-[#007A78]" />
                <span>Call Toll-Free: {CONTACT.phone}</span>
              </a>
              <a 
                href={`mailto:${CONTACT.email}`} 
                className="inline-flex items-center gap-2 bg-[#F4F1EA] hover:bg-[#EAE4D7] text-[#1E252B] px-6 py-3.5 rounded-xl font-bold text-sm uppercase tracking-wider border border-[#1E252B]/10"
              >
                <Mail size={18} className="text-[#007A78]" />
                <span>{CONTACT.email}</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
