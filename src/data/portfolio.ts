export const portfolio = {
  name: "Sakthivel P",
  shortName: "sakthivel",
  heroPrompt: "> Sakthi",
  displayName: "Sakthivel",
  quote: [
    "Зачем поклоняться легендам,",
    "если знаешь, что можешь стать одной из них?",
  ],
  headline:
    "Engineering Distributed Systems, Backend Infrastructure & AI Platforms.",
  shortTitle: "Distributed Systems • Backend Infrastructure • AI Engineering",
  professions: [
    "AI Engineer",
    "DevOps Engineer",
    "Backend Engineer",
    "Systems Engineer",
  ],
  location: "Kanchipuram, Tamil Nadu, India",
  email: "prsakthivel51@gmail.com",
  phone: "9629627360",
  phoneDisplay: "+91 9629627360",

  social: {
    github: "https://github.com/Sakthivel-P-cse",
    linkedin: "https://linkedin.com/in/sakthivel-p-00152a317/",
    email: "mailto:prsakthivel51@gmail.com",
    phone: "tel:+919629627360",
  },

  about: {
    summary:
      "Computer Science Engineering student at Chennai Institute of Technology focused on distributed systems, backend engineering, cloud-native infrastructure, observability and AI infrastructure.",
    work:
      "Work spans distributed consensus systems, CRDT-based systems, Kubernetes observability and root-cause analysis, durable agentic workflows, backend infrastructure and zero-trust authentication systems.",
    interests: [
      "distributed systems",
      "backend infrastructure",
      "systems engineering",
      "cloud-native systems",
      "observability",
      "AI infrastructure",
      "agentic systems",
      "developer infrastructure",
    ],
  },

  education: {
    institution: "Chennai Institute of Technology",
    degree: "B.E. Computer Science Engineering",
    dates: "2024 – 2028",
    cgpa: "8.1",
    location: "Chennai, Tamil Nadu, India",
  },

  skills: [
    {
      category: "LANGUAGES",
      items: ["Go", "Python", "TypeScript", "JavaScript", "Java", "SQL"],
    },
    {
      category: "DISTRIBUTED SYSTEMS",
      items: ["Raft", "CRDTs", "Gossip", "SWIM", "gRPC", "CAP", "Linearizability"],
    },
    {
      category: "AI / AGENT INFRASTRUCTURE",
      items: [
        "LangGraph",
        "RAG",
        "Embeddings",
        "LLM Orchestration",
        "Temporal",
        "MCP",
      ],
    },
    {
      category: "DATABASES / STORAGE",
      items: [
        "PostgreSQL",
        "Redis",
        "WAL",
        "Snapshots",
        "Supabase",
        "Qdrant",
        "FAISS",
      ],
    },
    {
      category: "INFRASTRUCTURE / DEVOPS",
      items: [
        "Docker",
        "Kubernetes",
        "Prometheus",
        "Loki",
        "Tempo",
        "Git",
        "GitHub Actions",
        "Linux",
        "gVisor",
      ],
    },
  ],

  projects: [
    {
      id: "viper",
      name: "Viper",
      subtitle: "Raft-Based Distributed Key-Value Store",
      description:
        "A distributed key-value service built around the Raft consensus protocol, with linearizable reads and writes, checksummed WAL recovery, snapshots, authenticated gRPC, chaos testing and bounded linearizability checking.",
      technologies: [
        "Go",
        "Raft",
        "gRPC",
        "WAL",
        "snapshots",
        "distributed consensus",
        "linearizability",
        "chaos testing",
      ],
      benchmarks: {
        localReads: "~34.31 ns/op",
        syncedWal: "~2.64 µs/op",
      },
      repository: "https://github.com/Sakthivel-P-cse/Viper",
      visibility: "public" as const,
      featured: true,
    },
    {
      id: "causa",
      name: "CAUSA",
      subtitle: "Observability-Driven Root Cause Analysis Platform",
      description:
        "Kubernetes observability platform for root-cause analysis using Prometheus metrics, Tempo traces and Loki logs. Builds influence graphs with root-cause ranking, anomaly detection, multi-fault isolation and approval-gated remediation.",
      technologies: [
        "Kubernetes",
        "Prometheus",
        "Tempo",
        "Loki",
        "observability",
        "root-cause analysis",
      ],
      repository: "https://github.com/Sakthivel-P-cse/CAUSA",
      visibility: "private" as const,
      featured: true,
    },
    {
      id: "autobuild",
      name: "AUTOBUILD",
      subtitle: "Durable Agentic Software Engineering Platform",
      description:
        "Durable agentic workflows with Temporal and PostgreSQL. Integrates GitHub, LangGraph and gVisor with RLS-scoped state, immutable attempts, bounded tool access, replay-safe workflows, deterministic validation, security/crash/cancellation/tamper testing, idempotency and repair workflows.",
      technologies: [
        "Temporal",
        "PostgreSQL",
        "LangGraph",
        "gVisor",
        "GitHub",
        "agentic workflows",
      ],
      repository: "https://github.com/Sakthivel-P-cse/AUTOBUILD",
      visibility: "private" as const,
      featured: true,
    },
    {
      id: "crdt-rate-limiter",
      name: "CRDT-Based Decentralized Rate Limiter",
      subtitle: "",
      description:
        "Decentralized rate limiting with an AP distributed architecture using per-epoch G-Counter CRDTs, delta gossip and SWIM membership. Features proportional sliding windows, gRPC, partition testing, AIMD budgets, priority shedding and Prometheus metrics.",
      technologies: [
        "Go",
        "CRDTs",
        "SWIM",
        "gRPC",
        "gossip",
        "Prometheus",
      ],
      repository:
        "https://github.com/Sakthivel-P-cse/CRDT-based-decentralized-rate-limiting",
      visibility: "public" as const,
      featured: true,
    },
    {
      id: "trustchain",
      name: "TrustChain",
      subtitle: "Continuous Zero-Trust Authentication",
      description:
        "Zero-trust authentication with short-lived JWTs, RBAC and ABAC, tenant isolation, Redis sessions, mTLS identity, replay protection, continuous trust scoring, session downgrade and session termination.",
      technologies: [
        "zero-trust",
        "JWT",
        "RBAC",
        "ABAC",
        "Redis",
        "mTLS",
      ],
      repository:
        "https://github.com/Sakthivel-P-cse/TrustChain-Zero-Trust-Authentication-System-with-Continuous-Trust-Scoring",
      visibility: "public" as const,
      featured: true,
    },
    {
      id: "cit-polling",
      name: "CIT Polling System",
      subtitle: "",
      description:
        "A college polling platform supporting role-based workflows, scheduling, analytics, real-time updates, Excel export and Google OAuth.",
      technologies: ["Next.js", "TypeScript", "Supabase"],
      repository: "https://github.com/Sakthivel-P-cse/CIT_Polling_System",
      visibility: "public" as const,
      featured: false,
    },
  ],

  experience: [
    {
      company: "Brakes India",
      role: "AI/ML Intern",
      dates: "May – July",
      location: "India",
      description:
        "Worked on AI-driven software applications focused on process automation and data-driven operations.",
    },
    {
      company: "Allgigi Tech",
      role: "Software Developer & AI/ML Intern",
      dates: "July – August",
      location: "India",
      description:
        "Worked on AI agent-based management systems for automating business processes, data handling and decision support.",
    },
  ],

  certifications: [
    { issuer: "IBM", title: "Machine Learning Developer" },
    { issuer: "Google", title: "Data Analytics" },
    { issuer: "IBM", title: "Generative AI Engineering" },
  ],

  achievements: {
    leetcode: {
      problemsSolved: "500+",
      maxRating: 1650,
      profileUrl: null as string | null,
    },
    hackathons: {
      wins: 1,
      runnerUps: 2,
    },
  },

  bootSequence: [
    "> initializing sakthivel.portfolio",
    "> loading distributed-systems...",
    "> loading backend-infrastructure...",
    "> loading observability...",
    "> loading ai-infrastructure...",
    "> connecting projects...",
    "> system ready.",
  ],

  cv: {
    path: "/cv/resume.pdf",
    filename: "Sakthivel_P_Resume.pdf",
  },

  seo: {
    title: "Sakthivel P — Distributed Systems & Backend Engineer",
    description:
      "Portfolio of Sakthivel P, a Computer Science Engineering student building distributed systems, backend infrastructure, observability platforms and AI engineering systems.",
    keywords:
      "sakthivel,distributed systems,backend infrastructure,observability,AI engineering,go,kubernetes,raft",
    author: "Sakthivel P",
  },

  status: "Engineering Distributed Systems, Backend Infrastructure & AI Platforms.",
};

export type Project = (typeof portfolio.projects)[number];
export type Experience = (typeof portfolio.experience)[number];
export type SkillCategory = (typeof portfolio.skills)[number];

export const featuredProjects = portfolio.projects.filter((p) => p.featured);
export const moreProjects = portfolio.projects.filter((p) => !p.featured);

export const connectLinks = [
  { id: "github", label: "GitHub", href: portfolio.social.github, external: true },
  { id: "linkedin", label: "LinkedIn", href: portfolio.social.linkedin, external: true },
  { id: "email", label: "Email", href: portfolio.social.email, external: true },
  { id: "phone", label: "Phone", href: portfolio.social.phone, external: true },
  { id: "cv", label: "CV", href: "/cv", external: false },
];

export const publicRepoLinks = portfolio.projects
  .filter((p) => p.visibility === "public")
  .map((p) => ({
    id: p.id,
    label: p.name,
    href: p.repository,
  }));
