export {
  portfolio,
  featuredProjects,
  moreProjects,
  connectLinks,
  publicRepoLinks,
} from "./portfolio";
export type { Project, Experience, SkillCategory } from "./portfolio";

import { portfolio } from "./portfolio";

export const experiences = portfolio.experience;
export const certifications = portfolio.certifications;

export const advancedTechStack = [
  {
    icon: "<> ",
    title: "Distributed Consensus",
    concepts: "Raft · CRDTs · SWIM · Gossip · Linearizability",
  },
  {
    icon: "◈",
    title: "Durable Agentic Systems",
    concepts: "Temporal · LangGraph · Replay-safe workflows · Idempotency",
  },
  {
    icon: "⌁",
    title: "Observability & RCA",
    concepts: "Prometheus · Tempo · Loki · Influence graphs · Fault isolation",
  },
  {
    icon: "◇",
    title: "Zero-Trust Security",
    concepts: "RBAC · ABAC · mTLS · Replay protection · Trust scoring",
  },
  {
    icon: "▦",
    title: "Storage & Recovery",
    concepts: "PostgreSQL · RLS · WAL · Snapshots · Redis sessions",
  },
  {
    icon: "◌",
    title: "Sandboxed Execution",
    concepts: "gVisor · Bounded tools · Crash testing · Tamper testing",
  },
  {
    icon: "↔",
    title: "Service Networking",
    concepts: "gRPC · Authenticated transport · Partition testing · API boundaries",
  },
  {
    icon: "∴",
    title: "AI Retrieval & Context",
    concepts: "RAG · Embeddings · Qdrant · FAISS · MCP",
  },
  {
    icon: "⌘",
    title: "Cloud-Native Systems",
    concepts: "Kubernetes · Docker · Linux · GitHub Actions · gVisor",
  },
  {
    icon: "⚡",
    title: "Resilience Engineering",
    concepts: "Chaos testing · AIMD budgets · Priority shedding · Repair workflows",
  },
  {
    icon: ">_",
    title: "Deterministic Delivery",
    concepts: "Validation gates · Approval remediation · Immutable attempts · Auditability",
  },
];
