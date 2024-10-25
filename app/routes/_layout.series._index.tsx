import PageTitle from '~/components/PageTitle'

export default function Blog() {
	return (
		<main className='flex flex-col gap-20'>
			<article className='flex flex-col gap-8'>
				<PageTitle>Series</PageTitle>
			</article>
			<article className='flex flex-col gap-4'>Coming soon...</article>
		</main>
	)
}
