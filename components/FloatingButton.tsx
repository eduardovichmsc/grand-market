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
				"transition fixed z-40 bottom-10 right-10 size-20 border-2 border-full border-res-green/10 bg-white/50 backdrop-blur-xl rounded-full overflow-hidden flex justify-center items-center hover:border-res-green active:border-res-green/75 active:bg-res-green/5",
				{
					"border-res-green/75 opacity-0": isOpen,
				}
			)}
			onClick={() => setIsOpen(true)}>
			<PhoneCall className="size-8 text-res-green -rotate-90" />
		</button>
	);
};
