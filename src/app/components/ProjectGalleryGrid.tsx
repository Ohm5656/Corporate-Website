import { useState } from "react";

import { Project } from "../../data/projects";
import { ProjectCard } from "./ProjectCard";
import { ProjectGalleryModal } from "./ProjectGalleryModal";
import { cn } from "./ui/utils";

interface ProjectGalleryGridProps {
  projects: Project[];
  className?: string;
}

export function ProjectGalleryGrid({
  projects,
  className,
}: ProjectGalleryGridProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <div
        className={cn(
          "grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2 md:gap-x-7 md:gap-y-12 xl:grid-cols-3 xl:gap-x-8 xl:gap-y-14",
          className,
        )}
      >
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            onClick={setSelectedProject}
          />
        ))}
      </div>

      <ProjectGalleryModal
        open={selectedProject !== null}
        project={selectedProject}
        onOpenChange={(nextOpen) => {
          if (!nextOpen) {
            setSelectedProject(null);
          }
        }}
      />
    </>
  );
}