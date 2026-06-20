'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Cpu, Database, Network, Target } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { fadeIn } from '@/lib/motion';

export function AboutPreview() {
	return (
		<section className="py-24 md:py-32 relative z-10 w-full">
			<div className="container px-4">
				<div className="flex flex-col items-center mb-16">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="inline-flex items-center justify-center space-x-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/30 text-secondary mb-4"
					>
						<span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
						<span className="text-xs font-bold uppercase tracking-widest">ABOUT_ENTITY</span>
					</motion.div>
					<h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-500">
						Architecture
					</h2>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mt-10">
					{/* Image Section */}
					<motion.div
						variants={fadeIn('right', 0.2)}
						initial="hidden"
						whileInView="show"
						viewport={{ once: true }}
						className="lg:col-span-5 relative"
					>
						<div className="relative h-[500px] w-full rounded-2xl overflow-hidden group border border-primary/20 bg-black/50 backdrop-blur-sm p-2">
							<div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-secondary/20 z-10 mix-blend-overlay group-hover:opacity-100 transition-opacity duration-700 opacity-50" />
							<div className="relative h-full w-full rounded-xl overflow-hidden">
								<Image
									src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
									alt="Cyber Security / Tech Abstract"
									fill
									className="object-cover filter grayscale contrast-125 brightness-75 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
									sizes="(max-width: 768px) 100vw, 50vw"
								/>
							</div>
							
							{/* Tech decorative corners */}
							<div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary/50 z-20 m-4" />
							<div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-secondary/50 z-20 m-4" />
						</div>
					</motion.div>

					{/* Content Section */}
					<motion.div
						variants={fadeIn('left', 0.4)}
						initial="hidden"
						whileInView="show"
						viewport={{ once: true }}
						className="lg:col-span-7 flex flex-col justify-center"
					>
						<h3 className="text-3xl font-bold mb-6 tracking-tight text-white/90">
							Engineering the future of <span className="text-primary italic">scalable systems</span>.
						</h3>
						<p className="text-lg text-muted-foreground/80 mb-8 font-light leading-relaxed">
							I am a motivated Computer Science student at Chennai Institute of Technology, seeking a Summer 2026 software development internship. Skilled in full-stack web development, database management, machine learning, and IoT integration.
						</p>

						<div className="grid grid-cols-2 gap-4 mb-10">
							{/* Stats Cards */}
							{[
								{ title: 'Education', value: 'BE CS', icon: <Cpu className="w-5 h-5" /> },
								{ title: 'Experience', value: 'Internships', icon: <Network className="w-5 h-5" /> },
								{ title: 'Projects', value: '6+ Built', icon: <Database className="w-5 h-5" /> },
								{ title: 'Awards', value: 'Hackathons', icon: <Target className="w-5 h-5" /> },
							].map((stat, i) => (
								<div 
									key={i} 
									className="group relative p-6 bg-black/40 backdrop-blur-md border border-white/5 hover:border-primary/50 rounded-xl transition-all duration-300 hover:shadow-[0_0_20px_rgba(var(--primary-rgb),0.15)]"
								>
									<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none" />
									<div className="text-primary/70 mb-3 group-hover:text-primary transition-colors">
										{stat.icon}
									</div>
									<h4 className="font-bold text-white mb-1">{stat.title}</h4>
									<p className="text-xs font-mono text-muted-foreground/70 uppercase tracking-wider">{stat.value}</p>
								</div>
							))}
						</div>

						<Button asChild className="self-start group bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-black font-bold uppercase tracking-widest px-8 py-6 rounded-none">
							<Link href="/about">
								Initialize Details
								<ArrowRight className="ml-3 h-5 w-5 transform group-hover:translate-x-2 transition-transform" />
							</Link>
						</Button>
					</motion.div>
				</div>
			</div>
		</section>
	);
}