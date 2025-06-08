import { ReactNode, Suspense } from "react";
import { Metadata } from "next";

import { Navbar } from "@/components/sections/navbar";
import { Sidebar } from "@/components/sections/sidebar";
import { Footer } from "@/components/sections/footer";
import { LoadingModal } from "@/components/modal/loading";
import { ContactsModal } from "@/components/modal/contacts";
import { FloatingButton } from "@/components/ui/floating_button";
import { BannerMini } from "@/components/banner/mini";

export const metadata: Metadata = {
	title: "Торговое оборудование для магазинов - Grand Market",
	description:
		"Торговое оборудование для магазинов по лучшим ценам в Атырау, Актау и Актобе",
	icons: "/favicon.png",
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<div className="min-h-screen bg-gray-50 flex flex-col">
			<header className="fixed top-0 left-0 right-0 z-40 shadow-lg bg-white/85 backdrop-blur-md">
				<BannerMini />
				<Navbar />
			</header>
			<div className="pt-[var(--header-height,8rem)]"></div>
			<Sidebar />
			<main className="flex-grow w-full">{children}</main>
			<Footer />
			<FloatingButton className="z-30" />
			<div id="modal-root" className="relative z-50">
				<ContactsModal />
				<LoadingModal />
			</div>
		</div>
	);
}
