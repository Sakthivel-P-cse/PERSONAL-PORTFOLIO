import { Project } from "@/data/portfolio";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group border border-rule hover:border-cyan bg-bg hover:bg-rule-soft transition-colors p-5 md:p-6">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
        <div>
          <h3 className="text-text group-hover:text-cyan transition-colors font-semibold text-base md:text-lg">
            {project.name}
          </h3>
          {project.subtitle && (
            <p className="text-text-dim text-sm mt-0.5">{project.subtitle}</p>
          )}
        </div>
        {project.visibility === "public" ? (
          <a
            href={project.repository}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-text-faint hover:text-cyan transition-colors border border-rule hover:border-cyan px-3 py-1 self-start shrink-0"
          >
            GitHub ↗
          </a>
        ) : (
          <span className="text-xs text-text-faint border border-rule px-3 py-1 self-start shrink-0">
            Private Repository
          </span>
        )}
      </div>

      <p className="text-text-dim text-sm leading-relaxed mb-4">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-3">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="text-xs bg-rule-soft text-text-dim px-2 py-0.5 rounded"
          >
            {tech}
          </span>
        ))}
      </div>

      {"benchmarks" in project && project.benchmarks && (
        <div className="text-xs text-text-faint space-y-1 border-t border-rule pt-3 mt-3">
          <div>local reads: {project.benchmarks.localReads}</div>
          <div>synced WAL persistence: {project.benchmarks.syncedWal}</div>
        </div>
      )}
    </div>
  );
}
