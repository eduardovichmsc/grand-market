import Link from "next/link";

export const Footer = () => {
	return (
		<footer className="container py-10 space-y-10">
			<div className="flex justify-between h-full gap-14">
				<div className="basis-1/4">
					<div className="w-full h-60 bg-res-grey"></div>
				</div>
				<div className="basis-1/4 flex flex-col gap-8">
					<p className="text-res-green font-extrabold text-2xl">Информация</p>
					<div className="flex flex-col gap-4 text-xl text-res-green">
						<Link href={"/about"}>О нас</Link>
						<Link href={"/about"}>Услуги</Link>
						<Link href={"/about"}>Наши преимущества</Link>
						<Link href={"/about"}>Виды оборудование для бизнеса</Link>
						<Link href={"/about"}>Наши работы</Link>
						<Link href={"/about"}>Контакты</Link>
					</div>
				</div>
				<div className="basis-1/4 flex flex-col gap-8">
					<p className="text-res-green font-extrabold text-2xl">Каталог</p>
					<div className="flex flex-col gap-4 text-xl text-res-green">
						<Link href={"/about"}>Фронтальные стеллажи</Link>
						<Link href={"/about"}>Торговые стеллажи</Link>
						<Link href={"/about"}>Торговое оборудование</Link>
						<Link href={"/about"}>Кухонное оборудование</Link>
						<Link href={"/about"}>Холодильное оборудование</Link>
						<Link href={"/about"}>Витрины</Link>
						<Link href={"/about"}>Кассовые боксы</Link>
						<Link href={"/about"}>Паллетные стеллажи</Link>
						<Link href={"/about"}>Нейтральное оборудование</Link>
					</div>
				</div>
				<div className="basis-1/4 flex flex-col gap-8">
					<p className="text-res-green font-extrabold text-2xl">Контакты</p>
					<div className="flex flex-col gap-4 text-xl text-res-green">
						<Link href={"/about"}>Атырау - Курмангазы 106</Link>
						<Link href={"/about"}>Актау - мкр 29а, 112 / 2</Link>
						<Link href={"/about"}>Актобе - ул. Нокина 34А</Link>
					</div>
				</div>
			</div>

			<div className="w-full h-[2px] bg-res-green"></div>

			<p className="text-right text-res-green">сделано @joinway.24</p>
		</footer>
	);
};
