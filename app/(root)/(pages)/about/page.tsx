import { Banner } from "@/components/banner/Banner";
import { AboutCompanyComponent } from "@/components/sections/about_company";
import { clients, partners } from "@/config/static";
import Image from "next/image";
import { Metadata } from "next";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
	title: "О бизнесе - Grand Market",
	description:
		"Торговое оборудование для магазинов по лучшим ценам в Атырау, Актау и Актобе",
};

const SwiperComponent = dynamic(() => import("@/components/SwiperComponent"), {
	ssr: true,
});

export default function AboutPage() {
	return (
		<main>
			{/* Banner Section */}
			<Banner
				image="/about/banner.png"
				bigText="О компании"
				smallText="Ваш эксперт в мире торгового оборудования"
			/>

			<section className="section-container">
				<div className="mx-auto container max-w-[480px] sm:max-w-[640px] md:max-w-[1270px] space-y-36">
					{/* About Company Section */}
					<AboutCompanyComponent />

					{/* Map Section */}
					<div className="text-res-green w-full flex flex-col lg:flex-row-reverse gap-8">
						<div className="h-[20rem] md:h-[27.5rem] xl:h-[30rem] aspect-[4/3] lg:ml-6 lg:mb-6 relative w-full md:w-fit">
							<Image
								src={"/map.png"}
								fill
								objectFit="contain"
								alt="Карта Grand-Market"
							/>
						</div>
						<p className="font-medium text-2xl lg:text-3xl xl:text-2xl text-justify lg:justify-normal">
							<span>
								GRAND MARKET - имеет 3 Филиала в городах Атырау, Актау и Актобе.
								В 2023 году наша команда планирует открыть филиал в городе
								Уральск. К 2025 году планируется открытие филиалов в мегаполисах
								Алматы, Шымкент и Астана.
							</span>
							<br />
							<span>
								К 2028 году мы планируем иметь партнеров во всех больших городах
								Казахстана и открыть собственное производство Торгового
								оборудования. В дальнейшем, мы также намерены не стоять на месте
								и выходить на рынок соседних стран.
							</span>
						</p>
					</div>
				</div>

				{/* Clients and Partners Slider Sections */}
				<SwiperComponent sectionTitle="Наши клиенты" array={clients} />
				<SwiperComponent sectionTitle="Наши партнеры" array={partners} />
			</section>
		</main>
	);
}
