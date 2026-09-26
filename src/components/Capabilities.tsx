import { motion } from 'motion/react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface CapabilitiesProps {
  onOpenInquiry: () => void;
}

export default function Capabilities({ onOpenInquiry }: CapabilitiesProps) {
  const statements = [
    {
      discipline: 'WEB DEVELOPMENT',
      headline: 'FAST / RESPONSIVE / INTERACTIVE',
      focus: 'Sub-second first contentful paint, zero layout shifts, type-safe React/Next.js codebases, and fluid 60fps micro-motion.',
      tags: ['TypeScript', 'Next.js & Edge CDN', 'WebGL & Shaders', 'Core Web Vitals 95+', 'Automated JSON-LD Schema']
    },
    {
      discipline: 'GROWTH MARKETING',
      headline: 'SEARCH / SOCIAL / PAID MEDIA',
      focus: 'Laser-focused commercial search query dominance, creative-driven paid social acquisition, and full-funnel retention.',
      tags: ['Programmatic SEO', 'Meta & Google CAPI', 'B2B Inbound Pipelines', 'Cohort Attribution', 'High-ROAS Media Buying']
    },
    {
      discipline: 'BUSINESS CONVERSION',
      headline: 'TRAFFIC / LEADS / CONVERSION',
      focus: 'Translating passive browser attention into qualified enterprise leads, frictionless digital sales, and compounding brand equity.',
      tags: ['Multivariate A/B Testing', 'Behavioral Heatmap Audits', 'Frictionless Checkouts', 'Custom Inbound Funnels', 'LTV Multipliers']
    }
  ];

  return (
    <section id="capabilities" className="relative py-28 sm:py-36 bg-[#09090b] border-t border-white/8">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        {/* Section Header */}
        <div className="border-b border-white/8 pb-10">
          <div className="flex items-center gap-2 font-code text-xs tracking-widest text-[#ff477e] uppercase">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#ff477e]" />
            RESULTS & CAPABILITY STATEMENTS
          </div>
          <h2 className="mt-3 font-heading text-4xl sm:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight text-white">
            ENGINEERED TO DOMINATE
          </h2>
          <p className="mt-3 max-w-2xl font-sans text-sm sm:text-base text-zinc-400">
            We don't manufacture vanity metrics. Our capability benchmarks are grounded in rigorous engineering standards and proven acquisition frameworks.
          </p>
        </div>

        {/* Bold Typography Capability Blocks */}
        <div className="mt-16 space-y-8">
          {statements.map((item, index) => (
            <motion.div
              key={item.discipline}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group rounded-3xl border border-white/8 bg-[#111114] p-8 sm:p-12 transition-all hover:border-white/20 hover:bg-[#131318]"
            >
              <div className="flex items-center justify-between border-b border-white/8 pb-4">
                <span className="font-code text-xs font-bold tracking-widest text-[#ff477e] uppercase">
                  DISCIPLINE {String(index + 1).padStart(2, '0')} // {item.discipline}
                </span>
                <span className="font-code text-[11px] text-zinc-500 uppercase">
                  VERIFIED CAPABILITY
                </span>
              </div>

              {/* Bold Statement */}
              <h3 className="mt-6 font-heading text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white group-hover:text-zinc-100 transition-colors">
                {item.headline}
              </h3>

              <p className="mt-4 max-w-3xl font-sans text-sm sm:text-base leading-relaxed text-zinc-300">
                {item.focus}
              </p>

              {/* Tags */}
              <div className="mt-8 flex flex-wrap gap-2">
                {item.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="flex items-center gap-1.5 rounded-full border border-white/8 bg-white/3 px-3.5 py-1 text-xs font-code text-zinc-300"
                  >
                    <CheckCircle2 className="h-3 w-3 text-zinc-500" />
                    <span>{tag}</span>
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Transparent Capability Metrics (Cleanly formatted, non-invented capability standards) */}
        <div className="mt-14 rounded-3xl border border-white/10 bg-[#121217] p-8 sm:p-10">
          <div className="flex items-center justify-between border-b border-white/8 pb-4">
            <div className="font-code text-xs tracking-widest text-zinc-400 uppercase">
              STUDIO TECHNICAL STANDARDS // CORE GUARANTEES
            </div>
            <div className="font-code text-[11px] text-zinc-500 uppercase">
              ALL CODE OWNED 100% BY CLIENT
            </div>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
            <div>
              <div className="font-display text-3xl sm:text-4xl font-black text-white">
                &lt; 0.8s
              </div>
              <div className="mt-1 font-code text-[11px] text-zinc-400 uppercase">
                First Contentful Paint Target
              </div>
            </div>

            <div>
              <div className="font-display text-3xl sm:text-4xl font-black text-white">
                95+
              </div>
              <div className="mt-1 font-code text-[11px] text-zinc-400 uppercase">
                Google Lighthouse Benchmark
              </div>
            </div>

            <div>
              <div className="font-display text-3xl sm:text-4xl font-black text-white">
                100%
              </div>
              <div className="mt-1 font-code text-[11px] text-zinc-400 uppercase">
                Type-Safe TypeScript Stack
              </div>
            </div>

            <div>
              <div className="font-display text-3xl sm:text-4xl font-black text-white">
                Direct
              </div>
              <div className="mt-1 font-code text-[11px] text-zinc-400 uppercase">
                Founder Lead Access
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
