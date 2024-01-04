import Content from '~/content/uses/uses.mdx'
import PageTitle from '~/components/PageTitle'
export default function Uses() {
	return (
		<main className='flex flex-col gap-20'>
			<article className='flex flex-col gap-8'>
				<PageTitle>Devices, Tools, and Tech Stack</PageTitle>
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
