import { Books } from '~/components'
import { data } from '~/data/books'
import { convertAsteriskToStrongTag } from '~/utils/helpers'
import Content from '~/content/reading/reading.mdx'

export default function Reading() {
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
			<Books />
			<article className='mdx prose prose-invert max-w-none'>
				<Content />
			</article>
		</main>
	)
}
