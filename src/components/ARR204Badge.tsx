import React from "react";
import { ShieldCheck } from "lucide-react";

interface ARR204BadgeProps {
  maxSpeedKmh?: number;
  compact?: boolean;
}

export function ARR204Badge({ maxSpeedKmh = 10, compact = false }: ARR204BadgeProps) {
  if (compact) {
    return (
      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-teal-50 border border-teal-200 text-[#007A78] text-[11px] font-bold">
        <ShieldCheck className="w-3.5 h-3.5 text-[#007A78] flex-shrink-0" />
        ARR 204 Pedestrian Legal (≤{maxSpeedKmh}km/h)
      </span>
    );
  }

  return (
    <div className="rounded-xl border border-teal-200 bg-teal-50/70 p-3.5 text-xs text-[#1E252B]">
      <div className="flex items-start gap-2.5">
        <ShieldCheck className="w-5 h-5 text-[#007A78] flex-shrink-0 mt-0.5" />
        <div className="space-y-1">
          <p className="font-bold text-[#007A78]">
            Australian Road Rule 204 (ARR 204) — Pedestrian Status Certified
          </p>
          <p className="text-gray-700 leading-relaxed">
            Governed to a maximum speed of <strong>{maxSpeedKmh} km/h</strong> on level ground.
            Under ARR 204, the rider is legally classified as a pedestrian, granting full access to
            footpaths, shared pedestrian walkways, nature strips, and shopping centres across all
            Australian States and Territories without a driver&apos;s licence or registration (Queensland
            offers free third-party registration).
          </p>
        </div>
      </div>
    </div>
  );
}
