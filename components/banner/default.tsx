"use client";
import clsx from "clsx";
import Image from "next/image";

interface Props {
	bigText: string;
	image: string;
	smallText?: string;
	isBordered?: boolean;
	overlayOpacity?: number;
	textAlign?: "center" | "left" | "right";
}

export const BannerDefault = ({
	bigText,
	smallText,
	image,
	isBordered,
	overlayOpacity = 0.5,
	textAlign = "center",
}: Props) => {
	const textAlignmentClasses = {
		center: "items-center text-center",
		left: "items-start text-left",
		right: "items-end text-right",
	};

	return (
		<div
			className={clsx(
				"relative w-full h-[25rem] sm:h-[30rem] lg:h-[30rem] bg-gray-800",
				{
					"border-b-4 border-b-res-green": isBordered,
				}
			)}>
			{/* Background Image */}
			<Image
				src={image || "/placeholder-banner.jpg"}
				fill
				style={{ objectFit: "cover" }}
				alt={bigText || "Banner Image"}
				priority
				quality={85}
			/>

			{/* Dark Overlay for Text Readability */}
			<div
				className="absolute inset-0 bg-black"
				style={{ opacity: overlayOpacity }}
				aria-hidden="true"
			/>

			{/* Text Content */}
			<div
				className={clsx(
					"relative container h-full flex flex-col justify-center gap-3 sm:gap-4 md:gap-5 px-4 sm:px-6 lg:px-8",
					textAlignmentClasses[textAlign]
				)}>
				<h1 className="font-extrabold text-white leading-tight sm:leading-snug text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl max-w-4xl">
					{" "}
					{/* Changed to h1, adjusted sizes, leading, max-width */}
					{bigText}
				</h1>
				{smallText && (
					<p className="text-res-grey text-base sm:text-lg md:text-xl lg:text-2xl max-w-2xl font-medium">
						{" "}
						{/* Adjusted sizes, added font-medium */}
						{smallText}
					</p>
				)}
			</div>
		</div>
	);
};
