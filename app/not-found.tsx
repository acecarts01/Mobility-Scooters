'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { SITE } from '@/src/config/site';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-accent/30 flex flex-col items-center justify-center p-4 text-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white p-12 rounded-3xl shadow-xl max-w-md w-full"
      >
        <div className="text-primary font-bold text-6xl mb-6">404</div>
        <h1 className="text-3xl font-bold text-charcoal mb-4">Page Not Found</h1>
        <p className="text-charcoal/60 mb-8">
          The mobility solution you are looking for might have moved or is no longer available.
        </p>
        <Link 
          href="/" 
          className="medical-gradient text-white px-8 py-4 rounded-xl font-bold text-lg inline-block w-full"
        >
          Return to Home
        </Link>
      </motion.div>
    </div>
  );
}
