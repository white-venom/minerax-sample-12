import { motion } from 'framer-motion';

export function Facilities() {
  return (
    <section id="facilities" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-16">
        
        {/* Text Content */}
        <div className="lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-neutral-900 mb-6 tracking-tight">
              State-of-the-Art <br className="hidden md:block" />
              Facilities
            </h2>
            <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
              Our 500,000 sq. ft. foundry represents the pinnacle of modern manufacturing. Equipped with automated molding lines, electric arc furnaces, and AI-driven quality inspection stations, we ensure unmatched consistency and scale.
            </p>
            
            <ul className="space-y-6">
              {[
                { title: 'Automated Foundry Lines', desc: 'Continuous casting machinery for high-volume orders.' },
                { title: 'Advanced Robotics CNC', desc: 'Precision machining with zero-tolerance error margins.' },
                { title: 'Spectroscopy Labs', desc: 'Real-time chemical composition analysis of all melts.' }
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-black text-white font-bold text-sm rounded-sm">
                    {i + 1}
                  </span>
                  <div>
                    <h4 className="text-xl font-bold text-neutral-900 mb-1">{item.title}</h4>
                    <p className="text-neutral-600">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Image Gallery */}
        <div className="lg:w-1/2 w-full">
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[600px] w-full"
          >
            {/* Main Image */}
            <div className="absolute top-0 right-0 w-[80%] h-[70%] z-10 overflow-hidden group">
              <img 
                src="/assets/ai_asset_10.jpg" 
                alt="Precision Machining"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 border-4 border-white/20 pointer-events-none" />
            </div>
            
            {/* Secondary Image */}
            <div className="absolute bottom-0 left-0 w-[60%] h-[50%] z-20 overflow-hidden shadow-2xl group">
              <img 
                src="/assets/ai_asset_10.jpg" 
                alt="Quality Inspection"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Decorative block */}
            <div className="absolute bottom-20 right-10 w-32 h-32 bg-orange-600 z-0 opacity-20" />
            
            {/* Pattern Dots */}
            <div className="absolute top-10 left-10 w-24 h-24 text-neutral-200 z-0" style={{ backgroundImage: 'radial-gradient(currentColor 2px, transparent 2px)', backgroundSize: '10px 10px' }} />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
