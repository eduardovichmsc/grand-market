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
		<div className="relative w-full aspect-[7/2] bg-res-green">
			<Image
				src={image || ""}
				fill
				objectFit="cover"
				alt={bigText}
				className=""
			/>
			<div className="relative container h-full flex flex-col justify-center items-center gap-5">
				<p className="font-extrabold text-center text-white leading-snug text-big max-w-[1200px]">
					{bigText && bigText}
				</p>
				<p className="text-3xl text-res-grey">{smallText && smallText}</p>
			</div>
		</div>
	);
};
