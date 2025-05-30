"use client";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const contentData = {
	Описание:
		"GRAND MARKET, лидер в области продаж оборудования для торговых точек и HORECA по западному региону Казахстана, базируется в г. Атырау. Мы являемся эксклюзивным дилером ведущих мировых производителей холодильного и морозильного оборудования. Реализуем только сертифицированный товар с заводской гарантией и последующим сервисным обслуживанием. Компания также предлагает современное POS оборудование и запасные части для холодильного оборудования по выгодным ценам.",
	Миссия:
		"Наша миссия — обеспечивать предприятия Казахстана высококачественным, сертифицированным оборудованием для торговли и HORECA. Мы предлагаем продукцию с заводской гарантией и оказываем профессиональное сервисное обслуживание, способствуя успеху и развитию бизнеса наших клиентов.",
	Цель: "Наша цель — стать ведущим поставщиком торгового и холодильного оборудования в регионе. Мы стремимся постоянно расширять ассортимент и улучшать качество сервиса, чтобы максимально удовлетворять потребности наших клиентов и превосходить их ожидания.",
} as const;

type ContentKey = keyof typeof contentData;

export const AboutCompanyComponent = () => {
	const [activeTab, setActiveTab] = useState<ContentKey>("Описание");

	const textVariants = {
		hidden: { opacity: 0, y: 10 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.3, ease: "easeOut" },
		},
		exit: { opacity: 0, y: -10, transition: { duration: 0.2, ease: "easeIn" } },
	};

	return (
		<div className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-16 items-start">
			{" "}
			{/* Increased gap, items-start for alignment */}
			{/* Left Side -- Image Grid */}
			<div className="w-full lg:w-1/2 xl:w-[55%] flex-shrink-0">
				{" "}
				{/* Responsive width, flex-shrink-0 */}
				<div className="grid grid-cols-2 gap-4 md:gap-6 h-auto md:h-[36rem] lg:h-[40rem] xl:h-[44rem]">
					{" "}
					{/* Use grid for easier layout */}
					{/* Large Left Image */}
					<div className="col-span-1 row-span-2 relative overflow-hidden rounded-xl md:rounded-2xl shadow-lg bg-gray-200">
						<Image
							src={"/about/first.png"}
							fill
							style={{ objectFit: "cover" }}
							alt="Современное торговое оборудование"
							className="transition-transform duration-300 ease-in-out hover:scale-105"
							sizes="(max-width: 768px) 50vw, (max-width: 1024px) 30vw, 25vw"
						/>
					</div>
					{/* Top Right Image */}
					<div className="col-span-1 row-span-1 relative overflow-hidden rounded-xl md:rounded-2xl shadow-lg bg-gray-200 min-h-[15rem] md:min-h-0">
						{" "}
						{/* min-h for mobile */}
						<Image
							src={"/about/second.png"}
							fill
							style={{ objectFit: "cover" }}
							alt="Качественное оборудование для HORECA"
							className="transition-transform duration-300 ease-in-out hover:scale-105"
							sizes="(max-width: 768px) 50vw, (max-width: 1024px) 20vw, 15vw"
						/>
					</div>
					{/* Bottom Right Text Card */}
					<div className="col-span-1 row-span-1 bg-res-green rounded-xl md:rounded-2xl shadow-lg flex flex-col p-4 sm:p-6 justify-between items-start gap-3 sm:gap-4 min-h-[12rem] md:min-h-0">
						{" "}
						{/* min-h for mobile */}
						<div className="relative overflow-hidden bg-white rounded-full size-12 sm:size-16 shrink-0">
							<Image
								src={"/about/vector.svg"}
								fill
								style={{ objectFit: "contain" }}
								alt="Grand Market Logo Accent"
								className="p-2.5 sm:p-3"
							/>
						</div>
						<div className="w-full h-[2px] sm:h-[3px] bg-white/50 rounded-full"></div>{" "}
						{/* Thinner, semi-transparent line */}
						<p className="font-semibold text-white text-base sm:text-lg md:text-xl leading-tight">
							Высококачественное оборудование для вашего бизнеса
						</p>
					</div>
				</div>
			</div>
			{/* Right Side -- Information Container */}
			<div className="w-full lg:w-1/2 xl:w-[45%] flex flex-col gap-5 sm:gap-6 md:gap-8">
				<h2 className="uppercase font-extrabold text-3xl sm:text-4xl text-gray-800 mt-6 lg:mt-0 leading-tight">
					О компании
				</h2>

				<div className="flex flex-wrap gap-2 sm:gap-3 border-b border-gray-200 pb-3 sm:pb-4">
					{(Object.keys(contentData) as Array<ContentKey>).map((key) => (
						<button
							key={key}
							className={clsx(
								"transition-all duration-200 ease-in-out rounded-lg px-4 py-2 sm:px-5 sm:py-2.5 text-sm sm:text-base font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-res-green focus-visible:ring-offset-2 relative",
								{
									"text-white": activeTab === key,
									"text-gray-600 hover:text-res-green hover:bg-res-green/10":
										activeTab !== key,
								}
							)}
							onClick={() => setActiveTab(key)}>
							<span className="relative z-10">{key}</span>
							{activeTab === key && (
								<motion.div
									className="absolute inset-0 bg-res-green rounded-lg z-0"
									layoutId="activeTabPill"
									transition={{ type: "spring", stiffness: 350, damping: 30 }}
								/>
							)}
						</button>
					))}
				</div>

				<div className="relative min-h-[10rem] sm:min-h-[12rem] md:min-h-[15rem]">
					<AnimatePresence mode="wait">
						<motion.p
							key={activeTab}
							variants={textVariants}
							initial="hidden"
							animate="visible"
							exit="exit"
							className="text-gray-700 text-base md:text-lg leading-relaxed text-justify">
							{contentData[activeTab]}
						</motion.p>
					</AnimatePresence>
				</div>
			</div>
		</div>
	);
};
