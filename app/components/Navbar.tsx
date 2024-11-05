"use client";
import { isSidebarOpen } from "@/app/model/atoms";

import clsx from "clsx";
import { useAtom } from "jotai";
import Image from "next/image";
import Link from "next/link";
// import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export const NavbarLinks = [
	{ title: "О нас", href: "/about" },
	{ title: "Услуги", href: "/services" },
	{ title: "Наши преимущества", href: "/advantages" },
	{ title: "Виды оборудование для бизнеса", href: "/for-business" },
	{ title: "Наши работы", href: "/our-projects" },
	{ title: "Контакты", href: "/contacts" },
];

export const Navbar = () => {
	const [hovered, setHovered] = useState("");
	const [sidebar, setSidebar] = useAtom(isSidebarOpen);

	const toggleSidebar = () => {
		setSidebar((prev) => !prev);
		console.log(sidebar);
	};

	return (
		<div className="flex items-center container py-3 justify-between gap-2 xl:gap-0">
			<div className="relative aspect-[16/7] h-[6rem]">
				<Link href={"/"} className="">
					<Image
						src={"/logo.png"}
						fill
						objectFit="contain"
						alt="logo"
						className=""
					/>
				</Link>
			</div>
			<nav className="hidden lg:flex justify-end items-center xl:basis-3/4 font-normal text-xl gap-3 xl:gap-6">
				{NavbarLinks.map((link, index) => (
					<Link
						key={index}
						href={link.href}
						className={clsx("transition text-res-green xl:pt-1 px-0 2xl:px-2", {
							"text-res-grey": hovered.length > 0 && hovered != link.href,
						})}
						onMouseEnter={() => setHovered(link.href)}
						onMouseLeave={() => setHovered("")}
						onClick={(e) => {
							if (link.href == "/advantages" || link.href == "/services") {
								e.preventDefault();
							}
						}}>
						{link.title}
					</Link>
				))}
			</nav>
			<button
				className="size-14 relative flex flex-col justify-between lg:hidden py-2"
				onClick={toggleSidebar}>
				<div className="w-full h-[4px] bg-res-green rounded-2xl" />
				<div className="w-full h-[4px] bg-res-green rounded-2xl" />
				<div className="w-full h-[4px] bg-res-green rounded-2xl" />
			</button>
		</div>
	);
};
