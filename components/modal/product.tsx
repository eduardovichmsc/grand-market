"use client";
import clsx from "clsx";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { ArrowRightIcon, LoaderIcon } from "lucide-react";

import { catalog } from "@/entities/catalog";
import { useProduct } from "@/hooks/useProduct";
import { priceFormatter } from "@/model/functions";
import type { CatalogItemType } from "@/entities/entities.types";

interface Props {
	productId: number;
	onClose: () => void;
}

export const ProductModal = ({ productId, onClose }: Props) => {
	const router = useRouter();

	const product: CatalogItemType | undefined = useProduct(
		catalog.list,
		productId
	);

	const [isRedirecting, setIsRedirecting] = useState<boolean>(false);

	const [imageArray, setImageArray] = useState<string[]>(["/placeholder.svg"]);
	const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
	const [imageLoading, setImageLoading] = useState<boolean>(true);

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

	const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
		if (e.target === e.currentTarget) {
			onClose();
		}
	};

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

	const redirectToProductPage = (e: React.MouseEvent<HTMLButtonElement>) => {
		setIsRedirecting(true);

		e.preventDefault();
		setTimeout(() => {
			router.push("/products/" + product?.id);
		}, 1000);
	};

	if (!product) {
		return (
			<div className="" onClick={handleBackdropClick}>
				<section className=" rounded-xl bg-white p-10 md:p-20 text-center shadow-xl">
					<p className="text-xl font-semibold text-gray-700">
						Не смогли найти данный продукт
					</p>
					<button
						onClick={onClose}
						className="mt-6 px-6 py-2 bg-res-green text-white rounded-lg hover:opacity-90 transition-opacity">
						Закрыть
					</button>
				</section>
			</div>
		);
	}

	const currentImageSrc = imageArray[selectedImageIndex] || "/placeholder.svg";

	return (
		<div
			className="overflow-hidden z-40 fixed inset-0 w-full h-screen bg-black/40 backdrop-blur-lg flex justify-center items-center"
			onClick={handleBackdropClick}>
			<section className="overflow-hidden rounded-xl w-[90%] md:max-w-7xl max-h-[90vh] overflow-y-auto bg-white p-6 sm:p-10 md:p-12 lg:p-20 shadow-xl">
				<div className="flex flex-col md:flex-row gap-6 md:gap-10">
					{/* Фото карточка - STICKY PART */}
					<div className="md:sticky md:top-0 md:self-start basis-full md:basis-3/5 lg:basis-[55%] flex flex-col gap-3 md:gap-4 md:max-h-[calc(90vh-4rem)] md:py-2">
						{" "}
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
								onLoadingComplete={() => setImageLoading(false)}
								className={clsx("transition-all duration-300 object-contain", {
									"opacity-0 blur-md scale-95": imageLoading,
									"opacity-100 blur-0 scale-100": !imageLoading,
								})}
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
											aria-label={`View image ${index + 1} for ${product.name}`}
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
						<h1 className="uppercase font-semibold text-2xl sm:text-3xl md:text-4xl text-gray-800">
							{product.name}
						</h1>
						<div className="space-y-2">
							{product.price?.start ? (
								<p className="font-medium text-res-green text-xl md:text-2xl">
									от {priceFormatter(product.price.start)}
									{product.price.end && (
										<>
											<span className="px-2">до</span>
											{priceFormatter(product.price.end)}
										</>
									)}{" "}
									₸
								</p>
							) : (
								<p className="font-medium text-res-green text-xl md:text-2xl">
									Цена по запросу
								</p>
							)}
							<p className="text-sm text-black/60 w-fit">
								[ Цену уточнять у менеджера ]
							</p>
						</div>

						<div className="flex gap-3 md:gap-4">
							<button
								aria-label={`View details for ${product.name}`}
								disabled={isRedirecting}
								onClick={(e) => redirectToProductPage(e)}
								className="w-full mt-auto flex items-center justify-center gap-2 bg-res-light-green text-white font-medium py-2.5 sm:py-3 px-4 rounded-lg transition-all duration-300 ease-in-out disabled:bg-zinc-400 hover:bg-res-green hover:text-white focus:outline-none focus:ring-2 focus:ring-res-green focus:ring-offset-2 focus:ring-offset-white/10">
								{isRedirecting === false ? (
									<>
										<span>Показать детали</span>
										<ArrowRightIcon className="size-4 sm:size-5" />
									</>
								) : (
									<LoaderIcon className="size-6 md:size-6 animate-spin" />
								)}
							</button>
						</div>

						{product.description && product.description.length > 0 && (
							<div className="space-y-2 md:space-y-3 mt-4">
								<p className="text-res-green font-semibold text-xl md:text-2xl">
									Описание
								</p>
								<hr className="border-t-2 border-res-green/30 w-full" />
								<div>
									<p className="font-normal text-gray-700 text-base md:text-lg leading-relaxed">
										{product.description}
									</p>
								</div>
							</div>
						)}
					</div>
				</div>
			</section>
		</div>
	);
};
