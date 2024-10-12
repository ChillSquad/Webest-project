<script setup>
import ExpertiseHeading from "~/components/ExpertisePage/ExpertiseHeading.vue";
import Advantages from "~/components/ExpertisePage/Advantages.vue";
import StackCard from "~/components/ExpertisePage/StackCard.vue";
import Priority from "~/components/ExpertisePage/Priority.vue";
import Reporting from "~/components/ExpertisePage/Reporting.vue";
import BlogUnit from "~/components/BlogPage/BlogUnit.vue";
import Recruiting from "~/components/ExpertisePage/Recruiting.vue";
import TalkUnit from "~/components/TalkPage/TalkUnit.vue";

import { ref, onMounted } from "vue";

const listItems = ref([]);

const handleIntersection = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
};

onMounted(() => {
  const observer = new IntersectionObserver(handleIntersection, {
    threshold: 0.1,
  });

  listItems.value.forEach((item) => {
    observer.observe(item);
  });
});

const breadcrumbItems = [
  { label: "Назад ко всем услугам", route: "/expertise" },
];

const priorityItems = [
  {
    heading: "Поиск и найм специалистов",
    content:
      "Отсутствие необходимости поиска специалистов, мы сделаем это за вас.",
  },
  {
    heading: "Отсутствие проблем при увольнении сотрудника",
    content:
      "Если заказчику нужно прекратить сотрудничество с аутстафф-партнером, это можно сделать без юридических сложностей.",
  },
  {
    heading: "Привлечение персонала для временных проектов",
    content:
      "Это полезно для временных проектов или временной потребности в дополнительных ресурсах.",
  },
  {
    heading: "Сокращение затрат на отчисления от совокупного ФОТ",
    content:
      "ФОТ является значительной частью затрат компании при найме сотрудников.",
  },
  {
    heading: "Сертификация крупных корпоративных внедрений",
    content:
      "Мы делаем продукты, которые соответствуют нуждам клиентов и легко используются конечным пользователем.",
  },
  {
    heading: "Точечное закрытие позиций",
    content:
      "Аутстаффинг позволяет компаниям быстро заполнять вакансии на конкретные позиции.",
  },
];

const cards = [
  {
    src: "/images/imageAdvantages1.png",
    title: "Многолетний опыт работы с проектами",
  },
  {
    src: "/images/imageAdvantages3.png",
    title: "Поможем быстро и точечно закрыть позицию",
  },
  {
    src: "/images/imageAdvantages5.png",
    title: "Готовы к техническим собеседованиям в любое время",
    tall: true,
  },
  {
    src: "/images/imageAdvantages2.png",
    title: "Вся работа с документами остается на нас",
  },
  {
    src: "/images/imageAdvantages4.png",
    title: "Работа с НДС и без НДС",
  },
];

const stackCards = [
  {
    title: "Аутстаффинг Backend-разработчиков / middle",
    cards: [
      { developer: "PHP Laravel", price: "от 1500 ₽ / час" },
      { developer: "PHP Bitrix", price: "от 1500 ₽ / час" },
      { developer: "PHP Bitrix24", price: "от 2000 ₽ / час" },
      { developer: "Java", price: "от 2300 ₽ / час" },
      { developer: "Node.js", price: "от 2200 ₽ / час" },
    ],
  },
  {
    title: "Аутстаффинг Frontend-разработчиков / middle",
    cards: [
      { developer: "Vue.js", price: "от 1900 ₽ / час" },
      { developer: "React", price: "от 1900 ₽ / час" },
      { developer: "JavaScript", price: "от 2300 ₽ / час" },
    ],
  },
  {
    title: "Аутстаффинг мобильных разработчиков / middle",
    cards: [
      { developer: "Android Kotlin", price: "от 2200 ₽ / час" },
      { developer: "Flutter", price: "от 2000 ₽ / час" },
      { developer: "IOS Swift", price: "от 2200 ₽ / час" },
      { developer: "React", price: "от 2200 ₽ / час" },
    ],
  },
  {
    title: "Другие специалисты / middle",
    cards: [
      { developer: "Верстальщик сайтов", price: "от 1500 ₽ / час" },
      { developer: "UI/UX designer", price: "от 1500 ₽ / час" },
      { developer: "QA Тестировщик", price: "от 1500 ₽ / час" },
      { developer: "AQA Тестировщик", price: "от 1800 ₽ / час" },
      { developer: "DevOps", price: "от 2000 ₽ / час" },
    ],
  },
];

const reports = [
  {
    heading:
      "Мы ведем учет времени по задачам на проекте, который можем предоставить в любой момент.",
  },
  { heading: "Вы можете обратиться к специалисту напрямую." },
  {
    heading:
      "При необходимости можем выделить руководителя проекта и тестировщиков.",
  },
];

const title = "Аутстаф разработчиков, дизайнеров, аналитиков, тестировщиков";
const subtitle =
  "Помогаем быстро усилить команду и расширить штат за счет квалифицированных специалистов";
const buttonTitle = "Оставить заявку";
const imageSrc = "/images/imageExpertiseOutstaff1.png";
const imageAlt = "Заголовок статьи";
</script>

<template>
  <div class="expertise-outstaff">
    <ExpertiseHeading
      :breadcrumbItems="breadcrumbItems"
      :title="title"
      :subtitle="subtitle"
      :buttonTitle="buttonTitle"
      :imageSrc="imageSrc"
      :imageAlt="imageAlt"
    />

    <Advantages :cards="cards" />

    <div class="container">
      <div class="expertise-outstaff-stack">
        <div class="expertise-outstaff-stack__heading">
          <div class="expertise-outstaff-stack__title">
            Широкий стек разработчиков
          </div>

          <div class="expertise-outstaff-stack__subtitle">
            Готовы прямо сейчас оперативно
            <span class="custom-standing-yellow">усилить</span> ваши
            <span class="custom-standing-purple">команды</span>
          </div>
        </div>

        <ul class="expertise-outstaff-stack__list">
          <li
            v-for="(card, index) in stackCards"
            :key="index"
            class="expertise-outstaff-stack__item"
            ref="listItems"
          >
            <StackCard :title="card.title" :cards="card.cards" />
          </li>
        </ul>
      </div>

      <div class="expertise-outstaff-explanation">
        <div class="expertise-outstaff-explanation__title">
          Как работает аутстаф?
        </div>

        <ul class="expertise-outstaff-explanation__list">
          <li class="expertise-outstaff-explanation__item">
            <p>
              Мы готовы предоставить it-специалистов из <br />
              штата нашей компании, для реализации задач <br />
              на различных проектах
            </p>

            <img src="/images/imageExplanation1.png" alt="Изображение статьи" />
          </li>

          <li class="expertise-outstaff-explanation__item">
            <img
              class="expertise-outstaff-explanation__image"
              src="/images/imageExplanation2.png"
              alt="Изображение статьи"
            />

            <p>
              Для того, чтобы предварительно ознакомиться с навыками каждого<br />
              специалиста, мы предоставляем полное CV со списком проектов, а<br />
              также ссылки на Git. Все специалисты готовы оперативно<br />
              проходить собеседования. Мы поможем быстро закрыть позиции
            </p>

            <img
              class="expertise-outstaff-explanation__image"
              src="/images/imageExplanation2.png"
              alt="Изображение статьи"
            />
          </li>
        </ul>
      </div>
    </div>

    <Priority
      :subtitle="false"
      title="Выгоды аутстафа"
      :prioritys="priorityItems"
    />

    <Recruiting />

    <Reporting :reports="reports" title="Отчетность" />

    <BlogUnit title="Статьи аутстаф" :arrow="false" />

    <div class="container">
      <TalkUnit />
    </div>
  </div>
</template>

<style lang="scss">
@import "~/assets/scss/helpers/fonts-mixin";

.expertise-outstaff {
  display: flex;
  flex-direction: column;
  padding-top: var(--page-padding);

  .outstaff-advantages__list {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }

  .outstaff-advantages__item-subtitle {
    margin-bottom: 44px;
  }

  @media (max-width: 360px) {
    overflow-x: hidden;

    .outstaff-advantages__item {
      height: 300px;
    }
  }
}

.expertise-outstaff-stack {
  margin-bottom: var(--unit-margin-y);

  &__heading {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 100px;
  }

  &__title {
    @include font-h2;
  }

  &__subtitle {
    @include font-h5;

    .custom-standing-purple {
      @include custom-standing;

      background: var(--color-purple);
      transform: rotate(2deg);
    }

    .custom-standing-yellow {
      @include custom-standing;

      background: var(--color-yellow);
      transform: rotate(-1.91deg);
    }
  }

  &__list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    box-shadow: 0 0 50px 5px var(--shadow-card);
    background-color: rgba(235, 238, 242, 0.5);
    border-radius: 40px;
    gap: 8px;
  }

  &__item {
    background: var(--color-white);
    padding: 32px;
    border-radius: 40px;
  }

  @media (max-width: 360px) {
    &__heading {
      flex-direction: column;
      margin-bottom: 40px;
      gap: 24px;
    }

    &__list {
      grid-template-columns: 1fr;
      grid-template-rows: repeat(4, min-content);
    }

    &__item {
      padding: 16px;
      border-radius: 24px;
      opacity: 0;
      transform: translateY(50px);
      transition: opacity 0.5s ease-out, transform 0.5s ease-out;

      &.visible {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }
}

.expertise-outstaff-explanation {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--unit-margin-y);

  &__title {
    @include font-h2;

    margin-bottom: 100px;
  }

  &__list {
    display: flex;
    gap: 40px;
  }

  &__item {
    @include font-text-1;

    display: flex;
    align-items: center;
    justify-content: start;
    flex-direction: column;
    gap: 40px;

    &:first-child {
      @include font-h5;

      align-items: end;
    }

    img {
      border-radius: 32px;
    }
  }

  &__image {
    &:first-child {
      display: block;
    }

    &:last-child {
      display: none;
    }
  }

  @media (max-width: 360px) {
    &__title {
      margin-bottom: 40px;
      text-align: center;
    }

    &__list {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    &__item {
      font-size: 17px;
      line-height: 23.8px;
      gap: 20px;

      img {
        max-width: 328px;
        height: 219px;
      }

      br {
        display: none;
      }
    }

    &__image {
      &:first-child {
        display: none;
      }

      &:last-child {
        display: block;
      }
    }
  }
}
</style>
