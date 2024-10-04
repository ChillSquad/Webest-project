<script setup>
import ExpertiseHeading from "~/components/ExpertisePage/ExpertiseHeading.vue";
import BlogUnit from "~/components/BlogPage/BlogUnit.vue";
import CustomersUnit from "~/components/CustomersPage/CustomersUnit.vue";
import TalkUnit from "~/components/TalkPage/TalkUnit.vue";
import Advantages from "~/components/ExpertisePage/Advantages.vue";
import ExpertiseMenu from "~/components/ExpertisePage/ExpertiseMenu.vue";
import SelectButtonCustom from "~/components/UI-kit/SelectButtonCustom.vue";
import TariffCard from "~/components/ExpertisePage/TariffCard.vue";

import { ref } from "vue";

const breadcrumbItems = [
  { label: "Назад ко всем услугам", route: "/expertise" },
];

const cards = [
  {
    src: "/images/imageCRM2.png",
    title: "Комплексное внедрение и настройка CRM-системы",
  },
  {
    src: "/images/imageCRM3.png",
    title: "Интеграция с внешними сервисами и продуктами 1С",
  },
  {
    src: "/images/imageCRM4.png",
    title: "Техническое сопровождение и обучение сотрудников",
  },
  {
    src: "/images/imageCRM5.png",
    title: "Подбор и продажа облачных и коробочных лицензий Битрикс24",
  },
  {
    src: "/images/imageCRM6.png",
    title: "Проектирование технических заданий (консалтинг)",
  },
  {
    src: "/images/imageCRM7.png",
    title: "Разработка индивидуальных решений и кастомизация портала",
  },
];

const achievements = [
  { src: "/images/imageCRMAchievements1.png" },
  { src: "/images/imageCRMAchievements2.png" },
  { src: "/images/imageCRMAchievements3.png" },
  { src: "/images/imageCRMAchievements4.png" },
];

const marks = [
  { content: "Чаты и Видеозвонки" },
  { content: "Соцсеть компании" },
  { content: "CoРilot" },
  { content: "Календари" },
  { content: "Документы онлайн" },
  { content: "Диск" },
  { content: "Почта" },
  { content: "HR" },
];

const plates = [
  {
    title: "Совместная работа",
    content:
      "Помогает работать вместе. Полноценный корпоративный портал компании, который объединяет и упрощает коммуникацию внутри вашей компании. Корпоративный портал содержит всё необходимое для организации совместной работы: чат, диск, календарь, группы, рабочие отчеты, бизнес-процессы и другие инструменты.",
  },
  {
    title: "Задачи и проекты",
    content:
      "Помогает работать вместе. Полноценный корпоративный портал компании, который объединяет и упрощает коммуникацию внутри вашей компании. Корпоративный портал содержит всё необходимое для организации совместной работы: чат, диск, календарь, группы, рабочие отчеты, бизнес-процессы и другие инструменты.",
  },
  {
    title: "CRM",
    content:
      "Помогает работать вместе. Полноценный корпоративный портал компании, который объединяет и упрощает коммуникацию внутри вашей компании. Корпоративный портал содержит всё необходимое для организации совместной работы: чат, диск, календарь, группы, рабочие отчеты, бизнес-процессы и другие инструменты.",
  },
  {
    title: "Автоматизация",
    content:
      "Помогает работать вместе. Полноценный корпоративный портал компании, который объединяет и упрощает коммуникацию внутри вашей компании. Корпоративный портал содержит всё необходимое для организации совместной работы: чат, диск, календарь, группы, рабочие отчеты, бизнес-процессы и другие инструменты.",
  },
  {
    title: "Сайты и магазины",
    content:
      "Помогает работать вместе. Полноценный корпоративный портал компании, который объединяет и упрощает коммуникацию внутри вашей компании. Корпоративный портал содержит всё необходимое для организации совместной работы: чат, диск, календарь, группы, рабочие отчеты, бизнес-процессы и другие инструменты.",
  },
];

const title = "Поможем внедрить Битрикс24 CRM в ваш бизнес";
const subtitle =
  "Подбор и внедрение CRM-систем. Интеграция и кастомизация для облачных и коробочных решений на базе Битрикс24 и AmoCRM";
const buttonTitle = "Оставить заявку";
const imageSrc = "/images/imageCRM1.png";
const imageAlt = "Заголовок статьи";

const { data: tariffsBox } = await useAsyncData("tariffbox", () => {
  return $fetch("/api/tariffbox/", { method: "GET" });
});

const { data: tariffsCloud } = await useAsyncData("tariffcloud", () => {
  return $fetch("/api/tariffcloud/", { method: "GET" });
});

const selectedVersion = ref("Облачная версия");
</script>

<template>
  <div class="expertise-crm">
    <ExpertiseHeading
      :breadcrumbItems="breadcrumbItems"
      :title="title"
      :subtitle="subtitle"
      :buttonTitle="buttonTitle"
      :imageSrc="imageSrc"
      :imageAlt="imageAlt"
    />

    <div class="container">
      <section class="expertise-crm__achievements">
        <div class="expertise-crm__achievements-title">
          Наши очивки Битрикс24
        </div>

        <ul class="expertise-crm__achievements-list">
          <li
            v-for="(achievement, index) in achievements"
            class="expertise-crm__achievements-item"
          >
            <img :src="achievement.src" alt="Очивка Битрикс24 " />
          </li>
        </ul>
      </section>
    </div>

    <ExpertiseMenu
      title="Битрикс24 помогает бизнесу работать"
      image="/images/imageCRM8.png"
      :marks="marks"
      :plates="plates"
    />

    <Advantages title="Наши компетенции" :cards="cards" />

    <div class="container">
      <section class="expertise-crm__tariff">
        <div class="expertise-crm__tariff-header">
          <div class="expertise-crm__tariff-title">Тарифы</div>

          <div class="expertise-crm__tariff-subtitle">
            При приобретении лицензионных продуктов
            <span class="custom-standing-yellow">скидка</span> на услуги
            <span class="custom-standing-purple">10%</span>
          </div>
        </div>

        <SelectButtonCustom v-model="selectedVersion" />

        <ul
          class="expertise-crm__tariff-list"
          :class="[
            'expertise-crm__tariff-list',
            { packaged: selectedVersion === 'Коробочная версия' },
          ]"
        >
          <li
            class="expertise-crm__tariff-item"
            v-if="selectedVersion === 'Облачная версия'"
            v-for="(tariff, index) in tariffsCloud"
            :key="index"
          >
            <TariffCard
              :title="tariff.title"
              :subtitle="tariff.subtitle"
              :price="tariff.price"
              :sale="tariff.sale"
              :configurations="tariff.configurations"
            />
          </li>

          <li
            class="expertise-crm__tariff-item"
            v-if="selectedVersion === 'Коробочная версия'"
            v-for="(tariff, index) in tariffsBox"
            :key="index"
          >
            <TariffCard
              :title="tariff.title"
              :subtitle="tariff.subtitle"
              :price="tariff.price"
              :sale="tariff.sale"
              :configurations="tariff.configurations"
              :box="true"
            />
          </li>
        </ul>
      </section>
    </div>

    <BlogUnit title="Награды и сертификаты" article="development" />

    <BlogUnit title="Наши кейсы" article="case" :slider="true" />

    <CustomersUnit />

    <TalkUnit />
  </div>
</template>

<style lang="scss">
@import "~/assets/scss/helpers/fonts-mixin";

.expertise-crm {
  display: flex;
  flex-direction: column;
  padding-top: var(--page-padding);

  .outstaff-advantages__list {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }

  &__achievements {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: var(--unit-margin-y);
  }

  &__tariff-title,
  &__achievements-title {
    @include font-h2;
  }

  &__achievements-title {
    margin-bottom: 100px;
  }

  &__achievements-list {
    display: flex;
    gap: 8px;
    background: var(--color-grey-light);
    padding: 32px;
    border-radius: 32px;
  }

  &__achievements-item {
    transition: transform 0.2s ease-in-out;
    &:hover {
      transform: scale(1.1);
    }
  }

  &__tariff {
    display: flex;
    flex-direction: column;
    margin-bottom: var(--unit-margin-y);
  }

  &__tariff-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 40px;
  }

  &__tariff-subtitle {
    @include font-h5;

    width: 555px;

    .custom-standing-purple {
      @include custom-standing;

      background: var(--color-purple);
      transform: rotate(-0.91deg);
    }

    .custom-standing-yellow {
      @include custom-standing;

      background: var(--color-yellow);
      transform: rotate(0.99deg);
    }
  }

  &__tariff-list {
    width: fit-content;
    height: auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin-top: 100px;
    border-radius: 40px;
    gap: 8px;
  }

  .packaged {
    align-self: center;
    grid-template-columns: repeat(3, 1fr);
  }

  &__tariff-item {
    width: 414px;
    height: auto;
    border-radius: 40px;
    padding: 32px;
    color: var(--color-white);
    border: 1px solid white;

    background-image: url("public/images/first-page-background.png");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
}
</style>
