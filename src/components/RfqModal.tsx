import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Send, CheckCircle2, FileText, Building, User, Mail, ShieldCheck, HardHat } from 'lucide-react';

interface RfqModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RfqModal({ isOpen, onClose }: RfqModalProps) {
  const [activeTab, setActiveTab] = useState<'rfq' | 'catalog'>('rfq');
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    alloy: 'Cast Stainless Steel (316L)',
    quantity: '1 - 5 Tons',
    timeline: 'Immediate (1-2 weeks)',
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // Reset after brief delay when closing later
    }, 500);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  const handleDownloadCatalog = () => {
    // Create a mock text file download for technical specs catalog
    const content = `MINERAX INDUSTRIAL & STEEL SOLUTIONS - TECHNICAL PRODUCT CATALOG 2026
----------------------------------------------------------------------
FOUNDRY CAPACITY: 500,000 Sq. Ft. Automated Casting Lines
QUALITY CERTIFICATIONS: ISO 9001:2015, ISO 14001, NORSOK M-650, ASME Sec VIII

FEATURED ALLOY SPECIFICATIONS:
1. Cast Stainless Steel (316L): Tensile 515 MPa, Yield 205 MPa, Max Temp 870°C
2. High Manganese Alloy Steel: Tensile 800-1000 MPa, Impact-Hardening up to 500 HBW
3. Duplex Stainless Steel (UNS S31803): PREN >= 34, Extreme Offshore Corrosion Resistance
4. Ductile Cast Iron (GJS-500-7): Tensile 500 MPa, Elongation 7%, High Vibration Damping

Contact Engineering Sales: sales@minerax-metallurgy.com | +1 (800) 555-CAST`;
    
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Minerax_Technical_Catalog_2026.txt');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative w-full max-w-2xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden z-10 text-white"
        >
          {/* Top Banner Header */}
          <div className="bg-gradient-to-r from-amber-600 via-amber-500 to-amber-700 p-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-slate-950/20 backdrop-blur-sm rounded-xl text-white">
                <HardHat size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold tracking-tight text-slate-950 uppercase font-mono">
                  Technical Sales & Engineering RFQ
                </h3>
                <p className="text-xs font-semibold text-slate-900/90">
                  Minerax Enterprise Industrial Metal Solutions
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 bg-slate-950/20 hover:bg-slate-950/40 text-slate-950 hover:text-white rounded-full transition-colors"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
          </div>

          {/* Navigation Tabs */}
          <div className="flex border-b border-slate-800 bg-slate-950/60 px-6 pt-3">
            <button
              onClick={() => setActiveTab('rfq')}
              className={`flex items-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-wider border-b-2 transition-all ${
                activeTab === 'rfq'
                  ? 'border-amber-500 text-amber-500 bg-slate-800/40'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <Send size={15} />
              <span>Submit RFQ / Quote Request</span>
            </button>

            <button
              onClick={() => setActiveTab('catalog')}
              className={`flex items-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-wider border-b-2 transition-all ${
                activeTab === 'catalog'
                  ? 'border-amber-500 text-amber-500 bg-slate-800/40'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <FileText size={15} />
              <span>Download Product Catalog</span>
            </button>
          </div>

          {/* Tab Content */}
          <div className="p-6 md:p-8">
            {activeTab === 'rfq' ? (
              submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-10 space-y-4"
                >
                  <div className="w-16 h-16 bg-amber-500/20 border-2 border-amber-500 text-amber-500 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 size={36} />
                  </div>
                  <h4 className="text-2xl font-extrabold text-white">Quotation Request Submitted!</h4>
                  <p className="text-slate-300 max-w-md mx-auto text-sm leading-relaxed">
                    Thank you, <span className="text-amber-400 font-semibold">{formData.name || 'Client'}</span>. Our senior metallurgical engineers are reviewing your specifications. We will send a formal technical response to <span className="text-amber-400 font-semibold">{formData.email || 'your email'}</span> within 2 business hours.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={handleReset}
                      className="px-6 py-2.5 bg-amber-600 hover:bg-amber-500 text-slate-950 font-bold uppercase text-xs tracking-wider rounded-lg transition-colors"
                    >
                      Done / Close Window
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold font-mono text-slate-300 uppercase tracking-wider mb-1">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User size={16} className="absolute left-3.5 top-3 text-slate-500" />
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Alexander Vance"
                          className="w-full bg-slate-950 border border-slate-700 rounded-lg pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500 transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold font-mono text-slate-300 uppercase tracking-wider mb-1">
                        Company / Enterprise *
                      </label>
                      <div className="relative">
                        <Building size={16} className="absolute left-3.5 top-3 text-slate-500" />
                        <input
                          type="text"
                          required
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="e.g. Apex Industrial Energy Corp"
                          className="w-full bg-slate-950 border border-slate-700 rounded-lg pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500 transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold font-mono text-slate-300 uppercase tracking-wider mb-1">
                        Work Email Address *
                      </label>
                      <div className="relative">
                        <Mail size={16} className="absolute left-3.5 top-3 text-slate-500" />
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="vance@apexenergy.com"
                          className="w-full bg-slate-950 border border-slate-700 rounded-lg pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500 transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold font-mono text-slate-300 uppercase tracking-wider mb-1">
                        Target Alloy / Metal Specification
                      </label>
                      <select
                        value={formData.alloy}
                        onChange={(e) => setFormData({ ...formData, alloy: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500 transition-colors"
                      >
                        <option>Cast Stainless Steel (316L)</option>
                        <option>High Manganese Alloy Steel</option>
                        <option>Duplex Stainless Steel (UNS S31803)</option>
                        <option>Ductile Cast Iron (GJS-500-7)</option>
                        <option>Custom Metallurgical Blend</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold font-mono text-slate-300 uppercase tracking-wider mb-1">
                        Estimated Volume / Batch Size
                      </label>
                      <select
                        value={formData.quantity}
                        onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500 transition-colors"
                      >
                        <option>1 - 5 Tons (Prototype / Sample Batch)</option>
                        <option>5 - 50 Tons (Medium Scale)</option>
                        <option>50 - 500+ Tons (High-Volume Enterprise)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold font-mono text-slate-300 uppercase tracking-wider mb-1">
                        Required Delivery Timeline
                      </label>
                      <select
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500 transition-colors"
                      >
                        <option>Immediate (1-2 weeks)</option>
                        <option>Standard Schedule (3-6 weeks)</option>
                        <option>Long-Term Procurement Contract</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold font-mono text-slate-300 uppercase tracking-wider mb-1">
                      Technical Specifications & Project Notes
                    </label>
                    <textarea
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Specify operating environment (PSI, max temp, corrosion criteria) or custom tolerances..."
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500 transition-colors"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between border-t border-slate-800">
                    <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                      <ShieldCheck size={16} className="text-amber-500" />
                      <span>ISO 9001:2015 & NORSOK M-650 Certified</span>
                    </div>

                    <button
                      type="submit"
                      className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold uppercase text-xs tracking-wider rounded-lg transition-all shadow-lg shadow-amber-500/20 flex items-center gap-2"
                    >
                      <Send size={16} />
                      <span>Submit Formal RFQ</span>
                    </button>
                  </div>
                </form>
              )
            ) : (
              <div className="space-y-6 py-2">
                <div className="bg-slate-950 border border-slate-800 p-5 rounded-xl space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-amber-500/10 border border-amber-500/30 text-amber-500 rounded-lg">
                        <FileText size={28} />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white">Minerax Technical Product Catalog (2026 Edition)</h4>
                        <p className="text-xs text-slate-400">Complete metallurgical properties, alloy grades, and casting tolerances</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs font-mono">
                    <div className="bg-slate-900 p-2.5 rounded border border-slate-800">
                      <span className="text-slate-400 block text-[10px]">FORMAT</span>
                      <span className="text-white font-bold">PDF / Technical Doc</span>
                    </div>
                    <div className="bg-slate-900 p-2.5 rounded border border-slate-800">
                      <span className="text-slate-400 block text-[10px]">PAGES</span>
                      <span className="text-white font-bold">48 Full Specs</span>
                    </div>
                    <div className="bg-slate-900 p-2.5 rounded border border-slate-800">
                      <span className="text-slate-400 block text-[10px]">VERIFIED BY</span>
                      <span className="text-white font-bold">ASME & ASTM</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 border-t border-slate-800">
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Clicking download will generate the complete official metallurgical specification sheet directly to your system.
                  </p>
                  <button
                    onClick={handleDownloadCatalog}
                    className="w-full sm:w-auto px-6 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold uppercase text-xs tracking-wider rounded-lg transition-all shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2"
                  >
                    <Download size={16} />
                    <span>Download Spec Sheet</span>
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
