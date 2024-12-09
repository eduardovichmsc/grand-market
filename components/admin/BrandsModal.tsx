"use client";

import { useAtom } from "jotai";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "@/apiiii";
import { editingBrandId, isBrandModalShown } from "@/model/atoms";
import clsx from "clsx";

export const BrandModal = () => {
	const [isShown, setIsShown] = useAtom(isBrandModalShown);
	const [brandId, setBrandId] = useAtom(editingBrandId);

	const [form, setForm] = useState({
		name: "",
	});

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		try {
			if (brandId) {
				const response = await axios.put(
					API_URL + "manufacturers/" + brandId,
					{
						name: form.name,
					},
					{ withCredentials: true }
				);

				if (response.status === 200) {
					setForm({ name: "" });
					setIsShown(false);
					setBrandId(null);
				}
			} else {
				const response = await axios.post(
					API_URL + "manufacturers/",
					{
						name: form.name,
					},
					{
						withCredentials: true,
					}
				);

				if (response.status === 200) {
					setForm({ name: "" });
					setIsShown(false);
				}
			}
		} catch (error) {
			console.error("Ошибка при отправке формы:", error);
		}
	};

	useEffect(() => {
		if (brandId) {
			(async () => {
				try {
					const response = await axios.get(
						API_URL + "manufacturers/" + brandId,
						{ withCredentials: true }
					);
					setForm({ name: response.data.name });
				} catch (error) {
					console.error("Ошибка при загрузке данных категории:", error);
				}
			})();
		} else {
			setForm({ name: "" });
		}
	}, [brandId]);

	return (
		isShown && (
			<div className="absolute z-50 w-screen h-screen bg-black/50 flex justify-center items-center">
				<div className="bg-white p-8 shadow-md">
					<form onSubmit={handleSubmit} className="flex flex-col space-y-4">
						<input
							type="text"
							placeholder="Название"
							className="input border px-4 py-2"
							value={form.name}
							onChange={(e) =>
								setForm((prev) => ({
									...prev,
									name: e.target.value,
								}))
							}
						/>
						<button
							type="submit"
							className={clsx(
								" text-white px-3 py-2 hover:opacity-90",
								{
									"bg-blue-600": brandId,
								},
								{
									"bg-res-green": brandId === null,
								}
							)}>
							{brandId ? "Сохранить изменения" : "Добавить"}
						</button>
						<button
							type="button"
							className="bg-white border border-res-green px-3 py-2"
							onClick={() => {
								setIsShown(false);
								setBrandId(null);
							}}>
							Закрыть
						</button>
					</form>
				</div>
			</div>
		)
	);
};
