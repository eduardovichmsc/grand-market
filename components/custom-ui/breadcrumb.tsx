import Link from "next/link";
import { ChevronRightIcon } from "lucide-react";
import clsx from "clsx";

import { CatalogItemType } from "@/entities/entities.types";

interface Props {
	product: CatalogItemType | null | undefined;
	className?: string;
}

export const Breadcrumb = ({ product, className }: Props) => {
	if (!product) {
		return null;
	}

	return (
		<nav
			aria-label="breadcrumb"
			className={clsx("mb-3 md:mb-4 text-sm text-gray-500", className)}>
			<ol className="flex items-center space-x-1 sm:space-x-1.5 flex-wrap">
				<li>
					<Link
						href="/products"
						className="hover:underline hover:text-res-green transition-colors">
						Каталог
					</Link>
				</li>
				<li>
					<ChevronRightIcon className="size-4 shrink-0" />
				</li>
				<li
					className="font-medium text-gray-700 truncate"
					title={product.name}
					aria-current="page">
					{product.name}
				</li>
			</ol>
		</nav>
	);
};
