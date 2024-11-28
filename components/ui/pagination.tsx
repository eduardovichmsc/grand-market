import { ChevronLeft, ChevronRight } from "lucide-react";

export const Pagination = ({
	currentPage,
	totalPages = 1,
	onPageChange,
	showPrevPage,
	showNextPage,
}) => {
	const pageNumbers = Array.from(
		{ length: totalPages },
		(_, index) => index + 1
	);

	return (
		<div className="h-10 justify-self-end flex gap-2">
			{/* назад - */}
			<button
				className="h-full aspect-square flex justify-center items-center bg-black/5 rounded-xl disabled:bg-black/15 disabled:text-black/40"
				onClick={showPrevPage}
				disabled={currentPage === 1}>
				<ChevronLeft />
			</button>

			{pageNumbers.map((index) => (
				<button
					key={index}
					className={`h-full aspect-square flex justify-center items-center rounded-xl cursor-pointer disabled:cursor-default 
            ${
							currentPage === index
								? "bg-res-green text-white"
								: "bg-black/5 text-black"
						}`}
					disabled={currentPage === index}
					onClick={() => onPageChange(index)}>
					{index}
				</button>
			))}

			{/* вперед */}
			<button
				className="h-full aspect-square flex justify-center items-center bg-black/5 rounded-xl disabled:bg-black/15 disabled:text-black/40"
				onClick={showNextPage}
				disabled={currentPage === totalPages}>
				<ChevronRight />
			</button>
		</div>
	);
};
