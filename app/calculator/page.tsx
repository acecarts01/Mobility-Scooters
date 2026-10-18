import React from 'react';
import { SITE } from '@/src/config/site';
import Nav from '@/src/components/Nav';
import Footer from '@/src/components/Footer';
import { Calculator, ChevronRight, Info } from 'lucide-react';

export const metadata = {
  title: `Mobility Range Calculator | ${SITE.name}`,
  description: `Estimate your mobility scooter's range based on battery capacity, user weight, and terrain types. A technical tool by Lifestyle Mobility Australia.`,
  alternates: { canonical: `https://${SITE.domain}/calculator/` }
};

export default function CalculatorPage() {
  return (
    <>
      <Nav />
      <main id="main">
        <section className="bg-accent py-20">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
              <Calculator size={32} />
            </div>
            <h1 className="text-4xl font-bold mb-6 text-charcoal">Range Estimator</h1>
            <p className="text-xl text-charcoal/60 leading-relaxed">
              Calculate your expected travel distance based on real-world variables like terrain and weight.
            </p>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-2xl">
             <div className="bg-white border border-gray-100 rounded-3xl p-8 md:p-12 shadow-2xl">
               <div className="space-y-8">
                 <div>
                   <label className="block text-xs font-bold text-charcoal/40 uppercase tracking-widest mb-4">Select Battery Type</label>
                   <div className="grid grid-cols-2 gap-4">
                     <button className="p-4 rounded-xl border-2 border-primary bg-primary/5 font-bold text-primary text-center">Lithium-Ion</button>
                     <button className="p-4 rounded-xl border-2 border-gray-100 hover:border-primary transition-colors font-bold text-charcoal text-center">AGM / Lead-Acid</button>
                   </div>
                 </div>

                 <div>
                   <label className="block text-xs font-bold text-charcoal/40 uppercase tracking-widest mb-4">Total Load (User + Cargo)</label>
                   <input type="range" className="w-full h-2 bg-accent rounded-lg appearance-none cursor-pointer accent-primary" />
                   <div className="flex justify-between mt-2 font-bold text-sm text-charcoal/60">
                     <span>60kg</span>
                     <span className="text-primary">100kg</span>
                     <span>200kg</span>
                   </div>
                 </div>

                 <div>
                   <label className="block text-xs font-bold text-charcoal/40 uppercase tracking-widest mb-4">Primary Terrain</label>
                   <select className="w-full bg-accent border-none rounded-xl p-4 text-sm focus:ring-2 focus:ring-primary/20 transition-all appearance-none cursor-pointer font-bold">
                     <option>Flat Pavement (Optimal)</option>
                     <option>Gentle Gradients</option>
                     <option>Rough All-Terrain / Off-Road</option>
                     <option>Indoor / Smooth Surfaces</option>
                   </select>
                 </div>

                 <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10">
                    <div className="flex justify-between items-end mb-2">
                       <span className="text-sm font-bold text-charcoal/60">Estimated Range:</span>
                       <span className="text-4xl font-bold text-primary">24km</span>
                    </div>
                    <p className="text-[10px] text-charcoal/40 leading-tight">
                       *Estimates are based on standard testing conditions (25°C, level ground). Actual performance may vary.
                    </p>
                 </div>

                 <button className="w-full medical-gradient text-white py-5 rounded-2xl font-bold text-lg shadow-xl shadow-primary/20 hover:scale-[1.02] transition-all">
                   Save Results to PDF
                 </button>
               </div>
             </div>
             
             <div className="mt-12 flex items-start gap-4 p-6 bg-accent rounded-2xl">
                <Info size={24} className="text-primary shrink-0" />
                <p className="text-sm text-charcoal/70 leading-relaxed">
                  <strong>Technical Note:</strong> Battery range is significantly affected by the &quot;Peukert effect&quot; and depth of discharge. Our heavy-duty mobility scooter range uses matched-pair AGM batteries for consistent performance.
                </p>
             </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
