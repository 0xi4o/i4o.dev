import PageTitle from '~/components/PageTitle'
import SocialLinks from '~/components/SocialLinks'

export default function Hero() {
	return (
		<article className='flex flex-col gap-8'>
			<PageTitle>Ilango Rajagopal</PageTitle>
			<span className='prose prose-invert max-w-none font-sans'>
				Hey. I'm a software engineer specializing in full-stack web
				development. I build open-source apps and tools with{' '}
				<span className='h-3 leading-none inline-flex items-center gap-1'>
					<img
						alt='remix logo'
						className='w-3 h-3 align-baseline'
						src='/images/remix-logo.png'
					/>
					Remix
				</span>
				,{' '}
				<span className='h-3 leading-none inline-flex items-center gap-1'>
					<img
						alt='react logo'
						className='w-3 h-3'
						src='/images/react-logo.png'
					/>
					React
				</span>
				,{' '}
				<span className='h-3 leading-none inline-flex items-center gap-1'>
					<img
						alt='typescript logo'
						className='w-3 h-3'
						src='/images/ts-logo.png'
					/>
					TypeScript
				</span>
				, and{' '}
				<span className='h-3 leading-none inline-flex items-center gap-1'>
					<img
						alt='golang logo'
						className='h-3 align-bottom'
						src='/images/go-logo.png'
					/>
					Golang
				</span>
				. I like building personal tools and I'm passionate about
				building beautiful user interfaces.
			</span>
			<SocialLinks />
		</article>
	)
}
