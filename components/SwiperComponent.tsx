"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import { FC } from "react";
import useWindowSize from "@/hooks/useWindowSize";
import { SwiperObjectType } from "@/types/types";

interface SwiperComponentProps {
	sectionTitle: string;
	array: SwiperObjectType[];
}

const SwiperComponent: FC<SwiperComponentProps> = ({ sectionTitle, array }) => {
	const { width } = useWindowSize();

	const safeWidth = width || 1200;

	if (width === undefined) return <div>Загрузка...</div>;

	return (
		<div className="swiper">
			<div className="w-full px-10 sm:container">
				<div className="flex justify-center items-center gap-10 lg:gap-24 pb-10">
					<div className="bg-res-green w-full md:w-36 h-2 rounded-2xl"></div>
					<p className="section-title text-res-green text-nowrap">
						{sectionTitle}
					</p>
					<div className="bg-res-green w-full md:w-36 h-2 rounded-2xl"></div>
				</div>
				<Swiper
					modules={[Autoplay, Pagination]}
					loop={true}
					slidesPerView={safeWidth > 1200 ? 7 : safeWidth > 900 ? 5 : 3.5}
					spaceBetween={safeWidth > 1200 ? 60 : safeWidth > 900 ? 30 : 15}
					autoplay={{
						delay: 2000,
						disableOnInteraction: false,
					}}
					speed={1000}
					className="h-full">
					{array &&
						array.map((item, index) => (
							<SwiperSlide key={index}>
								<div className="aspect-square relative">
									<Image src={item.image} fill objectFit="contain" alt="" />
								</div>
							</SwiperSlide>
						))}
				</Swiper>
			</div>
		</div>
	);
};

export default SwiperComponent;
