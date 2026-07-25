import React from 'react';
import Header from './components/Header';
import HeroSlider from './components/HeroSlider';
import Certifications from './components/Certifications';
import GlobalMap from './components/GlobalMap';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-amber-500 selection:text-slate-900">
      <Header />
      
      <main>
        <HeroSlider />
        <Certifications />
        <GlobalMap />
        
        {/* Additional placeholder section to give depth to the homepage */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <img 
                src="/assets/ai_asset_9.jpg" 
                alt="Steel manufacturing process" 
                className="w-full aspect-square object-cover shadow-2xl"
              />
            </div>
            <div className="lg:w-1/2">
              <div className="h-[2px] w-12 bg-amber-500 mb-6" />
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-6 leading-tight">
                Engineering Integrity Since 1952.
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                At Minerax, we don't just produce steel; we forge the foundations of the future. 
                Our commitment to metallurgical excellence and sustainable production processes 
                ensures that every ton of steel we deliver meets the rigorous demands of tomorrow's infrastructure.
              </p>
              <ul className="space-y-4 mb-10 text-slate-700 font-medium">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-amber-500 rounded-full mr-4" /> 
                  Zero-carbon emission goal by 2040
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-amber-500 rounded-full mr-4" /> 
                  Advanced high-strength alloy development
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-amber-500 rounded-full mr-4" /> 
                  Fully integrated end-to-end supply chain
                </li>
              </ul>
              <button className="px-8 py-3 bg-slate-900 text-white font-bold tracking-wide uppercase hover:bg-amber-600 transition-colors duration-300">
                Discover Our Heritage
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
