import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
	title: "Каталог - Grand Market",
	description:
		"Торговое оборудование для магазинов по лучшим ценам в Атырау, Актау и Актобе",
};
export default function CatalogLayout({ children }: { children: ReactNode }) {
	return <>{children}</>;
}
