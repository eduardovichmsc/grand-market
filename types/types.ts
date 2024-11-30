export interface SwiperObjectType {
	title: string;
	image: string;
}

export interface FilterState {
	searchValue: string;
	selectId: string;
	currentPagination: number;
	isLoading: boolean;
	selectedCategory: string;
	selectedBrand: string;
}
