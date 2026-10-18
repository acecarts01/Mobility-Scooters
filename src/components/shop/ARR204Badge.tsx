import React from 'react';
import { ShieldCheck } from 'lucide-react';

export function ARR204Badge({ className = "" }: { className?: string }) {
  return (
    <div className={`bg-primary/10 border border-primary/20 rounded-xl p-4 flex gap-4 items-start ${className}`}>
      <div className="bg-primary text-white p-2 rounded-lg shrink-0">
        <ShieldCheck size={20} />
      </div>
      <div>
        <p className="text-primary font-bold text-sm mb-1 uppercase tracking-tight">ARR 204 Pedestrian Compliant</p>
        <p className="text-[10px] text-charcoal/70 leading-relaxed font-medium">
          Governed to &le; 10 km/h on level ground. Permitted for footpath, nature strip, and shopping centre use in Australia without a driver licence or road registration (Free CTP in QLD).
        </p>
      </div>
    </div>
  );
}
