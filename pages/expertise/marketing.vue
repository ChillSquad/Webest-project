<script setup>
import Advantages from "~/components/ExpertisePage/Advantages.vue";
import ExpertiseHeading from "~/components/ExpertisePage/ExpertiseHeading.vue";
import Priority from "~/components/ExpertisePage/Priority.vue";
import BlogUnit from "~/components/BlogPage/BlogUnit.vue";
import Recruiting from "~/components/ExpertisePage/Recruiting.vue";
import CustomersUnit from "~/components/CustomersPage/CustomersUnit.vue";
import TalkUnit from "~/components/TalkPage/TalkUnit.vue";
import ArticleSlider from "~/components/UI-kit/ArticleSlider.vue";
import { useScreenSize } from "~/components/models/useScreenSize";

const { isLargeScreen } = useScreenSize();

const breadcrumbItems = [
  { label: "Назад ко всем услугам", route: "/expertise" },
];

const cards = [
  {
    src: "/images/imageMarketing2.png",
    title: "Контекстная реклама Яндекс Директ и Google Ads",
  },
  {
    src: "/images/imageMarketing3.png",
    title: "Таргетированная реклама",
    subtitle:
      "ВК, MyTarget, Facebook/Instagram, МТС Маркетолог, СберТаргет, Билайн Таргет",
  },
  {
    src: "/images/imageMarketing4.png",
    title: "SEO-продвижение сайтов в Яндекс и Google",
  },
  {
    src: "/images/imageMarketing5.png",
    title: "Продвижение в сервисах Яндекс",
    subtitle:
      "Яндекс.Бизнес, Яндекс.Геореклама (Яндекс.Навигатор, Яндекс.Карты)",
  },
  {
    src: "/images/imageMarketing6.png",
    title: "Продвижениена маркетплейсах",
    subtitle: "Wildberries, Яндекс Маркет, OZON",
  },
  {
    src: "/images/imageMarketing7.png",
    title: "Email-маркетинг",
  },
];

const priorityItems = [
  {
    heading: "Сертифицированная команда",
    content:
      "Все сотрудники имеют сертификаты, с опытом от 3 лет и ведением не менее 30 рекламных кампаний в совокупности.",
    icon: "seven",
  },
  {
    heading: "Ежедневный контроль",
    content:
      "Вы можете выбрать для себя наиболее подходящую методологию - Scrum или Waterfall",
    icon: "eight",
  },
  {
    heading: "Быстрый запуск",
    content:
      "В штате всегда есть специалист, который готов запустить проект в течении 5 рабочих дней.",
    icon: "nine",
  },
  {
    heading: "Отсрочка платежей",
    content: "Работаем с отсрочкой по бюджетам и услугам. Выделяем НДС.",
    icon: "ten",
  },
  {
    heading: "Понятный медиаплан",
    content: " Глубокая аналитика тематики бизнеса, расчёт основных KPI.",
    icon: "eleven",
  },
];

const slides = [
  {
    content:
      "ООО «Вэбест» является нашим партнёром в сфере рекламной деятельности. За время сотрудничества ООО «Вэбест» подтвердила свой высочайший профессиональный статус, активность и компетентность в выполнении поставленных задач. Все задачи выполняются вовремя, в строго обозначенные сроки и с отличным качеством. Сотрудники компании качественно справляются со своими обязанностями. Мы довольны работами ООО «Вэбест» и готовы рекомендовать эту компанию как ответственного и надёжного партнёра.",
    src: "/images/imageMarketing9.png",
    username: "Игнатьев Станислав",
    occupation: "Директор по Маркетингу, Olymp men",
  },
  {
    content:
      "ООО «Вэбест» является нашим партнёром в сфере рекламной деятельности. За время сотрудничества ООО «Вэбест» подтвердила свой высочайший профессиональный статус, активность и компетентность в выполнении поставленных задач. Все задачи выполняются вовремя, в строго обозначенные сроки и с отличным качеством. Сотрудники компании качественно справляются со своими обязанностями. Мы довольны работами ООО «Вэбест» и готовы рекомендовать эту компанию как ответственного и надёжного партнёра.",
    src: "/images/imageMarketing9.png",
    username: "Игнатьев Станислав",
    occupation: "Директор по Маркетингу, Olymp men",
  },
  {
    content:
      "ООО «Вэбест» является нашим партнёром в сфере рекламной деятельности. За время сотрудничества ООО «Вэбест» подтвердила свой высочайший профессиональный статус, активность и компетентность в выполнении поставленных задач. Все задачи выполняются вовремя, в строго обозначенные сроки и с отличным качеством. Сотрудники компании качественно справляются со своими обязанностями. Мы довольны работами ООО «Вэбест» и готовы рекомендовать эту компанию как ответственного и надёжного партнёра.",
    src: "/images/imageMarketing9.png",
    username: "Игнатьев Станислав",
    occupation: "Директор по Маркетингу, Olymp men",
  },
  {
    content:
      "ООО «Вэбест» является нашим партнёром в сфере рекламной деятельности. За время сотрудничества ООО «Вэбест» подтвердила свой высочайший профессиональный статус, активность и компетентность в выполнении поставленных задач. Все задачи выполняются вовремя, в строго обозначенные сроки и с отличным качеством. Сотрудники компании качественно справляются со своими обязанностями. Мы довольны работами ООО «Вэбест» и готовы рекомендовать эту компанию как ответственного и надёжного партнёра.",
    src: "/images/imageMarketing9.png",
    username: "Игнатьев Станислав",
    occupation: "Директор по Маркетингу, Olymp men",
  },
  {
    content:
      "ООО «Вэбест» является нашим партнёром в сфере рекламной деятельности. За время сотрудничества ООО «Вэбест» подтвердила свой высочайший профессиональный статус, активность и компетентность в выполнении поставленных задач. Все задачи выполняются вовремя, в строго обозначенные сроки и с отличным качеством. Сотрудники компании качественно справляются со своими обязанностями. Мы довольны работами ООО «Вэбест» и готовы рекомендовать эту компанию как ответственного и надёжного партнёра.",
    src: "/images/imageMarketing9.png",
    username: "Игнатьев Станислав",
    occupation: "Директор по Маркетингу, Olymp men",
  },
];

const prioritySub = [
  {
    content1: "В нашем штате",
    pink: "специалисты всех уровней",
    content2:
      " под каждый этап маркетинга: от аналитики текущей ситуации, прогнозирования и составления плана работ до реализации на всех доступных рекламных платформах страны и мира.",
  },
];

const heading = [
  {
    title: "Интернет-маркетинг",
    subtitle:
      "Доверьте нам маркетинг вашего бизнеса от медиа и performance-кампаний до полноценного brandformance",
    buttonTitle: "Оставить заявку",
    imageSrc: "/images/imageMarketing1.png",
    imageAlt: "Заголовок статьи",
  },
];
</script>

<template>
  <div class="expertise-marketing">
    <ExpertiseHeading :breadcrumbItems="breadcrumbItems" :heading="heading" />

    <Advantages :cards="cards" title="Наши компетенции" :forbidden="true" />

    <Priority
      :subtitle="true"
      title="Почему мы"
      :prioritys="priorityItems"
      :content="prioritySub"
    />

    <BlogUnit
      title="Награды и сертификаты"
      article="development"
      :arrow="false"
    />

    <Recruiting
      title="Доверьте нам маркетинг вашего бизнеса"
      subtitle="Оставьте заявку и мы свяжемся с вами в течение рабочего дня"
    />

    <BlogUnit title="Наши кейсы" article="case" :slider="true" route="/case" />

    <CustomersUnit />

    <div :class="{ container: isLargeScreen }">
      <ArticleSlider :slides="slides" :review="true" />
    </div>

    <div class="container">
      <TalkUnit />
    </div>
  </div>
</template>

<style lang="scss">
@import "~/assets/scss/helpers/mixin";
@import "~/assets/scss/helpers/fonts-mixin";

.expertise-marketing {
  display: flex;
  flex-direction: column;
  padding-top: var(--page-padding);

  .outstaff-advantages__list {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }

  .outstaff-advantages__item {
    min-width: 100%;
    min-height: 541px;
  }

  .article-slider-unit {
    margin-bottom: var(--unit-margin-y);
  }

  @media (max-width: 475px) {
    @include article-mobile;
  }
}
</style>
