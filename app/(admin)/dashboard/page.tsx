import nookies from "nookies";

export default function DashboardPage() {
	console.log(nookies.get());

	return (
		<div className="w-full h-full">
			<p className="text-3xl">Приветвствуем вас в панеле управляющего!</p>
		</div>
	);
}
