"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const nodes = [[30, 90], [95, 40], [115, 135], [180, 80], [235, 30], [250, 140], [310, 85]];
const edges = [[0, 1], [0, 2], [1, 2], [1, 3], [2, 3], [2, 5], [3, 4], [3, 5], [3, 6], [4, 6], [5, 6]];

export default function HeroNetwork() {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref);
  const reducedMotion = useReducedMotion();
  const [active, setActive] = useState(false);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 768px)");
    const update = () => setActive(desktop.matches && !document.hidden);
    update();
    desktop.addEventListener("change", update);
    document.addEventListener("visibilitychange", update);
    return () => {
      desktop.removeEventListener("change", update);
      document.removeEventListener("visibilitychange", update);
    };
  }, []);

  return (
    <svg ref={ref} aria-hidden="true" viewBox="0 0 340 175" className="pointer-events-none mx-auto mt-8 w-56 max-w-full md:absolute md:right-0 md:top-1/2 md:mt-0 md:w-72 md:-translate-y-1/2 lg:w-80">
      {edges.map(([from, to]) => (
        <line key={`${from}-${to}`} x1={nodes[from][0]} y1={nodes[from][1]} x2={nodes[to][0]} y2={nodes[to][1]} stroke="#22d3ee" strokeOpacity="0.25" />
      ))}
      {nodes.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="3" fill={i === 5 ? "#f87171" : "#22d3ee"} />
      ))}
      {active && inView && reducedMotion === false && [[0, 1], [2, 3], [3, 6], [5, 3]].map(([from, to], i) => (
        <motion.circle key={`${from}-${to}`} r="2" fill="#a5f3fc"
          initial={{ cx: nodes[from][0], cy: nodes[from][1], opacity: 0 }}
          animate={{ cx: [nodes[from][0], nodes[to][0]], cy: [nodes[from][1], nodes[to][1]], opacity: [0, 1, 1, 0] }}
          transition={{ duration: 4, delay: i * 0.8, repeat: Infinity, repeatDelay: 2, ease: "linear" }} />
      ))}
    </svg>
  );
}
