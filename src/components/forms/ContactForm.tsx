'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      subject: formData.get('subject'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/forms/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus('success');
        router.push('/thank-you-contact/');
      } else {
        setStatus('error');
        setErrorMessage(typeof result.error === 'string' ? result.error : 'Validation failed. Please check your inputs.');
      }
    } catch (error) {
      console.error('Form Submission Error:', error);
      setStatus('error');
      setErrorMessage('A network error occurred. Please try again or call us directly.');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-[10px] font-bold text-charcoal/40 uppercase tracking-widest mb-2">Your Name</label>
          <input 
            name="name"
            type="text" 
            className="w-full bg-accent border-none rounded-xl p-4 text-sm focus:ring-2 focus:ring-primary/20 transition-all" 
            required 
            disabled={status === 'submitting'}
          />
        </div>
        <div>
          <label className="block text-[10px] font-bold text-charcoal/40 uppercase tracking-widest mb-2">Phone Number</label>
          <input 
            name="phone"
            type="tel" 
            className="w-full bg-accent border-none rounded-xl p-4 text-sm focus:ring-2 focus:ring-primary/20 transition-all" 
            required 
            disabled={status === 'submitting'}
          />
        </div>
      </div>
      <div>
        <label className="block text-[10px] font-bold text-charcoal/40 uppercase tracking-widest mb-2">Email Address</label>
        <input 
          name="email"
          type="email" 
          className="w-full bg-accent border-none rounded-xl p-4 text-sm focus:ring-2 focus:ring-primary/20 transition-all" 
          required 
          disabled={status === 'submitting'}
        />
      </div>
      <div>
        <label className="block text-[10px] font-bold text-charcoal/40 uppercase tracking-widest mb-2">I am interested in...</label>
        <select 
          name="subject"
          className="w-full bg-accent border-none rounded-xl p-4 text-sm focus:ring-2 focus:ring-primary/20 transition-all appearance-none cursor-pointer"
          disabled={status === 'submitting'}
        >
          <option>Folding Mobility Scooters</option>
          <option>All-Terrain Mobility Scooters</option>
          <option>Heavy-Duty Mobility Scooters</option>
          <option>Wholesale/B2B Account</option>
          <option>General Support</option>
        </select>
      </div>
      <div>
        <label className="block text-[10px] font-bold text-charcoal/40 uppercase tracking-widest mb-2">How can we help?</label>
        <textarea 
          name="message"
          rows={4} 
          className="w-full bg-accent border-none rounded-xl p-4 text-sm focus:ring-2 focus:ring-primary/20 transition-all resize-none" 
          required
          disabled={status === 'submitting'}
        ></textarea>
      </div>
      
      {status === 'error' && (
        <div className="p-4 bg-red-50 text-red-600 text-sm rounded-xl border border-red-100">
          {errorMessage}
        </div>
      )}

      <button 
        type="submit" 
        disabled={status === 'submitting'}
        className="w-full medical-gradient text-white py-5 rounded-2xl font-bold text-lg shadow-xl shadow-primary/20 hover:scale-[1.02] transition-all disabled:opacity-50 disabled:hover:scale-100"
      >
        {status === 'submitting' ? 'Sending...' : 'Send My Inquiry'}
      </button>
    </form>
  );
}
