"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

export default function RevealSection({ id, className, children }: { id: string; className: string; children: ReactNode }) {
  const reducedMotion = useReducedMotion();
  return (
    <motion.section id={id} className={className} initial={reducedMotion ? false : { opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
      {children}
    </motion.section>
  );
}
