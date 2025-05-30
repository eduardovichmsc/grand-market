"use client";
import { useState, useMemo, useEffect, useRef } from "react";
import { BannerDefault } from "@/components/banner/default";
import { catalog } from "@/entities/catalog";
import { useSearch } from "@/hooks/useSearch";
import { Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import type { CatalogItemType } from "@/entities/entities.types";
import { CatalogItem } from "@/components/product/item";
import { CatalogFilter } from "@/components/product/filter";
import { isGlobalLoading } from "@/model/atoms";
import { useAtom } from "jotai";
import { PaginationControls } from "@/components/pagination/controls";
import { ProductModal } from "@/components/modal/product";

const itemVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.3,
		},
	},
	exit: {
		opacity: 0,
		y: -20,
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

export default function ProductsPage() {
	const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
	const [selectedSubcategory, setSelectedSubcategory] = useState<number | null>(
		null
	);

	const {
		isLoading,
		searchValue,
		filteredData,
		handleValueChange,
		handleSubmit,
	} = useSearch<CatalogItemType>(catalog.list);

	const [currentPage, setCurrentPage] = useState<number>(1);
	const productListSectionRef = useRef<HTMLDivElement>(null);

	const contentRef = useRef<HTMLDivElement>(null);

	const [modalProductId, setModalProductId] = useState<number | null>(null);

	const handleOpenProductModal = (id: number) => {
		setModalProductId(id);
		document.body.style.overflow = "hidden";
	};

	const handleCloseProductModal = () => {
		setModalProductId(null);
		document.body.style.overflow = "";
	};

	const visibleData = useMemo(() => {
		let dataToFilter = [...filteredData];
		if (selectedCategory !== null) {
			dataToFilter = dataToFilter.filter(
				(item) => item.category_id === selectedCategory
			);
			if (selectedSubcategory !== null) {
				dataToFilter = dataToFilter.filter(
					(item) => item.subcategory_id === selectedSubcategory
				);
			}
		}
		return dataToFilter;
	}, [filteredData, selectedCategory, selectedSubcategory]);

	useEffect(() => {
		setCurrentPage(1);
	}, [searchValue, selectedCategory, selectedSubcategory]);

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
			contentRef.current?.scrollIntoView({
				block: "start",
				behavior: "smooth",
			});
		}
	};

	const [showLoading, setShowLoading] = useAtom(isGlobalLoading);
	const inputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		setShowLoading(isLoading);
	}, [isLoading, setShowLoading]);

	const listAnimationKey = useMemo(() => {
		return `${selectedCategory}-${selectedSubcategory}-${searchValue}-${currentPage}`;
	}, [selectedCategory, selectedSubcategory, searchValue, currentPage]);

	useEffect(() => {
		const handleEsc = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				handleCloseProductModal();
			}
		};

		if (modalProductId !== null) {
			document.body.style.overflow = "hidden";
			window.addEventListener("keydown", handleEsc);
		} else {
			document.body.style.overflow = "";
		}

		return () => {
			window.removeEventListener("keydown", handleEsc);
			document.body.style.overflow = "";
		};
	}, [modalProductId]);

	return (
		<main>
			<BannerDefault
				image="/for-business/banner.png"
				bigText="Виды Оборудование Для Бизнеса"
				smallText="Ваш эксперт в мире торгового оборудования"
				isBordered
			/>
			<div
				className="flex justify-center -mt-8 relative z-10 px-4"
				ref={contentRef}>
				<form
					onSubmit={handleSubmit}
					className="relative flex flex-col justify-center w-full max-w-2xl sm:max-w-3xl">
					<input
						value={searchValue}
						onChange={handleValueChange}
						disabled={showLoading === true}
						ref={inputRef}
						type="text"
						placeholder="Поиск по каталогу..."
						className="relative text-base sm:text-lg border-res-green border-2 w-full py-3 sm:py-4 px-4 pr-12 rounded-md shadow-sm focus:ring-2 focus:ring-res-green/50 focus:border-res-green outline-none"
					/>
					<button
						type="submit"
						title="Найти"
						disabled={showLoading === true}
						className="absolute right-3 top-1/2 -translate-y-1/2 p-1 group rounded-md hover:bg-gray-100 transition-colors disabled:opacity-50">
						<Search className="transition text-res-green group-hover:text-res-green/80 size-7 sm:size-8" />
					</button>
				</form>
			</div>

			<section
				ref={productListSectionRef}
				className="relative container mt-16 sm:mt-24 mb-20 sm:mb-28 space-y-12 sm:space-y-16">
				<div className="w-full min-h-[50vh] flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0">
					<CatalogFilter
						selectedCategory={selectedCategory}
						onSelect={(catId) => {
							contentRef.current?.scrollIntoView({
								block: "start",
								behavior: "smooth",
							});
							setSelectedCategory(catId);
							setSelectedSubcategory(null);
							setCurrentPage(1);
						}}
						selectedSubcategory={selectedSubcategory}
						onSubcategorySelect={(subCatId) => {
							contentRef.current?.scrollIntoView({
								block: "start",
								behavior: "smooth",
							});
							setSelectedSubcategory(subCatId);
							setCurrentPage(1);
						}}
						className="md:basis-1/4 md:sticky md:top-24 md:max-h-[calc(100vh-12rem)] md:overflow-y-auto pt-0 md:pt-16"
					/>

					<div className="md:basis-3/4 space-y-6 sm:space-y-8">
						<p className="font-medium text-base sm:text-lg text-gray-700">
							{visibleData.length > 0
								? `Найдено ${visibleData.length} товаров`
								: "По вашему запросу ничего не найдено."}
						</p>

						{paginatedData.length > 0 ? (
							<motion.div
								key={listAnimationKey}
								className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6"
								variants={containerVariants}
								initial="hidden"
								animate="visible">
								{paginatedData.map((item) => (
									<motion.div key={item.id} variants={itemVariants} layout>
										<CatalogItem
											id={item.id}
											name={item.name}
											description={item.description}
											image={item.preview_image?.[0]}
											onItemClick={handleOpenProductModal}
										/>
									</motion.div>
								))}
							</motion.div>
						) : (
							<div className="flex flex-col items-center justify-center min-h-[30vh] text-center">
								<Search className="size-16 text-gray-300 mb-4" />
								<p className="text-xl text-gray-500">Товары не найдены</p>
								<p className="text-gray-400">
									Попробуйте изменить фильтры или поисковый запрос.
								</p>
							</div>
						)}

						{totalPages > 1 && (
							<PaginationControls
								currentPage={currentPage}
								totalPages={totalPages}
								onPageChange={handlePageChange}
							/>
						)}
					</div>
				</div>
			</section>

			{/* Рендер модального окна продукта */}
			<AnimatePresence>
				{modalProductId !== null && (
					<motion.div
						className="fixed overflow-hidden inset-0 w-full h-screen bg-black/40 backdrop-blur-lg flex justify-center items-center"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.3 }}
						style={{ zIndex: 50 }}>
						<ProductModal
							productId={modalProductId}
							onClose={handleCloseProductModal}
						/>
					</motion.div>
				)}
			</AnimatePresence>
		</main>
	);
}
