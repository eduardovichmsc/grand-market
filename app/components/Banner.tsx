"use client";
import { FC } from "react";

interface BannerProps {
	bigText: string;
	smallText?: string;
	image?: string;
}

export const Banner: FC<BannerProps> = ({ bigText, smallText, image }) => {
	return (
		<div className="w-full h-[67vh] bg-res-green">
			<div className="container h-full flex flex-col justify-center items-center gap-5">
				<p className="font-extrabold text-center text-white leading-snug text-big max-w-[1200px]">
					{bigText && bigText}
				</p>
				<p className="text-3xl text-res-grey">{smallText && smallText}</p>
			</div>
		</div>
	);
};
