"use client";

import { motion, useReducedMotion } from "framer-motion";

const paths = {
  infrastructure: "M4 5h16v5H4zM4 14h16v5H4zM7 7.5h.01M7 16.5h.01M10 7.5h7M10 16.5h7",
  resilience: "M12 3 4 6v5c0 5 3.5 8 8 10 4.5-2 8-5 8-10V6l-8-3ZM8.5 12l2.5 2.5 4.5-5",
  performance: "M4 17a8 8 0 1 1 16 0M12 13l4-4M8 17h8M12 5v2M5 10l2 1M19 10l-2 1",
  zeroTrust: "M5 10h14v11H5zM8 10V7a4 4 0 0 1 8 0v3M12 14v3",
};

export default function GoalIcon({ type, delay }: { type: keyof typeof paths; delay: number }) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6 shrink-0 text-cyan-400"
      fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      initial={reducedMotion === false ? { opacity: 0, y: 8 } : false}
      whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
      transition={{ duration: reducedMotion === false ? 0.5 : 0, delay: reducedMotion === false ? delay : 0 }}>
      <path d={paths[type]} />
    </motion.svg>
  );
}
