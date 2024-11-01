import { Banner } from "@/app/components/Banner";

interface GridContentType {
	image?: string;
	title: string;
	body: string;
}
const gridContent: GridContentType[] = [
	{
		title: "Cortina",
		body: "Ларь-бонета Cortina выпускается в двухрежимном исполнении НТ / СТ с возможностью переключение температурных режимов",
	},
	{
		title: "Alpina",
		body: "Со встроенным статическим холодообеспечение выпускается в двухрежимном исполнении HT / CT с возможностью переключение температурных режимов",
	},
	{
		title: "Brenta",
		body: "Холодильная горка на выносном холодообеспечении",
	},
	{
		title: "Planai HT",
		body: "Морозильная горка с кассетными агрегатами",
	},
	{
		title: "Gamma M",
		body: "Оборудование  со встроенным холодоснабжением",
	},
];

export default function ForBusinessPage() {
	return (
		<main className="">
			<Banner
				bigText="Виды Оборудование Для Бизнеса"
				smallText="Ваш эксперт в мире торгового оборудования"
			/>

			<section className="container py-28 space-y-36">
				<div className="grid grid-cols-3 gap-16">
					{gridContent.map((grid, index) => (
						<div
							key={index}
							className="w-full flex flex-col items-center gap-4">
							<div className="w-full aspect-[5/3] rounded-2xl bg-black/10">
								{/* 
                image
              */}
							</div>
							<p className="font-extrabold text-4xl text-center">
								{grid.title}
							</p>
							<p className="font-medium text-xl text-center">{grid.body}</p>
							<button className="rounded-2xl bg-res-green text-white text-xl py-5 px-20">
								Купить
							</button>
						</div>
					))}
				</div>
			</section>
		</main>
	);
}
