<script setup>
import Technologies from "~/components/ExpertisePage/Technologies.vue";
import ExpertiseHeading from "~/components/ExpertisePage/ExpertiseHeading.vue";
import BlogUnit from "~/components/BlogPage/BlogUnit.vue";
import Recruiting from "~/components/ExpertisePage/Recruiting.vue";
import CustomersUnit from "~/components/CustomersPage/CustomersUnit.vue";
import TalkUnit from "~/components/TalkPage/TalkUnit.vue";
import Advantages from "~/components/ExpertisePage/Advantages.vue";
import IndividualDevelopment from "~/components/ExpertisePage/IndividualDevelopment.vue";
import Integration from "~/components/ExpertisePage/Integration.vue";

const breadcrumbItems = [
  { label: "Назад ко всем услугам", route: "/expertise" },
];

const technologies = [
  {
    src: "/images/imageTechnologies5.png",
    title: "1C-Bitrix",
  },
  {
    src: "/images/imageTechnologies4.png",
    title: "Laravel",
  },
  {
    src: "/images/imageTechnologies3.png",
    title: "Vue",
  },
  {
    src: "/images/imagePromotion13.png",
    title: "PHP8",
  },
  {
    src: "/images/imagePromotion17.png",
    title: "Sphinx",
  },
  {
    src: "/images/imagePromotion19.png",
    title: "Elastic Search",
  },
  {
    src: "/images/imagePromotion12.png",
    title: "Docker",
  },
  {
    src: "/images/imageTechnologies1.png",
    title: "Flutter",
  },
  {
    src: "/images/imagePromotion14.png",
    title: "PostgreSQL",
  },
  {
    src: "/images/imagePromotion16.png",
    title: "Nuxt",
  },
  {
    src: "/images/imagePromotion18.png",
    title: "Gitlub",
  },
  {
    src: "/images/imagePromotion20.png",
    title: "Ci/Cd",
  },
];

const cards = [
  {
    src: "/images/imagePromotion2.png",
    title: "Сокращает время обработки заказов",
    subtitle:
      "Автоматизация рутинных задач и снижение количества ошибок ускоряют процесс обслуживания и позволяют больше заказов без расширения штата",
    wide: true,
  },
  {
    src: "/images/imagePromotion3.png",
    title: "Повышает рентабельность продаж",
    subtitle: "Увеличивает маржинальность и снижает затраты на ФОТ менеджеров",
  },
  {
    src: "/images/imagePromotion4.png",
    title: "Открывает новый канал продаж",
    subtitle:
      "Клиенты могут самостоятельно 24/7 получать доступ ко всему ассортименту, индивидуальным ценам и актуальной информации о статусах исполнения заказа без участия менеджера",
    tall: true,
  },
  {
    src: "/images/imagePromotion5.png",
    title: "Открывает доступ к ассортименту",
    subtitle:
      "Клиенты могут самостоятельно 24/7 получать доступ ко всему ассортименту, индивидуальным ценам и актуальной информации о статусах исполнения заказа без участия менеджера",
  },
  {
    src: "/images/imagePromotion6.png",
    title: "Снижает влияние человеческого фактора",
    subtitle:
      "Избежание ошибок, задержек в поставках и потерь заказов способствуют предотвращению негатива со стороны клиентов и повышают их удовлетворенность",
  },
  {
    src: "/images/imagePromotion7.png",
    title: "Оперативно принимает заказы из регионов",
    subtitle:
      "Портал позволяет эффективно обрабатывать заявки от региональных клиентов из разных часовых поясов",
  },
  {
    src: "/images/imagePromotion8.png",
    title: "Предоставляет конкурентное преимущество",
    subtitle:
      "Расширение интернет-присутствия и опережение конкурентов за счет создания собственного B2B-портала",
  },
  {
    src: "/images/imagePromotion9.png",
    title: "Персонализирует общение с клиентом",
    subtitle:
      "Инструменты взаимодействия с клиентом в личном кабинете дают возможность оптовому покупателю заказывать продукцию по персональным ценам и выгодным условиям",
    wide: true,
  },
  {
    src: "/images/imagePromotion10.png",
    title: "Увеличивает средний чек",
    subtitle:
      "Автоматизированные допродажи через B2B портал могут увеличить средний чек от 10% и частоту заказов в 2-3 раза",
  },
];

const individual = [
  {
    head: "Индивидуальная разработка B2B-портала",
    content:
      "Индивидуальная разработка позволяет адаптировать все бизнес-процессы иинтеграции под конкретные нужды компании, обеспечивая гибкость и полное соответствие уникальным требованиям. Портал может быть спроектирован с учётом будущего роста бизнеса, легко расширяясь под увеличивающееся количество пользователей, товаров или заказов.",
    image: "/images/imagePromotion11.png",
    title: "Особенности индивидуальной разработки",
    marks: [
      "Вложение в кастомное решение окупается в долгосрочной перспективе благодаря отсутствию ограничений и необходимости платить за неиспользуемые функции коробочных решений;",
      "Собственная разработка предоставляет полную свободу контроля над процессами разработки и тестирования, что позволяет предотвратить появление неучтённых ошибок;",
      "Подходит для компаний, которым недостаточно функций коробочного ИТ-решения B2B-портала;",
      "Наличие квалифицированной команды разработчиков гарантирует высокое качество решения, его безопасность и адаптацию к изменяющимся условиям рынка;",
      "Полный контроль над архитектурой, интеграциями и функционалом, что позволяет внедрять любые инновационные решения, недоступные в коробочных решениях.",
    ],
  },
];

const integration = [
  {
    head: "Внедрение готового решения",
    content:
      "Для быстрого старта используем решения с маркетплейса «1С-Битрикс» или решение «Аргумент» — комплексную B2B-платформу, которая позволяет автоматизировать оптовые продажи с контрагентами, способна на масштабирование и подходит для крупных внедрений. Каждый пользователь имеет личный кабинет, в котором видит свои цены и остатки по товарам, делает заказы без участия менеджера, контролирует свой график платежей и дебиторскую задолженность.",
    image: "/images/imagePromotion21.png",
    title: "Особенности готовых решений",
    marks: [
      "Коробочное решение позволяет запустить B2B портал за короткие сроки, обычно за месяца, без необходимости значительных вложений;",
      "Готовая платформа уже доказала свою эффективность и безопасность на практике для большинства оптовых бизнесов;",
      "Возможность масштабирования платформы и адаптации готового функционала под конкретные потребности бизнеса;",
      "Поддержка и обновления со стороны разработчика платформы, что упрощает эксплуатацию и снижение технических рисков;",
      "Встроенные инструменты для автоматизации продаж, управления клиентами и документооборота.",
    ],

    title1: "Внедрение готового решения «Аргумент»",
    marks1: [
      "Предпроектный анализ с изучением требований бизнеса и определением потребностей для развертывания и интеграции платформы",
      "Внедрение платформы на основе проверенной методики внедрения, что обеспечивает быстрое и надежное развертывание",
      "Адаптация дизайна с настройкой внешнего вида и стилей платформы под бренд компании",
      "Полное внедрение за 3 месяца для среднего бизнеса и MVP для крупных компаний",
    ],
    image1: "/images/imagePromotion22.png",
    title2: "Настройка решения «Аргумент» под уникальные бизнес-требования",
    marks2: [
      "Предпроектное обследование для выявления функциональных разрывов и создания технического задания на доработку платформы",
      "Внедрение платформы с использованием детализированной методологии",
      "Возможность гибкой настройки и расширения функционала под конкретные задачи компании",
      "Внедрение решения для среднего бизнеса и крупных корпораций от 3 до 6 месяцев в зависимости от сложности требований",
    ],
    image2: "/images/imagePromotion23.png",
  },
];

const heading = ref([
  {
    title: "Разрабатываем решения для B2B-портала с личным кабинетом",
    subtitle:
      "Реализуем оптовый интернет-магазин на базе надёжного отечественного ПО «1С-Битрикс» и интегрируем платформу с CRM-, ERP-, MDM-системами. B2B-портал автоматизирует рутинные операции и упрощает взаимодействие с оптовыми покупателями.",
    buttonTitle: "Оставить заявку",
    imageSrc: "/images/imagePromotion1.png",
    imageAlt: "Заголовок статьи",
  },
]);

const updateImageSrc = () => {
  if (heading.value.length > 0) {
    if (window.innerWidth <= 475) {
      heading.value[0].imageSrc = "/images/imagePromotion1Mobile.png";
    } else {
      heading.value[0].imageSrc = "/images/imagePromotion1.png";
    }
  }
};

onMounted(() => {
  updateImageSrc();
  window.addEventListener("resize", updateImageSrc);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", updateImageSrc);
});
</script>

<template>
  <div class="expertise-promotion">
    <ExpertiseHeading :breadcrumbItems="breadcrumbItems" :heading="heading" />

    <Advantages :cards="cards" title="Преимущества внедрения B2B-портала" />

    <div class="container">
      <IndividualDevelopment :individual="individual" />
    </div>

    <Technologies :technologies="technologies" />

    <div class="container">
      <Integration :integration="integration" />
    </div>

    <Recruiting
      title="Требуется доработка или оптимизация?"
      subtitle="Если у вас уже есть система на Laravel или «1С-Битрикс» и требуется доработка или переход на уровень B2B, обращайтесь к нам для оптимизации, расширения функционала и интеграции новых возможностей под потребности вашего бизнеса."
    />

    <CustomersUnit />

    <BlogUnit
      title="Награды и сертификаты"
      article="development"
      :arrow="false"
    />

    <div class="container">
      <TalkUnit
        title="Остались вопросы?"
        titleLeft="обсудить готовое решение"
        titleRight="обсудить индивидуальную разработку"
      />
    </div>
  </div>
</template>

<style lang="scss">
@import "~/assets/scss/helpers/fonts-mixin";

.expertise-promotion {
  display: flex;
  flex-direction: column;
  padding-top: var(--page-padding);

  .expertise-heading__image-caption {
    width: 764px;
    color: #fff;
  }

  .outstaff-advantages__list {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
  }

  .development-technologies__wrapper {
    height: max-content;
    display: grid;
    grid-template-columns: repeat(6, 200px);
    grid-template-rows: repeat(2, 200px);
  }

  .outstaff-advantages__item {
    min-width: 100%;
    min-height: 467px;
  }

  @media (max-width: 475px) {
    .outstaff-advantages__item {
      height: 320px;

      .outstaff-advantages__item-image {
        max-width: 296px;
        height: 180px;
        object-fit: contain;
      }
    }

    .development-technologies__wrapper {
      display: flex;
    }
  }

  @media (max-width: 360px) {
    .talk-card__heading,
    .individual-development__header {
      overflow-wrap: anywhere;
    }
  }
}
</style>
