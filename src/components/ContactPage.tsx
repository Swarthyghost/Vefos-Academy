import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, Phone, Mail, MapPin, Clock } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Admissions',
    message: ''
  });
  const [status, setStatus] = useState<{ type: 'idle' | 'loading' | 'success' | 'error', message: string }>({
    type: 'idle',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Sending message...' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      const data = await response.json();
      if (data.success) {
        setStatus({ type: 'success', message: data.message });
        setFormData({ name: '', email: '', subject: 'Admissions', message: '' });
      } else {
        setStatus({ type: 'error', message: 'Something went wrong. Please try again.' });
      }
    } catch (err) {
      setStatus({ type: 'error', message: 'Unable to connect to the server.' });
    }
  };

  return (
    <div className="min-h-screen bg-paper font-sans">
      <Navbar />
      
      <main className="pt-24 max-w-7xl mx-auto px-4 sm:px-10 py-20">
        <div className="grid lg:grid-cols-12 gap-0 border border-border-subtle overflow-hidden">
          {/* Header Panel */}
          <div className="lg:col-span-4 p-12 bg-paper-dark border-b lg:border-b-0 lg:border-r border-border-subtle flex flex-col justify-center">
            <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-gold mb-6">Contact Us</h3>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-brand-blue leading-[0.9] mb-8">
              Get In <br /><span className="italic">Touch</span>
            </h1>
            <p className="text-sm text-ink-muted leading-relaxed font-medium italic mb-12">
              Have questions about admissions or school life? Our dedicated team is here to help you every step of the way.
            </p>
            
            <div className="space-y-6">
               <div className="flex items-center space-x-4">
                 <div className="w-8 h-8 rounded-full bg-brand-blue flex items-center justify-center text-white">
                    <Phone className="w-4 h-4" />
                 </div>
                 <span className="text-xs font-bold tracking-widest text-brand-blue">+233 24 000 0000</span>
               </div>
               <div className="flex items-center space-x-4">
                 <div className="w-8 h-8 rounded-full bg-brand-blue flex items-center justify-center text-white">
                    <Mail className="w-4 h-4" />
                 </div>
                 <span className="text-xs font-bold tracking-widest text-brand-blue">info@vefosacademy.edu</span>
               </div>
            </div>
          </div>

          {/* Form Panel */}
          <div className="lg:col-span-8 p-12 bg-white">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-ink-muted">Full Name</label>
                  <input
                    required
                    type="text"
                    className="w-full px-0 py-3 bg-transparent border-b border-border-subtle focus:border-brand-gold transition-all duration-300 outline-none text-ink font-serif text-lg"
                    placeholder="e.g. Ama Serwaa"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-ink-muted">Email Address</label>
                  <input
                    required
                    type="email"
                    className="w-full px-0 py-3 bg-transparent border-b border-border-subtle focus:border-brand-gold transition-all duration-300 outline-none text-ink font-serif text-lg"
                    placeholder="ama@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold tracking-widest text-ink-muted">Inquiry Type</label>
                <select
                  className="w-full px-0 py-3 bg-transparent border-b border-border-subtle focus:border-brand-gold transition-all duration-300 outline-none text-ink font-serif text-lg appearance-none cursor-pointer"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                >
                  <option value="Admissions">Admissions Inquiry</option>
                  <option value="General">General Inquiry</option>
                  <option value="Employment">Employment Opportunities</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold tracking-widest text-ink-muted">Your Message</label>
                <textarea
                  required
                  rows={4}
                  className="w-full px-0 py-3 bg-transparent border-b border-border-subtle focus:border-brand-gold transition-all duration-300 outline-none text-ink font-serif text-lg resize-none"
                  placeholder="How can we assist you today?"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <div className="flex flex-col items-start gap-6">
                <button
                  disabled={status.type === 'loading'}
                  type="submit"
                  className="bg-brand-blue text-white px-12 py-5 uppercase tracking-[0.2em] text-xs font-bold hover:bg-brand-gold transition-all duration-300 disabled:opacity-50"
                >
                  {status.type === 'loading' ? 'Sending Message...' : 'Send Inquiry'}
                </button>

                {status.type !== 'idle' && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className={`text-xs font-bold uppercase tracking-widest ${
                      status.type === 'success' ? 'text-green-600' : 'text-red-600'
                    }`}
                  >
                    {status.message}
                  </motion.div>
                )}
              </div>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
