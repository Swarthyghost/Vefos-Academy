import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Target, Users, BookOpen, Microscope, Globe } from 'lucide-react';

export default function WhyVefos() {
  const reasons = [
    {
      title: "Safe Environment",
      description: "Our Ablekuma campus is secured with 24/7 surveillance and specialized child-care staff to ensure your child feels home away from home."
    },
    {
      title: "GES + International",
      description: "We go beyond textbooks, integrating the GES curriculum with international best practices to foster critical thinking."
    },
    {
      title: "Modern Facilities",
      description: "Equipped science labs, a digital library, and a computer room provide students with hands-on technical skills."
    },
    {
      title: "Character First",
      description: "Education without character is incomplete. We instill core values like integrity, discipline, and empathy."
    }
  ];

  return (
    <section id="why" className="py-24 bg-paper border-b border-border-subtle relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-10 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-gold mb-4">The Vefos Advantage</h3>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-blue mb-6">
            Trust Meets Excellence
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0 border border-border-subtle">
          {reasons.map((reason, i) => (
            <div
              key={i}
              className={`p-10 flex flex-col items-start bg-white hover:bg-paper-dark transition-all duration-300 border-b lg:border-b-0 ${i !== reasons.length - 1 ? 'lg:border-r border-border-subtle' : ''}`}
            >
              <span className="text-[10px] font-bold text-brand-gold mb-6 tracking-widest">0{i + 1}</span>
              <h3 className="text-xl font-serif font-bold text-brand-blue mb-4 uppercase tracking-tight">{reason.title}</h3>
              <p className="text-ink-muted leading-relaxed text-sm italic">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
