'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Battery, 
  Zap, 
  Thermometer, 
  Calendar, 
  Info, 
  X, 
  CheckCircle2, 
  AlertTriangle,
  RefreshCcw,
  Activity
} from 'lucide-react';

interface BatteryDashboardProps {
  trigger?: React.ReactNode;
}

export default function BatteryDashboard({ trigger }: BatteryDashboardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'agm' | 'lithium'>('agm');

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      {trigger ? (
        <div onClick={toggle}>{trigger}</div>
      ) : (
        <button 
          onClick={toggle}
          className="text-white/60 hover:text-white transition-colors text-sm font-medium flex items-center gap-2"
        >
          <Battery size={16} />
          Battery Health & Maintenance
        </button>
      )}

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggle}
              className="absolute inset-0 bg-charcoal/80 backdrop-blur-sm"
            />

            {/* Modal */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-white w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
            >
              {/* Header */}
              <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-primary text-white">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white/20 rounded-lg">
                    <Activity size={24} />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold">Battery Health Dashboard</h2>
                    <p className="text-xs text-white/70">Optimal Maintenance & Charging Guide</p>
                  </div>
                </div>
                <button 
                  onClick={toggle}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Tabs */}
              <div className="flex p-2 bg-gray-50 border-b border-gray-100">
                <button 
                  onClick={() => setActiveTab('agm')}
                  className={`flex-1 py-3 px-4 rounded-xl text-sm font-bold transition-all flex items-center justify-center gap-2 ${
                    activeTab === 'agm' 
                    ? 'bg-white text-primary shadow-sm border border-gray-100' 
                    : 'text-gray-500 hover:text-charcoal'
                  }`}
                >
                  <Battery size={16} />
                  AGM / Gel Modules
                </button>
                <button 
                  onClick={() => setActiveTab('lithium')}
                  className={`flex-1 py-3 px-4 rounded-xl text-sm font-bold transition-all flex items-center justify-center gap-2 ${
                    activeTab === 'lithium' 
                    ? 'bg-white text-primary shadow-sm border border-gray-100' 
                    : 'text-gray-500 hover:text-charcoal'
                  }`}
                >
                  <Zap size={16} />
                  Lithium (LiFePO4)
                </button>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto p-6 space-y-8">
                {/* Visual Guide / Progress */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-sand p-6 rounded-2xl border border-charcoal/5">
                    <h3 className="text-sm font-bold text-charcoal uppercase tracking-widest mb-4 flex items-center gap-2">
                      <RefreshCcw size={14} />
                      Charging Cycle
                    </h3>
                    <div className="relative h-4 bg-gray-200 rounded-full overflow-hidden mb-4">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: activeTab === 'agm' ? '50%' : '80%' }}
                        className={`absolute inset-0 ${activeTab === 'agm' ? 'bg-primary' : 'bg-secondary'}`}
                      />
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {activeTab === 'agm' 
                        ? 'AGM batteries prefer shallow discharges. Charge after every use, even short trips.' 
                        : 'Lithium supports deep cycles but performs best when kept between 20% and 80%.'}
                    </p>
                  </div>

                  <div className="bg-sand p-6 rounded-2xl border border-charcoal/5">
                    <h3 className="text-sm font-bold text-charcoal uppercase tracking-widest mb-4 flex items-center gap-2">
                      <Thermometer size={14} />
                      Temp. Guard
                    </h3>
                    <div className="flex justify-between items-center">
                      <div className="text-center">
                        <span className="text-2xl font-bold text-primary">20°C</span>
                        <p className="text-[10px] text-gray-500 uppercase">Optimal</p>
                      </div>
                      <div className="h-10 w-px bg-charcoal/10" />
                      <div className="text-center">
                        <span className="text-2xl font-bold text-red-500">{activeTab === 'agm' ? '45°C' : '60°C'}</span>
                        <p className="text-[10px] text-gray-500 uppercase">Max Risk</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Maintenance Checklist */}
                <div>
                  <h3 className="text-lg font-bold text-charcoal mb-4 flex items-center gap-2">
                    <CheckCircle2 size={20} className="text-primary" />
                    Care Protocol
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {(activeTab === 'agm' ? agmCare : lithiumCare).map((item, i) => (
                      <div key={i} className="flex gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
                        <div className="shrink-0 w-8 h-8 rounded-lg bg-white flex items-center justify-center text-primary border border-gray-100">
                          {item.icon}
                        </div>
                        <div>
                          <p className="text-sm font-bold text-charcoal">{item.title}</p>
                          <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Important Warning */}
                <div className="p-4 bg-red-50 border border-red-100 rounded-2xl flex gap-4 items-start">
                  <AlertTriangle className="text-red-500 shrink-0" size={20} />
                  <div>
                    <p className="text-sm font-bold text-red-900">Safety Warning</p>
                    <p className="text-xs text-red-700 leading-relaxed">
                      Never use a standard automotive charger on your mobility scooter. Only use the smart-regulated 24V charger supplied by Lifestyle Mobility to prevent fire risk and battery swelling.
                    </p>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="p-6 bg-gray-50 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="flex items-center gap-2">
                  <Info size={16} className="text-primary" />
                  <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">LMS-TECH-GUIDE-V1.2</span>
                </div>
                <button 
                  onClick={toggle}
                  className="w-full sm:w-auto px-8 py-3 bg-charcoal text-white rounded-xl text-sm font-bold hover:bg-charcoal/90 transition-all"
                >
                  I Understand
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

const agmCare = [
  {
    title: 'Daily Charging',
    desc: 'Charge after every use, no matter how short. AGM hates being half-empty.',
    icon: <RefreshCcw size={16} />
  },
  {
    title: '8-Hour Rule',
    desc: 'Full recharge usually takes 8-10 hours. Best charged overnight.',
    icon: <Calendar size={16} />
  },
  {
    title: 'Storage',
    desc: 'Never store empty. If not using for weeks, charge fully first.',
    icon: <Battery size={16} />
  },
  {
    title: 'Connector Care',
    desc: 'Keep the XLR port dry and free of debris to prevent arcing.',
    icon: <Info size={16} />
  }
];

const lithiumCare = [
  {
    title: 'Partial Charging',
    desc: 'Can be "topped up" any time. No memory effect issues.',
    icon: <Zap size={16} />
  },
  {
    title: 'Fast Charge',
    desc: 'Supports high-current charging. 3-5 hours for a full cycle.',
    icon: <Calendar size={16} />
  },
  {
    title: 'Weight Advantage',
    desc: 'Up to 70% lighter than AGM with 3x the cycle life.',
    icon: <Activity size={16} />
  },
  {
    title: 'Heat Sensitivity',
    desc: 'Avoid charging in direct Aussie sun or enclosed hot vehicles.',
    icon: <Thermometer size={16} />
  }
];
