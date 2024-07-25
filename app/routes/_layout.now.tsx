import { Link } from '@remix-run/react'
import PageTitle from '~/components/PageTitle'

export default function Now() {
	return (
		<main className='flex flex-col gap-20'>
			<article className='flex flex-col gap-8'>
				<PageTitle>Now</PageTitle>
				<section className='prose prose-invert flex flex-col prose-p:my-2 first:prose-p:mt-0'>
					<h3 className='text-lg text-neutral-100'>
						What I'm working on right now?
					</h3>

					<p>
						I'm currently working as a Founding Engineer at
						FlowiseAI.
					</p>

					<p>I'm shipping Aurelius in my free time.</p>

					<p>I'm learning Go.</p>

					<p>I'm also learning to play a guitar.</p>
				</section>

				<section className='prose prose-invert flex flex-col prose-p:my-2 first:prose-p:mt-0'>
					<h3 className='text-lg text-neutral-100'>
						What are the projects I've planned for the coming
						months?
					</h3>

					<ul>
						<li>Aurelius</li>
						<li>and a few small open-source tools</li>
					</ul>
				</section>

				<section className='prose prose-invert flex flex-col prose-p:my-2 first:prose-p:mt-0'>
					<h3 className='text-lg text-neutral-100'>
						What are my current short-term goals?
					</h3>

					<p>Build and launch small open-source projects</p>
					<p>Monetize one of the projects</p>
				</section>

				<section className='prose prose-invert flex flex-col prose-p:my-2 first:prose-p:mt-0'>
					<h3 className='text-lg text-neutral-100'>
						What am I reading right now?
					</h3>

					<p>
						I read regularly, usually two books at a time — one
						fiction and one non-fiction. Check out what I'm{' '}
						<Link to='/reading'>reading</Link> and all the books
						I've read.
					</p>
				</section>

				<section className='prose prose-invert flex flex-col prose-p:my-2 first:prose-p:mt-0'>
					<h3 className='text-lg text-neutral-100'>
						What am I playing right now?
					</h3>

					<p>
						I play video games whenever I can. I'm currently
						playing:
					</p>
					<ul>
						<li>Euro Truck Simulator 2</li>
						<li>God of War</li>
					</ul>
				</section>

				<section className='prose prose-invert flex flex-col prose-p:my-2 first:prose-p:mt-0'>
					<h3 className='text-lg text-neutral-100'>
						What am I watching right now?
					</h3>

					<ul>
						<li>Jujutsu Kaisen</li>
					</ul>
				</section>
			</article>
		</main>
	)
}
