import { ReactNode } from "react";

import { Navbar } from "@/app/components/Navbar";
import { MiniBanner } from "@/app/components/MiniBanner";
import { Footer } from "@/app/components/Footer";

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<div className="min-w-screen min-h-screen bg-white flex flex-col justify-between">
			<div className="">
				<MiniBanner />
				<Navbar />
			</div>
			{children}
			<Footer />
		</div>
	);
}
