"use client";
import { useState, useMemo, useEffect, useRef } from "react";
import { Banner } from "@/components/banner/Banner";
import { catalog } from "@/entities/catalog";
import { useSearch } from "@/hooks/useSearch";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

import type { CatalogItemType } from "@/entities/entities.types";
import { CatalogItem } from "@/components/product/item";
import { CatalogFilter } from "@/components/product/filter";
import { isGlobalLoading } from "@/model/atoms";
import { useAtom } from "jotai";

const itemVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			duration: 0.3,
		},
	},
	exit: {
		opacity: 0,

		transition: {
			duration: 0.2,
		},
	},
};

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.07,
		},
	},
};

const ITEMS_PER_PAGE = 24;
const DOTS = "...";

const range = (start: number, end: number) => {
	let length = end - start + 1;
	return Array.from({ length }, (_, idx) => idx + start);
};

const generatePageNumbers = (
	totalPages: number,
	currentPage: number,
	siblingsCount: number = 1
): (number | string)[] => {
	if (totalPages <= 1) return [];

	const totalPageNumbersToShow = siblingsCount + 5;

	if (totalPages <= totalPageNumbersToShow) {
		return range(1, totalPages);
	}

	const leftSiblingIndex = Math.max(currentPage - siblingsCount, 1);
	const rightSiblingIndex = Math.min(currentPage + siblingsCount, totalPages);

	const shouldShowLeftDots = leftSiblingIndex > 2;
	const shouldShowRightDots = rightSiblingIndex < totalPages - 1;

	const firstPageIndex = 1;
	const lastPageIndex = totalPages;

	if (!shouldShowLeftDots && shouldShowRightDots) {
		let leftItemCount = 3 + 2 * siblingsCount;
		let leftRange = range(1, leftItemCount);
		return [...leftRange, DOTS, lastPageIndex];
	}

	if (shouldShowLeftDots && !shouldShowRightDots) {
		let rightItemCount = 3 + 2 * siblingsCount;
		let rightRange = range(totalPages - rightItemCount + 1, totalPages);
		return [firstPageIndex, DOTS, ...rightRange];
	}

	if (shouldShowLeftDots && shouldShowRightDots) {
		let middleRange = range(leftSiblingIndex, rightSiblingIndex);
		return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
	}

	return range(1, totalPages);
};

export default function ProductsPage() {
	const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
	const {
		isLoading,
		searchValue,
		filteredData,
		handleValueChange,
		handleSubmit,
	} = useSearch<CatalogItemType>(catalog.list);

	const [currentPage, setCurrentPage] = useState<number>(1);
	const productListSectionRef = useRef<HTMLDivElement>(null);

	const visibleData = useMemo(() => {
		if (selectedCategory === null) return filteredData;
		return filteredData.filter((item) => item.category_id === selectedCategory);
	}, [filteredData, selectedCategory]);

	useEffect(() => {
		setCurrentPage(1);
	}, [searchValue, selectedCategory]);

	const totalPages = useMemo(() => {
		if (!visibleData.length) return 0;
		return Math.ceil(visibleData.length / ITEMS_PER_PAGE);
	}, [visibleData.length]);

	const paginatedData = useMemo(() => {
		const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
		const endIndex = startIndex + ITEMS_PER_PAGE;
		return visibleData.slice(startIndex, endIndex);
	}, [visibleData, currentPage]);

	const handlePageChange = (newPage: number) => {
		if (newPage >= 1 && newPage <= totalPages && newPage !== currentPage) {
			setCurrentPage(newPage);
			if (productListSectionRef.current) {
				const filterHeight =
					document.querySelector(".catalog-filter-section")?.clientHeight || 0;
				const topOffset =
					productListSectionRef.current.offsetTop - filterHeight - 20;

				window.scrollTo({
					top: topOffset > 0 ? topOffset : 0,
					behavior: "smooth",
				});
			} else {
				window.scrollTo({ top: 0, behavior: "smooth" });
			}
		}
	};

	const [showLoading, setShowLoading] = useAtom(isGlobalLoading);
	const inputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		setShowLoading(isLoading);
	}, [isLoading, setShowLoading]);

	useEffect(() => {
		if (!showLoading) {
			inputRef.current?.focus();
		}
	}, [showLoading]);

	const listAnimationKey = useMemo(() => {
		return `${selectedCategory}-${searchValue}`;
	}, [selectedCategory, searchValue]);

	const pageNumbers = useMemo(() => {
		return generatePageNumbers(totalPages, currentPage);
	}, [totalPages, currentPage]);

	return (
		<main>
			<Banner
				image="/for-business/banner.png"
				bigText="Виды Оборудование Для Бизнеса"
				smallText="Ваш эксперт в мире торгового оборудования"
				isBordered
			/>
			<div className="flex justify-center -mt-8 relative z-10">
				<form
					onSubmit={handleSubmit}
					className="relative flex flex-col justify-center">
					<input
						value={searchValue}
						onChange={handleValueChange}
						disabled={showLoading === true}
						ref={inputRef}
						type="text"
						placeholder="Поиск по каталогу"
						className="relative text-lg border-res-green border-2 w-[90vw] sm:w-[50rem] py-4 px-4 rounded-md shadow-sm"
					/>
					<button
						type="submit"
						disabled={showLoading === true}
						className="bg-white absolute right-1 top-1/2 -translate-y-1/2 p-2 group rounded-md hover:bg-gray-100 transition-colors">
						<Search className="transition text-res-green cursor-pointer group-hover:text-res-green/80" />
					</button>
				</form>
			</div>

			<section
				ref={productListSectionRef}
				className="relative container pt-16 pb-28 space-y-16 sm:space-y-24">
				<div className="w-full min-h-[50vh] space-y-6">
					<div className="catalog-filter-section">
						<CatalogFilter
							selectedCategory={selectedCategory}
							onSelect={setSelectedCategory}
							className=""
						/>
					</div>

					<div className="basis-full space-y-8">
						<p className="font-medium text-lg">
							{visibleData.length > 0
								? `Найдено ${visibleData.length} результатов:`
								: "Нету результатов"}
						</p>

						<motion.div
							key={listAnimationKey}
							className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
							variants={containerVariants}
							initial="hidden"
							animate="visible">
							<AnimatePresence mode="sync">
								{paginatedData.map((item) => (
									<motion.div
										key={item.id}
										variants={itemVariants}
										initial="hidden"
										animate="visible"
										exit="exit"
										layout>
										<CatalogItem
											id={item.id}
											name={item.name}
											description={item.description}
											image={item.preview_image[0]}
										/>
									</motion.div>
								))}
							</AnimatePresence>
						</motion.div>

						{/* Pagination Controls */}
						{totalPages > 1 && (
							<div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-2 mt-12 pt-8 border-t border-gray-200">
								<button
									onClick={() => handlePageChange(currentPage - 1)}
									disabled={currentPage === 1}
									className="flex items-center px-4 py-2 border rounded-md text-sm sm:text-base bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-sm"
									aria-label="Previous Page">
									<ChevronLeft size={18} className="mr-1" />
									Назад
								</button>

								<div className="flex items-center space-x-1">
									{pageNumbers.map((page, index) =>
										typeof page === "number" ? (
											<button
												key={`page-${page}`}
												onClick={() => handlePageChange(page)}
												disabled={currentPage === page}
												className={clsx(
													"px-3 py-2 min-w-[40px] text-center border rounded-md text-sm sm:text-base transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-res-green/50",
													{
														"bg-res-green text-white border-res-green hover:bg-res-green/90":
															currentPage === page,
														"bg-white hover:bg-gray-100 text-gray-700 border-gray-300":
															currentPage !== page,
													}
												)}
												aria-current={currentPage === page ? "page" : undefined}
												aria-label={`Go to page ${page}`}>
												{page}
											</button>
										) : (
											<span
												key={`ellipsis-${index}`}
												className="px-2 py-2 text-gray-500 select-none">
												{DOTS}
											</span>
										)
									)}
								</div>

								<button
									onClick={() => handlePageChange(currentPage + 1)}
									disabled={currentPage === totalPages}
									className="flex items-center px-4 py-2 border rounded-md text-sm sm:text-base bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-sm"
									aria-label="Next Page">
									Вперед
									<ChevronRight size={18} className="ml-1" />
								</button>
							</div>
						)}
					</div>
				</div>
			</section>
		</main>
	);
}
