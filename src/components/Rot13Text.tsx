"use client";

import { useState } from "react";
import { motion } from "framer-motion";

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

export default function Rot13Text({ originalText, delay = 0 }: Rot13TextProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  const encodedText = rot13(originalText);
  const displayText = isHovered ? originalText : encodedText;

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="relative group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <p className="text-base md:text-lg lg:text-xl text-text font-light leading-relaxed">
        <span className="block" role="text" aria-label={originalText} style={{ cursor: "text" }}>
          <span aria-hidden="true">
            {displayText.split("").map((char, i) => (
              <span key={i} style={{ color: "rgb(136, 136, 136)", whiteSpace: "pre" }}>
                {char}
              </span>
            ))}
          </span>
        </span>
      </p>
    </motion.div>
  );
}
