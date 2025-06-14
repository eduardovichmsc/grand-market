"use client";

import { NavbarLinks } from "@/config/pages.config";
import { categories } from "@/entities/categories";
import { MapPinIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
	const currentYear = new Date().getFullYear();

	const contactPoints = [
		{
			city: "Атырау",
			address: "Курмангазы 106",
			anchor: "atyrau",
			href: "/about",
		},
		{
			city: "Актау",
			address: "мкр 29а, 112 / 2",
			anchor: "aktau",
			href: "/about",
		},
		{
			city: "Актобе",
			address: "ул. Нокина 34А",
			anchor: "aktobe",
			href: "/about",
		},
	];

	return (
		<footer className="bg-zinc-100 border-t border-slate-200 mt-16 md:mt-24 print:hidden">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
				{/* Контейнер */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-x-6 md:gap-x-8 gap-y-10 mb-10 md:mb-12">
					<div className="sm:col-span-2 lg:col-span-4">
						<Link
							href="/"
							className="inline-block mb-4 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-res-green focus-visible:ring-offset-2 rounded-sm"
							aria-label="На главную">
							<Image
								src="/logo/text_transparent.png"
								width={160}
								height={65}
								alt="Логотип компании"
								className="h-auto transition-opacity group-hover:opacity-80"
							/>
						</Link>
						<p className="text-slate-600 text-base leading-relaxed">
							Ваш надежный партнер в мире инновационных решений и качественных
							продуктов.
						</p>
					</div>

					{/* Навигационные ссылки */}
					<div className="sm:col-span-1 lg:col-span-2">
						<h3 className="text-base font-semibold text-slate-800 mb-3.5">
							Навигация
						</h3>
						<ul className="space-y-2">
							{NavbarLinks.map((item) => (
								<li key={item.title}>
									<Link
										href={item.href}
										className="text-slate-600 hover:text-res-green transition-colors duration-200 text-base w-fit block">
										{item.title}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Ссылки на каталог */}
					<div className="sm:col-span-1 lg:col-span-3">
						<h3 className="text-base font-semibold text-slate-800 mb-3.5">
							Каталог
						</h3>
						{categories.length > 0 && (
							<ul className="space-y-2">
								{categories.slice(0, 4).map((category) => (
									<li key={category.id}>
										<Link
											href={`/products?category=${category.id}`}
											className="text-slate-600 hover:text-res-green transition-colors duration-200 text-base w-fit block">
											{category.name}
										</Link>
									</li>
								))}
								{categories.length > 4 && (
									<li>
										<Link
											href="/products"
											className="text-res-green hover:underline transition-colors duration-200 text-base font-medium w-fit block mt-1">
											Все категории
										</Link>
									</li>
								)}
							</ul>
						)}
					</div>

					{/* Контактная информация */}
					<div className="sm:col-span-2 lg:col-span-3">
						<h3 className="text-base font-semibold text-slate-800 mb-3.5">
							Контакты
						</h3>
						<ul className="space-y-3 text-base text-slate-600">
							{contactPoints.map((contact) => (
								<li key={contact.city}>
									<MapPinIcon className="w-4 h-4 mr-2 inline-block text-slate-400" />
									<span className="font-medium text-slate-700">
										{contact.city}:
									</span>{" "}
									{contact.address}
									<Link
										href={`${contact.href}#${contact.anchor}`}
										className="block text-xs text-res-green hover:underline mt-0.5"
										aria-label={`Посмотреть адрес в ${contact.city} на карте`}>
										Посмотреть на карте
									</Link>
								</li>
							))}

							{/* Deprecated - телефон и email */}
							{/*
							<li className="pt-2">
								<a href="tel:+77771234567" className="inline-flex items-center hover:text-res-green group">
									<PhoneIcon className="w-4 h-4 mr-1.5 text-slate-500 group-hover:text-res-green transition-colors" />
									+7 (777) 123-45-67
								</a>
							</li>
							<li>
								<a href="mailto:info@example.com" className="inline-flex items-center hover:text-res-green group">
									<MailIcon className="w-4 h-4 mr-1.5 text-slate-500 group-hover:text-res-green transition-colors" />
									info@example.com
								</a>
							</li>
							*/}
						</ul>
					</div>
				</div>

				{/* Разделитель */}
				<hr className="border-slate-200" />

				{/* Копирайт */}
				<div className="flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 pt-8">
					<p className="mb-2 sm:mb-0">
						© {currentYear} Grand Market. Все права защищены.
					</p>
					<p>
						Разработано{" "}
						<a
							href="https://join-way.com"
							target="_blank"
							rel="noopener noreferrer"
							className="text-res-green hover:underline font-medium">
							@joinway.24
						</a>
					</p>
				</div>
			</div>
		</footer>
	);
};
