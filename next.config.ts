import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "http",
				hostname: "localhost",
				port: "5000",
				pathname: "/uploads/**",
			},
			{
				protocol: "http",
				hostname: "89.46.33.172",
				port: "5000",
				pathname: "/uploads/**",
			},
		],
	},
};

export default nextConfig;
