"use client";

import { isContactsModalOpen } from "@/model/atoms";
import { useSetAtom } from "jotai";
import Image from "next/image";
import Link from "next/link";

export const Hero = () => {
	const openContactsModal = useSetAtom(isContactsModalOpen);

	return (
		<div className="relative">
			<div className="bg-res-green flex min-h-[50rem] xl:min-h-[55rem]">
				<div className="container flex flex-col md:flex-row">
					<div className="flex flex-col items-center md:items-stretch justify-center w-full md:w-1/2 h-full gap-12 md:gap-8 xl:gap-10 px-10 md:px-0">
						<div className="font-extrabold text-white *:leading-tight">
							<p className="text-big">Эффективное</p>
							<p className="text-big">Оборудование</p>
							<p className="text-big">Для Торговли</p>
						</div>
						<p className="font-medium text-center md:text-start text-res-grey text-2xl">
							Создайте комфортные условия для ваших клиентов с помощью
							проверенных решений.
						</p>
						<div className="w-full md:w-fit flex flex-col md:flex-row gap-4 md:gap-[inherit]">
							<button className="transition flex justify-center items-center border-2 border-res-white rounded-2xl aspect-[16/5] h-20 hover:opacity-90">
								<p
									className="font-medium text-white text-3xl"
									onClick={() => openContactsModal(true)}>
									Связаться
								</p>
							</button>
							<Link
								href={"/products"}
								className="transition flex justify-center items-center sm:place-self-end bg-white rounded-2xl w-full md:w-fit sm:aspect-[16/5] h-20 gap-1 hover:bg-white/90 hover:opacity-90">
								<p className="font-medium text-res-green text-3xl">Товары</p>
							</Link>
						</div>
					</div>
					<div className="hidden md:flex relative w-full md:w-1/2 h-full items-center">
						<div className="absolute w-[100%] min-h-[976px] left-0 top-60">
							<Image
								src={"/artica.png"}
								width={976}
								height={690}
								objectFit="contain"
								alt=""
							/>
						</div>
						<div className="absolute w-[80%] min-h-[760px] top-0 -right-[4.25rem]">
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
