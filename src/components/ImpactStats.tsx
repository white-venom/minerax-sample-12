import React from 'react';
import { Factory, ShieldCheck, Globe, Cpu } from 'lucide-react';

export default function ImpactStats() {
  const stats = [
    {
      icon: Factory,
      value: '500,000+',
      unit: 'Sq. Ft.',
      label: 'Automated Foundry Facility',
      subtext: '4 Continuous Casting Bays',
    },
    {
      icon: ShieldCheck,
      value: '99.98%',
      unit: 'Tolerance',
      label: 'Zero Micro-Porosity Standard',
      subtext: '100% X-Ray Non-Destructive Testing',
    },
    {
      icon: Globe,
      value: '45+',
      unit: 'Countries',
      label: 'Global Export Footprint',
      subtext: 'Offshore, Aerospace & Mining',
    },
    {
      icon: Cpu,
      value: '24/7',
      unit: 'AI Inspection',
      label: 'Real-Time Spectroscopy',
      subtext: 'Automated Molten Melt Control',
    },
  ];

  return (
    <section className="bg-slate-900 border-y border-slate-800 py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-slate-950/60 border border-slate-800 rounded-xl p-6 hover:border-amber-500/50 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-amber-500/10 border border-amber-500/20 text-amber-500 rounded-lg group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                    <Icon size={24} />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-500">
                    METRIC 0{idx + 1}
                  </span>
                </div>

                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-3xl lg:text-4xl font-extrabold text-white font-mono tracking-tight">
                    {item.value}
                  </span>
                  <span className="text-xs font-mono font-bold text-amber-400">{item.unit}</span>
                </div>

                <h4 className="text-sm font-bold text-slate-200 mb-1">{item.label}</h4>
                <p className="text-xs text-slate-400 font-mono">{item.subtext}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
