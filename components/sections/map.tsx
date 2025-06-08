"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { locationData } from "@/config/contacts.config";
import { LocationType } from "@/types/types";

export const Map = () => {
	const [location, setLocation] = useState<{
		lat: number | null;
		lon: number | null;
	}>({ lat: null, lon: null });
	const [city, setCity] = useState<LocationType | null>(null);
	const [cityId, setCityId] = useState("atyrau");
	const [iframeSrc, setIframeSrc] = useState<string | null>(null);
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
	}, []);

	useEffect(() => {
		if (isClient) {
			const getLocation = () => {
				if (navigator.geolocation) {
					navigator.geolocation.getCurrentPosition(
						(position) => {
							setLocation({
								lat: position.coords.latitude,
								lon: position.coords.longitude,
							});
						},
						(error) => {
							console.error("Ошибка при получении местоположения:", error);
						}
					);
				} else {
					console.log("Геолокация не поддерживается браузером.");
				}
			};

			getLocation();
		}
	}, [isClient]);

	useEffect(() => {
		const fetchCityName = async () => {
			if (location.lat && location.lon) {
				try {
					const response = await axios.get(
						`https://nominatim.openstreetmap.org/reverse`,
						{
							params: { lat: location.lat, lon: location.lon, format: "json" },
						}
					);
					const data = response.data.address.city;

					if (data) {
						switch (data) {
							case "Атырау":
								setCityId("atyrau");
								break;
							case "Актау":
								setCityId("aktau");
								break;
							case "Актобе":
								setCityId("aktobe");
								break;
							default:
								setCityId("atyrau");
								break;
						}
					}
				} catch (error) {
					console.error("Ошибка при получении названия города:", error);
				}
			}
		};

		fetchCityName();
	}, [location]);

	useEffect(() => {
		if (cityId) {
			const foundCity = locationData.find((city) => city.id === cityId);
			setCity(foundCity || null);

			switch (cityId) {
				case "atyrau":
					setIframeSrc(
						"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5071.137277109084!2d51.882803652330935!3d47.12229116996634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41a3e9674e692e17%3A0x9c77a19a3fb8f079!2sGrand%20Market!5e0!3m2!1sen!2skz!4v1730743887933!5m2!1sen!2skz"
					);
					break;
				case "aktau":
					setIframeSrc(
						"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.4883815293174!2d51.194881376680215!3d43.65881175206729!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41b4333a510ea5c3%3A0xfce970393f3c7243!2sGrand-Market_Aktau!5e0!3m2!1sen!2skz!4v1730743986751!5m2!1sen!2skz"
					);
					break;
				case "aktobe":
					setIframeSrc(
						"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2548.4457625777245!2d57.19867567695405!3d50.30227289802136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4182218b02dd32a7%3A0x58af2ea3ef195bd4!2sGRAND%20MARKET!5e0!3m2!1sen!2skz!4v1730744028108!5m2!1sen!2skz"
					);
					break;
				default:
					break;
			}
		}
	}, [cityId]);

	return (
		<div className="container">
			<p className="section-title text-res-green mb-10">Наши контакты:</p>
			<div className="flex flex-col-reverse md:flex-row h-full font-medium text-lg md:text-xl gap-14">
				<div className="rounded-2xl bg-res-green w-full md:basis-1/3 h-full flex flex-col justify-center p-10 gap-10">
					{city && (
						<>
							<div className="flex gap-5 items-center">
								<div className="size-20 bg-res-grey/25 rounded-full relative">
									<Image
										src={"/icons/location.svg"}
										fill
										objectFit="contain"
										className="p-4"
										alt=""
									/>
								</div>
								<div className="">
									<p className="text-white/75">Адрес :</p>
									<p className="text-white">
										{city.address ? city.address : "Не указано"}
									</p>
								</div>
							</div>
							<div className="flex gap-5 items-center">
								<div className="size-20 bg-res-grey/25 rounded-full relative">
									<Image
										src={"/icons/phone.svg"}
										fill
										objectFit="contain"
										className="p-4"
										alt=""
									/>
								</div>
								<div className="">
									<p className="text-white/75">Мобильный телефон :</p>
									<p className="text-white">
										{city.phone ? city.phone[0] : "Не указано"}
									</p>
								</div>
							</div>
							<div className="flex gap-5 items-center">
								<div className="size-20 bg-res-grey/25 rounded-full relative">
									<Image
										src={"/icons/calendar.svg"}
										fill
										objectFit="contain"
										className="p-4"
										alt=""
									/>
								</div>
								<div className="">
									<p className="text-white/75">Рабочие часы :</p>
									<p className="text-white">
										{city.date ? city.date : "Не указано"}
									</p>
									<p className="text-white">
										{city.hours ? city.hours : "Не указано"}
									</p>
								</div>
							</div>
							<div className="flex gap-5 items-center">
								<div className="size-20 bg-res-grey/25 rounded-full relative">
									<Image
										src={"/icons/instagram_w.svg"}
										fill
										objectFit="contain"
										className="p-5"
										alt=""
									/>
								</div>
								<div className="">
									<p className="text-white/75">Социальная сеть :</p>
									<Link
										href={"/"}
										className="transition duration-75 text-white hover:text-white/80">
										{city.social.instagram
											? city.social.instagram.title
											: "Не указано"}
									</Link>
								</div>
							</div>
						</>
					)}
					<div className="w-full min-h-[2px] bg-res-grey"></div>
					<p className="text-white">
						<span>Три города, </span>
						<br />
						<span>одна миссия - ваше удобство</span>
					</p>
				</div>
				<div className="basis-2/3 flex flex-col-reverse md:flex-col gap-8 md:gap-4">
					<div className="w-full h-[calc(50vh-100px)] md:h-full rounded-2xl bg-res-grey group shadow-md relative overflow-hidden">
						{iframeSrc && (
							<iframe
								src={iframeSrc}
								width="600"
								height="450"
								style={{ border: 0 }}
								className="size-full"
								loading="eager"
							/>
						)}
					</div>
					<div className="w-full h-1/5 flex flex-col gap-[inherit]">
						<p className="order-1 md:order-none">Все локаций : (3)</p>
						<div className="order-3 md:order-none w-full min-h-[3px] bg-res-green" />
						<div className="order-2 md:order-none flex gap-[inherit]">
							{/* Кнопки для каждого города */}
							<button
								className={clsx(
									"flex justify-center items-center rounded-2xl w-40 h-12 gap-1 font-medium text-base",
									cityId === "atyrau"
										? "bg-res-green text-white"
										: "bg-res-grey/10 text-res-green"
								)}
								onClick={() => setCityId("atyrau")}>
								<p>Атырау</p>
							</button>

							<button
								className={clsx(
									"flex justify-center items-center rounded-2xl w-40 h-12 gap-1 font-medium text-base",
									cityId === "aktau"
										? "bg-res-green text-white"
										: "bg-res-grey/10 text-res-green"
								)}
								onClick={() => setCityId("aktau")}>
								<p>Актау</p>
							</button>

							<button
								className={clsx(
									"flex justify-center items-center rounded-2xl w-40 h-12 gap-1 font-medium text-base",
									cityId === "aktobe"
										? "bg-res-green text-white"
										: "bg-res-grey/10 text-res-green"
								)}
								onClick={() => setCityId("aktobe")}>
								<p>Актобе</p>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
