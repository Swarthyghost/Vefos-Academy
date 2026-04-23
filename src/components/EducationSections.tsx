import React from 'react';
import { motion } from 'motion/react';
import { Baby, School, GraduationCap, ChevronRight } from 'lucide-react';

export default function EducationSections() {
  const sections = [
    {
      id: 'nursery',
      title: 'Nursery',
      age: 'Ages 2-5',
      description: "A playful and nurturing environment where toddlers begin their journey of discovery through song, play, and foundational literacy."
    },
    {
      id: 'primary',
      title: 'Primary',
      age: 'Ages 6-12',
      description: "Building a solid academic foundation with focus on core subjects, moral training, and extracurricular exploration."
    },
    {
      id: 'secondary',
      title: 'Secondary',
      age: 'Ages 13-18',
      description: "Preparing future leaders through rigorous academics, leadership programs, and career-focused mentorship."
    }
  ];

  return (
    <section id="sections" className="py-24 bg-paper border-b border-border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-10">
        <div className="grid md:grid-cols-12 gap-0 border border-border-subtle">
          {/* Header */}
          <div className="md:col-span-4 p-8 border-b md:border-b-0 md:border-r border-border-subtle flex flex-col justify-center">
            <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-gold mb-6">Our Academic blocks</h3>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-blue leading-tight mb-6">
              Excellence at <br /> Every Stage
            </h2>
            <p className="text-sm text-ink-muted leading-relaxed italic">
              From early childhood development to advanced secondary preparation, we provide a continuous path of growth.
            </p>
          </div>

          {/* List */}
          <div className="md:col-span-8 grid md:grid-cols-3 gap-0">
            {sections.map((section, i) => (
              <div key={section.id} className={`p-10 flex flex-col justify-between hover:bg-paper-dark transition-colors border-b last:border-b-0 md:border-b-0 ${i !== sections.length - 1 ? 'md:border-r border-border-subtle' : ''}`}>
                <div>
                  <div className="flex justify-between items-end border-b border-border-subtle pb-4 mb-8">
                    <span className="text-2xl font-serif text-brand-blue">{section.title}</span>
                    <span className="text-[10px] uppercase font-bold text-brand-gold tracking-widest">{section.age}</span>
                  </div>
                  <p className="text-sm text-ink-muted leading-relaxed mb-8">
                    {section.description}
                  </p>
                </div>
                <button className="text-[10px] uppercase font-bold tracking-[0.2em] text-brand-blue hover:text-brand-gold flex items-center transition-colors">
                  Learn More <ChevronRight className="w-3 h-3 ml-1" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
