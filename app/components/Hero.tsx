import PageTitle from '~/components/PageTitle'
import SocialLinks from '~/components/SocialLinks'

export default function Hero() {
	return (
		<article className='flex flex-col gap-8'>
			<PageTitle>Ilango Rajagopal</PageTitle>
			<p className='prose prose-invert max-w-[60ch] leading-loose font-sans'>
				Hey, I am Ilango Rajagopal, a <strong>software engineer</strong>{' '}
				from Bangalore, India. I build <strong>open-source</strong> apps
				and tools with{' '}
				<strong>Remix, React, TypeScript, and Golang</strong>. I write
				about web development, indie-hacking, and personal growth.
			</p>
			<SocialLinks />
		</article>
	)
}
