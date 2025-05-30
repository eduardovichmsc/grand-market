"use client";
import { isContactsModalOpen } from "@/model/atoms";
import clsx from "clsx";
import { useAtom } from "jotai";
import { PhoneCall } from "lucide-react";

export const FloatingButton = () => {
	const [isOpen, setIsOpen] = useAtom(isContactsModalOpen);

	return (
		<button
			className={clsx(
				"transition fixed z-40 bottom-10 right-10 md:bottom-8 md:right-8 border-2 border-full border-res-green/10 bg-white/50 backdrop-blur-xl rounded-full overflow-hidden flex justify-center items-center hover:border-res-green size-28 md:size-16 group",
				{
					"border-res-green/75 bg-res-green": isOpen,
				}
			)}
			onClick={() => setIsOpen(true)}>
			<PhoneCall
				className={clsx(
					"transition size-10 md:size-7 text-res-green/50 group-hover:text-res-green -rotate-90",
					{ "text-res-green": isOpen }
				)}
			/>
		</button>
	);
};
