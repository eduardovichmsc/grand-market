"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import Image from "next/image";

const sponsors = [
	{ title: "Лидер", image: "/sponsors/lider.png" },
	{ title: "Арзан", image: "/sponsors/arzan.png" },
	{ title: "Табыс", image: "/sponsors/tabys1.png" },
	{ title: "Табыс", image: "/sponsors/tabys2.png" },
	{ title: "Береке", image: "/sponsors/bereke1.png" },
	{ title: "Береке", image: "/sponsors/bereke2.png" },
	{ title: "Дина", image: "/sponsors/dina.png"}
];

const partners = [
	{ title: "Levin", image: "/partners/levin.png"},
	{ title: "Frostor", image: "/partners/frostor.png"},
	{ title: "Unox", image: "/partners/unox.png"},
	{ title: "Ariada", image: "/partners/ariada.png"},
	{ title: "Bonvini", image: "/partners/bonvini.png"},
	{ title: "Abat", image: "/partners/abat.png"},
	{ title: "Snezh", image: "/partners/snezh.png"}
]

export function SwiperComponent() {
    return (
		<div className="swiper">
			<div className="h-[30rem]">
				<div className="flex justify-center items-center gap-24">
					<div className="bg-res-green w-36 h-2 rounded-2xl"></div>
					<p className="section-title text-res-green">
						Наши клиенты
					</p>
				<div className="bg-res-green w-36 h-2 rounded-2xl"></div>
			</div>
			<Swiper
				modules={[Autoplay, Pagination]}
				loop={true}
				slidesPerView={6}
				spaceBetween={15}
				autoplay={{
					delay: 2000,
					disableOnInteraction: false,
				}}
				speed={1000}
				
				className="h-full"
			>
				{sponsors.map((sponsor, index) => (
					<SwiperSlide key={index}>
						<div className="w-1/4 aspect-square">
							<Image src={sponsor.image} fill objectFit="contain" alt="" />
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
		<div className="h-[30rem] mt-10">
			<div className="flex justify-center items-center gap-24">
				<div className="bg-res-green w-36 h-2 rounded-2xl"></div>
				<p className="section-title text-res-green">
					Наши партнеры
				</p>
			<div className="bg-res-green w-36 h-2 rounded-2xl"></div>
		</div>
			<Swiper
				modules={[Autoplay, Pagination]}
				loop={true}
				slidesPerView={6}
				spaceBetween={15}
				autoplay={{
					delay: 2000,
					disableOnInteraction: false,
				}}
				speed={1000}
				
				className="h-full"
			>
				{partners.map((partner, index) => (
					<SwiperSlide key={index}>
						<div className="w-1/4 aspect-square">
							<Image src={partner.image} fill objectFit="contain" alt="" />
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	</div>
	)
}
