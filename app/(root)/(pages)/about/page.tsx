import { Banner } from "@/app/components/Banner";
import { AboutCompanyComponent } from "@/app/components/AboutCompany";
import { SwiperComponent } from "@/app/components/SwiperComponent";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "О бизнесе - Grand Market",
	description:
		"Торговое оборудование для магазинов по лучшим ценам в Атырау, Актау и Актобе",
};

export default function AboutPage() {
	return (
		<main className="">
			<Banner
				image="/about/banner.png"
				bigText="О компании"
				smallText="Ваш эксперт в мире торгового оборудования"
			/>

			<section className="mx-auto container max-w-[480px] sm:max-w-[640px] md:max-w-[1270px] py-28 space-y-36">
				{/* секция - о компаний */}
				<AboutCompanyComponent />

				{/* секция - карта */}
				<div className="text-res-green w-full flex flex-col gap-8 lg:block">
					<div className="lg:float-right h-[20rem] md:h-[27.5rem] xl:h-[30rem] aspect-[5/3] lg:ml-6 lg:mb-6 relative w-full md:w-fit">
						<Image
							src={"/map.png"}
							fill
							objectFit="contain"
							alt="Карта Grand-Market"
						/>
					</div>
					<p className="font-medium text-2xl xl:text-3xl">
						<span>
							GRAND MARKET - имеет 3 Филиала в городах Атырау, Актау и Актобе. В
							2023 году наша команда планирует открыть филиал в городе Уральск.
							К 2025 году планируется открытие филиалов в мегаполисах Алматы,
							Шымкент и Астана.
						</span>
						<br />
						<span>
							К 2028 году мы планируем иметь партнеров во всех больших городах
							Казахстана и открыть собственное производство Торгового
							оборудования. В дальнейшем, мы также намерены не стоять на месте и
							выходить нарынок соседних стран.
						</span>
					</p>
				</div>
			</section>
			<SwiperComponent />
		</main>
	);
}
