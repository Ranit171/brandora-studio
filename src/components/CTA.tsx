import { motion } from 'motion/react';
import { ArrowUpRight, Mail, Send, Sparkles } from 'lucide-react';
import MagneticButton from './MagneticButton';

interface CTAProps {
  onOpenInquiry: () => void;
}

export default function CTA({ onOpenInquiry }: CTAProps) {
  return (
    <section
      id="contact"
      className="relative py-32 sm:py-44 bg-[#09090b] border-t border-white/8 overflow-hidden"
    >
      {/* Dramatic Ambient Background Lighting */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 h-[500px] w-[800px] max-w-full rounded-full bg-[radial-gradient(circle_at_bottom,rgba(255,255,255,0.08)_0%,rgba(255,71,126,0.03)_40%,transparent_70%)] blur-2xl" />

      <div className="mx-auto max-w-7xl px-6 sm:px-10 relative z-10">
        {/* Top Tag */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 font-code text-xs tracking-widest text-[#ff477e] uppercase">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#ff477e]" />
            INITIATE COLLABORATION // Q2 & Q3 ROSTER
          </div>
        </div>

        {/* Huge Headline */}
        <div className="mt-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-heading font-black uppercase text-4xl sm:text-7xl md:text-8xl lg:text-[108px] leading-[0.88] tracking-[-0.03em] text-white"
          >
            <span className="block">LET'S MAKE</span>
            <span className="block text-zinc-300">SOMETHING</span>
            <span className="font-editorial italic font-normal text-white block mt-2 text-5xl sm:text-7xl md:text-8xl lg:text-[116px]">
              WORTH SEEING.
            </span>
          </motion.h2>

          <p className="mx-auto mt-8 max-w-xl font-sans text-base sm:text-xl text-zinc-300 leading-relaxed">
            Have a website, digital product, or commercial growth challenge? Talk directly with our founders today.
          </p>

          {/* Interactive Dual Action Buttons */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <MagneticButton
              onClick={onOpenInquiry}
              dataCursor="cta"
              className="group flex items-center gap-3 rounded-full bg-white px-8 sm:px-10 py-4 sm:py-5 text-xs sm:text-sm font-code font-bold tracking-widest text-black uppercase transition-all hover:bg-zinc-200 active:scale-95 shadow-[0_0_40px_rgba(255,255,255,0.25)]"
            >
              <span>START A PROJECT</span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </MagneticButton>

            <a
              href="mailto:founders@brandorastudio.dev?subject=Project%20Inquiry%20via%20Brandora%20Studio"
              data-cursor="pointer"
              className="group flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-8 sm:px-10 py-4 sm:py-5 text-xs sm:text-sm font-code font-semibold tracking-wider text-white backdrop-blur-md transition-colors hover:border-white/40 hover:bg-white/10"
            >
              <Mail className="h-4 w-4 text-zinc-400 group-hover:text-white" />
              <span>SEND AN EMAIL</span>
            </a>
          </div>

          {/* Direct Founders Contact Card */}
          <div className="mx-auto mt-20 max-w-2xl rounded-2xl border border-white/8 bg-[#111115] p-6 sm:p-8 backdrop-blur-md">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-left">
              <div>
                <div className="font-code text-xs text-zinc-400 uppercase">
                  DIRECT STUDIO INBOX
                </div>
                <a
                  href="mailto:founders@brandorastudio.dev"
                  className="font-display text-lg sm:text-xl font-bold text-white hover:text-[#ff477e] transition-colors"
                >
                  founders@brandorastudio.dev
                </a>
              </div>

              <div className="flex items-center gap-3">
                <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-code text-xs text-zinc-300">
                  Current Response Time: &lt; 24h
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
