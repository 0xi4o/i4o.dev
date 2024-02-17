/** @type {import('@remix-run/dev').AppConfig} */
export default {
	postcss: true,
	serverDependenciesToBundle: [/^@keystatic\//, 'minimatch'],
	tailwind: true,
	// appDirectory: "app",
	// assetsBuildDirectory: "public/build",
	// serverBuildPath: "api/index.js",
	// publicPath: "/build/",
}
