import { motion } from 'motion/react';
import { Target, Clock, Globe, Shield } from 'lucide-react';

const features = [
  {
    icon: <Target className="text-orange-600" size={28} />,
    title: 'Precision Engineering',
    desc: 'Micro-millimeter tolerances ensuring parts fit perfectly on the first assembly.'
  },
  {
    icon: <Clock className="text-orange-600" size={28} />,
    title: 'On-Time Delivery',
    desc: 'Streamlined logistics and high-capacity output guarantee stringent deadline adherence.'
  },
  {
    icon: <Globe className="text-orange-600" size={28} />,
    title: 'Global Reach',
    desc: 'Exporting premium castings to over 45 countries with robust international shipping.'
  },
  {
    icon: <Shield className="text-orange-600" size={28} />,
    title: 'Quality Assurance',
    desc: '100% non-destructive testing (NDT) available on all critical components.'
  }
];

export function Features() {
  return (
    <section className="py-24 bg-neutral-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-neutral-900 mb-4 tracking-tight"
          >
            Why Partner with Minerax
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-neutral-600 max-w-2xl mx-auto"
          >
            We don't just supply parts; we provide structural integrity for the world's most critical infrastructure.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {features.map((feature, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold text-neutral-900 mb-3">{feature.title}</h4>
              <p className="text-neutral-600 leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
