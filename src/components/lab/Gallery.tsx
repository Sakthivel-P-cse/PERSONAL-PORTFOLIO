"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

type Candidate = { id: string; name: string; source: string; url: string; license: string; kind: string; note?: string };
const categories: { title: string; slug: string; items: Candidate[] }[] = [
  { title: "Icons", slug: "icons", items: [
    {id:"IC-01",name:"Network",source:"Lucide · original SVG",url:"https://github.com/lucide-icons/lucide/blob/main/icons/network.svg",license:"ISC",kind:"network"},
    {id:"IC-02",name:"Activity",source:"Lucide · original SVG",url:"https://github.com/lucide-icons/lucide/blob/main/icons/activity.svg",license:"ISC",kind:"activity"},
    {id:"IC-03",name:"Terminal",source:"Tabler · original SVG",url:"https://github.com/tabler/tabler-icons/blob/main/icons/outline/terminal-2.svg",license:"MIT",kind:"terminal"},
  ]},
  { title: "Animated icons", slug: "animated-icons", items: [
    {id:"AI-01",name:"Three dots fade",source:"SVG Spinners · adapted SVG",url:"https://github.com/n3r4zzurr0/svg-spinners/blob/main/svg-css/3-dots-fade.svg",license:"MIT",kind:"dots"},
    {id:"AI-02",name:"Network signal",source:"Lucide + Motion · adaptation",url:"https://motion.dev/docs/react-svg-animation",license:"ISC + MIT",kind:"signal"},
  ]},
  { title: "Backgrounds", slug: "backgrounds", items: [
    {id:"BG-01",name:"Terminal grid",source:"Magic UI · inspired pattern",url:"https://magicui.design/docs/components/grid-pattern",license:"Original",kind:"grid"},
    {id:"BG-02",name:"Scanline sweep",source:"HairyDuck terminal · inspired pattern",url:"https://github.com/HairyDuck/terminal",license:"Original",kind:"scan"},
    {id:"BG-03",name:"Node constellation",source:"tsParticles · inspired pattern",url:"https://github.com/tsparticles/tsparticles",license:"Original",kind:"constellation"},
  ]},
  { title: "Scroll & transitions", slug: "scroll-transitions", items: [
    {id:"ST-01",name:"Section reveal",source:"Motion · API example",url:"https://motion.dev/docs/react-scroll-animations",license:"MIT",kind:"reveal"},
    {id:"ST-02",name:"Drawn trace",source:"Motion · SVG path example",url:"https://motion.dev/docs/react-svg-animation",license:"MIT",kind:"trace"},
    {id:"ST-03",name:"Link focus transition",source:"Motion · inspired pattern",url:"https://motion.dev/docs/react-accessibility",license:"Original",kind:"focus"},
  ]},
  { title: "Navigation", slug: "navigation", items: [
    {id:"NAV-01",name:"Section index",source:"Terminal Resume · inspired pattern",url:"https://github.com/umeranjum17/terminal-resume",license:"Original",kind:"section"},
    {id:"NAV-02",name:"Command filter",source:"cmdk · inspired pattern",url:"https://github.com/dip/cmdk",license:"Original",kind:"command"},
    {id:"NAV-03",name:"Reading progress",source:"Magic UI · inspired pattern",url:"https://magicui.design/docs/components",license:"Original",kind:"progress"},
  ]},
  { title: "Diagrams", slug: "diagrams", items: [
    {id:"DG-01",name:"Agent network",source:"React Flow · inspired SVG",url:"https://github.com/xyflow/xyflow",license:"Original",kind:"graph"},
    {id:"DG-02",name:"Fault path",source:"Mermaid · inspired SVG",url:"https://github.com/mermaid-js/mermaid",license:"Original",kind:"fault"},
  ]},
  { title: "Misc", slug: "misc", items: [
    {id:"M-01",name:"Terminal status",source:"LiveTerm · inspired pattern",url:"https://github.com/Cveinnt/LiveTerm",license:"Original",kind:"status"},
    {id:"M-02",name:"Signal border",source:"Magic UI · inspired pattern",url:"https://github.com/magicuidesign/magicui",license:"Original",kind:"border"},
  ]},
];

function Icon({ kind }: { kind: string }) {
  return <svg aria-hidden="true" viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    {kind === "network" && <><rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/></>}
    {kind === "activity" && <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"/>}
    {kind === "terminal" && <><path d="M8 9l3 3l-3 3"/><path d="M13 15l3 0"/><path d="M3 6a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2l0 -12"/></>}
  </svg>;
}

function Preview({ kind }: { kind: string }) {
  const reduced = useReducedMotion();
  const [query, setQuery] = useState("");
  if (["network", "activity", "terminal"].includes(kind)) return <Icon kind={kind}/>;
  if (kind === "dots") return <svg aria-hidden="true" width="64" height="24" viewBox="0 0 24 24" fill="currentColor"><circle className="lab-dot" cx="4" cy="12" r="3"/><circle className="lab-dot lab-dot2" cx="12" cy="12" r="3"/><circle className="lab-dot lab-dot3" cx="20" cy="12" r="3"/></svg>;
  if (kind === "signal") return <span className="lab-signal"><Icon kind="network"/></span>;
  if (kind === "grid" || kind === "scan") return <div className={`lab-background lab-${kind}`}><span>system / online</span></div>;
  if (kind === "constellation" || kind === "graph" || kind === "fault" || kind === "trace") return <svg aria-hidden="true" className={`lab-diagram lab-${kind}`} viewBox="0 0 300 100" fill="none"><path d={kind === "fault" ? "M25 50H90L125 20H175L210 50H275M90 50l35 30h50l35-30" : "M25 65L90 25L150 60L210 22L275 60M90 25L120 82L210 22"} stroke="currentColor" strokeWidth="1.5" strokeDasharray={kind === "fault" ? "5 4" : undefined}/>{[ [25,65],[90,25],[150,60],[210,22],[275,60] ].map(([x,y])=><circle key={x} cx={x} cy={y} r="5" fill="#0a0a0a" stroke="currentColor" strokeWidth="2"/>)}</svg>;
  if (kind === "reveal") return <motion.div initial={reduced ? false : { opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: reduced ? 0 : .5 }} className="lab-sample">&gt; system ready<span>scroll into view to replay</span></motion.div>;
  if (kind === "focus") return <button className="lab-preview-button">inspect signal ↗</button>;
  if (kind === "section") return <nav aria-label="Example section navigation" className="lab-index"><a href="#navigation">01 / overview</a><a href="#diagrams">02 / projects</a><a href="#misc">03 / contact</a></nav>;
  if (kind === "command") return <div className="lab-command"><label htmlFor="lab-filter">&gt; find a section</label><input id="lab-filter" value={query} onChange={e=>setQuery(e.target.value)} placeholder="Type to filter"/>{["projects", "contact", "stack"].filter(x=>x.includes(query.toLowerCase())).map(x=><span key={x}>↳ {x}</span>)}</div>;
  if (kind === "progress") return <div className="lab-progress"><span>reading progress</span><div role="progressbar" aria-label="Example reading progress" aria-valuenow={64} aria-valuemin={0} aria-valuemax={100}><i/></div><span>64%</span></div>;
  if (kind === "status") return <div className="lab-sample"><span>$ systemctl status portfolio</span>● active (running)<span>latency: 12ms · 3 nodes</span></div>;
  return <div className="lab-border">&gt; resilient by design <span>status / online</span></div>;
}

function Card({ item }: { item: Candidate }) {
  const [copied, setCopied] = useState("");
  async function copy() { try { await navigator.clipboard.writeText(item.id); setCopied("Copied"); } catch { setCopied("Copy failed"); } }
  return <article className="lab-card"><div className="lab-card-top"><span className="lab-id">{item.id}</span><button onClick={copy} aria-label={`Copy ${item.id}`}>copy ID</button></div><h3>{item.name}</h3><p className="lab-source"><a href={item.url} target="_blank" rel="noreferrer">{item.source} ↗</a></p><div className="lab-preview"><Preview kind={item.kind}/></div><div className="lab-meta"><span>license <b>{item.license}</b></span><span>dependency <b>N</b></span><span>size <b>S</b></span></div><span className="lab-feedback" role="status">{copied}</span></article>;
}

export default function Gallery() {
  return <div className="lab"><header className="lab-header"><div><p className="lab-eyebrow">EXPLORATION / UI CANDIDATES</p><h1>signal<span className="lab-slash">/</span>lab</h1><p>A collection of small ideas for the portfolio. Pick the IDs that feel right.</p></div><div className="lab-count"><strong>{categories.reduce((n,c)=>n+c.items.length,0)}</strong><span>candidates<br/>7 categories</span></div></header><div className="lab-layout"><aside><nav aria-label="Gallery categories"><p>INDEX / 00</p>{categories.map((c,i)=><a key={c.slug} href={`#${c.slug}`}><span>{String(i+1).padStart(2,"0")}</span>{c.title}<small>{c.items.length}</small></a>)}</nav></aside><div className="lab-content">{categories.map((c,i)=><section id={c.slug} key={c.slug}><div className="lab-section-heading"><span>/{String(i+1).padStart(2,"0")}</span><h2>{c.title}</h2><span>{c.items.length} candidates</span></div><div className="lab-cards">{c.items.map(item=><Card key={item.id} item={item}/>)}</div></section>)}<footer>END OF TRANSMISSION <span> / select by ID</span></footer></div></div></div>;
}
