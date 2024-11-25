import clsx from "clsx";
import Link from "next/link";
import { FC } from "react";

interface CatalogItemProps {
	title: string;
	description: string;
	image?: string;
	link?: string;
	className?: string;
}

export const CatalogItem: FC<CatalogItemProps> = ({
	title,
	description,
	link = "/404",
	className,
}) => {
	return (
		<Link
			href={link}
			className={clsx(
				"rounded-xl overflow-hidden shadow-md drop-shadow-2xl flex flex-col hover:opacity-95" +
					" " +
					className
			)}>
			<div className="aspect-[5/3] bg-black/10"></div>
			<div className="p-6 space-y-3 flex-1">
				<p className="font-extrabold text-2xl uppercase">{title}</p>
				<p className="text-lg leading-tight">{description}</p>
			</div>
			<div className="pt-0 p-6">
				<Link
					href={link || "/404"}
					className="py-3 w-full bg-res-green flex justify-center items-center text-white rounded-xl">
					<p className="text-lg uppercase">Купить</p>
				</Link>
			</div>
		</Link>
	);
};
