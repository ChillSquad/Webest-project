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
</script>

<template>
  <div class="company-team">
    <div class="company-team__heading">
      <div class="company-team__title">Команда</div>
      <div class="company-team__subtitle">
        Мы Wébest — входим <span class="custom-standing-blue">в ТОП 10</span>
        разработчиков E-commerce России. Комплексно
        <span class="custom-standing-pink">улучшаем бизнес-процессы</span> наших
        клиентов при помощи IT. Специализируемся на создании и развитии
        e-commerce проектов, B2B- и B2C — сервисов, мобильных приложений,
        корпоративных сайтов для компаний в сфере услуг и производства
      </div>
    </div>

    <Priority
      :subtitle="true"
      title="Почему мы"
      :prioritys="priorityItems"
      :content="prioritySub"
    />

    <BlogUnit article="case" :slider="true" />

    <CustomersUnit />

    <div class="container">
      <TalkUnit />
    </div>
  </div>
</template>
