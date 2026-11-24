"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { portfolio } from "@/data/portfolio";
import { Activity, File, Github, Linkedin, Mail, Network, Terminal } from "./NavIcons";

const commands = [
  { label: "Home", href: "/", icon: Terminal },
  { label: "Projects", href: "/cv#projects", icon: Network },
  { label: "Contact", href: "/#contact", icon: Mail },
  { label: "CV", href: "/cv", icon: File },
  { label: "Links", href: "/links", icon: Activity },
  { label: "GitHub", href: portfolio.social.github, icon: Github },
  { label: "LinkedIn", href: portfolio.social.linkedin, icon: Linkedin },
];

export default function CommandPalette() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(0);
  const [active, setActive] = useState("");
  const input = useRef<HTMLInputElement>(null);
  const previousFocus = useRef<HTMLElement | null>(null);
  const results = commands.filter((command) => command.label.toLowerCase().includes(query.toLowerCase()));

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((value) => !value);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (!open) return;
    previousFocus.current = document.activeElement as HTMLElement;
    input.current?.focus();
    return () => previousFocus.current?.focus();
  }, [open]);

  useEffect(() => {
    setActive("");
    const section = document.querySelector(pathname === "/cv" ? "#projects" : pathname === "/" ? "#contact" : "#not-a-section");
    if (!section) return;
    const observer = new IntersectionObserver(([entry]) => setActive(entry.isIntersecting ? section.id : ""), { rootMargin: "-20% 0px -60% 0px" });
    observer.observe(section);
    return () => observer.disconnect();
  }, [pathname]);

  const close = () => { setOpen(false); setQuery(""); setSelected(0); };

  return <>
    <nav className="site-nav" aria-label="Primary navigation">
      <Link href="/cv#projects" aria-current={active === "projects" ? "location" : undefined}>projects</Link>
      <Link href="/#contact" aria-current={active === "contact" ? "location" : undefined}>contact</Link>
      <Link href="/links">links</Link>
      <Link href="/cv">cv</Link>
      <button type="button" onClick={() => setOpen(true)} aria-label="Open command palette">⌘ K</button>
    </nav>
    {open && <div className="command-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) close(); }}>
      <div className="command-palette" role="dialog" aria-modal="true" aria-label="Command palette" onKeyDown={(event) => {
        if (event.key === "Escape") { event.preventDefault(); close(); }
        if (event.key === "Tab") { event.preventDefault(); input.current?.focus(); }
        if (event.key === "ArrowDown" && results.length) { event.preventDefault(); setSelected((selected + 1) % results.length); }
        if (event.key === "ArrowUp" && results.length) { event.preventDefault(); setSelected((selected + results.length - 1) % results.length); }
        if (event.key === "Enter" && results[selected]) { event.preventDefault(); window.location.assign(results[selected].href); close(); }
      }}>
        <input ref={input} value={query} onChange={(event) => { setQuery(event.target.value); setSelected(0); }} placeholder="Search commands..." aria-label="Search commands" role="combobox" aria-expanded="true" aria-controls="command-results" aria-activedescendant={results[selected] ? `command-${selected}` : undefined} autoComplete="off" />
        <div id="command-results" role="listbox" aria-label="Commands">
          {results.map((command, index) => <div key={command.label} id={`command-${index}`} role="option" aria-selected={index === selected} className="command-option" onMouseEnter={() => setSelected(index)} onClick={() => { window.location.assign(command.href); close(); }}><command.icon />{command.label}</div>)}
          {results.length === 0 && <p className="command-empty">No commands found.</p>}
        </div>
      </div>
    </div>}
  </>;
}
