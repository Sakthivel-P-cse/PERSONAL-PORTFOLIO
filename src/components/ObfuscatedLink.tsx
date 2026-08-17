"use client";

import { useState } from "react";
import Link from "next/link";

interface ObfuscatedLinkProps {
  href?: string;
  label: string;
  external?: boolean;
}

export default function ObfuscatedLink({ href, label, external = false }: ObfuscatedLinkProps) {
  const [isHovered, setIsHovered] = useState(false);
  const blockText = "█".repeat(label.length);
  
  const content = (
    <span 
      className="relative inline-block cursor-pointer transition-colors duration-300 text-[#555] hover:text-cyan"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span>{isHovered ? label : blockText}</span>
    </span>
  );

  if (!href) {
    return content;
  }

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="inline-block">
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className="inline-block">
      {content}
    </Link>
  );
}
