import type { ReactNode } from 'react'

interface Props {
	children: ReactNode
	progress?: boolean
}

function Layout(props: Props) {
	return (
		<>
			{props.progress ? <div className='progress' id='progress' /> : null}
			{props.children}
			{props.progress ? (
				<script
					// biome-ignore lint: it's fine
					dangerouslySetInnerHTML={{
						__html: `
                    let prog = document.getElementById('progress')

                    let body = document.body,
                    html = document.documentElement

                    function setProgress() {
                    let scrollFromTop = html.scrollTop || body.scrollTop
                    let height = html.scrollHeight - html.clientHeight
                    let width = (scrollFromTop / height) * 100 + '%'

                    prog.style.width = width
                }

                    window.addEventListener('scroll', setProgress)

                    setProgress()
                    `,
					}}
				/>
			) : null}
		</>
	)
}

export default Layout
