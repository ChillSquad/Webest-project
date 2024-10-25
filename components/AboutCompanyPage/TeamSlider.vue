<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { EffectCards, Navigation } from "swiper/modules";
import { useSidebarModel } from "~/components/models/sidebar";
import BlogSidebar from "~/components/BlogPage/BlogSidebar.vue";

const { toggleSidebarFormBlog } = useSidebarModel();

import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/navigation";
import "swiper/swiper-bundle.css";

const modules = [EffectCards, Navigation];

const reviews = [
  {
    occupation: "Директолог",
    score: "4,5",
    tags: [
      "Своевременная оплата труда",
      "Удобное расположение работы",
      "Место для парковки",
      "Наличие кухни, места для обеда",
      "Система наставничества",
    ],
    title1: "Что мне нравится в работодателе",
    content1: [
      "Отзывчивое и полностью адекватное руководство!",
      "Отношение к сотрудникам действительно хорошее.",
      "Всегда своевременная выплата ЗП.",
      "Работа удаленно (в моем случае).",
      "Начало рабочего дня с 8:00 по 10:00 МСК.",
      "Огромное количество плюшек для сотрудников",
    ],
    title2: "Что можно было бы улучшить",
    content2: [
      "График работы. Он довольно строгий. Раньше был более гибкий. Возможно, не всем это подходит, идет усреднение. В этом есть положительные стороны и отрицательные. Т.к. есть отрицательные, значит можно улучшить. Т.к. много плюсов, минусы не приходят в голову. Разве что.. кофемашину бы поменять.",
      "Т.к. много плюсов, минусы не приходят в голову. Разве что.. кофемашину бы поменять.",
      "Т.к. много плюсов, минусы не приходят в голову. Разве что.. кофемашину бы поменять.",
    ],
    ratings: [
      {
        title: "Условия труда",
        heart: ["heart", "heart", "heart", "heart", "heart-empty"],
      },
      {
        title: "Коллектив",
        heart: ["heart", "heart", "heart", "heart", "heart-empty"],
      },
      {
        title: "Руководство",
        heart: ["heart", "heart", "heart", "heart", "heart-empty"],
      },
      {
        title: "Возможности роста",
        heart: ["heart", "heart", "heart", "heart", "heart-empty"],
      },
      {
        title: "Условия для отдыха",
        heart: ["heart", "heart", "heart", "heart", "heart-empty"],
      },
      {
        title: "Уровень дохода",
        heart: ["heart", "heart", "heart", "heart", "heart-empty"],
      },
    ],
    date: "Январь 2023",
  },
  {
    big: true,
    occupation: "Директолог",
    score: "4,5",
    tags: [
      "Своевременная оплата труда",
      "Удобное расположение работы",
      "Место для парковки",
      "Наличие кухни, места для обеда",
      "Система наставничества",
    ],
    title1: "Что мне нравится в работодателе",
    content1: [
      "Доброжелательность руководства. Кнута практически нет, только пряники. Правда пряники не всегда, но всё по делу.",
      "Отзывчивость. Человеческое отношение проявляется в том, что, если куда-то нужно, отпустят, по болезни, срочные дела и т.д.",
      "Доверие.",
      "Близость от проживания. Удачно выбрали офис под моё место жительства:)",
      "Нет напряженности. Поэтому можно спокойно работать и воплощать свои идеи и идеи клиентов.",
      "Всегда своевременная выплата ЗП.",
    ],
    title2: "Что можно было бы улучшить",
    content2: [
      "График работы. Он довольно строгий. Раньше был более гибкий. Возможно, не всем это подходит, идет усреднение. В этом есть положительные стороны и отрицательные. Т.к. есть отрицательные, значит можно улучшить. Т.к. много плюсов, минусы не приходят в голову. Разве что.. кофемашину бы поменять.",
      "Т.к. много плюсов, минусы не приходят в голову. Разве что.. кофемашину бы поменять.",
      "Т.к. много плюсов, минусы не приходят в голову. Разве что.. кофемашину бы поменять.",
    ],
    ratings: [
      {
        title: "Условия труда",
        heart: ["heart", "heart", "heart", "heart", "heart-empty"],
      },
      {
        title: "Коллектив",
        heart: ["heart", "heart", "heart", "heart", "heart-empty"],
      },
      {
        title: "Руководство",
        heart: ["heart", "heart", "heart", "heart", "heart-empty"],
      },
      {
        title: "Возможности роста",
        heart: ["heart", "heart", "heart", "heart", "heart-empty"],
      },
      {
        title: "Условия для отдыха",
        heart: ["heart", "heart", "heart", "heart", "heart-empty"],
      },
      {
        title: "Уровень дохода",
        heart: ["heart", "heart", "heart", "heart", "heart-empty"],
      },
    ],
    date: "Январь 2023",
  },
  {
    occupation: "Директолог",
    score: "4,5",
    tags: [
      "Своевременная оплата труда",
      "Удобное расположение работы",
      "Место для парковки",
      "Наличие кухни, места для обеда",
      "Система наставничества",
    ],
    title1: "Что мне нравится в работодателе",
    content1: [
      "Отзывчивое и полностью адекватное руководство!",
      "Отношение к сотрудникам действительно хорошее.",
      "Всегда своевременная выплата ЗП.",
      "Работа удаленно (в моем случае).",
      "Начало рабочего дня с 8:00 по 10:00 МСК.",
      "Огромное количество плюшек для сотрудников",
    ],
    title2: "Что можно было бы улучшить",
    content2: [
      "График работы. Он довольно строгий. Раньше был более гибкий. Возможно, не всем это подходит, идет усреднение. В этом есть положительные стороны и отрицательные. Т.к. есть отрицательные, значит можно улучшить. Т.к. много плюсов, минусы не приходят в голову. Разве что.. кофемашину бы поменять.",
      "Т.к. много плюсов, минусы не приходят в голову. Разве что.. кофемашину бы поменять.",
      "Т.к. много плюсов, минусы не приходят в голову. Разве что.. кофемашину бы поменять.",
    ],
    ratings: [
      {
        title: "Условия труда",
        heart: ["heart", "heart", "heart", "heart", "heart-empty"],
      },
      {
        title: "Коллектив",
        heart: ["heart", "heart", "heart", "heart", "heart-empty"],
      },
      {
        title: "Руководство",
        heart: ["heart", "heart", "heart", "heart", "heart-empty"],
      },
      {
        title: "Возможности роста",
        heart: ["heart", "heart", "heart", "heart", "heart-empty"],
      },
      {
        title: "Условия для отдыха",
        heart: ["heart", "heart", "heart", "heart", "heart-empty"],
      },
      {
        title: "Уровень дохода",
        heart: ["heart", "heart", "heart", "heart", "heart-empty"],
      },
    ],
    date: "Январь 2023",
  },
];

const isSliderReady = ref(false);
const buttonPrev = ref();
const buttonNext = ref();
const currentIndex = ref(0);
const count = computed(() => reviews.length);

onMounted(() => {
  isSliderReady.value = true;
});

const updateCurrentIndex = (swiper) => {
  currentIndex.value = swiper.realIndex;
};
</script>

<template>
  <div class="team-slider">
    <swiper
      v-if="isSliderReady"
      :loop="true"
      direction="horizontal"
      :effect="'cards'"
      :grabCursor="true"
      :modules="modules"
      :navigation="{ prevEl: buttonNext, nextEl: buttonPrev }"
      @slideChange="updateCurrentIndex"
    >
      <swiper-slide v-for="(review, index) in reviews" :key="index">
        <article class="team-slider__slide">
          <div class="team-slider__slide-heading">
            <p class="team-slider__slide-heading-title">
              {{ review.occupation }}
            </p>
            <p class="team-slider__slide-heading-score">{{ review.score }}</p>
          </div>

          <div class="team-slider__slide-review">
            <p class="team-slider__slide-review-title">{{ review.title1 }}</p>
            <ol class="team-slider__slide-review-list">
              <li
                class="team-slider__slide-review-item"
                v-for="(item, index) in review.content1"
                :key="index"
              >
                <p>{{ index + 1 }}</p>
                {{ item }}
              </li>
            </ol>
          </div>

          <div class="team-slider__slide-review toMobile" v-if="!review.big">
            <p class="team-slider__slide-review-title">{{ review.title2 }}</p>
            <ol class="team-slider__slide-review-list">
              <li
                class="team-slider__slide-review-item"
                v-for="(item, index) in review.content2"
                :key="index"
              >
                <p v-if="index === 0">{{ index + 1 }}</p>

                <span
                  class="team-slider__slide-review-item-crop"
                  v-if="index === 0"
                  >{{ item }}</span
                >
              </li>
            </ol>
          </div>

          <div class="team-slider__slide-footer">
            <button
              class="team-slider__slide-footer-button"
              @click="toggleSidebarFormBlog"
            >
              Весь отзыв
            </button>
            <p class="team-slider__slide-footer-date">{{ review.date }}</p>
          </div>
        </article>
      </swiper-slide>
    </swiper>

    <button class="slide-button icon-slide-to-left" ref="buttonPrev"></button>
    <button class="slide-button icon-slide-to-right" ref="buttonNext"></button>

    <div class="article-slider-mobile__bar">
      <div
        class="article-slider-mobile__progress"
        :style="{ width: ((currentIndex + 1) / count) * 100 + '%' }"
      ></div>
    </div>
    <div class="pagination-wrapper">
      <div class="article-slider-mobile__pagination">
        0{{ currentIndex + 1 }}-0{{ count }}
      </div>
    </div>
  </div>

  <BlogSidebar :reviews="reviews" :team="true" />
</template>

<style lang="scss">
@import "~/assets/scss/helpers/mixin";
@import "~/assets/scss/helpers/fonts-mixin";

.team-slider {
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 2;
  position: relative;

  &__slide {
    width: 100%;
    height: 580px;

    display: flex;
    flex-direction: column;
    gap: 32px;

    &-heading {
      display: flex;
      justify-content: space-between;

      &-title {
        @include font-h4;
      }

      &-score {
        @include flex-center;
        @include font-text-2;

        width: 36px;
        height: 36px;
        color: #fff;
        background-color: var(--color-blue);
        border-radius: 8px;
      }
    }

    &-review {
      &-title {
        @include font-h7;

        margin-bottom: 16px;
      }

      &-list {
        @include font-text-2;

        display: flex;
        flex-direction: column;
        gap: 8px;
        list-style-type: none;
      }

      &-item {
        display: flex;

        p {
          color: var(--color-blue);
          margin-right: 12px;
        }

        &-crop {
          display: -webkit-box;
          line-clamp: 3;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }

    &-footer {
      position: absolute;
      bottom: 32px;
      right: 32px;
      left: 32px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      &-button {
        @include font-button-2;

        background-color: var(--color-grey-light);
        padding: 9px 16px;
        border-radius: 12px;
        border: none;
        outline: none;
        transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
        cursor: pointer;

        &:hover {
          color: #fff;
          background-color: var(--color-blue);
        }
      }

      &-date {
        @include font-text-5;

        color: var(--color-dark-blue);
      }
    }
  }

  .swiper {
    width: 554px;
  }

  .swiper-slide {
    box-shadow: 0 0 50px 5px var(--shadow-card);
    border-radius: var(--border-radius-40);
    padding: var(--padding-card);
    background-color: #fff;
  }

  .icon-slide-to-left {
    z-index: 0;
    position: absolute;
    top: 50%;
    left: 24px;
    transform: translate(0%, -50%);
  }

  .icon-slide-to-right {
    z-index: 0;
    position: absolute;
    top: 50%;
    right: 24px;
    transform: translate(0%, -50%);
  }

  .pagination-wrapper {
    width: 554px;

    .article-slider-mobile__pagination {
      padding: 0;
    }
  }

  .article-slider-mobile__bar {
    max-width: 554px;
    margin-top: 40px;
  }

  @media (max-width: 475px) {
    &__slide {
      height: 468px;
      gap: 24px;
    }

    &__slide-footer {
      position: absolute;
      bottom: 20px;
      right: 20px;
      left: 20px;
    }

    &__slide-review-list {
      gap: 8px;
    }

    .toMobile {
      display: none;
    }

    .swiper {
      width: 300px;
      height: 508px;
    }

    .pagination-wrapper {
      width: 328px;
    }

    .article-slider-mobile__bar {
      width: 328px;
    }

    .icon-slide-to-left {
      display: none;
    }

    .icon-slide-to-right {
      display: none;
    }
  }
}
</style>
