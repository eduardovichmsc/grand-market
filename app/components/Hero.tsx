export const Hero = () => {
	return (
		<div className="relative">
			<div className="bg-res-green flex min-h-[50rem] xl:min-h-[55rem]">
				<div className="container flex flex-col md:flex-row">
					<div className="flex flex-col items-center md:items-stretch justify-center w-full md:w-1/2 h-full gap-12 md:gap-8 xl:gap-10 px-10 md:px-0">
						<div className="font-extrabold text-white *:leading-tight">
							<p className="text-big">Эффективное</p>
							<p className="text-big">Оборудование</p>
							<p className="text-big">Для Торговли</p>
						</div>
						<p className="font-medium text-center md:text-start text-res-grey text-3xl">
							Создайте комфортные условия для ваших клиентов с помощью
							проверенных решений.
						</p>
						<div className="w-full md:w-fit flex flex-col md:flex-row gap-4 md:gap-[inherit]">
							<button className="bg-none border-[3px] rounded-2xl border-white w-full md:w-60 h-20">
								<p className="font-medium text-white text-3xl">Связаться</p>
							</button>
							<button className="bg-white rounded-2xl w-full md:w-60 h-20">
								<p className="font-medium text-res-green text-3xl">Товары</p>
							</button>
						</div>
					</div>
					<div className="hidden md:flex relative w-full md:w-1/2 h-full items-center">
						{/* <div className="absolute max-w-[690px] min-h-[976px] bg-white left-0">
						<Image
							src={"/artica.png"}
							width={976}
							height={690}
							objectFit="contain"
							alt=""
						/>
					</div>
					<div className="absolute max-w-[490px] min-h-[760px] bg-white right-0">
						<Image
							src={"/artica.png"}
							width={790}
							height={860}
							objectFit="contain"
							alt=""
						/>
					</div> */}
					</div>
				</div>
			</div>
			<div className="">
				<div className=""></div>
			</div>
		</div>
	);
};
