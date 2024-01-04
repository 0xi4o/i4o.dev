import { defineConfig } from 'vite'
import { installGlobals } from '@remix-run/node'
import mdx from '@mdx-js/rollup'
import remarkFrontmatter from 'remark-frontmatter'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'
import tsconfigPaths from 'vite-tsconfig-paths'
import { unstable_vitePlugin as remix } from '@remix-run/dev'

installGlobals()

export default defineConfig({
	plugins: [
		mdx({
			remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
		}),
		remix({
			ignoredRouteFiles: ['**/.*'],
		}),
		tsconfigPaths(),
	],
})
