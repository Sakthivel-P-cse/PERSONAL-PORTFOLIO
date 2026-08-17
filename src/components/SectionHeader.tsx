"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  id: string;
  title: string;
}

export default function SectionHeader({ id, title }: SectionHeaderProps) {
  return (
    <motion.h2
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-2xl md:text-3xl lg:text-4xl font-bold mb-12 md:mb-16 text-text tracking-tight"
    >
      {title}
    </motion.h2>
  );
}
