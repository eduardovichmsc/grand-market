"use client";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
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

	return (
		<div className="flex container py-3">
			<div className="relative h-[85px] basis-1/4">
				<Link href={"/"} className="">
					<Image
						src={"/logo.png"}
						fill
						objectFit="contain"
						alt="logo"
						className="py-2"
					/>
				</Link>
			</div>
			<nav className="flex justify-end items-center basis-3/4 font-normal text-xl gap-6">
				{NavbarLinks.map((link, index) => (
					<Link
						key={index}
						href={link.href}
						className={clsx("transition text-res-green pt-1 px-2", {
							"text-res-grey": hovered.length > 0 && hovered != link.href,
						})}
						onMouseEnter={() => setHovered(link.href)}
						onMouseLeave={() => setHovered("")}>
						{link.title}
					</Link>
				))}
			</nav>
		</div>
	);
};
