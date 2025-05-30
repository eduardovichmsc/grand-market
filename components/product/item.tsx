"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export interface Props {
	id: number;
	name: string;
	description: string;
	image?: string;
	onItemClick: (id: number) => void;
}

export const CatalogItem = ({
	id,
	name,
	description,
	image,
	onItemClick,
}: Props) => {
	const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
		e.currentTarget.src = "/placeholder.svg";
		e.currentTarget.srcset = "";
	};

	return (
		<motion.article
			className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer flex flex-col h-full transition-all duration-300 ease-in-out hover:shadow-xl focus-within:ring-2 focus-within:ring-res-green focus-within:ring-offset-2"
			onClick={() => onItemClick(id)}
			tabIndex={0}
			onKeyPress={(e) => {
				if (e.key === "Enter" || e.key === " ") {
					e.preventDefault();
					onItemClick(id);
				}
			}}
			whileHover={{ y: -10 }}
			transition={{ type: "spring", stiffness: 300 }}>
			<div className="relative w-full aspect-[4/3] bg-gray-100">
				<Image
					src={image || "/placeholder.svg"}
					alt={name || "Изображение продукта"}
					fill
					sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
					className="object-cover transition-transform duration-300 group-hover:scale-105"
					onError={handleError}
				/>
			</div>
			<div className="p-4 flex flex-col flex-grow">
				<h3
					className="text-md sm:text-lg font-semibold text-gray-800 mb-1 truncate"
					title={name}>
					{name || "Без названия"}
				</h3>
				<p
					className="text-xs sm:text-sm text-gray-600 line-clamp-2 flex-grow"
					title={description}>
					{description || "Описание отсутствует"}
				</p>
				{/* You could add a price or a small "View Details" text here if desired */}
				<p className="mt-2 text-res-green font-bold text-sm">Подробнее</p>
			</div>
		</motion.article>
	);
};
