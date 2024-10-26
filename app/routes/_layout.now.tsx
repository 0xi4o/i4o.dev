import { Link } from '@remix-run/react'
import PageTitle from '~/components/PageTitle'

export default function Now() {
	return (
		<main className='flex flex-col gap-16'>
			<article className='flex flex-col gap-4 leading-loose'>
				<PageTitle>Now</PageTitle>
				<section className='prose prose-invert flex flex-col prose-p:my-2 first:prose-p:mt-0'>
					<h3 className='text-lg text-neutral-100 font-mono'>
						What I'm working on right now?
					</h3>

					<p>
						I'm currently working as a Founding Engineer at
						FlowiseAI.
					</p>

					<p>I'm shipping Herald in my free time.</p>

					<p>I'm learning Go.</p>

					<p>I'm also learning to play a guitar.</p>
				</section>

				<section className='prose prose-invert flex flex-col prose-p:my-2 first:prose-p:mt-0'>
					<h3 className='text-lg text-neutral-100 font-mono'>
						What are the projects I've planned for the coming
						months?
					</h3>

					<ul>
						<li>Aurelius</li>
						<li>Herald</li>
						<li>and a few small open-source tools</li>
					</ul>
				</section>

				<section className='prose prose-invert flex flex-col prose-p:my-2 first:prose-p:mt-0'>
					<h3 className='text-lg text-neutral-100 font-mono'>
						What are my current short-term goals?
					</h3>

					<p>Build and launch small open-source projects</p>
					<p>Monetize one of the projects</p>
				</section>

				<section className='prose prose-invert flex flex-col prose-p:my-2 first:prose-p:mt-0'>
					<h3 className='text-lg text-neutral-100 font-mono'>
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
					<h3 className='text-lg text-neutral-100 font-mono'>
						What am I playing right now?
					</h3>

					<p>
						I play video games whenever I can. I'm currently
						playing:
					</p>
					<ul>
						<li>Red Dead Redemption 2</li>
					</ul>
				</section>

				<section className='prose prose-invert flex flex-col prose-p:my-2 first:prose-p:mt-0'>
					<h3 className='text-lg text-neutral-100 font-mono'>
						What am I watching right now?
					</h3>

					<p>
						Not watching anything right now. I'm waiting for season
						2 of Severance and Silo. And the next season of Jujutsu
						Kaisen.
					</p>

					{/*<ul>*/}
					{/*	<li>Nothing</li>*/}
					{/*</ul>*/}
				</section>
			</article>
		</main>
	)
}
