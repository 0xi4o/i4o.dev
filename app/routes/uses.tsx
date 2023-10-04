import Content from '~/content/uses/uses.mdx'
export default function Uses() {
	return (
		<main className='flex flex-col gap-20'>
			<article className='flex flex-col gap-8'>
				<h1 className='font-serif text-3xl text-neutral-100'>
					Devices, Tools, and Tech Stack
				</h1>
				<section className='prose prose-invert flex flex-col prose-p:my-4 first:prose-p:mt-0'>
					<p>
						This is a complete list of the tools, apps, services and
						hardware I use on a regular basis. The list contains
						tools I use in my work as a web and mobile app developer
						but also tools I use offline.
					</p>
					<hr />
					<article className='mdx prose prose-invert max-w-none'>
						<Content />
					</article>
				</section>
			</article>
		</main>
	)
}
