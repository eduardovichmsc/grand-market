export const priceFormatter = (price: number) => {
	if (typeof price !== "number" || isNaN(price)) return "";

	return price.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, " ");
};
