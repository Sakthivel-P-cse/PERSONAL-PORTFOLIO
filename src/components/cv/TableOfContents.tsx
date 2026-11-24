"use client";

import { useEffect, useState } from "react";

const sections = ["name", "description", "education", "experience", "projects", "stack"];
const labels = ["NAME", "DESCRIPTION", "EDUCATION", "EXPERIENCE", "PROJECTS", "TECH STACK"];

export default function TableOfContents() {
  const [active, setActive] = useState("name");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? window.scrollY / max : 0);
      const current = sections.filter((id) => {
        const section = document.getElementById(id);
        return section && section.getBoundingClientRect().top <= window.innerHeight * 0.35;
      }).at(-1);
      setActive(current ?? sections[0]);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <nav aria-label="Table of contents" className="space-y-2 text-sm">
      <div className="text-text-faint mb-4 uppercase text-xs tracking-wider">table of contents</div>
      <div aria-hidden="true" className="h-1 bg-rule"><div className="h-full bg-cyan" style={{ width: `${progress * 100}%` }} /></div>
      {sections.map((id, index) => (
        <a key={id} href={`#${id}`} aria-current={active === id ? "location" : undefined} className={`block hover:text-cyan focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan ${active === id ? "text-cyan" : "text-text-dim"}`}>
          {String(index + 1).padStart(3, "0")} {labels[index]}
        </a>
      ))}
    </nav>
  );
}
