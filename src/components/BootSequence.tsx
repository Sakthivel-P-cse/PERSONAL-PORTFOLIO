"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { portfolio } from "@/data/portfolio";

interface BootSequenceProps {
  onComplete?: () => void;
}

export default function BootSequence({ onComplete }: BootSequenceProps) {
  const [visibleLines, setVisibleLines] = useState(0);
  const [hidden, setHidden] = useState(false);
  const skipRef = useRef<HTMLButtonElement>(null);
  const started = useRef(false);

  const complete = useCallback(() => {
    setHidden(true);
    onComplete?.();
  }, [onComplete]);

  useEffect(() => {
    if (hidden) return;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let seen = false;
    try {
      seen = sessionStorage.getItem("boot-sequence-seen") === "1";
    } catch {
      // Continue without session persistence if storage is unavailable.
    }

    if (prefersReducedMotion || (seen && !started.current)) {
      setHidden(true);
      onComplete?.();
      return;
    }

    started.current = true;
    try {
      sessionStorage.setItem("boot-sequence-seen", "1");
    } catch {
      // Continue without session persistence if storage is unavailable.
    }
    const previousFocus = document.activeElement as HTMLElement | null;
    const skipButton = skipRef.current;
    skipButton?.focus();
    const totalLines = portfolio.bootSequence.length;
    const lineInterval = 250;
    const totalDuration = 2000;

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
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") complete();
      if (event.key === "Tab") event.preventDefault();
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      clearInterval(lineTimer);
      clearTimeout(completeTimer);
      window.removeEventListener("keydown", handleKeyDown);
      if (document.activeElement === skipButton || document.activeElement === document.body) {
        if (previousFocus && previousFocus !== document.body && previousFocus.isConnected && !previousFocus.closest("nav a")) {
          previousFocus.focus();
        } else {
          skipButton?.blur();
        }
      }
    };
  }, [complete, onComplete, hidden]);

  if (hidden) return null;

  return (
    <div
      className="boot-sequence"
      role="dialog"
      aria-label="Boot sequence"
      aria-modal="true"
      aria-live="polite"
    >
      <div className="boot-sequence__lines">
        {portfolio.bootSequence.map((line, i) => (
          <div
            key={line}
            className={`boot-sequence__line ${
              i < visibleLines ? "opacity-100" : "opacity-0"
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
        {visibleLines >= portfolio.bootSequence.length && (
          <div className="boot-sequence__cursor" aria-hidden="true">
            █
          </div>
        )}
      </div>
      <button
        ref={skipRef}
        onClick={complete}
        className="boot-sequence__skip"
        type="button"
        aria-label="Skip boot sequence"
      >
        skip [esc]
      </button>
    </div>
  );
}
