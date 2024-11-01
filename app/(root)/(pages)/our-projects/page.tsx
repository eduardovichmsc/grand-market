import { Banner } from "@/app/components/Banner";

export default function ForBusinessPage() {
	return (
		<main className="">
			<Banner bigText="Наши реализованные проекты" />

			<section className="container py-28 space-y-36">
				<div className="grid grid-cols-3 gap-6 *:rounded-2xl">
					{[1, 2, 3, 4, 5, 6].map((item) => (
						<div key={item} className="aspect-[6/7] bg-res-green">
							{/* place there your image */}
						</div>
					))}
				</div>
			</section>
		</main>
	);
}
