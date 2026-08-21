import Link from "next/link";
import { portfolio } from "@/data/portfolio";
import GlitchText from "@/components/GlitchText";

export const metadata = {
  title: "man sakthi(1) — sakthivel p",
};

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

          <section id="education" className="space-y-4">
            <div className="flex items-baseline gap-4">
              <span className="text-text-faint text-xs">003</span>
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
              <span className="text-text-faint text-xs">004</span>
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
              <span className="text-text-faint text-xs">005</span>
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
              <span className="text-text-faint text-xs">006</span>
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
              <a href="#education" className="block text-text-dim hover:text-cyan transition-colors">003 EDUCATION</a>
              <a href="#experience" className="block text-text-dim hover:text-cyan transition-colors">004 EXPERIENCE</a>
              <a href="#projects" className="block text-text-dim hover:text-cyan transition-colors">005 PROJECTS</a>
              <a href="#see-also" className="block text-text-dim hover:text-cyan transition-colors">006 SEE ALSO</a>
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
