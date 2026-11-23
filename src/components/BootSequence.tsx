"use client";

import { useEffect, useState, useCallback } from "react";
import { portfolio } from "@/data/portfolio";

interface BootSequenceProps {
  onComplete?: () => void;
}

export default function BootSequence({ onComplete }: BootSequenceProps) {
  const [visibleLines, setVisibleLines] = useState(0);
  const [skipped, setSkipped] = useState(false);
  const [hidden, setHidden] = useState(false);

  const complete = useCallback(() => {
    setHidden(true);
    onComplete?.();
  }, [onComplete]);

  const skip = useCallback(() => {
    setSkipped(true);
    complete();
  }, [complete]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      complete();
      return;
    }

    const totalLines = portfolio.bootSequence.length;
    const lineInterval = 700;
    const totalDuration = 5000;

    const lineTimer = setInterval(() => {
      setVisibleLines((prev) => {
        if (prev >= totalLines) {
          clearInterval(lineTimer);
          return prev;
        }
        return prev + 1;
      });
    }, lineInterval);

    const completeTimer = setTimeout(complete, totalDuration);

    return () => {
      clearInterval(lineTimer);
      clearTimeout(completeTimer);
    };
  }, [complete]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        skip();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [skip]);

  if (hidden) return null;

  return (
    <div
      className="boot-sequence"
      role="dialog"
      aria-label="Boot sequence"
      aria-live="polite"
    >
      <div className="boot-sequence__lines">
        {portfolio.bootSequence.map((line, i) => (
          <div
            key={line}
            className={`boot-sequence__line ${
              skipped || i < visibleLines ? "opacity-100" : "opacity-0"
            }`}
          >
            {line}
          </div>
        ))}
        <svg aria-hidden="true" width="24" height="12" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="4" cy="12" r="3" className="motion-safe:animate-pulse" />
          <circle cx="12" cy="12" r="3" className="motion-safe:animate-pulse [animation-delay:150ms]" />
          <circle cx="20" cy="12" r="3" className="motion-safe:animate-pulse [animation-delay:300ms]" />
        </svg>
        {!skipped && visibleLines >= portfolio.bootSequence.length && (
          <div className="boot-sequence__cursor" aria-hidden="true">
            █
          </div>
        )}
      </div>
      <button
        onClick={skip}
        className="boot-sequence__skip"
        type="button"
        aria-label="Skip boot sequence"
      >
        skip [esc]
      </button>
    </div>
  );
}
