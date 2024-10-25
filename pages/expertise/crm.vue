<script setup>
import ExpertiseHeading from "~/components/ExpertisePage/ExpertiseHeading.vue";
import BlogUnit from "~/components/BlogPage/BlogUnit.vue";
import CustomersUnit from "~/components/CustomersPage/CustomersUnit.vue";
import TalkUnit from "~/components/TalkPage/TalkUnit.vue";
import Advantages from "~/components/ExpertisePage/Advantages.vue";
import ExpertiseMenu from "~/components/ExpertisePage/ExpertiseMenu.vue";
import SelectButtonCustom from "~/components/UI-kit/SelectButtonCustom.vue";
import TariffCard from "~/components/ExpertisePage/TariffCard.vue";
import GradientButton from "~/components/UI-kit/GradientButton.vue";
import TariffSidebar from "~/components/ExpertisePage/TariffSidebar.vue";

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

const plates = [
  {
    title: "Совместная работа",
    content:
      "Помогает работать вместе. Полноценный корпоративный портал компании, который объединяет и упрощает коммуникацию внутри вашей компании. Корпоративный портал содержит всё необходимое для организации совместной работы: чат, диск, календарь, группы, рабочие отчеты, бизнес-процессы и другие инструменты.",
    image: "/images/imageCRM8.png",
    marks: [
      "Чаты и Видеозвонки",
      "Соцсеть компании",
      "CoРilot",
      "Календари",
      "Документы онлайн",
      "Диск",
      "Почта",
      "HR",
    ],
  },
  {
    title: "Задачи и проекты",
    content:
      "В Битрикс24 задачи ставят как коллегам, так и самому себе. Смена ответственных, изменение сроков фиксируются в истории задачи. Счетчики помогают не забыть о сроках, а при нарушении сроков руководитель сразу получит сообщение об этом.",
    image: "/images/imageCRM9.png",
    marks: [
      "Задачи",
      "Проекты",
      "Диаграмма Ганта",
      "Канбан",
      "Учет времени",
      "Обсуждения в задачах",
      "Фокусировка внимания",
      "Интегрировано с CRM",
    ],
  },
  {
    title: "CRM",
    content:
      "CRM — система управления продажами и коммуникациями с клиентами. Ни одно обращение клиента не останется незамеченным. CRM сама ведет клиента по воронке: от холодного контакта до успешной сделки.",
    image: "/images/imageCRM10.png",
    marks: [
      "Счета, Компреды",
      "Оплата и доставка",
      "Автоматизация продаж",
      "Роботы и триггеры",
      "Контакт-центр",
      "Маркетинг",
      "Сквозная аналитика",
      "Лиды, Сделки, Контакты, Компании",
    ],
  },
  {
    title: "Автоматизация",
    content:
      "Автоматизируйте всё, что мешает двигаться вперед — рутинные задачи, работу со сделками, согласование договоров, оплату счетов, отчетность. В Битрикс24 есть инструменты и для простых триггерных рассылок, и для полной автоматизации рабочего места. И всё это запускается без программирования.",
    image: "/images/imageCRM11.png",
    marks: [
      "Бизнес-процессы",
      "Смарт-процессы",
      "Роботизация бизнеса RPA",
      "Роботы и триггеры",
      "Автоматизация продаж и CRM",
      "Автоматизация задач",
      "Цифровые рабочие места",
      "Простые процессы",
    ],
  },
  {
    title: "Сайты и магазины",
    content:
      "Сайты и лендинги должны быть не просто красивыми, которые легко создать самому и бесплатно. Главная задача сайта — приводить клиентов. Сайты в Битрикс24 создаются, чтобы продавать! Интернет-магазин легко создать самим в простом конструкторе. Каждый заказ, каждый контакт клиента тут же окажется в CRM.",
    image: "/images/imageCRM12.png",
    marks: [
      "Бесплатно и просто",
      "Конструктор сайтов",
      "Интернет-магазин",
      "Формы",
      "Виджеты",
      "CRM в подарок",
      "Интеграция с 1С",
      "1500+ шаблонов",
    ],
  },
];

const heading = ref([
  {
    title: "Поможем внедрить Битрикс24 CRM в ваш бизнес",
    subtitle:
      "Подбор и внедрение CRM-систем. Интеграция и кастомизация для облачных и коробочных решений на базе Битрикс24 и AmoCRM",
    buttonTitle: "Оставить заявку",
    imageSrc: "/images/imageCRM1.png",
    imageAlt: "Заголовок статьи",
    imageCaption:
      "Топ 15 CRM интегераторов по версии Рейтинга рунета за 2022 год",
  },
]);

const backgroundImages = [
  "/images/imageTariff1.png",
  "/images/imageTariff2.png",
  "/images/imageTariff3.png",
  "/images/imageTariff4.png",
  "/images/imageTariff5.png",
  "/images/imageTariff6.png",
  "/images/imageTariff7.png",
  "/images/imageTariff8.png",
];

const updateImageSrc = () => {
  if (heading.value.length > 0) {
    if (window.innerWidth <= 475) {
      heading.value[0].imageSrc = "/images/imageCRM1Mobile.png";
    } else {
      heading.value[0].imageSrc = "/images/imageCRM1.png";
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

const openBitrix24 = () => {
  window.open("https://www.bitrix24.ru/partners/partner/1420148/", "_blank");
};

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
    <ExpertiseHeading :breadcrumbItems="breadcrumbItems" :heading="heading" />

    <div class="container">
      <section class="expertise-crm__achievements">
        <div class="expertise-crm__achievements-title">
          Наши ачивки Битрикс24
        </div>

        <GradientButton @click="openBitrix24" title="Карточка партнера" />

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
      :plates="plates"
    />

    <Advantages title="Наши компетенции" :cards="cards" />

    <section class="expertise-crm__tariff">
      <div class="container">
        <div class="expertise-crm__tariff-header">
          <div class="expertise-crm__tariff-title">Тарифы</div>

          <div class="expertise-crm__tariff-subtitle">
            При приобретении лицензионных продуктов
            <span class="custom-standing-yellow">скидка</span> на услуги
            <span class="custom-standing-purple">10%</span>
          </div>
        </div>

        <SelectButtonCustom v-model="selectedVersion" />
      </div>

      <section
        :class="[
          'expertise-crm__tariff-table',
          { packaged: selectedVersion === 'Коробочная версия' },
        ]"
      >
        <div
          :class="[
            'expertise-crm__tariff-list',
            { packaged: selectedVersion === 'Коробочная версия' },
          ]"
        >
          <article
            class="expertise-crm__tariff-item"
            v-if="selectedVersion === 'Облачная версия'"
            v-for="(tariff, index) in tariffsCloud"
            :key="index"
            :style="{
              backgroundImage: `url(${
                backgroundImages[index % backgroundImages.length]
              })`,
            }"
          >
            <TariffCard
              :title="tariff.title"
              :subtitle="tariff.subtitle"
              :price="tariff.price"
              :sale="tariff.sale"
              :configurations="tariff.configurations"
            />
          </article>

          <article
            class="expertise-crm__tariff-item"
            v-if="selectedVersion === 'Коробочная версия'"
            v-for="(tariff, index) in tariffsBox"
            :key="index"
            :style="{
              backgroundImage: `url(${
                backgroundImages[index % backgroundImages.length]
              })`,
            }"
          >
            <TariffCard
              :title="tariff.title"
              :subtitle="tariff.subtitle"
              :price="tariff.price"
              :sale="tariff.sale"
              :configurations="tariff.configurations"
              :box="true"
            />
          </article>
        </div>
      </section>

      <TariffSidebar />
    </section>

    <BlogUnit
      title="Награды и сертификаты"
      article="development"
      :arrow="false"
    />

    <BlogUnit title="Наши кейсы" article="case" :slider="true" route="/case" />

    <CustomersUnit />

    <div class="container">
      <TalkUnit />
    </div>
  </div>
</template>

<style lang="scss">
@import "~/assets/scss/helpers/fonts-mixin";

.expertise-crm {
  display: flex;
  flex-direction: column;
  padding-top: var(--page-padding);

  &__achievements {
    display: flex;
    flex-direction: column;
    gap: 40px;
    align-items: center;
    margin-bottom: var(--unit-margin-y);
  }

  &__tariff-title,
  &__achievements-title {
    @include font-h2;
  }

  &__achievements-title {
    text-align: center;
  }

  &__achievements-list {
    display: flex;
    gap: 8px;
    background: var(--color-grey-light);
    padding: var(--padding-card);
    border-radius: 32px;
  }

  &__achievements-item {
    display: flex;
    transition: transform 0.2s ease-in-out;

    &:hover {
      transform: scale(1.1);
    }
  }

  &__tariff {
    display: flex;
    flex-direction: column;
    margin-bottom: var(--unit-margin-y);

    .container {
      display: flex;
      flex-direction: column;
    }
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
  }

  &__tariff-table {
    overflow: hidden;
  }

  &__tariff-list {
    width: fit-content;
    height: auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin-top: 100px;
    gap: 8px;
    padding: var(--swiper-padding);
  }

  .packaged {
    align-self: center;
    grid-template-columns: repeat(3, 1fr);
  }

  &__tariff-item {
    width: 414px;
    height: auto;
    border-radius: var(--border-radius-40);
    padding: var(--padding-card);
    color: #fff;
    background-size: cover;
    background-position: center;
  }

  .outstaff-advantages__list {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }

  .outstaff-advantages__item {
    min-width: 100%;
    min-height: 372px;
  }

  .expertise-menu__item {
    max-height: 97px;

    &.active {
      max-height: 252px;
    }
  }

  .expertise-menu__item-aside {
    width: 872px;
    height: 668px;
    background: #fff;
  }

  .expertise-menu__item-image {
    max-width: 664px;
    position: absolute;
    bottom: 0;
    right: 0;
  }

  @media (max-width: 475px) {
    &__achievements-list {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4px;
    }

    &__achievements-item {
      img {
        max-width: 144px;
        max-height: 43px;
        border-radius: 16px;
      }
    }

    &__tariff-header {
      flex-direction: column;
      gap: 20px;
      align-items: start;
    }

    &__tariff-subtitle {
      max-width: 328px;
    }

    &__tariff-table {
      overflow-x: auto;

      &::-webkit-scrollbar {
        display: none;
      }
    }

    &__tariff-list {
      display: flex;
      margin-top: 40px;
    }

    &__tariff-item {
      max-width: 300px;
      height: auto;
      border-radius: 32px;
    }

    .packaged {
      align-self: initial;
      grid-template-columns: repeat(3, 1fr);
    }

    .expertise-menu__item {
      max-height: 60px;

      &.active {
        max-height: 280px;
      }
    }

    .expertise-menu__item-aside {
      width: 100%;
      height: 490px;
      background: #fff;
    }

    .expertise-menu__item-image {
      width: 315px;
      position: absolute;
      bottom: 0;
      right: 0;
    }
  }
}
</style>
