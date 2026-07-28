import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Cpu, Zap, ShieldCheck, ArrowRight } from 'lucide-react';

interface ProductCard {
  id: number;
  title: string;
  alloy: string;
  application: string;
  weight: string;
  image: string;
  highlights: string[];
}

const products: ProductCard[] = [
  {
    id: 1,
    title: 'High-Pressure Turbine Housing',
    alloy: 'Cast Stainless Steel (316L)',
    application: 'Power Generation & Aerospace',
    weight: '2.4 Tons',
    image: '/assets/ai_steel_components.png',
    highlights: ['Zero Micro-Porosity', 'High Heat Resistance up to 1100°C', '100% X-Ray Verified'],
  },
  {
    id: 2,
    title: 'Heavy Duty Mining Excavator Bucket Lip',
    alloy: 'High Manganese Alloy Steel',
    application: 'Earthmoving & Heavy Mining',
    weight: '8.1 Tons',
    image: '/assets/ai_excavator_bucket.png',
    highlights: ['Impact-Hardening Surface', 'Extreme Abrasion Resistance', 'Forged-Grade Toughness'],
  },
  {
    id: 3,
    title: 'Automotive Engine Cylinder Block',
    alloy: 'Ductile Cast Iron (GJS-500-7)',
    application: 'Commercial Fleet Vehicles',
    weight: '450 kg',
    image: '/assets/ai_engine_block.png',
    highlights: ['Precision Thin-Wall Casting', 'Integrated Cooling Channels', 'Lightweight Alloy Blend'],
  },
  {
    id: 4,
    title: 'Offshore Subsea Valve Body Assembly',
    alloy: 'Duplex Stainless Steel (UNS S31803)',
    application: 'Offshore Oil & Gas Pipelines',
    weight: '3.8 Tons',
    image: '/assets/ai_valve_body.png',
    highlights: ['Corrosion-Resistant Matrix', 'Tested up to 15,000 PSI', 'NORSOK M-650 Compliant'],
  },
];

export default function CastingSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === products.length - 1 ? 0 : prev + 1));
  };

  const currentProduct = products[currentIndex];

  return (
    <section id="casting-products" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 text-amber-500 font-bold text-xs tracking-widest uppercase mb-3">
              <Cpu size={16} />
              <span>Precision Product Showcase</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Featured Casting Products & Alloys
            </h2>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={prevSlide}
              className="p-4 bg-slate-800 hover:bg-amber-600 hover:text-slate-950 border border-slate-700 text-white rounded-full transition-colors duration-300"
              aria-label="Previous product"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="p-4 bg-slate-800 hover:bg-amber-600 hover:text-slate-950 border border-slate-700 text-white rounded-full transition-colors duration-300"
              aria-label="Next product"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Carousel Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentProduct.id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="grid grid-cols-1 lg:grid-cols-12 bg-slate-800/80 border border-slate-700 rounded-2xl overflow-hidden shadow-2xl"
          >
            {/* Image (7 cols) */}
            <div className="lg:col-span-7 relative min-h-[380px] lg:min-h-[480px]">
              <img
                src={currentProduct.image}
                alt={currentProduct.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-slate-900/90 lg:block hidden" />
              
              {/* Badge */}
              <div className="absolute top-6 left-6 bg-slate-950/80 backdrop-blur-md border border-amber-500/40 text-amber-400 font-mono text-xs px-3 py-1.5 rounded-full font-bold">
                {currentProduct.weight} Single Unit
              </div>
            </div>

            {/* Content (5 cols) */}
            <div className="lg:col-span-5 p-8 lg:p-12 flex flex-col justify-between">
              <div>
                <span className="text-amber-500 text-xs font-mono font-bold tracking-wider uppercase block mb-2">
                  {currentProduct.application}
                </span>
                <h3 className="text-3xl font-extrabold text-white mb-4 leading-tight">
                  {currentProduct.title}
                </h3>
                <div className="inline-block bg-slate-900 border border-slate-700 px-4 py-2 rounded-lg text-sm text-amber-400 font-mono font-bold mb-6">
                  Material: {currentProduct.alloy}
                </div>

                <div className="space-y-3 mb-8">
                  <h4 className="text-xs uppercase tracking-widest text-slate-400 font-mono">
                    Key Performance Attributes
                  </h4>
                  {currentProduct.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-center text-slate-200 text-sm">
                      <ShieldCheck size={18} className="text-amber-500 mr-3 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-slate-700 flex items-center justify-between">
                <span className="text-xs text-slate-400 font-mono">
                  0{currentIndex + 1} / 0{products.length}
                </span>
                <button className="flex items-center text-sm font-bold text-amber-500 hover:text-amber-400 uppercase tracking-wider group">
                  Technical Specifications <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
