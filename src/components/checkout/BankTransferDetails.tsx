"use client";

import React, { useState } from 'react';
import { 
  Building, 
  Copy, 
  Check, 
  Zap, 
  ShieldCheck, 
  AlertCircle, 
  FileCheck,
  CreditCard
} from 'lucide-react';

interface BankTransferDetailsProps {
  orderTotal?: number;
  orderReference?: string;
  className?: string;
}

export function BankTransferDetails({
  orderTotal,
  orderReference = "LMS-840071",
  className = ""
}: BankTransferDetailsProps) {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const reference = orderReference;

  const bankDetails = {
    accountName: 'BUTLER TRADING PTY. LTD.',
    bankName: 'National Australia Bank (NAB)',
    bsb: '085-005',
    accountNumber: '84-008-0713',
    payId: 'sales@lifestylemobilityscooters.com.au',
    reference: reference
  };

  const copyToClipboard = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <div className={`bg-[#F4F1EA] rounded-3xl p-6 md:p-8 border-2 border-[#1E252B]/10 text-[#1E252B] space-y-6 ${className}`}>
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#1E252B]/10">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-[#007A78] text-white flex items-center justify-center shrink-0 shadow-sm">
            <Building size={24} />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-bold text-lg text-[#1E252B]">
                Direct Bank Transfer &bull; PayID / OSKO
              </h3>
              <span className="bg-[#007A78] text-white text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-md flex items-center gap-1 shadow-xs">
                <Zap size={10} /> Instant
              </span>
            </div>
            <p className="text-xs text-[#1E252B]/60 font-medium">
              Zero Card Surcharges &bull; 100% Secure Australian Banking
            </p>
          </div>
        </div>

        {orderTotal !== undefined && (
          <div className="text-left sm:text-right bg-white/70 p-3 rounded-2xl border border-[#1E252B]/10">
            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider block">Amount Payable</span>
            <span className="text-2xl font-extrabold text-[#007A78]">
              ${orderTotal.toLocaleString('en-AU', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} AUD
            </span>
            <span className="block text-[10px] font-bold text-[#007A78] uppercase">100% GST-Free (Sec 38-45)</span>
          </div>
        )}
      </div>

      {/* EFT Banking Credentials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Account Name */}
        <div className="bg-white p-4 rounded-2xl border border-[#1E252B]/10 flex items-center justify-between">
          <div>
            <span className="text-[10px] font-bold text-[#1E252B]/60 uppercase tracking-wider block">Account Name</span>
            <span className="font-bold text-sm text-[#1E252B]">{bankDetails.accountName}</span>
          </div>
          <button
            type="button"
            onClick={() => copyToClipboard(bankDetails.accountName, 'accountName')}
            className="p-2 rounded-xl hover:bg-gray-100 text-[#007A78] transition-colors focus:outline-hidden"
            aria-label="Copy Account Name"
          >
            {copiedField === 'accountName' ? <Check size={18} className="text-emerald-600" /> : <Copy size={18} />}
          </button>
        </div>

        {/* Bank & Financial Institution */}
        <div className="bg-white p-4 rounded-2xl border border-[#1E252B]/10 flex items-center justify-between">
          <div>
            <span className="text-[10px] font-bold text-[#1E252B]/60 uppercase tracking-wider block">Institution</span>
            <span className="font-bold text-sm text-[#1E252B]">{bankDetails.bankName}</span>
          </div>
          <span className="text-[10px] font-bold text-[#007A78] uppercase bg-[#007A78]/10 px-2 py-1 rounded-md">
            Australia
          </span>
        </div>

        {/* BSB Number */}
        <div className="bg-white p-4 rounded-2xl border border-[#1E252B]/10 flex items-center justify-between">
          <div>
            <span className="text-[10px] font-bold text-[#1E252B]/60 uppercase tracking-wider block">BSB Number</span>
            <span className="font-mono font-extrabold text-base text-[#1E252B]">{bankDetails.bsb}</span>
          </div>
          <button
            type="button"
            onClick={() => copyToClipboard(bankDetails.bsb, 'bsb')}
            className="p-2 rounded-xl hover:bg-gray-100 text-[#007A78] transition-colors focus:outline-hidden"
            aria-label="Copy BSB"
          >
            {copiedField === 'bsb' ? <Check size={18} className="text-emerald-600" /> : <Copy size={18} />}
          </button>
        </div>

        {/* Account Number */}
        <div className="bg-white p-4 rounded-2xl border border-[#1E252B]/10 flex items-center justify-between">
          <div>
            <span className="text-[10px] font-bold text-[#1E252B]/60 uppercase tracking-wider block">Account Number</span>
            <span className="font-mono font-extrabold text-base text-[#1E252B]">{bankDetails.accountNumber}</span>
          </div>
          <button
            type="button"
            onClick={() => copyToClipboard(bankDetails.accountNumber, 'accountNumber')}
            className="p-2 rounded-xl hover:bg-gray-100 text-[#007A78] transition-colors focus:outline-hidden"
            aria-label="Copy Account Number"
          >
            {copiedField === 'accountNumber' ? <Check size={18} className="text-emerald-600" /> : <Copy size={18} />}
          </button>
        </div>

        {/* PayID (Instant settlement across all Australian banking apps) */}
        <div className="bg-white p-4 rounded-2xl border-2 border-[#007A78] flex items-center justify-between md:col-span-2">
          <div>
            <div className="flex items-center gap-1.5 mb-0.5">
              <span className="text-[10px] font-extrabold text-[#007A78] uppercase tracking-wider">Fast PayID / OSKO</span>
              <span className="bg-emerald-100 text-emerald-800 text-[9px] font-bold px-2 py-0.2 rounded-sm">Preferred</span>
            </div>
            <span className="font-mono font-bold text-sm md:text-base text-[#1E252B] break-all">{bankDetails.payId}</span>
          </div>
          <button
            type="button"
            onClick={() => copyToClipboard(bankDetails.payId, 'payId')}
            className="p-2 rounded-xl bg-[#007A78]/10 hover:bg-[#007A78]/20 text-[#007A78] transition-colors focus:outline-hidden shrink-0 ml-2"
            aria-label="Copy PayID"
          >
            {copiedField === 'payId' ? <Check size={18} className="text-emerald-600" /> : <Copy size={18} />}
          </button>
        </div>

        {/* Mandatory Payment Reference */}
        <div className="bg-amber-50 p-4 rounded-2xl border border-amber-200 flex items-center justify-between md:col-span-2">
          <div>
            <span className="text-[10px] font-extrabold text-amber-900 uppercase tracking-wider block">
              Payment Reference (Required for automated dispatch reconciliation)
            </span>
            <span className="font-mono font-extrabold text-base text-amber-950">{bankDetails.reference}</span>
          </div>
          <button
            type="button"
            onClick={() => copyToClipboard(bankDetails.reference, 'reference')}
            className="p-2 rounded-xl bg-amber-100 hover:bg-amber-200 text-amber-900 transition-colors focus:outline-hidden"
            aria-label="Copy Payment Reference"
          >
            {copiedField === 'reference' ? <Check size={18} className="text-emerald-600" /> : <Copy size={18} />}
          </button>
        </div>
      </div>

      {/* Compliance & Dispatch Notice */}
      <div className="bg-white/80 p-4 rounded-2xl border border-[#1E252B]/10 text-xs text-[#1E252B]/80 space-y-1.5">
        <div className="flex items-center gap-2 font-bold text-[#1E252B]">
          <ShieldCheck size={16} className="text-[#007A78]" />
          <span>Statutory Tax &amp; Remittance Confirmation</span>
        </div>
        <p className="leading-relaxed">
          Goods are released for freight dispatch immediately upon PayID or OSKO cleared receipt. Formal Tax Invoices are issued with Butler Trading Pty. Ltd. ABN 84 008 071 323 and marked 100% GST-Exempt under Item 33 of Schedule 3, Section 38-45 of the GST Act 1999.
        </p>
      </div>
    </div>
  );
}

export default BankTransferDetails;
