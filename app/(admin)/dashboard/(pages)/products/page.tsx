/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { formatDate } from "@/app/(admin)/functions";
import {
	editingProductId,
	isProductEditing,
	isProductModalShown,
} from "@/model/atoms";
import { API_URL } from "@/apiiii";
import { ProductsStateType } from "@/types/product.types";
import { FilterState } from "@/types/types";
import axios from "axios";
import { useSetAtom } from "jotai";
import { SearchWithSuspense } from "@/components/SearchWithSuspense";
import { useCallback, useEffect, useState } from "react";

export default function AdminProductPage() {
	const [isLoading, setIsLoading] = useState(false);

	const setIsEditing = useSetAtom(isProductEditing);
	const setEditingProductId = useSetAtom(editingProductId);
	const setIsModalShown = useSetAtom(isProductModalShown);

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

	const getAllProducts = useCallback(async () => {
		try {
			setIsLoading(true);
			const response = await axios.get(API_URL + "products", {
				params: {
					search: filterState.searchValue,
					page: filterState.currentPagination,
					categoryId: filterState.selectedCategory,
					manufacturerId: filterState.selectedBrand,
				},
				withCredentials: true,
			});

			setProducts(response.data);
		} catch (error) {
			console.error("Ошибка при загрузке данных продуктов:", error);
		} finally {
			setIsLoading(false);
		}
	}, [filterState]);

	useEffect(() => {
		getAllProducts();
	}, [
		filterState.currentPagination,
		filterState.searchValue,
		filterState.selectedCategory,
		filterState.selectedBrand,
	]);

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
			await axios.delete(API_URL + "products/" + id);
			getAllProducts();
		} catch (error) {
			console.error("Ошибка при удалении продукта:", error);
		}
	};

	return (
		<div className="space-y-6">
			{/* Header */}
			<div className="w-full flex justify-between items-end">
				<p className="text-4xl">Продукты</p>
				<button
					className="w-fit h-fit bg-res-green text-white px-2 py-1 hover:opacity-90"
					onClick={handleAddProduct}>
					Добавить новый продукт
				</button>
			</div>

			{/* Search */}
			<SearchWithSuspense />

			{/* Таблица продуктов */}
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
					{isLoading ? (
						<tr>
							<td colSpan={9} className="text-center py-6">
								Загружаем...
							</td>
						</tr>
					) : products.list.length > 0 ? (
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
						))
					) : (
						<tr>
							<td colSpan={9} className="text-center py-6">
								Нет данных.
							</td>
						</tr>
					)}
				</tbody>
			</table>
		</div>
	);
}
