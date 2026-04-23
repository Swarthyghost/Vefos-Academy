import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Landmark } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Why Vefos', path: '/#why' },
    { name: 'Sections', path: '/#sections' },
    { name: 'Testimonials', path: '/#testimonials' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-paper border-b border-border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-10">
        <div className="flex justify-between h-24">
          <div className="flex items-center">
            <Link to="/" className="flex flex-col group">
              <span className="text-2xl font-serif font-bold tracking-tight text-brand-blue group-hover:text-brand-gold transition-colors">VEFOS ACADEMY</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-ink-muted">Ablekuma • Accra</span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                className="text-[11px] font-semibold text-ink hover:text-brand-blue border-b border-transparent hover:border-brand-gold transition-all duration-200 uppercase tracking-widest pb-1"
              >
                {link.name}
              </a>
            ))}
            <div className="h-6 w-[1px] bg-border-subtle mx-2"></div>
            <span className="text-[11px] font-bold text-brand-blue tracking-widest">+233 24 000 0000</span>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-blue p-2 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-paper border-b border-brand-blue/10 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-4 text-base font-medium text-brand-blue hover:text-brand-gold transition-colors duration-200 uppercase tracking-widest"
                >
                  {link.name}
                </a>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center px-6 py-4 bg-brand-blue text-paper text-base font-medium uppercase tracking-widest rounded-xl"
              >
                Enroll Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
