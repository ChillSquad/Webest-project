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
  }

  &__item-content {
    @include font-text-2;

    display: flex;
    justify-content: space-between;
    cursor: default;
    margin-top: 16px;

    &:hover {
      color: var(--color-blue);
    }
  }

  @media (max-width: 475px) {
    &__item-content {
      @include font-text-3;

      &:not(:last-child) {
        margin-bottom: 12px;
      }
    }
  }
}
</style>
