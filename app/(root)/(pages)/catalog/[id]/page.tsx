"use client";
import { clients, partners } from "@/config/static";
import usePriceFormatter from "@/hooks/usePriceFormatter";
import { ProductType } from "@/types/product.types";
import axios from "axios";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const SwiperComponent = dynamic(() => import("@/components/SwiperComponent"), {
	ssr: true,
});

export default function ProductPageById() {
	const [isLoading, setIsLoading] = useState(true);
	const { id } = useParams();

	const [product, setProduct] = useState<ProductType | undefined>();
	const formatedPrice = usePriceFormatter(product?.price);

	useEffect(() => {
		const fetchProduct = async () => {
			try {
				const response = await axios.get(
					"http://localhost:3000/products/" + id
				);
				setProduct(response.data);
			} catch (error) {
				console.error(error);
			} finally {
				setIsLoading(false);
			}
		};
		fetchProduct();
	}, [id]);

	if (isLoading) {
		return <div className="container p-10">Загружаем...</div>;
	}

	if (!product) {
		return <div className="container p-10">Продукт не найден</div>;
	}

	console.log(product);
	return (
		<main className="container py-28">
			<section className="w-[85%] mx-auto space-y-40">
				<div className="flex gap-10">
					<div className="basis-3/5">
						<div className="relative w-full aspect-[8/5]">
							<Image
								src={
									product.image
										? `http://localhost:3000/uploads/${product.image}`
										: "https://placehold.co/600x400"
								}
								fill
								alt={product.image || "photo"}
								className="object-cover"
							/>
						</div>
					</div>
					<div className="basis-2/5 flex flex-col gap-4">
						<p className="uppercase font-semibold text-4xl">{product?.name}</p>
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
								{formatedPrice ? formatedPrice + " ₸" : "Не указано"}
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
				<SwiperComponent sectionTitle="Наши клиенты" array={clients} />
				<SwiperComponent sectionTitle="Наши партнеры" array={partners} />
			</div>
		</main>
	);
}
