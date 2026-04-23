import React from 'react';
import { Mail, Phone, MapPin, Landmark, Instagram, Facebook, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-border-subtle pt-24 pb-12 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-10 relative z-10">
        <div className="grid lg:grid-cols-12 gap-0 border border-border-subtle mb-16">
          {/* Brand Info */}
          <div className="lg:col-span-12 p-8 border-b border-border-subtle flex flex-col items-center text-center">
            <Link to="/" className="flex flex-col mb-6">
              <span className="text-3xl font-serif font-bold tracking-tight text-brand-blue uppercase">VEFOS ACADEMY</span>
              <span className="text-[10px] uppercase tracking-[0.4em] text-ink-muted">Ablekuma • Accra • Ghana</span>
            </Link>
            <p className="text-xs uppercase font-bold tracking-widest text-brand-gold">Excellence & Character Since 2010</p>
          </div>

          {/* Links & Info */}
          <div className="lg:col-span-4 p-8 border-b lg:border-b-0 lg:border-r border-border-subtle">
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-gold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-sm text-ink-muted">
                <MapPin className="w-4 h-4 text-brand-blue mt-0.5 shrink-0" />
                <span>Ablekuma Main Road, Accra</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-ink-muted">
                <Phone className="w-4 h-4 text-brand-blue shrink-0" />
                <span>+233 24 307 8482</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-ink-muted">
                <Mail className="w-4 h-4 text-brand-blue shrink-0" />
                <span>info@vefosacademy.edu</span>
              </li>
            </ul>
          </div>

          {/* Map Section */}
          <div className="lg:col-span-8 flex border-t lg:border-t-0 border-border-subtle">
            <div className="w-1/4 bg-brand-blue flex items-center justify-center p-4">
               <span className="text-white text-[10px] font-bold tracking-widest uppercase vertical-text">Campus Map</span>
            </div>
            <div className="flex-1 bg-border-subtle h-64 lg:h-auto overflow-hidden group">
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15882.880620718712!2d-0.3444066921386719!3d5.6074218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf970929f95709%3A0x6b8034d60c4a45a3!2sAblekuma!5e0!3m2!1sen!2sgh!4v1713862590204" 
                className="w-full h-full border-0 grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" 
                allowFullScreen={true}
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[9px] uppercase tracking-widest text-ink-muted/50">
            © 2026 Vefos Academy • Shaping the future, one child at a time.
          </p>
          <div className="flex space-x-8 text-[9px] uppercase tracking-widest text-ink-muted/50">
            <a href="#" className="hover:text-brand-gold transition-colors">Privacy</a>
            <a href="#" className="hover:text-brand-gold transition-colors">Terms</a>
            <a href="#" className="hover:text-brand-gold transition-colors">Ghana GES</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
