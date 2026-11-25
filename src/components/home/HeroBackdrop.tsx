"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import type { RefObject } from "react";
import styles from "./HeroBackdrop.module.css";

export default function HeroBackdrop({ hero }: { hero: RefObject<HTMLElement | null> }) {
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: hero, offset: ["start start", "end start"] });
  const opacity = useTransform(scrollYProgress, (progress) => Math.max(0, 1 - progress / 0.85));
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  return <motion.div aria-hidden="true" className={styles.backdrop} style={reducedMotion === false ? { opacity, scale } : undefined}><div className={styles.sweep} /></motion.div>;
}
