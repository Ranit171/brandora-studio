import { useState } from 'react';
import { motion } from 'motion/react';
import { Check, ArrowRight } from 'lucide-react';
import { PROCESS_STEPS } from '../data/team';

interface ProcessProps {
  onOpenInquiry: () => void;
}

export default function Process({ onOpenInquiry }: ProcessProps) {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="process" className="relative py-28 sm:py-36 bg-[#09090b] border-t border-white/8">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/8 pb-10">
          <div>
            <div className="flex items-center gap-2 font-code text-xs tracking-widest text-[#d4ff32] uppercase">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#d4ff32]" />
              THE BLUEPRINT // 5-PHASE SPRINT
            </div>
            <h2 className="mt-3 font-heading text-4xl sm:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight text-white">
              FROM IDEA TO IMPACT
            </h2>
          </div>

          <p className="max-w-md font-sans text-sm sm:text-base text-zinc-400">
            A disciplined, zero-waste delivery pipeline honed over a decade of commercial product launches and multi-channel acquisition campaigns.
          </p>
        </div>

        {/* Vertical Step Timeline with Rich Interaction */}
        <div className="mt-16 space-y-6">
          {PROCESS_STEPS.map((step, idx) => {
            const isActive = activeStep === idx;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onClick={() => setActiveStep(idx)}
                className={`group cursor-pointer rounded-3xl border transition-all duration-400 p-8 sm:p-10 ${
                  isActive
                    ? 'border-white/30 bg-[#121217] shadow-2xl'
                    : 'border-white/8 bg-[#0d0d10] hover:border-white/18 hover:bg-[#101014]'
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Step Number & Title */}
                  <div className="lg:col-span-4">
                    <div className="flex items-baseline gap-4">
                      <span className="font-code text-base sm:text-lg font-bold text-zinc-500">
                        {step.number}
                      </span>
                      <span className="font-code text-xs tracking-widest text-zinc-400 uppercase">
                        {step.category}
                      </span>
                    </div>

                    <h3 className="mt-2 font-heading text-2xl sm:text-3xl font-extrabold text-white uppercase tracking-tight">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-zinc-400 font-medium">
                      {step.tagline}
                    </p>
                  </div>

                  {/* Step Description */}
                  <div className="lg:col-span-5">
                    <p className="text-sm sm:text-base leading-relaxed text-zinc-300">
                      {step.description}
                    </p>
                  </div>

                  {/* Deliverables Checklist */}
                  <div className="lg:col-span-3 border-t lg:border-t-0 lg:border-l border-white/8 pt-4 lg:pt-0 lg:pl-6 space-y-2">
                    <div className="font-code text-[10px] tracking-wider text-zinc-500 uppercase">
                      DELIVERABLES
                    </div>
                    {step.deliverables.map((item, dIdx) => (
                      <div
                        key={dIdx}
                        className="flex items-center gap-2 text-xs text-zinc-300 font-sans"
                      >
                        <Check className="h-3.5 w-3.5 shrink-0 text-[#d4ff32]" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Step Callout */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-6 rounded-2xl border border-white/8 bg-white/2 p-6 sm:p-8">
          <div className="space-y-1 text-center sm:text-left">
            <div className="font-display text-lg font-bold text-white uppercase">
              READY TO PLAN YOUR SPRINT?
            </div>
            <p className="text-xs text-zinc-400">
              We provide a transparent scope and fixed timeline before any commitment.
            </p>
          </div>

          <button
            onClick={onOpenInquiry}
            className="flex items-center gap-2 rounded-full bg-white px-6 py-3 font-code text-xs font-bold tracking-wider text-black uppercase hover:bg-zinc-200 transition-colors"
          >
            <span>SCHEDULE SCOPE CALL</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
}
