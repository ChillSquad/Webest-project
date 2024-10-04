export default defineEventHandler((event) => {
  return [
    {
      title: "Интернет-магазин + CRM",
      subtitle: "",
      price: "109 000 ₽",
      sale: "Лицензия",
      configurations: [
        { parameter: "12 пользователей" },
        { parameter: "Экстранет" },
        { parameter: "eCommerce-платформ" },
      ],
    },
    {
      title: "Корпоративный портал",
      subtitle: "",
      price: "159 000 ₽ - 599 000 ₽",
      sale: "Лицензия",
      configurations: [
        { parameter: "от 50 до 500 пользователей" },
        { parameter: "Экстранет" },
        { parameter: "eCommerce-платформ" },
        { parameter: "Документы онлайн" },
      ],
    },
    {
      title: "Энтерпрайз",
      subtitle: "",
      price: "1 299 000+ ₽",
      sale: "Лицензия",
      configurations: [
        { parameter: "1000+ пользователей" },
        { parameter: "Экстранет" },
        { parameter: "eCommerce-платформ" },
        { parameter: "Документы онлайн" },
        { parameter: "Многодепартаментность" },
        { parameter: "Веб-кластер" },
        { parameter: "5 ГБ на диске" },
      ],
    },
  ];
});
