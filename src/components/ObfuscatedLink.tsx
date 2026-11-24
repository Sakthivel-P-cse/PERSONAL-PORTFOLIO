"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { MouseEvent as ReactMouseEvent } from "react";
import Link from "next/link";

interface ObfuscatedLinkProps {
  href?: string;
  label: string;
  external?: boolean;
  copyOnClick?: boolean;
}

const SCRAMBLE_GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*+?";

function randomGlyph() {
  return SCRAMBLE_GLYPHS[Math.floor(Math.random() * SCRAMBLE_GLYPHS.length)];
}

function scrambledText(length: number) {
  return Array.from({ length }, randomGlyph);
}

export default function ObfuscatedLink({
  href,
  label,
  external = false,
  copyOnClick = false,
}: ObfuscatedLinkProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [resolvedCount, setResolvedCount] = useState(0);
  const [copied, setCopied] = useState(false);
  // Keep the initial render deterministic for SSR; random glyphs begin on interaction.
  const [scrambledChars, setScrambledChars] = useState(() => label.split(""));
  const animationFrame = useRef<number | null>(null);
  const copyTimer = useRef<number | null>(null);

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
      setResolvedCount(label.length);
      setScrambledChars(label.split(""));
      return;
    }
    setResolvedCount(0);
    setScrambledChars(scrambledText(label.length));

    const startedAt = performance.now();
    const duration = Math.max(420, Math.min(900, label.length * 34));

    const reveal = (now: number) => {
      const progress = Math.min(1, (now - startedAt) / duration);
      const nextResolvedCount = Math.floor(progress * label.length);

      setResolvedCount(nextResolvedCount);
      setScrambledChars((current) =>
        current.map((character, index) =>
          index < nextResolvedCount ? label[index] : randomGlyph() || character
        )
      );

      if (progress < 1) {
        animationFrame.current = requestAnimationFrame(reveal);
      } else {
        setResolvedCount(label.length);
        setScrambledChars(label.split(""));
        animationFrame.current = null;
      }
    };

    animationFrame.current = requestAnimationFrame(reveal);
  }, [cancelReveal, label]);

  const resetReveal = useCallback(() => {
    cancelReveal();
    setIsHovered(false);
    setResolvedCount(0);
  }, [cancelReveal]);

  const copyLabel = useCallback(
    async (event: ReactMouseEvent<HTMLAnchorElement>) => {
      if (!copyOnClick) return;

      event.preventDefault();

      try {
        await navigator.clipboard.writeText(label);
        setCopied(true);

        if (copyTimer.current !== null) {
          window.clearTimeout(copyTimer.current);
        }
        copyTimer.current = window.setTimeout(() => {
          setCopied(false);
          copyTimer.current = null;
        }, 1_600);
      } catch {
        setCopied(false);
      }
    },
    [copyOnClick, label]
  );

  useEffect(
    () => () => {
      cancelReveal();
      if (copyTimer.current !== null) {
        window.clearTimeout(copyTimer.current);
      }
    },
    [cancelReveal]
  );

  const content = (
    <span
      className="obfuscated-link"
      onMouseEnter={startReveal}
      onMouseLeave={resetReveal}
      onFocus={startReveal}
      onBlur={resetReveal}
      aria-label={label}
    >
      <span aria-hidden="true">
        {label.split("").map((character, index) => {
          const isResolved = isHovered && index < resolvedCount;
          const displayCharacter = isHovered
            ? scrambledChars[index] || character
            : "█";

          return (
            <span
              key={`${character}-${index}`}
              className={`obfuscated-link__character ${
                isResolved ? "obfuscated-link__character--resolved" : ""
              }`}
            >
              {displayCharacter === " " ? "\u00a0" : displayCharacter}
            </span>
          );
        })}
      </span>
      {copyOnClick && copied && (
        <span className="obfuscated-link__feedback" role="status">
          copied
        </span>
      )}
    </span>
  );

  if (!href) {
    return content;
  }

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block"
        onClick={copyOnClick ? copyLabel : undefined}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className="inline-block" onClick={copyOnClick ? copyLabel : undefined}>
      {content}
    </Link>
  );
}
