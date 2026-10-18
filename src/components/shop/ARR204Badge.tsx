import React from 'react';
import { ShieldCheck, CheckCircle2, AlertCircle } from 'lucide-react';

interface ARR204BadgeProps {
  maxSpeedKmh?: number;
  className?: string;
  variant?: 'compact' | 'detailed';
}

/**
 * ARR 204 Compliance Callout Component
 * Documents Australian Road Rule 204 (ARR 204) statutory framework:
 * - Electric mobility scooters governed to <= 10 km/h on level ground are classified as pedestrians.
 * - Legal access to pedestrian footpaths, nature strips, shopping precincts, and shared paths.
 * - Zero driver license, motor vehicle registration, or road tax required across all Australian states.
 * - Free CTP insurance registration provided by Queensland Department of Transport and Main Roads.
 */
export function ARR204Badge({ 
  maxSpeedKmh = 10, 
  className = "",
  variant = "detailed"
}: ARR204BadgeProps) {
  if (variant === 'compact') {
    return (
      <div className={`inline-flex items-center gap-2 bg-[#007A78]/10 text-[#007A78] px-3.5 py-1.5 rounded-xl border border-[#007A78]/25 text-xs font-bold uppercase tracking-wider ${className}`}>
        <ShieldCheck size={16} className="text-[#007A78] shrink-0" />
        <span>ARR 204 Pedestrian Compliant (&le; {maxSpeedKmh} km/h)</span>
      </div>
    );
  }

  return (
    <div 
      className={`bg-[#F4F1EA] border-2 border-[#007A78]/20 rounded-2xl p-5 md:p-6 text-[#1E252B] shadow-xs relative overflow-hidden ${className}`}
      role="region"
      aria-label="Australian Road Rule 204 Compliance Notice"
    >
      <div className="flex flex-col sm:flex-row gap-4 items-start">
        <div className="w-12 h-12 rounded-xl bg-[#007A78] text-white flex items-center justify-center shrink-0 shadow-sm">
          <ShieldCheck size={26} aria-hidden="true" />
        </div>

        <div className="flex-1 space-y-2">
          <div className="flex flex-wrap items-center gap-2">
            <span className="bg-[#007A78] text-white text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-0.5 rounded-md">
              Statutory Standard
            </span>
            <h4 className="text-[#1E252B] font-bold text-base md:text-lg tracking-tight">
              Australian Road Rule 204: Pedestrian Legal Status
            </h4>
          </div>

          <p className="text-sm md:text-base text-[#1E252B]/85 leading-relaxed font-normal">
            Under <strong>Australian Road Rule 204 (ARR 204)</strong>, motorized mobility devices with a governed maximum speed capability not exceeding <strong>10 km/h</strong> on level ground are legally classified as pedestrians across all Australian States and Territories.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 text-xs md:text-sm font-medium text-[#1E252B]/90">
            <div className="flex items-start gap-2 bg-white/70 p-2.5 rounded-xl border border-[#1E252B]/10">
              <CheckCircle2 size={16} className="text-[#007A78] shrink-0 mt-0.5" />
              <span><strong>Footpath & Precinct Access:</strong> Full legal right-of-way on pedestrian footpaths, nature strips, and shopping malls.</span>
            </div>
            <div className="flex items-start gap-2 bg-white/70 p-2.5 rounded-xl border border-[#1E252B]/10">
              <CheckCircle2 size={16} className="text-[#007A78] shrink-0 mt-0.5" />
              <span><strong>Exemption from Licensing:</strong> No driver licence, driving test, or motor vehicle road registration required.</span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-[11px] text-[#1E252B]/70 pt-1 border-t border-[#1E252B]/10 mt-2">
            <AlertCircle size={14} className="text-[#007A78] shrink-0" />
            <span>Queensland Residents: Free Class 15 Compulsory Third Party (CTP) registration is provided without fee via QLD TMR.</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ARR204Badge;
