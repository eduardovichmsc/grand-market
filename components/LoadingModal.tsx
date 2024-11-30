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

	if (isLoading) {
		return (
			<div className="fixed z-50 w-screen h-screen bg-black/25 backdrop-blur-md flex justify-center items-center">
				<Loader2 className="text-white w-16 h-16 animate-spin" />
			</div>
		);
	}
};
