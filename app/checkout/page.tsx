'use client';

import React, { useState, useEffect } from 'react';
import { useCart } from '@/src/context/CartContext';
import { SITE, SHOP, CONTACT } from '@/src/config/site';
import { useRouter } from 'next/navigation';
import { ShieldCheck, Truck, CreditCard, FileText, Smartphone, ArrowLeft, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function CheckoutPage() {
  const { cart, total, clearCart } = useCart();
  const [orderRef, setOrderRef] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [paymentMethod, setPaymentMethod] = useState('bank-transfer');
  const router = useRouter();

  useEffect(() => {
    // Generate 6-digit order reference
    const ref = `LMS-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderRef(ref); // eslint-disable-line react-hooks/set-state-in-effect
  }, []);

  const isFreeShipping = total >= SHOP.freeShippingThreshold;
  const shippingCharge = isFreeShipping ? 0 : SHOP.flatMetroFreight;
  const finalTotal = total + shippingCharge;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');

    const formData = new FormData(e.currentTarget);
    const data = {
      customerName: formData.get('fullName'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      address: formData.get('address'),
      city: formData.get('city'),
      state: formData.get('state'),
      postcode: formData.get('postcode'),
      items: cart,
      total: finalTotal,
      paymentMethod,
      orderReference: orderRef,
      notes: formData.get('notes'),
    };

    try {
      const response = await fetch('/api/forms/order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus('success');
        clearCart();
        // Redirect or show success details
      } else {
        alert('Failed to process order. Please try again or contact support.');
        setStatus('idle');
      }
    } catch (error) {
      console.error('Checkout Error:', error);
      alert('A network error occurred.');
      setStatus('idle');
    }
  }

  if (status === 'success') {
    return (
      <div className="min-h-screen bg-white py-24 flex flex-col items-center justify-center p-4 text-center">
        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-8">
          <CheckCircle2 size={48} />
        </div>
        <h1 className="text-4xl font-bold mb-4">Order Received!</h1>
        <p className="text-xl text-charcoal/60 mb-2">Your Order Reference: <span className="text-primary font-bold">{orderRef}</span></p>
        <p className="text-charcoal/60 mb-12 max-w-lg">We have received your order request. Our Adelaide team will contact you shortly to confirm stock and delivery timelines.</p>
        
        <div className="bg-accent p-8 rounded-3xl max-w-2xl w-full text-left mb-12">
          {paymentMethod === 'bank-transfer' && (
            <>
              <h3 className="font-bold text-xl mb-4">Direct Bank Transfer Instructions</h3>
              <p className="text-sm mb-6">Please transfer the total amount to the account below using your Order Reference <span className="font-bold">{orderRef}</span> as the description.</p>
              <div className="space-y-3 bg-white p-6 rounded-xl border border-gray-100">
                <div className="flex justify-between border-b pb-2"><span className="text-charcoal/40 text-[10px] uppercase font-bold">Account Name</span> <span className="font-bold">BUTLER TRADING PTY. LTD.</span></div>
                <div className="flex justify-between border-b pb-2"><span className="text-charcoal/40 text-[10px] uppercase font-bold">BSB</span> <span className="font-bold">065-151</span></div>
                <div className="flex justify-between border-b pb-2"><span className="text-charcoal/40 text-[10px] uppercase font-bold">Account No</span> <span className="font-bold">1234 5678</span></div>
                <div className="flex justify-between"><span className="text-charcoal/40 text-[10px] uppercase font-bold">Bank</span> <span className="font-bold">Commonwealth Bank Australia</span></div>
              </div>
            </>
          )}
        </div>

        <Link href="/" className="bg-charcoal text-white px-10 py-4 rounded-xl font-bold">
          Return to Homepage
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-accent/30 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <Link href="/cart/" className="inline-flex items-center gap-2 text-charcoal/60 font-bold mb-8 hover:text-primary transition-colors">
          <ArrowLeft size={18} /> Back to Cart
        </Link>

        <form onSubmit={handleSubmit} className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Main Info */}
          <div className="lg:col-span-2 space-y-12">
            {/* Shipping Info */}
            <section className="bg-white p-8 md:p-12 rounded-3xl shadow-xl">
              <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <Truck className="text-primary" /> Delivery Information
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label className="block text-[10px] font-bold text-charcoal/40 uppercase tracking-widest mb-2">Full Name</label>
                  <input name="fullName" type="text" className="w-full bg-accent border-none rounded-xl p-4 text-sm focus:ring-2 focus:ring-primary/20 transition-all" required />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-charcoal/40 uppercase tracking-widest mb-2">Email Address</label>
                  <input name="email" type="email" className="w-full bg-accent border-none rounded-xl p-4 text-sm focus:ring-2 focus:ring-primary/20 transition-all" required />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-charcoal/40 uppercase tracking-widest mb-2">Phone Number</label>
                  <input name="phone" type="tel" className="w-full bg-accent border-none rounded-xl p-4 text-sm focus:ring-2 focus:ring-primary/20 transition-all" required />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-[10px] font-bold text-charcoal/40 uppercase tracking-widest mb-2">Street Address</label>
                  <input name="address" type="text" className="w-full bg-accent border-none rounded-xl p-4 text-sm focus:ring-2 focus:ring-primary/20 transition-all" required />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-charcoal/40 uppercase tracking-widest mb-2">City / Suburb</label>
                  <input name="city" type="text" className="w-full bg-accent border-none rounded-xl p-4 text-sm focus:ring-2 focus:ring-primary/20 transition-all" required />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold text-charcoal/40 uppercase tracking-widest mb-2">State</label>
                    <select name="state" className="w-full bg-accent border-none rounded-xl p-4 text-sm focus:ring-2 focus:ring-primary/20 transition-all appearance-none">
                      <option>SA</option><option>NSW</option><option>VIC</option><option>QLD</option><option>WA</option><option>TAS</option><option>ACT</option><option>NT</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-charcoal/40 uppercase tracking-widest mb-2">Postcode</label>
                    <input name="postcode" type="text" className="w-full bg-accent border-none rounded-xl p-4 text-sm focus:ring-2 focus:ring-primary/20 transition-all" required />
                  </div>
                </div>
              </div>
            </section>

            {/* Payment Method */}
            <section className="bg-white p-8 md:p-12 rounded-3xl shadow-xl">
              <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <CreditCard className="text-primary" /> Select Payment Channel
              </h2>
              <div className="space-y-4">
                {[
                  { id: 'bank-transfer', name: 'Direct Bank Transfer (EFT / PayID)', icon: <Smartphone className="text-primary" />, desc: 'Osko / PayID / Bank Transfer. Zero surcharges, 100% GST-free.' },
                  { id: 'bnpl', name: 'Buy Now Pay Later (Zip / Afterpay)', icon: <CreditCard className="text-primary" />, desc: 'Flexible payment options with interest-free installment plans.' },
                ].map((method) => (
                  <div 
                    key={method.id}
                    onClick={() => setPaymentMethod(method.id)}
                    className={`p-6 rounded-2xl border-2 cursor-pointer transition-all flex gap-4 ${paymentMethod === method.id ? 'border-primary bg-primary/5' : 'border-gray-100 bg-white hover:border-gray-200'}`}
                  >
                    <div className="shrink-0">{method.icon}</div>
                    <div>
                      <p className="font-bold">{method.name}</p>
                      <p className="text-xs text-charcoal/60 leading-tight">{method.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-charcoal text-white p-8 rounded-3xl shadow-2xl">
              <h2 className="text-xl font-bold mb-6 border-b border-white/10 pb-6">Your Order</h2>
              <div className="space-y-4 mb-8">
                {cart.map(item => (
                  <div key={item.slug} className="flex justify-between items-center gap-4">
                    <span className="text-xs font-medium flex-1 truncate">{item.quantity}x {item.name}</span>
                    <span className="font-bold text-sm">${(item.price * item.quantity).toLocaleString()}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-4 border-t border-white/10 pt-6 mb-8">
                <div className="flex justify-between text-xs text-white/60">
                  <span>Subtotal</span>
                  <span>${total.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-xs text-white/60">
                  <span>Shipping</span>
                  <span>{isFreeShipping ? 'FREE' : `$${shippingCharge.toLocaleString()}`}</span>
                </div>
                <div className="flex justify-between text-lg font-bold">
                  <span>Total Payable</span>
                    <span className="flex items-center gap-2 text-primary-light">
                      <span className="text-2xl">${finalTotal.toLocaleString()}</span>
                      <span className="text-sm">AUD</span>
                    </span>
                    <span className="text-[8px] uppercase tracking-widest block opacity-50">— 0% GST / GST-FREE</span>
                </div>
              </div>

              <div className="p-4 bg-white/5 rounded-2xl mb-8 border border-white/5">
                <p className="text-[10px] text-white/40 uppercase font-bold tracking-widest mb-1 text-center">Order Reference</p>
                <p className="text-2xl font-bold text-center text-primary-light">{orderRef}</p>
              </div>

              <button 
                type="submit"
                disabled={status === 'submitting'}
                className="w-full medical-gradient text-white py-5 rounded-2xl font-bold text-lg shadow-xl hover:scale-[1.02] transition-all disabled:opacity-50"
              >
                {status === 'submitting' ? 'Confirming Order...' : 'Confirm Order Request'}
              </button>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 space-y-4">
              <div className="flex gap-3">
                 <ShieldCheck className="text-primary shrink-0" size={18} />
                 <p className="text-[10px] font-bold uppercase text-charcoal/60 leading-tight">GST-Free Medical Device Exemption applied per Sec 38-45 GST Act 1999.</p>
              </div>
              <div className="flex gap-3">
                 <CheckCircle2 className="text-primary shrink-0" size={18} />
                 <p className="text-[10px] font-bold uppercase text-charcoal/60 leading-tight">Butler Trading Pty. Ltd. (Est. 1985) is a verified Australian family business.</p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
