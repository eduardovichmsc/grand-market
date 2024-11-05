import { Banner } from "@/app/components/Banner";
import { AboutCompanyComponent } from "@/app/components/AboutCompany";

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
					<div className="lg:float-right h-[20rem] aspect-[5/3] lg:ml-6 lg:mb-6 bg-res-light-green"></div>
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
		</main>
	);
}
