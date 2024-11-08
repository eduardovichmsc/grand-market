import { ReactNode } from "react";

import { Navbar } from "@/app/components/Navbar";
import { MiniBanner } from "@/app/components/MiniBanner";
import { Footer } from "@/app/components/Footer";
import { Sidebar } from "@/app/components/Sidebar";
import { AuthorizationModal } from "@/app/components/AuthorizationModal";

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<div className="min-w-screen min-h-screen bg-white flex flex-col justify-between">
			<AuthorizationModal />
			<Sidebar />
			{/* <div className="min-w-full min-h-[11rem] sm:h-[10.375rem] xl:h-[11.5rem]" /> */}
			<div className="min-w-full min-h-[11rem] xl:h-[11.5rem]" />
			<div className="min-w-full fixed z-20 shadow-lg bg-white">
				<MiniBanner />
				<Navbar />
			</div>
			{children}
			<Footer />
		</div>
	);
}
