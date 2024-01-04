import SocialLinks from '~/components/SocialLinks'

export default function Hero() {
	return (
		<article className='flex flex-col gap-8'>
			<h1 className='font-serif text-3xl text-neutral-100'>
				Hi, I’m Ilango 👋
			</h1>
			<p className='prose prose-invert max-w-[60ch] leading-6'>
				Hello, I'm a <strong>software engineer</strong> from Bangalore,
				India. I build
				<strong>open-source</strong> apps and tools with{' '}
				<strong>Remix, React, TypeScript, Elixir, and Rust</strong>. I
				write about web development, indiehacking, and personal growth.
			</p>
			<SocialLinks />
		</article>
	)
}
