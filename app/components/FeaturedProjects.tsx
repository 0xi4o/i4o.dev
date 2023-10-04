import type { Project } from '~/data/projects'
import ProjectCard from './ProjectCard'
import { Link } from '@remix-run/react'

export default function FeaturedProjects({
	projects,
}: {
	projects: Project[]
}) {
	return (
		<article className='flex flex-col gap-8'>
			<header className='flex w-full flex-row justify-between gap-2'>
				<h2 className='text-xl text-neutral-100'>Featured Projects</h2>
				<Link
					className='cursor-pointer underline decoration-dashed underline-offset-8 hover:text-neutral-100'
					to='/projects'
				>
					See all projects
				</Link>
			</header>
			{projects.length === 0 && <p>Oops, I must work^^^^^</p>}

			<section className='flex flex-col gap-4'>
				{projects.length !== 0 &&
					projects
						.filter((project) => project.isFeatured)
						.map((project, index) => (
							<ProjectCard
								key={`project-${index}`}
								{...project}
							/>
						))}
			</section>
		</article>
	)
}
