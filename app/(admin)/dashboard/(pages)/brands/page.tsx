"use client";

import { formatDate } from "@/app/(admin)/functions";
import { editingBrandId, isBrandModalShown } from "@/model/atoms";
import { API_URL } from "@/apiiii";
import { BrandsType } from "@/types/types";
import axios from "axios";
import { useSetAtom } from "jotai";
import { useEffect, useState } from "react";

export default function AdminBrandsPage() {
	const [isLoading] = useState<boolean>(false);
	const setIsModalShown = useSetAtom(isBrandModalShown);
	const setEditingBrandId = useSetAtom(editingBrandId);

	const [brands, setBrands] = useState<BrandsType[]>([]);

	const getBrands = async () => {
		try {
			const response = await axios.get(API_URL + "manufacturers", {
				withCredentials: true,
			});
			setBrands(response.data);
		} catch (error) {
			console.error(error);
		}
	};

	const removeBrand = async (id: number) => {
		try {
			const response = await axios.delete(API_URL + "manufacturers/" + id);
			console.log(response);

			if (response.status === 200) {
				setIsModalShown(false);
				getBrands();
			}
		} catch (error) {
			console.error(error);
		}
	};

	const openAddBrandModal = () => {
		setEditingBrandId(null);
		setIsModalShown(true);
	};

	const openEditBrandModal = (brandId: number) => {
		setEditingBrandId(brandId);
		setIsModalShown(true);
	};

	useEffect(() => {
		getBrands();
	}, []);

	return (
		<div className="space-y-6">
			<div className="w-full flex justify-between items-end">
				<p className="text-4xl">Производители</p>
				<button
					className="w-fit h-fit bg-res-green text-white px-2 py-1 hover:opacity-90"
					onClick={openAddBrandModal}>
					Добавить нового производителя
				</button>
			</div>
			<table className="w-full table-auto border-collapse">
				<thead className="text-left">
					<tr className="*:font-normal">
						<th className="table-cell">Индекс</th>
						<th className="table-cell">Значение</th>
						<th className="table-cell">Дата создания</th>
						<th className="table-cell">Дата изменения</th>
						<th className="table-cell"></th>
						<th className="table-cell"></th>
					</tr>
				</thead>
				<tbody className="text-left">
					{isLoading === false &&
						brands.map((brand) => (
							<tr key={brand.id}>
								<td className="table-cell">{brand.id}</td>
								<td className="table-cell">{brand.name}</td>
								<td className="table-cell">{formatDate(brand.createdAt)}</td>
								<td className="table-cell">{formatDate(brand.updatedAt)}</td>
								<td className="table-cell">
									<button
										className="edit"
										onClick={() => openEditBrandModal(brand.id)}>
										Изменить
									</button>
								</td>
								<td className="table-cell">
									<button
										className="delete"
										onClick={() => removeBrand(brand.id)}>
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
