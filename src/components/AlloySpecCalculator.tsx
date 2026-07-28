import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sliders, ShieldAlert, Thermometer, Gauge, Sparkles, Check } from 'lucide-react';

interface AlloyData {
  id: string;
  name: string;
  grade: string;
  tensileStrength: number; // MPa
  yieldStrength: number; // MPa
  maxTemp: number; // °C
  corrosionRating: 'High' | 'Extreme' | 'Moderate' | 'Superior';
  density: string;
  applications: string[];
  description: string;
}

const alloys: AlloyData[] = [
  {
    id: '316l',
    name: 'Cast Stainless Steel',
    grade: 'ASTM A351 CF8M / 316L',
    tensileStrength: 515,
    yieldStrength: 205,
    maxTemp: 870,
    corrosionRating: 'Superior',
    density: '8.0 g/cm³',
    applications: ['Turbine Housings', 'Chemical Pumps', 'Aerospace Components'],
    description: 'High-purity austenitic stainless steel engineered for aggressive chemical and thermal environments.',
  },
  {
    id: 'manganese',
    name: 'High Manganese Alloy Steel',
    grade: 'Hadfield Manganese (12-14% Mn)',
    tensileStrength: 950,
    yieldStrength: 380,
    maxTemp: 300,
    corrosionRating: 'Moderate',
    density: '7.8 g/cm³',
    applications: ['Mining Excavator Lips', 'Crusher Jaws', 'Railway Track Switches'],
    description: 'Work-hardening steel alloy that gains surface hardness under heavy impact while preserving tough interior core.',
  },
  {
    id: 'duplex',
    name: 'Duplex Stainless Steel',
    grade: 'UNS S31803 / 2205',
    tensileStrength: 655,
    yieldStrength: 450,
    maxTemp: 315,
    corrosionRating: 'Extreme',
    density: '7.82 g/cm³',
    applications: ['Subsea Valve Assemblies', 'Offshore Oil Rig Manifolds', 'Desalination Plants'],
    description: 'Dual-phase microstructure combining high yield strength with pitting resistance in high-salinity offshore seawater.',
  },
  {
    id: 'ductile',
    name: 'Ductile Cast Iron',
    grade: 'EN-GJS-500-7',
    tensileStrength: 500,
    yieldStrength: 320,
    maxTemp: 400,
    corrosionRating: 'Moderate',
    density: '7.1 g/cm³',
    applications: ['Automotive Cylinder Blocks', 'Heavy Vehicle Axle Housings', 'Hydraulic Pump Castings'],
    description: 'Spheroidal graphite cast iron providing superior vibration damping and castability for complex geometry.',
  },
];

interface AlloySpecCalculatorProps {
  onOpenRfq?: () => void;
}

export default function AlloySpecCalculator({ onOpenRfq }: AlloySpecCalculatorProps) {
  const [selectedId, setSelectedId] = useState<string>('316l');
  const [tempFilter, setTempFilter] = useState<number>(500);

  const selectedAlloy = alloys.find((a) => a.id === selectedId) || alloys[0];

  return (
    <section id="alloy-calculator" className="py-24 bg-slate-950 text-white relative overflow-hidden border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono text-xs uppercase tracking-widest mb-4">
            <Sparkles size={14} />
            <span>Interactive Metallurgy Tool</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Alloy Performance & Specification Engine
          </h2>
          <p className="text-slate-400 text-base md:text-lg leading-relaxed">
            Select metallurgical alloys and compare mechanical strength, operating temperature thresholds, and chemical corrosion resistance for your industrial application.
          </p>
        </div>

        {/* Calculator Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-slate-900/90 border border-slate-800 rounded-2xl p-6 lg:p-10 shadow-2xl backdrop-blur-md">
          
          {/* Left Column: Alloy Selection Buttons */}
          <div className="lg:col-span-4 space-y-3">
            <h3 className="text-xs font-mono font-bold text-amber-500 uppercase tracking-widest mb-4 flex items-center gap-2">
              <Sliders size={16} />
              <span>Select Alloy Grade</span>
            </h3>

            {alloys.map((item) => (
              <button
                key={item.id}
                onClick={() => setSelectedId(item.id)}
                className={`w-full text-left p-4 rounded-xl border transition-all flex flex-col justify-between ${
                  selectedId === item.id
                    ? 'bg-slate-800 border-amber-500 shadow-lg shadow-amber-500/10'
                    : 'bg-slate-950/60 border-slate-800 hover:border-slate-700 text-slate-300'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-base text-white">{item.name}</span>
                  {selectedId === item.id && (
                    <span className="w-5 h-5 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center font-bold text-xs">
                      <Check size={12} />
                    </span>
                  )}
                </div>
                <span className="text-xs font-mono text-slate-400">{item.grade}</span>
              </button>
            ))}

            {/* Temperature Slider Filter Simulation */}
            <div className="pt-6 border-t border-slate-800">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-mono text-slate-300 uppercase font-bold flex items-center gap-1.5">
                  <Thermometer size={14} className="text-amber-500" />
                  Target Max Temperature:
                </span>
                <span className="text-xs font-mono text-amber-400 font-bold">{tempFilter}°C</span>
              </div>
              <input
                type="range"
                min={200}
                max={900}
                step={25}
                value={tempFilter}
                onChange={(e) => setTempFilter(Number(e.target.value))}
                className="w-full accent-amber-500 bg-slate-950 rounded-lg cursor-pointer"
              />
              <p className="text-[11px] text-slate-400 mt-2">
                {selectedAlloy.maxTemp >= tempFilter ? (
                  <span className="text-emerald-400 font-mono font-semibold flex items-center gap-1">
                    ✓ {selectedAlloy.name} operates safely up to {selectedAlloy.maxTemp}°C (Threshold met)
                  </span>
                ) : (
                  <span className="text-amber-400 font-mono font-semibold flex items-center gap-1">
                    ⚠ Exceeds standard {selectedAlloy.name} threshold ({selectedAlloy.maxTemp}°C). Consult metallurgy engineering.
                  </span>
                )}
              </p>
            </div>
          </div>

          {/* Right Column: Dynamic Spec Metrics */}
          <div className="lg:col-span-8 bg-slate-950 p-6 md:p-8 rounded-xl border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6 border-b border-slate-800 pb-4">
                <div>
                  <span className="text-xs font-mono text-amber-500 uppercase tracking-widest block mb-1">
                    {selectedAlloy.grade}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-white">
                    {selectedAlloy.name}
                  </h3>
                </div>
                <span className="px-3 py-1 bg-slate-900 border border-slate-700 text-amber-400 font-mono text-xs rounded-full font-bold">
                  Density: {selectedAlloy.density}
                </span>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed mb-8">
                {selectedAlloy.description}
              </p>

              {/* Metrics Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl">
                  <div className="flex items-center gap-2 text-slate-400 text-xs font-mono mb-2">
                    <Gauge size={16} className="text-amber-500" />
                    <span>TENSILE STRENGTH</span>
                  </div>
                  <span className="text-2xl font-extrabold text-white font-mono">{selectedAlloy.tensileStrength}</span>
                  <span className="text-xs text-slate-400 font-mono ml-1">MPa</span>
                  <div className="w-full bg-slate-800 h-1.5 rounded-full mt-3 overflow-hidden">
                    <div
                      className="bg-amber-500 h-full rounded-full transition-all duration-500"
                      style={{ width: `${(selectedAlloy.tensileStrength / 1000) * 100}%` }}
                    />
                  </div>
                </div>

                <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl">
                  <div className="flex items-center gap-2 text-slate-400 text-xs font-mono mb-2">
                    <Thermometer size={16} className="text-amber-500" />
                    <span>MAX OPERATING TEMP</span>
                  </div>
                  <span className="text-2xl font-extrabold text-white font-mono">{selectedAlloy.maxTemp}</span>
                  <span className="text-xs text-slate-400 font-mono ml-1">°C</span>
                  <div className="w-full bg-slate-800 h-1.5 rounded-full mt-3 overflow-hidden">
                    <div
                      className="bg-orange-500 h-full rounded-full transition-all duration-500"
                      style={{ width: `${(selectedAlloy.maxTemp / 1000) * 100}%` }}
                    />
                  </div>
                </div>

                <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl">
                  <div className="flex items-center gap-2 text-slate-400 text-xs font-mono mb-2">
                    <ShieldAlert size={16} className="text-amber-500" />
                    <span>CORROSION RATING</span>
                  </div>
                  <span className="text-2xl font-extrabold text-amber-400 font-mono">{selectedAlloy.corrosionRating}</span>
                  <p className="text-[11px] text-slate-400 mt-2 font-mono">Pitting & Oxidation Tested</p>
                </div>
              </div>

              {/* Target Applications Badges */}
              <div className="mb-6">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-widest block mb-3">
                  Recommended Primary Applications
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedAlloy.applications.map((app, idx) => (
                    <span
                      key={idx}
                      className="bg-slate-900 border border-slate-700 text-slate-200 text-xs px-3 py-1.5 rounded-md font-semibold"
                    >
                      • {app}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-slate-400 font-mono">
                Need custom heat treatment or non-standard chemical ratios?
              </span>
              <button
                onClick={onOpenRfq}
                className="w-full sm:w-auto px-6 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold uppercase text-xs tracking-wider rounded-lg transition-all shadow-lg shadow-amber-500/20"
              >
                Request Quote For {selectedAlloy.name}
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
