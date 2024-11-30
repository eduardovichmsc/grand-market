import { Metadata } from "next";
import { ReactNode } from "react";

import { AdminNavbar } from "@/components/admin/AdminNavbar";
import "./admin.css";
import { CategoryModal } from "@/components/admin/CategoryModal";
import { ProductModal } from "@/components/admin/ProductModal";
import { Alert } from "@/components/ui/alert";
import { BrandModal } from "@/components/admin/BrandsModal";

export const metadata: Metadata = {
	title: "Панель управления - Grand Market",
};

export default function AdminLayout({ children }: { children: ReactNode }) {
	return (
		<main className="w-screen h-screen flex flex-col items-center gap-6">
			{/* alert */}
			<Alert />

			{/* modals */}
			<ProductModal />
			<CategoryModal />
			<BrandModal />

			{/* mini banner */}
			<div className="w-full py-2 flex justify-center bg-res-green">
				<p className="text-white">Панель управления Grand-Market</p>
			</div>

			<div className="container flex h-full gap-6">
				{/* navigation menu */}
				<AdminNavbar />

				{/* outlet */}
				<div className="flex-1">{children}</div>
			</div>
		</main>
	);
}
