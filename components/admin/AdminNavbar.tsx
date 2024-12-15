"use client";
import { AdminNavbarLinks } from "@/config/pages.config";
import { isAuthenticated } from "@/model/atoms";
import clsx from "clsx";
import { useSetAtom } from "jotai";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import nookies from "nookies";

export const AdminNavbar = () => {
	const pathname = usePathname();
	const setIsAuthenticated = useSetAtom(isAuthenticated);

	const router = useRouter();

	const handleSignOut = () => {
		nookies.destroy(null, "Authorization", { path: "/" });

		setIsAuthenticated(false);
		router.push("/");
	};

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
							<Link href={link.href} className="w-full">
								<p>{link.title}</p>
							</Link>
						</li>
					))}
					<ul>
						<li className="flex justify-start w-48 px-4 py-1.5 cursor-pointer hover:bg-black/5">
							<button
								className="w-full flex justify-start"
								onClick={handleSignOut}>
								<p>Выйти из аккаунта</p>
							</button>
						</li>
					</ul>
				</ul>
			</div>
		</nav>
	);
};
