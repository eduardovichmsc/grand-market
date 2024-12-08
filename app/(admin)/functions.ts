export const formatDate = (date: string | undefined) => {
	if (!date) {
		return "Не задано";
	}

	const d = new Date(date);
	return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(
		2,
		"0"
	)}-${String(d.getDate()).padStart(2, "0")}`;
};
