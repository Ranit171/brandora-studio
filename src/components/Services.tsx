import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Code2, TrendingUp, CheckCircle, Zap, Shield, Target, Award } from 'lucide-react';
import { WEB_SERVICES, MARKETING_SERVICES } from '../data/services';
import { ServiceItem } from '../types';

interface ServicesProps {
  onOpenInquiry: () => void;
}

export default function Services({ onOpenInquiry }: ServicesProps) {
  const [activeTab, setActiveTab] = useState<'all' | 'web' | 'marketing'>('all');
  const [hoveredService, setHoveredService] = useState<ServiceItem | null>(WEB_SERVICES[0]);

  const displayedServices =
    activeTab === 'all'
      ? [...WEB_SERVICES, ...MARKETING_SERVICES]
      : activeTab === 'web'
      ? WEB_SERVICES
      : MARKETING_SERVICES;

  return (
    <section id="services" className="relative py-24 sm:py-36 bg-[#09090b] border-t border-white/8">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/8 pb-10">
          <div>
            <div className="flex items-center gap-2 font-code text-xs tracking-widest text-[#ff477e] uppercase">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#ff477e]" />
              CAPABILITIES & METHODOLOGY
            </div>
            <h2 className="mt-3 font-heading text-4xl sm:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight text-white">
              WHAT WE DO
            </h2>
          </div>

          <p className="max-w-md font-sans text-sm sm:text-base text-zinc-400">
            We operate at the exact convergence of code and growth. We eliminate agency handoff friction by engineering digital experiences designed from inception to convert.
          </p>
        </div>

        {/* Studio Edge Cards (Inspired by the Reference Image "FEATURES" section) */}
        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="group rounded-2xl border border-white/8 bg-[#111114] p-6 transition-all hover:border-white/20 hover:bg-[#141418]">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-[#ff477e]">
              <Shield className="h-5 w-5" />
            </div>
            <h3 className="mt-5 font-display text-lg font-bold text-white uppercase">
              Direct Founders
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-zinc-400">
              Zero account managers, no junior handoffs. You work directly with the lead engineer and growth strategist.
            </p>
          </div>

          <div className="group rounded-2xl border border-white/8 bg-[#111114] p-6 transition-all hover:border-white/20 hover:bg-[#141418]">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-[#d4ff32]">
              <Zap className="h-5 w-5" />
            </div>
            <h3 className="mt-5 font-display text-lg font-bold text-white uppercase">
              Velocity Launch
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-zinc-400">
              Modern component architecture and focused sprint cycles take you from concept to live production in weeks, not quarters.
            </p>
          </div>

          <div className="group rounded-2xl border border-white/8 bg-[#111114] p-6 transition-all hover:border-white/20 hover:bg-[#141418]">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-[#ff6b4a]">
              <Target className="h-5 w-5" />
            </div>
            <h3 className="mt-5 font-display text-lg font-bold text-white uppercase">
              Growth Native
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-zinc-400">
              We never build "pretty sites" that don't convert. Technical SEO, CRO funnels, and tracking are baked into the core code.
            </p>
          </div>

          <div className="group rounded-2xl border border-white/8 bg-[#111114] p-6 transition-all hover:border-white/20 hover:bg-[#141418]">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-purple-400">
              <Award className="h-5 w-5" />
            </div>
            <h3 className="mt-5 font-display text-lg font-bold text-white uppercase">
              Bespoke Craft
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-zinc-400">
              Custom typography pairings, fluid physics, and tailored design systems that establish unassailable market authority.
            </p>
          </div>
        </div>

        {/* Discipline Filter Tabs */}
        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-b border-white/8 pb-6">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('all')}
              className={`rounded-full px-5 py-2 text-xs font-code tracking-wider uppercase transition-colors ${
                activeTab === 'all'
                  ? 'bg-white text-black font-semibold'
                  : 'bg-white/4 text-zinc-400 hover:text-white border border-white/8'
              }`}
            >
              ALL CAPABILITIES ({WEB_SERVICES.length + MARKETING_SERVICES.length})
            </button>

            <button
              onClick={() => setActiveTab('web')}
              className={`flex items-center gap-2 rounded-full px-5 py-2 text-xs font-code tracking-wider uppercase transition-colors ${
                activeTab === 'web'
                  ? 'bg-white text-black font-semibold'
                  : 'bg-white/4 text-zinc-400 hover:text-white border border-white/8'
              }`}
            >
              <Code2 className="h-3.5 w-3.5" />
              <span>WEB DEVELOPMENT ({WEB_SERVICES.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('marketing')}
              className={`flex items-center gap-2 rounded-full px-5 py-2 text-xs font-code tracking-wider uppercase transition-colors ${
                activeTab === 'marketing'
                  ? 'bg-white text-black font-semibold'
                  : 'bg-white/4 text-zinc-400 hover:text-white border border-white/8'
              }`}
            >
              <TrendingUp className="h-3.5 w-3.5" />
              <span>DIGITAL MARKETING ({MARKETING_SERVICES.length})</span>
            </button>
          </div>

          <div className="hidden lg:block font-code text-xs text-zinc-500">
            HOVER OVER A SERVICE TO INSPECT DELIVERABLES
          </div>
        </div>

        {/* Interactive Services Layout: Editorial Rows + Dynamic Live Preview */}
        <div className="mt-8 grid grid-cols-1 gap-12 lg:grid-cols-12 items-start">
          {/* Service Interactive Rows */}
          <div className="lg:col-span-7 divide-y divide-white/8">
            {displayedServices.map((service, index) => {
              const isHovered = hoveredService?.id === service.id;
              return (
                <div
                  key={service.id}
                  onMouseEnter={() => setHoveredService(service)}
                  onClick={() => setHoveredService(service)}
                  className={`group relative py-6 cursor-pointer transition-all duration-300 ${
                    isHovered ? 'pl-4' : 'hover:pl-2'
                  }`}
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <div className="flex items-baseline gap-4">
                      <span className="font-code text-xs text-zinc-500">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <h3
                        className={`font-heading text-xl sm:text-2xl font-bold uppercase transition-colors ${
                          isHovered ? 'text-white' : 'text-zinc-400 group-hover:text-zinc-200'
                        }`}
                      >
                        {service.title}
                      </h3>
                    </div>

                    <span className="shrink-0 font-code text-[11px] uppercase tracking-wider text-zinc-500 border border-white/8 rounded-full px-2.5 py-0.5">
                      {service.discipline === 'web' ? 'ENGINEERING' : 'GROWTH'}
                    </span>
                  </div>

                  <p className="mt-2 text-xs sm:text-sm text-zinc-400 max-w-xl">
                    {service.shortDesc}
                  </p>

                  {/* Mobile deliverables view */}
                  <div className="mt-3 flex flex-wrap gap-2 lg:hidden">
                    {service.deliverables.map((item, i) => (
                      <span
                        key={i}
                        className="rounded-md border border-white/8 bg-white/4 px-2 py-0.5 text-[10px] font-code text-zinc-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Sticky Visual Preview on Desktop */}
          <div className="hidden lg:block lg:col-span-5 sticky top-32">
            <AnimatePresence mode="wait">
              {hoveredService && (
                <motion.div
                  key={hoveredService.id}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden rounded-3xl border border-white/10 bg-[#121216] p-6 shadow-2xl"
                >
                  {/* Visual Preview Image */}
                  <div className="relative h-60 w-full overflow-hidden rounded-2xl bg-zinc-900">
                    <img
                      src={hoveredService.previewImage}
                      alt={hoveredService.title}
                      className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                      <span className="rounded-full bg-black/60 px-3 py-1 font-code text-[11px] font-medium text-white backdrop-blur-md">
                        {hoveredService.tag}
                      </span>
                      <span className="font-code text-[11px] text-zinc-300">
                        {hoveredService.discipline === 'web' ? 'Alex Vance' : 'Elena Vance'}
                      </span>
                    </div>
                  </div>

                  {/* Deliverables details */}
                  <div className="mt-6">
                    <div className="font-code text-[11px] tracking-widest text-[#ff477e] uppercase">
                      DELIVERABLES & SCOPE
                    </div>
                    <h4 className="mt-1 font-heading text-xl font-bold text-white uppercase">
                      {hoveredService.title}
                    </h4>

                    <div className="mt-4 space-y-2.5">
                      {hoveredService.deliverables.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2.5 text-xs text-zinc-300 font-sans"
                        >
                          <CheckCircle className="h-3.5 w-3.5 shrink-0 text-[#ff477e]" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={onOpenInquiry}
                      className="mt-6 flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 py-3 text-xs font-code font-bold tracking-wider text-white transition-colors hover:bg-white hover:text-black hover:border-white"
                    >
                      <span>INQUIRE ABOUT THIS SERVICE</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
