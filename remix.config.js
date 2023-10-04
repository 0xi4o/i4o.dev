/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
	browserNodeBuiltinsPolyfill: {
		modules: {
			punycode: true,
		},
	},
	postcss: true,
	tailwind: true,
	ignoredRouteFiles: ['**/.*'],
	// appDirectory: "app",
	// assetsBuildDirectory: "public/build",
	// serverBuildPath: "api/index.js",
	// publicPath: "/build/",
	serverModuleFormat: 'cjs',
	serverDependenciesToBundle: [/.*/],
}
