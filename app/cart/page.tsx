'use client';

import React from 'react';
import { useCart } from '@/src/context/CartContext';
import { SITE, SHOP } from '@/src/config/site';
import Image from 'next/image';
import Link from 'next/link';
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
import { ProductImage } from '@/src/components/shop/ProductImage';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, total, itemCount } = useCart();

  const isFreeShipping = total >= SHOP.freeShippingThreshold;
  const shippingCharge = isFreeShipping ? 0 : SHOP.flatMetroFreight;

  if (itemCount === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-4">
        <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center text-primary mb-6">
          <ShoppingBag size={40} />
        </div>
        <h1 className="text-3xl font-bold mb-4">Your cart is empty</h1>
        <p className="text-charcoal/60 mb-8">It looks like you haven&apos;t added any mobility solutions yet.</p>
        <Link href="/shop/" className="medical-gradient text-white px-8 py-4 rounded-xl font-bold shadow-lg">
          Browse Mobility Scooters
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-accent/30 min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        <h1 className="text-3xl font-bold mb-8">Shopping Cart ({itemCount})</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => (
              <div key={item.slug} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex gap-6 items-center">
                <div className="w-24 h-24 relative bg-accent rounded-xl shrink-0 overflow-hidden">
                  <ProductImage 
                    productId={item.id} 
                    fallbackTitle={item.name} 
                    className="object-contain p-2"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-lg mb-1 truncate">{item.name}</h3>
                  <p className="text-primary font-bold mb-4">${item.price.toLocaleString()} AUD</p>
                  
                  <div className="flex items-center gap-4">
                    <div className="flex items-center bg-accent rounded-lg border border-gray-100 overflow-hidden">
                      <button 
                        onClick={() => updateQuantity(item.slug, item.quantity - 1)}
                        className="p-2 hover:bg-gray-200 transition-colors"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="px-4 font-bold text-sm">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.slug, item.quantity + 1)}
                        className="p-2 hover:bg-gray-200 transition-colors"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                    <button 
                      onClick={() => removeFromCart(item.slug)}
                      className="text-red-500 hover:text-red-600 transition-colors"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
                <div className="hidden sm:block text-right">
                  <p className="font-bold text-charcoal">${(item.price * item.quantity).toLocaleString()}</p>
                  <p className="text-[10px] text-charcoal/40 uppercase font-bold tracking-widest">GST-Free</p>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 sticky top-24">
              <h2 className="text-xl font-bold mb-6 pb-6 border-b border-gray-100">Order Summary</h2>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-sm">
                  <span className="text-charcoal/60">Subtotal</span>
                  <span className="font-bold">${total.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-charcoal/60">Freight & Handling</span>
                  <span className="font-bold">{isFreeShipping ? 'FREE' : `$${shippingCharge.toLocaleString()}`}</span>
                </div>
                {!isFreeShipping && (
                  <div className="bg-primary/5 p-4 rounded-xl">
                    <p className="text-[10px] font-bold text-primary uppercase tracking-widest mb-1">Free Shipping Goal</p>
                    <p className="text-xs">Add <span className="font-bold">${(SHOP.freeShippingThreshold - total).toLocaleString()}</span> more for free metro freight!</p>
                  </div>
                )}
                <div className="flex justify-between text-sm">
                  <span className="text-charcoal/60">Estimated GST</span>
                  <span className="font-bold text-primary">0% ($0.00)</span>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-100 mb-8">
                <div className="flex justify-between items-end">
                  <span className="font-bold text-lg">Total Amount</span>
                  <div className="text-right">
                    <span className="text-3xl font-bold text-primary block">${(total + shippingCharge).toLocaleString()} AUD</span>
                    <span className="text-[10px] text-charcoal/40 uppercase font-bold tracking-widest">— 0% GST / GST-FREE</span>
                  </div>
                </div>
              </div>

              <Link 
                href="/checkout/"
                className="w-full medical-gradient text-white py-5 rounded-2xl font-bold text-lg shadow-xl shadow-primary/20 hover:scale-[1.02] transition-all flex items-center justify-center gap-3 mb-4"
              >
                Proceed to Checkout <ArrowRight size={20} />
              </Link>
              
              <div className="space-y-3">
                <p className="text-[10px] text-center text-charcoal/40 uppercase tracking-widest font-bold">Safe Payment Channels</p>
                <div className="flex justify-center gap-4 opacity-50 grayscale">
                  <div className="w-8 h-8 bg-charcoal rounded-sm" title="Bank Transfer" />
                  <div className="w-8 h-8 bg-charcoal rounded-sm" title="Zip Money" />
                  <div className="w-8 h-8 bg-charcoal rounded-sm" title="PayID / EFT" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
