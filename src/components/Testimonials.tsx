import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: "Mrs. Janet Asante",
      text: "The change in my daughter's confidence since joining Vefos is remarkable. We finally feel at home."
    },
    {
      name: "Mr. David Tetteh",
      text: "The focus on both academics and character is truly unique. Vefos is a community, not just a school."
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-paper-dark border-b border-border-subtle relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-10">
        <div className="grid md:grid-cols-2 gap-0 border border-border-subtle">
           {/* Section Label */}
           <div className="p-12 border-b md:border-b-0 md:border-r border-border-subtle flex flex-col justify-center bg-paper">
            <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-gold mb-6">Parent Voices</h3>
            <h2 className="text-4xl font-serif font-bold text-brand-blue leading-tight italic">
              "A remarkable <br /> transformation in <br /> every child."
            </h2>
          </div>

          <div className="flex flex-col">
            {reviews.map((review, i) => (
              <div key={i} className={`p-12 bg-white flex flex-col justify-center ${i === 0 ? 'border-b border-border-subtle' : ''}`}>
                <p className="text-lg font-serif italic text-ink-muted leading-relaxed mb-6">
                  "{review.text}"
                </p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-brand-blue">— {review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
