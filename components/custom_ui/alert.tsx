"use client";

import { XIcon } from "lucide-react";
import { useEffect, useState } from "react";
import clsx from "clsx";

interface Props {
	message: string;
	show: boolean;
	onClose: () => void;
	duration?: number;
}

const ANIMATION_DURATION_MS = 300;

export const Alert = ({ message, show, onClose, duration = 3000 }: Props) => {
	const [isVisibleForAnimation, setIsVisibleForAnimation] = useState(false);

	useEffect(() => {
		let autoCloseTimer: NodeJS.Timeout;
		let postAnimationTimer: NodeJS.Timeout;

		if (show) {
			setIsVisibleForAnimation(true);

			if (duration > 0) {
				autoCloseTimer = setTimeout(() => {
					setIsVisibleForAnimation(false);

					postAnimationTimer = setTimeout(onClose, ANIMATION_DURATION_MS);
				}, duration);
			}
		} else {
			setIsVisibleForAnimation(false);
		}

		return () => {
			clearTimeout(autoCloseTimer);
			clearTimeout(postAnimationTimer);
		};
	}, [show, duration, onClose]);

	const handleManualClose = () => {
		setIsVisibleForAnimation(false);

		setTimeout(onClose, ANIMATION_DURATION_MS);
	};

	return (
		<div
			className={clsx(
				"fixed bottom-5 right-5 z-[100] p-3 sm:p-4 rounded-lg shadow-xl transition-all ease-in-out",
				"bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700",
				"min-w-[260px]",
				`duration-${ANIMATION_DURATION_MS}`,
				{
					"opacity-100": isVisibleForAnimation,
					"opacity-0 pointer-events-none": !isVisibleForAnimation,
				}
			)}
			style={{ transitionDuration: `${ANIMATION_DURATION_MS}ms` }}
			role="alert"
			aria-live="assertive"
			aria-atomic="true">
			<div className="flex items-start justify-between gap-2 sm:gap-3">
				<p className="text-xl md:text-sm text-slate-700 dark:text-slate-200 break-words pt-0.5">
					{message}
				</p>
				<button
					onClick={handleManualClose}
					className="-mt-1 -mr-1 flex-shrink-0 p-1.5 rounded-full text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-res-green dark:focus:ring-offset-slate-800"
					aria-label="Close alert"
					type="button">
					<XIcon className="size-8 sm:size-5" />
				</button>
			</div>
		</div>
	);
};
