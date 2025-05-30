import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
	title: "Наши проекты - Grand Market",
	description:
		"Ознакомьтесь с реализованными проектами Grand Market в сфере торгового оборудования.",
};

export default function OurProjectsLayout({
	children,
}: {
	children: ReactNode;
}) {
	return children;
}
