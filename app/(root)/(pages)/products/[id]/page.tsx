"use client";
import usePriceFormatter from "@/hooks/usePriceFormatter";
import { isGlobalLoading } from "@/model/atoms";
import { API_URL } from "@/static";
import { ProductType } from "@/types/product.types";
import axios from "axios";
import clsx from "clsx";
import { useSetAtom } from "jotai";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

export default function ProductPageById() {
	// модалка загрузки
	const setIsLoadingModal = useSetAtom(isGlobalLoading);
	setIsLoadingModal(true);

	const [, setIsLoading] = useState(true);
	const { id } = useParams();

	const [product, setProduct] = useState<ProductType | undefined>();
	const formatedPrice = usePriceFormatter(product?.price);

	const [details, setDetails] = useState<{
		countryName?: string;
		brandName?: string;
		categoryName?: string;
	}>({});

	const fetchDetails = useCallback(async () => {
		try {
			const categoryName = await axios.get(
				API_URL + "categories/" + product?.categoryId
			);
			const brandName = await axios.get(
				API_URL + "manufacturers/" + product?.manufacturerId
			);
			const countryName = await axios.get(
				API_URL + "countries/" + product?.countryId
			);
			setDetails((prevData) => ({
				...prevData,

				brandName: brandName.data.name,
				categoryName: categoryName.data.name,
				countryName: countryName.data.name,
			}));
		} catch (error) {
			console.error(error);
		}
	}, [product]);

	useEffect(() => {
		const fetchProduct = async () => {
			try {
				const response = await axios.get(API_URL + "products/" + id);
				setProduct(response.data);
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
			<section className="w-[85%] mx-auto space-y-40">
				<div className="flex gap-10">
					<div className="basis-3/5">
						<div
							className={clsx("relative w-full aspect-[9/5]", {
								"bg-black/10": !product.image,
							})}>
							{product.image && (
								<Image
									src={"http://localhost:5000/uploads/" + product.image}
									fill
									alt={product.image || "photo"}
									className="object-contain"
								/>
							)}
						</div>
					</div>
					<div className="basis-2/5 flex flex-col gap-4">
						<p className="uppercase font-semibold text-4xl">{product?.name}</p>
						<div>
							<p className="font-medium text-res-green text-xl">
								от {formatedPrice} ₸
							</p>
						</div>

						{/* Кнопка - заказать */}
						<Link
							href={""}
							className="py-4 w-full bg-res-green flex justify-center items-center gap-2 text-white rounded-xl hover:opacity-90">
							<p className="text-lg uppercase">Заказать</p>
							<ArrowRight className="p-0.5" />
						</Link>

						{/* Описание */}
						<div className="space-y-2 mt-4">
							<p className="text-res-green font-semibold text-xl">Описание</p>
							<hr className="bg-res-green w-full h-[4px]" />
							<div className="">
								<p className="font-medium text-muted-foreground text-lg">
									{product.description}
								</p>
							</div>
						</div>

						{/* Детали */}
						<div className="space-y-2 mt-4">
							<p className="text-res-green font-semibold text-xl">Детали</p>
							<hr className="bg-res-green w-full h-[4px]" />

							<div className="">
								<ul className="list-none space-y-1">
									<li className="flex justify-between text-lg">
										<p className="text-res-green font-medium">
											Тип холодоснабжения
										</p>
										<p className="text-muted-foreground">
											{details.categoryName?.length > 0
												? details.categoryName
												: "Не указано"}
										</p>
									</li>
									<li className="flex justify-between text-lg">
										<p className="text-res-green font-medium">Бренд</p>
										<p className="text-muted-foreground">
											{details.brandName?.length > 0
												? details.brandName
												: "Не указано"}
										</p>
									</li>
									<li className="flex justify-between text-lg">
										<p className="text-res-green font-medium">
											Гарантия, месяц
										</p>
										<p className="text-muted-foreground">12</p>
									</li>
									<li className="flex justify-between text-lg">
										<p className="text-res-green font-medium">
											Страна производства
										</p>
										<p className="text-muted-foreground">
											{details.countryName?.length > 0
												? details.countryName
												: "Не указано"}
										</p>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>

				<div className=""></div>
			</section>
		</main>
	);
}
