"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { BrandsType, CategoriesType } from "@/types/types";

export const CatalogFilter = ({
	selectedCategory,
	setSelectedCategory,
	selectedBrand,
	setSelectedBrand,
	handleFilterSubmit,
}: {
	selectedCategory: number | undefined;
	setSelectedCategory: (category: number | undefined) => void;
	selectedBrand: number | undefined;
	setSelectedBrand: (brand: number | undefined) => void;
	handleFilterSubmit: () => void;
}) => {
	const [categories, setCategories] = useState<CategoriesType[]>([]);
	const [brands, setBrands] = useState<BrandsType[]>([]);

	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchCategories = async () => {
			try {
				const categoriesResponse = await axios.get(
					"http://localhost:5000/categories"
				);
				const brandsResponse = await axios.get(
					"http://localhost:5000/manufacturers"
				);
				setCategories(categoriesResponse.data);
				setBrands(brandsResponse.data);
			} catch (error) {
				console.error(error);
			} finally {
				setIsLoading(false);
			}
		};
		fetchCategories();
	}, []);

	return (
		<div className="basis-1/4 flex flex-col gap-10">
			{!isLoading && (
				<>
					{/* Категорий */}
					<div className="space-y-4">
						<div className="flex justify-between items-center">
							<p className="font-bold">Тип оборудований</p>
						</div>
						<ul className="space-y-2">
							{categories.map((category, index) => {
								return (
									<motion.li
										key={index}
										className="space-x-4"
										initial={{ opacity: 0, y: -10 }}
										animate={{ opacity: 1, y: 0 }}
										exit={{ opacity: 0, y: -10 }}
										transition={{ duration: 0.1 }}>
										<input
											type="radio"
											id={`category-${category.id}`}
											name="category"
											checked={selectedCategory === category.id}
											onChange={() =>
												setSelectedCategory(
													selectedCategory === category.id
														? undefined
														: category.id
												)
											}
										/>
										<label htmlFor={`category-${category.id}`}>
											{category.name}
										</label>
									</motion.li>
								);
							})}
						</ul>
					</div>

					{/* Производители */}
					<div className="space-y-4">
						<div className="flex justify-between items-center">
							<p className="font-bold">Производители</p>
						</div>
						<ul className="space-y-2">
							{brands.map((brand, index) => {
								return (
									<motion.li
										key={index}
										className="space-x-4"
										initial={{ opacity: 0, y: -10 }}
										animate={{ opacity: 1, y: 0 }}
										exit={{ opacity: 0, y: -10 }}
										transition={{ duration: 0.1 }}>
										<input
											type="radio"
											id={`brand-${brand.id}`}
											name="brand"
											checked={selectedBrand === brand.id}
											onChange={() =>
												setSelectedBrand(
													selectedBrand === brand.id ? undefined : brand.id
												)
											}
										/>
										<label htmlFor={`brand-${brand.id}`}>{brand.name}</label>
									</motion.li>
								);
							})}
						</ul>
					</div>
				</>
			)}

			<button
				className="hidden transition bg-res-green hover:bg-res-green/95 active:bg-res-green/90 text-white py-3 rounded-xl"
				onClick={handleFilterSubmit}>
				Применить
			</button>
		</div>
	);
};
