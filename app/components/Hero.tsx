import SocialLinks from '~/components/SocialLinks'
import PageTitle from '~/components/PageTitle'

export default function Hero() {
	return (
		<article className='flex flex-col gap-8'>
			<PageTitle>Hi, I’m Ilango 👋</PageTitle>
			<p className='prose prose-invert max-w-[60ch] leading-6'>
				Hello, I'm a <strong>software engineer</strong> from Bangalore,
				India. I build <strong>open-source</strong> apps and tools with{' '}
				<strong>Remix, React, TypeScript, and Golang</strong>. I write
				about web development, indie-hacking, and personal growth.
			</p>
			<SocialLinks />
		</article>
	)
}
