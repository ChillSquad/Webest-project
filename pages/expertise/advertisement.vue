<script setup>
import Technologies from "~/components/ExpertisePage/Technologies.vue";
import ExpertiseHeading from "~/components/ExpertisePage/ExpertiseHeading.vue";
import BlogUnit from "~/components/BlogPage/BlogUnit.vue";
import Recruiting from "~/components/ExpertisePage/Recruiting.vue";
import CustomersUnit from "~/components/CustomersPage/CustomersUnit.vue";
import TalkUnit from "~/components/TalkPage/TalkUnit.vue";
import Advantages from "~/components/ExpertisePage/Advantages.vue";
import ExpertiseMenu from "~/components/ExpertisePage/ExpertiseMenu.vue";
import MarketplaceServices from "~/components/ExpertisePage/MarketplaceServices.vue";
import Reporting from "~/components/ExpertisePage/Reporting.vue";
import ArticleSlider from "~/components/UI-kit/ArticleSlider.vue";
import SimilarServices from "~/components/ExpertisePage/SimilarServices.vue";
import { useScreenSize } from "~/components/models/useScreenSize";

const { isLargeScreen } = useScreenSize();

const breadcrumbItems = [
  { label: "Назад ко всем услугам", route: "/expertise" },
];

const cards = [
  {
    src: "/images/imageAdvertisement2.png",
    title: "Расширяет географию продаж и показывает рекламу в регионах",
  },
  {
    src: "/images/imageAdvertisement3.png",
    title: "Позволяет быстро привлечь на сайт целевых посетителей",
  },
  {
    src: "/images/imageAdvertisement4.png",
    title:
      "Улучшаются позиции вашего сайта в органической выдаче поисковых систем",
  },
  {
    src: "/images/imageAdvertisement5.png",
    title: "Повышает узнаваемость бренда",
  },
];

const plates = [
  {
    title: "Вы не пробовали запускать контекстную рекламу",
    content:
      "Даже если на первый взгляд в вашей сфере нет горячего спроса в поисковых сервисах, то контекстная реклама всё равно может быть эффективным способом продвижения при должном погружении в рынок, продукт и аналитику",
    image: "/images/imageAdvertisement6.png",
  },
  {
    title:
      "Вы пробовали запускать контекстную рекламу, но результат вас не устроил",
    content:
      "Контекстная реклама может быть неэффективной, если постоянно не искать работающие связки, не тестировать новые гипотезы и не развивать работающие механики.",
    image: "/images/imageAdvertisement15.png",
  },
  {
    title:
      "Вы уже запустили контекстную рекламу, но текущий подрядчик вас не устраивает",
    content:
      "Многие специалисты оказывают шаблонные услуги, не погружаясь во все нюансы вашего проекта. Мы же ориентированы на совместное развитие и комплексный подход в интернет-маркетинге. Наш приоритет это человеческие отношения в купе с результатом.",
    image: "/images/imageAdvertisement16.png",
  },
];

const employees = [
  {
    image: "/images/imageAdvertisement7.png",
    name: "Большаков Ярослав",
    occupation: "Руководитель направления контекстной рекламы",
  },
  {
    image: "/images/imageAdvertisement8.png",
    name: "Силакова Алёна",
    occupation: "Контекстолог",
  },
  {
    image: "/images/imageAdvertisement9.png",
    name: "Коренев Василий",
    occupation: "Графический дизайнер",
  },
  {
    image: "/images/imageAdvertisement10.png",
    name: "Александров Александр",
    occupation: "Руководитель отдела маркетинга",
  },
];

const technologies = [
  {
    src: "/images/imageAdvertisement11.png",
    title: "Яндекс Директ",
  },
  {
    src: "/images/imageAdvertisement12.png",
    title: "Google Ads",
  },
  {
    src: "/images/imageAdvertisement13.png",
    title: "Яндекс Навигатор",
  },
  {
    src: "/images/imageAdvertisement14.png",
    title: "Яндекс Бизнес",
  },
];

const services = [
  {
    title: "Яндекс Директ",
    subtitle: "от 40 000 ₽",
    points: [
      "Настраиваем карточку компании в Яндекс",
      "Заполняем данные организации, товары и услуги, акции",
      "Настраиваем сайт Яндекс Бизнес для компании",
      "Запускаем рекламную подписку",
      "Контролируем показ объявлений",
      "Готовим отчетность",
    ],
  },
  {
    title: "Яндекс Бизнес",
    subtitle: "от 30 000 ₽",
    points: [
      "Настраиваем карточку компании в Яндекс",
      "Заполняем данные организации, товары и услуги, акции",
      "Настраиваем сайт Яндекс Бизнес для компании",
      "Запускаем рекламную подписку",
      "Контролируем показ объявлений",
      "Готовим отчетность",
    ],
  },
  {
    title: "Яндекс Навигатор",
    subtitle: "от 50 000 ₽",
    points: [
      "Настраиваем карточку компании в Яндекс",
      "Заполняем данные организации, товары и услуги, акции",
      "Настраиваем сайт Яндекс Бизнес для компании",
      "Запускаем рекламную подписку",
      "Контролируем показ объявлений",
      "Готовим отчетность",
    ],
  },
  {
    title: "Google Ads",
    subtitle: "от 40 000 ₽",
    points: [
      "Настраиваем карточку компании в Яндекс",
      "Заполняем данные организации, товары и услуги, акции",
      "Настраиваем сайт Яндекс Бизнес для компании",
      "Запускаем рекламную подписку",
      "Контролируем показ объявлений",
      "Готовим отчетность",
    ],
  },
];

const reports = [
  {
    heading: "Аналитика",
    content: [
      "Брифинг",
      "Предварительная аналитика или аудит текущих кампаний",
      "Зум-встреча",
      "Формирование коммерческого предложения",
    ],
  },
  {
    heading: "Подготовка к запуску",
    content: [
      "Сбор материалов",
      "Регистрация кабинета, маркировка",
      "Подключение систем аналитики",
      "Проверка отработки целей",
      "Сбор семантического ядра",
      "Настройка рекламных кампаний",
    ],
  },

  {
    heading: "Ведение рекламных кампаний",
    content: [
      "Корректировки настроек рекламных кампаний",
      "Изменений акций/офферов в текстах",
      "Расширение семантики",
      "Отключение неэффективных площадок в РСЯ",
    ],
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

const heading = [
  {
    title: "Контекстная реклама Яндекс Директ и Google Ads",
    subtitle:
      "Текстовые, графические и видеообъявления, которые показываются горячей аудитории. В основе контекстной рекламы заложена аукционная система сервисов Яндекс Директ и Google Ads, которая подразумевает оплату за клик",
    buttonTitle: "Заказать разработку сайта",
    imageSrc: "/images/imageAdvertisement1.png",
    imageAlt: "Заголовок статьи",
    imageCaption: "",
  },
];
</script>

<template>
  <div class="expertise-advertisement">
    <ExpertiseHeading :breadcrumbItems="breadcrumbItems" :heading="heading" />

    <Advantages :cards="cards" />

    <ExpertiseMenu
      title="Кому подойдет настройка контекстной рекламы?"
      :plates="plates"
    />

    <Recruiting
      title="Бесплатный аудит"
      subtitle="Оставьте заявку и мы проведем бесплатный аудит, после которого наглядно покажем подходит ли вашему бизнесу контекстная реклама и какой её потенциал в вашей нише"
    />

    <div class="expertise-advertisement__heading container">
      Над вашим проектом будут работать
    </div>
    <div class="expertise-advertisement__table">
      <NuxtMarquee :autoFill="true">
        <div
          class="expertise-advertisement__slide"
          v-for="(employee, index) in employees"
        >
          <img
            :key="index"
            class="expertise-advertisement__slide-image"
            :src="employee.image"
            alt="Фото сотрудника"
          />
          <p class="expertise-advertisement__slide-employee">
            {{ employee.name }} <span>{{ employee.occupation }}</span>
          </p>
        </div>
      </NuxtMarquee>
    </div>

    <Technologies :technologies="technologies" />

    <MarketplaceServices title="наши услуги" :services="services" />

    <BlogUnit
      title="Награды и сертификаты"
      article="development"
      :arrow="false"
    />

    <Reporting :reports="reports" title="Этапы работы" />

    <CustomersUnit />

    <BlogUnit title="Наши кейсы" article="case" :slider="true" route="/case" />

    <div :class="{ container: isLargeScreen }">
      <ArticleSlider :slides="slides" :review="true" />
    </div>

    <SimilarServices />

    <div class="container">
      <TalkUnit />
    </div>
  </div>
</template>

<style lang="scss">
@import "~/assets/scss/helpers/mixin";
@import "~/assets/scss/helpers/fonts-mixin";

.expertise-advertisement {
  display: flex;
  flex-direction: column;
  padding-top: var(--page-padding);

  &__heading {
    @include font-h2;

    text-align: center;
    margin-bottom: var(--heading-margin-bottom);
  }

  &__table {
    margin-bottom: var(--unit-margin-y);
  }

  &__slide {
    height: 630px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    gap: 24px;
    margin-left: 8px;
  }

  &__slide-image {
    max-width: 414px;
    height: auto;
    border-radius: var(--border-radius-40);
  }

  &__slide-employee {
    @include font-h6;

    max-width: 350px;
    display: flex;
    flex-direction: column;
    margin-left: 32px;

    span {
      @include font-text-4;

      color: var(--color-dark-blue);
    }
  }

  .outstaff-advantages__list {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
  }

  .outstaff-advantages__item {
    min-width: 100%;
    min-height: 411px;
  }

  .expertise-menu__item {
    max-height: 128px;

    &.active {
      max-height: 252px;
    }

    .icon-arrow-right-up {
      align-items: first baseline;
    }
  }

  .expertise-development-reporting__item {
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
  }

  .expertise-development-reporting__item-heading {
    @include font-h6;
  }

  .article-slider-unit {
    margin-bottom: var(--unit-margin-y);
  }

  @media (max-width: 475px) {
    @include article-mobile;

    .expertise-menu__content {
      height: 679px;
    }

    .expertise-menu__list {
      width: 100%;
    }

    .outstaff-advantages__item {
      height: 320px;
    }

    .expertise-menu {
      margin-bottom: var(--unit-margin-y);

      button.gradient-button {
        display: none;
      }

      .expertise-menu__item {
        max-height: 100px;

        &.active {
          max-height: 290px;
        }
      }
    }

    &__slide {
      max-width: 300px;
      max-height: 461px;
    }

    &__slide-image {
      max-width: 300px;
      height: auto;
    }

    &__slide-employee {
      max-width: 268px;
    }
  }
}
</style>
