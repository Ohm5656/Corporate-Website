import type { Project } from '../../data/projects';
import { ProjectCard } from './ProjectCard';

interface ProjectGalleryGridProps {
  projects: Project[];
  className?: string;
}

export function ProjectGalleryGrid({ projects, className }: ProjectGalleryGridProps) {
  return (
    <div className={`grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 md:gap-7 xl:grid-cols-3 xl:gap-8 ${className || ''}`}>
      {projects.map(project => <ProjectCard key={project.id} project={project} />)}
    </div>
  );
}
