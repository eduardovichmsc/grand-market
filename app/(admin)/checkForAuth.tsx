"use client";
import { isAuthenticated } from "@/model/atoms";
import { useAtomValue } from "jotai";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

export const CheckForAuth = () => {
	const isAuthTrue = useAtomValue(isAuthenticated);
	const router = useRouter();
	const wasAuthenticated = useRef(isAuthTrue);

	useEffect(() => {
		if (!isAuthTrue && wasAuthenticated.current) {
			alert("Unauthorized! You've been redirected to home page.");
			router.push("/");
		}
		wasAuthenticated.current = isAuthTrue;
	}, [isAuthTrue, router]);

	return null;
};
