import { BannerDefault } from "@/components/banner/default";
import { AboutCompanyComponent } from "@/components/sections/about_company";
import { clients, partners } from "@/config/static";
import Image from "next/image";
import { Metadata } from "next";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
	title: "О компании - Grand Market",
	description:
		"Узнайте больше о Grand Market: вашем эксперте в мире торгового оборудования в Атырау, Актау и Актобе.",
};

const CarouselComponent = dynamic(
	() => import("@/components/sections/carousel"),
	{
		ssr: true,
	}
);

export default function AboutPage() {
	return (
		<main className="bg-gray-50/50">
			<BannerDefault
				image="/banner/about.png"
				bigText="О компании"
				smallText="Ваш эксперт в мире торгового оборудования"
			/>
			<section className="section-container space-y-16 md:space-y-24 lg:space-y-32">
				<div className="container space-y-16 md:space-y-24 lg:space-y-32">
					<AboutCompanyComponent />

					{/* Map & Expansion Plans Section */}
					<div className="flex flex-col lg:flex-row-reverse items-center gap-8 md:gap-12 lg:gap-16">
						{/* Map Image */}
						<div className="w-full lg:w-1/2 xl:w-2/5 flex-shrink-0">
							<div className="relative aspect-[4/3] sm:aspect-[16/10] rounded-xl shadow-lg overflow-hidden bg-gray-100">
								<Image
									src={"/map.png"}
									fill
									style={{ objectFit: "contain" }}
									alt="Карта филиалов Grand-Market в Казахстане"
									className="p-2 sm:p-4"
								/>
							</div>
						</div>

						{/* Text Content for Expansion */}
						<div className="w-full lg:w-1/2 xl:w-3/5 space-y-6">
							<h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-res-green leading-tight">
								Наши планы по расширению
							</h2>
							<div className="space-y-4 text-gray-700 text-base md:text-lg leading-relaxed">
								<p>
									<strong className="text-gray-800">GRAND MARKET</strong>{" "}
									активно развивается, имея 3 филиала в городах Атырау, Актау и
									Актобе. В 2023 году наша команда планирует открыть филиал в
									городе Уральск.
								</p>
								<p>
									К 2025 году мы стремимся расширить наше присутствие в
									мегаполисах Алматы, Шымкент и Астана, делая качественное
									торговое оборудование доступнее по всей стране.
								</p>
								<p>
									Наша долгосрочная цель к 2028 году — наладить партнерские
									отношения во всех крупных городах Казахстана и запустить{" "}
									<strong className="text-gray-800">
										собственное производство
									</strong>{" "}
									торгового оборудования. В дальнейшем мы также намерены не
									останавливаться на достигнутом и осваивать рынки соседних
									стран.
								</p>
							</div>
						</div>
					</div>
				</div>

				<div className="space-y-16 md:space-y-24 lg:space-y-32">
					<CarouselComponent
						sectionTitle="Наши клиенты"
						array={clients}
						perView={5}
					/>
					<CarouselComponent
						sectionTitle="Наши партнеры"
						array={partners}
						perView={5}
					/>
				</div>
			</section>
		</main>
	);
}
