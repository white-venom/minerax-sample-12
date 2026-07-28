import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Globe2, ShieldCheck, Factory, Award, ArrowUpRight, Flame } from 'lucide-react';

interface Location {
  id: string;
  name: string;
  country: string;
  type: string;
  coordinates: { x: number; y: number };
  capacity: string;
  spec: string;
  status: string;
}

const locations: Location[] = [
  {
    id: 'na',
    name: 'Houston Industrial Casting Complex',
    country: 'United States',
    type: 'Heavy Alloy & Steel Foundry',
    coordinates: { x: 21, y: 38 },
    capacity: '18.5 Million Tons/yr',
    spec: 'Sand Casting & Investment Casting',
    status: 'Active • 24/7 Production',
  },
  {
    id: 'eu',
    name: 'Duisburg Precision Metallurgy Hub',
    country: 'Germany',
    type: 'Automotive & Aerospace Casting',
    coordinates: { x: 48, y: 28 },
    capacity: '15.2 Million Tons/yr',
    spec: 'Die Casting & Shell Molding',
    status: 'Active • ISO 9001 Certified',
  },
  {
    id: 'me',
    name: 'Dubai Global Logistics & Foundry',
    country: 'United Arab Emirates',
    type: 'High-Temp Alloy Exports',
    coordinates: { x: 62, y: 44 },
    capacity: '10.0 Million Tons/yr',
    spec: 'Centrifugal Casting & Distribution',
    status: 'Active • Strategic Port Hub',
  },
  {
    id: 'ap',
    name: 'Pune Mega Foundry Works',
    country: 'India',
    type: 'Primary Iron & Steel Casting',
    coordinates: { x: 71, y: 48 },
    capacity: '26.8 Million Tons/yr',
    spec: 'Continuous Casting & Induction Melting',
    status: 'Active • Largest Production Line',
  },
  {
    id: 'jp',
    name: 'Tokyo Advanced Alloy R&D Center',
    country: 'Japan',
    type: 'Ultra-Precision Component Casting',
    coordinates: { x: 86, y: 36 },
    capacity: '8.4 Million Tons/yr',
    spec: 'Vacuum Induction Melting (VIM)',
    status: 'Active • Next-Gen Tech Lab',
  },
  {
    id: 'sa',
    name: 'São Paulo Metallurgy Works',
    country: 'Brazil',
    type: 'Mining & Heavy Equipment Parts',
    coordinates: { x: 34, y: 72 },
    capacity: '12.1 Million Tons/yr',
    spec: 'Heavy Section Iron Casting',
    status: 'Active • Sustainable Power',
  },
];

export default function GlobalMap() {
  const [activeId, setActiveId] = useState<string>('ap');
  const activeLocation = locations.find((loc) => loc.id === activeId) || locations[0];

  return (
    <section id="global-network" className="py-24 bg-slate-950 text-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-amber-500/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-slate-800 pb-10">
          <div>
            <div className="flex items-center gap-2 text-amber-500 font-mono text-xs tracking-widest uppercase mb-3">
              <Globe2 size={16} />
              <span>Worldwide Foundry Network</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
              Global Metal Casting Footprint
            </h2>
          </div>
          <p className="text-slate-400 max-w-md text-sm leading-relaxed">
            Operating 6 mega-foundries across 4 continents. Delivering high-precision cast components to over 85 countries with seamless supply chain integration.
          </p>
        </div>

        {/* Main Map Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* SVG Map Display (8 cols) */}
          <div className="lg:col-span-8 bg-slate-900/80 border border-slate-800 rounded-xl p-4 md:p-8 relative shadow-2xl overflow-hidden min-h-[440px]">
            
            {/* Grid overlay */}
            <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px]" />

            {/* Accurate Stylized World Map SVG */}
            <svg
              viewBox="0 0 1000 500"
              className="w-full h-full text-slate-800 fill-current opacity-80"
              preserveAspectRatio="xMidYMid meet"
            >
              {/* North America */}
              <path d="M120,80 L280,60 L320,120 L290,190 L240,240 L190,210 L150,260 L110,220 L90,140 Z M220,130 L260,110 L250,150 Z" />
              {/* South America */}
              <path d="M260,260 L350,270 L380,330 L350,440 L300,470 L270,390 L250,330 Z" />
              {/* Europe */}
              <path d="M440,70 L540,60 L570,110 L520,160 L460,150 L430,110 Z" />
              {/* Africa */}
              <path d="M430,170 L560,170 L590,250 L550,360 L480,390 L440,280 L420,220 Z" />
              {/* Asia */}
              <path d="M550,60 L850,50 L920,140 L880,250 L800,280 L720,240 L640,210 L560,150 Z" />
              {/* Australia & Oceania */}
              <path d="M780,330 L890,320 L910,400 L840,430 L770,390 Z" />
              {/* Japan island */}
              <path d="M880,130 L900,120 L910,160 L890,170 Z" />
              {/* UK & Scandinavia */}
              <path d="M430,60 L450,40 L470,70 Z M480,40 L520,30 L530,60 Z" />

              {/* Connecting Arc Lines */}
              <g stroke="rgba(245, 158, 11, 0.3)" strokeWidth="1.5" fill="none" strokeDasharray="4 4">
                <path d="M210,190 Q345,100 480,140" />
                <path d="M480,140 Q550,160 620,220" />
                <path d="M620,220 Q665,230 710,240" />
                <path d="M710,240 Q785,210 860,180" />
                <path d="M210,190 Q275,275 340,360" />
              </g>
            </svg>

            {/* Pulsing Pin Markers */}
            {locations.map((loc) => {
              const isSelected = loc.id === activeId;
              return (
                <button
                  key={loc.id}
                  onClick={() => setActiveId(loc.id)}
                  className="absolute z-20 group -translate-x-1/2 -translate-y-1/2 focus:outline-none"
                  style={{ left: `${loc.coordinates.x}%`, top: `${loc.coordinates.y}%` }}
                >
                  <span className="relative flex h-6 w-6 items-center justify-center">
                    <span
                      className={`absolute inline-flex h-full w-full rounded-full ${
                        isSelected ? 'bg-amber-500 animate-ping opacity-75' : 'bg-amber-400/40'
                      }`}
                    />
                    <span
                      className={`relative inline-flex rounded-full h-3 w-3 ${
                        isSelected ? 'bg-amber-500 ring-4 ring-amber-500/30' : 'bg-slate-400 group-hover:bg-amber-400'
                      } transition-all duration-300`}
                    />
                  </span>
                  
                  {/* Pin label */}
                  <span
                    className={`absolute left-1/2 -translate-x-1/2 top-7 whitespace-nowrap text-[10px] font-mono font-bold tracking-wider px-2 py-0.5 rounded border transition-all ${
                      isSelected
                        ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-lg'
                        : 'bg-slate-900/90 text-slate-300 border-slate-700 opacity-75 group-hover:opacity-100'
                    }`}
                  >
                    {loc.country}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Location Detail Card (4 cols) */}
          <div className="lg:col-span-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeLocation.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 text-amber-500">
                  <Flame size={80} />
                </div>

                <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-mono rounded-full mb-4">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  {activeLocation.status}
                </div>

                <h3 className="text-2xl font-bold text-white mb-1 leading-tight">
                  {activeLocation.name}
                </h3>
                <p className="text-amber-500 text-sm font-medium mb-6 flex items-center gap-1">
                  <MapPin size={14} /> {activeLocation.country}
                </p>

                <div className="space-y-4 mb-6 text-sm border-t border-b border-slate-800 py-4">
                  <div>
                    <span className="text-xs text-slate-400 uppercase tracking-wider block font-mono mb-1">
                      Facility Type
                    </span>
                    <span className="text-slate-200 font-semibold">{activeLocation.type}</span>
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 uppercase tracking-wider block font-mono mb-1">
                      Annual Casting Output
                    </span>
                    <span className="text-amber-400 text-lg font-bold font-mono">
                      {activeLocation.capacity}
                    </span>
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 uppercase tracking-wider block font-mono mb-1">
                      Specialized Processes
                    </span>
                    <span className="text-slate-300">{activeLocation.spec}</span>
                  </div>
                </div>

                <div className="flex gap-3">
                  {locations.map((loc) => (
                    <button
                      key={loc.id}
                      onClick={() => setActiveId(loc.id)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        loc.id === activeId ? 'bg-amber-500 w-8' : 'bg-slate-700 hover:bg-slate-500'
                      }`}
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Quick Metrics Bar */}
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="bg-slate-900/60 border border-slate-800 p-4 rounded-lg">
                <span className="text-2xl font-extrabold text-white block">99.85%</span>
                <span className="text-xs text-slate-400">Casting Quality Rate</span>
              </div>
              <div className="bg-slate-900/60 border border-slate-800 p-4 rounded-lg">
                <span className="text-2xl font-extrabold text-amber-500 block">85+</span>
                <span className="text-xs text-slate-400">Global Export Markets</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
