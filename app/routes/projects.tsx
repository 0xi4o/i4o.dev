import { data, projects } from '~/data/projects'
import { convertAsteriskToStrongTag } from '~/utils/helpers'
import { ProjectCard } from '~/components'

export default function Projects() {
	return (
		<main className='flex flex-col gap-20'>
			<article className='flex flex-col gap-8'>
				<h1 className='font-serif text-3xl text-neutral-100'>
					{data.title}
				</h1>
				<p
					className='prose prose-invert max-w-[60ch] leading-6'
					dangerouslySetInnerHTML={{
						__html: convertAsteriskToStrongTag(data.description),
					}}
				/>
			</article>

			<article className='flex flex-col gap-4'>
				<section className='flex flex-col gap-4'>
					{projects.length !== 0 &&
						projects.map((project) => <ProjectCard {...project} />)}
				</section>
			</article>
		</main>
	)
}
