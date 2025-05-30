"use client";
import { categories } from "@/entities/categories";
import { SubcategoryItemType } from "@/entities/entities.types";
import { subcategories } from "@/entities/subcategory";

import { useEffect, useState } from "react";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
	selectedCategory: number | null;
	onSelect: (id: number | null) => void;
	selectedSubcategory: number | null;
	onSubcategorySelect: (id: number | null) => void;
	className?: string;
}

const MAX_VISIBLE_INITIAL_CATEGORIES = 5;

export const CatalogFilter = ({
	selectedCategory,
	onSelect,
	selectedSubcategory,
	onSubcategorySelect,
	className,
}: Props) => {
	const [showAll, setShowAll] = useState(false);

	const initialCategories = categories.slice(0, MAX_VISIBLE_INITIAL_CATEGORIES);
	const remainingCategories = categories.slice(MAX_VISIBLE_INITIAL_CATEGORIES);

	const displayedSubcategories = selectedCategory
		? subcategories.filter((sub) => sub.parent_id === selectedCategory)
		: [];

	useEffect(() => {
		if (displayedSubcategories.length > 0) {
			setShowAll(false);
		}
	}, [displayedSubcategories.length]);

	const renderCategoryButton = (category: (typeof categories)[0]) => (
		<motion.button
			key={category.id}
			onClick={() => {
				const newCategoryId =
					selectedCategory === category.id ? null : category.id;
				onSelect(newCategoryId);

				if (newCategoryId !== selectedCategory) {
					onSubcategorySelect(null);
				}
			}}
			className={clsx(
				"relative text-left size-max p-2 rounded-lg transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-res-green focus-visible:ring-opacity-50",
				{
					"text-white": selectedCategory === category.id,
					"hover:bg-gray-100 text-gray-700": selectedCategory !== category.id,
				}
			)}>
			<span className="relative z-10">{category.name}</span>

			<AnimatePresence>
				{selectedCategory === category.id && (
					<motion.div
						key={`pill-${category.id}`}
						className="absolute top-0 left-0 right-0 h-full bg-res-green rounded-lg"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0, transition: { duration: 0.15 } }}
						transition={{ type: "spring", stiffness: 500, damping: 30 }}
					/>
				)}
			</AnimatePresence>
		</motion.button>
	);

	const renderSubcategoryButton = (subcategory: SubcategoryItemType) => (
		<motion.button
			key={`subcategory-${subcategory.id}`}
			onClick={() =>
				onSubcategorySelect(
					selectedSubcategory === subcategory.id ? null : subcategory.id
				)
			}
			className={clsx(
				"relative text-left size-max p-2 rounded-lg transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-res-green focus-visible:ring-opacity-50",
				{
					"text-white bg-res-green": selectedSubcategory === subcategory.id,
					"hover:bg-gray-100 text-gray-700":
						selectedSubcategory !== subcategory.id,
				}
			)}>
			<span className="relative z-10">{subcategory.name}</span>
		</motion.button>
	);

	return (
		<aside className={clsx("", className)}>
			{/* Категории */}
			<div className="">
				<p className="font-bold text-lg px-2 pb-4">Категории</p>
				<div className="flex flex-col gap-2">
					<div className="relative flex flex-col gap-[inherit] font-medium ">
						{initialCategories.map(renderCategoryButton)}
					</div>

					<AnimatePresence initial={false}>
						{showAll && remainingCategories.length > 0 && (
							<motion.div
								key="remaining-categories-container"
								className=" flex flex-col gap-[inherit] font-medium"
								initial={{ opacity: 0, height: 0, y: -10 }}
								animate={{ opacity: 1, height: "auto", y: 0 }}
								exit={{
									opacity: 0,
									height: 0,
									y: -10,
									transition: { duration: 0.2 },
								}}
								transition={{ duration: 0.3, ease: "easeInOut" }}>
								{remainingCategories.map(renderCategoryButton)}
							</motion.div>
						)}
					</AnimatePresence>
					{remainingCategories.length > 0 && (
						<button
							onClick={() => setShowAll(!showAll)}
							className="p-2 w-max text-sm font-semibold text-res-green hover:text-res-green-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-res-green focus-visible:ring-opacity-50 rounded-lg"
							aria-expanded={showAll}>
							{showAll
								? "Скрыть"
								: `Показать все (${remainingCategories.length})`}
						</button>
					)}
				</div>
			</div>

			{/* Подкатегории */}
			<AnimatePresence initial={false}>
				{selectedCategory && displayedSubcategories.length > 0 && (
					<motion.div
						key="subcategories-section"
						className=" mt-6"
						initial={{ opacity: 0, height: 0, y: -20 }}
						animate={{ opacity: 1, height: "auto", y: 0 }}
						exit={{
							opacity: 0,
							height: 0,
							y: -20,
							transition: { duration: 0.2 },
						}}
						transition={{ duration: 0.3, ease: "easeInOut" }}>
						<p className="font-bold text-lg px-2 pb-4">Подкатегории</p>
						<div className=" flex flex-col gap-2">
							<div className="relative flex flex-col gap-[inherit] font-medium">
								{displayedSubcategories.map(renderSubcategoryButton)}
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</aside>
	);
};
