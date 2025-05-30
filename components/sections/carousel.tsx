"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import useWindowSize from "@/hooks/useWindowSize";
import { SwiperObjectType } from "@/types/types";

interface Props {
	sectionTitle: string;
	array: SwiperObjectType[];
	perView?: number;
}

const Carousel = ({ sectionTitle, array, perView = 6 }: Props) => {
	const { width } = useWindowSize();
	const currentScreenWidth = width || 0;

	if (currentScreenWidth === 0 && typeof window !== "undefined") {
	}
	if (!array || array.length === 0) {
		return (
			<div className="container py-10 text-center text-gray-500">
				Нет элементов для отображения.
			</div>
		);
	}

	let slidesPerViewToShow;
	let spaceBetweenSlides;

	if (currentScreenWidth > 1280) {
		// xl and more
		slidesPerViewToShow = perView;
		spaceBetweenSlides = 40;
	} else if (currentScreenWidth > 1024) {
		// lg
		slidesPerViewToShow = Math.min(perView, 5);
		spaceBetweenSlides = 30;
	} else if (currentScreenWidth > 768) {
		// md
		slidesPerViewToShow = 4;
		spaceBetweenSlides = 20;
	} else if (currentScreenWidth > 640) {
		// sm
		slidesPerViewToShow = 3.5;
		spaceBetweenSlides = 15;
	} else {
		// xs
		slidesPerViewToShow = 2.5;
		spaceBetweenSlides = 10;
	}

	return (
		<div className="py-12 md:py-16">
			<div className="container">
				<div className="flex items-center gap-4 md:gap-6 lg:gap-8 mb-8 md:mb-10 lg:mb-12">
					<div className="flex-grow h-0.5 bg-res-green/30 rounded-full"></div>
					<h2 className="section-title text-res-green text-center shrink-0">
						{sectionTitle}
					</h2>
					<div className="flex-grow h-0.5 bg-res-green/30 rounded-full"></div>
				</div>
				<Swiper
					modules={[Autoplay, Pagination]}
					loop={array.length > slidesPerViewToShow}
					slidesPerView={slidesPerViewToShow}
					spaceBetween={spaceBetweenSlides}
					autoplay={{
						delay: 2500,
						disableOnInteraction: false,
						pauseOnMouseEnter: true,
					}}
					speed={800}
					className="cursor-grab !pb-10 md:!pb-12"
					pagination={{
						clickable: true,
						dynamicBullets: true,
						el: ".swiper-custom-pagination",
					}}>
					{array.map((item, index) => (
						<SwiperSlide
							key={item.title || index}
							className="flex justify-center items-center">
							<div className="aspect-video sm:aspect-square w-full max-w-[150px] sm:max-w-[180px] md:max-w-[200px] relative group transition-opacity duration-300 hover:opacity-80">
								<Image
									src={item.image}
									fill
									className="object-contain"
									alt={item.title || sectionTitle + " " + (index + 1)}
									sizes="(max-width: 640px) 30vw, (max-width: 1024px) 20vw, 15vw"
								/>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
};

export default Carousel;
