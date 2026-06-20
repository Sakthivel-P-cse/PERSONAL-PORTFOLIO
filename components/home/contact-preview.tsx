'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Terminal } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { fadeIn } from '@/lib/motion';

export function ContactPreview() {
	const [formState, setFormState] = useState({
		name: '',
		email: '',
		message: '',
	});
	const [focused, setFocused] = useState<string | null>(null);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setFormState({
			...formState,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		alert('Message Protocol Initiated. (Demo Mode)');
		setFormState({ name: '', email: '', message: '' });
	};

	return (
		<section className="py-24 md:py-32 relative z-10 w-full">
			<div className="container px-4">
				<div className="flex flex-col items-center mb-16 text-center">
					<motion.div
						initial={{ opacity: 0, y: -20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="inline-flex items-center space-x-2 px-4 py-2 rounded-none border border-accent/30 bg-accent/5 mb-4"
					>
						<Terminal className="w-4 h-4 text-accent" />
						<span className="text-xs font-bold uppercase tracking-widest text-accent">COMM_LINK</span>
					</motion.div>
					<h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-accent to-white">
						Initialize Contact
					</h2>
				</div>

				<motion.div
					variants={fadeIn('up', 0.3)}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true }}
					className="max-w-xl mx-auto relative group"
				>
					{/* Glowing border effect */}
					<div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-secondary to-accent rounded-none blur opacity-20 group-hover:opacity-40 transition duration-1000" />
					
					<div className="relative bg-black/80 backdrop-blur-xl border border-white/10 p-8 md:p-12">
						<form onSubmit={handleSubmit} className="space-y-8">
							<div className="space-y-6">
								{/* Name Input */}
								<div className="relative">
									<label className={`absolute left-0 -top-5 text-xs font-mono tracking-widest uppercase transition-colors ${focused === 'name' ? 'text-primary' : 'text-muted-foreground'}`}>
										Entity Name
									</label>
									<input
										name="name"
										placeholder="ENTER NAME..."
										value={formState.name}
										onChange={handleChange}
										onFocus={() => setFocused('name')}
										onBlur={() => setFocused(null)}
										required
										className="w-full bg-transparent border-b-2 border-white/20 focus:border-primary text-white placeholder:text-white/20 px-0 py-3 outline-none transition-colors font-mono"
									/>
								</div>

								{/* Email Input */}
								<div className="relative mt-8">
									<label className={`absolute left-0 -top-5 text-xs font-mono tracking-widest uppercase transition-colors ${focused === 'email' ? 'text-secondary' : 'text-muted-foreground'}`}>
										Transmission Vector
									</label>
									<input
										name="email"
										type="email"
										placeholder="ENTER EMAIL..."
										value={formState.email}
										onChange={handleChange}
										onFocus={() => setFocused('email')}
										onBlur={() => setFocused(null)}
										required
										className="w-full bg-transparent border-b-2 border-white/20 focus:border-secondary text-white placeholder:text-white/20 px-0 py-3 outline-none transition-colors font-mono"
									/>
								</div>

								{/* Message Input */}
								<div className="relative mt-8">
									<label className={`absolute left-0 -top-5 text-xs font-mono tracking-widest uppercase transition-colors ${focused === 'message' ? 'text-accent' : 'text-muted-foreground'}`}>
										Payload Data
									</label>
									<textarea
										name="message"
										placeholder="ENTER MESSAGE..."
										value={formState.message}
										onChange={handleChange}
										onFocus={() => setFocused('message')}
										onBlur={() => setFocused(null)}
										required
										className="w-full bg-transparent border-b-2 border-white/20 focus:border-accent text-white placeholder:text-white/20 px-0 py-3 outline-none transition-colors font-mono min-h-[120px] resize-none"
									/>
								</div>
							</div>

							<Button 
								type="submit" 
								className="w-full h-14 bg-white hover:bg-transparent text-black hover:text-white border-2 border-white font-bold uppercase tracking-[0.2em] rounded-none transition-all duration-300 mt-8"
							>
								Transmit Payload <Send className="ml-3 h-5 w-5" />
							</Button>
						</form>
					</div>
				</motion.div>
			</div>
		</section>
	);
}