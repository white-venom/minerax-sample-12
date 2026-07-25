import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Capabilities', href: '#capabilities' },
  { name: 'Facilities', href: '#facilities' },
  { name: 'Quality', href: '#quality' },
];

export function Navigation() {
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
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <img src="/logo_bw.jpeg" alt="Minerax Logo" className="h-10 w-auto rounded object-contain shadow-sm" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-semibold tracking-wide transition-colors hover:text-orange-500 ${
                isScrolled ? 'text-neutral-600' : 'text-neutral-200'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2.5 rounded-sm font-semibold text-sm transition-colors shadow-lg shadow-orange-600/20"
          >
            Request a Quote
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className={`lg:hidden p-2 transition-colors ${isScrolled ? 'text-black' : 'text-white'}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-xl border-t border-neutral-100 p-6 flex flex-col gap-4 lg:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-semibold text-neutral-800 hover:text-orange-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="bg-orange-600 text-white px-6 py-3 rounded-sm font-semibold text-center mt-4"
            >
              Request a Quote
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
