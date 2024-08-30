<script setup>
import iconTitleArrowRight from "../icons/iconTitleArrowRight.vue";
defineProps({
  title: {
    type: [String, null],
    default: null,
  },
});
</script>

<template>
  <a href="#" class="title-button">
    <h2 id="title-button-class-management" class="title-button__heading">
      {{ title }}
    </h2>
    <iconTitleArrowRight />
  </a>
</template>

<style lang="scss" scoped>
.title-button {
  display: flex;
  gap: 21.33px;
  align-items: center;
  color: var(--color-black);
  width: fit-content;
  transition: gap 0.3s ease-in-out;
  &:hover {
    gap: 29.33px;
  }
  &__heading {
    font-family: "Montserrat-Bold";
    font-size: 80px;
    line-height: 96px;
    text-transform: uppercase;
    transition: color 0.3s ease-in-out;
    &:hover {
      color: var(--color-blue);
    }
  }
  .title-arrow-right {
    transition: fill 0.3s ease-in-out;
  }
  &:hover .title-arrow-right {
    fill: var(--color-blue);
  }
  @media (max-width: 800px) {
    &__heading {
      font-size: 32px;
      line-height: 36.48px;
    }
    .title-arrow-right {
      width: 27px;
      height: 26px;
    }
  }
}
</style>
