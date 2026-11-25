"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

export default function Constellation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;

    const nodes = Array.from({ length: 35 }, () => ({
      x: Math.random(), y: Math.random(), dx: (Math.random() - 0.5) * 0.00015, dy: (Math.random() - 0.5) * 0.00015,
    }));
    let frame = 0;
    let visible = false;
    const resize = () => {
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
      if (reducedMotion !== false) draw();
    };
    const draw = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.strokeStyle = "#22d3ee";
      context.fillStyle = "#22d3ee";
      nodes.forEach((node, i) => {
        node.x += node.dx;
        node.y += node.dy;
        if (node.x < 0 || node.x > 1) node.dx *= -1;
        if (node.y < 0 || node.y > 1) node.dy *= -1;
        const x = node.x * canvas.width, y = node.y * canvas.height;
        context.beginPath();
        context.arc(x, y, 2, 0, Math.PI * 2);
        context.fill();
        nodes.slice(i + 1).forEach((other) => {
          const ox = other.x * canvas.width, oy = other.y * canvas.height;
          // shortcut: density varies with positions, rank edges if an exact count is needed.
          if (Math.hypot(x - ox, y - oy) < 172) {
            context.beginPath();
            context.moveTo(x, y);
            context.lineTo(ox, oy);
            context.stroke();
          }
        });
      });
      if (reducedMotion === false) frame = requestAnimationFrame(draw);
    };
    const update = () => {
      cancelAnimationFrame(frame);
      if (visible && !document.hidden && reducedMotion === false) frame = requestAnimationFrame(draw);
    };
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; update(); });
    resize();
    observer.observe(canvas);
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", update);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", update);
    };
  }, [reducedMotion]);

  return <canvas ref={canvasRef} aria-hidden="true" className="pointer-events-none fixed inset-0 h-screen w-full opacity-15" />;
}
