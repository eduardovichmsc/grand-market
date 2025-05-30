/** @type {import('next').NextConfig} */
const nextConfig = {
	typescript: { ignoreBuildErrors: true },
	async rewrites() {
		// nest.js -- backend
		return [
			// {
			// 	source: "/api/:path*",
			// 	destination: "http://89.46.33.172:5000/:path*",
			// },
		];
	},
	images: {
		remotePatterns: [
			{
				hostname: "localhost",
			},
			{
				hostname: "i.pinimg.com",
			},
			{
				protocol: "https",
				hostname: "maeks.ru",
				port: "",
				pathname: "**",
			},
			{
				protocol: "https",
				hostname: "stahler.ru",
				pathname: "**",
			},
			{
				protocol: "https",
				hostname: "www.unitrade-orel.ru",
				pathname: "/**",
			},
			// {
			// 	protocol: "http",
			// 	hostname: "89.46.33.172",
			// 	port: "5000",
			// 	pathname: "/uploads/**",
			// },
		],
	},
};

module.exports = nextConfig;
