import { Hero } from "@/components/Hero";
import { ChevronRight, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Map } from "@/components/Map";
import { Metadata } from "next";
import { clients, partners } from "@/config/static";
import dynamic from "next/dynamic";
import { NewProducts } from "@/components/NewProducts";

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

const SwiperComponent = dynamic(() => import("@/components/SwiperComponent"), {
	ssr: true,
});

export default function Home() {
	return (
		<main className="relative z-0">
			<Hero />

			<section className="section-container">
				{/* Сервисы - services */}
				<div className="relative container mt-0 md:-mt-36 xl:-mt-60">
					<span className="absolute -top-60" id="services"></span>

					<div className="grid grid-cols-2 sm:grid-cols-5 gap-5">
						{services.map((service, index) => (
							<div
								key={index}
								className="bg-white aspect-square rounded-2xl shadow-xl flex flex-col justify-center items-center gap-4">
								<div className="w-20 xl:w-28 aspect-square relative">
									<Image
										src={service.image}
										fill
										objectFit="contain"
										alt={service.title}
									/>
								</div>
								<p className="uppercase font-medium text-lg xl:text-xl text-center text-res-green line-clamp-2 w-[95%]">
									{service.title}
								</p>
							</div>
						))}
					</div>
				</div>

				{/* Преимущества - advantages */}
				<div className="relative container">
					<span className="absolute -top-60" id="advantages"></span>

					<p className="section-title text-res-green">Наши преимущества:</p>
					<div className="inner grid *:row-span-1 grid-cols-1 lg:grid-cols-2 grid-rows-2 lg:grid-rows-1 gap-6 md:gap-8 lg:gap-10 xl:gap-14 2xl:gap-10 h-[70rem] md:h-[50rem]">
						<div className="lg:row-span-2 col-span-1 bg-black rounded-2xl shadow-md relative overflow-hidden flex flex-col justify-center items-center group">
							<Image
								src={"/advantages/high-q.png"}
								fill
								objectFit="cover"
								className="absolute transition group-hover:opacity-100 opacity-90"
								alt=""
							/>
							<div className="relative text-center text-white px-[5%] space-y-2">
								<p className="font-medium text-3xl md:text-4xl">
									Высокое качество
								</p>
								<p className="font-thin text-2xl md:text-2xl">
									Надежные материалы и передовые технологии для долговечной
									работы.
								</p>
							</div>
						</div>

						<div className="bg-black rounded-2xl shadow-md relative overflow-hidden flex flex-col justify-center items-center group">
							<Image
								src={"/advantages/qual.png"}
								fill
								objectFit="cover"
								className="absolute transition group-hover:opacity-100 opacity-90"
								alt=""
							/>
							<div className="relative text-center text-white px-[5%] space-y-2">
								<p className="font-medium text-3xl md:text-4xl">
									Квалифицированные специалисты
								</p>
								<p className="font-thin text-2xl md:text-2xl">
									Профессионалы с опытом для точных и эффективных решений.
								</p>
							</div>
						</div>

						<div className="contents md:grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
							<div className="bg-black group rounded-2xl shadow-md relative overflow-hidden flex flex-col justify-center items-center h-48 lg:h-64 xl:h-72">
								<Image
									src={"/advantages/installment.png"}
									fill
									objectFit="cover"
									className="absolute transition group-hover:opacity-100 opacity-90"
									alt=""
								/>
								<div className="relative text-center text-white px-[5%] space-y-2">
									<p className="font-medium sm:text-3xl text-2xl">
										Доставка и установка
									</p>
									<p className="font-thin text-2xl md:text-xl xl:text-base">
										Быстрая и безопасная доставка с профессиональной установкой.
									</p>
								</div>
							</div>
							<div className="bg-black group rounded-2xl shadow-md relative overflow-hidden flex flex-col justify-center items-center h-48 lg:h-64 xl:h-72">
								<Image
									src={"/advantages/3d.png"}
									fill
									objectFit="cover"
									className="absolute transition group-hover:opacity-100 opacity-90"
									alt=""
								/>
								<div className="relative text-center text-white px-[5%] space-y-2">
									<p className="font-medium sm:text-3xl text-2xl">
										3D дизайн проект
									</p>
									<p className="font-thin text-2xl md:text-xl xl:text-base">
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
					<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 text-white gap-10 xl:gap-5">
						{/* map */}
						<NewProducts />
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

				<SwiperComponent sectionTitle="Наши клиенты" array={clients} />
				<SwiperComponent sectionTitle="Наши партнеры" array={partners} />
			</section>
		</main>
	);
}
