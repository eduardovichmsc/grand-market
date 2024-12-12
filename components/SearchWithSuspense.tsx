"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

const SearchHandler = () => {
	const searchParams = useSearchParams();
	const searchValue = searchParams.get("search") || "";

	return <p>{searchValue}</p>;
};

export const SearchWithSuspense = () => {
	return (
		<Suspense fallback={<div>Загрузка...</div>}>
			<SearchHandler />
		</Suspense>
	);
};
