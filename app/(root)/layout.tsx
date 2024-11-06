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
			<div className="shadow-lg">
				<MiniBanner />
				<Navbar />
			</div>
			{children}
			<Footer />
		</div>
	);
}
