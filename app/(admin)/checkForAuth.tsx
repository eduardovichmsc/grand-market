"use client";
import { API_URL } from "@/apiiii";
import { isAuthenticated } from "@/model/atoms";
import axios from "axios";
import { useAtomValue } from "jotai";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

export const CheckForAuth = () => {
	const isAuthTrue = useAtomValue(isAuthenticated);
	const router = useRouter();
	const wasAuthenticated = useRef(isAuthTrue);

	const getAuth = async () => {
		try {
			const response = await axios.get(API_URL + "users/getAuth", {
				withCredentials: true,
			});
			if (response.status !== 200) {
				throw new Error("Not authorized");
			}
			console.log(response);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		if (!isAuthTrue && wasAuthenticated.current) {
			alert("Unauthorized! You've been redirected to home page.");
			router.push("/");
		}
		wasAuthenticated.current = isAuthTrue;

		getAuth();
	}, [isAuthTrue, router]);

	return null;
};
