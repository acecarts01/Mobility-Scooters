import React from 'react';
import { SITE } from '@/src/config/site';
import Nav from '@/src/components/Nav';
import Footer from '@/src/components/Footer';
import { CheckCircle2 as Check, HelpCircle as Help, ChevronRight as Right } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: `Scooter Selection Quiz | ${SITE.name}`,
  description: `Find the perfect mobility solution in 2 minutes. Our clinical selection quiz helps you choose between folding, heavy-duty, and everyday mobility scooters.`,
  alternates: { canonical: `https://${SITE.domain}/quiz/` }
};

export default function QuizPage() {
  return (
    <>
      <Nav />
      <main id="main">
        <section className="bg-accent py-20">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-charcoal">Find Your Perfect <span className="text-primary">Match</span></h1>
            <p className="text-xl text-charcoal/60 leading-relaxed">
              Answer 4 simple questions about your lifestyle, and our Adelaide specialists will recommend the ideal machine.
            </p>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-3xl">
             <div className="bg-white border border-gray-100 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
               {/* Progress bar */}
               <div className="absolute top-0 left-0 right-0 h-2 bg-accent">
                 <div className="w-1/4 h-full medical-gradient" />
               </div>

               <div className="space-y-12">
                 <div>
                   <span className="text-primary font-bold text-xs uppercase tracking-widest mb-4 block">Question 1 of 4</span>
                   <h2 className="text-2xl font-bold text-charcoal mb-8">What is your primary use case?</h2>
                   <div className="grid gap-4">
                     {[
                       { title: "Travel & Car Boots", desc: "I need something lightweight and portable for shopping and holidays." },
                       { title: "Daily Local Errands", desc: "Mainly for use on footpaths and visiting local shops." },
                       { title: "Rough Terrain / Regional", desc: "I need to navigate unsealed paths or steep gradients." },
                       { title: "Maximum Comfort / Bariatric", desc: "Priority is seating comfort and high weight capacity." }
                     ].map((opt, i) => (
                       <button key={i} className="group p-6 rounded-2xl border-2 border-gray-100 hover:border-primary hover:bg-primary/5 transition-all text-left flex items-center justify-between">
                         <div>
                           <h3 className="font-bold text-charcoal group-hover:text-primary transition-colors">{opt.title}</h3>
                           <p className="text-sm text-charcoal/60">{opt.desc}</p>
                         </div>
                         <Right size={20} className="text-gray-300 group-hover:text-primary transition-colors" />
                       </button>
                     ))}
                   </div>
                 </div>
                 
                 <div className="flex items-center justify-between pt-8 border-t border-gray-100">
                    <span className="text-sm font-bold text-charcoal/40">Clinical Selection Assistant v1.2</span>
                    <div className="flex gap-4">
                       <button className="px-6 py-3 rounded-xl font-bold text-charcoal/60">Skip</button>
                       <button className="bg-primary text-white px-8 py-3 rounded-xl font-bold flex items-center gap-2">Next <Right size={18} /></button>
                    </div>
                 </div>
               </div>
             </div>
             
             <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { title: "Expert Vetted", text: "Results based on 40 years of medical experience." },
                  { title: "100% Free", text: "No obligation clinical recommendation." },
                  { title: "Instant Match", text: "See your top 3 recommended models immediately." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <Check className="text-primary shrink-0" size={20} />
                    <div>
                      <h4 className="font-bold text-sm">{item.title}</h4>
                      <p className="text-xs text-charcoal/60 leading-tight">{item.text}</p>
                    </div>
                  </div>
                ))}
             </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
