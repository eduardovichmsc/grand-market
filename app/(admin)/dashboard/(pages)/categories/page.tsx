"use client";

import { formatDate } from "@/app/(admin)/functions";
import {
	isAlertShown,
	isCategoryModalShown,
	editingCategoryId,
} from "@/model/atoms";
import { API_URL } from "@/static";
import axios from "axios";
import { useSetAtom } from "jotai";
import { useEffect, useState } from "react";

export default function AdminCategoriesPage() {
	const route = "categories/";

	const [isLoading, setIsLoading] = useState<boolean>(false);
	const showAlert = useSetAtom(isAlertShown);
	const setIsModalShown = useSetAtom(isCategoryModalShown);
	const setEditingCategoryId = useSetAtom(editingCategoryId);

	const [categories, setCategories] = useState<any>([]);

	const getCategories = async () => {
		try {
			setIsLoading(true);
			const response = await axios.get(API_URL + route);
			setCategories(response.data);
		} catch (error) {
			console.error(error);
		} finally {
			setIsLoading(false);
		}
	};

	const removeCategory = async (id: number) => {
		try {
			const response = await axios.delete(API_URL + route + id);
			if (response.status === 200) {
				showAlert(true);
				setIsModalShown(false);
				getCategories();
			}
		} catch (error) {
			console.error(error);
		}
	};

	const openAddCategoryModal = () => {
		setEditingCategoryId(null);
		setIsModalShown(true);
	};

	const openEditCategoryModal = (categoryId: number) => {
		setEditingCategoryId(categoryId);
		setIsModalShown(true);
	};

	useEffect(() => {
		getCategories();
	}, []);

	return (
		<div className="space-y-6">
			<div className="w-full flex justify-between items-end">
				<p className="text-4xl">Категорий</p>
				<button
					className="w-fit h-fit bg-res-green text-white px-2 py-1 hover:opacity-90"
					onClick={openAddCategoryModal}>
					Добавить новую категорию
				</button>
			</div>
			<table className="w-full table-auto border-collapse">
				<thead className="text-left">
					<tr className="*:font-normal">
						<th className="table-cell">Индекс</th>
						<th className="table-cell">Значение</th>
						<th className="table-cell">Тег</th>
						<th className="table-cell">Дата создания</th>
						<th className="table-cell">Дата изменения</th>
						<th className="table-cell"></th>
						<th className="table-cell"></th>
					</tr>
				</thead>
				<tbody className="text-left">
					{isLoading === false &&
						categories.map((category) => (
							<tr key={category.id}>
								<td className="table-cell">{category.id}</td>
								<td className="table-cell">{category.name}</td>
								<td className="table-cell">{category.tag}</td>
								<td className="table-cell">{formatDate(category.createdAt)}</td>
								<td className="table-cell">{formatDate(category.updatedAt)}</td>
								<td className="table-cell">
									<button
										className="edit"
										onClick={() => openEditCategoryModal(category.id)}>
										Изменить
									</button>
								</td>
								<td className="table-cell">
									<button
										className="delete"
										onClick={() => removeCategory(category.id)}>
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
