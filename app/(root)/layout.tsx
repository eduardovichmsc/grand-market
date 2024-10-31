import { ReactNode } from "react";
import { Navbar } from "@/app/components/Navbar";
import { MiniBanner } from "../components/MiniBanner";

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<div className="min-w-screen min-h-screen bg-white">
			<MiniBanner />
			<Navbar />
			{children}
		</div>
	);
}
