"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import type { Project } from "@/data/portfolio";

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref);
  const reducedMotion = useReducedMotion();

  return (
    <motion.article ref={ref} initial={reducedMotion === false ? { opacity: 0, y: 16 } : false}
      whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
      transition={{ duration: reducedMotion === false ? 0.5 : 0, delay: reducedMotion === false ? index * 0.12 : 0 }}
      className="group flex h-full flex-col border border-[#334155] bg-[#0a0a0a] p-6 transition-[border-color,box-shadow] hover:border-cyan-400 hover:shadow-[0_0_18px_rgba(34,211,238,0.2)] focus-within:border-cyan-400 motion-reduce:transition-none">
      <svg aria-hidden="true" viewBox="0 0 240 100" className="mb-6 h-24 w-full" fill="none" strokeLinecap="round" strokeLinejoin="round">
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
          {inView && reducedMotion === false && <motion.circle r="3" fill="#a5f3fc" stroke="none" initial={{ cx: 30, cy: 50 }} animate={{ cx: [30, 210] }} transition={{ duration: 4, repeat: Infinity, repeatDelay: 1, ease: "linear" }} />}
        </g>}
      </svg>
      <h3 className="text-xl font-semibold text-[#f5f5f5]">{project.name}</h3>
      <p className="mt-1 text-sm text-cyan-300">{project.subtitle}</p>
      <p className="mt-4 flex-1 text-sm leading-relaxed text-[#d0d0d0]">{project.description}</p>
      <p className="mt-4 text-xs leading-relaxed text-[#a3a3a3]">{project.technologies.join(" · ")}</p>
      {project.visibility === "public" && <a href={project.repository} target="_blank" rel="noopener noreferrer" className="mt-5 w-fit text-sm text-cyan-300 underline underline-offset-4 hover:text-cyan-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300">View repository <span className="sr-only">for {project.name} (opens in a new tab)</span> ↗</a>}
    </motion.article>
  );
}
