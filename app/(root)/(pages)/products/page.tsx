"use client";

import { Banner } from "@/components/Banner";
import { CatalogFilter } from "@/components/CatalogFilter";
import { CatalogItem } from "@/components/CatalogItem";
import { SkeletonCatalogFilter } from "@/components/skeletons/SkeletonCatalogFilter";
import { SkeletonCatalogItem } from "@/components/skeletons/SkeletonCatalogItem";
import { isGlobalLoading } from "@/model/atoms";
import { API_URL } from "@/apiiii";
import { ProductsStateType } from "@/types/product.types";
import { FilterState } from "@/types/types";
import axios from "axios";
import { useAtom } from "jotai";
import { Search } from "lucide-react";
import { Suspense, useCallback, useEffect, useRef, useState } from "react";

export default function CatalogPage() {
	const [, setIsGlobalLoading] = useAtom(isGlobalLoading);
	const scrollRef = useRef<HTMLDivElement>(null);

	const [filterState, setFilterState] = useState<FilterState>({
		searchValue: "",
		selectId: "popular",
		currentPagination: 1,
		isLoading: true,
		selectedCategory: undefined,
		selectedBrand: undefined,
	});

	const [products, setProducts] = useState<ProductsStateType>({
		total: 0,
		list: [],
		totalPages: 0,
		limit: 0,
	});

	const getAllProducts = async (page: number = 1) => {
		try {
			setIsGlobalLoading(true);
			const response = await axios.get(API_URL + "products", {
				params: {
					search: filterState.searchValue,
					page: page,
					categoryId: filterState.selectedCategory || undefined,
					manufacturerId: filterState.selectedBrand || undefined,
				},
			});
			console.log(response.config.params);

			setProducts(response.data);
		} catch (error) {
			console.error(error);
		} finally {
			setIsGlobalLoading(false);
		}
	};

	useEffect(() => {
		const timer = setTimeout(() => {
			setFilterState((prevState) => ({ ...prevState, isLoading: false }));
		}, 2000);

		return () => clearTimeout(timer);
	}, []);

	useEffect(() => {
		getAllProducts(filterState.currentPagination);
	}, [
		filterState.currentPagination,
		filterState.selectedBrand,
		filterState.selectedCategory,
	]);

	const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		getAllProducts(1);
	};

	const handleFilterSubmit = () => {
		getAllProducts();
	};

	return (
		<>
			<main>
				<Banner
					image="/for-business/banner.png"
					bigText="Виды Оборудование Для Бизнеса"
					smallText="Ваш эксперт в мире торгового оборудования"
					isBordered
				/>

				<div className="flex justify-center -mt-8 relative">
					<form
						onSubmit={handleSearchSubmit}
						action=""
						className="relative flex flex-col justify-center">
						<input
							type="text"
							placeholder="Поиск по каталогу"
							className="relative text-lg border-res-green border-2 w-[90vw] sm:w-[50rem] py-4 px-4"
							value={filterState.searchValue}
							onChange={(e) =>
								setFilterState((prev) => ({
									...prev,
									searchValue: e.target.value,
								}))
							}
						/>
						<button
							type="submit"
							className="bg-white absolute right-1 py-1 px-2 sm:p-2 group">
							<Search className="transition text-res-green cursor-pointer group-hover:text-res-green/80" />
						</button>
					</form>
				</div>

				<section
					className="relative container py-28 space-y-36"
					ref={scrollRef}>
					<div className="w-full min-h-[50vh] flex flex-col md:flex-row gap-10">
						{filterState.isLoading && products.list.length === 0 ? (
							<SkeletonCatalogFilter />
						) : (
							<CatalogFilter
								selectedCategory={filterState.selectedCategory}
								setSelectedCategory={(category: number | undefined) =>
									setFilterState((prevState) => ({
										...prevState,
										selectedCategory: category,
									}))
								}
								selectedBrand={filterState.selectedBrand}
								setSelectedBrand={(brand: number | undefined) =>
									setFilterState((prevState) => ({
										...prevState,
										selectedBrand: brand,
									}))
								}
								handleFilterSubmit={handleFilterSubmit}
							/>
						)}

						<div className="basis-full md:basis-3/4 space-y-8">
							{products.total !== 0 && (
								<p className="text-lg">
									Результаты: <span className="">{products.total}</span>
								</p>
							)}
							<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
								{filterState.isLoading && products.list.length === 0 ? (
									Array.from({ length: 5 }).map((_, index) => (
										<SkeletonCatalogItem key={index} />
									))
								) : products.total === 0 ? (
									<div>
										<p className="text-lg">Не смогли найти то что вы искали!</p>
									</div>
								) : (
									products.list.map((item, index) => (
										<CatalogItem
											key={index}
											id={item.id}
											name={item.name}
											image={item.image}
											description={item.description}
											link={"/catalog/" + item.id}
											className=""
										/>
									))
								)}
							</div>
						</div>
					</div>
				</section>
			</main>
		</>
	);
}
