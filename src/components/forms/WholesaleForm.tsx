'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function WholesaleForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    const formData = new FormData(e.currentTarget);
    const data = {
      businessName: formData.get('businessName'),
      abn: formData.get('abn'),
      contactName: formData.get('contactName'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      businessType: formData.get('businessType'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/forms/wholesale', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus('success');
        router.push('/thank-you-wholesale/');
      } else {
        setStatus('error');
        setErrorMessage(typeof result.error === 'string' ? result.error : 'Validation failed.');
      }
    } catch (error) {
      console.error('Wholesale Submission Error:', error);
      setStatus('error');
      setErrorMessage('A network error occurred.');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-3xl shadow-xl">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-[10px] font-bold text-charcoal/40 uppercase tracking-widest mb-2">Business Name</label>
          <input name="businessName" type="text" className="w-full bg-accent border-none rounded-xl p-4 text-sm focus:ring-2 focus:ring-primary/20 transition-all" required />
        </div>
        <div>
          <label className="block text-[10px] font-bold text-charcoal/40 uppercase tracking-widest mb-2">ABN (Optional)</label>
          <input name="abn" type="text" className="w-full bg-accent border-none rounded-xl p-4 text-sm focus:ring-2 focus:ring-primary/20 transition-all" />
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-[10px] font-bold text-charcoal/40 uppercase tracking-widest mb-2">Contact Name</label>
          <input name="contactName" type="text" className="w-full bg-accent border-none rounded-xl p-4 text-sm focus:ring-2 focus:ring-primary/20 transition-all" required />
        </div>
        <div>
          <label className="block text-[10px] font-bold text-charcoal/40 uppercase tracking-widest mb-2">Phone Number</label>
          <input name="phone" type="tel" className="w-full bg-accent border-none rounded-xl p-4 text-sm focus:ring-2 focus:ring-primary/20 transition-all" required />
        </div>
      </div>
      <div>
        <label className="block text-[10px] font-bold text-charcoal/40 uppercase tracking-widest mb-2">Email Address</label>
        <input name="email" type="email" className="w-full bg-accent border-none rounded-xl p-4 text-sm focus:ring-2 focus:ring-primary/20 transition-all" required />
      </div>
      <div>
        <label className="block text-[10px] font-bold text-charcoal/40 uppercase tracking-widest mb-2">Business Type</label>
        <select name="businessType" className="w-full bg-accent border-none rounded-xl p-4 text-sm focus:ring-2 focus:ring-primary/20 transition-all appearance-none cursor-pointer">
          <option>Medical Clinic</option>
          <option>Aged Care Facility</option>
          <option>Occupational Therapist</option>
          <option>Retail Store</option>
          <option>Other</option>
        </select>
      </div>
      <div>
        <label className="block text-[10px] font-bold text-charcoal/40 uppercase tracking-widest mb-2">Additional Information</label>
        <textarea name="message" rows={4} className="w-full bg-accent border-none rounded-xl p-4 text-sm focus:ring-2 focus:ring-primary/20 transition-all resize-none"></textarea>
      </div>

      {status === 'error' && (
        <div className="p-4 bg-red-50 text-red-600 text-sm rounded-xl border border-red-100">
          {errorMessage}
        </div>
      )}

      <button 
        type="submit" 
        disabled={status === 'submitting'}
        className="w-full medical-gradient text-white py-5 rounded-2xl font-bold text-lg shadow-xl shadow-primary/20 hover:scale-[1.02] transition-all disabled:opacity-50"
      >
        {status === 'submitting' ? 'Submitting...' : 'Apply for Wholesale Account'}
      </button>
    </form>
  );
}
