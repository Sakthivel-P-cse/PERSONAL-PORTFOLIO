"use client";

import { useState } from "react";
import { portfolio } from "@/data/portfolio";

export default function PhoneCard() {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(portfolio.phoneDisplay);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  };

  return (
    <div className="border border-rule hover:border-cyan hover:bg-rule-soft transition-colors">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full p-4 flex justify-between items-center group text-left"
        aria-expanded={open}
      >
        <span className="text-text group-hover:text-cyan">phone</span>
        <span className="text-text-faint group-hover:text-cyan">{open ? "▾" : "▸"}</span>
      </button>
      {open && (
        <div className="px-4 pb-4 flex items-center gap-4 border-t border-rule pt-4">
          <img
            src="/images/phone-qr.svg"
            alt="QR code for Sakthivel phone number"
            className="w-24 h-24 shrink-0 border border-rule"
          />
          <div className="min-w-0 space-y-2">
            <div className="text-text-faint text-xs">$ finger sakthi</div>
            <a
              href={portfolio.social.phone}
              className="block text-text tracking-wider hover:text-cyan transition-colors"
            >
              {portfolio.phoneDisplay}
            </a>
            <button
              type="button"
              onClick={copy}
              className="text-xs text-cyan hover:text-text transition-colors"
            >
              {copied ? "copied" : "copy"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
