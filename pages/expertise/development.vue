<script setup>
import DevelopmentSlider from "~/components/ExpertisePage/DevelopmentSlider.vue";
import Technologies from "~/components/ExpertisePage/Technologies.vue";
import ExpertiseHeading from "~/components/ExpertisePage/ExpertiseHeading.vue";
import Priority from "~/components/ExpertisePage/Priority.vue";
import BlogUnit from "~/components/BlogPage/BlogUnit.vue";
import Recruiting from "~/components/ExpertisePage/Recruiting.vue";
import CustomersUnit from "~/components/CustomersPage/CustomersUnit.vue";
import TalkUnit from "~/components/TalkPage/TalkUnit.vue";

const breadcrumbItems = [
  { label: "Назад ко всем услугам", route: "/expertise" },
];

const priorityItems = [
  {
    heading: "Гибкий форматы работы",
    content:
      "Мы предлагаем как классический аутсорсинг и аутстаффинг, так и различные комбинации, оптимальные для вашего бизнеса",
    icon: "one",
  },
  {
    heading: "Эффективные методы разработки",
    content:
      "Вы можете выбрать для себя наиболее подходящую методологию - Scrum или Waterfall",
    icon: "two",
  },
  {
    heading: "Современные технологии",
    content:
      "Мы используем новейшие технологии, такие как Bitrix, VueJs и Laravel",
    icon: "three",
  },
  {
    heading: "Собственный отдел аналитики и дизайна",
    content:
      "Мы делаем продукты, которые соответствуют нуждам наших клиентов и максимально легко используются конечным пользователем",
    icon: "four",
  },
  {
    heading: "Сертификация крупных корпоративных внедрений",
    content:
      "Мы делаем продукты, которые соответствуют нуждам наших клиентов и максимально легко используются конечным пользователем",

    icon: "five",
  },
  {
    heading: "Тестирование на всех этапах разработки",
    content:
      "Улучшение качества конечного продукта за счёт более эффективной работы и использования ресурсов",
    icon: "six",
  },
];

const prioritySub = [
  {
    content1: "Выбрав нашу компанию, вы получаете все преимущества работы с",
    pink: " опытной командой ",
    content2:
      ", которая изо всех сил старается обеспечить ваш бизнес максимальным успехом",
  },
];

const images = [
  {
    src: "/images/imageCaseArticle5.png",
    title: "Интернет-магазины",
    subtitle: "Интернет-магазин «Kamatyres»",
  },
  {
    src: "/images/imageDevelopmentSlider1.png",
    title: "Корпоративные порталы",
    subtitle: "Портал «Личный кабинет застройщиков»",
  },
  {
    src: "/images/imageCase7.png",
    title: "B2B и B2C сервисы",
    subtitle: "Приложение по управлению умным домом «TouchOn»",
  },
  {
    src: "/images/imageDevelopmentSlider2.png",
    title: "Oбучающие платформы",
    subtitle: "Образовательная онлайн-платформа «EnglishVeronika»",
  },
];

const subImages = [
  {
    purple: "Топ-10 ",
    content1:
      " разработчиков интернет-магазинов по версии Рейтинга рунета за 2022 год",
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

const heading = [
  {
    title: "Веб-разработка",
    subtitle:
      "Создаём и развиваем интернет-магазины, B2B/B2C сервисы, обучающие платформы",
    buttonTitle: "Заказать разработку сайта",
    imageSrc: "/images/imageExpertiseDevelopment1.png",
    imageAlt: "Заголовок статьи",
  },
];
</script>

<template>
  <div class="expertise-development">
    <ExpertiseHeading :breadcrumbItems="breadcrumbItems" :heading="heading" />

    <DevelopmentSlider
      :images="images"
      title="Разрабатываем и развиваем"
      :subtitle="subImages"
    />

    <Technologies :technologies="technologies" />

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

    <Recruiting />

    <BlogUnit title="Наши кейсы" article="case" :slider="true" route="/case" />

    <CustomersUnit />

    <div class="container">
      <TalkUnit />
    </div>
  </div>
</template>

<style lang="scss">
.expertise-development {
  display: flex;
  flex-direction: column;
  padding-top: var(--page-padding);
}
</style>
