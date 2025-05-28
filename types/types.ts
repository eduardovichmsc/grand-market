export interface LocationType {
	id: string;
	name: string;
	address: string;
	phone: string;
	date: string;
	hours: string;
	social: {
		instagram: {
			title: string;
			href: string;
		};
	};
}

export interface SwiperObjectType {
	title: string;
	image: string;
}
