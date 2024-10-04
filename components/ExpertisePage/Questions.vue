<script setup>
const props = defineProps({
  questions: {
    type: Array,
    required: true,
  },
  title: {
    type: String,
    default: null,
  },
});
</script>

<template>
  <section class="expertise-question">
    <div class="container">
      <div class="expertise-question__content">
        <div class="expertise-question__heading">{{ title }}</div>

        <ul class="expertise-question__list">
          <li
            v-for="(question, index) in questions"
            class="expertise-question__item"
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
  }

  &__item-numbering {
    @include font-text-2;

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
    @include font-text-1;
  }
}
</style>
