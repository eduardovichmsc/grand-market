import { Montserrat } from "next/font/google";
import "./globals.css";
import "./styles/style.css";
import clsx from "clsx";

const montserrat = Montserrat({
	weight: ["300", "400", "500", "600", "700", "800"],
	subsets: ["cyrillic", "cyrillic-ext", "latin", "latin-ext"],
	variable: "--font-montserrat",
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={clsx("antialiased", montserrat.className)}>
				{children}
			</body>
		</html>
	);
}
