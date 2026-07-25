import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image with Parallax effect simulation (using fixed/absolute setup) */}
      <div 
        className="absolute inset-0 z-0 opacity-40 scale-105"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80")',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/60 via-black/40 to-black/90" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col items-start mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
            <span className="text-white text-xs md:text-sm font-semibold tracking-wider uppercase">Industrial Excellence Since 1998</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white leading-[1.1] tracking-tight mb-6">
            Precision Casting.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
              Enduring Strength.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-neutral-300 font-medium mb-10 max-w-2xl leading-relaxed">
            Minerax delivers enterprise-grade steel foundry solutions for the world's most demanding industrial applications. Engineered for performance, built to last.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a 
              href="#capabilities"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-sm font-bold text-lg transition-all shadow-lg shadow-orange-600/30 group"
            >
              Explore Capabilities
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </a>
            <a 
              href="#contact"
              className="w-full sm:w-auto flex items-center justify-center px-8 py-4 bg-transparent hover:bg-white/10 text-white rounded-sm font-bold text-lg border border-white/30 transition-colors"
            >
              Contact Engineering
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
