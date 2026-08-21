"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function HeroCursor() {
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 30, stiffness: 400, mass: 0.5 });
  const springY = useSpring(y, { damping: 30, stiffness: 400, mass: 0.5 });

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setEnabled(true);

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX - 20);
      y.set(e.clientY - 20);
      const target = e.target as HTMLElement | null;
      if (!target) {
        setVisible(false);
        return;
      }
      const inHero = !!target.closest(".terminal-hero");
      setVisible(inHero);
      if (inHero) {
        const cursor = window.getComputedStyle(target).cursor;
        setHovering(
          cursor === "pointer" ||
            target.tagName === "A" ||
            target.tagName === "BUTTON" ||
            !!target.closest("a") ||
            !!target.closest("button")
        );
      }
    };

    const onLeave = () => setVisible(false);
    window.addEventListener("mousemove", onMove);
    document.documentElement.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-10 h-10 rounded-full pointer-events-none z-[9999] flex items-center justify-center"
      style={{
        x: springX,
        y: springY,
        border: "1px solid var(--color-crimson)",
        mixBlendMode: "difference",
        opacity: visible ? 0.8 : 0,
      }}
      animate={{
        scale: hovering ? 1.5 : 1,
        backgroundColor: hovering ? "rgba(255, 0, 51, 0.1)" : "rgba(0, 0, 0, 0)",
        borderColor: hovering ? "var(--color-cyan)" : "var(--color-crimson)",
      }}
      transition={{ type: "spring", damping: 30, stiffness: 400, mass: 0.5 }}
    >
      <motion.div
        className="w-1 h-1 rounded-full bg-white absolute"
        animate={{ scale: hovering ? 0 : 1, opacity: hovering ? 0 : 1 }}
        transition={{ duration: 0.2 }}
      />
      {hovering && (
        <>
          <motion.div
            className="absolute w-[2px] h-full bg-[var(--color-cyan)]"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 0.4 }}
            transition={{ duration: 0.2 }}
          />
          <motion.div
            className="absolute h-[2px] w-full bg-[var(--color-cyan)]"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 0.4 }}
            transition={{ duration: 0.2 }}
          />
        </>
      )}
    </motion.div>
  );
}
