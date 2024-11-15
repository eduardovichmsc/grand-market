import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import "./styles/style.css";

const montserrat = Montserrat({
	weight: ["300", "400", "500", "600", "700", "800"],
	subsets: ["cyrillic", "cyrillic-ext", "latin", "latin-ext"],
	variable: "--font-montserrat",
});

export const metadata: Metadata = {
	title: "Торговое оборудование для магазинов - Grand Market",
	description:
		"Торговое оборудование для магазинов по лучшим ценам в Атырау, Актау и Актобе",
	icons: "/favicon.png",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${montserrat.className} antialiased`}>{children}</body>
		</html>
	);
}
