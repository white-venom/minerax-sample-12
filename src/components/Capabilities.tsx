import { motion } from 'motion/react';
import { Settings, ShieldCheck, Flame, Factory } from 'lucide-react';

const capabilities = [
  {
    icon: <Flame size={32} />,
    title: 'Investment Casting',
    description: 'High-precision casting for complex geometries and fine details with superior surface finishes.',
  },
  {
    icon: <Factory size={32} />,
    title: 'Sand Casting',
    description: 'Robust, large-scale molding solutions ideal for heavy industrial machinery and equipment.',
  },
  {
    icon: <Settings size={32} />,
    title: 'Precision Machining',
    description: 'Post-casting CNC machining tolerances to exact specifications, ensuring immediate assembly readiness.',
  },
  {
    icon: <ShieldCheck size={32} />,
    title: 'Quality Metallurgy',
    description: 'Advanced alloy development, thermal treatment, and rigorous stress testing protocols.',
  },
];

export function Capabilities() {
  return (
    <section id="capabilities" className="py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16 md:w-2/3">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-neutral-900 mb-6 tracking-tight"
          >
            Capabilities & Core Services
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-neutral-600 leading-relaxed"
          >
            From rapid prototyping to mass production, Minerax provides end-to-end metallurgical solutions. We process a wide range of ferrous and non-ferrous alloys tailored for critical applications.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {capabilities.map((cap, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 group hover:-translate-y-2 transition-transform duration-300 shadow-sm hover:shadow-xl hover:shadow-neutral-200/50 border border-neutral-100"
            >
              <div className="w-16 h-16 bg-neutral-50 group-hover:bg-orange-50 flex items-center justify-center rounded-sm text-neutral-800 group-hover:text-orange-600 transition-colors mb-6">
                {cap.icon}
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-4">{cap.title}</h3>
              <p className="text-neutral-600 leading-relaxed">
                {cap.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
