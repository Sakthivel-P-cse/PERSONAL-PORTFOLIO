"use client";

import { motion, useReducedMotion } from "framer-motion";
import dynamic from "next/dynamic";
import Rot13Text from "@/components/Rot13Text";
import ObfuscatedLink from "@/components/ObfuscatedLink";
import GlitchText from "@/components/GlitchText";
import HeroCursor from "@/components/HeroCursor";
import BootSequence from "@/components/BootSequence";
import HeroNetwork from "@/components/home/HeroNetwork";
import StatusLine from "@/components/home/StatusLine";
import GoalIcon from "@/components/home/GoalIcon";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import { portfolio } from "@/data/portfolio";

const Constellation = dynamic(() => import("@/components/home/Constellation"), { ssr: false });

export default function Home() {
  const reducedMotion = useReducedMotion();

  return (
    <>
      <BootSequence />
      <HeroCursor />
      <section className="relative min-h-screen overflow-hidden terminal-hero flex flex-col justify-center items-center md:block">
        <Constellation />
        <div className="relative z-10 w-[90%] max-w-6xl mx-auto pt-16 pb-16 md:pt-[32vh] md:pb-32">
          <div className="space-y-5 md:space-y-4">
            <div className="hero-title screen-tear">
              <span className="relative inline-block">
                <span className="relative z-10">&gt; sakthi/</span>
              </span>
            </div>
            
            <div className="hero-identity">
              <span className="hero-identity-name">{portfolio.name}</span>
              <span className="hero-identity-meta">
                {portfolio.professions.map((role, i) => (
                  <span key={role}>
                    {i > 0 && <span className="hero-identity-sep"> · </span>}
                    {role}
                  </span>
                ))}
              </span>
            </div>
          </div>
          <HeroNetwork />
          
          <div className="md:hidden hero-quote hero-quote--inline text-right">
            <div className="screen-tear">
            <GlitchText intensity="extreme" randomGlitchInterval={1500} initialScramble initialScrambleDuration={900}>
              Building systems that
            </GlitchText>
            <br />
            <GlitchText intensity="extreme" randomGlitchInterval={1500} initialScramble initialScrambleDuration={900}>
              {"don't fail when you need them."}
            </GlitchText>
            </div>
            <StatusLine />
          </div>
        </div>
        
        <div className="hidden md:block absolute z-10 hero-quote text-right max-w-md" style={{ right: "3rem", bottom: "76px" }}>
          <div className="screen-tear">
          <GlitchText intensity="extreme" randomGlitchInterval={1500} initialScramble initialScrambleDuration={900}>
            Building systems that
          </GlitchText>
          <br />
          <GlitchText intensity="extreme" randomGlitchInterval={1500} initialScramble initialScrambleDuration={900}>
            {"don't fail when you need them."}
          </GlitchText>
          </div>
          <StatusLine />
        </div>
      </section>

      <section id="manifesto" className="relative min-h-screen flex items-center justify-center py-24 md:py-32">
        <div className="relative w-[90%] max-w-4xl mx-auto px-4 md:px-0">
          <svg aria-hidden="true" viewBox="0 0 300 100" className="absolute right-4 top-0 h-12 w-36 text-cyan md:right-0">
            <motion.path
              d="M25 65L90 25L150 60L210 22L275 60M90 25L120 82L210 22"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              initial={reducedMotion ? false : { pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: reducedMotion ? 0 : 1.5 }}
            />
          </svg>
          <motion.h2 
            initial={reducedMotion ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: reducedMotion ? 0 : 0.5 }}
            className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 leading-none text-[#d0d0d0] tracking-tight"
          >
            my goals
          </motion.h2>
          
          <div className="space-y-8 md:space-y-6">
            <div className="flex items-center gap-4"><GoalIcon type="infrastructure" delay={0.1} /><Rot13Text originalText="build scalable infrastructure" delay={0.1} /></div>
            <div className="flex items-center gap-4"><GoalIcon type="resilience" delay={0.3} /><Rot13Text originalText="design fault-tolerant systems" delay={0.3} /></div>
            <div className="flex items-center gap-4"><GoalIcon type="performance" delay={0.4} /><Rot13Text originalText="optimize backend performance" delay={0.4} /></div>
            <div className="flex items-center gap-4"><GoalIcon type="zeroTrust" delay={0.5} /><Rot13Text originalText="ship zero-trust architectures" delay={0.5} /></div>
          </div>
        </div>
      </section>

      <FeaturedProjects />

      <section id="contact" className="relative min-h-screen flex items-center justify-center py-24 md:py-32">
        <div className="w-[90%] max-w-4xl mx-auto px-4 md:px-0">
          <motion.div 
            initial={reducedMotion ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: reducedMotion ? 0 : 0.5 }}
            className="font-ibm-plex space-y-6 text-sm md:text-base text-text"
          >
            <div className="space-y-6 md:space-y-8">
              <div className="flex flex-col sm:flex-row sm:gap-8">
                <span className="w-24 block sm:inline-block mb-1 sm:mb-0 text-text-faint">status</span>
                <span className="text-text">{portfolio.status}</span>
              </div>
              
              <div className="flex flex-col sm:flex-row sm:gap-8 items-start sm:items-center">
                <span className="w-24 block sm:inline-block mb-1 sm:mb-0 text-text-faint">located</span>
                <ObfuscatedLink label={portfolio.location} />
              </div>
              
              <div className="flex flex-col sm:flex-row sm:gap-8 items-start sm:items-center">
                <span className="w-24 block sm:inline-block mb-1 sm:mb-0 text-text-faint">contact</span>
                <ObfuscatedLink
                  href={`mailto:${portfolio.social.email}`}
                  label={portfolio.social.email}
                  external
                  copyOnClick
                />
              </div>
              
              <div className="flex flex-col sm:flex-row sm:gap-8 items-start sm:items-center">
                <span className="w-24 block sm:inline-block mb-1 sm:mb-0 text-text-faint">network</span>
                <div className="flex gap-4 md:gap-6 flex-wrap">
                  <ObfuscatedLink href={portfolio.social.github} label="github" external />
                  <ObfuscatedLink href={portfolio.social.linkedin} label="linkedin" external />
                  <ObfuscatedLink href="/cv" label="cv" />
                  <ObfuscatedLink href="/links" label="links" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
