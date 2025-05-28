// for asynchronous
// "use client";
// import { useState } from "react";

// export const useSearch = <T extends { name: string }>(data: T[]) => {
// 	const [searchValue, setSearchValue] = useState("");
// 	const [filteredData, setFilteredData] = useState(data);

// 	const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setSearchValue(e.target.value);
// 	};

// 	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
// 		e.preventDefault();
// 		setFilteredData(
// 			data.filter((item) =>
// 				item.name.toLowerCase().includes(searchValue.toLowerCase())
// 			)
// 		);
// 	};

// 	return {
// 		searchValue,
// 		filteredData,
// 		handleValueChange,
// 		handleSubmit,
// 	};
// };

// ---------------------------------------------------------------------------

// forced delay
"use client";
import { useState } from "react";

export const useSearch = <T extends { name: string }>(data: T[]) => {
	const [searchValue, setSearchValue] = useState("");
	const [filteredData, setFilteredData] = useState(data);
	const [isLoading, setIsLoading] = useState(false);

	const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.target.value);
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsLoading(true);

		setTimeout(() => {
			const filtered = data.filter((item) =>
				item.name.toLowerCase().includes(searchValue.toLowerCase())
			);
			setFilteredData(filtered);
			setIsLoading(false);
		}, 300);
	};

	return {
		searchValue,
		filteredData,
		isLoading,
		handleValueChange,
		handleSubmit,
	};
};
