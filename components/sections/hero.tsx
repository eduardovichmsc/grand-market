"use client";

import { isContactsModalOpen } from "@/model/atoms";
import { useSetAtom } from "jotai";
import Image from "next/image";
import Link from "next/link";

export const Hero = () => {
	const openContactsModal = useSetAtom(isContactsModalOpen);

	const headlineSize = "text-6xl sm:text-5xl lg:text-6xl xl:text-7xl";

	return (
		<div className="relative">
			<div className="bg-gradient-to-bl via-35% from-zinc-50 via-res-green/95 to-res-green flex min-h-[50rem] xl:min-h-[55rem]">
				<div className="container flex flex-col md:flex-row">
					<div className="flex flex-col items-center md:items-stretch justify-center w-full md:w-1/2 h-full gap-12 md:gap-8 xl:gap-10 px-10 md:px-0">
						<h1 className="font-extrabold text-white uppercase">
							<span className={`block ${headlineSize} leading-tight`}>
								Эффективное
							</span>
							<span
								className={`block ${headlineSize} leading-tight mt-0 sm:mt-1`}>
								Оборудование
							</span>
							<span
								className={`block ${headlineSize} leading-tight mt-0 sm:mt-1`}>
								Для Торговли
							</span>
						</h1>
						<p className="font-medium text-res-grey text-xl lg:text-2xl sm:max-w-md md:max-w-lg xl:max-w-xl leading-relaxed">
							Создайте комфортные условия для ваших клиентов с помощью
							проверенных решений.
						</p>
						<div className="flex flex-col sm:flex-row items-center gap-4 md:gap-5 pt-2 sm:pt-4 w-full sm:w-auto">
							<button
								onClick={() => openContactsModal(true)}
								className="w-full sm:w-auto transition-all duration-300 ease-in-out transform hover:scale-[1.03] text-white font-semibold border-2 border-white rounded-lg sm:rounded-xl text-base sm:text-lg px-6 py-3 sm:px-8 sm:py-3.5 hover:bg-white hover:text-res-green focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-res-green text-center">
								Связаться
							</button>
							<Link
								href={"/products"}
								className="w-full sm:w-auto transition-all duration-300 ease-in-out transform hover:scale-[1.03] bg-white text-res-green font-semibold rounded-lg sm:rounded-xl text-base sm:text-lg px-6 py-3 sm:px-8 sm:py-3.5 hover:bg-gray-100 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-res-green focus:ring-offset-2 focus:ring-offset-white text-center">
								Товары
							</Link>
						</div>
					</div>
					<div className="relative hidden md:flex w-full md:w-1/2 h-full items-center">
						<div className="absolute w-[100%] min-h-[976px] left-0 top-60">
							<Image
								src={"/artica.png"}
								width={976}
								height={690}
								objectFit="contain"
								alt=""
							/>
						</div>
						<div className="absolute w-[80%] min-h-[760px] top-0 left-56">
							<Image
								src={"/group1.png"}
								width={790}
								height={860}
								objectFit="contain"
								alt=""
							/>
						</div>
					</div>
				</div>
			</div>
			<div className="">
				<div className=""></div>
			</div>
		</div>
	);
};
