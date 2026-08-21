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

export type AdvancedTechStackVisual =
  | "consensus"
  | "workflow"
  | "observability"
  | "security"
  | "storage"
  | "sandbox"
  | "network"
  | "retrieval"
  | "cloud"
  | "resilience"
  | "delivery";

export const advancedTechStack: Array<{
  icon: string;
  title: string;
  concepts: string;
  visual: AdvancedTechStackVisual;
}> = [
  {
    icon: "<> ",
    title: "Distributed Consensus",
    concepts: "Raft · CRDTs · SWIM · Gossip · Linearizability",
    visual: "consensus",
  },
  {
    icon: "◈",
    title: "Durable Agentic Systems",
    concepts: "Temporal · LangGraph · Replay-safe workflows · Idempotency",
    visual: "workflow",
  },
  {
    icon: "⌁",
    title: "Observability & RCA",
    concepts: "Prometheus · Tempo · Loki · Influence graphs · Fault isolation",
    visual: "observability",
  },
  {
    icon: "◇",
    title: "Zero-Trust Security",
    concepts: "RBAC · ABAC · mTLS · Replay protection · Trust scoring",
    visual: "security",
  },
  {
    icon: "▦",
    title: "Storage & Recovery",
    concepts: "PostgreSQL · RLS · WAL · Snapshots · Redis sessions",
    visual: "storage",
  },
  {
    icon: "◌",
    title: "Sandboxed Execution",
    concepts: "gVisor · Bounded tools · Crash testing · Tamper testing",
    visual: "sandbox",
  },
  {
    icon: "↔",
    title: "Service Networking",
    concepts: "gRPC · Authenticated transport · Partition testing · API boundaries",
    visual: "network",
  },
  {
    icon: "∴",
    title: "AI Retrieval & Context",
    concepts: "RAG · Embeddings · Qdrant · FAISS · MCP",
    visual: "retrieval",
  },
  {
    icon: "⌘",
    title: "Cloud-Native Systems",
    concepts: "Kubernetes · Docker · Linux · GitHub Actions · gVisor",
    visual: "cloud",
  },
  {
    icon: "⚡",
    title: "Resilience Engineering",
    concepts: "Chaos testing · AIMD budgets · Priority shedding · Repair workflows",
    visual: "resilience",
  },
  {
    icon: ">_",
    title: "Deterministic Delivery",
    concepts: "Validation gates · Approval remediation · Immutable attempts · Auditability",
    visual: "delivery",
  },
];
