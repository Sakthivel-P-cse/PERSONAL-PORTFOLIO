'use client';

import { motion } from 'framer-motion';
import { ProjectShowcase } from '@/components/ui/project-showcase';
import { staggerContainer, fadeInScale } from '@/lib/motion';

export default function ProjectsPage() {
	return (
		<div className="py-16 md:py-24 flex justify-center">
			<div className="container flex flex-col items-center w-full">
				<motion.div
					variants={staggerContainer()}
					initial="hidden"
					animate="show"
					className="w-full"
				>
					<motion.div
						variants={fadeInScale(0.2)}
						className="text-center mb-12"
					>
						<h1 className="text-4xl font-bold mb-4">Projects</h1>
						<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
							A showcase of my projects, demonstrating practical application
							of skills and innovative problem-solving.
						</p>
					</motion.div>

					<motion.div variants={fadeInScale(0.3)}>
						<ProjectShowcase />
					</motion.div>
				</motion.div>
			</div>
		</div>
	);
}