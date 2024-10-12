<script setup>
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

defineProps({
  questions: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <section class="expertise-question">
    <div class="container">
      <div class="expertise-question__content">
        <div class="expertise-question__heading">
          вопросы? ответы <span>→</span> <span>↓</span>
        </div>

        <ul class="expertise-question__list">
          <li
            v-for="(question, index) in questions"
            class="expertise-question__item"
            ref="listItems"
          >
            <p class="expertise-question__item-numbering">
              Вопрос №{{ index + 1 }}
            </p>

            <p class="expertise-question__item-title">
              {{ question.title }}
            </p>

            <p class="expertise-question__item-subtitle">
              {{ question.content }}
            </p>

            <p class="icon-marker" v-for="(content, index) in question.marks">
              {{ content }}
            </p>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import "~/assets/scss/helpers/fonts-mixin";

.expertise-question {
  margin-bottom: var(--unit-margin-y);

  &__content {
    height: max-content;
    display: flex;
    gap: 8px;
  }

  &__heading {
    @include font-h2;

    width: 50%;
    position: sticky;
    top: 5%;
    align-self: flex-start;

    span {
      &:first-child {
        display: inline-block;
      }

      &:last-child {
        display: none;
      }
    }
  }

  &__list {
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  &__item {
    max-height: max-content;
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 32px;
    background: var(--color-grey-light);
    transition: background 0.3s ease-in-out, max-height 0.6s ease-in-out;
    overflow: hidden;
    border-radius: 40px;
    opacity: 0;
    transform: translateY(50px);
    transition: opacity 0.5s ease-out, transform 0.5s ease-out;

    &.visible {
      opacity: 1;
      transform: translateY(0);
    }
  }

  &__item-numbering {
    @include font-text-6;

    color: var(--color-blue);
    font-family: var(--ff-gilroy-medium);
  }

  &__item-title {
    @include font-h5;

    font-family: var(--ff-montserrat-bold);
    text-transform: uppercase;
    width: 100%;
    display: flex;
    justify-content: space-between;
    transition: color 0.3s ease-in-out;
  }

  &__item-subtitle {
    @include font-text-2;
  }

  .icon-marker {
    @include font-text-2;

    display: flex;
    align-items: first baseline;
    margin-top: 8px;

    &:before {
      content: "\004E";
      font-size: 12px;
      color: var(--color-blue);
      padding-right: 8px;
    }
  }

  @media (max-width: 360px) {
    &__content {
      flex-direction: column;
    }

    &__heading {
      width: 100%;
      text-align: center;
      position: static;
      margin-bottom: 40px;

      span {
        &:first-child {
          display: none;
        }

        &:last-child {
          display: inline-block;
        }
      }
    }

    &__list {
      width: 100%;
    }

    &__item {
      padding: 16px;
      border-radius: 24px;
    }

    &__item-numbering {
      font-size: 11px;
      line-height: 12.76px;
    }

    &__item-title {
      @include font-text-2;

      font-family: var(--ff-montserrat-bold);
    }

    &__item-subtitle {
      @include font-text-3;
    }
  }
}
</style>
