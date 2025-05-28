"use client";
import clsx from "clsx";
import { ArrowRight, LoaderIcon } from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useState } from "react";

import { useProduct } from "@/hooks/useProducts";
import { catalog } from "@/entities/catalog";
import { priceFormatter } from "@/model/functions";
import { categories } from "@/entities/categories";

export default function ProductPageById() {
	const { id } = useParams();
	const product = useProduct(catalog.list, +id);

	const [imageArray, setImageArray] = useState<string[]>(
		product?.preview_image || ["/placeholder.svg"]
	);
	const [imageLoading, setImageLoading] = useState<boolean>(true);

	const handleOrder = (name: string, category: string) => {
		const text = `
			Здравствуйте,\n\n
			 Я хочу заказать у вас ${category} - ${name}.
		`;
		const phone = "+77019265005";
	};

	return (
		<main className="container py-28">
			<section className="w-full md:w-[85%] mx-auto space-y-40">
				{product ? (
					<div className="flex flex-col md:flex-row gap-10">
						<div className="basis-full md:basis-3/5">
							<div
								className={clsx("relative w-full aspect-[9/5]", {
									"bg-black/10": !product.preview_image[0],
								})}>
								<Image
									src={imageArray[0]}
									fill
									onError={() => setImageArray(["/placeholder.svg"])}
									alt={product.name || "photo"}
									onLoadingComplete={() => setImageLoading(false)}
									className={clsx(
										"transition-all duration-150 object-contain",
										{
											"opacity-75 blur-xl": imageLoading,
										}
									)}
								/>
								{imageLoading && (
									<div className="size-full flex justify-center items-center">
										<LoaderIcon className="animate-spin" />
									</div>
								)}
							</div>
						</div>
						<div className="basis-full md:basis-2/5 flex flex-col gap-4">
							<p className="uppercase font-semibold text-4xl">
								{product?.name}
							</p>
							<div className="space-y-2">
								{product.price?.start ? (
									product.price?.start && (
										<p className="font-medium text-res-green text-2xl md:text-xl">
											от {priceFormatter(product.price.start)}
											<span className="px-2">до</span>
											{product.price.end && priceFormatter(product.price.end)} ₸
										</p>
									)
								) : (
									<p className="font-medium text-res-green text-2xl md:text-xl">
										Не указано
									</p>
								)}
								<p className="text-black/50 w-fit">
									[ Цену уточнять у менеджера ]
								</p>
							</div>

							{/* Кнопка - заказать */}
							<button
								className="py-4 w-full bg-res-green flex justify-center items-center gap-2 text-white rounded-xl hover:opacity-90"
								onClick={() =>
									handleOrder(
										product.name,
										categories.find(
											(category) => category.id === product.category_id
										)?.name || ""
									)
								}>
								<p className="text-xl md:text-lg uppercase">Заказать</p>
								<ArrowRight className="p-0.5" />
							</button>

							{/* Описание */}
							{product.description.length > 0 && (
								<div className="space-y-4 md:space-y-2 mt-4">
									<p className="text-res-green font-semibold text-2xl md:text-xl">
										Описание
									</p>
									<hr className="bg-res-green w-full h-[4px]" />
									<div className="">
										<p className="font-medium text-muted-foreground text-xl md:text-lg">
											{product.description}
										</p>
									</div>
								</div>
							)}

							{/* Преимущества */}
							{product.advantages && (
								<div className="space-y-4 md:space-y-2 mt-4">
									<p className="text-res-green font-semibold text-2xl md:text-xl">
										Преимущества
									</p>
									<hr className="bg-res-green w-full h-[4px]" />
									<ul className="list-disc">
										{product.advantages.map((advantage, index) => (
											<li
												key={index}
												className="font-medium text-muted-foreground text-xl md:text-lg">
												{advantage}
											</li>
										))}
									</ul>
								</div>
							)}

							{/* Модификаций */}
							{product.modifications && (
								<div className="space-y-4 md:space-y-2 mt-4">
									<p className="text-res-green font-semibold text-2xl md:text-xl">
										Модификаций
									</p>
									<hr className="bg-res-green w-full h-[4px]" />
									<ul className="list-disc">
										{product.modifications.map((modification, index) => (
											<li
												key={index}
												className="font-medium text-muted-foreground text-xl md:text-lg">
												{modification}
											</li>
										))}
									</ul>
								</div>
							)}

							{/* Детали */}
							<div className="space-y-4 md:space-y-2 mt-4">
								<p className="text-res-green font-semibold text-2xl md:text-xl">
									Детали
								</p>
								<hr className="bg-res-green w-full h-[4px]" />

								<div className="">
									<ul className="list-none space-y-1">
										{/* Тип холодоснабжения */}
										{product.cooling_details && (
											<li className="flex justify-between text-xl md:text-lg">
												<p className="text-res-green font-medium text-left">
													Тип холодоснабжения
												</p>
												<p className="text-muted-foreground text-right">
													{product.cooling_details.cooling_type
														? product.cooling_details.cooling_type
														: "Не указано"}
												</p>
											</li>
										)}

										{/* Бренд */}
										<li className="flex justify-between text-xl md:text-lg">
											<p className="text-res-green font-medium text-left">
												Бренд
											</p>
											<p className="text-muted-foreground text-right">
												{product.brand ? product.brand : "Не указано"}
											</p>
										</li>

										{/* Коробак - Длина / Глубина / Высота */}
										{product.box_details && (
											<>
												{product.box_details.box_len && (
													<li className="flex justify-between text-xl md:text-lg">
														<p className="text-res-green font-medium text-left">
															Длина
														</p>
														<p className="text-muted-foreground text-right">
															{product.box_details.box_len}
														</p>
													</li>
												)}
												{product.box_details.box_depth && (
													<li className="flex justify-between text-xl md:text-lg">
														<p className="text-res-green font-medium text-left">
															Глубина
														</p>
														<p className="text-muted-foreground text-right">
															{product.box_details.box_depth}
														</p>
													</li>
												)}
												{product.box_details.box_height && (
													<li className="flex justify-between text-xl md:text-lg">
														<p className="text-res-green font-medium text-left">
															Высота
														</p>
														<p className="text-muted-foreground text-right">
															{product.box_details.box_height}
														</p>
													</li>
												)}
											</>
										)}

										{/* Гарантия */}
										<li className="flex justify-between text-xl md:text-lg">
											<p className="text-res-green font-medium text-left">
												Гарантия, месяц
											</p>
											<p className="text-muted-foreground text-right">
												{product.warranty_months
													? product.warranty_months
													: "Не указано"}
											</p>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				) : (
					<div className="w-dvw h-dvh">
						<p>Не смогли найти данный продукт</p>
					</div>
				)}

				<div className=""></div>
			</section>
		</main>
	);
}
