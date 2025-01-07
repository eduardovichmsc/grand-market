"use client";

import clsx from "clsx";
import { useAtomValue, useSetAtom } from "jotai";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { isAuthenticated, isAuthModalOpen } from "@/model/atoms";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import { API_URL } from "@/apiiii";
import { useRouter } from "next/navigation";
import nookies, { setCookie } from "nookies";

export const AuthorizationModal = () => {
	const setIsAuthenticated = useSetAtom(isAuthenticated);

	const emailRef = useRef<HTMLInputElement>(null);

	const [authState, setAuthState] = useState("");

	const isOpen = useAtomValue(isAuthModalOpen);
	const setIsOpen = useSetAtom(isAuthModalOpen);
	const router = useRouter();

	const [form, setForm] = useState<{ email: string; password: string }>({
		email: "",
		password: "",
	});

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { id, value } = e.target;
		setForm((prev) => ({
			...prev,
			[id]: value,
		}));
	};

	const closeModal = () => setIsOpen(false);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		try {
			const response = await axios.post(API_URL + "users/login/", form);
			const userByEmail = await axios.get(API_URL + "users/" + form.email);
			console.log(response);

			if (response.status === 201) {
				if (userByEmail.data.role === "admin") {
					// 1 hour
					nookies.set(null, "Authorization", response.data.token, {
						path: "/dashboard",
						httpOnly: false,
						maxAge: 60 * 60 * 1000,
					});

					router.push("/dashboard");
					setIsAuthenticated(true);
				} else {
					setAuthState("Нету доступа");
				}
			} else {
				setAuthState("Пользователь не найден");
			}
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden";
			emailRef.current?.focus();
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
					className="z-40 fixed w-full h-screen bg-black/40 backdrop-blur-lg flex justify-center items-center"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					onClick={closeModal}>
					<motion.div
						className="rounded-2xl bg-white p-44"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.3 }}
						onClick={(e) => e.stopPropagation()}>
						<p className="font-extrabold text-2xl pb-8">
							Войдите в учетную запись
						</p>
						<form
							onSubmit={(e) => handleSubmit(e)}
							className="flex flex-col gap-4">
							<div className="relative">
								<input
									ref={emailRef}
									type="email"
									placeholder=""
									className={clsx("w-full border border-res-green p-2", "peer")}
									id="email"
									value={form.email}
									onChange={handleChange}
								/>
								<label
									htmlFor="email"
									className={clsx(
										"transition-all absolute bottom-[25%] left-[3%] transform bg-white px-1",
										"peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0",
										"peer-focus:scale-75 peer-focus:-translate-x-1.5 peer-focus:-translate-y-5",
										{
											"text-neutral-600 -translate-x-1.5 -translate-y-5 scale-75":
												form.email.length > 0,
										}
									)}>
									Почта
								</label>
							</div>

							<div className="relative">
								<input
									type="password"
									placeholder=""
									className={clsx("w-full border border-res-green p-2", "peer")}
									id="password"
									value={form.password}
									onChange={handleChange}
								/>
								<label
									htmlFor="password"
									className={clsx(
										"transition-all absolute bottom-[25%] left-[3%] transform bg-white px-1",
										"peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0",
										"peer-focus:scale-75 peer-focus:-translate-x-1.5 peer-focus:-translate-y-5",
										{
											"text-neutral-600 -translate-x-1.5 -translate-y-5 scale-75":
												form.password.length > 0,
										}
									)}>
									Пароль
								</label>
							</div>
							<button
								className={clsx(
									"transition-colors w-full bg-res-green p-2 text-white hover:bg-res-green/90 disabled:bg-black/60 focus:bg-res-green/90 focus:outline outline-cyan-500"
								)}
								disabled={
									form.email.length === 0 || form.password.length === 0
								}>
								Войти
							</button>
							<p className="font-medium text-red-500">
								{authState}
								ds
							</p>
						</form>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};
