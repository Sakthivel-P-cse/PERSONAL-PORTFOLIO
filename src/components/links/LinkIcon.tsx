type IconName = "github" | "linkedin" | "mail" | "file" | "terminal" | "phone";

export default function LinkIcon({ name }: { name: IconName }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 shrink-0">
      {name === "github" && <path d="M9 19c-4 1-4-2-6-2m12 4v-3.5c0-1 .1-1.5-.5-2 3-.3 6-1.5 6-6a4.5 4.5 0 0 0-1.2-3.1c.1-.3.5-1.5-.1-3.1 0 0-1 0-3.2 1.3a11 11 0 0 0-5.8 0C8 3.3 7 3.3 7 3.3c-.6 1.6-.2 2.8-.1 3.1A4.5 4.5 0 0 0 5.7 9.5c0 4.5 3 5.7 6 6-.5.4-.6 1-.6 2V21" />}
      {name === "linkedin" && <><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M7 10v7m0-10v.1M11 17v-7m0 3c0-4 6-4 6 0v4" /></>}
      {name === "mail" && <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></>}
      {name === "file" && <><path d="M6 3h8l4 4v14H6z" /><path d="M14 3v5h4M9 12h6M9 16h6" /></>}
      {name === "terminal" && <><rect x="3" y="4" width="18" height="16" rx="2" /><path d="m7 9 3 3-3 3m5 0h5" /></>}
      {name === "phone" && <path d="M5 3h4l2 5-2.5 2a15 15 0 0 0 5.5 5.5l2-2.5 5 2v4c0 1-1 2-2 2A17 17 0 0 1 3 5c0-1 1-2 2-2Z" />}
    </svg>
  );
}
