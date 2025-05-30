import { Hero } from "@/components/sections/hero";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Map } from "@/components/sections/map";
import { Metadata } from "next";
import { clients, partners } from "@/config/static";
import dynamic from "next/dynamic";
import { RecentProducts } from "@/components/sections/recent_products";

export const metadata: Metadata = {
	title: "Торговое оборудование для магазинов - Grand Market",
	description:
		"Торговое оборудование для магазинов по лучшим ценам в Атырау, Актау и Актобе",
};

const services = [
	{ title: "Продажа торгового оборудования", image: "/services/cart.svg" },
	{ title: "Замеры", image: "/services/zamery.svg" },
	{ title: "3D моделирование", image: "/services/user.svg" },
	{ title: "POS оборудование", image: "/services/pos.svg" },
	{ title: "Монтаж и доставка", image: "/services/truck.svg" },
];

const Carousel = dynamic(() => import("@/components/sections/carousel"), {
	ssr: true,
});

export default function Home() {
	return (
		<main className="relative z-0">
			<Hero />

			<section className="section-container">
				{/* Сервисы - services */}
				<div className="relative container mt-0 md:-mt-24 lg:-mt-36 xl:-mt-48">
					<span className="absolute -top-24 md:-top-32" id="services"></span>{" "}
					<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6">
						{services.map((service, index) => (
							<div
								key={index}
								className="bg-white aspect-[3/4] sm:aspect-square rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 flex flex-col justify-center items-center gap-3 md:gap-4 p-4 text-center">
								<div className="w-16 h-16 md:w-20 md:h-20 xl:w-24 xl:h-24 relative">
									<Image
										src={service.image}
										fill
										style={{ objectFit: "contain" }}
										alt={service.title}
									/>
								</div>
								<p className="font-semibold text-sm md:text-base xl:text-lg text-res-green line-clamp-2 leading-tight">
									{service.title}
								</p>
							</div>
						))}
					</div>
				</div>

				{/* Преимущества - advantages */}
				<div className="relative container">
					<span className="absolute -top-24 md:-top-32" id="advantages"></span>
					<h2 className="section-title text-res-green mb-10 md:mb-12 lg:mb-16">
						Наши преимущества:
					</h2>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
						{/* Card 1: Высокое качество */}
						<div className="lg:row-span-2 bg-gray-900 rounded-2xl shadow-lg relative overflow-hidden group p-8 md:p-10 flex flex-col justify-end min-h-[300px] md:min-h-[400px] lg:min-h-[auto]">
							<Image
								src={"/advantages/high-q.png"}
								fill
								style={{ objectFit: "cover" }}
								className="absolute inset-0 transition-all duration-500 ease-in-out opacity-80 group-hover:opacity-100 group-hover:scale-105"
								alt="Высокое качество оборудования"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/25 to-transparent group-hover:from-black/50"></div>{" "}
							<div className="relative text-white space-y-2 md:space-y-3">
								<h3 className="font-semibold text-2xl md:text-3xl lg:text-4xl">
									Высокое качество
								</h3>
								<p className="text-gray-200 text-base md:text-lg lg:text-xl leading-relaxed">
									Надежные материалы и передовые технологии для долговечной
									работы.
								</p>
							</div>
						</div>

						{/* Card 2: Квалифицированные специалисты */}
						<div className="bg-gray-900 rounded-2xl shadow-lg relative overflow-hidden group p-8 md:p-10 flex flex-col justify-end min-h-[300px] md:min-h-[250px]">
							<Image
								src={"/advantages/qual.png"}
								fill
								style={{ objectFit: "cover" }}
								className="absolute inset-0 transition-all duration-500 ease-in-out opacity-80 group-hover:opacity-100 group-hover:scale-105"
								alt="Квалифицированные специалисты"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/25 to-transparent group-hover:from-black/50"></div>
							<div className="relative text-white space-y-2 md:space-y-3">
								<h3 className="font-semibold text-2xl md:text-3xl">
									Квалифицированные специалисты
								</h3>
								<p className="text-gray-200 text-base md:text-lg leading-relaxed">
									Профессионалы с опытом для точных и эффективных решений.
								</p>
							</div>
						</div>

						<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
							{/* Card 3: Доставка и установка */}
							<div className="bg-gray-900 rounded-2xl shadow-lg relative overflow-hidden group p-6 md:p-8 flex flex-col justify-end min-h-[200px] md:min-h-[250px]">
								<Image
									src={"/advantages/installment.png"}
									fill
									style={{ objectFit: "cover" }}
									className="absolute inset-0 transition-all duration-500 ease-in-out opacity-80 group-hover:opacity-100 group-hover:scale-105"
									alt="Доставка и установка"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/25 to-transparent group-hover:from-black/50"></div>
								<div className="relative text-white space-y-1 md:space-y-2">
									<h3 className="font-semibold text-xl md:text-2xl">
										Доставка и установка
									</h3>
									<p className="text-gray-200 text-sm md:text-base leading-relaxed">
										Быстрая и безопасная доставка с профессиональной установкой.
									</p>
								</div>
							</div>
							{/* Card 4: 3D дизайн проект */}
							<div className="bg-gray-900 rounded-2xl shadow-lg relative overflow-hidden group p-6 md:p-8 flex flex-col justify-end min-h-[200px] md:min-h-[250px]">
								<Image
									src={"/advantages/3d.png"}
									fill
									style={{ objectFit: "cover" }}
									className="absolute inset-0 transition-all duration-500 ease-in-out opacity-80 group-hover:opacity-100 group-hover:scale-105"
									alt="3D дизайн проект"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/25 to-transparent group-hover:from-black/50"></div>
								<div className="relative text-white space-y-1 md:space-y-2">
									<h3 className="font-semibold text-xl md:text-2xl">
										3D дизайн проект
									</h3>
									<p className="text-gray-200 text-sm md:text-base leading-relaxed">
										Визуализация будущего оборудования для точного планирования.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Последние поступления - new products */}
				<div className="bg-res-green container flex flex-col justify-center rounded-2xl py-14 px-12 gap-10">
					<div className="flex flex-col sm:flex-row gap-[inherit] sm:gap-0 justify-between items-center">
						<p className="section-title text-white">Последние поступления : </p>
						<Link
							href={"/products"}
							className="transition flex justify-center items-center sm:place-self-end bg-white rounded-2xl w-full sm:w-fit sm:aspect-[16/5] h-20 gap-1 hover:bg-white/90">
							<p className="font-medium text-res-green text-xl">
								Посмотреть все
							</p>
							<ChevronRight className="text-res-green mt-1" />
						</Link>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 text-white gap-10 xl:gap-4">
						<RecentProducts />
					</div>
				</div>

				{/* Pеализованные проекты - projects */}
				<div className="container flex flex-col gap-10 md:gap-0">
					<div className="flex flex-col md:flex-row justify-between gap-[inherit]">
						<div className="basis-2/5">
							<p className="section-title text-res-green">
								Наши реализованные проекты :
							</p>
						</div>
						<div className="basis-3/5">
							<p className="font-medium text-2xl">
								Доверие наших клиентов — основа всех достижений, которые мы
								создали вместе. Мы реализуем проекты, которые не только
								оправдывают ожидания, но и превосходят их, создавая новые
								стандарты
							</p>
						</div>
					</div>
					<Link
						href={"/our-projects"}
						className="transition flex justify-center items-center md:place-self-end bg-res-green rounded-2xl aspect-[16/5] h-20 gap-1 hover:bg-res-green/90">
						<p className="font-medium text-white text-xl">Посмотреть все</p>
						<ChevronRight className="text-white mt-1" />
					</Link>
					<div className="flex flex-col md:flex-row h-full gap-10 md:gap-6 md:mt-10">
						<div className="basis-full md:basis-1/2 flex flex-col gap-6">
							<div className="transition-all opacity-90 hover:opacity-100 w-full aspect-[4/2] bg-res-green/20 rounded-2xl shadow-md relative overflow-hidden">
								<Image src={"/projects/1.png"} fill objectFit="cover" alt="" />
							</div>
							<div className="w-full aspect-[4/2] flex gap-6">
								<div className="transition-all opacity-90 hover:opacity-100 w-1/2 h-full bg-res-green/20 rounded-2xl shadow-md relative overflow-hidden">
									<Image
										src={"/projects/2.png"}
										fill
										objectFit="cover"
										alt=""
									/>
								</div>
								<div className="transition-all opacity-90 hover:opacity-100 w-1/2 h-full bg-res-green/20 rounded-2xl shadow-md relative overflow-hidden">
									<Image
										src={"/projects/3.png"}
										fill
										objectFit="cover"
										alt=""
									/>
								</div>
							</div>
						</div>

						<div className="basis-full md:basis-1/2 flex flex-col md:flex-row gap-6">
							<div className="transition-all opacity-90 hover:opacity-100 w-full md:w-1/2 h-full bg-res-green/20 rounded-2xl shadow-md relative overflow-hidden">
								<Image src={"/projects/4.png"} fill objectFit="cover" alt="" />
							</div>
							<div className="w-full md:w-1/2 h-full flex flex-col gap-6">
								<div className="transition-all opacity-90 hover:opacity-100 w-full h-1/2 bg-res-green/20 rounded-2xl shadow-md relative overflow-hidden">
									<Image
										src={"/projects/5.png"}
										fill
										objectFit="cover"
										alt=""
									/>
								</div>
								<div className="transition-all opacity-90 hover:opacity-100 w-full h-1/2 bg-res-green/20 rounded-2xl shadow-md relative overflow-hidden">
									<Image
										src={"/projects/6.png"}
										fill
										objectFit="cover"
										alt=""
									/>
								</div>
							</div>
						</div>
					</div>
				</div>

				<Map />

				<div className="">
					<Carousel sectionTitle="Наши клиенты" array={clients} />
					<Carousel sectionTitle="Наши партнеры" array={partners} />
				</div>
			</section>
		</main>
	);
}
