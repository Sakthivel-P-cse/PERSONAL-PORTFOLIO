import { portfolio } from "@/data/portfolio";
import ProjectCard from "./ProjectCard";

export default function FeaturedProjects() {
  const projects = portfolio.projects.filter((project) => ["viper", "causa", "autobuild"].includes(project.id));

  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="mx-auto w-[90%] max-w-6xl">
        <h2 className="mb-8 text-2xl font-bold tracking-tight text-[#d0d0d0] md:text-3xl lg:text-4xl">featured projects</h2>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => <ProjectCard key={project.id} project={project} index={index} />)}
        </div>
      </div>
    </section>
  );
}
