<script setup>
defineProps({
  plates: {
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
  <section class="expertise-marketplace">
    <div class="container">
      <div class="expertise-marketplace__content">
        <div class="expertise-marketplace__heading">{{ title }}</div>

        <ul class="expertise-marketplace__list">
          <li
            v-for="(plate, index) in plates"
            class="expertise-marketplace__item"
          >
            <p class="expertise-marketplace__item-title icon-arrow-right-up">
              {{ plate.title }}
            </p>

            <p class="expertise-marketplace__item-subtitle">
              {{ plate.subtitle }}
            </p>

            <p
              class="expertise-marketplace__item-points icon-marker"
              v-for="(point, pointIndex) in plate.points"
              :key="pointIndex"
            >
              {{ point }}
            </p>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import "~/assets/scss/helpers/fonts-mixin";

.expertise-marketplace {
  margin-bottom: var(--unit-margin-y);

  &__heading {
    @include font-h2;

    width: 50%;
  }

  &__content {
    height: max-content;
    display: flex;
    gap: 8px;
  }

  &__list {
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  &__item {
    max-height: 96px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 0 5px 32px 0;
    background: var(--color-white);
    border-bottom: 1px solid var(--color-grey-light-span);
    transition: background 0.3s ease-in-out, max-height 0.6s ease-in-out;
    overflow: hidden;

    .icon-arrow-right-up {
      display: flex;
      align-items: center;

      &:after {
        content: "\0042";
        font-size: 12px;
        color: inherit;
        transform: rotate(45deg);
        transition: transform 0.3s ease-in-out;
      }
    }

    &:hover {
      max-height: 808px;

      .expertise-marketplace__item-title {
        color: var(--color-blue);
      }

      .expertise-marketplace__item-points {
        transform: translateY(0);
        opacity: 1;
      }

      .icon-arrow-right-up {
        &:after {
          transform: rotate(0);
        }
      }
    }
  }

  &__item-title {
    @include font-h4;

    width: 100%;
    display: flex;
    justify-content: space-between;
    transition: color 0.3s ease-in-out;
  }

  &__item-subtitle {
    @include font-text-1;
  }

  &__item-points {
    @include font-text-1;

    transition: opacity 0.3s ease-in-out, transform 0.6s ease-in-out;
    opacity: 0;
    transform: translateY(200px);
  }

  .icon-marker {
    display: flex;
    align-items: center;

    &:before {
      content: "\004E";
      font-size: 12px;
      color: var(--color-blue);
      padding-right: 8px;
    }
  }
}
</style>
