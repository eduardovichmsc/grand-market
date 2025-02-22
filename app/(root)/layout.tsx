import { ReactNode } from "react";

import { Navbar } from "@/components/Navbar";
import { MiniBanner } from "@/components/MiniBanner";
import { Footer } from "@/components/Footer";
import { Sidebar } from "@/components/Sidebar";
import { AuthorizationModal } from "@/components/AuthorizationModal";
import { ContactsModal } from "@/components/ContactsModal";
import { FloatingButton } from "@/components/FloatingButton";
import { LoadingModal } from "@/components/LoadingModal";
import { Montserrat } from "next/font/google";
import clsx from "clsx";
import { Metadata } from "next";

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

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<div
			className={clsx(
				"min-w-screen min-h-screen bg-white flex flex-col justify-between",
				montserrat.className
			)}>
			<FloatingButton />

			{/* modals */}
			{/* <AuthorizationModal /> */}
			<ContactsModal />
			<LoadingModal />

			<Sidebar />
			<div className="min-w-full min-h-[11rem] lg:h-[11.5rem] xl:h-[12rem] 2xl:h-[11.5rem]" />
			<div className="min-w-full fixed z-20 shadow-lg bg-white">
				<MiniBanner />
				<Navbar />
			</div>
			{children}
			<Footer />
		</div>
	);
}
