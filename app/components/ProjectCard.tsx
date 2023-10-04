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
				<div className='t group flex w-full flex-col justify-between gap-2 rounded-md border border-neutral-700 p-4 md:flex-row md:items-center'>
					<div className='flex flex-col gap-2 md:flex-row md:items-center md:gap-4'>
						<p className='text-neutral-100'>{title}</p>
						<p>{description}</p>
					</div>

					<p className='w-fit rounded-md bg-neutral-900 px-4 py-1 text-xs'>
						Coming Soon
					</p>
				</div>
			) : (
				<a
					className='group flex w-full cursor-pointer flex-col justify-between gap-2 rounded-md border border-neutral-700 p-4 transition-all duration-200 hover:border-neutral-400 md:flex-row md:items-center'
					href={link}
					target='_blank'
					rel='noreferrer'
				>
					<div className='flex flex-col gap-4 md:flex-row md:items-center'>
						<p className='text-neutral-100'>{title}</p>
						<p>{description}</p>
					</div>

					<svg
						width='18'
						height='18'
						viewBox='0 0 18 18'
						fill='none'
						className='transition-all duration-300 group-hover:translate-x-1'
					>
						<path
							d='M5.25 12.75L12.75 5.25'
							stroke='#999999'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
						<path
							d='M5.25 5.25H12.75V12.75'
							stroke='#999999'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
					</svg>
				</a>
			)}
		</>
	)
}
