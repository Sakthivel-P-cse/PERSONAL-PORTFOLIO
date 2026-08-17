"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const GLITCH_CHARS = "!@#$%^&*()_+-=[]{}|;:,.<>?";

const INTENSITY = {
  low: { duration: 30, chars: 0.1, randomChars: 0.05 },
  medium: { duration: 40, chars: 0.2, randomChars: 0.1 },
  high: { duration: 50, chars: 0.3, randomChars: 0.15 },
  extreme: { duration: 80, chars: 0.5, randomChars: 0.25 },
};

interface GlitchTextProps {
  children: string;
  className?: string;
  intensity?: keyof typeof INTENSITY;
  randomGlitchInterval?: number;
  initialScramble?: boolean;
  initialScrambleDuration?: number;
}

function scramble(text: string, amount: number) {
  return text
    .split("")
    .map((char) =>
      char === " " || char === "'" || Math.random() >= amount
        ? char
        : GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)]
    )
    .join("");
}

export default function GlitchText({
  children,
  className = "",
  intensity = "medium",
  randomGlitchInterval = 12000,
  initialScramble = false,
  initialScrambleDuration = 500,
}: GlitchTextProps) {
  const settings = INTENSITY[intensity];
  const [display, setDisplay] = useState(
    initialScramble ? scramble(children, settings.chars) : children
  );
  const [glitching, setGlitching] = useState(initialScramble);
  const untilRef = useRef(0);
  const reduceMotion = useRef(false);

  useEffect(() => {
    reduceMotion.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceMotion.current) {
      setDisplay(children);
      setGlitching(false);
    }
  }, [children]);

  useEffect(() => {
    if (reduceMotion.current) return;

    const tick = setInterval(() => {
      if (Date.now() < untilRef.current) {
        setGlitching(true);
        setDisplay(scramble(children, settings.randomChars));
      } else {
        setDisplay(children);
        setGlitching(false);
      }
    }, 50);

    return () => clearInterval(tick);
  }, [children, settings.randomChars]);

  useEffect(() => {
    if (reduceMotion.current || !initialScramble) return;

    const start = Date.now();
    untilRef.current = start + initialScrambleDuration;
    setGlitching(true);

    const tick = setInterval(() => {
      const progress = Math.min((Date.now() - start) / initialScrambleDuration, 1);
      if (progress >= 1) {
        setDisplay(children);
        setGlitching(false);
        untilRef.current = 0;
        clearInterval(tick);
        return;
      }
      setDisplay(scramble(children, settings.chars * (1 - progress)));
    }, 50);

    return () => clearInterval(tick);
  }, [children, initialScramble, initialScrambleDuration, settings.chars]);

  useEffect(() => {
    if (reduceMotion.current) return;

    let timeout: ReturnType<typeof setTimeout>;
    const loop = () => {
      timeout = setTimeout(() => {
        const burst = settings.duration * (0.3 + 0.4 * Math.random());
        untilRef.current = Math.max(untilRef.current, Date.now() + burst);
        loop();
      }, randomGlitchInterval * (0.5 + Math.random()));
    };
    loop();
    return () => clearTimeout(timeout);
  }, [randomGlitchInterval, settings.duration]);

  const extreme = intensity === "extreme";

  return (
    <motion.span
      className={`relative inline-block ${className}`}
      animate={
        glitching
          ? {
              x: extreme ? [0, -4, 4, -2, 3, -1, 0] : [0, -2, 2, -1, 1, 0],
              y: extreme ? [0, 2, -2, 1, -1, 0] : [0, 1, -1, 0],
            }
          : {}
      }
      transition={{ duration: extreme ? 0.1 : 0.08, ease: "easeOut" }}
    >
      <span className="relative z-10">{display}</span>
      {glitching && (
        <>
          <span
            className="absolute inset-0 z-0 text-[#00ffd5]"
            style={{
              transform: extreme ? "translate(-3px, 3px)" : "translate(-2px, 2px)",
              opacity: extreme ? 0.9 : 0.8,
            }}
            aria-hidden
          >
            {display}
          </span>
          {extreme && (
            <>
              <span
                className="absolute inset-0 z-0 text-[#ff0033]"
                style={{ transform: "translate(3px, -2px)", opacity: 0.7 }}
                aria-hidden
              >
                {display}
              </span>
              <span
                className="absolute inset-0 z-0 text-[#ff00ff]"
                style={{
                  clipPath: "inset(30% 0 50% 0)",
                  transform: "translate(-4px, 0)",
                  opacity: 0.5,
                }}
                aria-hidden
              >
                {display}
              </span>
            </>
          )}
        </>
      )}
    </motion.span>
  );
}
