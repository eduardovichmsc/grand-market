"use client";
import { AdminNavbarLinks } from "@/config/pages.config";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const AdminNavbar = () => {
	const pathname = usePathname();

	return (
		<nav className="w-max h-full flex flex-col">
			<div className="">
				<ul className="">
					{AdminNavbarLinks.map((link, index) => (
						<li
							key={index}
							className={clsx(
								"flex justify-start w-48 px-4 py-1.5 cursor-pointer",
								{
									"bg-res-green text-white": pathname === link.href,
								},
								{
									"hover:bg-black/5": pathname !== link.href,
								}
							)}>
							<Link href={link.href}>
								<p>{link.title}</p>
							</Link>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
};
