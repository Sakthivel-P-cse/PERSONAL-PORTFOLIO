export const siteConfig = {
	name: 'SAKTHIVEL P',
	description:
		'Motivated Computer Science student at Chennai Institute of Technology, seeking a Summer 2026 software development internship.',
	mainNav: [
		{
			title: 'Home',
			href: '/',
		},
		{
			title: 'About',
			href: '/about',
		},
		{
			title: 'Education',
			href: '/education',
		},
		{
			title: 'Skills',
			href: '/skills',
		},
		{
			title: 'Experience',
			href: '/experience',
		},
		{
			title: 'Projects',
			href: '/projects',
		},
		{
			title: 'Certificates',
			href: '/certificates',
		},

		{
			title: 'Contact',
			href: '/contact',
		},
	],
	links: {
		github: 'https://github.com/Sakthivel-P-cse',
		linkedin: 'https://linkedin.com/in/sakthivel-p-00152a317/',
		twitter: 'https://twitter.com',
		facebook: 'https://facebook.com',
		instagram: 'https://instagram.com',
		whatsapp: 'https://wa.me/919629627360',
		email: 'mailto:prsakthivel51@gmail.com',
		phone: 'tel:+919629627360',
	},
};

export type Experience = {
	title: string;
	company: string;
	location: string;
	startDate: string;
	endDate: string;
	description: string[];
	technologies: string[];
};

export const experiences: Experience[] = [
	{
		title: 'AIML Intern',
		company: 'Brakes India',
		location: 'Chennai',
		startDate: 'Unknown',
		endDate: 'Present',
		description: [
			'Designing and developing AI-driven software applications for process automation and data-driven operations.',
		],
		technologies: ['AI', 'Machine Learning', 'Python'],
	},
	{
		title: 'Software Developer & AI/ML Intern',
		company: 'Allgigi Tech',
		location: 'Chennai',
		startDate: 'Unknown',
		endDate: 'Present',
		description: [
			'Building AI agent–based management systems that automate business processes, data handling, and decision support.',
		],
		technologies: ['AI Agents', 'Machine Learning', 'Software Development'],
	},
];

export type Project = {
	title: string;
	description: string;
	image: string;
	tags: string[];
	link?: string;
	repo?: string;
};

export const projects: Project[] = [
	{
		title: 'Autohealing System',
		description:
			'Built an AI-driven infrastructure observability system performing automated root cause analysis across distributed microservices. Designed causal dependency graphs and anomaly detection pipelines to detect failure propagation. Implemented AI remediation suggestions enabling automated debugging workflows.',
		image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg',
		tags: ['AI', 'Microservices', 'Observability', 'Root Cause Analysis'],
		link: '#',
		repo: '#',
	},
	{
		title: 'Multiagent LLM-based Research Assistant',
		description:
			'Implemented a RAG system using local embeddings and a vector database to enable fast, offline semantic search and research assistance. Built with Python, CREW-AI, Sentence Transformers, Reranking and FAISS, enabling academic paper analysis, automated summarization, insight extraction, and citation generation without external APIs.',
		image: 'https://images.pexels.com/photos/1036657/pexels-photo-1036657.jpeg',
		tags: ['Python', 'CREW-AI', 'FAISS', 'RAG', 'LLM'],
		link: '#',
		repo: '#',
	},
	{
		title: 'Greencalc Solar Application',
		description:
			'Developed a Solar Panel Cost & Savings Estimation Application to calculate installation expenses, estimate long-term savings, and manage community energy data using roof-space mapping. Integrated AI-based models to analyze roof area from maps and optimize panel placement.',
		image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg',
		tags: ['React.js', 'Node.js', 'Express', 'PostgreSQL', 'AI'],
		link: '#',
		repo: '#',
	},
	{
		title: 'Smart Warehouse Management Software',
		description:
			'Developed an IoT-integrated inventory management system to automate stock tracking and storage optimization using real-time image processing.',
		image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg',
		tags: ['Python', 'OpenCV', 'TensorFlow', 'ESP32', 'Node.js', 'PostgreSQL'],
		link: '#',
		repo: '#',
	},
	{
		title: 'AI-Powered Sign Language Recognition',
		description:
			'Developed an AI-based sign language recognition system that tracks hand and finger movements via a camera to interpret gestures into text or speech, enabling real-time communication assistance for the hearing impaired.',
		image: 'https://images.pexels.com/photos/1036657/pexels-photo-1036657.jpeg',
		tags: ['Python', 'OpenCV', 'MediaPipe', 'TensorFlow', 'Keras'],
		link: '#',
		repo: '#',
	},
	{
		title: 'College Website',
		description:
			'Developed and deployed an official website with dynamic content management and secure student information access.',
		image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg',
		tags: ['React.js', 'Node.js', 'Express', 'Supabase', 'Vercel'],
		link: '#',
		repo: '#',
	},
	{
		title: 'Polling Application for College',
		description:
			'Designed and implemented an interactive voting system to streamline event and class-level elections.',
		image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg',
		tags: ['Web Development', 'Interactive Voting'],
		link: '#',
		repo: '#',
	},
];

export type Education = {
	degree: string;
	field: string;
	institution: string;
	location: string;
	startDate: string;
	endDate: string;
	gpa?: string;
	achievements: string[];
};

export const education: Education[] = [
	{
		degree: 'BE',
		field: 'Computer Science Engineering',
		institution: 'Chennai Institute of Technology',
		location: 'Kanchipuram, India',
		startDate: 'Unknown',
		endDate: '2027',
		gpa: '8.3/10.0',
		achievements: [
			'Strong performance in mathematics and coding',
			'Solved 500+ Leetcode problems, Max rating 1650',
			'Winner of 1 Hackathon and Runner-up in 2 Hackathons',
		],
	},
];

export type Certificate = {
	title: string;
	issuer: string;
	date: string;
	id?: string;
	url?: string;
	pdf?: string;
};

export const certificates: Certificate[] = [
	{
		title: 'Certified Machine Learning Developer',
		issuer: 'IBM',
		date: 'Unknown',
		id: 'IBM-ML',
		url: '#',
		pdf: '#',
	},
	{
		title: 'Certified Data Analytics',
		issuer: 'Google',
		date: 'Unknown',
		id: 'GOOGLE-DA',
		url: '#',
		pdf: '#',
	},
	{
		title: 'Generative AI Engineering',
		issuer: 'IBM',
		date: 'Unknown',
		id: 'IBM-GENAI',
		url: '#',
		pdf: '#',
	},
];

export type Skill = {
	name: string;
	level: number; // 1-10
	category: 'technical' | 'software' | 'soft' | 'language';
};

export const skills: Skill[] = [
	// AI Skills
	{ name: 'LLM & RAG', level: 9, category: 'technical' },
	{ name: 'Agentic AI', level: 8, category: 'technical' },
	{ name: 'Embedding Models', level: 8, category: 'technical' },
	{ name: 'Vector Databases', level: 8, category: 'technical' },
	{ name: 'Machine Learning', level: 9, category: 'technical' },
	{ name: 'Full-Stack Web Dev', level: 9, category: 'technical' },

	// Software & Frameworks
	{ name: 'Keras & TensorFlow', level: 8, category: 'software' },
	{ name: 'OpenCV', level: 8, category: 'software' },
	{ name: 'LangChain & LangGraph', level: 8, category: 'software' },
	{ name: 'CrewAI & AutoGPT', level: 8, category: 'software' },
	{ name: 'React.js & Node.js', level: 9, category: 'software' },
	{ name: 'PostgreSQL & Supabase', level: 8, category: 'software' },

	// Cloud & Deployment
	{ name: 'Microsoft Azure', level: 7, category: 'software' },
	{ name: 'AWS', level: 7, category: 'software' },
	{ name: 'Docker & Kubernetes', level: 7, category: 'software' },
	{ name: 'Vercel', level: 8, category: 'software' },

	// Soft Skills
	{ name: 'Rapid Prototyping', level: 9, category: 'soft' },
	{ name: 'Problem Solving', level: 9, category: 'soft' },
	{ name: 'Collaborative Execution', level: 9, category: 'soft' },
];
