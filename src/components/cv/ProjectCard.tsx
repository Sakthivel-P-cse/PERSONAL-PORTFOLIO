"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { Project } from "@/data/portfolio";

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.article initial={reducedMotion === false ? { opacity: 0, y: 16 } : false}
      whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
      transition={{ duration: reducedMotion === false ? 0.5 : 0, delay: reducedMotion === false ? index * 0.12 : 0 }}
      className="min-w-0 border border-rule bg-rule-soft p-4">
      {["viper", "causa", "autobuild"].includes(project.id) && <svg aria-hidden="true" viewBox="0 0 240 100" className="mb-3 h-16 w-40 max-w-full" fill="none" strokeLinecap="round" strokeLinejoin="round">
        {project.id === "viper" && <g stroke="#22d3ee" strokeWidth="1.5">
          <path opacity=".4" d="M45 50h65M110 50l70-30M110 50h70M110 50l70 30" />
          {[20, 50, 80].map((y) => <g key={y}><rect x="180" y={y - 9} width="35" height="18" rx="2" /><path d={`M186 ${y - 3}h15m-15 6h22`} /></g>)}
          <circle cx="45" cy="50" r="9" /><circle cx="110" cy="50" r="5" fill="#22d3ee" />
        </g>}
        {project.id === "causa" && <g strokeWidth="1.5">
          <path stroke="#22d3ee" opacity=".4" d="M35 50 90 20l60 30-60 30-55-30M90 20l110 0M90 80l110 0M150 50l50-30" />
          <path stroke="#f87171" d="M35 50h115l50 30" />
          {[[35, 50], [90, 20], [90, 80], [150, 50], [200, 20], [200, 80]].map(([x, y], i) => <circle key={i} cx={x} cy={y} r="5" fill="#0a0a0a" stroke={i === 0 || i === 3 || i === 5 ? "#f87171" : "#22d3ee"} />)}
        </g>}
        {project.id === "autobuild" && <g stroke="#22d3ee" strokeWidth="1.5">
          <path opacity=".4" d="M30 50h180" />
          {[30, 90, 150, 210].map((x) => <rect key={x} x={x - 12} y="38" width="24" height="24" rx="3" fill="#0a0a0a" />)}
        </g>}
      </svg>}
      <h3 className="text-base font-semibold text-text">{project.name}</h3>
      <p className="mt-1 text-sm text-cyan">{project.subtitle}</p>
      <p className="mt-3 text-sm leading-relaxed text-text-dim">{project.description}</p>
      <p className="mt-3 text-xs leading-relaxed text-text-faint">{project.technologies.map((technology) => `[${technology}]`).join(" ")}</p>
      {project.visibility === "public" && <a href={project.repository} target="_blank" rel="noopener noreferrer" className="mt-5 w-fit text-sm text-cyan underline underline-offset-4 hover:text-cyan-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300">View repository <span className="sr-only">for {project.name} (opens in a new tab)</span> ↗</a>}
    </motion.article>
  );
}
