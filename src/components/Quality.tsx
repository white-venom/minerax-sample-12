import { motion } from 'framer-motion';

export function Quality() {
  return (
    <section id="quality" className="py-16 bg-black border-y border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
        
        <div className="md:w-1/3">
          <h3 className="text-2xl font-bold text-white mb-2">Global Standards</h3>
          <p className="text-neutral-400">Certified for excellence across all major international manufacturing protocols.</p>
        </div>

        <div className="md:w-2/3 w-full flex flex-wrap justify-between items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {/* Simulated Cert Badges */}
          <motion.div whileHover={{ scale: 1.05 }} className="flex flex-col items-center">
            <div className="w-16 h-16 border-2 border-white rounded-full flex items-center justify-center text-white font-bold text-lg mb-2">ISO</div>
            <span className="text-white text-xs font-semibold tracking-wider">9001:2015</span>
          </motion.div>
          
          <motion.div whileHover={{ scale: 1.05 }} className="flex flex-col items-center">
            <div className="w-16 h-16 border-2 border-white rounded-full flex items-center justify-center text-white font-bold text-lg mb-2">ISO</div>
            <span className="text-white text-xs font-semibold tracking-wider">14001:2015</span>
          </motion.div>
          
          <motion.div whileHover={{ scale: 1.05 }} className="flex flex-col items-center">
            <div className="w-16 h-16 border-2 border-white rounded-full flex items-center justify-center text-white font-bold text-lg mb-2">OHSAS</div>
            <span className="text-white text-xs font-semibold tracking-wider">18001</span>
          </motion.div>
          
          <motion.div whileHover={{ scale: 1.05 }} className="flex flex-col items-center">
            <div className="w-16 h-16 border-2 border-white flex items-center justify-center text-white font-bold text-lg mb-2 rotate-45"><span className="-rotate-45">PED</span></div>
            <span className="text-white text-xs font-semibold tracking-wider mt-1">CERTIFIED</span>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
