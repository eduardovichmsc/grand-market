import { ReactNode } from "react";

import { Navbar } from "@/components/Navbar";
import { MiniBanner } from "@/components/MiniBanner";
import { Footer } from "@/components/Footer";
import { Sidebar } from "@/components/Sidebar";
import { AuthorizationModal } from "@/components/AuthorizationModal";
import { ContactsModal } from "@/components/ContactsModal";

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<div className="min-w-screen min-h-screen bg-white flex flex-col justify-between">
			{/* modals */}
			<AuthorizationModal />
			<ContactsModal />

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
