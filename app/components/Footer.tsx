import Link from "next/link";

export const Footer = () => {
	return (
		<footer className="container py-10 space-y-10 mt-10">
			<div className="flex justify-between h-full gap-14">
				<div className="basis-1/4">
					<div className="w-full h-60 bg-res-grey"></div>
				</div>
				<div className="basis-1/4 flex flex-col gap-8">
					<p className="text-res-green font-extrabold text-2xl">Информация</p>
					<div className="flex flex-col gap-4 text-xl text-res-green">
						<Link href={"/about"} className="w-fit">
							О нас
						</Link>
						<Link href={"/about"} className="w-fit">
							Услуги
						</Link>
						<Link href={"/about"} className="w-fit">
							Наши преимущества
						</Link>
						<Link href={"/about"} className="w-fit">
							Виды оборудование для бизнеса
						</Link>
						<Link href={"/about"} className="w-fit">
							Наши работы
						</Link>
						<Link href={"/about"} className="w-fit">
							Контакты
						</Link>
					</div>
				</div>
				<div className="basis-1/4 flex flex-col gap-8">
					<p className="text-res-green font-extrabold text-2xl">Каталог</p>
					<div className="flex flex-col gap-4 text-xl text-res-green">
						<Link href={"/about"} className="w-fit">
							Фронтальные стеллажи
						</Link>
						<Link href={"/about"} className="w-fit">
							Торговые стеллажи
						</Link>
						<Link href={"/about"} className="w-fit">
							Торговое оборудование
						</Link>
						<Link href={"/about"} className="w-fit">
							Кухонное оборудование
						</Link>
						<Link href={"/about"} className="w-fit">
							Холодильное оборудование
						</Link>
						<Link href={"/about"} className="w-fit">
							Витрины
						</Link>
						<Link href={"/about"} className="w-fit">
							Кассовые боксы
						</Link>
						<Link href={"/about"} className="w-fit">
							Паллетные стеллажи
						</Link>
						<Link href={"/about"} className="w-fit">
							Нейтральное оборудование
						</Link>
					</div>
				</div>
				<div className="basis-1/4 flex flex-col gap-8">
					<p className="text-res-green font-extrabold text-2xl">Контакты</p>
					<div className="flex flex-col gap-4 text-xl text-res-green">
						<Link href={"/about"} className="w-fit">
							Атырау - Курмангазы 106
						</Link>
						<Link href={"/about"} className="w-fit">
							Актау - мкр 29а, 112 / 2
						</Link>
						<Link href={"/about"} className="w-fit">
							Актобе - ул. Нокина 34А
						</Link>
					</div>
				</div>
			</div>

			<div className="w-full min-h-[3px] bg-res-green"></div>

			<p className="text-right text-res-green">сделано @joinway.24</p>
		</footer>
	);
};
