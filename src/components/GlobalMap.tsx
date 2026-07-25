import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, ArrowRight } from 'lucide-react';

const locations = [
  { id: 'na', name: 'North America Hub', x: 22, y: 35, stats: '12M Tons/yr', type: 'Primary Foundry' },
  { id: 'sa', name: 'South America Operations', x: 30, y: 65, stats: '8M Tons/yr', type: 'Mining & Refining' },
  { id: 'eu', name: 'European Headquarters', x: 50, y: 28, stats: '15M Tons/yr', type: 'R&D and Logistics' },
  { id: 'as', name: 'Asia Pacific Center', x: 75, y: 40, stats: '22M Tons/yr', type: 'Manufacturing' },
  { id: 'au', name: 'Oceania Mining', x: 82, y: 75, stats: '5M Tons/yr', type: 'Raw Materials' },
  { id: 'af', name: 'African Operations', x: 54, y: 55, stats: '6M Tons/yr', type: 'Refining' },
];

export default function GlobalMap() {
  const [activeLocation, setActiveLocation] = useState<string | null>(null);

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="mb-16 md:flex md:items-end md:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-6">
              Global Footprint
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Operating at the highest level of industrial scale. With interconnected facilities 
              spanning six continents, Minerax guarantees localized support with global efficiency.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
             <button className="flex items-center text-amber-600 font-semibold tracking-wide hover:text-amber-700 transition-colors">
               Explore the Network <ArrowRight size={20} className="ml-2" />
             </button>
          </div>
        </div>

        <div className="relative w-full aspect-[2/1] min-h-[400px] bg-slate-200/50 border border-slate-300 rounded-sm">
          {/* Abstract Map Background */}
          <div className="absolute inset-0 opacity-10 pointer-events-none" 
               style={{ 
                 backgroundImage: 'radial-gradient(circle at 2px 2px, #0f172a 1px, transparent 0)', 
                 backgroundSize: '24px 24px' 
               }} 
          />
          
          {/* Simplified SVG map paths acting as a stylized watermark */}
          <svg className="absolute inset-0 w-full h-full text-slate-300 drop-shadow-sm pointer-events-none" viewBox="0 0 1000 500" preserveAspectRatio="xMidYMid slice">
            <path fill="currentColor" d="M150,100 Q180,80 250,120 T280,200 T200,280 T150,220 Z" /> {/* NA */}
            <path fill="currentColor" d="M220,280 Q280,320 260,420 T200,450 T180,350 Z" /> {/* SA */}
            <path fill="currentColor" d="M480,80 Q550,60 580,120 T550,200 T480,180 T450,120 Z" /> {/* EU */}
            <path fill="currentColor" d="M480,200 Q550,250 540,350 T480,420 T440,300 Z" /> {/* AF */}
            <path fill="currentColor" d="M580,80 Q750,40 850,150 T800,280 T650,220 T580,150 Z" /> {/* AS */}
            <path fill="currentColor" d="M780,350 Q850,320 900,380 T850,450 T750,420 Z" /> {/* AU */}
          </svg>

          {/* Map Pins */}
          {locations.map((loc) => (
            <div 
              key={loc.id}
              className="absolute group z-20"
              style={{ left: `${loc.x}%`, top: `${loc.y}%`, transform: 'translate(-50%, -50%)' }}
              onMouseEnter={() => setActiveLocation(loc.id)}
              onMouseLeave={() => setActiveLocation(null)}
            >
              <div className="relative flex items-center justify-center w-8 h-8 cursor-pointer">
                <span className="absolute inline-flex h-full w-full rounded-full bg-amber-500 opacity-30 group-hover:animate-ping" />
                <span className={`relative inline-flex rounded-full h-3 w-3 transition-colors duration-300 ${activeLocation === loc.id ? 'bg-amber-600' : 'bg-slate-700'}`} />
              </div>

              <AnimatePresence>
                {activeLocation === loc.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute left-1/2 -translate-x-1/2 bottom-full mb-4 w-48 bg-slate-900 border border-slate-700 p-4 shadow-xl z-50 pointer-events-none"
                  >
                    <h4 className="text-white font-semibold text-sm mb-1">{loc.name}</h4>
                    <p className="text-amber-500 text-xs font-medium tracking-wide uppercase mb-2">{loc.type}</p>
                    <div className="flex items-center text-slate-300 text-sm">
                      <MapPin size={14} className="mr-2" />
                      {loc.stats}
                    </div>
                    {/* Tooltip Arrow */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-slate-900" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
