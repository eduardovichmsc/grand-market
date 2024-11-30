"use client";

import { alertContent, isAlertShown } from "@/model/atoms";
import clsx from "clsx";
import { useAtom, useAtomValue } from "jotai";

export const Alert = () => {
	const [isShown, setIsShown] = useAtom(isAlertShown);
	const message = useAtomValue(alertContent);

	return (
		isShown && (
			<div className="fixed z-50 flex border-2 border-res-green bg-white/50 backdrop-blur-md mt-10 px-3 py-1">
				<p className="font-bold text-res-green text-lg">
					{message || "Успешно ✔"}
				</p>
			</div>
		)
	);
};
