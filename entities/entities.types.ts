export interface CategoryItemType {
	id: number;
	name: string;
	code: string;
}

export interface SubcategoryItemType {
	id: number;
	parent_id: number;
	name: string;
	code: string;
}

// -------------------------------
export interface CatalogItemType {
	id: number;
	category_id: number;
	subcategory_id?: number;
	purpose_id: number;
	brand: string;
	preview_image: string[];
	name: string;
	description: string;
	advantages?: string[];
	complects?: string[];
	price?: {
		start: number;
		end?: number;
	};
	dimensions?: {
		h: string[];
		d: string[];
		l: string[];
	};
	modifications?: string[];
	box_details?: {
		box_len?: string;
		box_height?: string;
		box_depth?: string;
		transporter_len?: string;
		accumulator_type?: string[];
		accumulator_len?: string;
		finish_options?: string;
		material: string;
		voltage?: string;
		power?: string;
		workstation_width?: string;
	};
	cooling_details?: {
		cooling_type: "Выносной холод" | "абсорбционное";
	};
	warranty_months?: string;
	country?: string;
}

export interface CatalogListType {
	list: CatalogItemType[];
}
