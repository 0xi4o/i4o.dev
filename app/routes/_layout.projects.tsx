import { projects } from '~/data/projects'
import { ProjectCard } from '~/components'
import PageTitle from '~/components/PageTitle'

export default function Projects() {
	return (
		<main className='flex flex-col gap-20'>
			<article className='flex flex-col gap-8'>
				<PageTitle>Projects</PageTitle>
				<p className='prose prose-invert max-w-[60ch] leading-6'>
					I build small web applications and tools that solve problems
					that I have. Each project uses at least one technology that
					I'm trying to learn. All of my projects are{' '}
					<a
						className='cursor-pointer underline decoration-dashed underline-offset-8 transition-colors duration-200 hover:text-brand'
						href='https://i4o.dev/blog/learning-by-building-breakable-toys'
						target='_self'
					>
						breakable toys
					</a>
					. They're all <strong>open-source software</strong>.
				</p>
			</article>

			<article className='flex flex-col gap-4'>
				<section className='flex flex-col gap-4'>
					{projects.length !== 0 &&
						projects.map((project, index) => (
							<ProjectCard key={index} {...project} />
						))}
				</section>
			</article>
		</main>
	)
}
