export type Project = {
	title: string
	description: string
	link: string
	isComingSoon?: boolean
	isBackburner?: boolean
	isFeatured?: boolean
}

export const projects: Project[] = [
	{
		title: 'Rescribe',
		description: 'Content Management for Remix codebases',
		// tech: ['React', 'Remix', 'MDX', 'TailwindCSS'],
		link: 'https://rescribe.site/',
		isFeatured: true,
		isComingSoon: true,
	},
	{
		title: 'Aurelius',
		description: 'Minimal, open-source writing app',
		// tech: ['React', 'Remix', 'TypeScript'],
		link: 'https://aurelius.ink/',
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
		title: 'Herald',
		description:
			'Manage changelogs, roadmap, banners, and more from one dashboard',
		// tech: ['React', 'Remix', 'MDX', 'TailwindCSS'],
		link: 'https://rescribe.site/',
		isComingSoon: true,
	},
	{
		title: 'Catalyst UI',
		description: 'React component library built using Radix and Tailwind',
		// tech: ['React', 'TypeScript', 'Radix UI', 'TailwindCSS'],
		link: 'https://catalyst-ui.com',
		isFeatured: false,
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
			'Cargo subcommand to start a new Rust project from a template',
		// tech: ['Rust', 'clap.rs'],
		link: 'https://github.com/i4o-dev/cargo-use',
	},
	// {
	// 	title: 'Tmux Sessionizer',
	// 	description: 'CLI tool to manage tmux sessions for your projects',
	// 	// tech: ['Rust', 'clap.rs'],
	// 	link: '',
	// 	isComingSoon: true,
	// },
	// {
	// 	title: 'Zilean',
	// 	description: 'Pomodoro CLI app written in Rust',
	// 	// tech: ['Rust', 'clap.rs'],
	// 	link: 'https://github.com/i4o-dev/zilean',
	// 	isComingSoon: true,
	// },
]
