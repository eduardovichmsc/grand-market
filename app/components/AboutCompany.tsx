"use client";
import { useState } from "react";

export const AboutCompanyComponent = () => {
	const [value, setValue] = useState("Описание");

	const content = {
		Описание:
			"В г. Атырау, лидер в области продаж оборудования для торговых точек и HORECA по западному региону Казахстана. Компания также является эксклюзивным дилером ведущих мировых производителей холодильного и морозильного оборудования. Мы реализуем только сертифицированный товар с заводской гарантией и последующим сервисным обслуживанием. Компания предлагает современное POS оборудование и запасные части для холодильного оборудования по выгодным ценам.",
		Миссия:
			"Обеспечивать предприятия Казахстана высококачественным оборудованием для торговли и HORECA, предлагая сертифицированную продукцию с заводской гарантией и профессиональным сервисным обслуживанием.",
		Цель: "Стать ведущим поставщиком торгового и холодильного оборудования в регионе, расширяя ассортимент и улучшая сервис для обеспечения максимального удовлетворения потребностей наших клиентов.",
	};

	return (
		<div className="h-[70vh] mx-auto flex gap-6">
			{/* левое -- фотографий */}
			<div className="basis-1/2 h-full">
				<div className="w-full h-full flex gap-6">
					{/* левое фото */}
					<div className="w-1/2 h-4/5 bg-res-green rounded-2xl"></div>

					{/* правый контейнер */}
					<div className="w-1/2 h-full flex flex-col gap-[inherit]">
						{/* верхнее фото */}
						<div className="w-full h-3/5 bg-res-green rounded-2xl"></div>

						{/* нижний контейнер с текстом */}
						<div className="w-full h-2/5 bg-res-green rounded-2xl flex flex-col p-6 gap-[inherit]">
							<div className="bg-white rounded-full size-20"></div>
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
				<p className="uppercase font-extrabold text-4xl">О компании</p>

				{/* кнопки - контейнер */}
				<div className="flex gap-2">
					{Object.keys(content).map((key) => (
						<button
							key={key}
							className={`flex justify-center items-center rounded-2xl w-32 h-10 gap-1 ${
								value === key
									? "bg-res-green text-white"
									: "bg-res-grey/10 text-res-green"
							}`}
							onClick={() => setValue(key)}>
							<p className="font-medium text-base">{key}</p>
						</button>
					))}
				</div>

				{/* текст */}
				<p className="font-medium text-res-green text-3xl">{content[value]}</p>
			</div>
		</div>
	);
};
