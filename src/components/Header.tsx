import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 group">
          <img 
            src="/logo.png" 
            alt="Minerax Logo" 
            className={`w-auto object-contain transition-all duration-300 ${
              isScrolled ? 'h-10' : 'h-14 md:h-16 brightness-0 invert'
            }`} 
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {['About Us', 'Products', 'Global Reach', 'Sustainability', 'Investors'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className={`text-sm font-semibold tracking-wide uppercase transition-colors ${
                isScrolled ? 'text-slate-600 hover:text-amber-600' : 'text-white/90 hover:text-white'
              }`}
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Contact Button */}
        <div className="hidden md:block">
          <button className={`px-6 py-2.5 text-sm font-bold tracking-wide uppercase border transition-colors ${
            isScrolled 
              ? 'border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white' 
              : 'border-white text-white hover:bg-white hover:text-slate-900'
          }`}>
            Contact Sales
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X size={24} className={isScrolled ? 'text-slate-900' : 'text-white'} />
          ) : (
            <Menu size={24} className={isScrolled ? 'text-slate-900' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-200 shadow-xl py-4 px-6 flex flex-col space-y-4">
          {['About Us', 'Products', 'Global Reach', 'Sustainability', 'Investors'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="text-slate-800 font-semibold tracking-wide uppercase text-sm py-2 border-b border-slate-100 last:border-0"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <button className="w-full mt-4 px-6 py-3 text-sm font-bold tracking-wide uppercase border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white transition-colors">
            Contact Sales
          </button>
        </div>
      )}
    </header>
  );
}
