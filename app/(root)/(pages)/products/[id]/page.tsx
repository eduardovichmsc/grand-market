"use client";
import clsx from "clsx";
import { ArrowLeftIcon, ArrowRight, LoaderIcon, ShareIcon } from "lucide-react"; // No ArrowLeftIcon in original, keep if intended elsewhere
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

import { useProduct } from "@/hooks/useProduct";
import { catalog } from "@/entities/catalog";
import { priceFormatter } from "@/model/functions";
import { categories } from "@/entities/categories";
import { Breadcrumb } from "@/components/custom_ui/breadcrumb";
import { Alert } from "@/components/custom_ui/alert";

export default function ProductPageById() {
	const { id } = useParams();
	const product = useProduct(catalog.list, +id);

	const [imageArray, setImageArray] = useState<string[]>(["/placeholder.svg"]);
	const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
	const [imageLoading, setImageLoading] = useState<boolean>(true);

	const [showShareAlert, setShowShareAlert] = useState<boolean>(false);
	const [shareAlertMessage, setShareAlertMessage] = useState<string>("");

	useEffect(() => {
		if (product?.preview_image && product.preview_image.length > 0) {
			setImageArray(product.preview_image);
			setSelectedImageIndex(0);
		} else {
			setImageArray(["/placeholder.svg"]);
			setSelectedImageIndex(0);
		}
		setImageLoading(true);
	}, [product]);

	const currentImageSrc = imageArray[selectedImageIndex] || "/placeholder.svg";

	const handleThumbnailClick = (index: number) => {
		if (index !== selectedImageIndex) {
			setImageLoading(true);
			setSelectedImageIndex(index);
		}
	};

	const handleMainImageError = () => {
		const updatedImageArray = [...imageArray];
		if (updatedImageArray[selectedImageIndex]) {
			updatedImageArray[selectedImageIndex] = "/placeholder.svg";
			setImageArray(updatedImageArray);
		}
		setImageLoading(false);
	};

	const handleOrder = (name: string, category: string) => {
		const text = `
			Здравствуйте,\n
			 Я хочу заказать у вас ${category} - ${name}.
		`;
		const phone = "+77788869052";
		const whatsappUrl = `https://wa.me/${phone.replace(
			/\+/g,
			""
		)}?text=${encodeURIComponent(text)}`;
		window.open(whatsappUrl, "_blank");
		console.log("Order text:", text, "Phone:", phone);
	};

	const handleShareClick = async () => {
		const urlToShare = window.location.href;
		try {
			if (navigator.clipboard && navigator.clipboard.writeText) {
				await navigator.clipboard.writeText(urlToShare);
				setShareAlertMessage("Ссылка скопирована в буфер обмена");
			} else {
				setShareAlertMessage("Ссылка для копирования: " + urlToShare);
			}
		} catch (err) {
			setShareAlertMessage(
				"Не удалось скопировать ссылку. Попробуйте вручную."
			);
		}
		setShowShareAlert(true);
	};

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	}, [id]);

	return (
		<main className="container py-28">
			<section className="w-full md:w-[85%] mx-auto space-y-40">
				{product ? (
					<div className="flex flex-col md:flex-row gap-10">
						{/* Фото карточка - STICKY PART */}
						<div className="md:sticky md:top-0 md:self-start basis-full md:basis-3/5 lg:basis-[55%] flex flex-col gap-3 md:gap-4 md:max-h-[calc(90vh-4rem)] md:py-2">
							<Breadcrumb product={product} className="-mt-14" />

							{/* Главное фото */}
							<div className="relative w-full aspect-[16/10] sm:aspect-[4/3] md:aspect-[16/10] bg-gray-50 rounded-lg overflow-hidden">
								<Image
									key={currentImageSrc}
									src={currentImageSrc}
									fill
									onError={handleMainImageError}
									alt={
										product.name
											? `${product.name} - Image ${selectedImageIndex + 1}`
											: `Photo ${selectedImageIndex + 1}`
									}
									onLoad={() => setImageLoading(false)}
									className={clsx(
										"transition-all duration-300 object-contain",
										{
											"opacity-0 blur-md scale-95": imageLoading,
											"opacity-100 blur-0 scale-100": !imageLoading,
										}
									)}
									priority={selectedImageIndex === 0}
									sizes="(max-width: 768px) 80vw, (max-width: 1200px) 45vw, 50vw"
								/>
								{imageLoading && (
									<div className="absolute inset-0 flex justify-center items-center bg-gray-100/50">
										<LoaderIcon className="animate-spin text-res-green size-8 sm:size-10" />
									</div>
								)}
							</div>

							{/* Предпросмотр - навигация */}
							{imageArray.length > 1 && (
								<div className="w-full overflow-x-auto pb-1 scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-gray-100">
									<div className="flex gap-2 p-1">
										{imageArray.map((imgSrc, index) => (
											<button
												key={index}
												type="button"
												onClick={() => handleThumbnailClick(index)}
												className={clsx(
													"relative aspect-square h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20 flex-shrink-0 rounded-md overflow-hidden border-2 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
													selectedImageIndex === index
														? "border-res-green ring-1 ring-res-green ring-offset-1"
														: "border-gray-200 hover:border-res-green/70 focus-visible:ring-res-green"
												)}
												aria-label={`View image ${index + 1} for ${
													product.name
												}`}
												title={`View image ${index + 1}`}>
												<Image
													src={imgSrc || "/placeholder.svg"}
													fill
													alt={`Thumbnail ${index + 1} for ${
														product.name || "product"
													}`}
													className="object-contain p-0.5"
													sizes="80px"
													onError={(e) => {
														(e.target as HTMLImageElement).src =
															"/placeholder.svg";
													}}
												/>
											</button>
										))}
									</div>
								</div>
							)}
						</div>

						{/* Информаций про продукт */}
						<div className="basis-full md:basis-2/5 flex flex-col gap-4">
							<p className="uppercase font-semibold text-4xl">
								{product?.name}
							</p>
							<div className="space-y-2">
								{product.price?.start ? (
									product.price?.start && (
										<p className="font-medium text-res-green text-2xl md:text-xl">
											от {priceFormatter(product.price.start)}
											<span className="px-2">до</span>
											{product.price.end && priceFormatter(product.price.end)} ₸
										</p>
									)
								) : (
									<p className="font-medium text-res-green text-2xl md:text-xl">
										Не указано
									</p>
								)}
								<p className="text-black/50 w-fit">
									[ Цену уточнять у менеджера ]
								</p>
							</div>

							<div className="flex gap-[inherit]">
								{/* Кнопка - заказать */}
								<button
									type="button"
									className="basis-[7/8] py-4 w-full bg-res-green flex justify-center items-center gap-2 text-white rounded-xl hover:opacity-90"
									onClick={() =>
										handleOrder(
											product.name,
											categories.find(
												(category) => category.id === product.category_id
											)?.name || "товар" // Fallback for category name
										)
									}>
									<p className="text-xl md:text-lg uppercase">Заказать</p>
									<ArrowRight className="p-0.5" />
								</button>

								{/* Кнопка - поделиться */}
								<button
									type="button"
									onClick={handleShareClick}
									className="min-h-20 md:min-h-max aspect-square h-full py-4 border-2 flex justify-center items-center rounded-xl hover:opacity-90 hover:bg-gray-100 text-res-green border-gray-300">
									<ShareIcon className="p-0.5" />
								</button>
							</div>

							{/* Описание */}
							{product.description && product.description.length > 0 && (
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
							)}

							{/* Характеристики */}
							{product.advantages && product.advantages.length > 0 && (
								<div className="space-y-4 md:space-y-2 mt-4">
									<p className="text-res-green font-semibold text-2xl md:text-xl">
										Характеристики
									</p>
									<hr className="bg-res-green w-full h-[4px]" />
									<ul className="list-disc disc ml-5 space-y-1">
										{" "}
										{/* Added ml-5 and space-y-1 */}
										{product.advantages.map((advantage, index) => (
											<li
												key={index}
												className="font-medium text-muted-foreground text-xl md:text-lg">
												{advantage}
											</li>
										))}
									</ul>
								</div>
							)}

							{/* Модификаций */}
							{product.modifications && product.modifications.length > 0 && (
								<div className="space-y-4 md:space-y-2 mt-4">
									<p className="text-res-green font-semibold text-2xl md:text-xl">
										Модификаций
									</p>
									<hr className="bg-res-green w-full h-[4px]" />
									<ul className="list-disc ml-5 space-y-1">
										{" "}
										{/* Added ml-5 and space-y-1 */}
										{product.modifications.map((modification, index) => (
											<li
												key={index}
												className="font-medium text-muted-foreground text-xl md:text-lg">
												{modification}
											</li>
										))}
									</ul>
								</div>
							)}

							{/* Детали */}
							<div className="space-y-4 md:space-y-2 mt-4">
								<p className="text-res-green font-semibold text-2xl md:text-xl">
									Детали
								</p>
								<hr className="bg-res-green w-full h-[4px]" />

								<div className="">
									<ul className="list-none space-y-1">
										{/* Тип холодоснабжения */}
										{product.cooling_details?.cooling_type && (
											<li className="flex justify-between text-xl md:text-lg">
												<p className="text-res-green font-medium text-left">
													Тип холодоснабжения
												</p>
												<p className="text-muted-foreground text-right">
													{product.cooling_details.cooling_type}
												</p>
											</li>
										)}

										{/* Бренд */}
										<li className="flex justify-between text-xl md:text-lg">
											<p className="text-res-green font-medium text-left">
												Бренд
											</p>
											<p className="text-muted-foreground text-right">
												{product.brand ? product.brand : "Не указано"}
											</p>
										</li>

										{/* Коробак - Длина / Глубина / Высота */}
										{product.box_details && (
											<>
												{product.box_details.box_len && (
													<li className="flex justify-between text-xl md:text-lg">
														<p className="text-res-green font-medium text-left">
															Длина
														</p>
														<p className="text-muted-foreground text-right">
															{product.box_details.box_len}
														</p>
													</li>
												)}
												{product.box_details.box_depth && (
													<li className="flex justify-between text-xl md:text-lg">
														<p className="text-res-green font-medium text-left">
															Глубина
														</p>
														<p className="text-muted-foreground text-right">
															{product.box_details.box_depth}
														</p>
													</li>
												)}
												{product.box_details.box_height && (
													<li className="flex justify-between text-xl md:text-lg">
														<p className="text-res-green font-medium text-left">
															Высота
														</p>
														<p className="text-muted-foreground text-right">
															{product.box_details.box_height}
														</p>
													</li>
												)}
											</>
										)}

										{/* Гарантия */}
										<li className="flex justify-between text-xl md:text-lg">
											<p className="text-res-green font-medium text-left">
												Гарантия, месяц
											</p>
											<p className="text-muted-foreground text-right">
												{product.warranty_months
													? product.warranty_months
													: "Не указано"}
											</p>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				) : (
					<div className="w-full h-[50vh] flex justify-center items-center">
						<p className="text-2xl text-muted-foreground">
							Не смогли найти данный продукт
						</p>
					</div>
				)}
			</section>

			{/* Рендер Alert */}
			<Alert
				show={showShareAlert}
				message={shareAlertMessage}
				onClose={() => setShowShareAlert(false)}
				duration={5000}
			/>
		</main>
	);
}
