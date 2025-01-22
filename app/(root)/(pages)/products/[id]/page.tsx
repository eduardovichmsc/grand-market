"use client";
import usePriceFormatter from "@/hooks/usePriceFormatter";
import { isGlobalLoading } from "@/model/atoms";
import { API_URL } from "@/apiiii";
import { ProductType } from "@/types/product.types";
import axios from "axios";
import clsx from "clsx";
import { useSetAtom } from "jotai";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { priceFormatter } from "@/model/functions";
import { categoriesArray } from "@/store/categories";
import { manufacturersArray } from "@/store/manufacturers";
import { countriesArray } from "@/store/countries";
import { productsArray } from "@/store/products";

export default function ProductPageById() {
	const router = useRouter();

	// модалка загрузки
	const setIsLoadingModal = useSetAtom(isGlobalLoading);
	setIsLoadingModal(true);

	const [, setIsLoading] = useState(true);
	const { id } = useParams();

	const [product, setProduct] = useState<ProductType | undefined>();

	const [details, setDetails] = useState<{
		countryName?: string;
		brandName?: string;
		categoryName?: string;
	}>({ brandName: "", categoryName: "", countryName: "" });

	const fetchDetails = useCallback(async () => {
		try {
			const categoryName = categoriesArray.find(
				(category) => category.id === product?.categoryId
			);
			const brandName = manufacturersArray.find(
				(manufacturer) => manufacturer.id === product?.manufacturerId
			);
			const countryName = countriesArray.find(
				(country) => country.id === product?.countryId
			);
			setDetails((prevData) => ({
				...prevData,
				brandName: brandName?.name,
				categoryName: categoryName?.name,
				countryName: countryName?.name,
			}));
		} catch (error) {
			console.error(error);
		}
	}, [product?.categoryId, product?.countryId, product?.manufacturerId]);

	console.log(product);

	const handleOrder = () => {
		const text = `
			Здравствуйте,\n\n
			 Я хочу заказать у вас ${product?.categoryId} - ${product?.name}.
		`;

		const phone = "+77019265005";
		router.push("https://wa.me/" + phone + "?text=" + text);
	};

	useEffect(() => {
		const fetchProduct = async () => {
			try {
				const response = productsArray.find((product) => product.id === +id);
				setProduct(response);
				console.log(response);
			} catch (error) {
				console.error(error);
			} finally {
				setIsLoading(false);
			}
		};
		fetchProduct();
	}, [id]);

	useEffect(() => {
		fetchDetails();
	}, [fetchDetails, product]);

	if (!product) {
		return <div className="container p-10"></div>;
	}

	if (product) {
		setIsLoadingModal(false);
	}

	return (
		<main className="container py-28">
			<section className="w-full md:w-[85%] mx-auto space-y-40">
				{product ? (
					<div className="flex flex-col md:flex-row gap-10">
						<div className="basis-full md:basis-3/5">
							<div
								className={clsx("relative w-full aspect-[9/5]", {
									"bg-black/10": !product.image,
								})}>
								{product.image && (
									<Image
										src={"/uploads/" + product.image}
										fill
										alt={product.image || "photo"}
										className="object-contain"
									/>
								)}
							</div>
						</div>
						<div className="basis-full md:basis-2/5 flex flex-col gap-4">
							<p className="uppercase font-semibold text-4xl">
								{product?.name}
							</p>
							<div className="space-y-2">
								{product.priceTo && product.priceTo !== 0 ? (
									<p className="font-medium text-res-green text-2xl md:text-xl">
										от {priceFormatter(product.price)} до{" "}
										{priceFormatter(product.priceTo)} ₸
									</p>
								) : (
									<p className="font-medium text-res-green text-2xl md:text-xl">
										от {priceFormatter(product.price)} ₸
									</p>
								)}
								<p className="text-black/50 w-fit">
									[ Цену уточнять у менеджера ]
								</p>
							</div>

							{/* Кнопка - заказать */}
							<button
								className="py-4 w-full bg-res-green flex justify-center items-center gap-2 text-white rounded-xl hover:opacity-90"
								onClick={handleOrder}>
								<p className="text-xl md:text-lg uppercase">Заказать</p>
								<ArrowRight className="p-0.5" />
							</button>

							{/* Описание */}
							<div className="space-y-4 md:space-y-2 mt-4">
								<p className="text-res-green font-semibold text-2xl md:text-xl">
									Описание
								</p>
								<hr className="bg-res-green w-full h-[4px]" />
								<div className="">
									<p className="font-medium text-muted-foreground text-xl md:text-lg">
										{product.description}
									</p>
								</div>
							</div>

							{/* Детали */}
							<div className="space-y-4 md:space-y-2 mt-4">
								<p className="text-res-green font-semibold text-2xl md:text-xl">
									Детали
								</p>
								<hr className="bg-res-green w-full h-[4px]" />

								<div className="">
									<ul className="list-none space-y-1">
										<li className="flex justify-between text-xl md:text-lg">
											<p className="text-res-green font-medium text-left">
												Тип холодоснабжения
											</p>
											<p className="text-muted-foreground text-right">
												{details.categoryName && details.categoryName.length > 0
													? details.categoryName
													: "Не указано"}
											</p>
										</li>
										<li className="flex justify-between text-xl md:text-lg">
											<p className="text-res-green font-medium text-left">
												Бренд
											</p>
											<p className="text-muted-foreground text-right">
												{details.brandName && details.brandName.length > 0
													? details.brandName
													: "Не указано"}
											</p>
										</li>
										<li className="flex justify-between text-xl md:text-lg">
											<p className="text-res-green font-medium text-left">
												Гарантия, месяц
											</p>
											<p className="text-muted-foreground text-right">12</p>
										</li>
										<li className="flex justify-between text-xl md:text-lg">
											<p className="text-res-green font-medium text-left">
												Страна производства
											</p>
											<p className="text-muted-foreground text-right">
												{details.countryName && details.countryName.length > 0
													? details.countryName
													: "Не указано"}
											</p>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				) : (
					<div className="w-dvw h-dvh">
						<p>Не смогли найти данный продукт</p>
					</div>
				)}

				<div className=""></div>
			</section>
		</main>
	);
}
