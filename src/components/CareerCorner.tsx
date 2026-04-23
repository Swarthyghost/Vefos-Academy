import career1 from '../assets/career1.png';
import career2 from '../assets/career2.png';
import career3 from '../assets/career3.png';
import { motion } from 'motion/react';

export default function CareerCorner() {
  const students = [
    {
      name: "Akosua",
      costume: "Future Leader",
      image: career1,
      quote: "I want to heal people and make sure everyone in our community stays healthy and strong!"
    },
    {
      name: "Kwame",
      costume: "Future Architect",
      image: career2,
      quote: "I will build solar-powered cities that will help save our planet and provide constant energy for all."
    },
    {
      name: "Efua",
      costume: "Future Explorer",
      image: career3,
      quote: "The sky is not the limit, it's my office. I want to see every corner of the world from above!"
    }
  ];

  return (
    <section className="py-24 bg-white border-b border-border-subtle overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-gold mb-4">Future Aspirations</h3>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-blue mb-6">Dreaming Big at Vefos</h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-0 border border-border-subtle">
          {students.map((student, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className={`group flex flex-col items-center border-b lg:border-b-0 ${i !== students.length - 1 ? 'lg:border-r border-border-subtle' : ''}`}
            >
              <div className="w-full aspect-[4/5] overflow-hidden">
                 <img
                  src={student.image}
                  alt={student.name}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-10 bg-paper group-hover:bg-paper-dark transition-colors w-full border-t border-border-subtle">
                <div className="bg-white p-6 border-l-4 border-brand-blue shadow-sm mb-6">
                  <p className="text-xl font-serif italic text-brand-blue leading-tight mb-4">"{student.quote}"</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-ink-muted">— {student.name}, {student.costume}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
