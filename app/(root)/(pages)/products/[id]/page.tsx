import { SwiperComponent } from "@/app/components/SwiperComponent";

export default function ProductPageById() {
	return (
		<main className="container py-28">
			<section className="w-[85%] mx-auto space-y-40">
				<div className="flex gap-10">
					<div className="basis-3/5">
						<div className="w-full aspect-[8/5] bg-res-green"></div>
					</div>
					<div className="basis-2/5 flex flex-col gap-4">
						<p className="uppercase font-semibold text-4xl">Cortina</p>
						<p className="font-medium text-2xl">
							Ларь-бонета Cortina выпускается в двухрежимном исполнении HT / CT
							с возможностью переключение температурных режимов :
						</p>
						<div className="font-medium text-xl text-black/65">
							<li>Низкотемпературный режим -18/-24 С</li>
							<li>Среднетемпературный -2/+6 С</li>
						</div>
						<p className="font-medium text-2xl">
							Ларь-бонета Cortina имеет низкое энергопотребление благодаря
							современным технологическим решениям , входящим в стандартную
							комплектацию:
						</p>
						<div className="font-medium text-xl text-black/65">
							<li>
								Раздвижные обзорные крышки из низко эмиссионного стекла с
								антизапотевающим покрытиемал
							</li>
							<li>Светодиодная подвсетка</li>
							<li>Оттайка горячим газом</li>
						</div>
						<div className="mt-4 flex flex-col gap-[inherit]">
							<p className="text-res-green font-extrabold text-5xl">
								1 233 000 ₸
							</p>
							<button className="transition flex justify-center items-center place-self-end bg-res-green rounded-2xl w-full h-20 gap-1 hover:bg-res-green/90">
								<p className="text-white text-2xl">Заказать</p>
							</button>
						</div>
					</div>
				</div>

				<div className="">
					<p className="section-title">Описание</p>
					<div className="flex flex-col gap-4">
						<p className="font-medium text-2xl">
							Ларь-бонета Cortina выпускается в двухрежимном исполнении HT / CT
							с возможностью переключение температурных режимов :
						</p>
						<div className="font-medium text-xl text-black/65">
							<li>Низкотемпературный режим -18/-24 С</li>
							<li>Среднетемпературный -2/+6 С</li>
						</div>
						<p className="font-medium text-2xl">
							Ларь-бонета Cortina имеет низкое энергопотребление благодаря
							современным технологическим решениям , входящим в стандартную
							комплектацию:
						</p>
						<div className="font-medium text-xl text-black/65">
							<li>
								Раздвижные обзорные крышки из низко эмиссионного стекла с
								антизапотевающим покрытиемал
							</li>
							<li>Светодиодная подвсетка</li>
							<li>Оттайка горячим газом</li>
						</div>
					</div>
				</div>
			</section>
			<div className="mt-32">
				<SwiperComponent />
			</div>
		</main>
	);
}
