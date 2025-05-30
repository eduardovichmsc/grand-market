import { CatalogListType } from "./entities.types";

export const catalog: CatalogListType = {
	list: [
		// Холодильные горки
		{
			id: 0,
			category_id: 2,
			subcategory_id: 102,
			purpose_id: 1,
			brand: "MAGMA",
			preview_image: [
				"https://maeks.ru/upload/icms/images/catalog/crete_%D0%BE%D1%82%D0%BA%D1%80%D1%8B%D1%82%20%D0%BF%D1%80%D0%BE%D0%B7%D1%80%20002%20(4)%20(1).png",
				"https://maeks.ru/upload/icms/images/catalog/crete_%D0%BE%D1%82%D0%BA%D1%80%D1%8B%D1%82%20%D0%BF%D1%80%D0%BE%D0%B7%D1%80%20001.png",
			],
			name: "MAGMA Crete",
			price: {
				start: 100000,
				end: 200000,
			},
			dimensions: {
				h: ["2000", "2200"],
				d: ["740", "870", "1000"],
				l: ["1250", "1900", "2100", "2500", "3750"],
			},
			description:
				"Холодильная горка MAGMA Crete нового поколения, в которой сочетаются дизайн, функциональность и современные технологии энергосбережения. Идеально подходит для демонстрации и кратковременного хранения продуктов в магазинах любого формата.",
			cooling_details: {
				cooling_type: "Выносной холод",
			},
		},
		{
			id: 1,
			category_id: 2,
			subcategory_id: 102,
			purpose_id: 1,
			brand: "MAGMA",
			preview_image: [
				"https://maeks.ru/upload/icms/images/catalog/creteDG_002%20%D1%83%D0%BC%D0%B5%D0%BD%D1%8C%D1%88%20%D0%BF%D1%80%D0%BE%D0%B7%D1%80%20%D1%84%D0%BE%D0%BD.png",
				"https://maeks.ru/upload/icms/images/catalog/creteDG_001%20%D1%83%D0%BC%D0%B5%D0%BD%D1%8C%D1%88%20%D0%BF%D1%80%D0%BE%D0%B7%D1%80%20%D1%84%D0%BE%D0%BD.png",
			],
			name: "MAGMA Crete DG",
			dimensions: {
				h: ["2000", "2200"],
				d: ["740", "870", "1000"],
				l: ["1250", "1900", "2100", "2500", "3750"],
			},
			description:
				"Закрытая холодильная горка MAGMA Crete DG нового поколения, в которой сочетаются дизайн, функциональность и современные технологии. Благодаря энергосберегающим дверям позволяет экономить до 60% электроэнергии.",
		},
		{
			id: 2,
			category_id: 2,
			subcategory_id: 102,
			purpose_id: 1,
			brand: "MAGMA",
			preview_image: [
				"https://maeks.ru/upload/icms/images/catalog/crete_NT_004%20%20%D0%BF%D1%80%D0%BE%D0%B7%D1%80%D0%B0%D1%87%D0%BD%20(2)_80.png",
				"https://maeks.ru/upload/icms/images/catalog/main_additional_43.png",
			],
			name: "MAGMA Crete NT",
			dimensions: {
				h: ["2000", "2200"],
				d: ["740", "870", "1000"],
				l: ["1250", "1900", "2500", "3750"],
			},
			description:
				"Эффективная и экономичная холодильная горка MAGMA Cayman сo встроенным агрегатом. Удачно вписывается в интерьер любого магазина – от маленького «магазина у дома» до зоны эмоциональных продаж в гипермаркете. Опция Fast Service позволяет проводить быстрое и качественное обслуживание.",
		},
		{
			id: 3,
			category_id: 2,
			subcategory_id: 102,
			purpose_id: 1,
			brand: "MAGMA",
			preview_image: [
				"https://maeks.ru/upload/icms/images/catalog/crete_NT_004%20%20%D0%BF%D1%80%D0%BE%D0%B7%D1%80%D0%B0%D1%87%D0%BD%20(2)_80.png",
				"https://maeks.ru/upload/icms/images/catalog/main_additional_43.png",
			],
			name: "MAGMA Cayman",
			dimensions: {
				h: ["2000", "2200"],
				d: ["740", "870"],
				l: ["1250", "1900", "2500"],
			},
			description:
				"Инновационный закрытый морозильный шкаф MAGMA Crete NT для демонстрации замороженных продуктов. Идеально сочетается с холодильными горками Crete выстраивая единую композицию. Высококачественные компоненты и современные технологии гарантируют идеальную температуру и отсутствие конденсата.",
		},
		{
			id: 4,
			category_id: 2,
			subcategory_id: 102,
			purpose_id: 1,
			brand: "MAGMA",
			preview_image: [
				"https://maeks.ru/upload/icms/images/catalog/CAYMAN_2024_005_%D1%83%D0%BC%D0%B5%D0%BD%D1%8C%D1%88.png",
				"https://maeks.ru/upload/icms/images/catalog/CAYMAN_2024_004_%D1%83%D0%BC%D0%B5%D0%BD%D1%8C%D1%88.png",
			],
			name: "MAGMA Cayman DG",
			dimensions: {
				h: ["2000", "2200"],
				d: ["740", "870"],
				l: ["1250", "1900", "2500"],
			},
			description:
				"Высокоэффективная закрытая холодильная горка MAGMA Cayman DG сo встроенным агрегатом. Превосходно хранит и демонстрирует продукты. Опция Fast Service позволяет проводить быстрое и качественное обслуживание.",
		},
		{
			id: 5,
			category_id: 2,
			subcategory_id: 102,
			purpose_id: 1,
			brand: "MAGMA",
			preview_image: [
				"https://maeks.ru/upload/icms/images/catalog/AVALON_002%20%D0%B1%D0%B5%D0%B7%20%D1%84%D0%BE%D0%BD%D0%B0_%D1%83%D0%BC%D0%B5%D0%BD%D1%8C%D1%88.png",
				"https://maeks.ru/upload/icms/images/catalog/AVALON_001%20%D0%B1%D0%B5%D0%B7%20%D1%84%D0%BE%D0%BD%D0%B0_%D1%83%D0%BC%D0%B5%D0%BD%D1%8C%D1%88.png",
			],
			name: "MAGMA Avalon",
			dimensions: {
				h: ["2200"],
				d: ["1200"],
				l: ["1250", "2500"],
			},
			description: "",
		},
		{
			id: 6,
			category_id: 2,
			subcategory_id: 102,
			purpose_id: 1,
			brand: "MAGMA",
			preview_image: [
				"https://maeks.ru/upload/icms/images/catalog/AVALON_002%20%D0%B1%D0%B5%D0%B7%20%D1%84%D0%BE%D0%BD%D0%B0_%D1%83%D0%BC%D0%B5%D0%BD%D1%8C%D1%88.png",
				"https://maeks.ru/upload/icms/images/catalog/AVALON_001%20%D0%B1%D0%B5%D0%B7%20%D1%84%D0%BE%D0%BD%D0%B0_%D1%83%D0%BC%D0%B5%D0%BD%D1%8C%D1%88.png",
			],
			name: "MAGMA Cuba SV",
			dimensions: {
				h: ["1600"],
				d: ["870"],
				l: ["1250", "1900", "2100", "2500", "3750"],
			},
			description:
				"Полувертикальная холодильная горка MAGMA Cuba SV – простой и эффективный инструмент мерчендайзинга в Вашем магазине. Делает продукты доступными и привлекательными, а торговый зал открытым и просторным. Надежная система охлаждения гарантирует сохранность даже очень чувствительных товаров – свежего мяса, курицы и охлажденной рыбы.",
		},
		{
			id: 7,
			category_id: 2,
			subcategory_id: 102,
			purpose_id: 1,
			brand: "MAGMA",
			preview_image: [
				"https://maeks.ru/upload/icms/images/catalog/%D0%BA%D1%83%D0%B1%D0%B0_%D0%B7%D0%B0%D0%BA%D1%80%D1%8B%D1%82%D0%B0%D1%8F_H150_001%20%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F%20(1)_85.png",
				"https://maeks.ru/upload/icms/images/catalog/main_additional_62.png",
			],
			name: "MAGMA Cuba SV DG",
			dimensions: {
				h: ["1600"],
				d: ["870"],
				l: ["1250", "1900", "2100", "2500", "3750"],
			},
			description:
				"Полувертикальная холодильная горка MAGMA Cuba SV DG – простой и эффективный инструмент мерчендайзинга в Вашем магазине. Делает продукты доступными и привлекательными, а торговый зал открытым и просторным. Надежная система раздвижных дверей-купе снижает затраты на электроэнергию и гарантирует бережное хранение продуктов.",
		},
		{
			id: 8,
			category_id: 2,
			subcategory_id: 102,
			purpose_id: 1,
			brand: "MAGMA",
			preview_image: [
				"https://maeks.ru/upload/icms/images/catalog/%D0%BA%D0%B0%D1%82%D1%80%D0%B0%D0%BD_%D0%BE%D1%82%D0%BA%D1%80%D1%8B%D1%82%D1%8B%D0%B9_H150_002%20%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F%20(1)_86.png",
				"https://maeks.ru/upload/icms/images/catalog/main_additional_63.png",
			],
			name: "MAGMA Katran H-1600",
			dimensions: {
				h: ["1600"],
				d: ["870"],
				l: ["1250", "1900", "2100", "2500", "3750"],
			},
			description:
				"Полувертикальная холодильная горка MAGMA Katran H-1600 сo встроенным агрегатом, поможет увеличить продажи акционных продуктов, свежей еды и напитков. Легко перемещается внутри магазина, помогая выбрать расположение с наилучшей выгодой.",
		},
		{
			id: 9,
			category_id: 2,
			subcategory_id: 102,
			purpose_id: 1,
			brand: "MAGMA",
			preview_image: [
				"https://maeks.ru/upload/icms/images/catalog/%D0%BA%D0%B0%D1%82%D1%80%D0%B0%D0%BD_H150_008%20%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F%20(1)_87.png",
				"https://maeks.ru/upload/icms/images/catalog/main_additional_66.png",
			],
			name: "MAGMA Katran H-1600 DG",
			dimensions: {
				h: ["1600"],
				d: ["870"],
				l: ["1250", "1900", "2100", "2500", "3750"],
			},
			description:
				"Полувертикальная холодильная горка MAGMA Katran H-1600 DG сo встроенным агрегатом, поможет увеличить продажи акционных продуктов, свежей еды и напитков. Легко перемещается внутри магазина, помогая выбрать расположение с наилучшей выгодой. Надежная система раздвижных дверей-купе снижает затраты на электроэнергию и гарантирует бережное хранение продуктов.",
		},
		{
			id: 10,
			category_id: 2,
			subcategory_id: 102,
			purpose_id: 1,
			brand: "MAGMA",
			preview_image: [
				"https://maeks.ru/upload/icms/images/catalog/14%20(2)%20(2).png",
				"https://maeks.ru/upload/icms/images/catalog/142.png",
			],
			name: "MAGMA Izumrud",
			dimensions: {
				h: ["1600"],
				d: ["870"],
				l: ["1250", "1900", "2100", "2500", "3750"],
			},
			description:
				"Полувертикальная холодильная горка MAGMA Katran H-1600 DG сo встроенным агрегатом, поможет увеличить продажи акционных продуктов, свежей еды и напитков. Легко перемещается внутри магазина, помогая выбрать расположение с наилучшей выгодой. Надежная система раздвижных дверей-купе снижает затраты на электроэнергию и гарантирует бережное хранение продуктов.",
		},
		{
			id: 11,
			category_id: 2,
			subcategory_id: 102,
			purpose_id: 1,
			brand: "MAGMA",
			preview_image: [
				"https://maeks.ru/upload/icms/images/catalog/15%20(2)%20(2).png",
				"https://maeks.ru/upload/icms/images/catalog/152.png",
			],
			name: "MAGMA Tira",
			dimensions: {
				h: ["1300"],
				d: ["1320"],
				l: ["1250", "2500", "3750"],
			},
			description:
				"Охлаждаемый овощной развал MAGMA Tira создан чтобы подчеркнуть природную красоту овощей и фруктов. Выкладка на уровне глаз помогает привлечь покупателей во фрэш-зону, а охлаждение подчеркивает свежесть и сочность продуктов.",
		},

		// Витрины
		{
			id: 12,
			category_id: 1,
			purpose_id: 2,
			brand: "MAGMA",
			preview_image: [
				"https://maeks.ru/upload/icms/images/catalog/%D0%92%D0%B8%D1%82%D1%80%D0%B8%D0%BD%D0%B0%20Magma%20Skye.png",
				"https://maeks.ru/upload/icms/images/catalog/Magma%20Skye.png",
			],
			name: "MAGMA Skye",
			dimensions: {
				h: ["1230"],
				d: ["1150"],
				l: ["1250", "1900", "2500", "3750"],
			},
			description:
				"Технологичная и изысканная, витрина MAGMA Skye украсит любой интерьер. Вас удивит легкость и обзорность Skye, а еще вы сможете выбрать любой тип отделки и множество аксессуаров для удобной работы.",
			modifications: ["Гастрономия", "Сэлф", "Мясная", "Рыба на льду"],
		},
		{
			id: 13,
			category_id: 1,
			purpose_id: 2,
			brand: "MAGMA",
			preview_image: [
				"https://maeks.ru/upload/icms/images/catalog/%D0%B1%D0%B5%D1%80%D0%B8%D0%BB_%D0%BD%D0%B5%D0%BE_004%20%D0%BF%D1%80%D0%BE%D0%B7%D1%80%D0%B0%D1%87%D0%BD%20(1)_89.png",
				"https://maeks.ru/upload/icms/images/catalog/main_additional_47.png",
			],
			name: "MAGMA Beryl",
			dimensions: {
				h: ["1180"],
				d: ["1090"],
				l: ["1250", "1900", "2500", "3750"],
			},
			description:
				"Технологичная и изысканная, витрина MAGMA Skye украсит любой интерьер. Вас удивит легкость и обзорность Skye, а еще вы сможете выбрать любой тип отделки и множество аксессуаров для удобной работы.",
			modifications: [
				"Гастрономия",
				"Сэлф",
				"Мясная",
				"Рыба на льду",
				"Низкотемпературная",
				"Мармит",
			],
		},
		{
			id: 14,
			category_id: 1,
			purpose_id: 2,
			brand: "MAGMA",
			preview_image: [
				"https://maeks.ru/upload/icms/images/catalog/%D0%B1%D0%B5%D1%80%D0%B8%D0%BB_%D0%BC%D1%8F%D1%81%D0%BE_013%20%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F%20(1)_90.png",
				"https://maeks.ru/upload/icms/images/catalog/main_additional_48.png",
			],
			name: "MAGMA Beryl plug-in",
			dimensions: {
				h: ["1280"],
				d: ["1090"],
				l: ["1250", "1900", "2500"],
			},
			description:
				"Кубическая витрина MAGMA Beryl plug-in на встроенном холоде – великолепное решение для рынков и магазинов малого формата. Превосходно хранит и демонстрирует товары повседневного спроса. Охлаждаемая камера позволяет хранить запас товаров.",
			modifications: ["Гастрономия", "Сэлф", "Мясная", "Низкотемпературная"],
		},
		{
			id: 15,
			category_id: 1,
			purpose_id: 2,
			brand: "MAGMA",
			preview_image: [
				"https://maeks.ru/upload/icms/images/catalog/%D0%B1%D0%B5%D1%80%D0%B8%D0%BB_%D1%81%D0%BC%D1%83%D0%B7%D0%B8_%D0%B8_%D0%B3%D0%BE%D1%80%D0%BA%D0%B0_004%20%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F%20(1)_91.png",
				"https://maeks.ru/upload/icms/images/catalog/main_additional_56.png",
			],
			name: "MAGMA Beryl SV",
			dimensions: {
				h: ["1380"],
				d: ["1030"],
				l: ["1250", "2500"],
			},
			description:
				"Полувертикальная горка MAGMA Beryl SV – идеальное сочетание удобства и функциональности. Благодаря компактным размерам оптимально подходит для размещения в центре зала, а также органично смотрится в зоне распродаж. Практичное решение для магазина любого формата, в том числе АЗС.",
		},
		{
			id: 16,
			category_id: 1,
			purpose_id: 2,
			brand: "MAGMA",
			preview_image: [
				"https://maeks.ru/upload/icms/images/catalog/%D0%B0%D0%BD%D1%82%D0%B8%D0%B3%D1%83%D0%B0_%D0%B7%D0%B0%D0%BA%D1%80_008%20%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F%20(1)_92.png",
				"https://maeks.ru/upload/icms/images/catalog/main_additional_50.png",
			],
			name: "MAGMA Antigua",
			dimensions: {
				h: ["1215"],
				d: ["1155"],
				l: ["1250", "1900", "2500", "3750"],
			},
			description:
				"Сферическая традиционная витрина MAGMA Antigua – классическая строгая витрина для магазинов любого формата. Великолепно хранит и демонстрирует самый широкий спектр продуктов – от свежего мяса и рыбы до горячих готовых блюд.",
			modifications: [
				"Гастрономия",
				"Сэлф",
				"Рыба на льду",
				"Мясная",
				"Низкотемпературная",
				"Мармит",
			],
		},
		{
			id: 17,
			category_id: 1,
			purpose_id: 2,
			brand: "MAGMA",
			preview_image: [
				"https://maeks.ru/upload/icms/images/catalog/%D0%B0%D0%BD%D1%82%D0%B8%D0%B3%D1%83%D0%B0_%D0%B7%D0%B0%D0%BA%D1%80_008%20%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F%20(1)_92.png",
				"https://maeks.ru/upload/icms/images/catalog/main_additional_50.png",
			],
			name: "MAGMA Hokkaido",
			dimensions: {
				h: ["1115"],
				d: ["1165"],
				l: ["1000", "1250", "1900", "2500", "3750"],
			},
			description:
				"Полувертикальная горка MAGMA Hokkaido – идеальное сочетание удобства и функциональности. Благодаря компактным размерам оптимально подходит для размещения в центре зала, а также органично смотрится в зоне распродаж. Практичное решение для магазина любого формата, в том числе АЗС.",
		},
		{
			id: 18,
			category_id: 1,
			purpose_id: 2,
			brand: "MAGMA",
			preview_image: [
				"https://maeks.ru/upload/icms/images/catalog/%D0%B0%D0%BD%D1%82%D0%B8%D0%B3%D1%83%D0%B0_%D0%B7%D0%B0%D0%BA%D1%80_008%20%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F%20(1)_92.png",
				"https://maeks.ru/upload/icms/images/catalog/main_additional_50.png",
			],
			name: "MAGMA Granat cube",
			dimensions: {
				h: ["1460"],
				d: ["850"],
				l: ["1000", "1250", "2500"],
			},
			description:
				"Строгая и эстетичная кондитерская витрина MAGMA Granat cube подчеркивает красоту кондитерских изделий и вызывает желание сделать покупку. Функциональная и легкая конструкция позволяет удачно вписать витрину в интерьер как большого магазина, так и маленького уютного кафе.",
		},

		// Морозильные бонеты
		{
			id: 19,
			category_id: 2,
			subcategory_id: 100,
			purpose_id: 1,
			brand: "MAGMA",
			preview_image: [
				"https://maeks.ru/upload/icms/images/catalog/%D0%BF%D0%B0%D0%BB%D0%B0%D1%83_006%20%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F1.png",
				"https://maeks.ru/upload/icms/images/catalog/%D0%BF%D0%B0%D0%BB%D0%B0%D1%83_005%20%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F1.png",
			],
			name: "MAGMA Palau",
			dimensions: {
				h: ["1020"],
				d: ["1020"],
				l: ["1250", "1900", "2500"],
			},
			description:
				"Надежный и вместительный прилавок Palau создан для эффективных промо-продаж. Его современный дизайн привлекает покупателей к продуктам, а неизменно стабильная температура обеспечивает их качество. В зависимости от фирменного стиля, мы подберем наилучшее решение отделки – от МДФ до натурального дерева или мрамора. PALAU может работать в нескольких температурных режимах, подойдет как для заморозки, так и продуктов с коротким сроком хранения.",
		},
		{
			id: 20,
			category_id: 2,
			subcategory_id: 100,
			purpose_id: 1,
			brand: "MAGMA",
			preview_image: [
				"https://maeks.ru/upload/icms/images/catalog/%D0%BE%D1%81%D1%82%D1%80%D0%BE%D0%B2%D0%BD%D0%BE%D0%B2%D1%8B%D0%B92024_003%20%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F1.png",
				"https://maeks.ru/upload/icms/images/catalog/%D0%BE%D1%81%D1%82%D1%80%D0%BE%D0%B2%D0%BD%D0%BE%D0%B2%D1%8B%D0%B92024_005%20%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F1.png",
			],
			name: "MAGMA Palau",
			dimensions: {
				h: ["970"],
				d: ["1050"],
				l: ["1900", "2500", "3750"],
			},
			description:
				"Морозильная островная или пристенная бонета MAGMA Sapphire. Высота остекления 540 мм гарантирует превосходный обзор продукции. Надежная современная система охлаждения бережно предохраняет продукты от размораживания весь срок хранения и презентации. Может оснащаться энергосберегающими крышками.",
		},
		{
			id: 21,
			category_id: 2,
			subcategory_id: 100,
			purpose_id: 1,
			brand: "MAGMA",
			preview_image: [
				"https://maeks.ru/upload/icms/images/catalog/%D0%A1%D0%B0%D0%BF%D1%84%D0%B8%D1%80%20%D0%9A%D0%BE%D0%BC%D0%B1%D0%B8_007%20%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F%20(2)_96.png",
				"https://maeks.ru/upload/icms/images/catalog/main_additional_72.png",
			],
			name: "MAGMA Sapphire Combi",
			dimensions: {
				h: ["2255"],
				d: ["1150"],
				l: ["1900", "2500", "3750"],
			},
			description:
				"Морозильная пристенная шкаф-бонета MAGMA Sapphire Сombi. Высота остекления нижней части 540 мм гарантирует превосходный обзор продукции. Независимая раздельная система охлаждения позволяет хранить разные типы продукции. Может оснащаться энергосберегающими крышками.",
		},

		// Встроенный холод
		{
			id: 22,
			category_id: 2,
			subcategory_id: 101,
			purpose_id: 1,
			brand: "MAGMA",
			preview_image: [
				"https://maeks.ru/upload/icms/images/catalog/main_additional_70.png",
				"https://maeks.ru/upload/icms/images/catalog/%D0%A0%D1%83%D0%B1%D0%B8%D0%BD_Vision2%20001%20%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F%20(2)_97.png",
			],
			name: "MAGMA Rubin Vision 2",
			dimensions: {
				h: ["990"],
				d: ["990"],
				l: ["1250"],
			},
			description:
				"Мобильная и универсальная промо-витрина для распродаж MAGMA Rubin vision 2. Подходит для демонстрации продуктов, требующих низких температур – свежего мяса, курицы и изделий из рыбы. Идеальна для свежих решений – готовых блюд и ягод.",
		},
		{
			id: 23,
			category_id: 2,
			subcategory_id: 101,
			purpose_id: 1,
			brand: "MAGMA",
			preview_image: [
				"https://maeks.ru/upload/icms/images/catalog/main_additional_71.png",
				"https://maeks.ru/upload/icms/images/catalog/%D0%A0%D1%83%D0%B1%D0%B8%D0%BD_Vision3%20003%20%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F%20(1)_98.png",
			],
			name: "MAGMA Rubin Vision 3",
			dimensions: {
				h: ["1190"],
				d: ["990"],
				l: ["1250"],
			},
			description:
				"Высокая промо-витрина для распродаж MAGMA Rubin vision 3. Подходит для демонстрации продуктов, требующих низких температур – свежего мяса, курицы и изделий из рыбы. Идеальна для свежих решений – готовых блюд и ягод.",
		},
		{
			id: 24,
			category_id: 2,
			subcategory_id: 101,
			purpose_id: 1,
			brand: "MAGMA",
			preview_image: [
				"https://maeks.ru/upload/icms/images/catalog/main_additional_71.png",
				"https://maeks.ru/upload/icms/images/catalog/%D0%A0%D1%83%D0%B1%D0%B8%D0%BD_Vision3%20003%20%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F%20(1)_98.png",
			],
			name: "MAGMA Rubin Vision 3",
			dimensions: {
				h: ["1190"],
				d: ["990"],
				l: ["1250"],
			},
			description:
				"Высокая промо-витрина для распродаж MAGMA Rubin vision 3. Подходит для демонстрации продуктов, требующих низких температур – свежего мяса, курицы и изделий из рыбы. Идеальна для свежих решений – готовых блюд и ягод.",
		},
		{
			id: 25,
			category_id: 2,
			subcategory_id: 101,
			purpose_id: 1,
			brand: "MAGMA",
			preview_image: [
				"https://maeks.ru/upload/icms/images/catalog/%D0%B3%D1%80%D0%B0%D0%BD%D0%B0%D1%82_%D0%BA%D1%83%D0%B1_002%20%D0%BF%D1%80%D0%BE%D0%B7%D1%80%20(1)_93.png",
				"https://maeks.ru/upload/icms/images/catalog/main_additional_49.png",
			],
			name: "MAGMA Granat cube",
			dimensions: {
				h: ["1460"],
				d: ["850"],
				l: ["1000", "1250", "2500"],
			},
			description:
				"Строгая и эстетичная кондитерская витрина MAGMA Granat cube подчеркивает красоту кондитерских изделий и вызывает желание сделать покупку. Функциональная и легкая конструкция позволяет удачно вписать витрину в интерьер как большого магазина, так и маленького уютного кафе.",
		},

		// Кассовые боксы
		{
			id: 26,
			category_id: 4,
			purpose_id: 3,
			brand: "Greenland",
			preview_image: [
				"https://maeks.ru/upload/icms/images/catalog/%D0%BA%D0%B0%D1%81%D1%81%D1%8B%D0%93%D1%80%D0%B5%D0%BD%D0%BB%D0%B0%D0%BD%D0%B4%D0%B8%D1%8F_0011%20%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F1.png",
				"https://maeks.ru/upload/icms/images/catalog/%D0%BA%D0%B0%D1%81%D1%81%D1%8B%D0%93%D1%80%D0%B5%D0%BD%D0%BB%D0%B0%D0%BD%D0%B4%D0%B8%D1%8F_0022%20%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F1.png",
			],
			name: "Кассовый бокс Greenland",
			description:
				"Кассовый бокс Greenland для супер и гипермаркетов с возможностью отделки под любой тип дерева или камня. Экологичный функциональный дизайн позволяет создать удобное пространство для продавцов и покупателей. Высочайшее качество материалов гарантирует надежность при самой интенсивной эксплуатации без дополнительных затрат на обслуживание.",
			box_details: {
				box_len: "2400 - 4200 мм",
				transporter_len: "1000 - 2400 мм",
				accumulator_type: ["широкий", "узкий"],
				accumulator_len: "800 / 1000 / 1200 мм",
				finish_options: "Возможность отделки под любой тип дерева или камня",
				material: 'Нерж. стал "лен"',
				power: "100 Вт",
				voltage: "220 - 230 В",
			},
		},
		{
			id: 27,
			category_id: 4,
			purpose_id: 3,
			brand: "Ogord",
			preview_image: [
				"https://maeks.ru/upload/icms/images/catalog/Ogord2.png",
				"https://maeks.ru/upload/icms/images/catalog/Ogord1.png",
			],
			name: "Кассовый бокс Ogord",
			description:
				"Кассовый бокс Ogord для супер и гипермаркетов. Экологичный функциональный дизайн позволяет создать удобное пространство для продавцов и покупателей. Высочайшее качество материалов гарантирует надежность при самой интенсивной эксплуатации без дополнительных затрат на обслуживание.",
			box_details: {
				box_len: "2400 - 4200 мм",
				transporter_len: "800 - 2400 мм",
				accumulator_type: ["широкий", "узкий"],
				accumulator_len: "700 / 800 / 1000 / 1200 мм",
				finish_options: "Возможность сборки в левом / правом исполнении",
				material: 'Нерж. стал "лен"',
				power: "100 Вт",
				voltage: "220 - 230 В",
			},
		},
		{
			id: 28,
			category_id: 4,
			purpose_id: 3,
			brand: "Rokoll",
			preview_image: [
				"https://maeks.ru/upload/icms/images/catalog/Rokoll2.png",
				"https://maeks.ru/upload/icms/images/catalog/Rokoll1.png",
			],
			name: "Кассовый бокс Rokoll",
			description:
				"Обновленный дизайн серии Rokoll за счет нового высококачественного защитного бампера рабочей поверхности кассы, производства компании Primo Group. Экологичный функциональный дизайн позволяет создать удобное пространство для продавцов и покупателей. Высочайшее качество материалов гарантирует надежность при самой интенсивной эксплуатации без дополнительных затрат на обслуживание.",
			box_details: {
				box_len: "1600 - 3600 мм",
				transporter_len: "800 - 2200 мм",
				accumulator_type: ["широкий", "узкий"],
				accumulator_len: "450 / 650 / 850 мм",
				finish_options: "Возможность сборки в левом / правом исполнении",
				material: 'Нерж. стал "лен"',
				power: "100 Вт",
				voltage: "220 - 230 В",
			},
		},
		{
			id: 29,
			category_id: 4,
			purpose_id: 3,
			brand: "Mini",
			preview_image: [
				"https://maeks.ru/upload/icms/images/catalog/mini2.png",
				"https://maeks.ru/upload/icms/images/catalog/mini1.png",
			],
			name: "Кассовый бокс Mini",
			description:
				"Серия Mini - это классический вид кассового бокса, который предназначен для форматов магазина малой площадью, где концепция не предполагает большой кассовой зоны. Данная касса представлена без транспортерной ленты, имеет широкий размерный ряд и может быть как со столешницей кассира, так и без нее. Предусмотрено исполнение с широким и узким накопителем, что позволяет устанавливаеть кассу на ограниченной площади. Рабочая поверхность стола и накопителя из шлифованной нержавеющей стали повышенной износостойкости.",
			box_details: {
				box_len: "1400 - 2400 мм",
				transporter_len: "800 - 2200 мм",
				accumulator_type: ["широкий", "узкий"],
				accumulator_len: "650 мм",
				finish_options: "Возможность сборки в левом / правом исполнении",
				material: 'Нерж. стал "лен"',
				power: "100 Вт",
				voltage: "220 - 230 В",
			},
		},
		{
			id: 30,
			category_id: 4,
			purpose_id: 3,
			brand: "Express",
			preview_image: [
				"https://maeks.ru/upload/icms/images/catalog/Rokoll2.png",
				"https://maeks.ru/upload/icms/images/catalog/Rokoll1.png",
			],
			name: "Кассовый бокс Express",
			description:
				"Кассовые боксы Express являются нестандартным решением и подходом к функционалу, а также внешнему виду привычных для покупателя касс формата быстрого обслуживания. Компактные и функциональные кассовые боксы, на которых можно организовать интересное оформление импульсного продукта для покупателей, что позволяет увеличить выручку вашего магазина.",
			box_details: {
				box_len: "1250 - 1600 мм",
				transporter_len: "Без транспортера",
				accumulator_type: ["узкий"],
				accumulator_len: "350 / 400 мм",
				finish_options: "Возможность сборки в левом / правом исполнении",
				material: 'Нерж. стал "лен"',
				power: "100 Вт",
				voltage: "220 - 230 В",
			},
		},
		{
			id: 31,
			category_id: 4,
			purpose_id: 3,
			brand: "Iceland",
			preview_image: [
				"https://maeks.ru/upload/icms/images/catalog/%D0%BA%D0%B0%D1%81%D1%81%D1%8B_new2024_001%20%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F1.png",
				"https://maeks.ru/upload/icms/images/catalog/%D0%BA%D0%B0%D1%81%D1%81%D1%8B_new2024_003%20%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F1.png",
			],
			name: "Кассовый прилавок Iceland",
			description:
				"Кассовые боксы Express являются нестандартным решением и подходом к функционалу, а также внешнему виду привычных для покупателя касс формата быстрого обслуживания. Компактные и функциональные кассовые боксы, на которых можно организовать интересное оформление импульсного продукта для покупателей, что позволяет увеличить выручку вашего магазина.",
			box_details: {
				box_len: "1350 - 1910 мм",
				accumulator_len: "550 мм",
				material: 'Нерж. стал "лен"',
				workstation_width: "1350 - 1910 мм",
			},
		},
		{
			id: 32,
			category_id: 4,
			purpose_id: 3,
			brand: "Checkout",
			preview_image: [
				"https://maeks.ru/upload/icms/images/catalog/%D0%BA%D0%B0%D1%81%D1%81%D1%8B_new2024_005%20%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F1.png",
				"https://maeks.ru/upload/icms/images/catalog/%D0%BA%D0%B0%D1%81%D1%81%D1%8B_new2024_007%20%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F1.png",
			],
			name: "Касса-тумба самообслуживания Сheckout",
			description:
				"Кассовые боксы Сheckout позволят вам сократить очереди, поскольку за счет большего количества касс ускоряется процесс расчета с покупателями. В час пик задействовано больше касс, что дает оптимизацию работы магазина. При этом освободившийся персонал можно направить на другие участки торговой точки. Это решение наиболее эффективно при небольшом количестве товаров в корзине и неравномерном потоке покупателей.",
			box_details: {
				box_len: "900 / 1054 мм",
				box_height: "692 / 792 мм",
				material: 'Нерж. стал "лен"',
			},
		},

		// STAHLER
		// Стеллажи
		{
			id: 33,
			category_id: 5,
			purpose_id: 4,
			brand: "Unknown",
			preview_image: [
				"https://stahler.ru/upload/iblock/e7c/e7c96555f2e9b0c8e8427f7eae4b3369.jpg",
			],
			name: "Стеллаж пристенный перфорированный",
			description:
				'Базовая сборка серии Eco Line со сварной конструкцией "стойка-база" и перфорированной задней панелью. Возможны варианты исполнения секций: 665, 1000 и 1250 мм. Стандартная высота сборки 2250 мм.',
			box_details: {
				box_len: "665 / 1000 / 1250 / 1330 мм",
				box_depth: "370 / 470 мм",
				box_height: "1250 мм",
				material: "Глянец RAL 9016",
			},
		},
		{
			id: 34,
			category_id: 5,
			purpose_id: 4,
			brand: "Unknown",
			preview_image: [
				"https://stahler.ru/upload/iblock/4ea/4ea8a36bcaa9a72a1be2170f7e92eb93.jpg",
			],
			name: "Стеллаж островной",
			description:
				"Стеллаж островной серии Praktish имеет разборную конструкцию стойка-база. Высота стеллажа 1650 мм, возможно исполнение в следующих вариантах: длины секций 665 мм, 1000 мм, 1250 мм. Стеллаж комплектуется 6 навесными полками глубиной 370, 470 мм.",
			box_details: {
				box_len: "665 / 1000 / 1250 / 1330 мм",
				box_depth: "470 мм",
				box_height: "1650 мм",
				material: "Глянец RAL 9016",
			},
		},
		{
			id: 35,
			category_id: 5,
			purpose_id: 4,
			brand: "Unknown",
			preview_image: [
				"https://stahler.ru/upload/iblock/b81/b817563fb71e66453f0a780ddefec8f0.jpg",
			],
			name: "Стеллаж пристенный угловой внутренний",
			description:
				'Стеллаж угловой серии Eco Line c единой конструкцией "стойка-база". При установке в линию с пристенными в комплекте поставляется 1 стойка.',
			box_details: {
				box_height: "2250 мм",
				material: "Глянец RAL 9016",
			},
		},
		{
			id: 36,
			category_id: 5,
			purpose_id: 4,
			brand: "Unknown",
			preview_image: [
				"https://stahler.ru/upload/iblock/032/stellazh_pristennyy_setchatyy.jpg",
			],
			name: "Стеллаж пристенный сетчатый",
			description: "",
			box_details: {
				material: "",
			},
		},
		{
			id: 37,
			category_id: 5,
			purpose_id: 4,
			brand: "Unknown",
			preview_image: [
				"https://stahler.ru/upload/iblock/e9b/e9be7f3e4d23c4f2aec43a36d60afca1.jpg",
			],
			name: "Стеллаж торцевой с полукруглыми полками",
			description:
				"Стеллаж торцевой с полукруглыми полками серии Praktish имеет разборную конструкцию. Возможно исполнение в следующих вариантах: глубина 370 мм,470 мм,570 мм.Стеллаж комплектуется 4 навесными полками глубиной 370 мм, 470 мм.",
			box_details: {
				box_depth: "370 / 470 / 570 мм",
				material: "Глянец RAL 9016",
			},
		},
		{
			id: 38,
			category_id: 5,
			purpose_id: 4,
			brand: "Unknown",
			preview_image: [
				"https://stahler.ru/upload/iblock/8a8/stellazh_pristennyy_528kh528.jpg",
			],
			name: "Стеллаж пристенный",
			description:
				"Стеллаж пристенный серии Praktish имеет разборную конструкцию стойка-база. Высота стеллажа 2300 мм, возможно исполнение в следующих вариантах: длины секций 665 мм, 1000 мм, 1250 мм. Стеллаж комплектуется 5 навесными полками глубиной 310, 370, 470 мм.",
			box_details: {
				box_len: "665 / 1000 / 1250 мм",
				box_depth: "310 / 370 / 470 мм",
				box_height: "2300 мм",
				material: "Глянец RAL 9016",
			},
		},
		{
			id: 39,
			category_id: 5,
			purpose_id: 4,
			brand: "Unknown",
			preview_image: [
				"https://stahler.ru/upload/iblock/083/stellazh_pristennyy_uglovoy_vnutrenniy_ugol_.jpg",
			],
			name: "Стеллаж пристенный угловой (внутренний угол)",
			description:
				"Стеллаж пристенный угловой (внутренний угол) серии Praktish имеет разборную конструкцию стойка-база. Высота стеллажа 2300 мм, возможно исполнение в следующих вариантах: глубина 370 мм,470 мм,570 мм, 670 мм. Стеллаж комплектуется 4 навесными полками глубиной 310, 370мм.",
			box_details: {
				box_depth: "310 / 370 / 470 / 570 мм",
				box_height: "2300 мм",
				material: "Глянец RAL 9016",
			},
		},
		{
			id: 40,
			category_id: 5,
			purpose_id: 4,
			brand: "Unknown",
			preview_image: [
				"https://stahler.ru/upload/iblock/320/32095769b51c2980ecc945fe809f774b.jpg",
			],
			name: "Стеллаж пристенный угловой (внешний угол)",
			description:
				"Стеллаж пристенный угловой (внешний угол) серии Praktish имеет разборную конструкцию стойка-база. Высота стеллажа 2300 мм, возможно исполнение в следующих вариантах: глубина 370 мм,470 мм,570 мм, 670 мм. Стеллаж комплектуется 4 навесными полками глубиной 310, 370мм.",
			box_details: {
				box_depth: "370 / 470 / 570 / 670 мм",
				box_height: "2300 мм",
				material: "Глянец RAL 9016",
			},
		},
		{
			id: 41,
			category_id: 5,
			purpose_id: 4,
			brand: "Unknown",
			preview_image: [
				"https://stahler.ru/upload/iblock/85f/85fef3104a64ecfe153a3749520d1325.jpg",
			],
			name: "Стеллаж пристенный угловой (внешний угол)",
			description:
				"Стеллаж пристенный серии Praktish имеет разборную конструкцию стойка-база. Высота стеллажа 2300 мм, возможно исполнение в следующих вариантах: длины секций 665 мм, 1000 мм, 1250 мм. Стеллаж комплектуется корзинами глубиной 470 мм, 570 мм и навесной полкой глубиной 370 мм.",
			box_details: {
				box_len: "665 / 1000 / 1250 мм",
				box_depth: "370 / 470 / 570 мм",
				box_height: "2300 мм",
				material: "Глянец RAL 9016",
			},
		},
		{
			id: 42,
			category_id: 5,
			purpose_id: 4,
			brand: "Unknown",
			preview_image: [
				"https://stahler.ru/upload/iblock/85f/85fef3104a64ecfe153a3749520d1325.jpg",
			],
			name: "Стеллаж пристенный угловой (внешний угол)",
			description:
				"Стеллаж пристенный серии Praktish имеет разборную конструкцию стойка-база. Высота стеллажа 2300 мм, возможно исполнение в следующих вариантах: длины секций 665 мм, 1000 мм, 1250 мм. Стеллаж комплектуется корзинами глубиной 470 мм, 570 мм и навесной полкой глубиной 370 мм.",
			box_details: {
				box_len: "665 / 1000 / 1250 мм",
				box_depth: "370 / 470 / 570 мм",
				box_height: "2300 мм",
				material: "Глянец RAL 9016",
			},
		},
		{
			id: 43,
			category_id: 5,
			purpose_id: 4,
			brand: "Unknown",
			preview_image: [
				"https://stahler.ru/upload/iblock/85f/85fef3104a64ecfe153a3749520d1325.jpg",
			],
			name: "Стеллаж торцевой с полукруглыми полками",
			description:
				"Стеллаж торцевой с полукруглыми полками серии Praktish имеет разборную конструкцию. Возможно исполнение в следующих вариантах: глубина 370 мм,470 мм,570 мм. Стеллаж комплектуется 4 навесными полками глубиной 370 мм, 470 мм.",
			box_details: {
				box_depth: "370 / 470 / 570 мм",
				material: "Глянец RAL 9016",
			},
		},
		{
			id: 44,
			category_id: 5,
			purpose_id: 4,
			brand: "Unknown",
			preview_image: [
				"https://stahler.ru/upload/iblock/85f/85fef3104a64ecfe153a3749520d1325.jpg",
			],
			name: "Стеллаж торцевой с полукруглыми полками",
			description:
				"Стеллаж торцевой с полукруглыми полками серии Praktish имеет разборную конструкцию. Возможно исполнение в следующих вариантах: глубина 370 мм,470 мм,570 мм. Стеллаж комплектуется 4 навесными полками глубиной 370 мм, 470 мм.",
			box_details: {
				box_depth: "370 / 470 / 570 мм",
				material: "Глянец RAL 9016",
			},
		},

		// Для магазинов одежды
		{
			id: 45,
			category_id: 5,
			purpose_id: 4,
			brand: "Unknown",
			preview_image: [
				"https://stahler.ru/upload/iblock/29f/stellazh_pristennyy_seriya-optimal.jpg",
			],
			name: "Стеллаж Optimal пристенный (для одежды)",
			description: "",
			box_details: {
				material: "",
			},
		},
		{
			id: 46,
			category_id: 5,
			purpose_id: 4,
			brand: "Unknown",
			preview_image: [
				"https://stahler.ru/upload/iblock/99b/stellazh_ostrovnoy_s_panelyu_pereborkoy_v_rame.jpg",
			],
			name: "Стеллаж Optimal островной с колесной опорой (для одежды)",
			description: "",
			box_details: {
				material: "",
			},
		},
		{
			id: 47,
			category_id: 5,
			purpose_id: 4,
			brand: "Unknown",
			preview_image: [
				"https://stahler.ru/upload/iblock/280/pristennyy_stellazh_seriya_optimal.jpg",
			],
			name: "Стеллаж пристенный c регулируемыми кронштейнами (для одежды)",
			description: "",
			box_details: {
				material: "",
			},
		},
		{
			id: 48,
			category_id: 5,
			purpose_id: 4,
			brand: "Unknown",
			preview_image: [
				"https://stahler.ru/upload/iblock/c9f/stellazh_ostrovnoy_s_kolesnoy_oporoy_528kh528.jpg",
			],
			name: "Стеллаж островной с колесной опорой (для одежды)",
			description: "",
			box_details: {
				material: "",
			},
		},

		// Для электротоваров
		{
			id: 49,
			category_id: 5,
			purpose_id: 4,
			brand: "Unknown",
			preview_image: [
				"https://stahler.ru/upload/iblock/f51/stellazh_pristennyy.jpg",
			],
			name: "Стеллаж пристенный (для электротоваров)",
			description:
				'Пристенный стеллаж серии Eco Line на основе сварной (единой) конструкции "стойка-база". В основе конструкции стойка с сечением 60х30 или 80х30. Стеллаж комплектуется навесными полками глубиной 370 и 310 мм.',
			box_details: {
				box_len: "665 / 1000 / 1250 / 1330 мм",
				box_depth: "370 / 470 мм",
				material: "Глянец RAL 9016",
			},
		},
		{
			id: 50,
			category_id: 5,
			purpose_id: 4,
			brand: "Unknown",
			preview_image: [
				"https://stahler.ru/upload/iblock/e7c/e7c96555f2e9b0c8e8427f7eae4b3369.jpg",
			],
			name: "Стеллаж пристенный перфорированный (для электротоваров)",
			description:
				'Базовая сборка серии Eco Line со сварной конструкцией "стойка-база" и перфорированной задней панелью. Возможны варианты исполнения секций: 665, 1000 и 1250 мм. Стандартная высота сборки 2250 мм. Перфорация задних панелей стеллажа позволяет разместить навесные элементы (крючки).',
			box_details: {
				box_len: "665 / 1000 / 1250 / 1330 мм",
				box_depth: "370 / 470 мм",
				material: "Глянец RAL 9016",
			},
		},
		{
			id: 51,
			category_id: 5,
			purpose_id: 4,
			brand: "Unknown",
			preview_image: [
				"https://stahler.ru/upload/iblock/5c4/5c46a6ebaaec49bc563e87b159f525f7.jpg",
			],
			name: "Стеллаж островной (для электротоваров)",
			description:
				"Островной стеллаж серии Eco Line состоит из: двухсторонней стоки высотой 1600 мм, базы островного стеллажа и навесных полок. Возможны варианты исполнения секций стеллажа: длиной 665 мм, 1000 мм, 1250 мм. Высота островного стеллажа может варьироваться. Возможные варианты по высоте: 1600 мм, 1800 мм, 2250 мм.",
			box_details: {
				box_len: "665 / 1000 / 1250 мм",
				box_depth: "370 / 470 мм",
				material: "Глянец RAL 9016",
			},
		},
		{
			id: 52,
			category_id: 5,
			purpose_id: 4,
			brand: "Unknown",
			preview_image: [
				"https://stahler.ru/upload/iblock/863/8639db4dfd9d23521fbe4fe41721f34b.jpg",
			],
			name: "Стеллаж торцевой (для электротоваров)",
			description:
				'Стеллаж  используется для торцевой выкладки на островных конструкциях в торговом зале. Стандартная высота стеллажа - 1600 мм. Торцевой стеллаж серии Eco line имеет единую конструкцию "стойка-база" и комплектуется навесными полками глубиной 310 и 370 мм.',
			box_details: {
				box_len: "1000 мм",
				box_height: "1600 / 1800 / 2250 мм",
				box_depth: "370 / 470 мм",
				material: "Глянец RAL 9016",
			},
		},
		{
			id: 53,
			category_id: 5,
			purpose_id: 4,
			brand: "Unknown",
			preview_image: [
				"https://stahler.ru/upload/iblock/4e7/4e726c89870a35a995407845b54a1070.jpg",
			],
			name: "Стеллаж пристенный с навесом и подсветкой (для электротоваров)",
			description:
				'Стеллаж серии Eco Line на основе монолитной конструкции "стойка-база". Комплектуется навесом с люминесцентной подсветкой. При необходимости может быть установлена Led-подсветка.',
			box_details: {
				box_len: "665 / 1000 / 1250 мм",
				box_height: "2250 мм",
				material: "Глянец RAL 9016",
			},
		},
		{
			id: 54,
			category_id: 5,
			purpose_id: 4,
			brand: "Unknown",
			preview_image: [
				"https://stahler.ru/upload/iblock/4e7/4e726c89870a35a995407845b54a1070.jpg",
			],
			name: "Стеллаж островной (для электротоваров)",
			description:
				"Стеллаж островной серии Praktish имеет разборную конструкцию стойка-база. Высота стеллажа 1650 мм, возможно исполнение в следующих вариантах: длины секций 665 мм, 1000 мм, 1250 мм. Стеллаж комплектуется 6 навесными полками глубиной 370, 470 мм.",
			box_details: {
				box_len: "665 / 1000 / 1250 / 1330 мм",
				box_depth: "470 мм",
				box_height: "1650 мм",
				material: "Глянец RAL 9016",
			},
		},
		{
			id: 55,
			category_id: 5,
			purpose_id: 4,
			brand: "Unknown",
			preview_image: [
				"https://stahler.ru/upload/iblock/8e9/8e98537b4c5adbd5ca7d908a34b341e8.jpg",
			],
			name: "Стеллаж торцевой с навеской (для электротоваров)",
			description:
				"Стеллаж торцевой серии Praktish с перфорированными задними панелями, имеет разборную конструкцию стойка-база. Высота стеллажа 1650 мм, возможно исполнение в следующих вариантах: длины секций 665 мм, 1000 мм, 1250 мм. Стеллаж комплектуется сетчатой корзиной G=470  и крючками для европерфорации.",
			box_details: {
				material: "",
			},
		},
		{
			id: 56,
			category_id: 5,
			purpose_id: 4,
			brand: "Unknown",
			preview_image: [
				"https://stahler.ru/upload/iblock/3db/stellazh_usilennyy_s_dopstoykoy_528kh528.jpg",
			],
			name: "Стеллаж усиленный с дополнительной стойкой (для электротоваров)",
			description: "",
			box_details: {
				material: "Глянец RAL 9016",
			},
		},

		// для алкоголя
		{
			id: 57,
			category_id: 5,
			purpose_id: 4,
			brand: "Unknown",
			preview_image: [
				"https://stahler.ru/upload/iblock/f53/f5383673398f86029f3ce2d0deba13cb.jpg",
			],
			name: "Стеллаж пристенный усиленный с базой 570 (для алгоколя)",
			description:
				"Стеллаж пристенный усиленный серии Praktish имеет разборную конструкцию стойка-база. Высота стеллажа 2300 мм, возможно исполнение в следующих вариантах: длины секций 665 мм, 1000 мм, 1250 мм. Стеллаж комплектуется 4 усиленными навесными полками глубиной 570 мм и дополнительной фронтальной стойкой.",
			box_details: {
				box_len: "665 / 1000 / 1250 мм",
				box_depth: "570 мм",
				box_height: "2300 мм",
				material: "Глянец RAL 9016",
			},
		},
		{
			id: 92,
			category_id: 5,
			purpose_id: 4,
			brand: "Unknown",
			preview_image: [
				"https://stahler.ru/upload/iblock/f80/stellazh_usilennyy_ugol_vneshniy_g_570_528kh528.jpg",
			],
			name: "Стеллаж усиленный угловой (внешний угол) с базой 570 мм (для алгоколя)",
			description:
				"Стеллаж усиленный угловой (внешний угол) серии Praktish имеет разборную конструкцию стойка-база. Высота стеллажа 2300 мм. Стеллаж комплектуется 4 усиленными навесными полками глубиной 570 мм и дополнительной фронтальной стойкой.",
			box_details: {
				box_depth: "570 мм",
				box_height: "2300 мм",
				material: "Глянец RAL 9016",
			},
		},
		{
			id: 58,
			category_id: 5,
			purpose_id: 4,
			brand: "Unknown",
			preview_image: [
				"https://stahler.ru/upload/iblock/ce1/ce103bfdf4002277970ac75e60901ce7.jpg",
			],
			name: "Стеллаж усиленный угловой (внутренний угол) с базой 570 мм (для алгоколя)",
			description:
				"Стеллаж усиленный угловой (внутренний угол) серии Praktish имеет разборную конструкцию стойка-база. Высота стеллажа 2300 мм. Стеллаж комплектуется 4 усиленными навесными полками глубиной 570 мм и дополнительной фронтальной стойкой.",
			box_details: {
				box_depth: "570 мм",
				box_height: "2300 мм",
				material: "Глянец RAL 9016",
			},
		},
		{
			id: 59,
			category_id: 5,
			purpose_id: 4,
			brand: "Unknown",
			preview_image: [
				"https://stahler.ru/upload/iblock/3db/stellazh_usilennyy_s_dopstoykoy_528kh528.jpg",
			],
			name: "Стеллаж усиленный с дополнительной стойкой (для алгоколя)",
			description: "",
			box_details: {
				material: "Глянец RAL 9016",
			},
		},
		{
			id: 60,
			category_id: 5,
			purpose_id: 4,
			brand: "Unknown",
			preview_image: [
				"https://stahler.ru/upload/iblock/5e6/5e6af8a1d3cce0760d757f2a2d00095c.jpg",
			],
			name: "Стеллаж островной с сетчатыми полками (для алгоколя)",
			description: "",
			box_details: {
				material: "Глянец RAL 9016",
			},
		},
		{
			id: 61,
			category_id: 5,
			purpose_id: 4,
			brand: "Unknown",
			preview_image: ["https://stahler.ru/upload/iblock/055/25_528x528.jpg"],
			name: "Стеллаж алкогольный (для алгоколя)",
			description:
				"Стеллаж предназначен для демонстрации широкого ассортимента алкогольной продукции, выдерживает повышенные нагрузки.",
			advantages: [
				"прочный разборный металлокаркас",
				"повышенные нагрузки на полку",
				"комплектация различным количеством полок",
				"регулируемые по высоте опоры",
				"пристенное или островное расположение («спина к спине»)",
				"разнообразные цветовые решения по RAL",
			],
			box_details: {
				material: "Глянец RAL 9016",
			},
		},
		{
			id: 62,
			category_id: 5,
			purpose_id: 4,
			brand: "Unknown",
			preview_image: ["https://stahler.ru/upload/iblock/4be/23_528x528.jpg"],
			name: "Шкаф-витрина алкогольный открытый (для алгоколя)",
			description:
				"Шкаф-витрина предназначен для демонстрации элитных сортов алкоголя в  специализированных магазинах, кафе, барах, ресторанах.",
			advantages: [
				"задняя зеркальная панель",
				"верхняя LED-подсветка",
				"дверцы с раздвижной системой",
				"встроенный замок",
				"хромированные ручки накладные",
				"2 уровня полок",
				"различное исполнение цветовых решений ЛДСП",
			],
			box_details: {
				material: "Глянец RAL 9016",
			},
		},
		{
			id: 63,
			category_id: 5,
			purpose_id: 4,
			brand: "Unknown",
			preview_image: ["https://stahler.ru/upload/iblock/c6d/24_528x528.jpg"],
			name: "Стойка под вино с наклонными сетчатыми полками (для алгоколя)",
			description:
				"Стеллаж позволяет максимально эффективно представить алкогольную продукцию – за счет наклонных сетчатых полок, расположенных под комфортным углом для наилучшего обзора. Сетчатый ограничитель обеспечивает надёжную фиксацию бутылок. Возможно пристенное или островное («спина к спине») расположение стоек.",
			box_details: {
				material: "Глянец RAL 9016",
			},
		},
		{
			id: 64,
			category_id: 5,
			purpose_id: 4,
			brand: "Unknown",
			preview_image: ["https://stahler.ru/upload/iblock/6d7/22_528x528.jpg"],
			name: "Витрина винная (для алгоколя)",
			description:
				"Витрина винная предназначен для демонстрации элитных сортов алкоголя в  специализированных магазинах, кафе, барах, ресторанах.",
			advantages: [
				"2 распашные стеклянные дверцы с замком",
				"2 распашные глухие дверцы с хромированными ручками",
				"2 уровня полок",
			],
			box_details: {
				material: "Глянец RAL 9016",
			},
		},
		{
			id: 65,
			category_id: 5,
			purpose_id: 4,
			brand: "Unknown",
			preview_image: ["https://stahler.ru/upload/iblock/f9d/19_528x528.jpg"],
			name: "Стеллаж с панелями ЛДСП со сводчатым фризом (для алгоколя)",
			description:
				"Стеллаж предназначен для демонстрации широкого ассортимента алкогольной продукции, выдерживает повышенные нагрузки.",
			advantages: [
				"3 уровня регулируемых по высоте полок",
				"регулируемые по высоте винтовые опоры",
				"различные варианты цветовых панелей ЛДСП и цвета металокаркасса по RAL",
				"легкая разборная конструкция на зацепах",
			],
			box_details: {
				material: "Глянец RAL 9016",
			},
		},

		// для продуктов
		{
			id: 66,
			category_id: 6,
			purpose_id: 4,
			brand: "Unknown",
			preview_image: [
				"https://stahler.ru/upload/iblock/49d/kvadrat-zakrytyy-528kh528_2.jpg",
			],
			name: "Модуль «Квадрат» со сплошными панелями (для продуктов)",
			description:
				"Модуль «Квадрат» со сплошными панелями обеспечивает эффективную обзорность и удобный доступ к продукции со всех сторон. Полки модуля выдерживают повышенные нагрузки, а их покрытие устойчиво к механическим воздействиям.",
			box_details: {
				box_len: "570 мм",
				box_height: "1400 мм",
				material:
					"В зависимости от назначения и стиля торгового зала, модуль «Квадрат» может быть выполнен в любом цветовом решении по каталогу RAL.",
			},
		},
		{
			id: 67,
			category_id: 6,
			purpose_id: 4,
			brand: "Unknown",
			preview_image: [
				"https://stahler.ru/upload/iblock/eeb/modul-kvadrat-700kh700.jpg",
			],
			name: "Модуль «Квадрат» с сетчатыми панелями (для продуктов)",
			description:
				"Модуль «Квадрат» с сетчатыми панелями обеспечивает эффективную обзорность и удобный доступ к продукции со всех сторон. Полки модуля выдерживают повышенные нагрузки, а их покрытие устойчиво к механическим воздействиям.",
			box_details: {
				box_len: "570 мм",
				box_height: "1400 мм",
				material:
					"В зависимости от назначения и стиля торгового зала, модуль «Квадрат» может быть выполнен в любом цветовом решении по каталогу RAL.",
			},
		},
		{
			id: 68,
			category_id: 5,
			purpose_id: 4,
			brand: "Unknown",
			preview_image: [
				"https://stahler.ru/upload/iblock/0f3/0f3ca7f2cdf5ed8442cbe40d89b42c2f.jpg",
			],
			name: "Стеллаж с полками с разделителями (для продуктов)",
			description:
				"Стеллаж пристенный серии Praktish имеет разборную конструкцию стойка-база. Высота стеллажа 2300 мм, возможно исполнение в следующих вариантах: длины секций 665 мм, 1000 мм, 1250 мм. Стеллаж комплектуется 4 навесными металлическими полками с разделителями глубиной 470 мм. и навесом без подсветки.",
			box_details: {
				box_len: "665 / 1000 / 1250 мм",
				box_depth: "470 мм",
				box_height: "2300 мм",
				material: "Глянец RAL 9016",
			},
		},
		{
			id: 69,
			category_id: 5,
			purpose_id: 4,
			brand: "Unknown",
			preview_image: [
				"https://stahler.ru/upload/iblock/0ff/0ffb4af07ff3641fd505b9ce11692339.jpg",
			],
			name: "Стеллаж для конфет (для продуктов)",
			description:
				"Стеллаж пристенный серии Praktish имеет разборную конструкцию стойка-база. Высота стеллажа 2050 мм, возможно исполнение в следующих вариантах: длины секций 665 мм, 1000 мм, 1250 мм. Стеллаж комплектуется 3 специализированными полками для конфет ЛДСП глубиной 470 мм. и навесом с подсветкой.",
			box_details: {
				box_len: "665 / 1000 / 1250 мм",
				box_depth: "470 мм",
				box_height: "2050 мм",
				material: "Глянец RAL 9016",
			},
		},
		{
			id: 70,
			category_id: 5,
			purpose_id: 4,
			brand: "Unknown",
			preview_image: [
				"https://stahler.ru/upload/iblock/aee/aeec5e0a9e8bbcaf958e85d9b4a07e88.jpg",
			],
			name: "Стеллаж пристенный с хлебными полками (для продуктов)",
			description:
				'Стеллаж серии eco line с единой конструкцией "стойка-база" для выкладки хлеба и хлебобулочных изделий. Нижний реечный накопитель высотой 500 мм. Стеллаж комплектуется двумя реечными полками высотой 250 мм и полкой 80 мм.',
			box_details: {
				box_len: "1000 мм",
				box_height: "2250 мм",
				material: "Глянец RAL 9016",
			},
		},

		// household
		{
			id: 71,
			category_id: 5,
			purpose_id: 4,
			brand: "Unknown",
			preview_image: [
				"https://stahler.ru/upload/iblock/3c1/stellazh_tortsevoy_dsp_528kh528.jpg",
			],
			name: "Стеллаж торцевой ДСП (для продуктов)",
			description:
				"Стеллаж торцевой серии Praktish имеет разборную конструкцию стойка-база. Высота стеллажа варьируется от 1100 до 2400 мм (стандартное решение - 1650 мм), возможно исполнение в следующих вариантах: длины секций 665 мм, 850 мм, 1000 мм, 1250 мм.",
			box_details: {
				box_len: "665 / 850 / 1000 / 1250 мм",
				box_depth: "370 / 470 / 570 / 670 / 770 мм",
				box_height: "от 1100 до 2400 мм",
				material: "Глянец RAL 9016",
			},
		},
		{
			id: 72,
			category_id: 5,
			purpose_id: 4,
			brand: "Unknown",
			preview_image: [
				"https://stahler.ru/upload/iblock/9a2/stellazh_pristennyy_so_steklyannymi_polkami_528kh528.jpg",
			],
			name: "Стеллаж пристенный со стеклянными полками (для продуктов)",
			description:
				'Стеллаж со стеклянными полками подходит для выкладки косметики, сувениров, ювелирных изделий. Стеллаж серии praktish имеет разборную конструкцию "стойка-база". Возможно исполнение секций длиной: 665, 1000, 1250, 1330 мм.',
			box_details: {
				box_len: "665 / 1000 / 1250 / 1330 мм",
				material: "Глянец RAL 9016",
			},
		},

		// Хлебные
		{
			id: 73,
			category_id: 5,
			purpose_id: 4,
			brand: "Unknown",
			preview_image: [
				"https://stahler.ru/upload/iblock/50b/528kh528-khleb-stellazh-s-lyukom-sayt.jpg",
				"https://stahler.ru/upload/iblock/e7b/risunok3.jpg",
				"https://stahler.ru/upload/iblock/634/risunok2.jpg",
			],
			name: "Стеллаж для выпечки собственного производства, с тумбой и люком для отходов (хлебные)",
			description:
				"Стеллаж предназначен для эффективной демонстрации и предпродажного хранения выпечки собственного производства в магазинах или хлебных отделах супермаркетов, имеющих собственную пекарню. \nСтеллаж имеет изолированные прозрачные боксы с отверстием, в которых размещаются хлебобулочные изделия различного ассортимента.\nОптимальный угол наклона боксов обеспечивает наилучшую обзорность продукции, удобство выбора и покупки. \nОткрытая задняя поверхность стеллажа предназначена для простой загрузки изделий. \nСтеллаж может снабжаться зафиксированной на стеллаже подставкой со щипцами (дополнительный аксессуар) — для удобства покупателей. \nНижняя часть стеллажа имеет тумбу с люком для отходов — удобно и практично для утилизации стаканчиков или салфеток, особенно, если данный стеллаж располагается рядом с кофе-аппаратом.\nРегулируемые по высоте опоры обеспечивают установку стеллажа четко по уровню, даже не смотря на имеющиеся несовершенства напольного покрытия. \nМеталлические компоненты стеллажа (задние панели, стойки, кронштейны и т.д.) могут быть выкрашены в разнообразных вариантах по палитре RAL (как в базовой цене, так и с наценкой).",
			box_details: {
				material: "",
			},
		},
		{
			id: 74,
			category_id: 5,
			purpose_id: 4,
			brand: "Unknown",
			preview_image: [
				"https://stahler.ru/upload/iblock/946/528kh528-khleb-stellazh-bez-lyuka-sayt.jpg",
				"https://stahler.ru/upload/iblock/433/risunok1.jpg",
				"https://stahler.ru/upload/iblock/7f0/risunok2.jpg",
			],
			name: "Стеллаж для выпечки собственного производства, с тумбой (хлебные)",
			description:
				"Стеллаж предназначен для эффективной демонстрации и предпродажного хранения выпечки собственного производства в магазинах или хлебных отделах супермаркетов, имеющих собственную пекарню. \nСтеллаж имеет изолированные прозрачные боксы с отверстием, в которых размещаются хлебобулочные изделия различного ассортимента. \nОптимальный угол наклона боксов обеспечивает наилучшую обзорность продукции, удобство выбора и покупки. \nОткрытая задняя поверхность стеллажа предназначена для простой загрузки изделий. \nСтеллаж может снабжаться зафиксированной на стеллаже подставкой со щипцами (дополнительный аксессуар) — для удобства покупателей. \nНижняя часть стеллажа имеет тумбу, которая используется для хранения дополнительного товарного запаса, загружаемого со стороны пекарни. \nРегулируемые по высоте опоры обеспечивают установку стеллажа четко по уровню, даже не смотря на имеющиеся несовершенства напольного покрытия. \nМеталлические компоненты стеллажа (задние панели, стойки, кронштейны и т.д.) могут быть выкрашены в разнообразных вариантах по палитре RAL (как в базовой цене, так и с наценкой).",
			box_details: {
				material: "",
			},
		},
		{
			id: 75,
			category_id: 5,
			purpose_id: 4,
			brand: "Unknown",
			preview_image: [
				"https://stahler.ru/upload/iblock/211/528kh528-stellazh-khleb-vykladka-s-otdaleniem.jpg",
				"https://stahler.ru/upload/iblock/433/528kh528-stellazh-sayt1.jpg",
				"https://stahler.ru/upload/iblock/716/risunok4.jpg",
				"https://stahler.ru/upload/iblock/58a/risunok5.jpg",
			],
			name: "Стеллаж для хлебобулочных изделий (индустриальных) (хлебные)",
			description:
				"Стеллаж предназначен для выкладки широкого ассортимента хлебобулочных изделий в индустриальной упаковке. \nОптимальный конструктив стеллажа, имеющий несколько рядов наклонных полок, обеспечивает максимальную обзорность продукции и свободный доступ к ней. \nСтеллаж выполнен из экологически чистых материалов — полки из массива хвойных пород, решётчатое исполнение которых обеспечивает свободную циркуляцию воздуха. \nНижний вместительный контейнер позволяет разместить большое количество изделий массового спроса — батоны, буханки. \nНа фронтальной части полок имеются ценникодержатели (дополнительная опция), для простой и наглядной идентификации продукции и ее стоимости. \nРегулируемые по высоте опоры обеспечивают установку стеллажа четко по уровню, даже не смотря на имеющиеся несовершенства напольного покрытия. \nМеталлические компоненты стеллажа (задние панели, стойки, кронштейны и т.д.) могут быть выкрашены в разнообразных вариантах по палитре RAL (как в базовой цене, так и с наценкой).",
			box_details: {
				material: "",
			},
		},

		// для овощей и фруктов
		{
			id: 76,
			category_id: 5,
			purpose_id: 4,
			brand: "Unknown",
			preview_image: [
				"https://stahler.ru/upload/iblock/8d1/konteyner_dlya_ovoshchey_528kh528.jpg",
			],
			name: "Контейнер для овощей (для овощей и фруктов)",
			description: "",
			box_details: {
				material: "",
			},
		},
		{
			id: 77,
			category_id: 5,
			purpose_id: 4,
			brand: "Unknown",
			preview_image: [
				"https://stahler.ru/upload/iblock/3db/stellazh_ovoshchnoy_s_podkatnymi_konteynerami_528kh528.jpg",
			],
			name: "Стеллаж овощной с подкатными контейнерами (для овощей и фруктов)",
			description: "",
			box_details: {
				material: "",
			},
		},
		{
			id: 78,
			category_id: 5,
			purpose_id: 4,
			brand: "Unknown",
			preview_image: [
				"https://stahler.ru/upload/iblock/ac1/stellazh_dlya_ovoshchey_i_fruktov_528kh528.jpg",
			],
			name: "Овощной развал 1200*1100 мм (для овощей и фруктов)",
			description:
				"Овощной развал с длиной секции 1200 и высотой 1100 мм - традиционное решение для оснащения зон fresh-food. Имеет две декоративные планки с фронтальной стороны.",
			box_details: {
				box_len: "1200 мм",
				box_height: "1100 мм",
				material: "",
			},
		},
		{
			id: 93,
			category_id: 5,
			purpose_id: 4,
			brand: "Unknown",
			preview_image: [
				"https://stahler.ru/upload/iblock/8b2/stellazh_ovoshchnoy_s_vykatnym_konteynerom_528kh528.jpg",
			],
			name: "Деревянный островок для овощей и фруктов 1200*1100 мм (для овощей и фруктов)",
			description:
				"Стеллаж островок для выкладки овощей и фруктов с выдвижной полкой. Длина секции составляет 1250 мм. Ширина стеллажа 1000 мм, с выдвижной полкой - 2000 мм.",
			box_details: {
				box_len: "1250 мм",
				box_height: "1100 мм",
				material: "",
			},
		},
		{
			id: 79,
			category_id: 5,
			purpose_id: 4,
			brand: "Unknown",
			preview_image: [
				"https://stahler.ru/upload/iblock/070/stellazh_dlya_ovoshchey_i_fruktov_vneshniy_ugol_528kh528.jpg",
			],
			name: "Стеллаж для овощей и фруктов (внешний угол) (для овощей и фруктов)",
			description: "",
			box_details: {
				material: "",
			},
		},
		{
			id: 80,
			category_id: 5,
			purpose_id: 4,
			brand: "Unknown",
			preview_image: [
				"https://stahler.ru/upload/iblock/4bb/stellazh_dlya_ovoshchey_i_fruktov_vnutrenniy_ugol_528kh528.jpg",
			],
			name: "Стеллаж для овощей и фруктов (внутренний угол) (для овощей и фруктов)",
			description: "",
			box_details: {
				material: "",
			},
		},
		{
			id: 81,
			category_id: 5,
			purpose_id: 4,
			brand: "Unknown",
			preview_image: [
				"https://stahler.ru/upload/iblock/03b/528kh528-sayt-fruktovo-ovoshchnoy.jpg",
			],
			name: "Фруктово-овощной островной модуль с декоративной панелью (пристенный) (для овощей и фруктов)",
			description:
				"Пристенный фруктово-овощной модуль предназначен для эффективной демонстрации овощей и фруктов в сетевых магазинах различных форматов. \nСетчатые полки различной глубины наглядно демонстрируют продукцию, обеспечивая отличную циркуляцию воздуха. Полка имеет отгиб для надёжной фиксации ящиков с продукцией. \nОптимальный угол наклона экспозиционной полки создает наилучший обзор выкладки. \nВместительная базовая полка предназначена для размещения большого количества овощей в корзинах или ящиках. \nБампер на фронтальной части базы защищает изделие от случайных механических повреждений. \nПрочные металлические стойки обеспечивают устойчивость конструкции, а перфорация с шагом 50 мм дает возможность перемещать полки на нужный уровень. \nПоперечная и диагональная стяжка стеллажа обеспечивает конструкции максимальную устойчивость. \nРегулируемые по высоте опоры позволяют установить оборудование четко по уровню.",
			box_details: {
				material: "",
			},
		},
		{
			id: 82,
			category_id: 5,
			purpose_id: 4,
			brand: "Unknown",
			preview_image: [
				"https://stahler.ru/upload/iblock/ca2/528kh528-fruktvoo-ovoshchnoy-otsrovnoy-s-vykladkoy-otdalennyy.jpg",
				"https://stahler.ru/upload/iblock/073/528kh528-fruktovo_ovoshchnoy-sayt.jpg",
			],
			name: "Фруктово-овощной островной модуль с декоративной панелью (для овощей и фруктов)",
			description:
				"Фруктово-овощной островной модуль предназначен для эффективной демонстрации овощей и фруктов в сетевых магазинах различных форматов. \nСетчатые полки различной глубины наглядно демонстрируют продукцию, обеспечивая отличную циркуляцию воздуха. Полка имеет отгиб для надёжной фиксации ящиков с продукцией. \nОптимальный угол наклона экспозиционной полки создает наилучший обзор выкладки. \nВместительная базовая полка предназначена для размещения большого количества овощей в корзинах или ящиках. \nБампер на фронтальной части базы защищает изделие от случайных механических повреждений. \nПрочные металлические стойки обеспечивают устойчивость конструкции, а перфорация с шагом 50 мм дает возможность перемещать полки на нужный уровень. \nПоперечная и диагональная стяжка стеллажа обеспечивает конструкции максимальную устойчивость. \nРегулируемые по высоте опоры позволяют установить оборудование четко по уровню.",
			box_details: {
				box_len: "1200 мм",
				box_height: "1600 мм",
				material:
					"Возможен выкрас изделия в любые цвета по RAL, а так же использование разнообразных вариантов отделки ЛДС — в базовой цене или с наценкой.",
			},
		},
		{
			id: 83,
			category_id: 5,
			purpose_id: 4,
			brand: "Unknown",
			preview_image: [
				"https://stahler.ru/upload/iblock/b4b/528kh528-stellazh-ovoshchi-frukty-tortsevoy.jpg",
			],
			name: "Модуль пристенный «Овощи/Фрукты» (для овощей и фруктов)",
			description:
				"Пристенный модуль «Овощи/Фрукты» предназначен для эффективной демонстрации овощей и фруктов в магазинах любых форматов. Полки с бортом позволяют надежно разместить ящики с продукцией под оптимальным углом наклона (55 град) для наилучшей обзорности ассортимента и максимально комфортного доступа к нему. Вместительная базовая полка служит для выкладки дополнительного ассортимента в лотках или корзинах. \nДля сопутствующих товаров к заказу доступен контейнер для кросс-продаж (дополнительный аксессуар, N-KR 06001000). Он легко размещается на борту полки и позволяет разместить обширный ассортимент сопутствующих товаров (орехи, соки, джемы). \nДля придания оборудованию индивидуальности все его металлические элементы могут быть выкрашены в различные цвета по палитре RAL — в базовой цене или с наценкой (условия уточняйте у менеджеров «КРИСПИ»). \nПлинтус ЛДСП под металлическую полку, боковину ЛДСП базы левую, а также боковину ЛДСП базы правую возможно изготовить из различных вариантов ЛДСП (различные цвета и текстуры), в зависимости от дизайнерского решения всего торгового зала.",
			box_details: {
				box_len: "1600 мм",
				box_depth: "1342 мм",
				box_height: "1000 мм",
				material:
					"Возможен выкрас изделия в любые цвета по RAL, а так же использование разнообразных вариантов отделки ЛДС — в базовой цене или с наценкой.",
			},
		},
		{
			id: 84,
			category_id: 5,
			purpose_id: 4,
			brand: "Unknown",
			preview_image: [
				"https://stahler.ru/upload/iblock/df2/528kh528-shtaler-stellazh-otdalenie-frontalnyy-s-vykladkoy.jpg",
				"https://stahler.ru/upload/iblock/df2/528kh528-shtaler-stellazh-otdalenie-frontalnyy-s-vykladkoy.jpg",
			],
			name: "Модуль островной «Овощи/Фрукты» (для овощей и фруктов)",
			description:
				"Островной модуль «Овощи/Фрукты» предназначен для эффективной демонстрации овощей и фруктов в магазинах средних и крупных форматов. Островная конфигурация обеспечивает максимально комфортный доступ к продукции со всех сторон. Полки с бортом позволяют надежно разместить ящики под оптимальным углом наклона (55 град) для наилучшей обзорности ассортимента. Вместительная базовая полка служит для выкладки дополнительного ассортимента в лотках или корзинах. \nДля сопутствующих товаров к заказу доступен контейнер для кросс-продаж (дополнительный аксессуар, N-KR 06001000). Он легко размещается на борту полки и позволяет разместить обширный ассортимент сопутствующих товаров (орехи, соки, джемы). \nДля придания оборудованию индивидуальности все его металлические элементы могут быть выкрашены в различные цвета по палитре RAL — в базовой цене или с наценкой (условия уточняйте у менеджеров «КРИСПИ»). \nПлинтус ЛДСП под металлическую полку, боковину ЛДСП базы левую, а также боковину ЛДСП базы правую возможно изготовить из различных вариантов ЛДСП (различные цвета и текстуры), в зависимости от дизайнерского решения всего торгового зала.",
			box_details: {
				box_len: "1600 мм",
				box_depth: "1342 мм",
				box_height: "1000 мм",
				material:
					"Возможен выкрас изделия в любые цвета по RAL, а так же использование разнообразных вариантов отделки ЛДС — в базовой цене или с наценкой.",
			},
		},
		{
			id: 85,
			category_id: 5,
			purpose_id: 4,
			brand: "Unknown",
			preview_image: [
				"https://stahler.ru/upload/iblock/2a4/528kh528-diksi-sai_t.jpg",
				"https://stahler.ru/upload/iblock/4ea/528kh528-diksi-sai_t-otdalenie-3_4.jpg",
				"https://stahler.ru/upload/iblock/bb0/1.jpg",
				"https://stahler.ru/upload/iblock/793/2.jpg",
				"https://stahler.ru/upload/iblock/9ff/3.jpg",
			],
			name: "Развал овощной модульный (для овощей и фруктов)",
			description:
				"Развал предназначен для эффективной демонстрации овощей и фруктов в магазинах различных форматов. Вместительные выдвижные контейнеры позволяют разместить запас продукции, а регулируемое по высоте решётчатое дно обеспечивает выкладку различного объема товара как россыпью, так и в упаковке. Регулируемый угол наклона обеспечивает наилучший обзор продукции и максимально комфортный доступ к ней.",
			box_details: {
				box_len: "1000 - 850 - 540 мм",
				box_depth: "800 - 600 - 1100 мм",
				box_height: "1200 - 600 - 750 мм",
				material:
					"Возможен выкрас изделия в любые цвета по RAL, а так же использование разнообразных вариантов отделки ЛДС — в базовой цене или с наценкой.",
			},
		},
		{
			id: 86,
			category_id: 5,
			purpose_id: 4,
			brand: "Unknown",
			preview_image: [
				"https://stahler.ru/upload/iblock/19f/fon-shtakhler-528kh528_5.jpg",
			],
			name: "Овощной развал с декоративной панелью ЛДСП, артикул T-WL 10161210 (для овощей и фруктов)",
			description:
				"Овощной развал для демонстрации овощей и фруктов, каркас – металл, настил из массива хвойных пород. Стандартный цвет покрытия RAL 6018. Габаритные размеры: длина 1250 мм, глубина 1000 мм, высота 1600 мм.",
			box_details: {
				material:
					"Возможен выкрас изделия в любые цвета по RAL, а так же использование разнообразных вариантов отделки ЛДС — в базовой цене или с наценкой.",
			},
		},
		{
			id: 87,
			category_id: 5,
			purpose_id: 4,
			brand: "Unknown",
			preview_image: [
				"https://stahler.ru/upload/iblock/75c/fon-shtakhler-528kh528_4.jpg",
			],
			name: "Контейнер для овощей, артикул N-KR 02806090 (для овощей и фруктов)",
			description:
				"Контейнер для демонстрации и предпродажного хранения овощей насыпью. Габаритные размеры: длина 800 мм, глубина 600 мм, высота 800 мм.",
			box_details: {
				box_len: "800 мм",
				box_depth: "600 мм",
				box_height: "800 мм",
				material: "",
			},
		},
		{
			id: 88,
			category_id: 5,
			purpose_id: 4,
			brand: "Unknown",
			preview_image: [
				"https://stahler.ru/upload/iblock/73e/fon-shtakhler-528kh528_3.jpg",
			],
			name: "Овощной развал, артикул T-WL 10101250 (для овощей и фруктов)",
			description:
				"Овощной развал для демонстрации овощей и фруктов, каркасс – металл, настил из массива хвойных пород, регулируемый угол наклона. Стандартный цвет покрытия RAL 6018. Габаритные размеры: длина 1250 мм, глубина 1000 мм, высота 600 мм.",
			box_details: {
				box_len: "1250 мм",
				box_depth: "1000 мм",
				box_height: "600 мм",
				material: "",
			},
		},
		{
			id: 89,
			category_id: 5,
			purpose_id: 4,
			brand: "Unknown",
			preview_image: [
				"https://stahler.ru/upload/iblock/48b/fon-shtakhler-528kh528_2.jpg",
			],
			name: "Овощной стол с полками, артикул N-AA 07128085 (для овощей и фруктов)",
			description:
				"Овощной стол с полками для демонстрации овощей и фруктов, каркасс – металл, комплектуется держателем для пакетов, покрытие RAL 6018. П оставляется в разобранном виде. Возможна комплектация артикулов N-AA 07128085 и N-AA 07128014 в единую линию. Габаритные размеры: длина 1200 мм, глубина 800 мм, высота 850 мм",
			box_details: {
				material: "",
			},
		},
		{
			id: 90,
			category_id: 5,
			purpose_id: 4,
			brand: "Unknown",
			preview_image: [
				"https://stahler.ru/upload/iblock/508/fon-shtakhler-528kh528_1.jpg",
			],
			name: "Стеллаж овощной с выкатной полкой, артикул T-WL 10001250 (для овощей и фруктов)",
			description:
				"Стеллаж для выкладки фруктовой и плодо-овощной продукции. Изготавливается на основе разборной конструкции, имеет выкатную полку, каркас из металла и настил из массива хвойных пород. Стандартный цвет - зелёный (RAL 6018). Габаритные размеры: длина 1250 мм, глубина 1000 мм, высота 600-1400 мм.",
			box_details: {
				box_len: "1250 мм",
				box_depth: "1000 мм",
				box_height: "600 - 1400 мм",
				material: "",
			},
		},

		// для промо
		{
			id: 91,
			category_id: 5,
			purpose_id: 5,
			brand: "Unknown",
			preview_image: [
				"https://stahler.ru/upload/iblock/e04/stol_dlya_rasprodazh_528kh528.jpg",
			],
			name: "Стол для распродаж (промо)",
			description: "",
			box_details: {
				material: "",
			},
		},
		{
			id: 94,
			category_id: 7,
			purpose_id: 5,
			brand: "Unknown",
			preview_image: [
				"https://www.unitrade-orel.ru/image/price/a80993ef057a91d5029e9c6b9a240728.jpeg",
			],
			name: "Корзина (стол) для распродаж на ножках разборная (промо)",
			description:
				"Корзина - стол для распродаж  быстроразборная , мобильный переносной стол для выкладки товара, очень удобен для презентации быстрораспродаваемой продукции. \nВозможно изготовить в разных размерах и покрытиях оптом. \nИзготавливаем оборудование для торгового зала по вашим идеям, рисункам и чертежам. \nЗа подробной информацией обращайтесь к менеджерам по телефону или через форму обратной связи.",
			box_details: {
				box_len: "950 мм",
				box_depth: "680 мм",
				box_height: "850 мм",
				material: "",
			},
		},
		{
			id: 95,
			category_id: 7,
			purpose_id: 5,
			brand: "Unknown",
			preview_image: [
				"https://www.unitrade-orel.ru/image/price/cfab9b57827f2736636571f93a6222a1.jpeg",
			],
			name: "Манеж торговый (стол) для распродаж,с регулируемым дном 1200х800мм (промо)",
			description:
				"Металлический манеж для распродаж с регулируемым дном предназначен для выкладки товара в проходах торговых точек.",
			advantages: [
				"глубина рабочей части - 400 мм",
				"шаг регулировки дна - 100 мм",
				"дно разделено на две половины, что позволяет выкладывать товар на разной высоте",
			],
			box_details: {
				box_len: "1200 мм",
				box_depth: "800 мм",
				box_height: "800 мм",
				material: "",
			},
		},
		{
			id: 96,
			category_id: 7,
			purpose_id: 5,
			brand: "Unknown",
			preview_image: [
				"https://www.unitrade-orel.ru/image/price/37053cbdfa78bf56852a2c09d328492c.jpeg",
			],
			name: "Манеж торговый (стол) для распродаж,с регулируемым дном 1200х800мм (промо)",
			description:
				"Металлический манеж для распродаж с регулируемым дном предназначен для выкладки товара в проходах торговых точек.",
			advantages: [
				"глубина рабочей части - 400 мм",
				"шаг регулировки дна - 100 мм",
				"дно разделено на две половины, что позволяет выкладывать товар на разной высоте",
			],
			box_details: {
				box_len: "800 мм",
				box_depth: "800 мм",
				box_height: "800 мм",
				material: "",
			},
		},
		{
			id: 97,
			category_id: 7,
			purpose_id: 5,
			brand: "Unknown",
			preview_image: [
				"https://www.unitrade-orel.ru/image/price/2d15bde676e069aecbedccefb1a63319.jpeg",
			],
			name: "Манеж торговый (стол) для распродаж,с регулируемым дном 1200х600мм (промо)",
			description:
				"Напольный накопитель для распродаж является стационарным. Дно можно переставлять на разную высоту. Предназначен для выкладки товара в проходах торговых точек.",
			advantages: [
				"глубина рабочей части - 400 мм",
				"шаг регулировки дна - 100 мм",
				"дно разделено на две половины, что позволяет выкладывать товар на разной высоте",
			],
			box_details: {
				box_len: "800 мм",
				box_depth: "800 мм",
				box_height: "800 мм",
				material: "",
			},
		},
		{
			id: 98,
			category_id: 7,
			purpose_id: 5,
			brand: "Unknown",
			preview_image: [
				"https://www.unitrade-orel.ru/image/price/ec5a1e7a0f9bfc54edba0746f4c67cd1.jpeg",
			],
			name: "Манеж торговый (стол) для распродаж глубокий, с регулируемым дном 1200х800 (промо)",
			description:
				"Напольный накопитель для распродаж является стационарным. Дно можно переставлять на разную высоту. Предназначен для выкладки товара в проходах торговых точек.",
			advantages: [
				"глубина рабочей части - 600 мм",
				"шаг регулировки дна - 100 мм",
				"дно разделено на две половины, что позволяет выкладывать товар на разной высоте",
			],
			box_details: {
				box_len: "1200 мм",
				box_depth: "800 мм",
				box_height: "800 мм",
				material: "",
			},
		},
		{
			id: 99,
			category_id: 7,
			purpose_id: 5,
			brand: "Unknown",
			preview_image: [
				"https://www.unitrade-orel.ru/w/image/price/5b8e3bd3554bde2a30a472789a3d54e5.jpeg",
			],
			name: "Перегородки к манежу поперечная (промо)",
			description:
				"Перегородка к манежу поперечная служит для разграничения зон выкладки товара. Подходит к разным манежам из каталога.",

			box_details: {
				box_len: "1200 мм",
				box_depth: "800 мм",
				box_height: "800 мм",
				material: "",
			},
		},
		{
			id: 100,
			category_id: 7,
			purpose_id: 5,
			brand: "Unknown",
			preview_image: [
				"https://www.unitrade-orel.ru/image/price/4ed286801631d28191130a76134d282d.jpeg",
			],
			name: "Корзина к манежу продольная L - 1200 мм (промо)",
			description:
				"Корзина навесная (надстройка)  продольная, идет как дополнительное оборудование к манежу, предназначена   для выкладки товара сопутствующего основному. Экономит место в зале.",

			box_details: {
				box_len: "1155 мм",
				box_depth: "440 мм",
				box_height: "120 мм",
				material: "",
			},
		},
		{
			id: 101,
			category_id: 7,
			purpose_id: 5,
			brand: "Unknown",
			preview_image: [
				"https://www.unitrade-orel.ru/image/price/0c61ac50085dbcb4b37278e8a3bf0d84.jpeg",
			],
			name: "Корзина к манежу поперечная L - 800 мм (промо)",
			description:
				"Поперечная надстройка для манежа предназначена для  двусторонней выкладки товара дополнительного назначения.",

			box_details: {
				box_len: "750 мм",
				box_depth: "440 мм",
				box_height: "120 мм",
				material: "",
			},
		},
		{
			id: 102,
			category_id: 7,
			purpose_id: 5,
			brand: "Unknown",
			preview_image: [
				"https://www.unitrade-orel.ru/image/price/bb2146c8ff5acdc42177dda9b4bd8665.png",
			],
			name: "Сетчатая полка на основание манежа 1200х800мм (промо)",
			description:
				"Накладное дно манежа для распродаж - служит дополнительной нижней  полкой , что позволяет увеличить полезную площадь при выкладке товара. Данная сетчатая  полка в 2 раза увеличивает объем продаваемой продукции в магазинах и супермаркетах розничной торговли, которые не обладают большими площадями и борются за каждый сантиметр полезной площади.",

			box_details: {
				box_len: "1120 мм",
				box_depth: "806 мм",
				box_height: "39 мм",
				material: "",
			},
		},
		{
			id: 103,
			category_id: 7,
			purpose_id: 5,
			brand: "Unknown",
			preview_image: [
				"https://www.unitrade-orel.ru/w/image/price/82b7e37d58ac6e46eab7abcab1279199.png",
			],
			name: "Надстройка для глубокого манежа поперечная L 800 (промо)",
			description:
				"Дополнительное  торговое  оборудование  для манежа. Надстройка стола для распродаж представляет собой накопительную корзину для сопутствующего товара. Навеска для манежа имеет ценникодержатель. Данную сетчатую корзину вы можете заказать оптом от 100 шт.",
			box_details: {
				box_len: "800 мм",
				box_depth: "660 мм",
				box_height: "465 мм",
				material: "",
			},
		},
		{
			id: 104,
			category_id: 7,
			purpose_id: 5,
			brand: "Unknown",
			preview_image: [
				"https://www.unitrade-orel.ru/w/image/price/82b7e37d58ac6e46eab7abcab1279199.png",
			],
			name: "Корзина для распродаж разборная с регулируемым дном (промо)",
			description:
				"Разборная корзина с регулируемым дном для распродаж подойдет для раскладки товаров, продуктов, как в магазине, так и на складских площадях. \nВ среднем на поддон помещается  50 разборных корзин.",
			box_details: {
				box_len: "420 / 620 / 525 / 620 / 1020 / 1220 мм",
				box_depth: "420 / 420 / 525 / 620 / 620 / 820 мм",
				box_height: "800 / 800 / 745 / 800 / 800 / 800 мм",
				material: "",
			},
		},
		{
			id: 105,
			category_id: 7,
			purpose_id: 5,
			brand: "Unknown",
			preview_image: [
				"https://www.unitrade-orel.ru/userfiles/korzina_razbornaya_s_reg_dnom_razdelitelem_i_navesnoy_korzinoy_tsink.png",
				"https://www.unitrade-orel.ru/userfiles/620%20420%208001.png",
			],
			name: "Корзина для распродаж разборная с регулируемым дном (промо)",
			description:
				"Разборная корзина с регулируемым дном для распродаж подойдет для раскладки товаров, продуктов, как в магазине, так и на складских площадях. \nВ среднем на поддон помещается  50 разборных корзин.",
			box_details: {
				box_len: "420 / 620 / 525 / 620 / 1020 / 1220 мм",
				box_depth: "420 / 420 / 525 / 620 / 620 / 820 мм",
				box_height: "800 / 800 / 745 / 800 / 800 / 800 мм",
				material: "",
			},
		},

		// Unitrade
		{
			id: 106,
			category_id: 8,
			purpose_id: 4,
			brand: "Unknown",
			preview_image: [
				"https://www.unitrade-orel.ru/image/price/83d51401b172bc56e48d43638ea918f3.jpeg",
			],
			name: "Корзина разборная с регулируемым дном БЕЗ ц/держателя 1200х800х800 (промо)",
			description: "",
			box_details: {
				box_len: "1280 мм",
				box_depth: "800 мм",
				box_height: "800 мм",
				material: "",
			},
		},
		{
			id: 107,
			category_id: 5,
			purpose_id: 4,
			brand: "Unknown",
			preview_image: [
				"https://www.unitrade-orel.ru/w/image/price/1ceb4b862dd660e7390ba856578fada0.jpeg",
				"https://www.unitrade-orel.ru/w/image/price/de3f8f629a68db5b401b6f06628ad2e9.jpeg",
				"https://www.unitrade-orel.ru/w/image/price/4f8bde9dead352fc902e2445f7a597cd.jpeg",
			],
			name: 'Сетчатый стеллаж "конструктор" (промо)',
			description:
				"Стеллаж-конструктор с шагом ячейки (50х50мм и 100х150мм) - может быть собран как готовое решение, так и комплектоваться из разных деталей стеллажей этого типа, к примеру, используя заднюю стенку одного размера, а боковины могут быть из другого комплекта.",
			box_details: {
				box_len: "600 / 600 / 580 мм",
				box_height: "900 / 1200 / 1500 мм",
				material: "",
			},
		},
		{
			id: 108,
			category_id: 5,
			purpose_id: 4,
			brand: "Unknown",
			preview_image: [
				"https://www.unitrade-orel.ru/w/image/price/7aff7c2c9247d51da321c63846c4f43b.jpeg",
				"https://www.unitrade-orel.ru/w/image/price/48aa88d530f93f80362aef919fbb3225.jpeg",
				"https://www.unitrade-orel.ru/w/image/price/ed5099c13e73c2262ef87ca6431a4a43.jpeg",
			],
			name: "Надстройка к корзинам разборным L-620, 602х370х150мм",
			description:
				"Стеллаж-конструктор с шагом ячейки (50х50мм и 100х150мм) - может быть собран как готовое решение, так и комплектоваться из разных деталей стеллажей этого типа, к примеру, используя заднюю стенку одного размера, а боковины могут быть из другого комплекта.",
			box_details: {
				box_len: "602 мм",
				box_depth: "370 мм",
				box_height: "150 мм",
				material: "",
			},
		},
		{
			id: 109,
			category_id: 6,
			purpose_id: 4,
			brand: "Unknown",
			preview_image: [
				"https://www.unitrade-orel.ru/w/image/price/13eb98cf58f10ac59cd1c093b956741b.jpeg",
				"https://www.unitrade-orel.ru/w/image/price/cdd782023c57c4888cd7804adea8f681.jpeg",
				"https://www.unitrade-orel.ru/w/image/price/b517d4dab748d3ef9ac44131d0ba4c77.jpeg",
			],
			name: 'Модульная сетчатая система "Куб"',
			description:
				"Основа изделий - сетчатые квадратные рамки, которые можно собрать, как конструктор, в изделие с помощью пластиковых крепежей. \nРазмер ячеек сетки и рамы можно менять по запросу. Стандартный 400х400*10 мм.",
			box_details: {
				box_len: "440 мм",
				box_depth: "440 мм",
				box_height: "10 мм",
				material: "",
			},
		},
		{
			id: 110,
			category_id: 6,
			purpose_id: 4,
			brand: "Unknown",
			preview_image: [
				"https://www.unitrade-orel.ru/w/image/price/58c432994c48f8dca7ee7a6d69dba014.jpeg",
				"https://www.unitrade-orel.ru/w/image/price/32b77dff78abae511804767f677ac6f4.jpeg",
				"https://www.unitrade-orel.ru/w/image/price/651c366f3b7ac7e8e103ec7731a24f1d.jpeg",
			],
			name: "Корзина для торгового зала металлическая",
			description:
				"Металлические покупательские корзины для торгового зала становятся неотъемлемой частью современного ритейла, обеспечивая удобство и функциональность для покупателей. Эти корзины, выполненные из металла, идеально подходят для использования в магазинах, супермаркетах и других торговых точках. \nОдним из популярных вариантов является железная корзина с одной ручкой, которая позволяет легко переносить покупки. Металлическая покупательская корзина отличается высокой прочностью и долговечностью, что делает её идеальным выбором для интенсивного использования. В дополнение к этому, сетчатая металлическая корзина с двумя ручками обеспечивает дополнительный комфорт при транспортировке товаров.",
			box_details: {
				material: "",
			},
		},
		{
			id: 111,
			category_id: 9,
			purpose_id: 0,
			brand: "Unknown",
			preview_image: [
				"https://www.unitrade-orel.ru/w/image/price/6af2de15a1c60a4a9a1dc73284c5f3df.jpeg",
				"https://www.unitrade-orel.ru/w/image/price/1c925c87a43801477a0dc3efab8c24ec.jpeg",
				"https://www.unitrade-orel.ru/w/image/price/fccae1a852da887fb392b16faad6b758.jpeg",
			],
			name: "Ролл - контейнер вкатываемый сетчатый передвижной (ROLLBOX)",
			description:
				"Контейнер на колёсах предназначен для хранения и транспортировки грузов как в нутри торгового предприятия или склада, так и для перевозки товаров транспортными компаниями. Контейнер данного типа используется в качестве многоразовой оборотной тары и благодаря своему конструктиву удобен для транспортировки в не загруженом виде без необходимости полной разборки, что позволяет существенно сэкономить время и рабочую площадь компании перевозчика.",
			box_details: {
				material: "",
			},
		},
		{
			id: 112,
			category_id: 9,
			purpose_id: 0,
			brand: "Unknown",
			preview_image: [
				"https://www.unitrade-orel.ru/w/image/price/ddb10f38eeec43005b04abc1a6b8d108.jpeg",
				"https://www.unitrade-orel.ru/w/image/price/ca5cb03430cdeb83b747a87c2a081b19.jpeg",
				"https://www.unitrade-orel.ru/w/image/price/7f325556717e65dd78de64efde3880bf.jpeg",
			],
			name: "Контейнер сетчатый на колёсах с регулируемыми полками",
			description:
				"Металлический сетчатый контейнер предназначен для перевозки грузов на складе. Разборный, что упрощает его транспортировку.",
			complects: [
				"2  регулируемыми по высоте полками (можно оставить только одну)",
				"откидной дверцей (снимается при необходимости)",
				"4 колёсами F-75мм, 2 из которых имеют фиксирующий тормоз, что позволяет легко перемещать контейнер по торговому залу и устанавливать его в заданом положении без риска самопроизвольного отката",
			],
			box_details: {
				box_len: "700 мм",
				box_height: "800 мм",
				material: "",
			},
		},
		{
			id: 113,
			category_id: 9,
			purpose_id: 0,
			brand: "Unknown",
			preview_image: [
				"https://www.unitrade-orel.ru/w/image/price/5d93dfbb22915a4451142f5023e8caac.jpeg",
				"https://www.unitrade-orel.ru/w/image/price/2018fdf769fe870281b1f35171b5bd96.jpeg",
			],
			name: "Контейнер сетчатый на колёсах без двери",
			description:
				"Металлический сетчатый контейнер предназначен для перевозки грузов на складе. Разборный, что упрощает его транспортировку.",
			complects: [
				"1  полкой, которую можно регулировать по высоте (при желании можно докомплектовать полками)",
				"4 колёсами F-75мм, 2 из которых имеют фиксирующий тормоз, что позволяет легко перемещать контейнер по торговому залу и устанавливать его в заданом положении без риска самопроизвольного отката. ",
			],
			box_details: {
				box_len: "700 мм",
				box_height: "800 мм",
				material: "",
			},
		},
		{
			id: 114,
			category_id: 9,
			purpose_id: 0,
			brand: "Unknown",
			preview_image: [
				"https://www.unitrade-orel.ru/w/image/price/d1004e8953aa9bbc3cd895cf32608067.jpeg",
				"https://www.unitrade-orel.ru/w/image/price/0176035a3d5b7a587990fda1290a3681.jpeg",
				"https://www.unitrade-orel.ru/w/image/price/18b8ebbe02e120c4fd9aa43ece6350f4.jpeg",
			],
			name: "Тележка для консолидации с держателем ТСД",
			description:
				"Тележка для консолидации с держателем ТСД — это удобное и практичное решение для организации рабочего процесса на складе или в магазине. Эта тележка идеально подходит для хранения и транспортировки товаров различных размеров и веса. Благодаря сетчатым полкам товары хорошо просматриваются, что облегчает процесс инвентаризации и поиска нужных предметов. Прочные колёса обеспечивают надёжность и устойчивость тележки при движении, а удобная ручка делает транспортировку товаров максимально комфортной. На одной из сторон тележки закреплен держатель терменала считывания данных (ТСД).",
			complects: [
				"1  полкой, которую можно регулировать по высоте (при желании можно докомплектовать полками)",
				"4 колёсами F-75мм, 2 из которых имеют фиксирующий тормоз, что позволяет легко перемещать контейнер по торговому залу и устанавливать его в заданом положении без риска самопроизвольного отката. ",
			],
			advantages: [
				"количество полок — 4",
				"материал полок — сетка",
				"грузоподъёмность полки — 105 кг",
				"грузоподъёмность тележки — 360 кг",
				"размер полок — 1660 х 550 х 26 мм",
				"колёса — платформенные, 5 шт., диаметр 125 мм",
			],
			box_details: {
				box_len: "170 см",
				box_height: "140 см",
				material: "",
			},
		},
		{
			id: 115,
			category_id: 9,
			purpose_id: 0,
			brand: "Unknown",
			preview_image: [
				"https://www.unitrade-orel.ru/w/image/price/507cb7046d28586b6e4d56e9d370ee15.jpeg",
				"https://www.unitrade-orel.ru/w/image/price/791c4b57d18e9ea6a16ae0fed1665de5.jpeg",
			],
			name: "Платформенная тележка с зацепом",
			description: "",
			box_details: {
				box_len: "1286 мм",
				box_depth: "807 мм",
				box_height: "885 мм",
				material: "",
			},
		},
		{
			id: 116,
			category_id: 9,
			purpose_id: 0,
			brand: "Unknown",
			preview_image: [
				"https://www.unitrade-orel.ru/w/image/price/ac5a0afb833bd0eea756076afea708e3.jpeg",
			],
			name: "Платформенная тележка с сетчатыми бортами",
			description: "",
			box_details: {
				box_len: "1286 мм",
				box_depth: "807 мм",
				box_height: "885 мм",
				material: "",
			},
		},
		{
			id: 117,
			category_id: 9,
			purpose_id: 0,
			brand: "Unknown",
			preview_image: [
				"https://www.unitrade-orel.ru/w/image/price/6fc2230527b222868cab63f40f950820.jpeg",
				"https://www.unitrade-orel.ru/w/image/price/c58db1cadbf6d0ae16199de8c9647ccd.jpeg",
			],
			name: "Ролл - контейнер сетчатый передвижной (ROLLBOX)",
			description:
				"Сетчатые контейнеры на крлёсах используются для транспортировки и хранения различных грузов. Отличное решение для складских помещений, торговых залов и производственных участков. (в стандартном комплекте - основание, 2 боковины, 1 полка. Возможна компл-ция дополнительными полками)",
			box_details: {
				material: "",
			},
		},
		{
			id: 118,
			category_id: 9,
			purpose_id: 0,
			brand: "Unknown",
			preview_image: [
				"https://www.unitrade-orel.ru/image/price/9585c92897a46e4daa566a2dc0f6b115.gif",
			],
			name: "Ролл-контейнер сетчатый быстроразборный",
			description: "",
			box_details: {
				box_len: "600 мм",
				box_depth: "800 мм",
				box_height: "1800 мм",
				material: "",
			},
		},
		{
			id: 119,
			category_id: 9,
			purpose_id: 0,
			brand: "Unknown",
			preview_image: [
				"https://www.unitrade-orel.ru/w/image/price/ba6a3c97365ac673b5169bcfa73bbfa1.jpeg",
				"https://www.unitrade-orel.ru/w/image/price/c69658e5187aae8635dc0be842edc176.jpeg",
				"https://www.unitrade-orel.ru/w/image/price/a90f03e6278c84d87b5121bab4232500.jpeg",
				"https://www.unitrade-orel.ru/w/image/price/97b8b58ca1aef91c6ee02aa04947294c.jpeg",
			],
			name: 'Корзина для стеллажей "MEGA" G 370 - 470',
			description:
				'Корзина "Mega" состоит из металлической проволоки и полос. Подходит для комплектации торгового оборудования. \nТак как сетчатые корзины не имеют зафиксированных боковых стенок их можно установить вплотную, что позволит сделать 1 длинный стеллаж с продукцией. Данный тип корзин используют для выкладки товаров в магазинах продуктов и одежы. За счет жесткого пластинчатого каркаса  (состоит из полос, на которые крепятся корзины) выдерживает больший вес. \nВ комплекте к корзине есть возможность преобрести стенки и перегородки (изначально в комплекте не идут). \nПерегородки можно вставить в любом количестве (на любом расстоянии друг от друга между прутками проволоки).',
			box_details: {
				box_len: "1000 / 1250 мм",
				box_depth: "466 мм",
				box_height: "223 мм",
				material: "",
			},
		},
		{
			id: 120,
			category_id: 9,
			purpose_id: 0,
			brand: "Unknown",
			preview_image: [
				"https://www.unitrade-orel.ru/w/image/price/ca50a4227358b3c3eda827ca95ec8c66.jpeg",
			],
			name: "Корзина стеллажная на кронштейнах H",
			description:
				"Корзина для стеллажей данного типа имеет кронштейны на задней стенке для установки ее в торговых стеллажах с перфорацией.",
			box_details: {
				box_len: "665 / 1000 / 1250 мм",
				box_depth: "370 / 470 мм",
				box_height: "160 / 320 мм",
				material: "",
			},
		},
		{
			id: 121,
			category_id: 9,
			purpose_id: 0,
			brand: "Unknown",
			preview_image: [
				"https://www.unitrade-orel.ru/w/image/price/aa19d978e99acd19baa92f19813100a5.jpeg",
				"https://www.unitrade-orel.ru/w/image/price/56ef57e476e1eb698207975b4760ba0e.jpeg",
				"https://www.unitrade-orel.ru/w/image/price/741cac910788adc7aaf46cee72a519d4.jpeg",
			],
			name: "Корзины стеллажные штабелируемые в ассортименте",
			description:
				"Металлическая корзина ставится на полку стеллажа. Верхние крючки дают возможность ставить корзины друг на друга. Корзины могут быть использованы в хозяйственных нуждах для хранения картошки и других овощей в погребах и на балконе. Штабелируема конструкиця позволяет выбрать варианты высоты и соорудить подобие стеллажа.",
			box_details: {
				box_len: "490 / 640 / 980 / 1200 мм",
				box_depth: "400 / 500 / 600 / 700 / 800 / 900 мм",
				box_height: "200 / 250 / 300 мм",
				material: "",
			},
		},
		{
			id: 122,
			category_id: 9,
			purpose_id: 0,
			brand: "Unknown",
			preview_image: [
				"https://www.unitrade-orel.ru/w/image/price/269cd4d29819c4e212cdd75e312131be.jpeg",
				"https://www.unitrade-orel.ru/w/image/price/51e09ef53d6c94a90f9498666ba9ae71.jpeg",
				"https://www.unitrade-orel.ru/w/image/price/0446178de0ea9a96de5df16743ca6a44.jpeg",
			],
			name: "Корзина навесная на перфорацию и эконом панель",
			description:
				"Сетчатая корзина на перфорацию сделана из металлической проволоки. Подойдет для комплектации магазинов одежды, нижнего белья, товаров для дома.",
			box_details: {
				box_len: "460 мм",
				box_depth: "130 мм",
				box_height: "345 мм",
				material: "",
			},
		},
		{
			id: 123,
			category_id: 9,
			purpose_id: 0,
			brand: "Unknown",
			preview_image: [
				"https://www.unitrade-orel.ru/w/image/price/2921b53705fdc7595b4c9f6058bfe9ef.jpeg",
			],
			name: "Корзина стеллажная, устанавливается на кронштейн",
			description:
				"Металлические сетчатые карзины устанавливаются на штабелируемые крепления с перфорацией. Крепятся за счет ушек внизу корзины. Корзины для торгового оборудования могут быть реализованы в разных цветах из каталога RAL от 500 шт.",
			box_details: {
				box_len: "665 / 1000 / 1250 / 1330 мм",
				box_depth: "370 / 470 мм",
				box_height: "160 / 320 мм",
				material: "",
			},
		},
		{
			id: 124,
			category_id: 9,
			purpose_id: 0,
			brand: "Unknown",
			preview_image: [
				"https://www.unitrade-orel.ru/w/image/price/89be33e1f43a1d7c685028185a284329.jpeg",
				"https://www.unitrade-orel.ru/w/image/price/7bc232367dc4319a3507f3ad5cc4bdbc.jpeg",
				"https://www.unitrade-orel.ru/w/image/price/92ae4a23c77a74cca39a65a76dc58361.jpeg",
				"https://www.unitrade-orel.ru/w/image/price/791a655628e751edb754505b90fa265c.jpeg",
			],
			name: "Стеллаж прикассовый СДЖ разборный, перфорированный",
			description:
				"Прикассовый стенд представляет собой- прилавок  или так называемую торговую витрину с сетчатыми навесными корзинами  и крючками.  Комплектация прикассовой стойки может быть различна, подробности уточняйте у менеджеров.",
			box_details: {
				box_len: "665 мм",
				box_depth: "400 мм",
				box_height: "1655 мм",
				material: "",
			},
		},
		{
			id: 125,
			category_id: 10,
			purpose_id: 0,
			brand: "Unknown",
			preview_image: [
				"https://www.unitrade-orel.ru/w/image/price/5dd1050cde901b32593c8144e5c18884.jpeg",
				"https://www.unitrade-orel.ru/w/image/price/58523510d1e5bedbbf4677b5b3898d3d.jpeg",
				"https://www.unitrade-orel.ru/w/image/price/c468b975f138d55097502690d72409a8.jpeg",
				"https://www.unitrade-orel.ru/w/image/price/d3b4792cd902f4165e0a54a8e2350ff4.jpeg",
				"https://www.unitrade-orel.ru/w/image/price/6d0982860c384007c963715ed1db97a1.jpeg",
				"https://www.unitrade-orel.ru/w/image/price/4521f7244f51e6b4f323dcfee2e5489f.jpeg",
				"https://www.unitrade-orel.ru/w/image/price/d7ebfcee2a19302f9bcb1a206987b4a3.jpeg",
			],
			name: "Прикассовая стойка",
			description:
				"Основным преимуществом торговых стоек прикассового типа является их удобство для покупателей. Они позволяют быстро и легко выбрать нужныий товар. Кроме того, такие стеллажи позволяют увеличить объем продаж, так как  привлекают внимание покупателей и увеличивают  спрос. \n Хотим представить вашему вниманию прикассовую стойку конструктор с навесными корзинами для выкладки товара. Данное торговое оборудование можно разместить  в прикассовой зоне или произвольно в торговом зале.  Стеллаж может  состоять из одной ,двух и более секций. Корзины могут располагаться с обеих сторон. \nДанная стойка  может быть использована в качестве суперструктуры  и устанавливается между морозильными ларями с одной или двух сторон в зависимости от проходимости и расположения касс. Данные секции доукомплектовываются , как правило,  3-мя верхними корзинами и крючками. По желанию заказчика  комплектация прикассовой стойки может быть изменена. \nКорзины имеют удобные кронштейны, которые позволяют регулировать угол наклона  в  60°,75°, 90° градусов.",
			complects: [
				"два  блока  двойных крючков крючков длинной 200мм (5 крючков в блоке)",
				'Корзина  "малая" 10шт. (ШхГхВ  586,5х289,5х65 мм) угол наколона  регулируется от 60-90 градусов',
				'Корзина "большая" 6 шт. (ШхГхВ 586,5х328,5х65 мм) угол наклона регулируется от 75-90 градусов',
			],
			box_details: {
				box_len: "1216 мм",
				box_depth: "400 мм",
				box_height: "1679 мм",
				material: "",
			},
		},
		{
			id: 126,
			category_id: 10,
			purpose_id: 0,
			brand: "Unknown",
			preview_image: [
				"https://www.unitrade-orel.ru/w/image/price/0a0aa6bbbefe8c2e8c267b5e48c369cb.jpeg",
				"https://www.unitrade-orel.ru/w/image/price/fe01e3d3f3fa90dfa08dbfc08908fbed.jpeg",
				"https://www.unitrade-orel.ru/w/image/price/2cb3327f6630c50a4ed5363bfabbec34.jpeg",
			],
			name: "Стойка прикассовая торцевая с радиусными полками",
			description:
				'Предназначена для выкладки товара в прикассовой зоне, оборудована торцевыми радиусными полками с разделителями, а так же 6  прямыми полками. Возможна доукомплектация  (3мя полками) в виде "Острова" в  местах с большой  проходимостью  в центре торгового зала.',
			complects: [
				"два  блока  двойных крючков крючков длинной 200мм (5 крючков в блоке)",
				'Корзина  "малая" 10шт. (ШхГхВ  586,5х289,5х65 мм) угол наколона  регулируется от 60-90 градусов',
				'Корзина "большая" 6 шт. (ШхГхВ 586,5х328,5х65 мм) угол наклона регулируется от 75-90 градусов',
			],
			box_details: {
				box_len: "1105 мм",
				box_depth: "1000 мм",
				box_height: "1600 мм",
				material: "",
			},
		},
		{
			id: 140,
			category_id: 10,
			purpose_id: 0,
			brand: "Unknown",
			preview_image: [
				"https://www.unitrade-orel.ru/w/image/price/803d1150c0fcbc70aaf69423ffa0cb30.jpeg",
			],
			name: "Стойка конусная пятиярусная радиальная",
			description:
				"Металлическая круглая пятиярусная  стойка - предназначена для островной выкладки товара в центре торгового зала , а за счет удобного регулирования полок по высоте и  возможности поворота  вокруг своей оси,  она  прекрасно  впишется  в любой угол магазина. Сетчатые вращающиеся полки имеют различные диаметры в зависимости от высоты, при этом стеллаж -стойка  имеет конусную форму, что очень удобно располагать на ней как крупные вещи так и мелочевку. Напольная стойка имеет  колесные опоры, что обеспечивает ее мобильность в торговом зале. Стенд-стойка пристенная, островная радиальная имеет пирамидальную форму и часто используется  для распродаж.",
			box_details: {
				box_len: "1650 мм",
				box_height: "710 мм",
				material: "",
			},
		},
		{
			id: 127,
			category_id: 10,
			purpose_id: 0,
			brand: "Unknown",
			preview_image: [
				"https://www.unitrade-orel.ru/w/image/price/04200e32d0a97c7bb1b4483d230f0f3d.jpeg",
				"https://www.unitrade-orel.ru/w/image/price/66c2ac0d0da93ef8025aa4a682c60b8c.jpeg",
				"https://www.unitrade-orel.ru/w/image/price/f06c85d00c17f2cfb88d873389362534.jpeg",
				"https://www.unitrade-orel.ru/w/image/price/e7c83a7313ea594ccb06270a75481956.jpeg",
			],
			name: "Стойка торговая с регулируемым дном и 3-мя корзинами",
			description:
				"Разборная конструкция, лёгкость сборки и транспортировки,многоярусность и как следствие- повышенная вместимость при относительно малой занимаемой площади торгового зала. В конструкции предусмотрены: стальной топер (фриз), возможна комплектация пластиковым полочным ценникодержателем красного цвета -4 штуки на стенд. Применим практически во всех сферах розничной торговли: продукты питания, бытовая химия, строительные и отделочные материалы, электробытовые товары и многое другое.",
			complects: [
				"каркас разборный 1800 мм",
				'"большая" корзина 600*400*800 мм с регулируемым дном',
				'3 "малые"  навесные корзины 570*240*70*150 мм',
				"топер ( фриз ) из стального листа 600*200 мм",
			],
			box_details: {
				box_len: "600 мм",
				box_depth: "400 мм",
				box_height: "1800 мм",
				material: "",
			},
		},
		{
			id: 128,
			category_id: 9,
			purpose_id: 0,
			brand: "Unknown",
			preview_image: [
				"https://www.unitrade-orel.ru/w/image/price/116911000507695b015aefb50570d571.jpeg",
				"https://www.unitrade-orel.ru/w/image/price/48bc49574d8362718bc4ed7d190ea8a4.jpeg",
				"https://www.unitrade-orel.ru/w/image/price/290327e89bc15ee4b3d5e3a5b1647a55.jpeg",
				"https://www.unitrade-orel.ru/w/image/price/ebc197703546dbfdf96fd20106d7ed60.jpeg",
				"https://www.unitrade-orel.ru/w/image/price/61d3af6ffa72911b37a07880a9d4644c.jpeg",
			],
			name: "Надстройка над бонетой (суперструктура)",
			description:
				"Надстройка над холодильным ларем может быть выполнена в разных размерах.",
			box_details: {
				box_len: "1230 мм",
				box_depth: "590 мм",
				box_height: "1350 мм",
				material: "",
			},
		},
		{
			id: 129,
			category_id: 10,
			purpose_id: 0,
			brand: "Unknown",
			preview_image: [
				"https://www.unitrade-orel.ru/w/image/price/7514749c167b9389a0da0d5b971b0783.jpeg",
				"https://www.unitrade-orel.ru/w/image/price/d212eba386fbefe17159ebd744c00801.jpeg",
			],
			name: "Стойка под воду для 4 бутылей 19 литров",
			description:
				"Удобная и компактная металлическая подставка для воды предназначена для  хранения 4-х бутылей емкостью бака 19 литров  на минимальной площади для быстрой заправки кулера",
			advantages: [
				"Легкая цельносварная конструкция  пруток толщиной D=8мм",
				"Максимальная нагрузка на стойку до 100 кг",
			],
			box_details: {
				box_len: "418 мм",
				box_depth: "302 мм",
				box_height: "1170 мм",
				material: "",
			},
		},
		{
			id: 130,
			category_id: 5,
			purpose_id: 0,
			brand: "Unknown",
			preview_image: [
				"https://www.unitrade-orel.ru/w/image/price/4457203a3ae04a02f27aecdb9024b8fe.jpeg",
				"https://www.unitrade-orel.ru/w/image/price/d2756b088503ec6efe4307029baee4ce.jpeg",
				"https://www.unitrade-orel.ru/w/image/price/f960b17612b099fc2625ee91aa743098.jpeg",
			],
			name: "Овощной стеллаж М-1",
			description:
				"Овощной металлический стеллаж-развал предназначен для выкладки овощей и фруктов в торговом зале.",
			box_details: {
				box_len: "1220 мм",
				box_depth: "700 мм",
				box_height: "1550 мм",
				material: "",
			},
		},
		{
			id: 131,
			category_id: 5,
			purpose_id: 0,
			brand: "Unknown",
			preview_image: [
				"https://www.unitrade-orel.ru/w/image/price/88fc77207dcdb7c8949fc924a02660f7.jpeg",
				"",
			],
			name: "Овощной стеллаж М-2",
			description:
				"Овощной металлический стеллаж-развал предназначен для выкладки овощей и фруктов в торговом зале.",
			box_details: {
				box_len: "1600 мм",
				box_depth: "700 мм",
				box_height: "1550 мм",
				material: "",
			},
		},
		{
			id: 132,
			category_id: 5,
			purpose_id: 0,
			brand: "Unknown",
			preview_image: [
				"https://www.unitrade-orel.ru/w/image/price/86df55a5ea2a17f45c818c65aec790c7.jpeg",
			],
			name: 'Стеллаж "РАЗВАЛ"',
			description:
				"Производство торгового оборудование под заказ от 5 шт. Овощьные стеллажи, прикассовые стойки манежи для распродаж.",
			box_details: {
				box_len: "1600 мм",
				box_depth: "700 мм",
				box_height: "1550 мм",
				material: "",
			},
		},
		{
			id: 133,
			category_id: 5,
			purpose_id: 0,
			brand: "Unknown",
			preview_image: [
				"https://www.unitrade-orel.ru/w/image/price/3691dce04adcfe2a457398e404e8e443.jpeg",
			],
			name: "Овощной стеллаж ГМ 3",
			description:
				"Предназначен для выкладки продуктов с удобным расположением лотков",
			box_details: {
				box_len: "1300 мм",
				box_depth: "1200 мм",
				box_height: "1400 мм",
				material: "",
			},
		},
		{
			id: 134,
			category_id: 10,
			purpose_id: 0,
			brand: "Unknown",
			preview_image: [
				"https://www.unitrade-orel.ru/w/image/price/03bd566dde613947d0a5e87b964b5c9a.jpeg",
			],
			name: 'Стойка  напольная для газет и журналов "HALO"',
			description:
				'Стойка  напольная металлическая для газет и журналов  "HALO"  пп-005 (HAL01) можно использовать, как презентационную стойку для газет и журналов и других POS материалов.',
			box_details: {
				box_len: "300 мм",
				box_depth: "400 мм",
				box_height: "1040 мм",
				material: "",
			},
		},
		{
			id: 135,
			category_id: 10,
			purpose_id: 0,
			brand: "Unknown",
			preview_image: [
				"https://www.unitrade-orel.ru/w/image/price/b299e02fad27330d87e345087c8e82b6.jpeg",
				"https://www.unitrade-orel.ru/w/image/price/c054381330820cd36beae7445e157072.jpeg",
			],
			name: 'Стойка "ROKITA" формат А4+',
			description:
				"Расширенный диапазон форматов полиграфической продукции обеспечивается открытой конструкцией сетчатых карманов. Успешно подойдёт для печатной продукции нестандартного размера, в таком формате выходят многие современные журналы, рекламные проспекты. Компактна, широко применима от магазинов и выставок до гостиниц и салонов красоты. Подойдёт книжным магазинам для экспозиции книжных новинок и распродаж.",
			box_details: {
				box_len: "300 мм",
				box_depth: "400 мм",
				box_height: "1040 мм",
				material: "",
			},
		},
		{
			id: 136,
			category_id: 10,
			purpose_id: 0,
			brand: "Unknown",
			preview_image: [
				"https://www.unitrade-orel.ru/w/image/price/06412360789ef24119b93c8d870aa116.jpeg",
				"https://www.unitrade-orel.ru/w/image/price/b3103f1bf72b8cbfad1105067c6f6d87.jpeg",
			],
			name: 'Стойка для печатной продукции "ПИХТА"',
			description:
				'Стойка металлическая  для печатной продукции "ПИХТА" применяется, как презентационная стойка для газет и журналов  конвертов и других POS материалов.',
			box_details: {
				box_len: "250 мм",
				box_depth: "250 мм",
				box_height: "1900 мм",
				material: "",
			},
		},
		{
			id: 137,
			category_id: 11,
			purpose_id: 0,
			brand: "Unknown",
			preview_image: [
				"https://www.unitrade-orel.ru/w/image/price/17f70336de4995c6a50859c8fa030be0.jpeg",
			],
			name: "Подставка для обуви наклонная 10 см",
			description: "",
			box_details: {
				material: "",
			},
		},
		{
			id: 138,
			category_id: 11,
			purpose_id: 0,
			brand: "Unknown",
			preview_image: [
				"https://www.unitrade-orel.ru/w/image/price/efa0ef41fb754b94337687cdc4ba0c95.jpeg",
				"https://www.unitrade-orel.ru/w/image/price/a866d9fa979f44dbb983772a89781629.jpeg",
			],
			name: "Подставка для детской обуви подошвой вверх",
			description: "",
			box_details: {
				material: "",
			},
		},
		{
			id: 139,
			category_id: 11,
			purpose_id: 0,
			brand: "Unknown",
			preview_image: [
				"https://www.unitrade-orel.ru/w/image/price/8c12939f08d00d1a48ce272b8756ffb3.jpeg",
				"https://www.unitrade-orel.ru/w/image/price/e8e5cbdd6bf297b3c58b7baf1adb207c.jpeg",
			],
			name: "Подставка для обуви подошвой вверх",
			description: "",
			box_details: {
				material: "",
			},
		},
	],
};
