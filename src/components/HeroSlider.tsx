import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  {
    id: 1,
    image: '/assets/ai_foundry_furnace.png',
    title: 'PRECISE METAL CASTING',
    subtitle: 'High-precision alloy casting and continuous steel manufacturing engineered for extreme industrial performance.',
  },
  {
    id: 2,
    image: '/assets/ai_steel_components.png',
    title: 'ADVANCED METALLURGY',
    subtitle: 'From induction furnace melting to custom-engineered cast components with zero porosity tolerances.',
  },
  {
    id: 3,
    image: '/assets/ai_factory_facility.png',
    title: '500,000 SQ FT FOUNDRY',
    subtitle: 'Equipped with automated moulding lines, electric arc furnaces, and AI-powered quality inspection.',
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <div className="relative w-full h-screen min-h-[650px] overflow-hidden bg-slate-900">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img
            src={slides[current].image}
            alt={slides[current].title}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 z-20 flex flex-col justify-center max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl">
          <motion.div
            key={`text-${current}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="h-[2px] w-12 bg-amber-500" />
              <span className="text-amber-500 font-semibold tracking-widest text-sm uppercase">
                Industry Leader
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
              {slides[current].title}
            </h1>
            <p className="text-lg md:text-xl text-slate-200 leading-relaxed max-w-2xl border-l-4 border-amber-500 pl-6">
              {slides[current].subtitle}
            </p>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-30 flex justify-between items-end max-w-7xl mx-auto px-6 lg:px-8 pb-12">
        <div className="flex space-x-3">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`h-1 transition-all duration-500 ${
                idx === current ? 'w-12 bg-amber-500' : 'w-4 bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        <div className="flex space-x-4">
          <button
            onClick={prevSlide}
            className="p-4 border border-white/20 text-white hover:bg-white hover:text-slate-900 transition-colors duration-300"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="p-4 border border-white/20 text-white hover:bg-white hover:text-slate-900 transition-colors duration-300"
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}
