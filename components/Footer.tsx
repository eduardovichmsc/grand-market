"use client";
import { NavbarLinks } from "@/config/pages.config";
import { isAuthModalOpen } from "@/model/atoms";

import { useSetAtom } from "jotai";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
	const setIsOpen = useSetAtom(isAuthModalOpen);

	return (
		<footer className="container py-10 space-y-10 mt-10">
			<div className="flex flex-col sm:flex-row flex-wrap lg:flex-nowrap justify-between h-full gap-y-14 md:gap-14">
				<div className="basis-full lg:basis-1/4">
					<Link href={"/"} className="relative block aspect-[16/7] h-[7rem]">
						<Image
							src={"/logo.png"}
							fill
							objectFit="contain"
							alt="logo"
							className=""
						/>
					</Link>
				</div>
				<div className="basis-full md:basis-1/4 flex flex-col gap-8 justify-center sm:justify-stretch">
					<p className="text-res-green font-extrabold text-2xl">Информация</p>
					<div className="flex justify-center md:justify-stretch flex-col gap-4 text-xl text-res-green">
						{NavbarLinks.map((item) => (
							<Link
								key={item.title}
								href={item.href}
								className="transition w-fit hover:text-res-green/60">
								{item.title}
							</Link>
						))}
						<button
							className="w-fit text-res-green hover:underline"
							onClick={() => setIsOpen((prev) => !prev)}
							aria-label="Войти в аккаунт">
							Войти в аккаунт
						</button>
					</div>
				</div>
				<div className="basis-full md:basis-1/4 flex flex-col gap-8 justify-center sm:justify-stretch">
					<p className="text-res-green font-extrabold text-2xl">Каталог</p>
					<div className="flex justify-center md:justify-stretch flex-col gap-4 text-xl text-res-green">
						<Link
							href={"/about"}
							className="transition w-fit hover:text-res-green/60">
							Фронтальные стеллажи
						</Link>
						<Link
							href={"/about"}
							className="transition w-fit hover:text-res-green/60">
							Торговые стеллажи
						</Link>
						<Link
							href={"/about"}
							className="transition w-fit hover:text-res-green/60">
							Торговое оборудование
						</Link>
						<Link
							href={"/about"}
							className="transition w-fit hover:text-res-green/60">
							Кухонное оборудование
						</Link>
						<Link
							href={"/about"}
							className="transition w-fit hover:text-res-green/60">
							Холодильное оборудование
						</Link>
						<Link
							href={"/about"}
							className="transition w-fit hover:text-res-green/60">
							Витрины
						</Link>
						<Link
							href={"/about"}
							className="transition w-fit hover:text-res-green/60">
							Кассовые боксы
						</Link>
						<Link
							href={"/about"}
							className="transition w-fit hover:text-res-green/60">
							Паллетные стеллажи
						</Link>
						<Link
							href={"/about"}
							className="transition w-fit hover:text-res-green/60">
							Нейтральное оборудование
						</Link>
					</div>
				</div>
				<div className="basis-full md:basis-1/4 flex flex-col gap-8 justify-center sm:justify-stretch">
					<p className="text-res-green font-extrabold text-2xl">Контакты</p>
					<div className="flex justify-center md:justify-stretch flex-col gap-4 text-xl text-res-green">
						<Link
							href={"/about"}
							className="transition w-fit hover:text-res-green/60">
							Атырау - Курмангазы 106
						</Link>
						<Link
							href={"/about"}
							className="transition w-fit hover:text-res-green/60">
							Актау - мкр 29а, 112 / 2
						</Link>
						<Link
							href={"/about"}
							className="transition w-fit hover:text-res-green/60">
							Актобе - ул. Нокина 34А
						</Link>
					</div>
				</div>
			</div>

			<div className="w-full min-h-[3px] bg-res-green"></div>

			<p className="text-left lg:text-right text-res-green">
				сделано @joinway.24
			</p>
		</footer>
	);
};
