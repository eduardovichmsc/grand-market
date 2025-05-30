import { Metadata } from "next";
import { ReactNode, Suspense } from "react"; // Added Suspense for potential future use

export const metadata: Metadata = {
	title: "Каталог - Grand Market",
	description:
		"Торговое оборудование для магазинов по лучшим ценам в Атырау, Актау и Актобе",
};

export default function CatalogLayout({ children }: { children: ReactNode }) {
	return <>{children}</>;
}
