"use client";
import clsx from "clsx";
import Image from "next/image";
import { FC } from "react";

interface BannerProps {
	bigText: string;
	image: string;
	smallText?: string;
	isBordered?: boolean;
}

export const Banner: FC<BannerProps> = ({
	bigText,
	smallText,
	image,
	isBordered,
}) => {
	return (
		<div
			className={clsx("relative w-full h-[25rem] lg:h-[35rem] bg-res-green", {
				"border-b-2 border-b-res-green": isBordered,
			})}>
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
