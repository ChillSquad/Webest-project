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
</template>

<style lang="scss" scoped>
@import "~/assets/scss/helpers/fonts-mixin";

.expertise-development-stack__item-heading {
  @include font-h5;

  font-family: var(--ff-montserrat-bold);
  text-transform: uppercase;
  margin-bottom: 4px;
}

.expertise-development-stack__item-content {
  @include font-text-1;

  display: flex;
  justify-content: space-between;
  margin-top: 16px;
  cursor: default;

  &:hover {
    color: var(--color-blue);
  }
}
</style>
