import { Link } from '@remix-run/react'
import Employer from '~/components/Employer'
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
						I'm currently working as a Founding Software Engineer at{' '}
						<Employer />
					</p>

					{/* <p>I'm shipping Herald in my free time.</p> */}

					<p>I'm learning Odin, Raylib, and Box2D.</p>

					{/* <p>I'm also learning to play a guitar.</p> */}
				</section>

				<section className='prose prose-invert flex flex-col prose-p:my-2 first:prose-p:mt-0'>
					<h3 className='text-lg text-neutral-100 font-mono'>
						What are the projects I've planned for the coming
						months?
					</h3>

					<ul>
						<li>Aurelius</li>
						{/* <li>Herald</li> */}
						<li>Untitled Video Game</li>
						<li>and a few small open-source tools</li>
					</ul>
				</section>

				<section className='prose prose-invert flex flex-col prose-p:my-2 first:prose-p:mt-0'>
					<h3 className='text-lg text-neutral-100 font-mono'>
						What are my current short-term goals?
					</h3>

					<p>Build and launch a small video game on Steam</p>
					{/* <p>Monetize one of the projects</p> */}
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
						<li>Path of Exile 2</li>
						<li>The Outer Wilds</li>
					</ul>
				</section>

				<section className='prose prose-invert flex flex-col prose-p:my-2 first:prose-p:mt-0'>
					<h3 className='text-lg text-neutral-100 font-mono'>
						What am I watching right now?
					</h3>

					{/* <ul> */}
					{/*     <li>F1</li> */}
					{/*     <li>Vinland Saga (Rewatch)</li> */}
					{/* </ul> */}

					<p>Not watching anything right now.</p>
					<p>
						I'm waiting for new seasons of Drive to Survive,
						Severance, Silo, and Jujutsu Kaisen.
					</p>
				</section>
			</article>
		</main>
	)
}
