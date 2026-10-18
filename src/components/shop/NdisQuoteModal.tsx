"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  FileText, 
  ShieldCheck, 
  Download, 
  Printer, 
  CheckCircle2, 
  Building, 
  Mail, 
  Phone,
  User,
  CreditCard
} from 'lucide-react';
import { Product } from '@/src/lib/catalog';

interface NdisQuoteModalProps {
  product?: Product;
  isOpen: boolean;
  onClose: () => void;
}

export function NdisQuoteModal({ product, isOpen, onClose }: NdisQuoteModalProps) {
  const [participantName, setParticipantName] = useState('');
  const [ndisNumber, setNdisNumber] = useState('');
  const [planType, setPlanType] = useState<'plan_managed' | 'self_managed' | 'ndia_managed'>('plan_managed');
  const [planManagerEmail, setPlanManagerEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [quoteReference, setQuoteReference] = useState('NDIS-840071');
  const [today, setToday] = useState('18 Oct 2026');

  // Close on Escape key and lock body scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);
    setQuoteReference(`NDIS-${Date.now().toString().slice(-6)}`);
    setToday(new Date().toLocaleDateString('en-AU', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    }));
    setTimeout(() => {
      setIsGenerating(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <AnimatePresence>
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="ndis-modal-title"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.2 }}
          className="bg-white rounded-3xl max-w-2xl w-full p-6 md:p-8 shadow-2xl border-2 border-[#1E252B]/10 max-h-[90vh] flex flex-col relative my-8"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-gray-100 shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#007A78] text-white flex items-center justify-center">
                <FileText size={20} />
              </div>
              <div>
                <h3 id="ndis-modal-title" className="text-xl font-bold text-[#1E252B]">
                  NDIS Proforma Quote Generator
                </h3>
                <p className="text-xs text-[#1E252B]/60 font-semibold uppercase tracking-wider">
                  Butler Trading Pty. Ltd. &bull; ABN 84 008 071 323
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-xl bg-gray-100 hover:bg-gray-200 text-[#1E252B] flex items-center justify-center transition-colors focus:outline-hidden"
              aria-label="Close NDIS Quote Modal"
            >
              <X size={18} />
            </button>
          </div>

          {/* Body Content */}
          <div className="overflow-y-auto flex-1 py-4 pr-1 space-y-5">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                {product && (
                  <div className="bg-[#F4F1EA] p-4 rounded-2xl border border-[#1E252B]/10 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-bold text-[#007A78] uppercase tracking-wider block">
                        Selected Assistive Device
                      </span>
                      <h4 className="font-bold text-[#1E252B] text-sm md:text-base">
                        {product.name}
                      </h4>
                      <p className="text-xs text-[#1E252B]/60">
                        SKU: {product.sku} &bull; ARR 204 Pedestrian Compliant
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="text-lg font-bold text-[#007A78]">
                        ${product.price.toLocaleString('en-AU', { minimumFractionDigits: 2 })} AUD
                      </span>
                      <span className="block text-[10px] font-bold text-[#007A78] uppercase">
                        GST-Free (0% GST)
                      </span>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#1E252B] uppercase tracking-wider mb-1.5">
                      Participant Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={participantName}
                      onChange={(e) => setParticipantName(e.target.value)}
                      placeholder="e.g. John Smith"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm focus:border-[#007A78] focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#1E252B] uppercase tracking-wider mb-1.5">
                      NDIS Participant Number *
                    </label>
                    <input
                      type="text"
                      required
                      value={ndisNumber}
                      onChange={(e) => setNdisNumber(e.target.value)}
                      placeholder="e.g. 430 123 456"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm focus:border-[#007A78] focus:outline-hidden"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#1E252B] uppercase tracking-wider mb-1.5">
                      Funding Management *
                    </label>
                    <select
                      value={planType}
                      onChange={(e) => setPlanType(e.target.value as any)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm focus:border-[#007A78] focus:outline-hidden bg-white"
                    >
                      <option value="plan_managed">Plan-Managed (Direct Invoice)</option>
                      <option value="self_managed">Self-Managed (Participant Portal)</option>
                      <option value="ndia_managed">NDIA Agency-Managed</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#1E252B] uppercase tracking-wider mb-1.5">
                      Plan Manager Email (if applicable)
                    </label>
                    <input
                      type="email"
                      value={planManagerEmail}
                      onChange={(e) => setPlanManagerEmail(e.target.value)}
                      placeholder="invoices@planmanager.com.au"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm focus:border-[#007A78] focus:outline-hidden"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#1E252B] uppercase tracking-wider mb-1.5">
                      Contact Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="participant@email.com.au"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm focus:border-[#007A78] focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#1E252B] uppercase tracking-wider mb-1.5">
                      Contact Phone *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="0400 000 000"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm focus:border-[#007A78] focus:outline-hidden"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#1E252B] uppercase tracking-wider mb-1.5">
                    Occupational Therapist (OT) Notes or Accessories Required
                  </label>
                  <textarea
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Specify delivery postcode, ramp or hoist requirements, canopy needs, or assessment deadlines..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm focus:border-[#007A78] focus:outline-hidden"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isGenerating}
                  className="w-full min-h-[48px] bg-[#007A78] hover:bg-[#00605E] text-white font-bold text-sm uppercase tracking-wider rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <FileText size={18} />
                  <span>{isGenerating ? 'Generating Proforma Quote...' : 'Generate Official NDIS Proforma Quote'}</span>
                </button>
              </form>
            ) : (
              /* Generated Proforma Document View */
              <div className="space-y-4 print:p-0">
                <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-3.5 rounded-2xl flex items-center gap-2.5 text-xs font-semibold">
                  <CheckCircle2 size={18} className="text-emerald-600 shrink-0" />
                  <span>Proforma Quote #{quoteReference} generated successfully. Ready for submission to Plan Manager or NDIA.</span>
                </div>

                {/* Printable Document Box */}
                <div className="bg-white p-6 rounded-2xl border-2 border-gray-200 space-y-4 text-xs text-[#1E252B] shadow-inner font-sans">
                  <div className="flex justify-between items-start border-b border-gray-200 pb-4">
                    <div>
                      <h4 className="text-base font-bold text-[#1E252B]">BUTLER TRADING PTY. LTD.</h4>
                      <p className="text-gray-500">Trading as Lifestyle Mobility Scooters Australia</p>
                      <p className="text-gray-500">ABN: 84 008 071 323 | ACN: 008 071 323</p>
                      <p className="text-gray-500">3 Shepley Ave, Panorama SA 5041</p>
                      <p className="text-gray-500">Phone: 1800 703 244 | Email: sales@lifestylemobilityscooters.com.au</p>
                    </div>
                    <div className="text-right">
                      <span className="inline-block bg-[#007A78] text-white px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider">
                        NDIS PROFORMA QUOTE
                      </span>
                      <p className="font-mono font-bold text-gray-800 mt-1">Ref: {quoteReference}</p>
                      <p className="text-gray-500">Date: {today}</p>
                      <p className="text-gray-500">Valid: 60 Days</p>
                    </div>
                  </div>

                  {/* Participant Information */}
                  <div className="grid grid-cols-2 gap-4 bg-gray-50 p-3 rounded-xl border border-gray-100">
                    <div>
                      <span className="font-bold text-gray-500 uppercase block text-[9px]">Participant:</span>
                      <p className="font-bold text-sm text-[#1E252B]">{participantName || 'N/A'}</p>
                      <p className="text-gray-600">NDIS #: {ndisNumber || 'N/A'}</p>
                    </div>
                    <div>
                      <span className="font-bold text-gray-500 uppercase block text-[9px]">Plan Funding Mode:</span>
                      <p className="font-bold text-gray-800 uppercase">{planType.replace('_', ' ')}</p>
                      {planManagerEmail && <p className="text-gray-600">Plan Manager: {planManagerEmail}</p>}
                    </div>
                  </div>

                  {/* Line Item Table */}
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b-2 border-gray-200 text-left text-[10px] uppercase text-gray-500 font-bold">
                        <th className="py-2">Item Description &amp; Support Code</th>
                        <th className="py-2 text-center">Qty</th>
                        <th className="py-2 text-right">GST</th>
                        <th className="py-2 text-right">Total (AUD)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      <tr>
                        <td className="py-3">
                          <p className="font-bold">{product?.name || 'Assistive Electric Mobility Scooter'}</p>
                          <p className="text-gray-500 text-[10px]">
                            SKU: {product?.sku || 'LMS-CUSTOM'} &bull; ARR 204 Pedestrian Compliant (&le; 10km/h)
                          </p>
                          <p className="text-[#007A78] text-[9px] font-semibold">
                            NDIS Support Item: 05_122203121_0105_1_2 (Assistive Products for Personal Mobility)
                          </p>
                        </td>
                        <td className="py-3 text-center font-bold">1</td>
                        <td className="py-3 text-right font-bold text-emerald-700">$0.00 (GST-Free)</td>
                        <td className="py-3 text-right font-bold text-base text-[#007A78]">
                          ${product?.price.toLocaleString('en-AU', { minimumFractionDigits: 2 }) || '0.00'}
                        </td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr className="border-t-2 border-gray-200">
                        <td colSpan={2} className="py-2 font-bold text-gray-600">
                          Total Amount (GST-Free under Sec 38-45 GST Act 1999):
                        </td>
                        <td colSpan={2} className="py-2 text-right font-bold text-lg text-[#007A78]">
                          ${product?.price.toLocaleString('en-AU', { minimumFractionDigits: 2 }) || '0.00'} AUD
                        </td>
                      </tr>
                    </tfoot>
                  </table>

                  {/* Payment Remittance */}
                  <div className="border-t border-gray-100 pt-3 text-[10px] text-gray-600 leading-relaxed">
                    <p className="font-bold text-gray-800 mb-1">Direct Settlement &amp; Bank Details for Plan Managers:</p>
                    <p>Bank: National Australia Bank &bull; BSB: <strong>085-005</strong> &bull; Account: <strong>84-008-0713</strong></p>
                    <p>Account Name: <strong>BUTLER TRADING PTY. LTD.</strong> &bull; PayID: <strong>sales@lifestylemobilityscooters.com.au</strong></p>
                    <p className="mt-1">Please quote Reference: <strong>{quoteReference}</strong> upon disbursement.</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button
                    onClick={handlePrint}
                    className="flex-1 min-h-[46px] bg-[#1E252B] hover:bg-black text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Printer size={16} />
                    <span>Print or Save PDF</span>
                  </button>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-5 min-h-[46px] bg-gray-100 hover:bg-gray-200 text-[#1E252B] font-bold text-xs uppercase tracking-wider rounded-xl transition-all"
                  >
                    Edit Details
                  </button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

export default NdisQuoteModal;
