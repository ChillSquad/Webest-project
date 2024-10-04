<script setup>
const props = defineProps({
  prioritys: {
    type: Array,
    required: true,
  },
  title: {
    type: String,
    default: null,
  },
  subtitle: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <section class="expertise-priority">
    <div class="container">
      <div class="expertise-priority__heading">
        <div class="expertise-priority__title">{{ title }}</div>

        <div v-if="subtitle" class="expertise-priority__subtitle">
          Выбрав нашу компанию, вы получаете все преимущества работы с 
          <span class="custom-standing-pink">опытной командой</span>, которая
          изо всех сил старается обеспечить ваш бизнес максимальным успехом
        </div>
      </div>
    </div>

    <ol class="expertise-priority__list">
      <div class="container">
        <li
          class="expertise-priority__list-item"
          v-for="(priority, index) in prioritys"
          :key="index"
        >
          <p class="expertise-priority__list-item-number">0{{ index + 1 }}</p>

          <div class="expertise-priority__list-item-content">
            <span>{{ priority.heading }}</span>

            <p>
              {{ priority.content }}
            </p>
          </div>
        </li>
      </div>
    </ol>
  </section>
</template>

<style lang="scss">
@import "~/assets/scss/helpers/fonts-mixin";

.expertise-priority {
  display: flex;
  flex-direction: column;
  padding: var(--unit-margin-y) 0;
  background-color: var(--color-blue);
  color: var(--color-white);
  gap: 100px;
  overflow-x: hidden;
  margin-bottom: var(--unit-margin-y);

  &__heading {
    display: flex;
    justify-content: space-between;
  }

  &__title {
    @include font-h2;
  }

  &__subtitle {
    @include font-h5;

    width: 575px;

    .custom-standing-pink {
      @include custom-standing;

      background: var(--color-pink);
      transform: rotate(1.61deg);
    }
  }

  &__list {
    border-top: 1px solid var(--color-white);
    border-bottom: 1px solid var(--color-white);
  }

  &__list-item {
    height: 190px;
    display: flex;
    padding: 40px 0;
    position: relative;

    &:not(:last-child)::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 100dvw;
      height: 1px;
      background-color: var(--color-white);
    }
  }

  &__list-item-number {
    @include font-h6;

    margin-right: 400px;
  }

  &__list-item-content {
    width: 840px;
    display: flex;
    flex-direction: column;
    gap: 20px;

    span {
      @include font-h5;
    }

    p {
      @include font-text-1;
    }
  }
}
</style>
