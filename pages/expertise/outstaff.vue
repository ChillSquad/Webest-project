<script setup>
import ExpertiseHeading from "~/components/ExpertisePage/ExpertiseHeading.vue";
import Advantages from "~/components/ExpertisePage/Advantages.vue";
import StackCard from "~/components/ExpertisePage/StackCard.vue";
import Priority from "~/components/ExpertisePage/Priority.vue";
import Reporting from "~/components/ExpertisePage/Reporting.vue";
import BlogUnit from "~/components/BlogPage/BlogUnit.vue";
import Recruiting from "~/components/ExpertisePage/Recruiting.vue";
import TalkUnit from "~/components/TalkPage/TalkUnit.vue";

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
      "Если заказчику нужно прекратить сотрудничество с аутстафф-партнером, это можно сделать без каких-либо юридических сложностей.",
  },
  {
    heading: "Привлечение персонала для временных проектов",
    content:
      "Это особенно полезно для временных проектов или временной потребности в дополнительных рабочих ресурсах.",
  },
  {
    heading: "Сокращение затрат на отчисления от совокупного ФОТ",
    content:
      "ФОТ (фонд оплаты труда) является значительной частью затрат компании при найме сотрудников.",
  },
  {
    heading: "Сертификация крупных корпоративных внедрений",
    content:
      "Мы делаем продукты, которые соответствуют нуждам наших клиентов и максимально легко используются конечным пользователем",
  },
  {
    heading: "Точечное закрытие позиций",
    content:
      "Аутстаффинг позволяет компаниям быстро и эффективно заполнять вакансии на конкретные позиции.",
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

const firstCard = [
  {
    developer: "PHP Laravel",
    price: "от 1500 ₽ / час",
  },
  {
    developer: "PHP Bitrix",
    price: "от 1500 ₽ / час",
  },
  {
    developer: "PHP Bitrix24",
    price: "от 2000 ₽ / час",
  },
  {
    developer: "Java",
    price: "от 2300 ₽ / час",
  },
  {
    developer: "Node.js",
    price: "от 2200 ₽ / час",
  },
];

const secondCard = [
  {
    developer: "Vue.js",
    price: "от 1900 ₽ / час",
  },
  {
    developer: "React",
    price: "от 1900 ₽ / час",
  },
  {
    developer: "JavaScript",
    price: "от 2300 ₽ / час",
  },
];

const thirdCard = [
  {
    developer: "Android Kotlin",
    price: "от 2200 ₽ / час",
  },
  {
    developer: "Flutter",
    price: "от 2000 ₽ / час",
  },
  {
    developer: "IOS Swift",
    price: "от 2200 ₽ / час",
  },
  {
    developer: "React",
    price: "от 2200 ₽ / час",
  },
];

const fourthCard = [
  {
    developer: "Верстальщик сайтов",
    price: "от 1500 ₽ / час",
  },
  {
    developer: "UI/UX designer",
    price: "от 1500 ₽ / час",
  },
  {
    developer: "QA Тестировщик",
    price: "от 1500 ₽ / час",
  },
  {
    developer: "AQA Тестировщик",
    price: "от 1800 ₽ / час",
  },
  {
    developer: "DevOps",
    price: "от 2000 ₽ / час",
  },
];

const title = "Аутстаф разработчиков, дизайнеров, аналитиков, тестировщиков";
const subtitle =
  "Помогаем быстро усилить команду и расширить штата за счет квалифицированных специалистов";
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
          <li class="expertise-outstaff-stack__item">
            <StackCard
              title="Аутстаффинг Backend-разработчиков / middle"
              :cards="firstCard"
            />
          </li>

          <li class="expertise-outstaff-stack__item">
            <StackCard
              title="Аутстаффинг Frontend-разработчиков / middle"
              :cards="secondCard"
            />
          </li>

          <li class="expertise-outstaff-stack__item">
            <StackCard
              title="Аутстаффинг мобильных разработчиков / middle"
              :cards="thirdCard"
            />
          </li>

          <li class="expertise-outstaff-stack__item">
            <StackCard
              title="Другие специалисты / middle"
              :cards="fourthCard"
            />
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
            <img src="/images/imageExplanation2.png" alt="Изображение статьи" />
            <p>
              Для того, чтобы предварительно ознакомиться с навыками каждого<br />
              специалиста, мы предоставляем полное CV со списком проектов, а<br />
              также ссылки на Git. Все специалисты готовы оперативно<br />
              проходить собеседования. Мы поможем быстро закрыть позиции
            </p>
          </li>
        </ul>
      </div>
    </div>

    <Priority :subtitle="true" title="Почему мы" :prioritys="priorityItems" />

    <Recruiting />

    <Reporting />

    <BlogUnit title="Статьи аутстаф" />

    <TalkUnit />
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
  }
}
</style>
