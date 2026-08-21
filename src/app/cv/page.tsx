import Link from "next/link";
import { portfolio } from "@/data/portfolio";
import { advancedTechStack, type AdvancedTechStackVisual } from "@/data/cv";
import GlitchText from "@/components/GlitchText";

export const metadata = {
  title: "man sakthi(1) — sakthivel p",
};

function TechStackGlyph({ visual }: { visual: AdvancedTechStackVisual }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 1.4,
  };

  return (
    <svg viewBox="0 0 52 32" className="h-8 w-[52px]" aria-hidden="true">
      <path d="M1 30.5H51" className="text-text-trace" stroke="currentColor" strokeWidth="0.5" />
      {visual === "consensus" && (
        <>
          <path d="M8 16h36M15 9l-7 7 7 7M37 9l7 7-7 7" {...common} />
          <circle cx="15" cy="16" r="3" {...common} />
          <circle cx="26" cy="16" r="3" {...common} />
          <circle cx="37" cy="16" r="3" {...common} />
        </>
      )}
      {visual === "workflow" && (
        <>
          <path d="M8 8h9v8h9v8h9v-8h9" {...common} />
          <path d="m40 13 4 3-4 3" {...common} />
          <circle cx="8" cy="8" r="2" {...common} />
          <circle cx="26" cy="24" r="2" {...common} />
        </>
      )}
      {visual === "observability" && (
        <>
          <path d="M6 24V18M14 24V11M22 24V15M30 24V7M38 24V13M46 24V5" {...common} />
          <path d="M5 27h42" {...common} />
          <path d="m6 8 8 4 8-3 8 5 8-9 8 3" {...common} />
        </>
      )}
      {visual === "security" && (
        <>
          <path d="M26 5 42 11v8c0 7-6 10-16 13C16 29 10 26 10 19v-8L26 5Z" {...common} />
          <path d="m18 19 5 5 11-12" {...common} />
        </>
      )}
      {visual === "storage" && (
        <>
          <ellipse cx="26" cy="8" rx="15" ry="4" {...common} />
          <path d="M11 8v8c0 2 7 4 15 4s15-2 15-4V8M11 16v8c0 2 7 4 15 4s15-2 15-4v-8" {...common} />
        </>
      )}
      {visual === "sandbox" && (
        <>
          <rect x="13" y="7" width="26" height="19" rx="2" {...common} />
          <path d="M19 12h14M19 17h14M19 22h8M8 12v-4h4M44 12v-4h-4M8 20v4h4M44 20v4h-4" {...common} />
        </>
      )}
      {visual === "network" && (
        <>
          <path d="M12 16h28M26 7v18M12 16l14-9 14 9-14 9-14-9Z" {...common} />
          <circle cx="12" cy="16" r="3" {...common} />
          <circle cx="26" cy="7" r="3" {...common} />
          <circle cx="40" cy="16" r="3" {...common} />
          <circle cx="26" cy="25" r="3" {...common} />
        </>
      )}
      {visual === "retrieval" && (
        <>
          <circle cx="24" cy="15" r="9" {...common} />
          <path d="m31 22 8 6M20 15h8M24 11v8" {...common} />
          <circle cx="24" cy="15" r="2" {...common} />
          <path d="M10 8h-4v4M42 8h4v4M10 24H6v-4M42 24h4v-4" {...common} />
        </>
      )}
      {visual === "cloud" && (
        <>
          <path d="M16 24h22a7 7 0 0 0 1-14 10 10 0 0 0-19-2 8 8 0 0 0-4 16Z" {...common} />
          <path d="M21 25v4M27 25v4M33 25v4" {...common} />
        </>
      )}
      {visual === "resilience" && (
        <>
          <path d="M8 19a18 18 0 0 1 31-10" {...common} />
          <path d="m35 5 5 4-6 2M44 13a18 18 0 0 1-31 10" {...common} />
          <path d="m17 27-5-4 6-2" {...common} />
          <path d="M26 11v10M21 16h10" {...common} />
        </>
      )}
      {visual === "delivery" && (
        <>
          <path d="M8 16h28" {...common} />
          <path d="m31 9 7 7-7 7" {...common} />
          <path d="M8 10v12M15 10v12M22 10v12" {...common} />
          <circle cx="8" cy="16" r="2" {...common} />
        </>
      )}
    </svg>
  );
}

export default function CVPage() {
  return (
    <div className="min-h-screen text-text py-16 px-4 md:px-8 max-w-4xl mx-auto font-ibm-plex text-sm md:text-base">
      <header className="mb-12 border-b border-rule pb-4">
        <div className="flex justify-between items-center mb-4">
          <div className="text-text-faint">
            [ <span className="text-text">man 1 sakthi</span> ]
          </div>
          <Link href="/" className="text-text-dim hover:text-cyan transition-colors">
            cd ~
          </Link>
        </div>
        <div className="flex justify-between text-text-dim">
          <span>:set number</span>
          <span>2026-08-17 · SAKTHI</span>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_250px] gap-12">
        <div className="order-2 md:order-1 space-y-16">
          <section id="name" className="space-y-4">
            <div className="flex items-baseline gap-4">
              <span className="text-text-faint text-xs">001</span>
              <h2 className="text-xl font-bold">NAME</h2>
            </div>
            <div className="pl-8 text-text-dim flex items-baseline gap-x-2 flex-wrap">
              <GlitchText
                intensity="low"
                initialScramble
                initialScrambleDuration={700}
                className="name-mark screen-tear"
              >
                Sakthi
              </GlitchText>
              <span>— {portfolio.headline.toLowerCase()}</span>
            </div>
          </section>

          <section id="description" className="space-y-4">
            <div className="flex items-baseline gap-4">
              <span className="text-text-faint text-xs">002</span>
              <h2 className="text-xl font-bold">DESCRIPTION</h2>
            </div>
            <p className="pl-8 text-text-dim leading-relaxed">
              {portfolio.seo.description.toLowerCase()} ships fast, writes clean architecture, and scales infrastructure.
            </p>
          </section>

          <section id="stack" className="space-y-6">
            <div className="flex items-baseline gap-4">
              <span className="text-text-faint text-xs">003</span>
              <h2 className="text-xl font-bold">TECH STACK</h2>
            </div>
            <div className="pl-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {advancedTechStack.map((card, index) => (
                <article
                  key={card.title}
                  className="stack-card group relative overflow-hidden border border-rule bg-rule-soft p-4 transition-all duration-300 hover:-translate-y-1 hover:border-cyan hover:shadow-[0_0_24px_rgba(0,255,213,0.08)]"
                >
                  <div className="relative z-10 mb-6 flex items-start justify-between">
                    <div className="stack-card-glyph text-text-dim transition-colors duration-300 group-hover:text-cyan">
                      <TechStackGlyph visual={card.visual} />
                    </div>
                    <span className="text-[9px] tracking-[0.2em] text-text-faint">
                      /{String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="relative z-10 text-base text-text transition-colors duration-300 group-hover:text-cyan">
                    {card.title}
                  </h3>
                  <p className="relative z-10 mt-2 text-xs leading-relaxed text-text-dim">
                    {card.concepts}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section id="education" className="space-y-4">
            <div className="flex items-baseline gap-4">
              <span className="text-text-faint text-xs">004</span>
              <h2 className="text-xl font-bold">EDUCATION</h2>
            </div>
            <div className="pl-8 space-y-2">
              <div className="flex justify-between">
                <span className="font-semibold text-text">{portfolio.education.institution}</span>
                <span className="text-text-dim">{portfolio.education.dates.toLowerCase()}</span>
              </div>
              <div className="flex justify-between text-text-dim">
                <span>{portfolio.education.degree}, cgpa: {portfolio.education.cgpa}</span>
                <span>{portfolio.education.location}</span>
              </div>
            </div>
          </section>

          <section id="experience" className="space-y-6">
            <div className="flex items-baseline gap-4">
              <span className="text-text-faint text-xs">005</span>
              <h2 className="text-xl font-bold">EXPERIENCE</h2>
            </div>
            <div className="pl-8 space-y-6">
              {portfolio.experience.map((exp, i) => (
                <div key={i} className="group cursor-pointer">
                  <div className="flex justify-between items-center text-text hover:text-cyan transition-colors">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">{exp.role}</span>
                    </div>
                    <span className="text-text-dim">{exp.dates.toLowerCase()} [+]</span>
                  </div>
                  <div className="flex justify-between text-text-dim mt-1">
                    <span>{exp.company}</span>
                    <span>{exp.location.toLowerCase()}</span>
                  </div>
                  <p className="text-text-dim text-xs mt-2 opacity-80">{exp.description.toLowerCase()}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="projects" className="space-y-4">
            <div className="flex items-baseline gap-4">
              <span className="text-text-faint text-xs">006</span>
              <h2 className="text-xl font-bold">PROJECTS</h2>
            </div>
            <div className="pl-8 space-y-6">
              {portfolio.projects.filter(p => p.featured).map((project, i) => (
                <div key={i}>
                  <div className="flex justify-between group">
                    <a href={project.repository} target="_blank" rel="noopener noreferrer" className="text-text hover:text-cyan transition-colors underline decoration-rule underline-offset-4">
                      {project.name}
                    </a>
                  </div>
                  <div className="text-text-dim mt-1">{project.description.toLowerCase()}</div>
                  <div className="text-text-faint text-xs mt-2 flex flex-wrap gap-2">
                    {project.technologies.map((t, idx) => (
                      <span key={idx}>[{t.toLowerCase()}]</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="see-also" className="space-y-4">
            <div className="flex items-baseline gap-4">
              <span className="text-text-faint text-xs">007</span>
              <h2 className="text-xl font-bold">SEE ALSO</h2>
            </div>
            <div className="pl-8 flex flex-wrap gap-4 text-text-dim">
              <Link href="/links" className="hover:text-cyan transition-colors">links</Link>
              <a href={`mailto:${portfolio.social.email}`} className="hover:text-cyan transition-colors">{portfolio.social.email}</a>
              <a href={portfolio.social.github} className="hover:text-cyan transition-colors">github</a>
              <a href={portfolio.social.linkedin} className="hover:text-cyan transition-colors">linkedin</a>
            </div>
            <div className="pl-8 pt-4">
              <Link href="/" className="text-text hover:text-cyan transition-colors">
                ← back to /
              </Link>
            </div>
          </section>
          
          <div className="text-center text-text-faint pt-8">(END)</div>
        </div>

        <div className="order-1 md:order-2">
          <div className="sticky top-8 space-y-8">
            <nav className="space-y-2 text-sm">
              <div className="text-text-faint mb-4 uppercase text-xs tracking-wider">table of contents</div>
              <a href="#name" className="block text-text hover:text-cyan transition-colors">001 NAME</a>
              <a href="#description" className="block text-text-dim hover:text-cyan transition-colors">002 DESCRIPTION</a>
              <a href="#stack" className="block text-text-dim hover:text-cyan transition-colors">003 TECH STACK</a>
              <a href="#education" className="block text-text-dim hover:text-cyan transition-colors">004 EDUCATION</a>
              <a href="#experience" className="block text-text-dim hover:text-cyan transition-colors">005 EXPERIENCE</a>
              <a href="#projects" className="block text-text-dim hover:text-cyan transition-colors">006 PROJECTS</a>
              <a href="#see-also" className="block text-text-dim hover:text-cyan transition-colors">007 SEE ALSO</a>
            </nav>
            
            <div className="space-y-4 text-xs font-mono bg-rule-soft p-4 rounded border border-rule">
              <div className="text-text-faint mb-2">STATUS</div>
              
              <div className="grid grid-cols-[50px_1fr] gap-2">
                <span className="text-text-faint">loc</span>
                <span className="text-text-dim">{portfolio.location.toLowerCase()}</span>
              </div>
              
              <div className="grid grid-cols-[50px_1fr] gap-2">
                <span className="text-text-faint">year</span>
                <span className="text-text-dim">3rd year</span>
              </div>

              <div className="grid grid-cols-[50px_1fr] gap-2">
                <span className="text-text-faint">mail</span>
                <a href={`mailto:${portfolio.social.email}`} className="text-text hover:text-cyan transition-colors truncate">
                  {portfolio.social.email}
                </a>
              </div>

              <div className="grid grid-cols-[50px_1fr] gap-2">
                <span className="text-text-faint">git</span>
                <a href={portfolio.social.github} className="text-text hover:text-cyan transition-colors truncate">
                  @sakthivel
                </a>
              </div>

              <div className="grid grid-cols-[50px_1fr] gap-2">
                <span className="text-text-faint">in</span>
                <a href={portfolio.social.linkedin} className="text-text hover:text-cyan transition-colors truncate">
                  sakthivel-p
                </a>
              </div>
            </div>
            
            <div className="text-text-faint text-xs italic">
              $ click a section to jump
            </div>
          </div>
        </div>
      </div>

      <footer className="mt-24 border-t border-rule pt-4 flex justify-between text-text-faint text-xs">
        <div>
          sakthi@home : /cv $ █
        </div>
        <div className="hidden sm:block">-- MAN --</div>
        <div>
          projects · 100%
        </div>
      </footer>
    </div>
  );
}
