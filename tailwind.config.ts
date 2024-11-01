import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
				"res-green": "#076151",
				"res-light-green": "#099179",
				"res-grey": "#AFC2BF",
			},
			container: {
				center: true,
				screens: {
					"2xl": "1790px",
				},
			},
		},
	},
	plugins: [],
};
export default config;
