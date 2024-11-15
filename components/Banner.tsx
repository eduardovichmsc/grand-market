"use client";
import Image from "next/image";
import { FC } from "react";

interface BannerProps {
	bigText: string;
	smallText?: string;
	image?: string;
}

export const Banner: FC<BannerProps> = ({ bigText, smallText, image }) => {
	return (
		<div className="relative w-full h-[25rem] lg:h-[35rem] bg-res-green">
			<Image
				src={image || ""}
				fill
				objectFit="cover"
				alt={bigText}
				className=""
			/>
			<div className="relative container h-full flex flex-col justify-center items-center gap-3 md:gap-5">
				<p className="font-extrabold text-center text-white leading-snug text-4xl sm:text-5xl md:text-6xl 2xl:text-8xl max-w-[1200px]">
					{bigText && bigText}
				</p>
				<p className="sm:text-2xl lg:text-3xl text-res-grey">
					{smallText && smallText}
				</p>
			</div>
		</div>
	);
};
