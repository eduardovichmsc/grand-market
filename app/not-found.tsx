import Link from "next/link";

import { MiniBanner } from "@/components/banner/mini";
import { Sidebar } from "@/components/sections/sidebar";
import { Navbar } from "@/components/sections/navbar";

export default function NotFoundPage() {
	return (
		<div className="min-w-screen min-h-screen bg-slate-50 flex flex-col justify-between">
			<Sidebar />
			<div className="shadow-lg">
				<MiniBanner />
				<Navbar />
			</div>

			<main className="flex-grow flex flex-col justify-center items-center text-center px-4 py-16 sm:px-6 lg:px-8">
				<div className="max-w-md w-full space-y-8">
					<div>
						<h1 className="mt-6 text-5xl sm:text-6xl font-extrabold text-slate-800 tracking-tight">
							404
						</h1>
						<p className="mt-3 text-xl sm:text-2xl font-semibold text-slate-700">
							Страница не найдена
						</p>
						<p className="mt-4 text-base text-slate-500">
							К сожалению, мы не смогли найти страницу, которую вы искали.
							Возможно, она была перемещена, удалена или вы просто ошиблись в
							адресе.
						</p>
					</div>

					<div className="mt-10 flex flex-col sm:flex-row sm:justify-center sm:space-x-4 space-y-4 sm:space-y-0">
						<Link
							href="/"
							className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-res-green hover:bg-res-green/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-res-green transition-colors duration-150 ease-in-out group">
							На главную
						</Link>
					</div>
				</div>
			</main>

			{/* <Footer /> */}
		</div>
	);
}
