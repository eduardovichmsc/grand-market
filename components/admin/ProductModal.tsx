"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "@/static";
import { useAtom } from "jotai";
import {
	editingProductId,
	isProductEditing,
	isProductModalShown,
} from "@/model/atoms";
import { useForm } from "react-hook-form";
import clsx from "clsx";

export const ProductModal = () => {
	const [isShown, setIsShown] = useAtom(isProductModalShown);
	const [isEditing, setIsEditing] = useAtom(isProductEditing);
	const [productId, setEditingProductId] = useAtom(editingProductId);

	const [categories, setCategories] = useState([]);
	const [brands, setBrands] = useState([]);
	const [countries, setCountries] = useState([]);

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({
		defaultValues: {},
	});

	const fetchData = async (
		url: string,
		setState: any,
		errorMessage: string
	) => {
		try {
			const response = await axios.get(url);
			if (response.data && response.data.length > 0) {
				setState(response.data);
			} else {
				console.error(errorMessage);
			}
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		fetchData(API_URL + "categories", setCategories, "Категории не найдены");
		fetchData(API_URL + "manufacturers", setBrands, "Производители не найдены");
		fetchData(API_URL + "countries", setCountries, "Страны не найдены");
	}, []);

	useEffect(() => {
		if (isEditing && productId) {
			(async () => {
				try {
					const response = await axios.get(`${API_URL}products/${productId}`);
					reset(response.data);
				} catch (error) {
					console.error("Ошибка загрузки данных продукта:", error);
				}
			})();
		} else {
			reset({});
		}
	}, [isEditing, productId, reset]);

	const onSubmit = async (data) => {
		const formData = new FormData();

		formData.append("name", data.name);
		formData.append("description", data.description);
		formData.append("price", data.price);
		formData.append("categoryId", data.categoryId);
		formData.append("manufacturerId", data.manufacturerId);
		formData.append("countryId", data.countryId);

		if (data.image && data.image[0]) {
			formData.append("image", data.image[0]);
		} else if (!isEditing && data.image && !data.image[0]) {
		}

		try {
			// изменяем продукт
			if (isEditing) {
				await axios.put(`${API_URL}products/${productId}`, formData, {
					headers: { "Content-Type": "multipart/form-data" },
				});
			} else {
				// создаем продукт
				await axios.post(API_URL + "products", formData, {
					headers: { "Content-Type": "multipart/form-data" },
				});
			}

			setIsShown(false);
			reset();
			setIsEditing(false);
			setEditingProductId(undefined);
		} catch (error) {
			console.error("Ошибка при отправке формы:", error);
		}
	};

	return (
		isShown && (
			<div className="absolute z-50 w-screen h-screen bg-black/50 flex justify-center items-center">
				<div className="bg-white p-8 shadow-md w-96">
					<form
						onSubmit={handleSubmit(onSubmit)}
						className="flex flex-col space-y-2">
						<div>
							<input
								type="text"
								placeholder="Название продукта"
								className="input"
								{...register("name", { required: "Название обязательно" })}
							/>
							{errors.name && (
								<p className="text-red-500">{errors.name.message}</p>
							)}
						</div>

						<div>
							<textarea
								placeholder="Описание продукта"
								className="textarea"
								{...register("description", {
									required: "Описание обязательно",
								})}
							/>
							{errors.description && (
								<p className="text-red-500">{errors.description.message}</p>
							)}
						</div>

						<div>
							<input
								type="number"
								placeholder="Цена продукта"
								className="input"
								{...register("price", {
									required: "Цена обязательна",
									valueAsNumber: true,
								})}
							/>
							{errors.price && (
								<p className="text-red-500">{errors.price.message}</p>
							)}
						</div>

						<div>
							<label className="block">Загрузить фото</label>
							<input
								type="file"
								accept="image/*"
								className="input"
								{...register("image")}
							/>
						</div>

						<div className="flex flex-col gap-1">
							<label>Категория</label>
							<select
								className="input"
								{...register("categoryId", { required: "Выберите категорию" })}>
								<option value="" disabled>
									Выберите категорию
								</option>
								{categories.map((category) => (
									<option key={category.id} value={category.id}>
										{category.name}
									</option>
								))}
							</select>
							{errors.categoryId && (
								<p className="text-red-500">{errors.categoryId.message}</p>
							)}
						</div>

						<div className="flex flex-col gap-1">
							<label>Производитель</label>
							<select
								className="input"
								{...register("manufacturerId", {
									required: "Выберите производителя",
								})}>
								<option value="" disabled>
									Выберите производителя
								</option>
								{brands.map((brand) => (
									<option key={brand.id} value={brand.id}>
										{brand.name}
									</option>
								))}
							</select>
							{errors.manufacturerId && (
								<p className="text-red-500">{errors.manufacturerId.message}</p>
							)}
						</div>

						<div className="flex flex-col gap-1">
							<label>Страна</label>
							<select
								className="input"
								{...register("countryId", { required: "Выберите страну" })}>
								<option value="" disabled>
									Выберите страну
								</option>
								{countries.map((country) => (
									<option key={country.id} value={country.id}>
										{country.name}
									</option>
								))}
							</select>
							{errors.countryId && (
								<p className="text-red-500">{errors.countryId.message}</p>
							)}
						</div>

						<button
							type="submit"
							className={clsx(
								"text-white px-3 py-2 hover:opacity-90",
								{
									"bg-blue-600": isEditing,
								},
								{
									"bg-res-green": !isEditing,
								}
							)}>
							{isEditing ? "Сохранить изменения" : "Добавить"}
						</button>
						<button
							type="button"
							className="bg-white border border-res-green px-3 py-2"
							onClick={() => {
								setIsShown(false);
								setIsEditing(false);
								setEditingProductId(undefined);
							}}>
							Закрыть
						</button>
					</form>
				</div>
			</div>
		)
	);
};
