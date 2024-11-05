"use client";
import { Hero } from "@/app/components/Hero";
import { ChevronRight, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Map } from "@/app/components/Map";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { title } from "process";

const newProducts = [
	{ title: "Brenta SG", price: "150 000" },
	{ title: "Artica", price: "200 000" },
	{ title: "Nordica", price: "350 000" },
	{ title: "Berg", price: "150 000" },
];

const sponsors = [
	{ title: "Лидер", image: "/sponsors/lider.png" },
	{ title: "Арзан", image: "/sponsors/arzan.png" },
	{ title: "Табыс", image: "/sponsors/tabys1.png" },
	{ title: "Табыс", image: "/sponsors/tabys2.png" },
	{ title: "Береке", image: "/sponsors/bereke1.png" },
	{ title: "Береке", image: "/sponsors/bereke2.png" },
];

export default function Home() {
	return (
		<main className="">
			<Hero />

			<section className="py-28 space-y-96">
				<div className="container" id="advantages">
					<p className="section-title text-res-green">Наши преимущества:</p>
					<div className="inner flex gap-20 h-[890px]">
						<div className="basis-1/2 h-full bg-black rounded-2xl shadow-md relative overflow-hidden flex flex-col justify-center items-center group">
							<Image
								src={"/advantages/high-q.png"}
								fill
								objectFit="cover"
								className="absolute transition group-hover:opacity-90"
								alt=""
							/>
							<div className="relative text-center text-white px-[5%] space-y-2">
								<p className="font-medium text-4xl">Высокое качество</p>
								<p className="font-thin text-2xl">
									Надежные материалы и передовые технологии для долговечной
									работы.
								</p>
							</div>
						</div>
						<div className="basis-1/2 h-full flex flex-col gap-[inherit]">
							<div className="basis-1/2 h-1/2 bg-black group rounded-2xl shadow-md relative overflow-hidden flex flex-col justify-center items-center">
								<Image
									src={"/advantages/qual.png"}
									fill
									objectFit="cover"
									className="absolute transition group-hover:opacity-90"
									alt=""
								/>
								<div className="relative text-center text-white px-[5%] space-y-2">
									<p className="font-medium text-4xl">
										Квалифицированные специалисты
									</p>
									<p className="font-thin text-2xl">
										Профессионалы с опытом для точных и эффективных решений.
									</p>
								</div>
							</div>
							<div className="basis-1/2 h-1/2 flex gap-[inherit]">
								<div className="basis-1/2 h-full bg-black group rounded-2xl shadow-md relative overflow-hidden flex flex-col justify-center items-center">
									<Image
										src={"/advantages/installment.png"}
										fill
										objectFit="cover"
										className="absolute transition group-hover:opacity-90"
										alt=""
									/>
									<div className="relative text-center text-white px-[5%] space-y-2">
										<p className="font-medium text-2xl">Доставка и установка</p>
										<p className="font-thin text-base">
											Быстрая и безопасная доставка с профессиональной
											установкой.
										</p>
									</div>
								</div>
								<div className="basis-1/2 h-full bg-black group rounded-2xl shadow-md relative overflow-hidden flex flex-col justify-center items-center">
									<Image
										src={"/advantages/3d.png"}
										fill
										objectFit="cover"
										className="absolute transition group-hover:opacity-90"
										alt=""
									/>
									<div className="relative text-center text-white px-[5%] space-y-2">
										<p className="font-medium text-2xl">3D дизайн проект</p>
										<p className="font-thin text-base">
											Визуализация будущего оборудования для точного
											планирования.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="bg-res-green container flex flex-col justify-center rounded-2xl py-20 px-12 gap-10">
					<div className="flex justify-between">
						<p className="section-title text-white">Последние поступления : </p>
						<Link
							href={"/our-projects"}
							className="transition flex justify-center items-center place-self-end bg-white rounded-2xl w-60 h-20 gap-1 hover:bg-white/90">
							<p className="font-medium text-res-green text-xl">
								Посмотреть все
							</p>
							<ChevronRight className="text-res-green mt-1" />
						</Link>
					</div>
					<div className="grid grid-cols-4 text-white gap-5">
						{/* place there map */}
						{newProducts.map((item, index) => (
							<div key={index} className="space-y-4">
								<div className="w-full aspect-[6/7] rounded-xl bg-res-light-green"></div>
								<div className="flex justify-between">
									<div className="">
										<p className="uppercase font-medium text-4xl">
											{item.title}
										</p>
										<p className="uppercase text-xl">{item.price} ₸</p>
									</div>
									<button className="aspect-square h-full relative rounded-2xl bg-res-light-green">
										<Plus className="text-res-green size-16 p-2" />
									</button>
								</div>
							</div>
						))}
					</div>
				</div>

				<div className="container flex flex-col">
					<div className="flex justify-between">
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
						className="transition flex justify-center items-center place-self-end bg-res-green rounded-2xl w-60 h-20 gap-1 hover:bg-res-green/90">
						<p className="font-medium text-white text-xl">Посмотреть все</p>
						<ChevronRight className="text-white mt-1" />
					</Link>
					<div className="flex h-full gap-10 mt-10">
						<div className="basis-1/2 flex flex-col gap-[inherit]">
							<div className="w-full aspect-[4/2] bg-res-green/20 rounded-2xl shadow-md relative overflow-hidden">
								<Image src={"/projects/1.png"} fill objectFit="cover" alt="" />
							</div>
							<div className="w-full aspect-[4/2] flex gap-[inherit]">
								<div className="w-1/2 h-full bg-res-green/20 rounded-2xl shadow-md relative overflow-hidden">
									<Image
										src={"/projects/2.png"}
										fill
										objectFit="cover"
										alt=""
									/>
								</div>
								<div className="w-1/2 h-full bg-res-green/20 rounded-2xl shadow-md relative overflow-hidden">
									<Image
										src={"/projects/3.png"}
										fill
										objectFit="cover"
										alt=""
									/>
								</div>
							</div>
						</div>
						<div className="basis-1/2 flex gap-[inherit]">
							<div className="w-1/2 h-full bg-res-green/20 rounded-2xl shadow-md relative overflow-hidden">
								<Image src={"/projects/4.png"} fill objectFit="cover" alt="" />
							</div>
							<div className="w-1/2 h-full flex flex-col gap-[inherit]">
								<div className="w-full h-1/2 bg-res-green/20 rounded-2xl shadow-md relative overflow-hidden">
									<Image
										src={"/projects/5.png"}
										fill
										objectFit="cover"
										alt=""
									/>
								</div>
								<div className="w-full h-1/2 bg-res-green/20 rounded-2xl shadow-md relative overflow-hidden">
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

				<div className="h-[30vh]">
					<p className="section-title text-res-green text-center">
						Наши клиенты
					</p>
					<Swiper
						slidesPerView={5}
						spaceBetween={0}
						pagination={{
							clickable: true,
						}}
						className="h-full">
						{sponsors.map((sponsor, index) => (
							<SwiperSlide key={index} className="">
								<div className="w-1/4 aspect-square">
									<Image src={sponsor.image} fill objectFit="contain" alt="" />
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>

				<div className="h-[30vh]">
					<p className="section-title text-res-green text-center">
						Наши клиенты
					</p>
					<Swiper
						slidesPerView={5}
						spaceBetween={0}
						pagination={{
							clickable: true,
						}}
						className="h-full">
						{sponsors.map((sponsor, index) => (
							<SwiperSlide key={index} className="">
								<div className="w-1/4 aspect-square">
									<Image src={sponsor.image} fill objectFit="contain" alt="" />
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</section>
		</main>
	);
}
