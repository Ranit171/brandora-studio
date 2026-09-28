import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight, ArrowUpRight, CheckCircle2, TrendingUp, Cpu, Globe } from 'lucide-react';
import { Project } from '../types';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
  onNextProject: (nextProject: Project) => void;
  allProjects: Project[];
}

export default function CaseStudyModal({
  project,
  onClose,
  onNextProject,
  allProjects
}: CaseStudyModalProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      // Pause smooth scroll on main page so wheel events don't leak to background
      const lenis = (window as unknown as { __lenisInstance?: { stop: () => void; start: () => void } }).__lenisInstance;
      lenis?.stop();
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      // Resume smooth scroll on main page
      const lenis = (window as unknown as { __lenisInstance?: { stop: () => void; start: () => void } }).__lenisInstance;
      lenis?.start();
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  // Reset scroll to top when opening or switching projects
  useEffect(() => {
    if (project && scrollRef.current) {
      scrollRef.current.scrollTop = 0;
    }
  }, [project?.id]);

  if (!project) return null;

  const currentIndex = allProjects.findIndex((p) => p.id === project.id);
  const nextProject = allProjects[(currentIndex + 1) % allProjects.length];

  return (
    <AnimatePresence>
      <div
        ref={scrollRef}
        data-lenis-prevent
        data-lenis-prevent-wheel
        data-lenis-prevent-touch
        className="fixed inset-0 z-100 overflow-y-auto overscroll-contain bg-black/90 backdrop-blur-xl"
        style={{ WebkitOverflowScrolling: 'touch' }}
      >
        {/* Floating Top Control Bar */}
        <div className="sticky top-0 z-50 flex items-center justify-between border-b border-white/10 bg-[#09090b]/85 px-6 py-4 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <span className="font-code text-xs font-bold text-white/50">{project.number}</span>
            <span className="h-3 w-px bg-white/20" />
            <span className="font-display text-sm font-bold tracking-wider text-white uppercase">
              {project.title} — CASE STUDY
            </span>
          </div>

          <div className="flex items-center gap-3">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 font-code text-xs font-bold text-black transition-all hover:bg-[#ff477e] hover:text-white shadow-lg"
              >
                <span>OPEN LIVE SITE</span>
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            )}

            <button
              onClick={() => onNextProject(nextProject)}
              className="group hidden sm:flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-code tracking-wider text-zinc-300 transition-colors hover:border-white/30 hover:text-white"
            >
              <span>NEXT CASE ({nextProject.title})</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={onClose}
              className="group flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/10 text-zinc-300 transition-colors hover:border-white/40 hover:bg-white/20 hover:text-white"
              aria-label="Close case study"
            >
              <X className="h-4 w-4 transition-transform group-hover:rotate-90" />
            </button>
          </div>
        </div>

        {/* Modal Content Scroll Area */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-6xl px-4 py-8 sm:px-8 sm:py-16"
        >
          {/* Top Metadata Header */}
          <div className="mb-10">
            <div className="flex flex-wrap items-center gap-2 font-code text-xs tracking-widest text-[#ff477e] uppercase">
              <span>{project.category}</span>
              <span>•</span>
              <span className="text-zinc-400">CLIENT: {project.client}</span>
              <span>•</span>
              <span className="text-zinc-400">YEAR: {project.year}</span>
            </div>

            <h1 className="mt-4 font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white uppercase">
              {project.title}
            </h1>
            <p className="mt-4 max-w-3xl font-editorial text-xl sm:text-2xl text-zinc-300 italic">
              "{project.subtitle}"
            </p>

            {/* Service badges */}
            <div className="mt-6 flex flex-wrap gap-2">
              {project.services.map((srv) => (
                <span
                  key={srv}
                  className="rounded-full border border-white/10 bg-white/4 px-3.5 py-1 text-xs font-code text-zinc-300"
                >
                  {srv}
                </span>
              ))}
            </div>

            {/* Live Project Action CTA */}
            {project.link && (
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2.5 rounded-full bg-white px-7 py-3.5 font-code text-xs font-bold uppercase tracking-widest text-black transition-all hover:bg-[#ff477e] hover:text-white shadow-xl hover:shadow-[#ff477e]/25 hover:scale-105 active:scale-95"
                >
                  <Globe className="h-4 w-4" />
                  <span>VISIT LIVE PRODUCTION SITE</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <span className="inline-flex items-center gap-2 font-code text-xs text-zinc-400">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  Deployed & Active on Vercel
                </span>
              </div>
            )}
          </div>

          {/* Large Hero Image */}
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900 shadow-2xl">
            <img
              src={project.coverImage}
              alt={project.title}
              className="h-[50vh] sm:h-[65vh] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-6 right-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/75 px-5 py-2.5 font-code text-xs font-semibold text-white backdrop-blur-md transition-all hover:bg-white hover:text-black hover:scale-105"
              >
                <span>OPEN LIVE SITE</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            )}
          </div>

          {/* Key Metrics Bento */}
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {project.results.map((res, i) => (
              <div
                key={i}
                className="rounded-2xl border border-white/8 bg-[#111115] p-6 text-center sm:text-left transition-colors hover:border-white/20"
              >
                <div className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                  {res.metric}
                </div>
                <div className="mt-2 font-code text-xs tracking-wider text-zinc-400 uppercase">
                  {res.label}
                </div>
              </div>
            ))}
          </div>

          {/* Narrative Breakdown (Challenge vs Strategy) */}
          <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="rounded-3xl border border-white/8 bg-[#111115]/60 p-8 sm:p-10">
              <div className="font-code text-xs tracking-widest text-zinc-500 uppercase">
                01 / THE CORE CHALLENGE
              </div>
              <h3 className="mt-3 font-display text-2xl font-bold text-white uppercase">
                The Bottleneck
              </h3>
              <p className="mt-4 leading-relaxed text-zinc-300 text-base">
                {project.challenge}
              </p>
            </div>

            <div className="rounded-3xl border border-white/8 bg-[#111115]/60 p-8 sm:p-10">
              <div className="font-code text-xs tracking-widest text-[#ff477e] uppercase">
                02 / THE ARCHITECTURE & STRATEGY
              </div>
              <h3 className="mt-3 font-display text-2xl font-bold text-white uppercase">
                The Strategic Solution
              </h3>
              <p className="mt-4 leading-relaxed text-zinc-300 text-base">
                {project.strategy}
              </p>
            </div>
          </div>

          {/* Two Disciplines in Action: Web Engineering vs Growth Marketing */}
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* What We Built (Web Dev) */}
            <div className="rounded-3xl border border-white/10 bg-[#121216] p-8 sm:p-10">
              <div className="flex items-center gap-2.5 text-white">
                <Cpu className="h-5 w-5 text-[#ff477e]" />
                <h4 className="font-display text-xl font-bold uppercase tracking-wide">
                  What We Built (Web Development)
                </h4>
              </div>
              <p className="mt-2 text-xs text-zinc-400 font-code">
                ENGINEERED BY RANIT BASAK
              </p>
              <ul className="mt-6 space-y-3.5">
                {project.whatWeBuilt.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-zinc-300">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-[#ff477e] mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Marketing Approach (Growth) */}
            <div className="rounded-3xl border border-white/10 bg-[#121216] p-8 sm:p-10">
              <div className="flex items-center gap-2.5 text-white">
                <TrendingUp className="h-5 w-5 text-[#d4ff32]" />
                <h4 className="font-display text-xl font-bold uppercase tracking-wide">
                  Marketing Approach (Growth & CRO)
                </h4>
              </div>
              <p className="mt-2 text-xs text-zinc-400 font-code">
                DIRECTED BY ARNAB MAJUMDAR
              </p>
              <ul className="mt-6 space-y-3.5">
                {project.marketingApproach.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-zinc-300">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-[#d4ff32] mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Secondary Visual Gallery */}
          {project.secondaryImages && project.secondaryImages.length > 0 && (
            <div className="mt-16">
              <div className="mb-6 flex items-center justify-between border-b border-white/8 pb-4">
                <h3 className="font-display text-xl font-bold text-white uppercase tracking-wider">
                  VISUAL ARTIFACTS & DETAILS
                </h3>
                <span className="font-code text-xs text-zinc-500">
                  {project.secondaryImages.length} VIEWS
                </span>
              </div>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {project.secondaryImages.map((imgUrl, i) => (
                  <div
                    key={i}
                    className="overflow-hidden rounded-2xl border border-white/8 bg-zinc-900 shadow-xl"
                  >
                    <img
                      src={imgUrl}
                      alt={`${project.title} detail ${i + 1}`}
                      className="h-80 w-full object-cover transition-transform duration-700 hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Bottom Next Project Footer */}
          <div className="mt-20 border-t border-white/12 pt-12">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 rounded-3xl border border-white/10 bg-gradient-to-r from-white/4 to-white/1 p-8 sm:p-12">
              <div>
                <span className="font-code text-xs tracking-widest text-zinc-400 uppercase">
                  UP NEXT
                </span>
                <h4 className="mt-1 font-display text-2xl sm:text-3xl font-bold text-white uppercase">
                  {nextProject.number} — {nextProject.title}
                </h4>
                <p className="mt-1 text-sm text-zinc-400">
                  {nextProject.category}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-4 font-code text-xs font-bold tracking-widest text-white uppercase transition-all hover:bg-white hover:text-black"
                  >
                    <span>VISIT THIS SITE</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                )}

                <button
                  onClick={() => onNextProject(nextProject)}
                  className="group flex items-center gap-3 rounded-full bg-white px-8 py-4 font-code text-xs font-bold tracking-widest text-black uppercase transition-all hover:scale-105 active:scale-95"
                >
                  <span>EXPLORE NEXT CASE</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
