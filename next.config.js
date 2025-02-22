/** @type {import('next').NextConfig} */
const nextConfig = {
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
			// {
			// 	protocol: "http",
			// 	hostname: "89.46.33.172",
			// 	port: "5000",
			// 	pathname: "/uploads/**",
			// },
			// {
			// 	hostname: "i.pinimg.com",
			// },
		],
	},
};

module.exports = nextConfig;
