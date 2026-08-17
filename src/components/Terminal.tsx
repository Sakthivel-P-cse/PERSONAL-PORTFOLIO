"use client";

import { useState, useRef, useEffect, KeyboardEvent } from "react";
import { portfolio, featuredProjects, moreProjects } from "@/data/portfolio";

interface TerminalLine {
  type: "input" | "output";
  content: string;
}

const COMMANDS = [
  "help",
  "about",
  "skills",
  "projects",
  "experience",
  "education",
  "contact",
  "github",
  "linkedin",
  "cv",
  "clear",
];

function getCommandOutput(cmd: string): string[] {
  const command = cmd.trim().toLowerCase();

  switch (command) {
    case "help":
      return [
        "available commands:",
        COMMANDS.join("  "),
      ];
    case "about":
      return [
        portfolio.about.summary,
        "",
        portfolio.about.work,
        "",
        "interests: " + portfolio.about.interests.join(", "),
      ];
    case "skills":
      return portfolio.skills.flatMap((cat) => [
        cat.category + ":",
        "  " + cat.items.join(", "),
        "",
      ]);
    case "projects":
      return [...featuredProjects, ...moreProjects].flatMap((p) => [
        `• ${p.name}${p.subtitle ? ` — ${p.subtitle}` : ""}`,
        `  ${p.visibility === "private" ? "[private]" : p.repository}`,
        "",
      ]);
    case "experience":
      return portfolio.experience.flatMap((exp) => [
        `${exp.role} @ ${exp.company}`,
        `  ${exp.dates} · ${exp.location}`,
        `  ${exp.description}`,
        "",
      ]);
    case "education":
      return [
        portfolio.education.degree,
        portfolio.education.institution,
        portfolio.education.dates,
        `CGPA: ${portfolio.education.cgpa}`,
      ];
    case "contact":
      return [
        portfolio.email,
        portfolio.phoneDisplay,
        portfolio.location,
      ];
    case "github":
      if (typeof window !== "undefined") {
        window.open(portfolio.social.github, "_blank", "noopener,noreferrer");
      }
      return [`opening ${portfolio.social.github}`];
    case "linkedin":
      if (typeof window !== "undefined") {
        window.open(portfolio.social.linkedin, "_blank", "noopener,noreferrer");
      }
      return [`opening ${portfolio.social.linkedin}`];
    case "cv":
      if (typeof window !== "undefined") {
        window.location.href = "/cv";
      }
      return ["navigating to /cv"];
    case "clear":
      return ["__CLEAR__"];
    default:
      return [`command not found: ${cmd}`, "type 'help' for available commands"];
  }
}

export default function Terminal() {
  const [lines, setLines] = useState<TerminalLine[]>([
    { type: "output", content: `${portfolio.shortName}.portfolio — interactive terminal` },
    { type: "output", content: "type 'help' to see available commands" },
  ]);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [lines]);

  const executeCommand = (cmd: string) => {
    if (!cmd.trim()) return;

    const newLines: TerminalLine[] = [
      { type: "input", content: cmd },
    ];

    const output = getCommandOutput(cmd);
    if (output[0] === "__CLEAR__") {
      setLines([
        { type: "output", content: `${portfolio.shortName}.portfolio — interactive terminal` },
      ]);
      return;
    }

    output.forEach((line) => {
      newLines.push({ type: "output", content: line });
    });

    setLines((prev) => [...prev, ...newLines]);
    setHistory((prev) => [...prev, cmd]);
    setHistoryIndex(-1);
    setInput("");
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      executeCommand(input);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (history.length === 0) return;
      const newIndex = historyIndex === -1 ? history.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(newIndex);
      setInput(history[newIndex]);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex === -1) return;
      const newIndex = historyIndex + 1;
      if (newIndex >= history.length) {
        setHistoryIndex(-1);
        setInput("");
      } else {
        setHistoryIndex(newIndex);
        setInput(history[newIndex]);
      }
    }
  };

  return (
    <div
      className="border border-rule bg-rule-soft rounded font-jetbrains text-sm md:text-base"
      onClick={() => inputRef.current?.focus()}
    >
      <div className="border-b border-rule px-4 py-2 flex items-center gap-2 text-text-faint text-xs">
        <span className="w-2.5 h-2.5 rounded-full bg-crimson/60" />
        <span className="w-2.5 h-2.5 rounded-full bg-toxic/40" />
        <span className="w-2.5 h-2.5 rounded-full bg-cyan/40" />
        <span className="ml-2">{portfolio.shortName}@portfolio</span>
      </div>
      <div className="p-4 h-64 md:h-80 overflow-y-auto space-y-1">
        {lines.map((line, i) => (
          <div
            key={i}
            className={
              line.type === "input"
                ? "text-cyan"
                : "text-text-dim whitespace-pre-wrap"
            }
          >
            {line.type === "input" && (
              <span className="text-text-faint mr-2">{">"}</span>
            )}
            {line.content}
          </div>
        ))}
        <div className="flex items-center gap-2">
          <span className="text-text-faint">{">"}</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent outline-none text-text caret-cyan"
            aria-label="Terminal input"
            spellCheck={false}
            autoComplete="off"
          />
          <span className="text-cyan animate-pulse">█</span>
        </div>
        <div ref={bottomRef} />
      </div>
    </div>
  );
}
