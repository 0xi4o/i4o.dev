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

					<p>I'm shipping Herald.</p>

					<p>I write on this blog.</p>

					<p>I'm learning Elixir, Docker, and Rust.</p>
				</section>

				<section className='prose prose-invert flex flex-col prose-p:my-2 first:prose-p:mt-0'>
					<h3 className='text-lg text-neutral-100'>
						What are the projects I've planned for the coming
						months?
					</h3>

					<ul>
						<li>Herald</li>
						<li>Aurelius</li>
						<li>and a few small open-source tools</li>
					</ul>
				</section>

				<section className='prose prose-invert flex flex-col prose-p:my-2 first:prose-p:mt-0'>
					<h3 className='text-lg text-neutral-100'>
						What is my current short-term goal?
					</h3>

					<p>$5k MRR by the end of 2024 from my projects.</p>
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
						<li>Cyberpunk 2077</li>
						<li>Ghost Recon: Breakpoint</li>
						<li>The Finals</li>
					</ul>
				</section>

				<section className='prose prose-invert flex flex-col prose-p:my-2 first:prose-p:mt-0'>
					<h3 className='text-lg text-neutral-100'>
						What am I watching right now?
					</h3>

					<ul>
						<li>Reacher</li>
					</ul>
				</section>
			</article>
		</main>
	)
}
