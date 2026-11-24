"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

export default function AnimatedCard({ children, index, className }: { children: ReactNode; index: number; className?: string }) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reducedMotion !== false ? false : { opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={reducedMotion === false ? { y: -4 } : undefined}
      transition={{ duration: 0.3, delay: reducedMotion === false ? index * 0.06 : 0 }}
    >
      {children}
    </motion.div>
  );
}
