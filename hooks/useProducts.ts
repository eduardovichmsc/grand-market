"use client";
import { useMemo } from "react";
import type { CatalogItemType } from "@/entities/entities.types";

export const useProduct = (data: CatalogItemType[], id: number) => {
	const product = useMemo(
		() => data.find((item) => item.id === id),
		[data, id]
	);

	return product;
};
