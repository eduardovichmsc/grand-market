"use client";

import { BannerDefault } from "@/components/banner/default";
import { projectImages } from "@/config/static";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function OurProjectsPage() {
	const [selectedImage, setSelectedImage] = useState<string | null>(null);

	const openLightbox = (imageSrc: string) => {
		setSelectedImage(imageSrc);
		document.body.style.overflow = "hidden";
	};

	const closeLightbox = () => {
		setSelectedImage(null);
		document.body.style.overflow = "";
	};

	useEffect(() => {
		const handleEsc = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				closeLightbox();
			}
		};
		if (selectedImage) {
			window.addEventListener("keydown", handleEsc);
		}
		return () => {
			window.removeEventListener("keydown", handleEsc);
		};
	}, [selectedImage]);

	return (
		<main className="bg-gray-50/50 min-h-screen">
			<BannerDefault
				image="/banner/our_projects.png"
				bigText="Наши реализованные проекты"
				smallText="Вдохновитесь нашими успешными решениями для бизнеса"
				overlayOpacity={0.4}
			/>

			<section className="container py-12 sm:py-16 md:py-20 lg:py-24">
				<p className="text-center text-lg text-gray-600 mb-12 md:mb-16 max-w-3xl mx-auto">
					Мы гордимся каждым завершенным проектом, предоставляя лучшие решения
					для наших клиентов. Ниже представлены некоторые из наших работ.
				</p>

				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
					{projectImages.map((project, index) => (
						<div
							key={project.src || index}
							className="relative aspect-[4/5] sm:aspect-[3/4] bg-gray-200 rounded-lg md:rounded-xl overflow-hidden group shadow-md hover:shadow-xl transition-all duration-300 ease-in-out cursor-pointer"
							onClick={() => openLightbox(project.src)}
							tabIndex={0}
							onKeyPress={(e) =>
								(e.key === "Enter" || e.key === " ") &&
								openLightbox(project.src)
							}>
							<Image
								src={project.src}
								fill
								alt={project.title || `Проект ${index + 1}`}
								className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
								sizes="(max-width: 640px) 90vw, (max-width: 768px) 45vw, (max-width: 1024px) 30vw, 23vw"
								quality={80}
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex flex-col justify-end p-3 md:p-4">
								<h3 className="text-white font-semibold text-sm md:text-base leading-tight transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
									{project.title || `Проект ${index + 1}`}
								</h3>
								{/* Short description */}
								<p className="text-gray-300 text-xs md:text-sm mt-1 opacity-0 group-hover:opacity-100 transition-opacity delay-100 duration-300 ease-in-out">
									{project.description}
								</p>
							</div>
						</div>
					))}
				</div>
			</section>

			<AnimatePresence>
				{selectedImage && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.3 }}
						className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
						onClick={closeLightbox}>
						<motion.div
							initial={{ scale: 0.8, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							exit={{ scale: 0.8, opacity: 0 }}
							transition={{
								type: "spring",
								stiffness: 300,
								damping: 25,
								duration: 0.3,
							}}
							className="relative max-w-[90vw] max-h-[90vh] bg-white rounded-3xl shadow-2xl overflow-hidden"
							onClick={(e) => e.stopPropagation()}>
							<Image
								src={selectedImage}
								alt="Просмотр проекта"
								width={1200}
								height={800}
								style={{
									objectFit: "contain",
									maxWidth: "100%",
									maxHeight: "100%",
								}}
								className="block w-auto h-auto max-w-full max-h-full"
							/>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</main>
	);
}
