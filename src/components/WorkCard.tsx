import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '../types';

interface WorkCardProps {
  project: Project;
  onSelect: (project: Project) => void;
  className?: string;
}

export default function WorkCard({ project, onSelect, className = '' }: WorkCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onClick={() => onSelect(project)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-cursor="project"
      className={`group relative cursor-pointer overflow-hidden rounded-[28px] sm:rounded-[36px] border border-white/10 bg-[#121216] transition-all duration-500 hover:border-white/30 ${className}`}
    >
      {/* Image Container */}
      <div className="relative h-full w-full overflow-hidden bg-zinc-900">
        <motion.img
          src={project.coverImage}
          alt={project.title}
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="h-full w-full object-cover"
          loading="lazy"
        />

        {/* Ambient Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

        {/* Top Badges */}
        <div className="absolute top-5 left-5 right-5 flex items-center justify-between pointer-events-none">
          <span className="rounded-full border border-white/15 bg-black/40 px-3 py-1 font-code text-xs font-semibold text-white backdrop-blur-md">
            {project.number}
          </span>
          <span className="rounded-full border border-white/15 bg-black/40 px-3.5 py-1 font-code text-[11px] text-zinc-300 backdrop-blur-md">
            {project.year}
          </span>
        </div>

        {/* Bottom Editorial Caption (Matching Reference Image) */}
        <div className="absolute bottom-5 left-5 right-5">
          <div className="rounded-2xl border border-white/12 bg-[#09090b]/75 p-5 backdrop-blur-md transition-all duration-300 group-hover:border-white/25 group-hover:bg-[#09090b]/90">
            <div className="flex items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-heading text-xl sm:text-2xl font-bold uppercase tracking-tight text-white">
                    {project.title}
                  </h3>
                  <span className="text-zinc-500">/</span>
                  <span className="text-xs sm:text-sm font-medium text-zinc-300">
                    {project.category}
                  </span>
                </div>
                <p className="mt-1 line-clamp-1 text-xs text-zinc-400">
                  {project.summary}
                </p>
              </div>

              {/* Arrow Pill */}
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-transform duration-300 group-hover:scale-110 group-hover:bg-white group-hover:text-black">
                <ArrowUpRight className="h-4 w-4" />
              </div>
            </div>

            {/* Quick Result Pill on Card */}
            {project.results[0] && (
              <div className="mt-3 flex items-center gap-2 border-t border-white/8 pt-3 text-[11px] font-code text-zinc-400">
                <span className="text-[#ff477e] font-bold">{project.results[0].metric}</span>
                <span>{project.results[0].label}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
