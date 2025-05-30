"use client";
import { locationData } from "@/config/contacts.config";
import { useAtomValue, useSetAtom } from "jotai";
import { XIcon, PhoneIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { isContactsModalOpen } from "../../model/atoms";
import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SocialInfo {
	href: string;
	icon?: React.ReactNode;
}
interface LocationItem {
	id: string | number;
	name: string;
	address: string;
	phone?: string;
	email?: string;
	social: {
		instagram: SocialInfo;
	};
}

const SocialLinkIcon = ({
	type,
	href,
	cityName,
}: {
	type: string;
	href: string;
	cityName: string;
}) => {
	let iconComponent;
	let label = "";

	switch (type.toLowerCase()) {
		case "instagram":
			iconComponent = (
				<Image
					src={"/icons/instagram_d.svg"}
					width={24}
					height={24}
					alt="instagram"
					className="transition-opacity group-hover:opacity-80"
				/>
			);
			label = "Instagram";
			break;
		default:
			return null;
	}

	return (
		<Link
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			aria-label={`Перейти в ${label} ${cityName}`}
			className="p-1.5 rounded-full text-slate-600 hover:bg-slate-200 focus:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-res-green/50 group transition-colors">
			{iconComponent}
		</Link>
	);
};

const backdropVariants = {
	hidden: { opacity: 0 },
	visible: { opacity: 1 },
};

const modalVariants = {
	hidden: { opacity: 0, y: 50, scale: 0.95 },
	visible: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: { type: "spring", stiffness: 300, damping: 30, delay: 0.1 },
	},
	exit: {
		opacity: 0,
		y: 30,
		scale: 0.95,
		transition: { duration: 0.2 },
	},
};

export const ContactsModal = () => {
	const isOpen = useAtomValue(isContactsModalOpen);
	const setIsOpen = useSetAtom(isContactsModalOpen);
	const modalContentRef = useRef<HTMLDivElement>(null);
	const closeButtonRef = useRef<HTMLButtonElement>(null);

	const closeModal = () => setIsOpen(false);

	useEffect(() => {
		const body = document.body;
		if (isOpen) {
			body.style.overflow = "hidden";
			closeButtonRef.current?.focus();

			const handleEsc = (event: KeyboardEvent) => {
				if (event.key === "Escape") {
					closeModal();
				}
			};
			window.addEventListener("keydown", handleEsc);
			return () => {
				window.removeEventListener("keydown", handleEsc);
				body.style.overflow = "";
			};
		} else {
			body.style.overflow = "";
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isOpen]);

	return (
		<AnimatePresence>
			{isOpen && (
				<motion.div
					className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
					variants={backdropVariants}
					initial="hidden"
					animate="visible"
					exit="hidden"
					onClick={closeModal}
					role="dialog"
					aria-modal="true"
					aria-labelledby="contacts-modal-title">
					<motion.div
						ref={modalContentRef}
						className="w-full max-w-lg md:max-w-xl rounded-xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden"
						variants={modalVariants}
						onClick={(e) => e.stopPropagation()}>
						<div className="flex items-center justify-between p-5 md:p-6 bg-res-green text-white">
							<h2
								id="contacts-modal-title"
								className="text-xl md:text-2xl font-semibold">
								Наши контакты
							</h2>
							<button
								ref={closeButtonRef}
								type="button"
								onClick={closeModal}
								className="p-1.5 rounded-full text-white/80 hover:text-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 transition-colors"
								aria-label="Закрыть контакты">
								<XIcon size={26} />
							</button>
						</div>

						<div className="p-5 md:p-6 space-y-5 overflow-y-auto custom-scrollbar-thin bg-white">
							{(locationData as LocationItem[]).map((city) => (
								<div
									key={city.id}
									className="bg-slate-50 p-4 rounded-lg border border-slate-200">
									<div className="flex justify-between items-start mb-2">
										<h3 className="font-bold text-lg md:text-xl text-res-green">
											{city.name}
										</h3>
										<div className="flex items-center gap-2 -mr-1.5">
											{city.social?.instagram && (
												<SocialLinkIcon
													type="instagram"
													href={city.social.instagram.href}
													cityName={city.name}
												/>
											)}
										</div>
									</div>
									<p className="text-sm md:text-base text-slate-700 mb-1">
										{city.address}
									</p>
									{city.phone && (
										<a
											href={`tel:${city.phone.replace(/\s|-/g, "")}`}
											className="inline-flex items-center text-sm text-slate-600 hover:text-res-green transition-colors group">
											<PhoneIcon
												size={14}
												className="mr-1.5 text-slate-500 group-hover:text-res-green"
											/>
											{city.phone}
										</a>
									)}
								</div>
							))}
						</div>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};
