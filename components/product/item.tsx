"use client";
import clsx from "clsx";
import { LoaderIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { useState } from "react";

interface Props {
	id: number;
	name: string;
	description: string;
	image?: string;
	link?: string;
	className?: string;
}

export const CatalogItem = ({
	id,
	name,
	description,
	image,
	link = "/404",
	className,
}: Props) => {
	const router = useRouter();

	const [imageSource, setImageSource] = useState(image || "/placeholder.png");
	const [imageLoading, setImageLoading] = useState<boolean>(true);

	const handleCardClick = () => {
		router.push("/products/" + id);
	};

	const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
		e.stopPropagation();
	};

	return (
		<div
			className={clsx(
				"transition-all border-2 border-border/25 hover:border-res-green/50 p-6 cursor-pointer rounded-xl overflow-hidden shadow-md flex flex-col gap-4 hover:opacity-95",
				className
			)}
			onClick={handleCardClick}>
			<div className="relative aspect-[4/3]">
				<Image
					src={imageSource}
					fill
					objectFit={imageSource !== "/placeholder.svg" ? "contain" : "cover"}
					alt={name}
					onError={() => setImageSource("/placeholder.svg")}
					onLoadingComplete={() => setImageLoading(false)}
					className={clsx("transition-opacity duration-300", {
						"opacity-0": imageLoading,
						"opacity-100": !imageLoading,
						"rounded-xl": imageSource === "/placeholder.svg",
					})}
				/>
				{imageLoading && (
					<div className="absolute inset-0 flex justify-center items-center bg-gray-100 rounded-xl">
						<LoaderIcon className="animate-spin text-res-green" />
					</div>
				)}
			</div>
			<div className="flex-1 flex flex-col gap-[inherit]">
				<div className="flex-1 flex items-end">
					<p className="uppercase font-extrabold text-xl line-clamp-1">
						{name}
					</p>
				</div>
				<p className="leading-tight text-base line-clamp-3">{description}</p>
			</div>
			<div className="">
				<span className="py-3 w-full bg-res-green flex justify-center items-center text-white rounded-xl hover:bg-res-green/90 transition-colors">
					<p className="text-base uppercase">Заказать</p>
				</span>
			</div>
		</div>
	);
};
