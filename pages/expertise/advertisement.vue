<script setup>
import Technologies from "~/components/ExpertisePage/Technologies.vue";
import ExpertiseHeading from "~/components/ExpertisePage/ExpertiseHeading.vue";
import BlogUnit from "~/components/BlogPage/BlogUnit.vue";
import Recruiting from "~/components/ExpertisePage/Recruiting.vue";
import CustomersUnit from "~/components/CustomersPage/CustomersUnit.vue";
import TalkUnit from "~/components/TalkPage/TalkUnit.vue";
import Advantages from "~/components/ExpertisePage/Advantages.vue";
import ExpertiseMenu from "~/components/ExpertisePage/ExpertiseMenu.vue";

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
  },
  {
    title:
      "Вы пробовали запускать контекстную рекламу, но результат вас не устроил",
    content:
      "Даже если на первый взгляд в вашей сфере нет горячего спроса в поисковых сервисах, то контекстная реклама всё равно может быть эффективным способом продвижения при должном погружении в рынок, продукт и аналитику",
  },
  {
    title:
      "Вы уже запустили контекстную рекламу, но текущий подрядчик вас не устраивает",
    content:
      "Даже если на первый взгляд в вашей сфере нет горячего спроса в поисковых сервисах, то контекстная реклама всё равно может быть эффективным способом продвижения при должном погружении в рынок, продукт и аналитику",
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
    title: "Flutter",
  },
  {
    src: "/images/imageAdvertisement12.png",
    title: "Java",
  },
  {
    src: "/images/imageAdvertisement13.png",
    title: "Vue",
  },
  {
    src: "/images/imageAdvertisement14.png",
    title: "Laravel",
  },
];

const title = "Контекстная реклама Яндекс Директ и Google Ads";
const subtitle =
  "Текстовые, графические и видеообъявления, которые показываются горячей аудитории. В основе контекстной рекламы заложена аукционная система сервисов Яндекс Директ и Google Ads, которая подразумевает оплату за клик";
const buttonTitle = "Заказать разработку сайта";
const imageSrc = "/images/imageAdvertisement1.png";
const imageAlt = "Заголовок статьи";
const imageCaption = "";
</script>

<template>
  <div class="expertise-advertisement">
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

    <ExpertiseMenu
      title="Битрикс24 помогает бизнесу работать"
      image="/images/imageAdvertisement6.png"
      :plates="plates"
    />

    <Recruiting />

    <div class="expertise-advertisement__heading container">
      Над вашим проектом будут работать
    </div>
    <div class="expertise-advertisement__table">
      <NuxtMarquee :direction="left" :autoFill="true">
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

    <BlogUnit title="Награды и сертификаты" article="development" />

    <CustomersUnit />

    <BlogUnit title="Наши кейсы" article="case" :slider="true" />

    <TalkUnit />
  </div>
</template>

<style lang="scss">
@import "~/assets/scss/helpers/fonts-mixin";

.expertise-advertisement {
  display: flex;
  flex-direction: column;
  padding-top: var(--page-padding);

  &__heading {
    @include font-h2;

    text-align: center;
    margin-bottom: 100px;
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
    border-radius: 40px;
  }

  &__slide-employee {
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

  .outstaff-advantages__list {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
  }

  .outstaff-advantages__item {
    height: 414px;
  }

  .expertise-menu__content {
    height: 525px;
  }

  .expertise-menu__item {
    max-height: 128px;

    &:hover {
      max-height: 252px;
    }
  }

  .expertise-menu__item-image {
    position: static;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
}
</style>
