import { Hero } from "@/app/components/Hero";
import { ChevronRight, Plus } from "lucide-react";
import Image from "next/image";

const newProducts = [
	{ title: "Brenta SG", price: "150 000" },
	{ title: "Artica", price: "200 000" },
	{ title: "Nordica", price: "350 000" },
	{ title: "Berg", price: "150 000" },
];

export default function Home() {
	return (
		<main className="">
			<Hero />

			<section className="py-28 space-y-36">
				<div className="container">
					<p className="section-title text-res-green">Наши преимущества:</p>
					<div className="inner flex gap-20 h-[890px]">
						<div className="basis-1/2 h-full bg-black rounded-2xl shadow-md relative overflow-hidden flex flex-col justify-center items-center group">
							<Image
								src={"/advantages/high-q.png"}
								fill
								objectFit="cover"
								className="absolute transition group-hover:scale-[1.01] group-hover:opacity-90"
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
									className="absolute transition group-hover:scale-[1.01] group-hover:opacity-90"
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
										className="absolute transition group-hover:scale-[1.01] group-hover:opacity-90"
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
										className="absolute transition group-hover:scale-[1.01] group-hover:opacity-90"
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
					<p className="section-title text-white">Последние поступления : </p>
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
					<button className="flex justify-center items-center place-self-end bg-res-green rounded-2xl w-60 h-20 gap-1">
						<p className="font-medium text-white text-xl">Посмотреть все</p>
						<ChevronRight className="text-white mt-1" />
					</button>
					<div className="flex h-full gap-10 mt-10">
						<div className="basis-1/2 flex flex-col gap-[inherit]">
							<div className="w-full aspect-[4/2] bg-res-green/20 rounded-2xl shadow-md"></div>
							<div className="w-full aspect-[4/2] flex gap-[inherit]">
								<div className="w-1/2 h-full bg-res-green/20 rounded-2xl shadow-md"></div>
								<div className="w-1/2 h-full bg-res-green/20 rounded-2xl shadow-md"></div>
							</div>
						</div>
						<div className="basis-1/2 flex gap-[inherit]">
							<div className="w-1/2 h-full bg-res-green/20 rounded-2xl shadow-md"></div>
							<div className="w-1/2 h-full flex flex-col gap-[inherit]">
								<div className="w-full h-1/2 bg-res-green/20 rounded-2xl shadow-md"></div>
								<div className="w-full h-1/2 bg-res-green/20 rounded-2xl shadow-md"></div>
							</div>
						</div>
					</div>
				</div>

				<div className="container">
					<p className="section-title text-res-green">Наши контакты:</p>
					<div className="flex h-full font-medium text-xl gap-14">
						<div className="rounded-2xl bg-res-green basis-1/3 h-full flex flex-col justify-center p-10 gap-10">
							{[1, 2, 3].map((index) => (
								<div key={index} className="flex gap-5 items-center">
									<div className="size-20 bg-white/10"></div>
									<div className="">
										<p className="text-white/75">Адрес :</p>
										<p className="text-white">Атырау, Курмангазы 106</p>
									</div>
								</div>
							))}
							<div className="w-full min-h-[2px] bg-res-grey"></div>
							<p className="text-white">
								<span>Три города, </span>
								<br />
								<span>одна миссия - ваше удобство</span>
							</p>
						</div>
						<div className="basis-2/3 flex flex-col gap-4">
							<div className="w-full h-4/5 rounded-2xl bg-black group shadow-md"></div>
							<div className="w-full h-1/5 flex flex-col gap-[inherit]">
								<p className="">Все локаций : (3)</p>
								<div className="w-full min-h-[3px] bg-res-green"></div>
								<div className="flex gap-[inherit] *:shadow-md">
									{/* active */}
									<button className="flex justify-center items-center bg-res-green rounded-2xl w-40 h-12 gap-1">
										<p className="font-medium text-white text-base">Атырау</p>
									</button>

									{/* inactive */}
									<button className="flex justify-center items-center bg-res-grey/10 rounded-2xl w-40 h-12 gap-1">
										<p className="font-medium text-res-green text-base">
											Атырау
										</p>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className=""></div>
			</section>
		</main>
	);
}
