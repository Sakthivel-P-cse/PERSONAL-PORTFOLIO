"use client";

import { useState } from "react";
import { portfolio } from "@/data/portfolio";

export default function EmailCard() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState("");

  async function copy() {
    try {
      await navigator.clipboard.writeText(portfolio.email);
      setStatus("Email copied");
    } catch {
      setStatus("Could not copy email");
    }
  }

  return (
    <div className="border border-rule transition-colors hover:border-cyan hover:bg-rule-soft">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="group flex w-full items-center justify-between p-4 text-left"
        aria-expanded={open}
      >
        <span className="text-text group-hover:text-cyan">mail</span>
        <span className="text-text-faint group-hover:text-cyan">
          {open ? "▾" : "▸"}
        </span>
      </button>

      {open && (
        <div className="flex items-center gap-4 border-t border-rule px-4 pb-4 pt-4">
          <div
            aria-hidden="true"
            className="flex h-16 w-16 shrink-0 items-center justify-center border border-rule text-2xl text-cyan"
          >
            @
          </div>
          <div className="min-w-0 space-y-2">
            <div className="text-xs text-text-faint">$ mail sakthi</div>
            <a
              href={`mailto:${portfolio.email}`}
              className="block truncate text-text transition-colors hover:text-cyan"
            >
              {portfolio.email}
            </a>
            <button
              type="button"
              onClick={copy}
              className="text-xs text-cyan transition-colors hover:text-text"
            >
              copy
            </button>
            <span role="status" className="block text-xs text-text">{status}</span>
          </div>
        </div>
      )}
    </div>
  );
}
