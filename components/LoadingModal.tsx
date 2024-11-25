"use client";
import { useAtomValue } from "jotai";
import { Loader2 } from "lucide-react";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { isGlobalLoading } from "@/model/atoms";

export const LoadingModal = () => {
	const isLoading = useAtomValue(isGlobalLoading);

	useEffect(() => {
		if (isLoading) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}

		return () => {
			document.body.style.overflow = "";
		};
	}, [isLoading]);

	return (
		<AnimatePresence>
			{isLoading && (
				<motion.div
					className="fixed z-50 w-screen h-screen bg-black/50 backdrop-blur-md flex justify-center items-center"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.3 }}>
					<Loader2 className="text-white w-16 h-16 animate-spin" />
				</motion.div>
			)}
		</AnimatePresence>
	);
};
