import Link from "next/link";
import { connectLinks, publicRepoLinks } from "@/data/portfolio";
import ContactForm from "@/components/ContactForm";
import EmailCard from "@/components/EmailCard";
import PhoneCard from "@/components/PhoneCard";
import LinkIcon from "@/components/links/LinkIcon";
import AnimatedCard from "@/components/links/AnimatedCard";
import ConnectingLine from "@/components/links/ConnectingLine";

export const metadata = {
  title: "ssh sakthi@now — links / sakthivel p",
};

export default function LinksPage() {
  return (
    <div className="min-h-screen text-text py-16 px-4 md:px-8 max-w-4xl mx-auto font-ibm-plex text-sm md:text-base">
      <header className="mb-12 border-b border-rule pb-4">
        <div className="flex justify-between items-center mb-4">
          <div className="text-text-faint">
            [ <span className="text-text">ssh sakthi@now</span> ]
          </div>
          <Link href="/" className="text-text-dim hover:text-cyan transition-colors">
            cd ~
          </Link>
        </div>
        <div className="flex justify-between text-text-dim">
          <span className="hidden sm:inline">-- LINKS --</span>
          <span>2026-08-17 · SAKTHI@NOW</span>
        </div>
        <ConnectingLine />
      </header>

      <div className="space-y-16">
        <section>
          <div className="mb-6 space-y-1">
            <div className="text-text-dim">sakthi@now:~$</div>
            <div className="text-text">ls ~/links/repos</div>
            <div className="text-text-faint pt-1">{publicRepoLinks.length} drops · all live</div>
          </div>

          <div className="space-y-4">
            <AnimatedCard index={0}><a
              href="/resume.pdf"
              download="Resume.pdf"
              aria-label="Download resume PDF"
              className="group block border border-rule hover:border-cyan bg-bg hover:bg-rule-soft transition-colors p-4 relative overflow-hidden"
            >
              <div className="flex items-start gap-4">
                <span className="text-text-dim group-hover:text-cyan"><LinkIcon name="file" /></span>
                <div className="flex-1 font-semibold text-text group-hover:text-cyan transition-colors">Download Resume</div>
                <div aria-hidden="true" className="text-text-faint group-hover:text-cyan transition-colors text-xs self-center">download ↓</div>
              </div>
            </a></AnimatedCard>
            {publicRepoLinks.map((res, index) => (
              <AnimatedCard key={res.id} index={index + 1}>
              <a 
                href={res.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block border border-rule hover:border-cyan bg-bg hover:bg-rule-soft transition-colors p-4 relative overflow-hidden"
              >
                <div className="flex items-start gap-4">
                  <span className="text-text-dim group-hover:text-cyan"><LinkIcon name="github" /></span>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 mb-1">
                      <span className="bg-rule-soft text-text-dim text-xs px-2 py-0.5 rounded">
                        source
                      </span>
                      <span className="font-semibold text-text group-hover:text-cyan transition-colors">
                        {res.label.toLowerCase()}
                      </span>
                    </div>
                  </div>
                  <div className="text-text-faint group-hover:text-cyan transition-colors text-xs self-center">
                    open ↗
                  </div>
                </div>
              </a>
              </AnimatedCard>
            ))}
          </div>
        </section>

        <section>
          <div className="mb-6 space-y-1">
            <div className="text-text-dim">sakthi@now:~$</div>
            <div className="text-text">cat ~/.connect</div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {connectLinks.filter(l => l.external && l.id !== "email" && l.id !== "phone").map((link, index) => (
              <AnimatedCard key={link.id} index={index}><a href={link.href} target="_blank" rel="noopener noreferrer" className="border border-rule p-4 hover:border-cyan hover:bg-rule-soft transition-colors flex justify-between items-center group">
                <span className="flex items-center gap-3 text-text group-hover:text-cyan"><LinkIcon name={link.id === "linkedin" ? "linkedin" : "github"} />{link.label.toLowerCase()}</span>
                <span className="text-text-faint group-hover:text-cyan">▸</span>
              </a></AnimatedCard>
            ))}

            <AnimatedCard index={2} className="relative [&>div>button]:pl-12"><span className="pointer-events-none absolute left-4 top-4 text-text-dim"><LinkIcon name="mail" /></span><EmailCard /></AnimatedCard>
            <AnimatedCard index={3} className="relative [&>div>button]:pl-12"><span className="pointer-events-none absolute left-4 top-4 text-text-dim"><LinkIcon name="phone" /></span><PhoneCard /></AnimatedCard>

            <AnimatedCard index={4} className="sm:col-span-2"><Link href="/cv" className="border border-rule p-4 hover:border-cyan hover:bg-rule-soft transition-colors flex justify-between items-center group">
              <div className="flex items-center gap-2 text-text group-hover:text-cyan">
                <LinkIcon name="terminal" />
                <span>man sakthi (cv)</span>
              </div>
              <span className="text-text-faint group-hover:text-cyan">●</span>
            </Link></AnimatedCard>
          </div>
        </section>

        <section aria-labelledby="contact-heading">
          <div className="mb-6 space-y-1">
            <div className="text-text-dim">sakthi@now:~$</div>
            <h2 id="contact-heading" className="text-text">
              ./contact --send
            </h2>
            <div className="pt-1 text-text-faint">
              send a message · replies go straight to my inbox
            </div>
          </div>

          <div className="border border-rule bg-rule-soft p-5 md:p-6">
            <ContactForm />
          </div>
        </section>

        <div className="pt-8 pb-4">
          <Link href="/" className="text-text hover:text-cyan transition-colors">
            ← back to /
          </Link>
        </div>
      </div>

      <footer className="mt-16 border-t border-rule pt-4 flex justify-between text-text-faint text-xs">
        <div>
          sakthi@now : ~/links $ █
        </div>
        <div className="hidden sm:block">-- CONNECTED --</div>
        <div>
          {connectLinks.length + publicRepoLinks.length + 1} drops · 100%
        </div>
      </footer>
    </div>
  );
}
