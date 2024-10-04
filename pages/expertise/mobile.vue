<script setup>
import ExpertiseHeading from "~/components/ExpertisePage/ExpertiseHeading.vue";
import Priority from "~/components/ExpertisePage/Priority.vue";
import BlogUnit from "~/components/BlogPage/BlogUnit.vue";
import Recruiting from "~/components/ExpertisePage/Recruiting.vue";
import CustomersUnit from "~/components/CustomersPage/CustomersUnit.vue";
import TalkUnit from "~/components/TalkPage/TalkUnit.vue";
import Advantages from "~/components/ExpertisePage/Advantages.vue";

const breadcrumbItems = [
  { label: "Назад ко всем услугам", route: "/expertise" },
];

const priorityItems = [
  {
    heading: "Планирование",
    content: "Составим поэтапный план разработки и развития приложения",
  },
  {
    heading: "Дизайн",
    content:
      "Создадим UI/UX-дизайн для приложения на основе карты пути клиента (CJM)",
  },
  {
    heading: "Разработка",
    content:
      "Для кроссплатформенных приложений напишем единый код для iOS и Android",
  },
  {
    heading: "Сборка",
    content:
      "Каждые две недели вы будете получать сборку приложения на согласование",
  },
  {
    heading: "Тестирование",
    content:
      "Пишем понятную документацию для контроля качества и тестирования на всех этапах",
  },
  {
    heading: "запуск",
    content:
      "Выпустим ваше приложение в App Store и Google Play и будем его поддерживать",
  },
];

const cards = [
  {
    src: "/images/imageMobile2.png",
    title: "Экономния до 40%",
    subtitle:
      "Одна команда Flutter разрабочтиков подготовит приложение для Android и IOS",
  },
  {
    src: "/images/imageMobile3.png",
    title: "Опереди конкурентов",
    subtitle:
      "Вывод на рынок Flutter приложения в два раза быстрее нативной разработки",
  },
  {
    src: "/images/imageMobile4.png",
    title: "Быстрый старт",
    subtitle:
      "В короткие сроки создайте MVP продукт и протестируйте его в реальных условиях",
  },
  {
    src: "/images/imageMobile5.png",
    title: "Расширь поток клиентов",
    subtitle: "Приложение написанное на Flutter работает на Android и IOS",
  },
];

const title = "Разработка приложений на Flutter";
const subtitle =
  "Мы создаем кроссплатформенные приложения для мобильных и веб-платформ";
const buttonTitle = "Оставить заявку";
const imageSrc = "/images/imageMobile1.png";
const imageAlt = "Заголовок статьи";
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
    />

    <Advantages :cards="cards" />

    <Priority :subtitle="true" title="Почему мы" :prioritys="priorityItems" />

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
    grid-template-rows: 1fr;
  }

  .outstaff-advantages__item-subtitle {
    margin: 12px 0 57px;
  }
}
</style>
