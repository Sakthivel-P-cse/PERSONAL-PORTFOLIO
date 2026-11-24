"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface Rot13TextProps {
  originalText: string;
  delay?: number;
}

function rot13(str: string) {
  return str.replace(/[a-zA-Z]/g, function (c) {
    const base = c <= "Z" ? 65 : 97;
    return String.fromCharCode(base + ((c.charCodeAt(0) - base + 13) % 26));
  });
}

const SCRAMBLE_GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*+?";

function randomGlyph() {
  return SCRAMBLE_GLYPHS[Math.floor(Math.random() * SCRAMBLE_GLYPHS.length)];
}

function isLetter(character: string) {
  return /[a-zA-Z]/.test(character);
}

export default function Rot13Text({ originalText, delay = 0 }: Rot13TextProps) {
  const reduceMotion = useReducedMotion();
  const encodedText = rot13(originalText);
  const [isHovered, setIsHovered] = useState(false);
  const [resolvedCount, setResolvedCount] = useState(0);
  // Keep the initial render deterministic for SSR; random glyphs begin on interaction.
  const [displayChars, setDisplayChars] = useState(() => encodedText.split(""));
  const animationFrame = useRef<number | null>(null);

  const cancelReveal = useCallback(() => {
    if (animationFrame.current !== null) {
      cancelAnimationFrame(animationFrame.current);
      animationFrame.current = null;
    }
  }, []);

  const startReveal = useCallback(() => {
    cancelReveal();
    setIsHovered(true);

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setResolvedCount(originalText.length);
      setDisplayChars(originalText.split(""));
      return;
    }

    setResolvedCount(0);
    setDisplayChars(
      encodedText.split("").map((character, index) =>
        isLetter(character) ? randomGlyph() : originalText[index]
      )
    );

    const startedAt = performance.now();
    const duration = Math.max(520, Math.min(1_100, originalText.length * 32));

    const reveal = (now: number) => {
      const progress = Math.min(1, (now - startedAt) / duration);
      const nextResolvedCount = Math.floor(progress * originalText.length);

      setResolvedCount(nextResolvedCount);
      setDisplayChars((current) =>
        current.map((character, index) => {
          if (!isLetter(encodedText[index])) return originalText[index];
          return index < nextResolvedCount ? originalText[index] : randomGlyph() || character;
        })
      );

      if (progress < 1) {
        animationFrame.current = requestAnimationFrame(reveal);
      } else {
        setResolvedCount(originalText.length);
        setDisplayChars(originalText.split(""));
        animationFrame.current = null;
      }
    };

    animationFrame.current = requestAnimationFrame(reveal);
  }, [cancelReveal, encodedText, originalText]);

  const resetReveal = useCallback(() => {
    cancelReveal();
    setIsHovered(false);
    setResolvedCount(0);
    setDisplayChars(encodedText.split(""));
  }, [cancelReveal, encodedText]);

  useEffect(
    () => () => {
      cancelReveal();
    },
    [cancelReveal]
  );

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="relative group cursor-pointer"
      onMouseEnter={startReveal}
      onMouseLeave={resetReveal}
      onFocus={startReveal}
      onBlur={resetReveal}
    >
      <p className="text-base md:text-lg lg:text-xl text-text font-light leading-relaxed">
        <span className="block" style={{ cursor: "text" }}>
          <span className="sr-only">{originalText}</span>
          <span aria-hidden="true">
            {displayChars.map((character, index) => {
              const encodedCharacter = encodedText[index];
              const isResolved =
                isHovered &&
                (!isLetter(encodedCharacter) || index < resolvedCount);
              const isScrambling =
                isHovered && isLetter(encodedCharacter) && !isResolved;

              return (
                <span
                  key={`${encodedCharacter}-${index}`}
                  className={`rot13-text__character ${
                    isResolved
                      ? "rot13-text__character--resolved"
                      : isScrambling
                        ? "rot13-text__character--scrambling"
                        : ""
                  }`}
                >
                  {character === " " ? "\u00a0" : character}
                </span>
              );
            })}
          </span>
        </span>
      </p>
    </motion.div>
  );
}
