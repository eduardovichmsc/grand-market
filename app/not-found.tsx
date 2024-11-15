import Link from "next/link";

import { MiniBanner } from "@/components/MiniBanner";
import { Navbar } from "@/components/Navbar";
import { Sidebar } from "@/components/Sidebar";

export default function NotFoundPage() {
	return (
		<div className="min-w-screen min-h-screen bg-white flex flex-col justify-between">
			<Sidebar />
			<div className="shadow-lg">
				<MiniBanner />
				<Navbar />
			</div>

			<div className="flex-1 flex flex-col justify-center items-center gap-1 md:gap-5">
				<p className="text-xl">Мы не смогли найти эту страницу.</p>
				<Link
					href={"/our-projects"}
					className="*:text-res-green transition flex items-center px-10 py-1">
					<p className="font-medium text-lg">Перейти назад </p>
				</Link>
			</div>

			{/* <Footer /> */}
		</div>
	);
}
