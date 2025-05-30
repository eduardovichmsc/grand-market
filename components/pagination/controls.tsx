"use client";

import { useMemo } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import clsx from "clsx";

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
	const shouldShowRightDots = rightSiblingIndex < totalPages - 2;

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

interface Props {
	currentPage: number;
	totalPages: number;
	onPageChange: (page: number) => void;
	siblingsCount?: number;
	className?: string;
}

export function PaginationControls({
	currentPage,
	totalPages,
	onPageChange,
	siblingsCount = 1,
	className,
}: Props) {
	const pageNumbers = useMemo(() => {
		return generatePageNumbers(totalPages, currentPage, siblingsCount);
	}, [totalPages, currentPage, siblingsCount]);

	if (totalPages <= 1) {
		return null;
	}

	return (
		<div
			className={clsx(
				"flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-2 mt-12 pt-8 border-t border-gray-200",
				className
			)}>
			<button
				onClick={() => onPageChange(currentPage - 1)}
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
							onClick={() => onPageChange(page)}
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
				onClick={() => onPageChange(currentPage + 1)}
				disabled={currentPage === totalPages}
				className="flex items-center px-4 py-2 border rounded-md text-sm sm:text-base bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-sm"
				aria-label="Next Page">
				Вперед
				<ChevronRight size={18} className="ml-1" />
			</button>
		</div>
	);
}
