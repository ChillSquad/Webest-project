<script setup>
defineProps({
  title: {
    type: String,
    default: null,
  },
  cards: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <div class="expertise-development-stack">
    <div class="expertise-development-stack__item-heading">
      {{ title }}
    </div>

    <div
      class="expertise-development-stack__item-content"
      v-for="(card, index) in cards"
      :key="index"
    >
      <p>{{ card.developer }}</p>

      <p>{{ card.price }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "~/assets/scss/helpers/fonts-mixin";

.expertise-development-stack {
  &__item-heading {
    @include font-h5;

    font-family: var(--ff-montserrat-bold);
    text-transform: uppercase;
    margin-bottom: 16px;
  }

  &__item-content {
    @include font-text-1;

    display: flex;
    justify-content: space-between;
    cursor: default;

    &:hover {
      color: var(--color-blue);
    }
  }

  @media (max-width: 360px) {
    &__item-heading {
      font-size: 18px;
      line-height: 25.2px;
    }

    &__item-content {
      @include font-text-3;

      &:not(:last-child) {
        margin-bottom: 12px;
      }
    }
  }
}
</style>
