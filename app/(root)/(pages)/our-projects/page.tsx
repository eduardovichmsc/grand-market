import { Banner } from "@/components/Banner";
import { Metadata } from "next";
import Image from "next/image";
// import Image from "next/image";

export const metadata: Metadata = {
	title: "Наши проекты - Grand Market",
	description:
		"Торговое оборудование для магазинов по лучшим ценам в Атырау, Актау и Актобе",
};

const projectImages = [
	"/projects/1.png",
	"/projects/2.png",
	"/projects/3.png",
	"/projects/4.png",
	"/projects/5.png",
	"/projects/6.png",
	"/projects/7.png",
	"/projects/8.png",
	"/projects/9.png",
	"/projects/10.png",
	"/projects/11.png",
	"/projects/12.png",
];

export default function ForBusinessPage() {
	return (
		<main className="">
			<Banner
				image="/projects/banner.png"
				bigText="Наши реализованные проекты"
			/>

			<section className="container py-28 space-y-36">
				<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 *:rounded-2xl">
					{projectImages.map((item) => (
						<div
							key={item}
							className="relative aspect-[6/7] bg-black overflow-hidden group">
							<Image
								src={item}
								fill
								objectFit="cover"
								className="transition group-hover:opacity-90"
								alt={item}
							/>
						</div>
					))}
				</div>
			</section>
		</main>
	);
}
