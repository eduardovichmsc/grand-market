export interface ProductType {
	id: number;
	name: string;
	description: string;
	price: number;
	image: string;
	categoryId?: number;
	countryId: number;
	subCategoryId?: number | null;
	manufacturerId: number | null;
	createdAt?: string | undefined;
	updatedAt?: string | undefined;
}
export interface ProductsStateType {
	total: number;
	list: ProductType[];
	totalPages: number;
	limit: number;
}
