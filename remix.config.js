/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
	future: {
		unstable_tailwind: true,
	},
	ignoredRouteFiles: ['**/.*'],
	// appDirectory: "app",
	// assetsBuildDirectory: "public/build",
	// serverBuildPath: "api/index.js",
	// publicPath: "/build/",
	serverDependenciesToBundle: [/.*/],
}
