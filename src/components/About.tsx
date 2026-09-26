import { useState } from 'react';
import { motion } from 'motion/react';
import { Code2, TrendingUp, Check, ArrowUpRight, Terminal, LineChart } from 'lucide-react';
import { FOUNDERS } from '../data/team';

interface AboutProps {
  onOpenInquiry: () => void;
}

export default function About({ onOpenInquiry }: AboutProps) {
  const [activeFounderIndex, setActiveFounderIndex] = useState(0);

  return (
    <section id="about" className="relative py-28 sm:py-36 bg-[#09090b] border-t border-white/8 overflow-hidden">
      {/* Subtle background ambient mesh */}
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-[#ff477e]/5 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        {/* Section Top Label */}
        <div className="flex items-center gap-2 font-code text-xs tracking-widest text-zinc-400 uppercase">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-white" />
          ABOUT THE STUDIO // PHILOSOPHY
        </div>

        {/* Dramatic Editorial Headline */}
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8">
            <h2 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-extrabold uppercase leading-[0.95] tracking-tight text-white">
              TWO DISCIPLINES. <br />
              <span className="font-editorial italic font-normal text-zinc-300">
                ONE DIGITAL STUDIO.
              </span>
            </h2>
          </div>

          <div className="lg:col-span-4">
            <p className="font-sans text-base leading-relaxed text-zinc-400">
              Most digital projects fail in the void between the creative developer and the performance marketer. We fused both disciplines into one agile, razor-sharp studio.
            </p>
          </div>
        </div>

        {/* BUILD × MARKET × GROW Kinetic Ribbon */}
        <div className="mt-14 overflow-hidden rounded-2xl border border-white/8 bg-[#111114] py-5 px-6">
          <div className="flex flex-wrap items-center justify-between gap-6 font-heading text-lg sm:text-2xl font-bold tracking-widest text-zinc-300 uppercase">
            <span className="flex items-center gap-3">
              <span className="text-[#ff477e]">01</span>
              <span>BUILD</span>
            </span>
            <span className="text-zinc-600">×</span>
            <span className="flex items-center gap-3">
              <span className="text-[#d4ff32]">02</span>
              <span>MARKET</span>
            </span>
            <span className="text-zinc-600">×</span>
            <span className="flex items-center gap-3">
              <span className="text-[#ff6b4a]">03</span>
              <span>GROW</span>
            </span>
          </div>
        </div>

        {/* The Two Founders: Co-Founders in Focus */}
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {FOUNDERS.map((founder, index) => {
            const isEngineer = index === 0;
            return (
              <motion.div
                key={founder.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group relative rounded-3xl border border-white/10 bg-[#121216] p-8 sm:p-10 transition-all hover:border-white/20"
              >
                {/* Founder Header */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={founder.avatar}
                      alt={founder.name}
                      className="h-16 w-16 rounded-2xl object-cover border border-white/15"
                    />
                    <div>
                      <div className="font-code text-[11px] tracking-widest text-zinc-500 uppercase">
                        {founder.coordinates}
                      </div>
                      <h3 className="font-heading text-2xl font-bold text-white uppercase tracking-tight">
                        {founder.name}
                      </h3>
                      <div className="text-xs font-medium text-zinc-400">
                        {founder.discipline}
                      </div>
                    </div>
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-white">
                    {isEngineer ? (
                      <Terminal className="h-5 w-5 text-[#ff477e]" />
                    ) : (
                      <LineChart className="h-5 w-5 text-[#d4ff32]" />
                    )}
                  </div>
                </div>

                {/* Bio */}
                <p className="mt-6 text-sm leading-relaxed text-zinc-300 font-sans">
                  {founder.bio}
                </p>

                {/* Core Focus Area Pills */}
                <div className="mt-8 border-t border-white/8 pt-6">
                  <div className="font-code text-[10px] tracking-widest text-zinc-500 uppercase mb-3">
                    CORE EXPERTISE & ARSENAL
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {founder.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="rounded-lg border border-white/6 bg-white/3 px-3 py-1.5 font-code text-xs text-zinc-300 transition-colors group-hover:border-white/15"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Why a Two-Person Studio Wins */}
        <div className="mt-16 rounded-3xl border border-white/10 bg-gradient-to-b from-[#14141a] to-[#0d0d10] p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5">
              <span className="font-code text-xs tracking-widest text-[#ff477e] uppercase">
                THE STUDIO ADVANTAGE
              </span>
              <h3 className="mt-2 font-heading text-3xl sm:text-4xl font-extrabold uppercase text-white tracking-tight">
                WHY TWO SPECIALISTS BEAT A 40-PERSON AGENCY
              </h3>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <div className="font-display font-bold text-white uppercase text-base flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#d4ff32]" />
                  Zero Telephone Game
                </div>
                <p className="text-xs leading-relaxed text-zinc-400">
                  You communicate directly with the person writing your code and directing your media spend. No lost translations.
                </p>
              </div>

              <div className="space-y-2">
                <div className="font-display font-bold text-white uppercase text-base flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#ff477e]" />
                  Compounding Alignment
                </div>
                <p className="text-xs leading-relaxed text-zinc-400">
                  Code and marketing inform each other in real-time. Faster sites lead to cheaper ad clicks, which leads to higher ROI.
                </p>
              </div>

              <div className="space-y-2">
                <div className="font-display font-bold text-white uppercase text-base flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
                  Elite Velocity
                </div>
                <p className="text-xs leading-relaxed text-zinc-400">
                  No internal bureaucracy or 6-layer approval queues. Sprints move in days, producing measurable results faster.
                </p>
              </div>

              <div className="space-y-2">
                <div className="font-display font-bold text-white uppercase text-base flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                  Skin In The Game
                </div>
                <p className="text-xs leading-relaxed text-zinc-400">
                  Our reputation is on the line with every single client. We take on a strictly limited client roster each quarter.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
