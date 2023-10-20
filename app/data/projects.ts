export type ProjectPresentation = {
	title: string
	description: string
}

export type Project = {
	title: string
	description: string
	link: string
	isComingSoon?: boolean
	isBackburner?: boolean
	isFeatured?: boolean
}

export const data: ProjectPresentation = {
	title: 'Projects',
	description:
		"I build small web applications and tools that solve problems that I have. Each project uses at least one technology that I'm trying to learn. All of my projects are <a class='underline decoration-dashed underline-offset-8' href='https://i4o.dev/blog/learning-by-building-breakable-toys' target='_self'>breakable toys</a>. They're all *open-source* (or will be open-sourced).",
}

export const projects: Project[] = [
	{
		title: 'Aurelius',
		description: 'Minimal, open-source writing app',
		// tech: ['React', 'Remix', 'TypeScript'],
		link: 'https://aurelius.ink/',
		isFeatured: true,
	},
	{
		title: 'Catalyst UI',
		description: 'React component library built using Radix and Tailwind',
		// tech: ['React', 'TypeScript', 'Radix UI', 'TailwindCSS'],
		link: 'https://catalyst-ui.com',
		isFeatured: true,
	},
	{
		title: 'uxinspo',
		description: 'Curated collection of real web app UIs for inspiration',
		// tech: ['React', 'Remix', 'MDX', 'TailwindCSS'],
		link: 'https://uxinspo.site/',
		isFeatured: true,
	},
	{
		title: 'Rescribe',
		description: 'Content Management for Remix codebases',
		// tech: ['React', 'Remix', 'MDX', 'TailwindCSS'],
		link: 'https://rescribe.site/',
	},
	{
		title: 'Synthwave Stack',
		description: 'Remix Stack for quickly shipping web apps',
		// tech: ['React', 'Remix', 'MDX', 'TailwindCSS'],
		link: 'https://rescribe.site/',
	},
	{
		title: 'cargo-use',
		description:
			'Cargo subcommand to start a new Rust project from a boilerplate/template repository',
		// tech: ['Rust', 'clap.rs'],
		link: 'https://github.com/i4o-dev/cargo-use',
	},
	{
		title: 'Zilean',
		description: 'Pomodoro CLI app written in Rust',
		// tech: ['Rust', 'clap.rs'],
		link: 'https://github.com/i4o-dev/zilean',
		isComingSoon: true,
	},
	{
		title: 'Herald',
		description:
			'Manage changelogs, roadmap, and banners from one dashboard',
		// tech: ['React', 'Remix', 'MDX', 'TailwindCSS'],
		link: 'https://rescribe.site/',
		isComingSoon: true,
	},
]
