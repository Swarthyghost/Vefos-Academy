import React from 'react';
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

export default function HeadmasterSpeech() {
  return (
    <section className="py-24 bg-paper border-b border-border-subtle overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-10">
        <div className="grid lg:grid-cols-12 gap-0 border border-border-subtle">
          {/* Quote Section */}
          <div className="lg:col-span-5 p-12 bg-paper-dark relative border-b lg:border-b-0 lg:border-r border-border-subtle">
            <div className="absolute top-6 left-6 text-[120px] font-serif text-border-subtle leading-none select-none">“</div>
            <div className="relative z-10 flex flex-col h-full justify-center">
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-2xl md:text-3xl font-serif italic leading-snug text-brand-blue mb-12"
              >
                We focus on the holistic development of every student, ensuring they are mentally, socially, and academically prepared for global challenges.
              </motion.p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-brand-blue">
                   <img src="https://i.pravatar.cc/150?u=headmaster" alt="Mr. Samuel Vefo" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-brand-blue">Mr. Samuel Vefo</p>
                  <p className="text-[10px] text-ink-muted uppercase tracking-widest font-medium">Headmaster's Address</p>
                </div>
              </div>
            </div>
          </div>

          {/* Full Text Section */}
          <div className="lg:col-span-7 p-12 flex flex-col justify-center bg-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-gold mb-6">Principal's Vision</h3>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-blue mb-8 leading-tight">
                Our Commitment to <br /><span className="italic">Excellence & Character</span>
              </h2>
              
              <div className="space-y-6 text-sm md:text-base text-ink-muted leading-relaxed font-medium max-w-xl">
                <p>
                  Welcome to Vefos Academy. Our mission has always been clear: to provide a sanctuary where every child's potential is recognized and amplified. In Ablekuma, we have built more than a school; we have built a community.
                </p>
                <p>
                  We understand that the world is changing rapidly. That is why our approach combines traditional moral values with futuristic technical skills. When your child joins Vefos, they aren't just student number—they are future leaders.
                </p>
              </div>
              
              <button className="mt-10 text-xs font-bold uppercase tracking-[0.2em] border-b-2 border-brand-gold pb-1 text-brand-blue hover:text-brand-gold transition-colors">
                Read Full Statement
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
