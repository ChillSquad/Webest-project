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

const sub = [
  {
    purple: "SMM-продвижение ",
    content:
      "– это универсальное средство для компаний любого масштаба и любой сферы деятельности",
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
  <div class="expertise-smm">
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

    <DevelopmentSlider
      :images="images"
      title="Кому подойдут наши услуги?"
      :subtitle="sub"
    />

    <Recruiting />

    <div class="container">
      <div class="expertise-smm__heading">
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

    <BlogUnit title="Награды и сертификаты" article="development" />

    <Technologies :technologies="technologies" />

    <BlogUnit title="Наши кейсы" article="case" :slider="true" />

    <CustomersUnit />

    <TalkUnit />
  </div>
</template>

<style lang="scss">
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
    margin-bottom: 100px;
  }

  &__table {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: var(--unit-margin-y);
  }

  &__card {
    height: 630px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    gap: 24px;
    margin-left: 8px;
  }

  &__card-image {
    max-width: 414px;
    height: auto;
    border-radius: 40px;
  }

  &__card-employee {
    @include font-h6;

    max-width: 350px;
    display: flex;
    flex-direction: column;
    margin-left: 32px;

    span {
      @include font-text-4-1920;

      color: var(--color-dark-blue);
    }
  }
}
</style>
