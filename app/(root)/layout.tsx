import { ReactNode } from "react";
import { Montserrat } from "next/font/google";
import clsx from "clsx";
import { Metadata } from "next";

import { MiniBanner } from "@/components/banner/mini";
import { Navbar } from "@/components/sections/navbar";
import { Sidebar } from "@/components/sections/sidebar";
import { Footer } from "@/components/sections/footer";

import { LoadingModal } from "@/components/modal/loading";
import { ContactsModal } from "@/components/modal/contacts";
import { FloatingButton } from "@/components/FloatingButton";

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
				"min-w-screen min-h-screen bg-white flex flex-col justify-between"
			)}>
			<FloatingButton />

			{/* modals */}
			{/* <AuthorizationModal /> */}
			<ContactsModal />
			<LoadingModal />

			<Sidebar />
			<div className="min-w-full min-h-[8rem]" />
			<div className="min-w-full fixed z-20 shadow-lg bg-white">
				<MiniBanner />
				<Navbar />
			</div>
			{children}
			<Footer />
		</div>
	);
}
