<script setup>
import GradientButton from "../UI-kit/GradientButton.vue";

defineProps({
  individual: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <section
    class="individual-development"
    v-for="(individual, index) in individual"
  >
    <p class="individual-development__header">
      {{ individual.head }}
    </p>

    <div class="individual-development__body">
      <div class="individual-development__left">
        <p class="individual-development__left-title">О решении</p>

        <p class="individual-development__left-content">
          {{ individual.content }}
        </p>

        <GradientButton title="Оставить заявку" />

        <img
          :src="individual.image"
          alt="Изображение блока"
          class="individual-development__left-image"
        />
      </div>

      <div class="individual-development__right">
        <p class="individual-development__right-title">
          {{ individual.title }}
        </p>

        <p class="icon-marker" v-for="(mark, index) in individual.marks">
          {{ mark }}
        </p>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import "~/assets/scss/helpers/fonts-mixin";

.individual-development {
  margin-bottom: var(--unit-margin-y);

  &__header {
    @include font-h2;

    margin-bottom: 100px;
    text-align: center;
  }

  &__body {
    display: flex;
    background-color: var(--color-blue);
    border-radius: 40px;
    padding: 32px 32px 0;
  }

  &__left {
    width: 50%;
    color: #fff;

    .gradient-button {
      color: var(--color-blue);
      background: #fff;

      &:hover {
        background: #fff;
        .icon-arrow-right-up {
          &:after {
            transform: rotate(45deg);
          }
        }
      }
    }
  }

  &__left-title {
    @include font-h5;

    text-transform: uppercase;
    margin-bottom: 16px;
  }

  &__left-content {
    @include font-text-2;

    margin-bottom: 40px;
  }

  &__left-image {
    display: flex;
    margin-top: 24px;
  }

  &__right {
    width: 100%;
    height: auto;
    margin-bottom: 32px;
    background-color: #fff;
    border-radius: 16px;
    padding: 32px;
  }

  &__right-title {
    @include font-h6;

    margin-bottom: 16px;
  }

  .icon-marker {
    display: flex;
    align-items: first baseline;
    margin-top: 12px;

    &:before {
      content: "\004E";
      font-size: 12px;
      color: var(--color-blue);
      padding-right: 8px;
    }
  }
}
</style>
