export interface ProductType {
	id: number;
	name: string;
	description: string;
	price: number;
	createdAt?: Date;
	updatedAt?: Date;
	image: string;
	categoryId?: number;
	subCategoryId?: number | null;
	manufacturerId: number | null;
}
