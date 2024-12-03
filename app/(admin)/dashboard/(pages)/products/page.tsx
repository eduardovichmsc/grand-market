"use client";

import { formatDate } from "@/app/(admin)/functions";
import {
	editingProductId,
	isProductEditing,
	isProductModalShown,
} from "@/model/atoms";
import { API_URL } from "@/static";
import { FilterState } from "@/types/types";
import axios from "axios";
import { useSetAtom } from "jotai";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

export default function AdminProductPage() {
	const searchQuery = useSearchParams();
	const [isLoading, setIsLoading] = useState(false);

	const setIsEditing = useSetAtom(isProductEditing);
	const setEditingProductId = useSetAtom(editingProductId);
	const setIsModalShown = useSetAtom(isProductModalShown);

	const [filterState] = useState<FilterState>({
		searchValue: searchQuery.get("search") || "",
		selectId: "popular",
		currentPagination: 1,
		isLoading: true,
		selectedCategory: "",
		selectedBrand: "",
	});

	const [products, setProducts] = useState<any>({
		total: 0,
		list: [],
		totalPages: 0,
		limit: 0,
	});

	const getAllProducts = useCallback(
		async (page: number = 1) => {
			try {
				setIsLoading(true);
				const response = await axios.get(API_URL + "products", {
					params: {
						search: filterState.searchValue,
						page: page,
						categoryId: filterState.selectedCategory || undefined,
						manufacturerId: filterState.selectedBrand || undefined,
					},
					withCredentials: true,
				});
				console.log(response);

				setProducts(response.data);
			} catch (error) {
				console.error(error);
			} finally {
				setIsLoading(false);
			}
		},
		[
			filterState.searchValue,
			filterState.selectedBrand,
			filterState.selectedCategory,
		]
	);

	const handleEditProduct = (id: number) => {
		setIsEditing(true);
		setEditingProductId(id);
		setIsModalShown(true);
	};

	const handleAddProduct = () => {
		setIsEditing(false);
		setEditingProductId(undefined);
		setIsModalShown(true);
	};

	const removeProduct = async (id: number) => {
		try {
			const response = await axios.delete(API_URL + "products/" + id);
			if (response.status === 200) {
				getAllProducts();
			}
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		getAllProducts();
	}, [filterState.currentPagination, getAllProducts]);

	return (
		<div className="space-y-6">
			<div className="w-full flex justify-between items-end">
				<p className="text-4xl">Продукты</p>
				<button
					className="w-fit h-fit bg-res-green text-white px-2 py-1 hover:opacity-90"
					onClick={handleAddProduct}>
					Добавить новый продукт
				</button>
			</div>
			<table className="w-full table-auto border-collapse">
				<thead className="text-left">
					<tr className="*:font-normal">
						<th className="table-cell">Артикул</th>
						<th className="table-cell">Категория</th>
						<th className="table-cell">Бренд</th>
						<th className="table-cell">Наименование товара</th>
						<th className="table-cell">Описание</th>
						<th className="table-cell">Дата создания</th>
						<th className="table-cell">Дата изменения</th>
						<th className="table-cell"></th>
						<th className="table-cell"></th>
					</tr>
				</thead>
				<tbody className="text-left">
					{isLoading === false &&
						products.list.map((product) => (
							<tr key={product.id}>
								<td className="table-cell">{product.id}</td>
								<td className="table-cell">{product.categoryId}</td>
								<td className="table-cell">{product.manufacturerId}</td>
								<td className="table-cell">{product.name}</td>
								<td className="table-cell">{product.description}</td>
								<td className="table-cell">{formatDate(product.createdAt)}</td>
								<td className="table-cell">{formatDate(product.updatedAt)}</td>
								<td className="table-cell">
									<button
										className="edit"
										onClick={() => handleEditProduct(product.id)}>
										Изменить
									</button>
								</td>
								<td className="table-cell">
									<button
										className="delete"
										onClick={() => removeProduct(product.id)}>
										Удалить
									</button>
								</td>
							</tr>
						))}
				</tbody>
			</table>
		</div>
	);
}
