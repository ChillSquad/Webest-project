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
  },
  {
    heading: "Эффективные методы разработки",
    content:
      "Вы можете выбрать для себя наиболее подходящую методологию - Scrum или Waterfall",
  },
  {
    heading: "Современные технологии",
    content:
      "Мы используем новейшие технологии, такие как Bitrix, VueJs и Laravel",
  },
  {
    heading: "Собственный отдел аналитики и дизайна",
    content:
      "Мы делаем продукты, которые соответствуют нуждам наших клиентов и максимально легко используются конечным пользователем",
  },
  {
    heading: "Тестирование на всех этапах разработки",
    content:
      "Улучшение качества конечного продукта за счёт более эффективной работы и использования ресурсов",
  },
  {
    heading: "Сертификация крупных корпоративных внедрений",
    content:
      "Мы делаем продукты, которые соответствуют нуждам наших клиентов и максимально легко используются конечным пользователем",
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

const title = "Веб-разработка";
const subtitle =
  "Создаём и развиваем интернет-магазины, B2B/B2C сервисы, обучающие платформы";
const buttonTitle = "Заказать разработку сайта";
const imageSrc = "/images/imageExpertiseDevelopment1.png";
const imageAlt = "Заголовок статьи";
const imageCaption =
  "В Топ-10 разработчиков интернет-магазинов по версии Рейтинга рунета за 2022 год";
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

    <DevelopmentSlider :images="images" title="Разрабатываем и развиваем" />

    <Technologies :technologies="technologies" />

    <Priority
      :subtitle="true"
      title="Почему мы"
      :prioritys="priorityItems"
      :content="prioritySub"
    />

    <BlogUnit title="Награды и сертификаты" article="development" />

    <Recruiting />

    <BlogUnit title="Наши кейсы" article="case" :slider="true" />

    <CustomersUnit />

    <div class="container">
      <TalkUnit />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.expertise-development {
  display: flex;
  flex-direction: column;
  padding-top: var(--page-padding);
}
</style>
