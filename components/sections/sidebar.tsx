"use client";
import { isContactsModalOpen, isSidebarOpen } from "@/model/atoms";
import { NavbarLinks } from "@/config/pages.config";

import clsx from "clsx";
import { useAtomValue, useSetAtom } from "jotai";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

export const Sidebar = () => {
	const isOpen = useAtomValue(isSidebarOpen);
	const setSidebar = useSetAtom(isSidebarOpen);
	const setIsContactsModalOpen = useSetAtom(isContactsModalOpen);

	const toggleSidebar = () => setSidebar((prev) => !prev);

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}

		return () => {
			document.body.style.overflow = "";
		};
	}, [isOpen]);

	return (
		<AnimatePresence>
			{isOpen && (
				<motion.div
					className={clsx(
						"z-50 bg-black/50 fixed w-screen right-0 h-dvh backdrop-blur-xl transition-all flex flex-col justify-end"
					)}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.5, ease: "anticipate" }}>
					<div className="w-full h-full text-4xl text-white flex flex-col justify-between py-[5vh] gap-5">
						{NavbarLinks.map((link, index) => (
							<Link
								href={link.href}
								key={index}
								className={clsx(
									"w-full h-full flex items-center px-20 leading-relaxed",
									"transition-colors active:bg-white/25"
								)}
								onClick={(e) => {
									if (link.href == "/contacts") {
										e.preventDefault();
										setIsContactsModalOpen(true);
									}
									setSidebar(false);
								}}>
								{link.title}
							</Link>
						))}
					</div>
					<button
						className="bg-white/20 backdrop-blur-lg py-14 h-fit"
						onClick={toggleSidebar}>
						<p className="text-white text-3xl">Свернуть</p>
					</button>
				</motion.div>
			)}
		</AnimatePresence>
	);
};
