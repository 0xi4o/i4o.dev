/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
	postcss: true,
	tailwind: true,
	future: {
		v2_dev: true,
		v2_errorBoundary: true,
		v2_headers: true,
		// TODO: update to v2_meta
		// v2_meta: true,
		v2_normalizeFormMethod: true,
		v2_routeConvention: true,
	},
	ignoredRouteFiles: ['**/.*'],
	// appDirectory: "app",
	// assetsBuildDirectory: "public/build",
	// serverBuildPath: "api/index.js",
	// publicPath: "/build/",
	serverModuleFormat: 'cjs',
	serverDependenciesToBundle: [/.*/],
}
