import Link from "next/link";
import { connectLinks, publicRepoLinks } from "@/data/portfolio";
import PhoneCard from "@/components/PhoneCard";

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
      </header>

      <div className="space-y-16">
        <section>
          <div className="mb-6 space-y-1">
            <div className="text-text-dim">sakthi@now:~$</div>
            <div className="text-text">ls ~/links/repos</div>
            <div className="text-text-faint pt-1">{publicRepoLinks.length} drops · all live</div>
          </div>

          <div className="space-y-4">
            {publicRepoLinks.map((res, i) => (
              <a 
                key={res.id}
                href={res.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block border border-rule hover:border-cyan bg-bg hover:bg-rule-soft transition-colors p-4 relative overflow-hidden"
              >
                <div className="flex items-start gap-4">
                  <div className="text-text-faint group-hover:text-cyan transition-colors font-mono mt-1 w-6 text-center">
                    {i % 2 === 0 ? "</>" : "◆"}
                  </div>
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
            ))}
          </div>
        </section>

        <section>
          <div className="mb-6 space-y-1">
            <div className="text-text-dim">sakthi@now:~$</div>
            <div className="text-text">cat ~/.connect</div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {connectLinks.filter(l => l.external && l.id !== "phone").map(link => (
              <a key={link.id} href={link.href} target="_blank" rel="noopener noreferrer" className="border border-rule p-4 hover:border-cyan hover:bg-rule-soft transition-colors flex justify-between items-center group">
                <span className="text-text group-hover:text-cyan">{link.label.toLowerCase()}</span>
                <span className="text-text-faint group-hover:text-cyan">▸</span>
              </a>
            ))}

            <PhoneCard />

            <Link href="/cv" className="sm:col-span-2 border border-rule p-4 hover:border-cyan hover:bg-rule-soft transition-colors flex justify-between items-center group">
              <div className="flex items-center gap-2 text-text group-hover:text-cyan">
                <span>→</span>
                <span>man sakthi (cv)</span>
              </div>
              <span className="text-text-faint group-hover:text-cyan">●</span>
            </Link>
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
          {connectLinks.length + publicRepoLinks.length} drops · 100%
        </div>
      </footer>
    </div>
  );
}
