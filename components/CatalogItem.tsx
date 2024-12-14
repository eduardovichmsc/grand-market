import { API_URL } from "@/apiiii";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FC } from "react";

interface CatalogItemProps {
	id: number;
	name: string;
	description: string;
	image?: string;
	link?: string;
	className?: string;
}

export const CatalogItem: FC<CatalogItemProps> = ({
	id,
	name,
	description,
	image,
	link = "/404",
	className,
}) => {
	const router = useRouter();

	const handleClick = () => {
		router.push("/products/" + id);
	};

	return (
		<div
			className={clsx(
				"transition-all border border-black/[2%] hover:border-black/10 p-6 cursor-pointer rounded-xl overflow-hidden shadow-md flex flex-col gap-4 hover:opacity-95" +
					" " +
					className
			)}
			onClick={handleClick}>
			<div className="relative aspect-[4/3]">
				<Image
					src={API_URL + "uploads/" + (image || "")}
					fill
					objectFit="contain"
					alt={name}
				/>
			</div>
			<div className="flex-1 flex flex-col gap-[inherit]">
				<div className="flex-1 flex items-end">
					<p className="uppercase font-extrabold text-xl">{name}</p>
				</div>
				<p className="leading-tight text-base line-clamp-3">{description}</p>
			</div>
			<div className="">
				<Link
					href={link}
					className="py-3 w-full bg-res-green flex justify-center items-center text-white rounded-xl">
					<p className="text-base uppercase">Заказать</p>
				</Link>
			</div>
		</div>
	);
};
