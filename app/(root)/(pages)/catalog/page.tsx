"use client";

import { Banner } from "@/components/Banner";
import { CatalogFilter } from "@/components/CatalogFilter";
import { CatalogItem } from "@/components/CatalogItem";
import { SkeletonCatalogFilter } from "@/components/skeletons/SkeletonCatalogFilter";
import { SkeletonCatalogItem } from "@/components/skeletons/SkeletonCatalogItem";
import { Pagination } from "@/components/ui/pagination";
import { isGlobalLoading } from "@/model/atoms";
import { API_URL } from "@/static";
import axios from "axios";
import { useSetAtom } from "jotai";
import { Search } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface GridContentType {
	id: number;
	image?: string;
	title: string;
	body: string;
}

interface FilterState {
	searchValue: string;
	selectId: string;
	currentPagination: number;
	isLoading: boolean;
}

export default function CatalogPage() {
	const scrollRef = useRef<HTMLDivElement>(null);
	const setIsGlobalLoading = useSetAtom(isGlobalLoading);

	const [filterState, setFilterState] = useState<FilterState>({
		searchValue: "",
		selectId: "popular",
		currentPagination: 1,
		isLoading: true,
	});
	const [products, setProducts] = useState<any>({
		list: [],
		totalPages: 0,
		limit: 0,
	});

	const getAllProducts = async (page: number = 1) => {
		try {
			setIsGlobalLoading(true);
			const { data } = await axios.get(API_URL + "products", {
				params: {
					page: page,
					manufacturerId: filterState.manufacturerId || null,
					categoryId: filterState.categoryId || null,
					search: filterState.searchValue,
				},
			});
			setProducts(data);
		} catch (error) {
			console.error(error);
		} finally {
			setIsGlobalLoading(false);
		}
	};

	// фриз для скелетонов
	useEffect(() => {
		const timer = setTimeout(
			() => setFilterState((prevState) => ({ ...prevState, isLoading: false })),
			2000
		);
		return () => clearTimeout(timer);
	}, []);

	// первый заход
	useEffect(() => {
		getAllProducts(filterState.currentPagination);
	}, [filterState.currentPagination]);

	// при смене currentPage в filterState
	const handlePaginationChange = (page: number) => {
		setFilterState((prevState) => ({ ...prevState, currentPagination: page }));
	};

	// при ENTER на search
	const handleSearchChange = (value: string) => {
		setFilterState((prevState) => ({ ...prevState, searchValue: value }));
	};

	// следующая страница
	const handleNextPage = () => {
		setFilterState((prev) => ({
			...prev,
			currentPagination: prev.currentPagination + 1,
		}));
	};

	const handlePrevPage = () => {
		setFilterState((prev) => ({
			...prev,
			currentPagination: prev.currentPagination - 1,
		}));
	};

	console.log(products);

	return (
		<main>
			<Banner
				image="/for-business/banner.png"
				bigText="Виды Оборудование Для Бизнеса"
				smallText="Ваш эксперт в мире торгового оборудования"
				isBordered
			/>

			<div className="flex justify-center -mt-8 relative">
				<form action="" className="relative flex flex-col justify-center">
					<input
						type="text"
						placeholder="Поиск по каталогу"
						className="relative text-lg border-res-green border-2 w-[50rem] py-4 px-4"
						name="search"
						value={filterState.searchValue}
						onChange={(e) => handleSearchChange(e.target.value)}
					/>
					<button type="submit" className="bg-white absolute right-1 p-2">
						<Search className="transition text-res-green cursor-pointer hover:text-res-green/80" />
					</button>
				</form>
			</div>

			<section className="relative container py-28 space-y-36" ref={scrollRef}>
				<div className="w-full flex min-h-[50vh] gap-10">
					{filterState.isLoading && products.length === 0 ? (
						<SkeletonCatalogFilter />
					) : (
						<CatalogFilter
							selectId={filterState.selectId}
							setSelectId={(id) =>
								setFilterState((prevState) => ({ ...prevState, selectId: id }))
							}
						/>
					)}

					<div className="basis-3/4 space-y-8">
						<div className="flex justify-between items-center">
							<p>
								Результаты: (
								{filterState.isLoading && products.length === 0
									? "#количество товаров"
									: products.limit}
								)
							</p>
							<select
								defaultValue={filterState.selectId}
								onChange={(e) =>
									setFilterState((prevState) => ({
										...prevState,
										selectId: e.target.value,
									}))
								}
								className="border-2 border-res-green p-1.5">
								<option value="new">Новинки</option>
								<option value="cheap">Сначала дешевые</option>
								<option value="expensive">Сначала дорогие</option>
							</select>
						</div>

						<div className="grid grid-cols-3 gap-6">
							{filterState.isLoading && products.length === 0
								? Array.from({ length: 5 }).map((_, index) => (
										<SkeletonCatalogItem key={index} />
								  ))
								: products.list.map((item, index) => (
										<CatalogItem
											key={index}
											id={item.id}
											name={item.name}
											image={item.image}
											description={item.description}
											link={"/catalog/" + item.id}
											className=""
										/>
								  ))}
						</div>

						<Pagination
							currentPage={filterState.currentPagination}
							totalPages={products.totalPages}
							onPageChange={handlePaginationChange}
							showPrevPage={handlePrevPage}
							showNextPage={handleNextPage}
						/>
					</div>
				</div>
			</section>
		</main>
	);
}