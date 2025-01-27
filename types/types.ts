export interface SwiperObjectType {
	title: string;
	image: string;
}

export interface FilterState {
	searchValue: string;
	selectId: string;
	searchMade: number;
	currentPagination: number;
	isLoading: boolean;
	selectedCategory: number | undefined;
	selectedBrand: number | undefined;
}

export interface BrandsType {
	id: number;
	name: string;
	createdAt?: string | undefined;
	updatedAt?: string | undefined;
}

export interface CategoriesType {
	id: number;
	name: string;
	tag: string;
	createdAt?: string | undefined;
	updatedAt?: string | undefined;
}

export interface CountriesType {
	id: number;
	name: string;
	createdAt?: string | undefined;
	updatedAt?: string | undefined;
}
