import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowRight, Quote, Sparkles } from 'lucide-react';
import { TESTIMONIALS } from '../data/testimonials';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const current = TESTIMONIALS[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="relative py-28 sm:py-36 bg-[#09090b] border-t border-white/8">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-white/8 pb-8">
          <div>
            <div className="flex items-center gap-2 font-code text-xs tracking-widest text-[#ff477e] uppercase">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#ff477e]" />
              CLIENT VOICES & PERSPECTIVES
            </div>
            <h2 className="mt-3 font-heading text-4xl sm:text-6xl font-extrabold uppercase tracking-tight text-white">
              WHAT FOUNDERS SAY
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <span className="font-code text-[11px] text-zinc-500 uppercase">
              [SAMPLE FEEDBACK ARCHIVE]
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-colors hover:border-white/30 hover:bg-white/10"
                aria-label="Previous testimonial"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button
                onClick={handleNext}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-colors hover:border-white/30 hover:bg-white/10"
                aria-label="Next testimonial"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Editorial Testimonial Card */}
        <div className="mt-14 relative overflow-hidden rounded-3xl border border-white/10 bg-[#111115] p-8 sm:p-14 shadow-2xl">
          <Quote className="h-10 w-10 text-white/10 mb-6" />

          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="space-y-8"
            >
              <p className="font-editorial text-xl sm:text-3xl md:text-4xl font-normal leading-relaxed text-zinc-100 italic">
                "{current.quote}"
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-t border-white/8 pt-8">
                <div className="flex items-center gap-4">
                  <img
                    src={current.avatar}
                    alt={current.clientName}
                    className="h-12 w-12 rounded-full object-cover border border-white/20"
                  />
                  <div>
                    <h3 className="font-display text-base font-bold text-white uppercase tracking-tight">
                      {current.clientName}
                    </h3>
                    <div className="font-code text-xs text-zinc-400">
                      {current.role} — <span className="text-zinc-300">{current.company}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-2xl border border-white/8 bg-white/3 px-5 py-3">
                  <Sparkles className="h-4 w-4 text-[#ff477e]" />
                  <div>
                    <div className="font-display text-lg font-black text-white">
                      {current.highlightMetric}
                    </div>
                    <div className="font-code text-[10px] text-zinc-400 uppercase">
                      {current.metricLabel}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots Indicator */}
          <div className="mt-8 flex items-center justify-center gap-2">
            {TESTIMONIALS.map((t, idx) => (
              <button
                key={t.id}
                onClick={() => setCurrentIndex(idx)}
                className={`h-1.5 transition-all rounded-full ${
                  currentIndex === idx ? 'w-8 bg-white' : 'w-2 bg-white/20'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
