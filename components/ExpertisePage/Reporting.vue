<script setup>
defineProps({
  title: {
    type: String,
    default: null,
  },
  reports: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <div class="container">
    <section class="expertise-development-reporting">
      <div class="expertise-development-reporting__title">{{ title }}</div>

      <ul class="expertise-development-reporting__list">
        <li
          class="expertise-development-reporting__item"
          v-for="(report, index) in reports"
        >
          <p class="expertise-development-reporting__item-heading">
            {{ report.heading }}
          </p>

          <div class="expertise-development-reporting__item-list">
            <p class="icon-marker" v-for="(content, index) in report.content">
              {{ content }}
            </p>
          </div>

          <span
            :class="[
              { 'item-first': index === 0 },
              { 'item-second': index === 1 },
              { 'item-third': index === 2 },
            ]"
            >{{ index + 1 }}</span
          >
        </li>
      </ul>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@import "~/assets/scss/helpers/fonts-mixin";

.expertise-development-reporting {
  margin-bottom: var(--unit-margin-y);

  &__title {
    @include font-h2;

    margin-bottom: 100px;
  }

  &__list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 8px;
  }

  &__item {
    height: 340px;
    width: auto;
    display: flex;
    align-items: end;
    background-color: var(--color-grey-light);
    border-radius: 40px;
    padding: 32px;
    position: relative;
    transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;

    .icon-marker {
      display: flex;
      align-items: center;
      z-index: 1;

      &:before {
        content: "\004E";
        font-size: 12px;
        color: var(--color-blue);
        padding-right: 8px;
        transition: color 0.3s ease-in-out;
      }
    }

    &:hover {
      background-color: var(--color-blue);
      color: var(--color-white);

      .icon-marker {
        &:before {
          color: var(--color-white);
        }
      }

      .item-first,
      .item-second,
      .item-third {
        opacity: 0.6;
      }
    }
  }

  &__item-heading {
    @include font-text-1;

    width: 362px;
    z-index: 1;
  }

  &__item-list {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .item-first,
  .item-second,
  .item-third {
    font-weight: 900;
    font-size: 480px;
    position: absolute;
    color: var(--color-white);
    pointer-events: none;
    user-select: none;
  }

  .item-first {
    right: 0;
    bottom: -120px;
  }

  .item-second,
  .item-third {
    right: -70px;
    bottom: -120px;
  }
}
</style>
