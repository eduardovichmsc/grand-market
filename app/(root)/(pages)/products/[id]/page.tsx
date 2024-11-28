"use client";
// import { clients, partners } from "@/config/static";
import usePriceFormatter from "@/hooks/usePriceFormatter";
import { isGlobalLoading } from "@/model/atoms";
import { API_URL } from "@/static";
import { ProductType } from "@/types/product.types";
import axios from "axios";
import clsx from "clsx";
import { useSetAtom } from "jotai";
import { ArrowRight } from "lucide-react";
// import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

// const SwiperComponent = dynamic(() => import("@/components/SwiperComponent"), {
// 	ssr: true,
// });

export default function ProductPageById() {
	// модалка загрузки
	const setIsLoadingModal = useSetAtom(isGlobalLoading);
	setIsLoadingModal(true);

	const [isLoading, setIsLoading] = useState(true);
	const { id } = useParams();

	const [product, setProduct] = useState<ProductType | undefined>();
	const formatedPrice = usePriceFormatter(product?.price);

	useEffect(() => {
		const fetchProduct = async () => {
			try {
				const response = await axios.get(API_URL + "products/" + id);
				setProduct(response.data);
			} catch (error) {
				console.error(error);
			} finally {
				setIsLoading(false);
			}
		};
		fetchProduct();
	}, [id]);

	if (!product) {
		return <div className="container p-10"></div>;
	}

	if (product) {
		setIsLoadingModal(false);
	}

	return (
		<main className="container py-28">
			<section className="w-[85%] mx-auto space-y-40">
				<div className="flex gap-10">
					<div className="basis-3/5">
						<div
							className={clsx("relative w-full aspect-[9/5]", {
								"bg-black/10": !product.image,
							})}>
							{product.image && (
								<Image
									src={"http://localhost:5000/uploads/" + product.image}
									fill
									alt={product.image || "photo"}
									className="object-contain"
								/>
							)}
						</div>
					</div>
					<div className="basis-2/5 flex flex-col gap-4">
						<p className="uppercase font-semibold text-4xl">{product?.name}</p>
						<div>
							<p className="font-medium text-xl">{formatedPrice} ₸</p>
						</div>

						{/* Кнопка - заказать */}
						<Link
							href={""}
							className="py-4 w-full bg-res-green flex justify-center items-center gap-2 text-white rounded-xl hover:opacity-90">
							<p className="text-lg uppercase">Заказать</p>
							<ArrowRight className="p-0.5" />
						</Link>

						{/* Описание */}
						<div className="space-y-2 mt-4">
							<p className="text-res-green font-semibold text-xl">Описание</p>
							<hr className="bg-res-green w-full h-[4px]" />
							<div className="">
								<p className="font-medium text-muted-foreground text-lg">
									Ларь-бонета Cortina выпускается в двухрежимном исполнении HT /
									CT с возможностью переключение температурных режимов :
								</p>
							</div>
						</div>

						{/* Детали */}
						<div className="space-y-2 mt-4">
							<p className="text-res-green font-semibold text-xl">Детали</p>
							<hr className="bg-res-green w-full h-[4px]" />

							<div className="">
								<ul className="list-none space-y-1">
									<li className="flex justify-between text-lg">
										<p className="text-res-green font-medium">
											Тип холодоснабжения
										</p>
										<p className="text-muted-foreground">Выносной холод</p>
									</li>
									<li className="flex justify-between text-lg">
										<p className="text-res-green font-medium">Бренд</p>
										<p className="text-muted-foreground">Dazzl</p>
									</li>
									<li className="flex justify-between text-lg">
										<p className="text-res-green font-medium">
											Гарантия, месяц
										</p>
										<p className="text-muted-foreground">12</p>
									</li>
									<li className="flex justify-between text-lg">
										<p className="text-res-green font-medium">
											Страна производства
										</p>
										<p className="text-muted-foreground">Россия</p>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>

				<div className=""></div>
			</section>
		</main>
	);
}
