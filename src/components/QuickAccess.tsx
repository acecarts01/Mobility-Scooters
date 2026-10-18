'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { CONTACT } from '@/src/config/site';

export default function QuickAccess() {
  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-4">
      <div className="flex flex-col gap-3">
        {/* WhatsApp Sales Desk Widget */}
        <Link
          href={`https://wa.me/${CONTACT.whatsapp.replace('+', '')}?text=Hi, I have a question about your mobility scooters.`}
          target="_blank"
          className="bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center border-4 border-white"
          aria-label="Contact Sales on WhatsApp"
        >
          <MessageCircle size={28} fill="currentColor" />
        </Link>
      </div>
    </div>
  );
}
