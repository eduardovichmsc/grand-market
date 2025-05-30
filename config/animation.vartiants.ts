// products/page.tsx
export const productItemAnimations = {
	itemVariants: {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.3,
			},
		},
		exit: {
			opacity: 0,
			y: -20,
			transition: {
				duration: 0.2,
			},
		},
	},
	containerVariants: {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.07,
			},
		},
	},
};

// components/sections/about_company.tsx
export const aboutCompanyAnimations = {
	textVariants: {
		hidden: { opacity: 0, y: 10 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.3, ease: "easeOut" },
		},
		exit: { opacity: 0, y: -10, transition: { duration: 0.2, ease: "easeIn" } },
	},
};
