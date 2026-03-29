import { ArrowUpRight, Images } from "lucide-react";
import { motion } from "motion/react";

import { Project } from "../../data/projects";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ProjectCardProps {
  project: Project;
  index: number;
  onClick: (project: Project) => void;
}

export function ProjectCard({
  project,
  index,
  onClick,
}: ProjectCardProps) {
  return (
    <motion.button
      type="button"
      whileHover={{ y: -6 }}
      whileTap={{ scale: 0.985 }}
      transition={{ duration: 0.24 }}
      onClick={() => onClick(project)}
      aria-label={`เปิดแกลเลอรีโครงการ ${project.titleTh}`}
      aria-haspopup="dialog"
      className="group relative overflow-hidden rounded-[30px] bg-white text-left shadow-[0_18px_50px_-24px_rgba(15,23,42,0.16),0_8px_20px_-12px_rgba(15,23,42,0.08)] ring-1 ring-slate-200/60 transition-all duration-300 hover:shadow-[0_28px_80px_-30px_rgba(15,23,42,0.22),0_16px_30px_-18px_rgba(15,23,42,0.12)] hover:ring-slate-200/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#dc2626] focus-visible:ring-offset-4"
    >
      <div className="pointer-events-none absolute inset-0 rounded-[30px] bg-gradient-to-br from-white via-white to-slate-50/80" />

      <div className="relative overflow-hidden rounded-t-[30px]">
        <div className="absolute inset-x-0 top-0 z-10 flex items-start justify-between gap-3 p-5">
          <span className="rounded-full border border-white/70 bg-white/95 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#1a3a6b] shadow-sm backdrop-blur-md">
            {project.categoryTh}
          </span>

          <span className="inline-flex items-center gap-1 rounded-full border border-[#1a3a6b]/10 bg-[#1a3a6b]/88 px-3 py-1.5 text-xs font-medium text-white shadow-sm backdrop-blur-md">
            <Images size={14} />
            {project.images.length}
          </span>
        </div>

        <div className="relative h-72 overflow-hidden bg-slate-100">
          <ImageWithFallback
            src={project.coverImage}
            alt={project.titleTh}
            className="h-full w-full object-cover transition-all duration-700 ease-out group-hover:scale-[1.04]"
            loading={index < 3 ? "eager" : "lazy"}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-transparent opacity-60" />
          <div className="absolute inset-0 shadow-[inset_0_-60px_80px_-20px_rgba(0,0,0,0.6)]" />
        </div>
      </div>

      <div className="relative space-y-4 p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-2">
            <h3 className="text-xl font-semibold tracking-tight text-[#1a3a6b]">
              {project.titleTh}
            </h3>

            <p className="line-clamp-3 text-sm leading-7 text-slate-600 sm:text-[15px]">
              {project.descriptionTh}
            </p>
          </div>

          <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#1a3a6b]/10 bg-slate-50 text-[#1a3a6b] transition-colors duration-300 group-hover:border-[#dc2626]/15 group-hover:bg-[#dc2626] group-hover:text-white">
            <ArrowUpRight size={18} />
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-slate-100/90 pt-4 text-sm">
          <span className="text-slate-500">
            {project.locationTh ?? project.location}
          </span>

          <span className="font-medium text-[#1a3a6b]">
            {project.year}
          </span>
        </div>
      </div>
    </motion.button>
  );
}
