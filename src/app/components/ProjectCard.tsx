import { ArrowRight, Images, MapPin } from 'lucide-react';
import { memo } from 'react';
import { Link, useLocation } from 'react-router-dom';

import type { Project } from '../../data/projects';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { rememberScrollPosition } from './RouteScrollRestoration';
import { warmProjectDetail } from '../pages/loadProjectDetail';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = memo(function ProjectCard({ project }: ProjectCardProps) {
  const location = useLocation();

  return (
    <Link
      id={`project-card-${project.id}`}
      to={`/projects/${project.id}`}
      state={{ projectOrigin: { path: location.pathname + location.search + location.hash } }}
      onClick={event => {
        if (!event.ctrlKey && !event.metaKey && !event.shiftKey && !event.altKey && event.button === 0) {
          rememberScrollPosition(location.key, event.currentTarget);
        }
      }}
      onPointerEnter={warmProjectDetail}
      onFocus={warmProjectDetail}
      aria-label={`ดูรายละเอียดและภาพผลงาน ${project.titleTh}`}
      className="ntp-project-card group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#dc2626] focus-visible:ring-offset-4"
    >
      <div className="relative aspect-[3/2] overflow-hidden bg-slate-100">
        <ImageWithFallback
          src={project.coverImage}
          alt={project.titleTh}
          className="ntp-project-cover h-full w-full object-cover"
          sizes="(min-width: 1280px) 384px, (min-width: 768px) calc((100vw - 96px) / 2), calc(100vw - 32px)"
        />
        <span className="absolute left-4 top-4 max-w-[calc(100%-32px)] rounded-full bg-[#1a3a6b] px-3.5 py-2 text-xs font-semibold text-white sm:text-sm">
          {project.categoryTh}
        </span>
      </div>

      <div className="flex flex-1 flex-col px-5 pb-5 pt-5 sm:px-6 sm:pb-6 sm:pt-6">
        {(project.locationTh || project.location) && (
          <p className="mb-3 flex items-start gap-2 text-sm leading-6 text-slate-500">
            <MapPin size={17} className="mt-0.5 shrink-0 text-[#dc2626]" aria-hidden="true" />
            <span>{project.locationTh ?? project.location}</span>
          </p>
        )}
        <h3 className="mb-3 text-xl font-semibold leading-[1.65] text-slate-900">
          {project.titleTh}
        </h3>
        <p className="mb-5 line-clamp-2 text-sm leading-7 text-slate-600 sm:text-[15px]">
          {project.descriptionTh}
        </p>
        <div className="mt-auto flex flex-wrap items-center justify-between gap-x-3 gap-y-2 border-t border-slate-100 pt-4">
          <span className="inline-flex items-center gap-2 text-sm font-semibold leading-6 text-[#1a3a6b]">
            ดูรายละเอียดโครงการ
            <ArrowRight size={17} className="ntp-project-arrow shrink-0" aria-hidden="true" />
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs text-slate-500">
            <Images size={15} aria-hidden="true" />
            {project.images.length} ภาพ
          </span>
        </div>
      </div>
    </Link>
  );
});
