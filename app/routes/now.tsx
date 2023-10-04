import { Link } from '@remix-run/react'

export default function Now() {
	return (
		<main className='flex flex-col gap-20'>
			<article className='flex flex-col gap-8'>
				<h1 className='font-serif text-3xl text-neutral-100'>Now</h1>
				<section className='prose prose-invert flex flex-col prose-p:my-2 first:prose-p:mt-0'>
					<h3 className='text-lg text-neutral-100'>
						What I'm working on right now?
					</h3>

					<p>I'm shipping Herald and Rescribe.</p>

					<p>I write on this blog.</p>

					<p>I'm working on getting better at TypeScript and Rust.</p>
				</section>

				<section className='prose prose-invert flex flex-col prose-p:my-2 first:prose-p:mt-0'>
					<h3 className='text-lg text-neutral-100'>
						What are the projects I've planned for the coming
						months?
					</h3>

					{/*<p>*/}
					{/*	<del>*/}
					{/*		I'm planning to launch 3 projects I've been working*/}
					{/*		this year by the end of March/April. I've been*/}
					{/*		working on a project a month in 2023, and while I*/}
					{/*		managed to finish 2 at the time of writing (Mar 1),*/}
					{/*		I'll be fine tuning them and get them ready for*/}
					{/*		launch soon.*/}
					{/*	</del>*/}
					{/*</p>*/}

					{/*<p>*/}
					{/*	<em>*/}
					{/*		Update: Well, I didn't launch them as planned. TBH,*/}
					{/*		I was scared to release them. But I recently found*/}
					{/*		out that even without me talking about them online,*/}
					{/*		people are somehow finding out about Catalyst UI*/}
					{/*		(it's currently at 70 stars on Github). I want to*/}
					{/*		use this tiny momentum and get it ready for launch*/}
					{/*		soon.*/}
					{/*	</em>*/}
					{/*</p>*/}

					{/*<p>*/}
					{/*	<em>*/}
					{/*		Update: I found out how and why people were*/}
					{/*		discovering Catalyst organically. Turns out,*/}
					{/*		Tailwind announced a UI kit also called Catalyst at*/}
					{/*		Tailwind Connect 2023.*/}
					{/*	</em>*/}
					{/*</p>*/}

					<p>
						I want to launch other projects that are in various
						stages of completion:
					</p>

					<ul>
						<li>Aurelius</li>
						<li>Rescribe</li>
						<li>Herald</li>
					</ul>
				</section>

				<section className='prose prose-invert flex flex-col prose-p:my-2 first:prose-p:mt-0'>
					<h3 className='text-lg text-neutral-100'>
						What is my current short-term goal?
					</h3>

					<p>$1k MRR by the end of the year from my projects.</p>
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
						<li>Death Stranding</li>
						<li>Counter Strike 2</li>
					</ul>
				</section>

				<section className='prose prose-invert flex flex-col prose-p:my-2 first:prose-p:mt-0'>
					<h3 className='text-lg text-neutral-100'>
						What am I watching right now?
					</h3>

					<ul>
						<li>Bleach</li>
					</ul>
				</section>
			</article>
		</main>
	)
}
