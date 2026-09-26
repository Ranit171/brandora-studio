import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, ArrowDown } from 'lucide-react';
import MagneticButton from './MagneticButton';

interface HeroProps {
  onOpenInquiry: () => void;
  onViewWork: () => void;
}

export default function Hero({ onOpenInquiry, onViewWork }: HeroProps) {
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 20;
    const y = (clientY / innerHeight - 0.5) * 20;
    setMouseOffset({ x, y });
  };

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      className="relative min-h-[92vh] flex flex-col justify-between pt-32 pb-12 sm:pt-40 sm:pb-20 overflow-hidden bg-[#09090b]"
    >
      {/* Ambient Top Center Radial Glow (matching reference image) */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[550px] w-[850px] max-w-full rounded-full bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.09)_0%,rgba(255,71,126,0.03)_40%,transparent_75%)] blur-2xl" />

      {/* Subtle floating ambient noise texture */}
      <div className="pointer-events-none absolute inset-0 noise-overlay opacity-30" />

      {/* Top Bar Indicators in Hero */}
      <div className="relative mx-auto w-full max-w-7xl px-6 sm:px-10">
        <div className="flex items-center justify-between border-b border-white/8 pb-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 font-code text-[11px] tracking-widest text-zinc-400 uppercase"
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#ff477e]" />
            <span>DIGITAL STUDIO // WEB × MARKETING</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="hidden sm:flex items-center gap-6 font-code text-[11px] tracking-widest text-zinc-400 uppercase"
          >
            <span>BASED WORLDWIDE</span>
            <span>•</span>
            <span className="text-zinc-300">ACCEPTING CLIENTS Q2 / Q3</span>
            <span className="flex h-6 w-6 items-center justify-center rounded-md border border-white/12 bg-white/5 text-white">
              <ArrowUpRight className="h-3.5 w-3.5" />
            </span>
          </motion.div>
        </div>
      </div>

      {/* Main Dramatic Editorial Headline */}
      <div className="relative mx-auto my-auto w-full max-w-7xl px-6 sm:px-10 py-10 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-end">
          {/* Huge Headline Columns */}
          <div className="lg:col-span-7 xl:col-span-8 min-w-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="font-heading font-extrabold uppercase leading-[0.9] tracking-[-0.03em] text-white text-3xl sm:text-5xl md:text-6xl lg:text-[46px] xl:text-[58px] 2xl:text-[62px]">
                <span className="block">
                  WE BUILD
                </span>
                <span className="block tracking-tight">
                  DIGITAL—
                </span>
                <span className="block tracking-[-0.035em]">
                  EXPERIENCES
                </span>
                <span className="mt-1 block font-editorial font-normal italic tracking-normal text-[#f4f4f5] text-[1.12em] leading-[0.95]">
                  THAT GROW.
                </span>
              </h1>
            </motion.div>
          </div>

          {/* Supporting Copy & Two Founders Intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 xl:col-span-4 min-w-0 space-y-6 lg:pb-2"
          >
            <p className="font-sans text-base sm:text-lg leading-relaxed text-zinc-300">
              We are a two-person digital studio combining <span className="text-white font-medium">high-performance web engineering</span> with <span className="text-white font-medium">data-driven digital marketing</span> to build brands, websites, and experiences that turn attention into sustainable growth.
            </p>

            <div className="border-l border-white/15 pl-4 text-xs font-code tracking-wider text-zinc-400 space-y-1">
              <div>ALEX VANCE — LEAD WEB ARCHITECT</div>
              <div>ELENA VANCE — HEAD OF DIGITAL GROWTH</div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <MagneticButton
                onClick={onOpenInquiry}
                dataCursor="cta"
                className="group flex items-center gap-2.5 rounded-full bg-white px-7 py-3.5 text-xs font-code font-bold tracking-widest text-black uppercase transition-all hover:bg-zinc-200 active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.2)]"
              >
                <span>START A PROJECT</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </MagneticButton>

              <MagneticButton
                onClick={onViewWork}
                dataCursor="pointer"
                className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-xs font-code font-semibold tracking-wider text-zinc-300 backdrop-blur-sm transition-colors hover:border-white/40 hover:text-white"
              >
                <span>VIEW OUR WORK</span>
              </MagneticButton>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar: Rotating "SCROLL TO EXPLORE" Badge + Value Ticker */}
      <div className="relative mx-auto w-full max-w-7xl px-6 sm:px-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-white/8 pt-8">
          {/* Subtle capabilities pill list */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-code text-zinc-400">
            <span className="rounded-full border border-white/8 bg-white/4 px-3 py-1">
              FULL-STACK WEB
            </span>
            <span className="rounded-full border border-white/8 bg-white/4 px-3 py-1">
              ORGANIC SEO
            </span>
            <span className="rounded-full border border-white/8 bg-white/4 px-3 py-1">
              PAID MEDIA SCALING
            </span>
            <span className="rounded-full border border-white/8 bg-white/4 px-3 py-1">
              CONVERSION CRO
            </span>
          </div>

          {/* Rotating Circular "SCROLL TO EXPLORE" Badge (from reference image) */}
          <div
            onClick={onViewWork}
            className="group relative flex h-20 w-20 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-white/2 transition-colors hover:border-white/30"
            data-cursor="pointer"
          >
            {/* Spinning SVG text ring */}
            <motion.svg
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 12, ease: 'linear' }}
              className="absolute inset-0 h-full w-full"
              viewBox="0 0 100 100"
            >
              <defs>
                <path
                  id="circlePath"
                  d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                />
              </defs>
              <text className="font-code text-[8.5px] uppercase tracking-[2.5px] fill-zinc-400">
                <textPath href="#circlePath" startOffset="0%">
                  • SCROLL TO EXPLORE • BRANDORA STUDIO
                </textPath>
              </text>
            </motion.svg>

            {/* Central Down Arrow */}
            <ArrowDown className="h-4 w-4 text-white transition-transform duration-300 group-hover:translate-y-1" />
          </div>
        </div>
      </div>
    </section>
  );
}
