export const SkeletonCatalogItem = ({}) => {
	return (
		<div className="animate-pulse flex flex-col space-y-3 bg-black/5 rounded-xl overflow-hidden">
			<div className="aspect-[5/3] bg-black/10"></div>
			<div className="p-6 space-y-3 flex-1">
				<div className="h-4 bg-black/10 w-3/4 rounded"></div>
				<div className="h-4 bg-black/10 w-1/2 rounded"></div>
			</div>
			<div className="pt-0 p-6">
				<div className="h-10 w-full bg-black/10 flex justify-center items-center text-white rounded-xl"></div>
			</div>
		</div>
	);
};
