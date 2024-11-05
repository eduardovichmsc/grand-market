"use client";
import Image from "next/image";
import Link from "next/link";

export const MiniBanner = () => {
	return (
		<div className="bg-res-green text-white flex items-center min-h-[45px] py-4 sm:py-0 xl:min-h-[64px]">
			<div className="container flex flex-col sm:flex-row sm:justify-between">
				<p className="mx-auto font-thin text-2xl sm:text-xl">
					Понедельник-Воскресенье с 10:00 до 19:00
				</p>
				<div className="hidden sm:flex gap-4 items-center">
					<Link
						href={"https://instagram.com/grandmarket_west"}
						className="relative block size-6">
						<Image src={"/icons/instagram.svg"} fill alt="instagram" />
					</Link>
					<Link
						href={"https://instagram.com/grandmarket_west"}
						className="relative block size-6">
						<Image src={"/icons/whatsapp.svg"} fill alt="whatsapp" />
					</Link>
				</div>
			</div>
		</div>
	);
};
