"use client";

import { Banner } from "@/components/Banner";
import { CatalogFilter } from "@/components/CatalogFilter";
import { CatalogItem } from "@/components/CatalogItem";
import { Search } from "lucide-react";
import { useState } from "react";

interface GridContentType {
	id: number;
	image?: string;
	title: string;
	body: string;
}
const gridContent: GridContentType[] = [
	{
		id: 0,
		title: "Cortina",
		body: "Ларь-бонета Cortina выпускается в двухрежимном исполнении НТ / СТ с возможностью переключение температурных режимов",
	},
	{
		id: 1,
		title: "Alpina",
		body: "Со встроенным статическим холодообеспечение выпускается в двухрежимном исполнении HT / CT с возможностью переключение температурных режимов",
	},
	{
		id: 2,
		title: "Brenta",
		body: "Холодильная горка на выносном холодообеспечении",
	},
	{
		id: 3,
		title: "Planai HT",
		body: "Морозильная горка с кассетными агрегатами",
	},
	{
		id: 4,
		title: "Gamma M",
		body: "Оборудование  со встроенным холодоснабжением",
	},
];

export default function ForBusinessPage() {
	const [searchValue, setSearchValue] = useState("");
	const [selectId, setSelectId] = useState("popular");

	return (
		<main className="">
			<Banner
				image="/for-business/banner.png"
				bigText="Виды Оборудование Для Бизнеса"
				smallText="Ваш эксперт в мире торгового оборудования"
				isBordered
			/>

			<div className="flex justify-center -mt-8 relative">
				<form action="" className="relative flex flex-col justify-center">
					<input
						type="text"
						placeholder="Поиск по каталогу"
						className="relative text-lg border-res-green border-2 w-[50rem] py-4 px-4"
						name="search"
						value={searchValue}
						onChange={(e) => setSearchValue(e.target.value)}
					/>
					<button type="submit" className="bg-white absolute right-1 p-2">
						<Search className="transition text-res-green cursor-pointer hover:text-res-green/80" />
					</button>
				</form>
			</div>

			<section className="container py-28 space-y-36">
				{/* каталог товары */}

				<div className="w-full flex min-h-[50vh] gap-10">
					{/* фильтрация - левое */}
					<CatalogFilter />

					{/* товары - правое */}
					<div className="basis-3/4 space-y-8">
						{/* фильтрация по новизне и цене */}
						<div className="flex justify-between items-center">
							<p className="">Результаты: (#количество товаров)</p>

							<select
								name=""
								id=""
								defaultValue={selectId}
								onChange={(e) => setSelectId(e.target.value)}
								className="border-2 border-res-green p-1.5">
								<option value="popular">Популярные</option>
								<option value="new">Новинки</option>
								<option value="cheap">Сначала дешевые</option>
								<option value="expensive">Сначала дорогие</option>
							</select>
						</div>

						<div className="grid grid-cols-3 gap-6">
							{gridContent.map((item, index) => (
								<CatalogItem
									key={index}
									title={item.title}
									description={item.body}
									link={"/catalog/" + item.id}
									className=""
								/>
							))}
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
