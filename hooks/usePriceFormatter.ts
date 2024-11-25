const usePriceFormatter = (price: number | undefined): string => {
	if (typeof price !== "number" || isNaN(price)) return "";

	return price.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, " ");
};

export default usePriceFormatter;
