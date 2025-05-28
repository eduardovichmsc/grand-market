/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { catalog } from "@/entities/catalog";
import { priceFormatter } from "@/model/functions";
import axios from "axios";
import { Plus } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

// const newProducts = [
// 	{ title: "Brenta SG", price: "150 000" },
// 	{ title: "Artica", price: "200 000" },
// 	{ title: "Nordica", price: "350 000" },
// 	{ title: "Berg", price: "150 000" },
// ];

export const RecentProducts = () => {
	const router = useRouter();

	const newProducts = catalog.list.slice(-4);
	const handleClick = (id: number) => {
		router.push("/products/" + id);
	};

	return (
		<>
			{newProducts.map((product, index) => (
				<div
					key={index}
					className="ease-in-out duration-300 transition-all hover:p-4 hover:bg-white/10 space-y-4 rounded-2xl group cursor-pointer"
					onClick={() => handleClick(product.id)}>
					<div className="relative w-full aspect-square xl:aspect-[6/7] rounded-xl bg-white">
						<Image
							src={product.preview_image[0]}
							objectFit="contain"
							alt={product.name}
							fill
							className="p-4"
						/>
					</div>
					<div className="flex justify-between">
						<div className="space-y-1">
							<p className="uppercase font-medium text-4xl xl:text-3xl 2xl:text-2xl line-clamp-1">
								{product.name}
							</p>
							<p className="duration-300 transition-all uppercase text-2xl 2xl:text-xl text-res-grey group-hover:text-white">
								{product.price?.start
									? `${priceFormatter(product.price?.start)} ₸`
									: "Не указано"}
							</p>
						</div>
						<button className="aspect-square h-full relative rounded-2xl bg-res-light-green">
							<Plus className="text-res-green size-14 p-2" />
						</button>
					</div>
				</div>
			))}
		</>
	);
};
