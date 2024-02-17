import { defineConfig } from 'vite'
import mdx from '@mdx-js/rollup'
import remarkFrontmatter from 'remark-frontmatter'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'
import tsconfigPaths from 'vite-tsconfig-paths'
import {
	unstable_vitePlugin as remix,
	unstable_cloudflarePreset as cloudflare,
} from '@remix-run/dev'

export default defineConfig({
	plugins: [
		mdx({
			remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
		}),
		remix({
			ignoredRouteFiles: ['**/.*'],
			presets: [cloudflare()],
		}),
		tsconfigPaths(),
	],
	ssr: {
		resolve: {
			externalConditions: ['workerd', 'worker'],
		},
	},
})
