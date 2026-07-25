import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t-4 border-amber-600">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="inline-flex items-center justify-center bg-white text-slate-900 px-4 py-2 border-2 border-white mb-6">
              <span className="font-bold tracking-[0.2em] text-lg uppercase">Minerax</span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Forging the future with premium steel solutions. Dedicated to strength, sustainability, and structural integrity across the globe.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold tracking-wider uppercase mb-6 text-sm">Divisions</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-amber-500 transition-colors">Structural Steel</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Automotive Alloys</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Raw Materials</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Logistics & Shipping</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold tracking-wider uppercase mb-6 text-sm">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-amber-500 transition-colors">About Minerax</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Global Operations</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Sustainability Report</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold tracking-wider uppercase mb-6 text-sm">Global HQ</h4>
            <address className="not-italic text-sm space-y-3">
              <p>1000 Industrial Way<br/>Tower 4, Steel District<br/>New York, NY 10001</p>
              <p>contact@minerax.com</p>
              <p>+1 (800) 555-0199</p>
            </address>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>&copy; {new Date().getFullYear()} Minerax Global Steel Group. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
