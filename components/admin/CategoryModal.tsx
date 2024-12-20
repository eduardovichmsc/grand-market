"use client";

import { useAtom } from "jotai";
import React, { useEffect, useState } from "react";
import { transliterate } from "transliteration";
import axios from "axios";
import { API_URL } from "@/apiiii";
import { isCategoryModalShown, editingCategoryId } from "@/model/atoms";
import clsx from "clsx";
import { formatToTag } from "@/app/(admin)/functions";

export const CategoryModal = () => {
	const [isShown, setIsShown] = useAtom(isCategoryModalShown);
	const [categoryId, setCategoryId] = useAtom(editingCategoryId);

	const [form, setForm] = useState({
		name: "",
		tag: "",
	});

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		const tagName = formatToTag(form.name);

		try {
			if (categoryId) {
				const response = await axios.put(
					API_URL + "categories/" + categoryId,
					{
						name: form.name,
						tag: tagName,
					},
					{
						withCredentials: true,
					}
				);

				if (response.status === 200) {
					setForm({ name: "", tag: "" });
					setIsShown(false);
					setCategoryId(null);
				}
			} else {
				const response = await axios.post(
					API_URL + "categories/",
					{
						name: form.name,
						tag: tagName,
					},
					{
						withCredentials: true,
					}
				);

				if (response.status === 200) {
					setForm({ name: "", tag: "" });
					setIsShown(false);
				}
			}
		} catch (error) {
			console.error("Ошибка при отправке формы:", error);
		}
	};

	useEffect(() => {
		if (categoryId) {
			(async () => {
				try {
					const response = await axios.get(
						API_URL + "categories/" + categoryId
					);
					setForm({ name: response.data.name, tag: response.data.tag });
				} catch (error) {
					console.error("Ошибка при загрузке данных категории:", error);
				}
			})();
		} else {
			setForm({ name: "", tag: "" });
		}
	}, [categoryId]);

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
									"bg-blue-600": categoryId,
								},
								{
									"bg-res-green": categoryId === null,
								}
							)}>
							{categoryId ? "Сохранить изменения" : "Добавить"}
						</button>
						<button
							type="button"
							className="bg-white border border-res-green px-3 py-2"
							onClick={() => {
								setIsShown(false);
								setCategoryId(null);
							}}>
							Закрыть
						</button>
					</form>
				</div>
			</div>
		)
	);
};
