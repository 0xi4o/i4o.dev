import { Link } from '@remix-run/react'
import { Books } from '~/components'
import PageTitle from '~/components/PageTitle'
import Content from '~/content/reading/reading.mdx'

export default function Reading() {
	return (
		<main className='flex flex-col gap-16'>
			<article className='flex flex-col gap-4'>
				<PageTitle>Reading</PageTitle>
				<p className='prose prose-invert max-w-[60ch] leading-loose'>
					I read books regularly. I'm always reading two books at any
					time — one fiction and one non-fiction. I've grouped the
					books in the following categories: currently reading, on my
					reading list, and read in the past. Do you have a book
					recommendation? Let me know on{' '}
					<a
						className='cursor-pointer underline decoration-dashed underline-offset-8 transition-colors duration-200 hover:text-brand'
						href='https://twitter.com/0xi4o'
						target='_blank'
						rel='noreferrer'
					>
						Twitter
					</a>
					.<br />
					{/*<br />I recently started taking notes of some of the books*/}
					{/*I'm reading. I'm publishing them here on my site. You can*/}
					{/*check them out on the{' '}*/}
					{/*<Link*/}
					{/*	className='cursor-pointer underline decoration-dashed underline-offset-8 transition-colors duration-200 hover:text-brand'*/}
					{/*	to='/book-notes'*/}
					{/*	target='_self'*/}
					{/*>*/}
					{/*	book notes*/}
					{/*</Link>*/}
					{/*.*/}
				</p>
			</article>
			<Books />
			<article className='mdx prose prose-invert max-w-none prose-h2:font-mono prose-h3:font-mono'>
				<Content />
			</article>
		</main>
	)
}
