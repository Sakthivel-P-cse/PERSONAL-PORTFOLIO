"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function ConnectingLine() {
  const reducedMotion = useReducedMotion();

  return (
    <div className="mt-3 text-text-dim" aria-label="connecting...">
      connecting<span aria-hidden="true">{[0, 1, 2].map((dot) => (
        <motion.span
          key={dot}
          animate={reducedMotion === false ? { opacity: [1, 0.2, 1] } : { opacity: 1 }}
          transition={{ duration: 0.8, delay: dot * 0.15, repeat: 2 }}
        >.</motion.span>
      ))}</span>
    </div>
  );
}
