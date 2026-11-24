const paths = {
  email: "M3 5h18v14H3zM3 6l9 7 9-7",
  github: "M9 19c-4 1-4-2-5-2m10 4v-3c0-1 .1-1.5-.5-2 3-.3 6-1.5 6-6a4.5 4.5 0 0 0-1.3-3.1 4 4 0 0 0-.1-3s-1-.3-3.2 1.2a11 11 0 0 0-5.8 0C6.9 3.6 5.9 3.9 5.9 3.9a4 4 0 0 0-.1 3A4.5 4.5 0 0 0 4.5 10c0 4.5 3 5.7 6 6-.5.5-.6 1.1-.5 2v3",
  linkedin: "M4 9h4v11H4zM6 4v.1M11 20V9h4v2c.6-1.3 4-2.4 5 1v8h-4v-6c0-2-1-2-1-2v8z",
  cv: "M5 3h10l4 4v14H5zM15 3v5h4M8 12h8M8 16h8",
  links: "M10 13a4 4 0 0 0 6 0l3-3a4 4 0 0 0-6-6l-2 2M14 11a4 4 0 0 0-6 0l-3 3a4 4 0 0 0 6 6l2-2",
};

export default function ContactIcon({ type }: { type: keyof typeof paths }) {
  return <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 shrink-0 text-cyan-400" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d={paths[type]} /></svg>;
}
