export default defineEventHandler((event) => {
  return [
    {
      id: 0,
      title: "Веб-разработка",
      subtitle: "Интернет-магазины и B2B-платформы и обучающие платформы",
      tall: false,
      wide: true,
      icon: "icon-development",
      route: "/expertise/development",
    },
    {
      id: 2,
      title: "Интернет-маркетинг",
      subtitle:
        "Выстраиваем маркетинговую стратегию руководствуясь глубоким анализом особенностей бизнеса клиента",
      tall: false,
      wide: false,
      icon: "icon-marketplace",
      route: "/expertise/marketing",
    },
    {
      id: 1,
      title: "CRM-системы",
      subtitle:
        "Подбор и внедрение CRM-систем. Интеграция и кастомизация для облачных и коробочных решений",
      tall: true,
      wide: false,
      icon: "icon-crm",
      route: "/expertise/crm",
    },
    {
      id: 4,
      title: "Сопровождение и развитие",
      subtitle: "Техническая поддержка, Администрирование, Развитие проектов",
      tall: false,
      wide: false,
      icon: "icon-marketing",
      route: "/expertise/promotion",
    },
    {
      id: 3,
      title: "Мобильная разработка",
      subtitle:
        "Обеспечиваем полный цикл разработки мобильного приложения: от проектирования до поддержки",
      tall: false,
      wide: true,
      icon: "icon-mobile",
      route: "/expertise/mobile",
    },
    {
      id: 5,
      title: "Аутстаффинг",
      subtitle: "Усилим вашу команду квалифицированными специалистами",
      tall: true,
      wide: false,
      icon: "icon-outstaff",
      route: "/expertise/outstaff",
    },
    {
      id: 7,
      title: "Контекстная реклама",
      subtitle: "Cоздание текстовых, графических и видеообъявлений",
      tall: false,
      wide: false,
      icon: "icon-advertisement",
      route: "/expertise/advertisement",
    },
    {
      id: 6,
      title: "Продвижение на маркетплейсах",
      subtitle:
        "Управление бизнесом на маркетплейсах. Весь спектр работ от разработки продукта до развития магазина и увеличения продаж",
      tall: false,
      wide: true,
      icon: "icon-promotion ",
      route: "/expertise/marketplace",
    },
    {
      id: 8,
      title: "SMM и таргетированная реклама",
      subtitle: "Cоздание и настройка рекламных кампаний",
      tall: false,
      wide: true,
      icon: "icon-smm",
      route: "/expertise/smm",
    },
    {
      id: 9,
      title: "SEO-продвижение",
      subtitle: "Увеличение потока клиентов через трафик сайта",
      tall: false,
      wide: false,
      icon: "icon-seo",
      route: "/expertise/seo",
    },
  ];
});
