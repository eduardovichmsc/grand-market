/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { catalog } from "@/entities/catalog";
import { priceFormatter } from "@/model/functions";
import { Plus, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const RecentProducts = () => {
	const router = useRouter();

	const recentProducts =
		catalog.list.length >= 8
			? catalog.list.slice(4, 8)
			: catalog.list.slice(0, 4);

	const handleClick = (id: number) => {
		router.push(`/products?productId=${id}`);
	};

	return (
		<>
			{recentProducts.map((product) => (
				<div
					key={product.id}
					className="group/card bg-white/5 hover:bg-white/10 rounded-2xl p-4 sm:p-5 transition-all duration-300 ease-in-out cursor-pointer flex flex-col shadow-sm hover:shadow-lg"
					onClick={() => handleClick(product.id)}
					tabIndex={0}>
					{/* Image Container */}
					<div className="relative w-full aspect-square xl:aspect-[6/7] rounded-xl bg-white overflow-hidden mb-4">
						<Image
							src={product.preview_image?.[0] || "/placeholder.svg"}
							alt={product.name || "Product Image"}
							fill
							style={{ objectFit: "contain" }}
							className="p-3 sm:p-4 transition-transform duration-300 ease-in-out group-hover/card:scale-105"
						/>
					</div>

					{/* Текст и контент */}
					<div className="flex flex-col flex-grow justify-between">
						<div className="mb-3">
							<h3 className="font-semibold text-white text-lg sm:text-xl xl:text-2xl line-clamp-2 leading-tight mb-1">
								{product.name || "Unnamed Product"}
							</h3>
							<p className="text-res-grey group-hover/card:text-gray-200 text-base sm:text-lg transition-colors duration-300">
								{product.price?.start
									? `${priceFormatter(product.price.start)} ₸`
									: "Цена по запросу"}
							</p>
						</div>

						{/* Кнопка */}
						<button
							aria-label={`View details for ${product.name}`}
							className="w-full mt-auto flex items-center justify-center gap-2 bg-res-light-green text-res-green font-medium py-2.5 sm:py-3 px-4 rounded-lg transition-all duration-300 ease-in-out hover:bg-res-green hover:text-white focus:outline-none focus:ring-2 focus:ring-res-green focus:ring-offset-2 focus:ring-offset-white/10">
							<span>Подробнее</span>
							<ArrowRight className="size-4 sm:size-5" />
						</button>
					</div>
				</div>
			))}
		</>
	);
};
