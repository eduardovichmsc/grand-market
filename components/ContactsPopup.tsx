"use client";
import { useAtomValue, useSetAtom } from "jotai";
import { isContactsModalOpen } from "../model/atoms";

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
