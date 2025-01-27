"use client";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";

export const AboutCompanyComponent = () => {
	const [value, setValue] = useState<keyof typeof content>("Описание");

	const content = {
		Описание:
			"В г. Атырау, лидер в области продаж оборудования для торговых точек и HORECA по западному региону Казахстана. Компания также является эксклюзивным дилером ведущих мировых производителей холодильного и морозильного оборудования. Мы реализуем только сертифицированный товар с заводской гарантией и последующим сервисным обслуживанием. Компания предлагает современное POS оборудование и запасные части для холодильного оборудования по выгодным ценам.",
		Миссия:
			"Обеспечивать предприятия Казахстана высококачественным оборудованием для торговли и HORECA, предлагая сертифицированную продукцию с заводской гарантией и профессиональным сервисным обслуживанием.",
		Цель: "Стать ведущим поставщиком торгового и холодильного оборудования в регионе, расширяя ассортимент и улучшая сервис для обеспечения максимального удовлетворения потребностей наших клиентов.",
	} as const;

	return (
		<div className="mx-auto flex flex-col lg:flex-row gap-6">
			{/* левое -- фотографии */}
			<div className="basis-1/2 h-full">
				<div className="w-full h-full flex gap-6">
					{/* левое фото */}
					<div className="relative overflow-hidden w-1/2 h-[40rem] bg-res-green rounded-2xl">
						<Image
							src={"/about/first.png"}
							fill
							objectFit="cover"
							alt="first"
						/>
					</div>

					{/* правый контейнер */}
					<div className="w-1/2 h-full flex flex-col gap-[inherit]">
						{/* верхнее фото */}
						<div className="relative overflow-hidden w-full h-[25rem] bg-res-green rounded-2xl">
							<Image
								src={"/about/second.png"}
								fill
								objectFit="cover"
								alt="second"
							/>
						</div>

						{/* нижний контейнер с текстом */}
						<div className="w-full h-2/5 bg-res-green rounded-2xl flex flex-col p-6 gap-[inherit]">
							<div className="relative overflow-hidden bg-white rounded-full size-20">
								<Image
									src={"/about/vector.svg"}
									fill
									objectFit="contain"
									alt="logo"
									className="p-[20%]"
								/>
							</div>
							<div className="w-full h-[3px] bg-white"></div>
							<p className="font-semibold text-white text-xl">
								Высококачественное оборудование для бизнеса
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* правое - контейнер с информацией */}
			<div className="basis-1/2 h-full flex flex-col gap-5">
				<p className="uppercase font-extrabold text-4xl mt-8 lg:mt-0">
					О компании
				</p>

				{/* кнопки - контейнер */}
				<div className="flex gap-4 xl:gap-2">
					{(Object.keys(content) as Array<keyof typeof content>).map((key) => (
						<button
							key={key}
							className={clsx(
								"transition flex justify-center items-center rounded-2xl px-5 py-2.5 gap-1",
								{
									"text-white bg-res-green": value === key,
								},
								{
									"bg-res-grey/10 text-res-green hover:bg-res-green/20":
										value !== key,
								}
							)}
							onClick={() => setValue(key)}>
							<p className="font-medium text-xl lg:text-base">{key}</p>
						</button>
					))}
				</div>

				{/* текст */}
				<p className="font-medium text-res-green text-2xl lg:text-3xl xl:text-2xl text-justify lg:justify-normal">
					{content[value]}
				</p>
			</div>
		</div>
	);
};
