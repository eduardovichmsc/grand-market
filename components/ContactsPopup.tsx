"use client";
import { locationData } from "@/config/contacts.config";
import { useAtomValue, useSetAtom } from "jotai";
import { XIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { isContactsModalOpen } from "../model/atoms";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const ContactsPopup = () => {
	const isOpen = useAtomValue(isContactsModalOpen);
	const setIsOpen = useSetAtom(isContactsModalOpen);

	const closeModal = () => setIsOpen(false);

	return (
		<>
			{isOpen && (
				<div className="z-40 fixed w-max h-max bg-white " onClick={closeModal}>
					<div className="w-96 h-10"></div>
				</div>
			)}
		</>
	);
};