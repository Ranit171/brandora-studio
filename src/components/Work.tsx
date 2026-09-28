import React, { useState } from 'react';
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

  const webProjects = projects.filter((p) => {
    const cat = p.category.toLowerCase();
    const services = p.services.map((s) => s.toLowerCase()).join(' ');
    return (
      cat.includes('web') ||
      cat.includes('saas') ||
      cat.includes('dev') ||
      cat.includes('app') ||
      cat.includes('portal') ||
      cat.includes('platform') ||
      services.includes('web') ||
      services.includes('frontend')
    );
  });

  const marketingProjects = projects.filter((p) => {
    const cat = p.category.toLowerCase();
    const services = p.services.map((s) => s.toLowerCase()).join(' ');
    return (
      cat.includes('marketing') ||
      cat.includes('seo') ||
      cat.includes('growth') ||
      cat.includes('campaign') ||
      services.includes('seo') ||
      services.includes('marketing')
    );
  });

  const ecommerceProjects = projects.filter((p) => {
    const cat = p.category.toLowerCase();
    const services = p.services.map((s) => s.toLowerCase()).join(' ');
    return (
      cat.includes('commerce') ||
      cat.includes('e-commerce') ||
      services.includes('shopify') ||
      services.includes('commerce')
    );
  });

  const filteredProjects =
    filter === 'all'
      ? projects
      : filter === 'web'
      ? webProjects
      : filter === 'marketing'
      ? marketingProjects
      : ecommerceProjects;

  const renderBentoGrid = (items: Project[]) => {
    const blocks: React.ReactNode[] = [];
    let i = 0;
    let patternIndex = 0;

    while (i < items.length) {
      const remaining = items.length - i;
      const pattern = patternIndex % 4;

      if (pattern === 0) {
        // Full Width Hero Card
        const p0 = items[i];
        blocks.push(
          <div key={`block-hero-${p0.id}`} className="w-full">
            <WorkCard
              project={p0}
              onSelect={onSelectProject}
              className="h-[460px] sm:h-[620px] w-full"
            />
          </div>
        );
        i += 1;
      } else if (pattern === 1) {
        // 2-Column Split
        if (remaining >= 2) {
          const p1 = items[i];
          const p2 = items[i + 1];
          blocks.push(
            <div key={`block-two-${p1.id}-${p2.id}`} className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <WorkCard
                project={p1}
                onSelect={onSelectProject}
                className="h-[440px] sm:h-[540px] w-full"
              />
              <WorkCard
                project={p2}
                onSelect={onSelectProject}
                className="h-[440px] sm:h-[540px] w-full"
              />
            </div>
          );
          i += 2;
        } else {
          const p1 = items[i];
          blocks.push(
            <div key={`block-single-${p1.id}`} className="w-full">
              <WorkCard
                project={p1}
                onSelect={onSelectProject}
                className="h-[440px] sm:h-[560px] w-full"
              />
            </div>
          );
          i += 1;
        }
      } else if (pattern === 2) {
        // 7 / 5 Asymmetric Split
        if (remaining >= 2) {
          const p1 = items[i];
          const p2 = items[i + 1];
          blocks.push(
            <div key={`block-split75-${p1.id}-${p2.id}`} className="grid grid-cols-1 gap-8 md:grid-cols-12">
              <div className="md:col-span-7">
                <WorkCard
                  project={p1}
                  onSelect={onSelectProject}
                  className="h-[440px] sm:h-[520px] w-full"
                />
              </div>
              <div className="md:col-span-5">
                <WorkCard
                  project={p2}
                  onSelect={onSelectProject}
                  className="h-[440px] sm:h-[520px] w-full"
                />
              </div>
            </div>
          );
          i += 2;
        } else {
          const p1 = items[i];
          blocks.push(
            <div key={`block-single-${p1.id}`} className="w-full">
              <WorkCard
                project={p1}
                onSelect={onSelectProject}
                className="h-[440px] sm:h-[560px] w-full"
              />
            </div>
          );
          i += 1;
        }
      } else if (pattern === 3) {
        // 5 / 7 Asymmetric Split
        if (remaining >= 2) {
          const p1 = items[i];
          const p2 = items[i + 1];
          blocks.push(
            <div key={`block-split57-${p1.id}-${p2.id}`} className="grid grid-cols-1 gap-8 md:grid-cols-12">
              <div className="md:col-span-5">
                <WorkCard
                  project={p1}
                  onSelect={onSelectProject}
                  className="h-[440px] sm:h-[520px] w-full"
                />
              </div>
              <div className="md:col-span-7">
                <WorkCard
                  project={p2}
                  onSelect={onSelectProject}
                  className="h-[440px] sm:h-[520px] w-full"
                />
              </div>
            </div>
          );
          i += 2;
        } else {
          const p1 = items[i];
          blocks.push(
            <div key={`block-single-${p1.id}`} className="w-full">
              <WorkCard
                project={p1}
                onSelect={onSelectProject}
                className="h-[440px] sm:h-[560px] w-full"
              />
            </div>
          );
          i += 1;
        }
      }

      patternIndex++;
    }

    return blocks;
  };

  return (
    <section id="work" className="relative py-28 sm:py-36 bg-[#09090b] border-t border-white/8">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        {/* Section Headline */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 font-code text-xs tracking-widest text-[#ff477e] uppercase">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#ff477e]" />
            CURATED PORTFOLIO ARCHIVE
          </div>

          <h2 className="mt-4 font-editorial text-5xl sm:text-7xl lg:text-8xl font-normal italic tracking-tight text-white">
            OUR WORKS
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-sans text-sm sm:text-base text-zinc-400">
            A selection of high-velocity web platforms, conversion-engineered applications, and dominant digital experiences engineered by our founders.
          </p>

          {/* Featured Live Deployments Banner */}
          <div className="mt-5 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/4 px-4 py-1.5 font-code text-[11px] text-zinc-300 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-semibold text-white">LIVE SHOWCASE:</span>
            <span>WANDERLY • TRAVELEO • STORYVERSE</span>
          </div>

          {/* Filter Pills with Live Counts */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {[
              { id: 'all', label: 'ALL ARCHIVE', count: projects.length },
              { id: 'web', label: 'WEB DEVELOPMENT', count: webProjects.length },
              { id: 'marketing', label: 'GROWTH & SEO', count: marketingProjects.length },
              { id: 'ecommerce', label: 'E-COMMERCE', count: ecommerceProjects.length }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as any)}
                className={`flex items-center gap-2 rounded-full px-4 py-1.5 font-code text-xs tracking-wider uppercase transition-all ${
                  filter === tab.id
                    ? 'bg-white text-black font-semibold shadow-lg shadow-white/10'
                    : 'border border-white/10 bg-white/4 text-zinc-400 hover:text-white hover:border-white/20'
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`rounded-full px-1.5 py-0.2 text-[10px] ${
                    filter === tab.id
                      ? 'bg-black text-white font-bold'
                      : 'bg-white/10 text-zinc-400'
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Bento Grid with Dynamic Editorial Rhythms */}
        <div className="mt-16 space-y-8">
          {renderBentoGrid(filteredProjects)}
        </div>

        {/* Bottom Portfolio CTA */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-white/8 pt-8">
          <div className="font-code text-xs text-zinc-400">
            LOOKING FOR A BESPOKE WEB ARCHITECTURE OR TAILORED RE-ENGINEERING?
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
