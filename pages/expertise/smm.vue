<script setup>
import DevelopmentSlider from "~/components/ExpertisePage/DevelopmentSlider.vue";
import Technologies from "~/components/ExpertisePage/Technologies.vue";
import ExpertiseHeading from "~/components/ExpertisePage/ExpertiseHeading.vue";
import BlogUnit from "~/components/BlogPage/BlogUnit.vue";
import Recruiting from "~/components/ExpertisePage/Recruiting.vue";
import CustomersUnit from "~/components/CustomersPage/CustomersUnit.vue";
import TalkUnit from "~/components/TalkPage/TalkUnit.vue";
import Advantages from "~/components/ExpertisePage/Advantages.vue";

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
    src: "/images/imageCaseArticle5.png",
    title: "Интернет-магазины",
    subtitle: "Интернет-магазин «Kamatyres»",
  },
  {
    src: "/images/imageBlogArticle1.png",
    title: "Корпоративные порталы",
    subtitle: "Портал «Личный кабинет застройщиков»",
  },
  {
    src: "/images/imageCase7.png",
    title: "B2B и B2C сервисы",
    subtitle: "Приложение по управлению умным домом «TouchOn»",
  },
  {
    src: "/images/imageCase8.png",
    title: "Oбучающие платформы",
    subtitle: "Образовательная онлайн-платформа «EnglishVeronika»",
  },
];

const technologies = [
  {
    src: "/images/imageTechnologies1.png",
    title: "Flutter",
  },
  {
    src: "/images/imageTechnologies2.png",
    title: "Java",
  },
  {
    src: "/images/imageTechnologies3.png",
    title: "Vue",
  },
  {
    src: "/images/imageTechnologies4.png",
    title: "Laravel",
  },
  {
    src: "/images/imageTechnologies5.png",
    title: "1C-Bitrix",
  },
  {
    src: "/images/imageTechnologies6.png",
    title: "PWA",
  },
];

const title = "SMM продвижение и таргетированная реклама";
const subtitle =
  "Инструмент интернет-маркетинга, помогающий привлечь потребителей через социальные сети";
const buttonTitle = "Оставить заявку";
const imageSrc = "/images/imageSMM1.png";
const imageAlt = "Заголовок статьи";
const imageCaption = "";
</script>

<template>
  <div class="expertise-development">
    <ExpertiseHeading
      :breadcrumbItems="breadcrumbItems"
      :title="title"
      :subtitle="subtitle"
      :buttonTitle="buttonTitle"
      :imageSrc="imageSrc"
      :imageAlt="imageAlt"
      :imageCaption="imageCaption"
    />

    <Advantages :cards="cards" />

    <DevelopmentSlider :images="images" />

    <Technologies :technologies="technologies" />

    <BlogUnit title="Награды и сертификаты" article="development" />

    <Recruiting />

    <BlogUnit title="Наши кейсы" article="case" :slider="true" />

    <CustomersUnit />

    <TalkUnit />
  </div>
</template>

<style lang="scss">
.expertise-development {
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
}
</style>
