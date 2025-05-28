"use client";

import { categories } from "@/entities/categories";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
	selectedCategory: number | null;
	onSelect: (id: number | null) => void;
	className?: string;
}

export const CatalogFilter = ({
	selectedCategory,
	onSelect,
	className,
}: Props) => {
	return (
		<aside className={clsx("basis-full space-y-4", className)}>
			<div className="relative flex flex-wrap items-center gap-x-4 gap-y-2 font-medium">
				{categories.map((category) => (
					<motion.button
						key={category.id}
						onClick={() =>
							onSelect(selectedCategory === category.id ? null : category.id)
						}
						className={clsx(
							"relative text-left size-max p-2 rounded-lg transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-res-green focus-visible:ring-opacity-50",
							{
								"text-res-green": selectedCategory === category.id,
								"hover:bg-gray-100 text-gray-700":
									selectedCategory !== category.id,
							}
						)}>
						{category.name}
						<AnimatePresence>
							{selectedCategory === category.id && (
								<motion.div
									key={`pill-${category.id}`}
									className="absolute bottom-[-4px] left-0 right-0 h-[3px] bg-res-green rounded-full"
									layoutId="activeCategoryPill"
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0, transition: { duration: 0.15 } }}
								/>
							)}
						</AnimatePresence>
					</motion.button>
				))}
			</div>
		</aside>
	);
};
