"use client";
import { API_URL } from "@/static";
import axios from "axios";
import { useEffect, useState } from "react";

export default function DashboardPage() {
	const [data, setData] = useState<{ email: string }>({ email: "" });
	const [, setIsLoading] = useState(false);

	const getUser = async () => {
		setIsLoading(true);
		try {
			const response = await axios.get(API_URL + "users/" + 1, {});
			setData(response.data);
		} catch (error) {
			console.error(error);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		getUser();
	}, []);

	return (
		<div className="w-full h-full">
			<p className="text-3xl">Привет, {data.email}</p>
		</div>
	);
}
