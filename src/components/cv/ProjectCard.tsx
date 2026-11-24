"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import type { Project } from "@/data/portfolio";

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const reducedMotion = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref);
  const animate = inView && reducedMotion === false;

  return (
    <motion.article ref={ref} initial={reducedMotion === false ? { opacity: 0, y: 16 } : false}
      whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
      transition={{ duration: reducedMotion === false ? 0.5 : 0, delay: reducedMotion === false ? index * 0.12 : 0 }}
      className="min-w-0 border border-rule bg-rule-soft p-4">
      <svg aria-hidden="true" viewBox="0 0 240 100" className="mb-3 h-16 w-40 max-w-full" fill="none" strokeLinecap="round" strokeLinejoin="round">
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
        {project.id === "crdt-rate-limiter" && <g stroke="#22d3ee" strokeWidth="1.5">
          <path opacity=".4" d="M40 50 80 20h80l40 30-80 30-80-30m40-30 40 60 40-60M40 50h160" />
          {[[40, 50], [80, 20], [160, 20], [200, 50], [120, 80]].map(([x, y], i) => <g key={i}>
            <rect x={x - 13} y={y - 9} width="26" height="18" rx="3" fill="#0a0a0a" />
            <path d={`M${x - 8} ${y + 3}h${8 + i * 2}`} stroke={i === 2 ? "#f87171" : "#22d3ee"} strokeWidth="3" />
          </g>)}
          <motion.circle r="2.5" fill="#f87171" stroke="none" cx="40" cy="50"
            animate={animate ? { cx: [40, 80, 160, 200], cy: [50, 20, 20, 50] } : { cx: 80, cy: 20 }}
            transition={animate ? { duration: 8, repeat: Infinity, ease: "linear" } : { duration: 0 }} />
        </g>}
        {project.id === "trustchain" && <g stroke="#22d3ee" strokeWidth="1.5">
          <path opacity=".4" d="M28 40h144M187 70a20 20 0 0 1 40 0" />
          {[28, 76, 124, 172].map((x, i) => <g key={x}>
            <rect x={x - 14} y="26" width="28" height="28" rx="5" fill="#0a0a0a" stroke={i === 2 ? "#f87171" : "#22d3ee"} />
            <text x={x} y="44" textAnchor="middle" fill={i === 2 ? "#f87171" : "#22d3ee"} stroke="none" fontSize="9">{["T", "P", "S", "D"][i]}</text>
          </g>)}
          <path d="M191 70a16 16 0 0 1 27-12" stroke="#f87171" />
          <motion.path d="M207 70l-8-10" stroke="#f87171" style={{ originX: "207px", originY: "70px" }}
            animate={animate ? { rotate: [0, 18, 0] } : { rotate: 0 }}
            transition={animate ? { duration: 8, repeat: Infinity, ease: "easeInOut" } : { duration: 0 }} />
        </g>}
        {project.id === "cit-polling" && <g stroke="#22d3ee" strokeWidth="1.5">
          <rect x="48" y="16" width="65" height="68" rx="3" opacity=".6" />
          <path d="m60 31 4 4 7-8M60 48h11M60 64h11M80 32h22M80 48h22M80 64h22" />
          <path opacity=".4" d="M132 78h65M140 78V56h10v22M158 78V43h10v35M176 78V29h10v49" />
          <path stroke="#f87171" d="M176 78V29h10v49" />
        </g>}
        {!['viper', 'causa', 'autobuild', 'crdt-rate-limiter', 'trustchain', 'cit-polling'].includes(project.id) && <g stroke="#22d3ee" strokeWidth="1.5">
          <rect x="52" y="22" width="136" height="56" rx="4" opacity=".4" />
          <path d="m74 39 10 11-10 11M94 61h24M135 39h31M135 50h22M135 61h27" />
          <circle cx="166" cy="61" r="3" fill="#f87171" stroke="none" />
        </g>}
      </svg>
      <h3 className="text-base font-semibold text-text">{project.name}</h3>
      <p className="mt-1 text-sm text-cyan">{project.subtitle}</p>
      <p className="mt-3 text-sm leading-relaxed text-text-dim">{project.description}</p>
      <p className="mt-3 text-xs leading-relaxed text-text-faint">{project.technologies.map((technology) => `[${technology}]`).join(" ")}</p>
      {project.visibility === "public" && <a href={project.repository} target="_blank" rel="noopener noreferrer" className="mt-5 w-fit text-sm text-cyan underline underline-offset-4 hover:text-cyan-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300">View repository <span className="sr-only">for {project.name} (opens in a new tab)</span> ↗</a>}
    </motion.article>
  );
}
