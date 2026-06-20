'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, FileDown, Terminal } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { fadeIn, staggerContainer } from '@/lib/motion';

export function HeroSection() {
	return (
		<section className="relative overflow-hidden w-full min-h-screen flex flex-col items-center justify-center">
			{/* Content */}
			<div className="container relative z-10 px-4 flex flex-col items-center justify-center text-center">
				<motion.div
					variants={staggerContainer()}
					initial="hidden"
					animate="show"
					className="max-w-4xl mx-auto flex flex-col items-center"
				>
					<motion.div
						variants={fadeIn('up', 0.1)}
						className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full border border-primary/30 bg-black/40 backdrop-blur-md text-sm font-medium text-primary shadow-[0_0_15px_rgba(var(--primary-rgb),0.3)]"
					>
						<Terminal className="w-4 h-4" />
						<span>SYSTEM.ONLINE // CS ENGINEER</span>
					</motion.div>

					<motion.h1
						variants={fadeIn('up', 0.3)}
						className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter uppercase leading-[0.9] mb-6"
					>
						<span className="block text-transparent bg-clip-text bg-gradient-to-br from-white via-neutral-400 to-neutral-800 drop-shadow-sm">
							SAKTHIVEL
						</span>
						<span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent animate-pulse-slow">
							PORTFOLIO
						</span>
					</motion.h1>

					<motion.p
						variants={fadeIn('up', 0.5)}
						className="mt-6 text-lg md:text-2xl text-muted-foreground/80 max-w-2xl font-mono tracking-wide"
					>
						Engineering intelligent systems. Building digital infrastructure. Designing tomorrow's solutions today.
					</motion.p>

					<motion.div
						variants={fadeIn('up', 0.7)}
						className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center"
					>
						<Button 
							size="lg" 
							className="h-14 px-8 text-lg font-bold uppercase tracking-wider rounded-none bg-primary text-black hover:bg-white transition-all duration-300 shadow-[0_0_30px_rgba(var(--primary-rgb),0.5)] hover:shadow-[0_0_50px_rgba(255,255,255,0.8)] border border-primary"
							asChild
						>
							<Link href="/projects">
								Initialize Projects <ArrowRight className="ml-2 h-5 w-5" />
							</Link>
						</Button>
						<Button 
							size="lg" 
							variant="outline" 
							className="h-14 px-8 text-lg font-bold uppercase tracking-wider rounded-none border-secondary text-secondary hover:bg-secondary/10 hover:text-white transition-all duration-300 backdrop-blur-sm"
							asChild
						>
							<Link href="#" download>
								Extract Data <FileDown className="ml-2 h-5 w-5" />
							</Link>
						</Button>
					</motion.div>
				</motion.div>
			</div>

			{/* Decorative scanline effect */}
			<div className="absolute inset-0 z-20 pointer-events-none bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] opacity-20" />
			
			{/* Bottom gradient fade out */}
			<div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black via-black/80 to-transparent z-10"></div>
		</section>
	);
}