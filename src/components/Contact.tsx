import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-16">
        
        {/* Contact Info */}
        <div className="lg:w-5/12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-neutral-900 mb-6 tracking-tight"
          >
            Ready to Build <br />
            the Future?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-neutral-600 mb-10 leading-relaxed"
          >
            Connect with our engineering team to discuss blueprints, material specifications, and request a comprehensive quote for your next high-volume project.
          </motion.p>

          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-neutral-100 flex items-center justify-center rounded-sm text-neutral-800">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-neutral-900">Headquarters & Foundry</h4>
                <p className="text-neutral-600 mt-1">100 Industrial Parkway<br/>Steel Valley, PA 15201</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-neutral-100 flex items-center justify-center rounded-sm text-neutral-800">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-neutral-900">Phone</h4>
                <p className="text-neutral-600 mt-1">+1 (800) 555-CAST</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-neutral-100 flex items-center justify-center rounded-sm text-neutral-800">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-neutral-900">Email</h4>
                <p className="text-neutral-600 mt-1">engineering@minerax.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:w-7/12">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-black p-8 md:p-12 shadow-2xl relative overflow-hidden"
          >
            {/* Decorative background element */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl pointer-events-none" />
            
            <h3 className="text-2xl font-bold text-white mb-8">Request a Quote</h3>
            
            <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-neutral-400 mb-2">First Name</label>
                  <input type="text" className="w-full bg-neutral-900 border border-neutral-800 text-white px-4 py-3 focus:outline-none focus:border-orange-600 transition-colors" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-neutral-400 mb-2">Last Name</label>
                  <input type="text" className="w-full bg-neutral-900 border border-neutral-800 text-white px-4 py-3 focus:outline-none focus:border-orange-600 transition-colors" placeholder="Doe" />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-neutral-400 mb-2">Corporate Email</label>
                  <input type="email" className="w-full bg-neutral-900 border border-neutral-800 text-white px-4 py-3 focus:outline-none focus:border-orange-600 transition-colors" placeholder="john@company.com" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-neutral-400 mb-2">Company Name</label>
                  <input type="text" className="w-full bg-neutral-900 border border-neutral-800 text-white px-4 py-3 focus:outline-none focus:border-orange-600 transition-colors" placeholder="Acme Corp" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-neutral-400 mb-2">Project Details</label>
                <textarea rows={4} className="w-full bg-neutral-900 border border-neutral-800 text-white px-4 py-3 focus:outline-none focus:border-orange-600 transition-colors resize-none" placeholder="Describe materials, tolerances, and expected volume..."></textarea>
              </div>
              
              <button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 transition-colors">
                Submit Inquiry
              </button>
            </form>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
