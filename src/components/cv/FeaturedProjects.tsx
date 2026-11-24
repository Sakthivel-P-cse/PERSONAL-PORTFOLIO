import { portfolio } from "@/data/portfolio";
import ProjectCard from "./ProjectCard";

export default function FeaturedProjects() {
  return (
    <section id="projects" className="space-y-4">
      <div className="flex items-baseline gap-4">
        <span className="text-text-faint text-xs">005</span>
        <h2 className="text-xl font-bold">PROJECTS</h2>
      </div>
      <div className="pl-8 space-y-4">
        {portfolio.projects.filter((project) => project.featured).map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
