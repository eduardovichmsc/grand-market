import { Banner } from "@/app/components/Banner";
import { AboutCompanyComponent } from "@/app/components/AboutCompany";

export default function AboutPage() {
	return (
		<main className="">
			<Banner
				bigText="О компании"
				smallText="Ваш эксперт в мире торгового оборудования"
			/>

			<section className="mx-auto w-2/3 py-28 space-y-36">
				{/* секция - о компаний */}
				<AboutCompanyComponent />

				{/* секция - карта */}
				<div className="text-res-green w-full">
					<div className="float-right w-[40rem] aspect-[5/3] bg-res-light-green"></div>
					<p className="font-medium text-3xl">
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
