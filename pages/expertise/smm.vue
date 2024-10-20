<script setup>
import DevelopmentSlider from "~/components/ExpertisePage/DevelopmentSlider.vue";
import Technologies from "~/components/ExpertisePage/Technologies.vue";
import ExpertiseHeading from "~/components/ExpertisePage/ExpertiseHeading.vue";
import BlogUnit from "~/components/BlogPage/BlogUnit.vue";
import Recruiting from "~/components/ExpertisePage/Recruiting.vue";
import CustomersUnit from "~/components/CustomersPage/CustomersUnit.vue";
import TalkUnit from "~/components/TalkPage/TalkUnit.vue";
import Advantages from "~/components/ExpertisePage/Advantages.vue";
import MarketplaceServices from "~/components/ExpertisePage/MarketplaceServices.vue";
import ArticleSlider from "~/components/UI-kit/ArticleSlider.vue";
import SimilarServices from "~/components/ExpertisePage/SimilarServices.vue";

const breadcrumbItems = [
  { label: "Назад ко всем услугам", route: "/expertise" },
];

const cards = [
  {
    src: "/images/imageSMM2.png",
    title: "Широкий спектр возможностей для продвижения товаров и услуг",
  },
  {
    src: "/images/imageSMM3.png",
    title:
      "Накопительный рекламный эффект (появление органического трафика и лидов) и формирование сарафанного радио",
  },
  {
    src: "/images/imageAdvertisement5.png",
    title: "Повышает узнаваемость бренда",
  },
  {
    src: "/images/imageSMM4.png",
    title: "Возможность построение многоэтапной воронки продаж",
  },
  {
    src: "/images/imageAdvertisement3.png",
    title: "Увеличение заявок и обращений",
  },
  {
    src: "/images/imageSMM5.png",
    title:
      "Инструментарий прогрева аудитории до целевых действий (покупки, посещения точки продаж)",
  },
  {
    src: "/images/imageSMM6.png",
    title: "Использование нативных видов рекламы",
  },
  {
    src: "/images/imageSMM7.png",
    title: "Дополнительные точки касания с брендом на пути к продаже",
  },
];

const images = [
  {
    src: "/images/imageMarketplace3.png",
    title: "Владельцам бизнеса",
    subtitle: "",
  },
  {
    src: "/images/imageSMM8.png",
    title: "Маркетологам компаний",
    subtitle: "",
  },
];

const employees = [
  {
    image: "/images/imageSMM9.png",
    name: "Ильиных Максим",
    occupation: "Руководитель направления SMM",
  },
  {
    image: "/images/imageAdvertisement9.png",
    name: "Коренев Василий",
    occupation: "Графический дизайнер",
  },
  {
    image: "/images/imageSMM10.png",
    name: "Маргарита Рассадина",
    occupation: "Таргетолог",
  },
];

const technologies = [
  {
    src: "/images/imageSMM11.png",
    title: "Яндекс Дзен",
  },
  {
    src: "/images/imageSMM12.png",
    title: "Telegram",
  },
  {
    src: "/images/imageSMM13.png",
    title: "Одноклассники",
  },
  {
    src: "/images/imageSMM14.png",
    title: "Вконтакте",
  },
  {
    src: "/images/imageSMM15.png",
    title: "Instagram",
  },
  {
    src: "/images/imageSMM16.png",
    title: "Facebook",
  },
];

const services = [
  {
    title: "Разработка стратегии продвижения",
    subtitle: "от 25 000 ₽",
    points: [
      "Собираем семантическое ядро, минус-слова, стоп-площадки",
      "Отрисовываем баннеры",
      "Создаем креативы",
      "Оптимизируем рекламу для повышения эффективности",
      "Заказываем конкурентный анализ и CPA-аналитику",
      "Настраиваем рекламные кампании",
    ],
  },
  {
    title: "Таргетированная реклама",
    subtitle: "от 20 000 ₽",
    points: [
      "Собираем семантическое ядро, минус-слова, стоп-площадки",
      "Отрисовываем баннеры",
      "Создаем креативы",
      "Оптимизируем рекламу для повышения эффективности",
      "Заказываем конкурентный анализ и CPA-аналитику",
      "Настраиваем рекламные кампании",
    ],
  },
  {
    title: "Концепция и оформление сообществ",
    subtitle: "от 10 000 ₽",
    points: [
      "Собираем семантическое ядро, минус-слова, стоп-площадки",
      "Отрисовываем баннеры",
      "Создаем креативы",
      "Оптимизируем рекламу для повышения эффективности",
      "Заказываем конкурентный анализ и CPA-аналитику",
      "Настраиваем рекламные кампании",
    ],
  },
  {
    title: "Ведение сообществ",
    subtitle: "от 20 000 ₽",
    points: [
      "Собираем семантическое ядро, минус-слова, стоп-площадки",
      "Отрисовываем баннеры",
      "Создаем креативы",
      "Оптимизируем рекламу для повышения эффективности",
      "Заказываем конкурентный анализ и CPA-аналитику",
      "Настраиваем рекламные кампании",
    ],
  },
  {
    title: "Посевы по сообществам",
    subtitle: "от 20 000 ₽",
    points: [
      "Собираем семантическое ядро, минус-слова, стоп-площадки",
      "Отрисовываем баннеры",
      "Создаем креативы",
      "Оптимизируем рекламу для повышения эффективности",
      "Заказываем конкурентный анализ и CPA-аналитику",
      "Настраиваем рекламные кампании",
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

const subImages = [
  {
    purple: "SMM-продвижение ",
    content1:
      "– это универсальное средство для компаний любого масштаба и любой сферы деятельности",
  },
];

const heading = [
  {
    title: "SMM продвижение и таргетированная реклама",
    subtitle:
      "Инструмент интернет-маркетинга, помогающий привлечь потребителей через социальные сети",
    buttonTitle: "Оставить заявку",
    imageSrc: "/images/imageSMM1.png",
    imageAlt: "Заголовок статьи",
    imageCaption: "",
  },
];
</script>

<template>
  <div class="expertise-smm">
    <ExpertiseHeading :breadcrumbItems="breadcrumbItems" :heading="heading" />

    <Advantages :cards="cards" />

    <DevelopmentSlider
      :images="images"
      title="Кому подойдут наши услуги?"
      :subtitle="subImages"
    />

    <div class="expertise-smm__table">
      <div class="expertise-smm__card-slide" v-for="(image, index) in images">
        <img
          :key="index"
          class="expertise-smm__card-slide-image"
          :src="image.src"
          alt="Фото сотрудника"
        />
        <p class="expertise-smm__card-slide-capture">
          {{ image.title }}
        </p>
      </div>
    </div>

    <Recruiting
      title="Бесплатный аудит"
      subtitle="Оставьте заявку и мы проведем бесплатный аудит, после которого наглядно покажем подходит ли вашему бизнесу контекстная реклама и какой её потенциал в вашей нише"
    />

    <div class="expertise-smm__employees">
      <div class="expertise-smm__heading container">
        Над вашим проектом будут работать
      </div>

      <div class="expertise-smm__table">
        <div class="expertise-smm__card" v-for="(employee, index) in employees">
          <img
            :key="index"
            class="expertise-smm__card-image"
            :src="employee.image"
            alt="Фото сотрудника"
          />
          <p class="expertise-smm__card-employee">
            {{ employee.name }} <span>{{ employee.occupation }}</span>
          </p>
        </div>
      </div>
    </div>

    <BlogUnit
      title="Награды и сертификаты"
      article="development"
      :arrow="false"
    />

    <Technologies :technologies="technologies" title="Площадки" />

    <MarketplaceServices title="наши услуги" :services="services" />

    <CustomersUnit />

    <div class="container">
      <ArticleSlider
        :slides="slides"
        :review="true"
        style="margin-bottom: 220px"
      />
    </div>

    <BlogUnit title="Наши кейсы" article="case" :slider="true" route="/case" />

    <SimilarServices />

    <div class="container">
      <TalkUnit />
    </div>
  </div>
</template>

<style lang="scss">
@import "~/assets/scss/helpers/mixin";
@import "~/assets/scss/helpers/fonts-mixin";

.expertise-smm {
  display: flex;
  flex-direction: column;
  padding-top: var(--page-padding);

  .outstaff-advantages__list {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }

  .outstaff-advantages__item {
    max-height: 414px;
    width: auto;
  }

  .development-slider {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  &__heading {
    @include font-h2;

    text-align: center;
    margin-bottom: var(--heading-margin-bottom);
  }

  &__table {
    @include flex-center;

    padding: var(--swiper-padding);
    margin-bottom: var(--unit-margin-y);
    gap: 8px;
  }

  &__card {
    height: 630px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    gap: 24px;
    position: relative;
  }

  &__card-image {
    max-width: 414px;
    height: auto;
    border-radius: var(--border-radius-40);
  }

  &__card-employee {
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

  &__card-slide {
    max-height: 680px;
    width: auto;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    position: relative;
  }

  &__card-slide-image {
    max-height: 680px;
    width: auto;
    border-radius: var(--border-radius-40);
  }

  &__card-slide-capture {
    @include font-h6;

    color: #fff;
    position: absolute;
    top: 32px;
    left: 32px;
  }

  .development-slider__swiper {
    display: none;
  }

  .development-slider {
    margin: 0;
  }

  @media (max-width: 475px) {
    &__table {
      display: flex;
      justify-content: initial;
      margin-bottom: var(--unit-margin-y);
      overflow-x: auto;
      white-space: nowrap;

      &::-webkit-scrollbar {
        display: none;
      }
    }

    &__card {
      max-width: 300px;
      max-height: 461px;
    }

    &__card-image {
      max-width: 300px;
      height: auto;
    }

    &__card-employee {
      max-width: 268px;
    }

    &__card-slide {
      max-height: 368px;
    }

    &__card-slide-image {
      max-height: 368px;
    }

    &__card-capture {
      top: 20px;
      left: 20px;
    }

    .article-slider-mobile {
      margin-bottom: var(--unit-margin-y);
    }
  }
}
</style>
