"use client";

import { motion, useScroll } from "framer-motion";

export default function ScrollTrace() {
  const { scrollYProgress } = useScroll();

  return <motion.div aria-hidden="true" className="pointer-events-none fixed left-3 top-0 z-50 hidden h-screen w-px origin-top bg-cyan-400 motion-safe:md:block" style={{ scaleY: scrollYProgress }} />;
}
