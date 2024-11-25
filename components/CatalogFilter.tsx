"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { MinusIcon, PlusIcon } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface FilterContentType {
	title: string;
	body: {
		title: string;
		id: string;
	}[];
	showCount?: number;
}

const initialFilterContent: FilterContentType[] = [
	{
		title: "Тип оборудования",
		body: [
			{ title: "Фронтальные стеллажи", id: "" },
			{ title: "Торговые стеллажи", id: "" },
			{ title: "Кухонное оборудование", id: "" },
			{ title: "Холодильное оборудование", id: "" },
			{ title: "Витрины", id: "" },
			{ title: "Кассовые боксы", id: "" },
			{ title: "Паллетные стелажи", id: "" },
		],
	},
	{
		title: "Бренды",
		body: [
			{ title: "Brandford", id: "brandford" },
			{ title: "Briskley Factory", id: "briskley_factory" },
			{ title: "Chilz", id: "chilz" },
			{ title: "DAZZL", id: "dazzl" },
		],
		showCount: 3,
	},
];

export const CatalogFilter = () => {
	const [filterContent, setFilterContent] = useState(initialFilterContent);

	const handleShowMore = (index: number) => {
		setFilterContent((prevContent) =>
			prevContent.map((item, i) => {
				if (i === index && item.showCount !== undefined) {
					return { ...item, showCount: item.showCount + 3 };
				}
				return item;
			})
		);
	};

	const handleShowLess = (index: number) => {
		setFilterContent((prevContent) =>
			prevContent.map((item, i) => {
				if (i === index && item.showCount !== undefined) {
					return {
						...item,
						showCount: Math.max(item.showCount - 3, 3),
					};
				}
				return item;
			})
		);
	};

	return (
		<div className="basis-1/4 flex flex-col gap-10">
			{filterContent.map((filterItem, index) => (
				<div key={index} className="space-y-4">
					<div className="flex justify-between items-center">
						<p className="font-bold">{filterItem.title}</p>
						<AnimatePresence mode="wait">
							{filterItem.showCount &&
								(filterItem.showCount < filterItem.body.length ? (
									<button
										className="p-2 rounded-sm bg-black/10"
										onClick={() => handleShowMore(index)}>
										<PlusIcon />
									</button>
								) : (
									<button
										className="p-2 rounded-sm bg-black/10"
										onClick={() => handleShowLess(index)}>
										<MinusIcon />
									</button>
								))}
						</AnimatePresence>
					</div>
					<ul className="space-y-2">
						<AnimatePresence initial={false}>
							{filterItem.body.map((listItem, bodyIndex) => {
								if (
									filterItem.showCount === undefined ||
									bodyIndex < filterItem.showCount
								) {
									return (
										<motion.li
											key={listItem.title}
											className="space-x-4"
											initial={{ opacity: 0, y: -10 }}
											animate={{ opacity: 1, y: 0 }}
											exit={{ opacity: 0, y: -10 }}
											transition={{ duration: 0.1 }}>
											<Checkbox />
											<label htmlFor="">{listItem.title}</label>
										</motion.li>
									);
								}
								return null;
							})}
						</AnimatePresence>
					</ul>
				</div>
			))}

			<button className="transition bg-res-green hover:bg-res-green/95 active:bg-res-green/90 text-white py-3 rounded-xl">
				Применить
			</button>
		</div>
	);
};
