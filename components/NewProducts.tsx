"use client";

import { API_URL } from "@/apiiii";
import usePriceFormatter from "@/hooks/usePriceFormatter";
import { priceFormatter } from "@/model/functions";
import { ProductType } from "@/types/product.types";
import axios from "axios";
import { Plus } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const newProducts = [
	{ title: "Brenta SG", price: "150 000" },
	{ title: "Artica", price: "200 000" },
	{ title: "Nordica", price: "350 000" },
	{ title: "Berg", price: "150 000" },
];

export const NewProducts = () => {
	const router = useRouter();

	const [products, setProducts] = useState<ProductType[]>([]);

	const handleClick = (id: number) => {
		router.push("/products/" + id);
	};

	useEffect(() => {
		const fetchProduct = async () => {
			const response = await axios.get(API_URL + "products", {
				params: { limit: 4 },
			});
			if (response.status !== 200) {
				throw new Error("Ошибка получения новых продуктов");
			}
			setProducts(response.data.list);
		};
		fetchProduct();
	}, []);

	return (
		<>
			{products.map((item, index) => (
				<div
					key={index}
					className="ease-in-out duration-300 transition-all hover:p-4 hover:bg-white/10 space-y-4 rounded-2xl group cursor-pointer"
					onClick={() => handleClick(item.id)}>
					<div className="relative w-full aspect-square xl:aspect-[6/7] rounded-xl bg-white">
						<Image
							src={"http://localhost:5000/uploads/" + item.image}
							objectFit="contain"
							alt={item.name}
							fill
						/>
					</div>
					<div className="flex justify-between">
						<div className="space-y-1">
							<p className="uppercase font-medium text-4xl xl:text-3xl 2xl:text-2xl line-clamp-1">
								{item.name}
							</p>
							<p className="duration-300 transition-all uppercase text-2xl 2xl:text-xl text-res-grey group-hover:text-white">
								{priceFormatter(item.price)} ₸
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
