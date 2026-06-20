'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Github, ExternalLink, Activity } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { projects } from '@/lib/constants';
import { staggerContainer, fadeInScale } from '@/lib/motion';

export function ProjectsPreview() {
	// Only show the first 3 projects in the preview
	const previewProjects = projects.slice(0, 3);

	return (
		<section className="py-24 md:py-32 relative z-10 w-full">
			<div className="container px-4">
				<div className="flex flex-col items-center mb-16 text-center">
					<motion.div
						initial={{ opacity: 0, scale: 0.8 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true }}
						className="inline-flex items-center space-x-2 mb-4"
					>
						<Activity className="text-primary w-6 h-6 animate-pulse" />
						<h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
							System Deployments
						</h2>
						<Activity className="text-primary w-6 h-6 animate-pulse" />
					</motion.div>
					<p className="text-muted-foreground/80 max-w-2xl font-mono text-sm">
						ACTIVE MODULES: {previewProjects.length} // EXPLORE RECENT TECHNICAL DEPLOYMENTS AND INFRASTRUCTURE.
					</p>
				</div>

				<motion.div
					variants={staggerContainer()}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true }}
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10"
				>
					{previewProjects.map((project, index) => (
						<motion.div
							key={index}
							variants={fadeInScale(index * 0.1)}
							className="group relative"
						>
							<div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 rounded-none blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
							<div className="relative flex flex-col h-full bg-black/60 backdrop-blur-md border border-white/10 group-hover:border-primary/50 transition-colors duration-500 rounded-none overflow-hidden">
								{/* Image Container with scanlines */}
								<div className="relative h-56 w-full overflow-hidden border-b border-white/10">
									<div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px] z-10 pointer-events-none opacity-30" />
									<Image
										src={project.image}
										alt={project.title}
										fill
										className="object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 opacity-70 group-hover:opacity-100"
										sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
									/>
									<div className="absolute top-4 right-4 z-20 bg-black/80 backdrop-blur-md px-2 py-1 border border-primary/30 text-[10px] font-mono text-primary uppercase tracking-widest">
										v1.{index}.0
									</div>
								</div>

								{/* Content */}
								<div className="flex-grow p-6 flex flex-col">
									<h3 className="font-bold text-2xl tracking-tight text-white mb-3 group-hover:text-primary transition-colors">
										{project.title}
									</h3>
									<p className="text-muted-foreground/80 font-light text-sm mb-6 flex-grow leading-relaxed">
										{project.description}
									</p>
									<div className="flex flex-wrap gap-2 mb-6">
										{project.tags.map((tag, tagIndex) => (
											<span 
												key={tagIndex} 
												className="px-2 py-1 text-[10px] font-mono uppercase tracking-wider text-secondary border border-secondary/30 bg-secondary/5 rounded-none"
											>
												{tag}
											</span>
										))}
									</div>
									
									<div className="flex gap-4 pt-4 border-t border-white/5">
										{project.link && (
											<Button size="sm" className="bg-transparent border border-white/20 hover:border-primary text-white hover:text-primary hover:bg-primary/10 rounded-none w-full uppercase tracking-widest font-bold text-xs h-10 transition-all" asChild>
												<Link href={project.link} target="_blank" rel="noreferrer">
													<ExternalLink className="h-4 w-4 mr-2" />
													Execute
												</Link>
											</Button>
										)}
										{project.repo && (
											<Button size="sm" className="bg-transparent border border-white/20 hover:border-secondary text-white hover:text-secondary hover:bg-secondary/10 rounded-none w-full uppercase tracking-widest font-bold text-xs h-10 transition-all" asChild>
												<Link href={project.repo} target="_blank" rel="noreferrer">
													<Github className="h-4 w-4 mr-2" />
													Source
												</Link>
											</Button>
										)}
									</div>
								</div>
							</div>
						</motion.div>
					))}
				</motion.div>

				<div className="flex justify-center mt-16">
					<Button asChild className="group bg-transparent border-2 border-white/20 hover:border-white text-white hover:bg-white hover:text-black font-bold uppercase tracking-widest px-8 py-6 rounded-none transition-all duration-300">
						<Link href="/projects">
							Access Full Directory <ArrowRight className="ml-3 h-5 w-5 transform group-hover:translate-x-2 transition-transform" />
						</Link>
					</Button>
				</div>
			</div>
		</section>
	);
}