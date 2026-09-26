import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '../types';
import WorkCard from './WorkCard';

interface WorkProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
  onOpenInquiry: () => void;
}

export default function Work({ projects, onSelectProject, onOpenInquiry }: WorkProps) {
  const [filter, setFilter] = useState<'all' | 'web' | 'marketing' | 'ecommerce'>('all');

  const filteredProjects = projects.filter((p) => {
    if (filter === 'all') return true;
    if (filter === 'web') return p.category.toLowerCase().includes('web') || p.category.toLowerCase().includes('saas');
    if (filter === 'marketing') return p.category.toLowerCase().includes('marketing') || p.category.toLowerCase().includes('seo');
    if (filter === 'ecommerce') return p.category.toLowerCase().includes('commerce') || p.category.toLowerCase().includes('e-commerce');
    return true;
  });

  return (
    <section id="work" className="relative py-28 sm:py-36 bg-[#09090b] border-t border-white/8">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        {/* Section Headline (Matching Reference Image typography: "OUR WORKS") */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 font-code text-xs tracking-widest text-[#ff477e] uppercase">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#ff477e]" />
            CURATED PORTFOLIO ARCHIVE
          </div>

          <h2 className="mt-4 font-editorial text-5xl sm:text-7xl lg:text-8xl font-normal italic tracking-tight text-white">
            OUR WORKS
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-sans text-sm sm:text-base text-zinc-400">
            A selection of high-velocity websites, conversion-engineered e-commerce engines, and dominant organic search campaigns.
          </p>

          {/* Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {[
              { id: 'all', label: 'ALL ARCHIVE' },
              { id: 'web', label: 'WEB DEVELOPMENT' },
              { id: 'marketing', label: 'GROWTH & SEO' },
              { id: 'ecommerce', label: 'E-COMMERCE' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as any)}
                className={`rounded-full px-4 py-1.5 font-code text-xs tracking-wider uppercase transition-all ${
                  filter === tab.id
                    ? 'bg-white text-black font-semibold'
                    : 'border border-white/10 bg-white/4 text-zinc-400 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Bento Grid with Varied Aspect Ratios */}
        <div className="mt-16 space-y-8">
          {/* First Project: Full Width Hero Card */}
          {filteredProjects[0] && (
            <WorkCard
              project={filteredProjects[0]}
              onSelect={onSelectProject}
              className="h-[460px] sm:h-[620px] w-full"
            />
          )}

          {/* Two-Column Grid for Next Projects */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {filteredProjects.slice(1, 3).map((project) => (
              <WorkCard
                key={project.id}
                project={project}
                onSelect={onSelectProject}
                className="h-[440px] sm:h-[540px] w-full"
              />
            ))}
          </div>

          {/* Fourth and Fifth Projects: Alternating Split */}
          {filteredProjects.length > 3 && (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
              {filteredProjects[3] && (
                <div className="md:col-span-7">
                  <WorkCard
                    project={filteredProjects[3]}
                    onSelect={onSelectProject}
                    className="h-[440px] sm:h-[520px] w-full"
                  />
                </div>
              )}
              {filteredProjects[4] && (
                <div className="md:col-span-5">
                  <WorkCard
                    project={filteredProjects[4]}
                    onSelect={onSelectProject}
                    className="h-[440px] sm:h-[520px] w-full"
                  />
                </div>
              )}
            </div>
          )}

          {/* Sixth Project if exists */}
          {filteredProjects[5] && (
            <WorkCard
              project={filteredProjects[5]}
              onSelect={onSelectProject}
              className="h-[440px] sm:h-[580px] w-full"
            />
          )}
        </div>

        {/* Bottom Portfolio CTA */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-white/8 pt-8">
          <div className="font-code text-xs text-zinc-400">
            HAVE A SPECIFIC SYSTEM OR NICHE REQUIREMENT?
          </div>

          <button
            onClick={onOpenInquiry}
            className="group flex items-center gap-2 font-code text-xs font-bold tracking-wider text-white uppercase hover:text-[#ff477e] transition-colors"
          >
            <span>DISCUSS CUSTOM SCOPE WITH FOUNDERS</span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </section>
  );
}
