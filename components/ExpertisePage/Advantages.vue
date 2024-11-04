<script setup>
import { useIntersectionAnimation } from "../models/useIntersectionAnimation";

const { listAnimation } = useIntersectionAnimation("visible", 0.1);

defineProps({
  cards: {
    type: Array,
    required: true,
  },
  title: {
    type: String,
    default: "Наши преимущества",
  },
  subtitle: {
    type: Array,
    required: false,
  },
  forbidden: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <section class="outstaff-advantages">
    <div class="container">
      <div class="outstaff-advantages__heading">
        <div class="outstaff-advantages__title">{{ title }}</div>

        <p
          class="outstaff-advantages__subtitle"
          v-if="subtitle"
          v-for="(text, index) in subtitle"
          :key="index"
        >
          <span class="custom-standing-purple">{{ text.purple }}</span>
          {{ text.content1 }}
          <span class="custom-standing-yellow desktop">{{ text.yellow1 }}</span>
          <span class="custom-standing-yellow desktop">{{ text.yellow2 }}</span>
          <span class="custom-standing-yellow">{{ text.yellow3 }}</span>
          {{ text.content2 }}
        </p>
      </div>

      <ul class="outstaff-advantages__list">
        <li
          :class="[
            'outstaff-advantages__item',
            { tall: card.tall },
            { wide: card.wide },
          ]"
          v-for="(card, index) in cards"
          :key="index"
          ref="listAnimation"
        >
          <div class="outstaff-advantages__item-heading">
            <p class="outstaff-advantages__item-title">{{ card.title }}</p>

            <p v-if="card.subtitle" class="outstaff-advantages__item-subtitle">
              {{ card.subtitle }}
            </p>
          </div>

          <img
            class="outstaff-advantages__item-image"
            :src="card.src"
            alt="story image"
          />
        </li>
      </ul>
      <p v-if="forbidden" class="forbidden">
        *Соцсети Instagram и Facebook запрещенные в России экстремистские
        организации
      </p>
    </div>
  </section>
</template>

<style lang="scss">
@import "~/assets/scss/helpers/mixin";
@import "~/assets/scss/helpers/fonts-mixin";

.outstaff-advantages {
  margin-bottom: var(--unit-margin-y);

  &__title {
    @include font-h2;

    text-align: center;
    margin-bottom: var(--heading-margin-bottom);
  }

  &__subtitle {
    @include font-text-1;
  }

  &__list {
    display: grid;
    gap: 8px;
  }

  .wide {
    grid-column: span 2;
    width: 100%;
  }

  .tall {
    grid-row: span 2;
    height: 100%;
  }

  &__item-heading {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  &__item {
    display: flex;
    flex-direction: column;
    text-align: start;
    justify-content: space-between;
    padding: 32px 32px 0;
    background-color: var(--color-grey-light);
    border-radius: 20px;
  }

  &__item-title {
    @include font-h6;
  }

  &__item-subtitle {
    @include font-text-4;
  }

  .forbidden {
    @include font-text-6;

    margin-top: 8px;
  }

  @media (max-width: 475px) {
    &__list {
      display: flex;
      flex-direction: column;
    }

    &__item {
      min-height: 320px !important;
      padding: 16px 16px 0;

      @include list-items-animation;

      &-image {
        width: 296px;
        height: 160px;
        object-fit: contain;
        align-self: center;
      }
    }
  }
}
</style>
