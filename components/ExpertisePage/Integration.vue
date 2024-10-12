<script setup>
import IndividualDevelopment from "./IndividualDevelopment.vue";

defineProps({
  integration: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <section class="expertise-integration">
    <IndividualDevelopment :individual="integration" />

    <ul
      class="expertise-integration__list"
      v-for="(integration, index) in integration"
    >
      <li class="expertise-integration__item">
        <p class="expertise-integration__item-title">
          {{ integration.title1 }}
        </p>

        <p class="icon-marker blue" v-for="(mark, index) in integration.marks1">
          {{ mark }}
        </p>

        <img
          :src="integration.image1"
          alt="Изображение блока"
          class="expertise-integration__item-image"
        />
      </li>

      <li class="expertise-integration__item">
        <p class="expertise-integration__item-title">
          {{ integration.title2 }}
        </p>

        <p class="icon-marker blue" v-for="(mark, index) in integration.marks2">
          {{ mark }}
        </p>

        <img
          :src="integration.image2"
          alt="Изображение блока"
          class="expertise-integration__item-image"
        />
      </li>
    </ul>
  </section>
</template>

<style lang="scss">
@import "~/assets/scss/helpers/fonts-mixin";

.expertise-integration {
  margin-bottom: var(--unit-margin-y);

  &__list {
    display: flex;
    gap: 8px;
  }

  .wide {
    grid-column: span 2;
  }

  &__item-title {
    @include font-h6;

    margin-bottom: 16px;
  }

  &__item {
    width: 100%;
    height: auto;
    background: var(--color-grey-light);
    border-radius: 16px;
    padding: 32px 32px 0;
  }

  &__item-image {
    display: flex;
  }

  .icon-marker {
    display: flex;
    align-items: first baseline;
    margin-top: 12px;

    &:before {
      content: "\004E";
      font-size: 12px;
      color: #fff;
      padding-right: 8px;
    }
  }

  .blue {
    &:before {
      color: var(--color-blue);
    }
  }

  .individual-development {
    margin-bottom: 8px;

    .individual-development__body {
      background-color: #eff0f3;
    }

    .individual-development__left-title {
      color: var(--color-black);
    }

    .individual-development__left-content {
      color: var(--color-black);
    }

    .individual-development__right {
      color: #fff;
      background-color: var(--color-blue);
    }
  }
}
</style>
