import { catalog } from "@/entities/catalog";
import { Metadata, ResolvingMetadata } from "next";
import { ReactNode } from "react";

type Props = {
	params: { id: string };
	children: ReactNode;
};

async function getProductDetails(id: string) {
	const product = catalog.list.find((item) => item.id === +id);
	if (product) {
		return {
			name: product.name,
			description: product.description,
		};
	}

	return null;
}

export async function generateMetadata(
	{ params }: Props,
	parent: ResolvingMetadata
): Promise<Metadata> {
	const id = params.id;

	const product = await getProductDetails(id);

	if (!product) {
		return {
			title: "Товар не найден - Grand Market",
			description: "Запрошенный товар не найден в каталоге.",
		};
	}

	return {
		title: `${product.name} - Grand Market`,
		description:
			product.description ||
			`Подробная информация о товаре ${product.name} в Grand Market. ${
				(await parent).description
			}`,
	};
}

export default function CatalogIdLayout({ children }: { children: ReactNode }) {
	return <>{children}</>;
}
