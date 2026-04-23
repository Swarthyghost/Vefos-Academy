import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex flex-col md:flex-row pt-24">
      {/* Text Panel */}
      <div className="flex-1 p-10 md:p-20 flex flex-col justify-center border-r border-b border-border-subtle bg-paper">
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-8xl font-serif text-brand-blue leading-[0.9] mb-8">
            Where <span className="italic font-light text-brand-gold">Trust</span> <br />
            Meets <span className="block italic">Excellence</span>
          </h1>
          
          <p className="text-sm md:text-base leading-relaxed text-ink-muted max-w-sm mb-12 uppercase tracking-wide font-medium">
            At Vefos, we don't just teach; we sculpt leaders of tomorrow. 
            From our Nursery to Secondary blocks, your child's future is crafted with precision and care.
          </p>
          
          <Link
            to="/contact"
            className="bg-brand-blue text-white px-10 py-5 w-fit uppercase tracking-[0.2em] text-xs font-bold hover:bg-brand-gold transition-all duration-300 transform hover:-translate-y-1"
          >
            Secure Their Future Today
          </Link>
        </motion.div>
      </div>

      {/* Image Panel */}
      <div className="flex-[0.8] relative border-b border-border-subtle min-h-[400px]">
        <img
          src="https://picsum.photos/seed/students-learning/1200/1600"
          alt="Students at Vefos Academy"
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-brand-blue/10"></div>
        <div className="absolute bottom-8 right-8 bg-white px-6 py-3 text-[10px] font-bold tracking-widest uppercase border border-border-subtle shadow-xl">
          Excellence in Action
        </div>
      </div>
    </section>
  );
}
