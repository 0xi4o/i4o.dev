import { ExternalLinkIcon } from 'lucide-react'
import type { Project } from '~/data/projects'

export default function ProjectCard({
	title,
	description,
	link,
	isComingSoon,
}: Project) {
	// const formatTech = (values: string[]) =>
	//     values.toString().replaceAll(',', ' • ')

	return (
		<>
			{isComingSoon ? (
				<div className='group flex w-full flex-col justify-between gap-2 md:flex-row md:items-center'>
					<div className='flex flex-col gap-2 md:flex-row md:items-center md:gap-4'>
						<p className='text-neutral-100 font-mono uppercase group-hover:text-brand transition-colors duration-300'>
							{title}
						</p>
						<p className=''>{description}</p>
					</div>

					<p className='w-fit rounded-md bg-neutral-900 px-2 py-1 text-xs font-mono uppercase'>
						Coming Soon
					</p>
				</div>
			) : (
				<a
					className='group flex w-full cursor-pointer flex-col justify-between gap-2 transition-all duration-200 md:flex-row md:items-center'
					href={link}
					target='_blank'
					rel='noreferrer'
				>
					<div className='flex flex-col gap-4 md:flex-row md:items-center'>
						<p className='text-neutral-100 font-mono uppercase group-hover:text-brand transition-colors duration-300'>
							{title}
						</p>
						<p className=''>{description}</p>
					</div>

					<ExternalLinkIcon className='w-4 h-4 hidden group-hover:flex' />
				</a>
			)}
		</>
	)
}
