import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, Maximize2, Sparkles, Filter } from 'lucide-react';

interface GalleryItem {
  id: number;
  title: string;
  category: 'pouring' | 'components' | 'facility' | 'lab';
  image: string;
  span: string;
  desc: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: '1600°C Molten Steel Pouring',
    category: 'pouring',
    image: '/assets/ai_foundry_furnace.png',
    span: 'col-span-1 md:col-span-2 row-span-2',
    desc: 'High-temperature molten steel transferred directly to continuous casting lines with precision automated ladles.',
  },
  {
    id: 2,
    title: 'Precision Machined Alloy Gears',
    category: 'components',
    image: '/assets/ai_steel_components.png',
    span: 'col-span-1 row-span-1',
    desc: 'High-strength steel gear components manufactured for heavy industrial turbine applications.',
  },
  {
    id: 3,
    title: '500,000 Sq. Ft. Mega Foundry',
    category: 'facility',
    image: '/assets/ai_factory_facility.png',
    span: 'col-span-1 row-span-1',
    desc: 'State-of-the-art manufacturing plant featuring 4 continuous casting bays.',
  },
  {
    id: 4,
    title: 'Spectroscopy Quality Analysis Lab',
    category: 'lab',
    image: '/assets/ai_steel_components.png',
    span: 'col-span-1 md:col-span-2 row-span-1',
    desc: 'Laser x-ray inspection and elemental breakdown analysis of high-performance castings.',
  },
  {
    id: 5,
    title: 'Automated Moulding Line',
    category: 'facility',
    image: '/assets/ai_engine_block.png',
    span: 'col-span-1 row-span-1',
    desc: 'High-speed sand molding equipment producing 120 mold sets per hour with zero defect tolerance.',
  },
  {
    id: 6,
    title: 'Industrial Heavy Duty Valve Body',
    category: 'components',
    image: '/assets/ai_valve_body.png',
    span: 'col-span-1 row-span-1',
    desc: 'Ductile iron cast valve assembly engineered for extreme pressure offshore pipelines.',
  },
];

export default function CastingCollage() {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const filteredItems = activeTab === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeTab);

  return (
    <section id="gallery" className="py-24 bg-white text-slate-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-amber-600 font-bold text-xs tracking-widest uppercase mb-3">
              <Sparkles size={16} />
              <span>Visual Showcase</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
              Metal Casting Process & Gallery
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'All Operations' },
              { id: 'pouring', label: 'Molten Pouring' },
              { id: 'components', label: 'Cast Components' },
              { id: 'facility', label: 'Foundry Floor' },
              { id: 'lab', label: 'Quality Lab' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-sm transition-all ${
                  activeTab === tab.id
                    ? 'bg-slate-900 text-white shadow-md'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry Grid Collage */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[260px]">
          <AnimatePresence>
            {filteredItems.map(item => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={item.id}
                onClick={() => setSelectedImage(item)}
                className={`relative rounded-xl overflow-hidden shadow-lg group cursor-pointer ${item.span}`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                {/* Text Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-amber-400 bg-amber-500/20 border border-amber-500/30 px-2 py-0.5 rounded">
                      {item.category}
                    </span>
                    <button className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      <Maximize2 size={16} />
                    </button>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-amber-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed opacity-90">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 bg-slate-950/90 backdrop-blur-md z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
                onClick={e => e.stopPropagation()}
                className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden max-w-4xl w-full shadow-2xl text-white"
              >
                <div className="relative aspect-video">
                  <img
                    src={selectedImage.image}
                    alt={selectedImage.title}
                    className="w-full h-full object-cover"
                  />
                  <button
                    onClick={() => setSelectedImage(null)}
                    className="absolute top-4 right-4 bg-slate-950/80 hover:bg-slate-950 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold"
                  >
                    ✕
                  </button>
                </div>
                <div className="p-6">
                  <div className="text-amber-500 text-xs font-mono font-bold uppercase mb-2">
                    {selectedImage.category}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{selectedImage.title}</h3>
                  <p className="text-slate-300 leading-relaxed text-sm">{selectedImage.desc}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
