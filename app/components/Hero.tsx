export const Hero = () => {
	return (
		<div className="bg-res-green flex min-h-[920px]">
			<div className="container flex">
				<div className="bg-white/10 flex flex-col justify-center w-1/2 h-full gap-10">
					<div className="font-extrabold text-white *:leading-tight">
						<p className="text-8xl">Эффективное</p>
						<p className="text-8xl">Оборудование</p>
						<p className="text-8xl">Для Торговли</p>
					</div>
					<p className="font-medium text-res-grey text-3xl">
						Создайте комфортные условия для ваших клиентов с помощью проверенных
						решений.
					</p>
					<div className="flex gap-[inherit]">
						<button className="bg-none border-[3px] rounded-2xl border-white w-60 h-20">
							<p className="font-medium text-white text-3xl">Связаться</p>
						</button>
						<button className="bg-white rounded-2xl w-60 h-20">
							<p className="font-medium text-res-green text-3xl">Товары</p>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
