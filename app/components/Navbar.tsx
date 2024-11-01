"use client";
import Link from "next/link";

export const NavbarLinks = [
	{ title: "О нас", href: "/about" },
	{ title: "Услуги", href: "/services" },
	{ title: "Наши преимущества", href: "/advantages" },
	{ title: "Виды оборудование для бизнеса", href: "/for-business" },
	{ title: "Наши работы", href: "/our-works" },
	{ title: "Контакты", href: "/contacts" },
];

export const Navbar = () => {
	return (
		<div className="flex container py-2">
			<div className="bg-res-green relative w-48 h-[85px] basis-1/4">
				{/* <Image
					src={"/logo.png"}
					fill
					objectFit="contain"
					alt="logo"
					className=""
				/> */}
			</div>
			<nav className="flex justify-end items-center text-res-green basis-3/4 font-normal text-xl gap-6">
				{NavbarLinks.map((link, index) => (
					<Link key={index} href={link.href} className="pt-3 px-2">
						{link.title}
					</Link>
				))}
			</nav>
		</div>
	);
};
