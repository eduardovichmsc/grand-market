"use client";

import { formatDate } from "@/app/(admin)/functions";
import { editingBrandId, isBrandModalShown } from "@/model/atoms";
import { API_URL } from "@/static";
import axios from "axios";
import { useSetAtom } from "jotai";
import { useEffect, useState } from "react";

export default function AdminCountriesPage() {
	const route = "countries/";

	const [isLoading, setIsLoading] = useState<boolean>(false);
	const setIsModalShown = useSetAtom(isBrandModalShown);
	const setEditingBrandId = useSetAtom(editingBrandId);

	const [countries, setCountries] = useState<any>([]);

	const getCountries = async () => {
		try {
			const response = await axios.get(API_URL + route);
			setCountries(response.data);
		} catch (error) {
			console.error(error);
		}
	};

	const removeCountry = async (id: number) => {
		try {
			const response = await axios.delete(API_URL + route + id);
			console.log(response);

			if (response.status === 200) {
				setIsModalShown(false);
				getCountries();
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
		getCountries();
	}, []);

	return (
		<div className="space-y-6">
			<div className="w-full flex justify-between items-end">
				<p className="text-4xl">Страны производителей</p>
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
						countries.map((country) => (
							<tr key={country.id}>
								<td className="table-cell">{country.id}</td>
								<td className="table-cell">{country.name}</td>
								<td className="table-cell">{formatDate(country.createdAt)}</td>
								<td className="table-cell">{formatDate(country.updatedAt)}</td>
								<td className="table-cell">
									<button
										className="edit"
										onClick={() => openEditBrandModal(country.id)}>
										Изменить
									</button>
								</td>
								<td className="table-cell">
									<button
										className="delete"
										onClick={() => removeCountry(country.id)}>
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
