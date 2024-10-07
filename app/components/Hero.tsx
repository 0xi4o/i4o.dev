import PageTitle from '~/components/PageTitle'
import SocialLinks from '~/components/SocialLinks'

export default function Hero() {
	return (
		<article className='flex flex-col gap-8'>
			<PageTitle>Ilango Rajagopal</PageTitle>
			<p className='prose prose-invert max-w-none leading-loose font-sans'>
				Hey. I'm a software engineer specializing in full-stack web
				development. I build open-source apps and tools with Remix,
				React, TypeScript, and Golang. I like building personal tools
				and I'm passionate about building beautiful user interfaces.
			</p>
			<SocialLinks />
		</article>
	)
}
