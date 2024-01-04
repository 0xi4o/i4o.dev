/// <reference types="vite/client" />
/// <reference types="@vercel/remix" />

declare module '*.mdx' {
	let MDXComponent: (props: any) => JSX.Element
	export const frontmatter: any
	export default MDXComponent
}
