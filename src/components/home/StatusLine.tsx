"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function StatusLine() {
  const reducedMotion = useReducedMotion();

  return (
    <div className="mt-4 flex flex-col items-end gap-3 font-ibm-plex text-sm text-[#d0d0d0]">
      <p>
        <span aria-hidden="true" className="mr-2 inline-block h-2 w-2 rounded-full bg-cyan-400 motion-safe:animate-pulse" />
        [status] online · building · seeking hard problems
        <motion.span aria-hidden="true" className="ml-1 text-cyan-300" animate={reducedMotion === false ? { opacity: [1, 1, 0, 0] } : { opacity: 1 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }}>_</motion.span>
      </p>
      <a href="#projects" className="inline-flex items-center gap-2 border border-cyan-400 px-4 py-2 text-cyan-300 transition-colors hover:bg-cyan-400 hover:text-black focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300 motion-reduce:transition-none">
        View projects
        <svg aria-hidden="true" viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 8h10M9 4l4 4-4 4" />
        </svg>
      </a>
    </div>
  );
}
