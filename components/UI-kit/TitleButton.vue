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
  <a href="#" id="title-button-class-management" class="title-button">
    <h2 class="title-button__heading">
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
  transition: gap 0.3s ease-in-out;
  &:hover {
    color: var(--color-blue);
    gap: 29.33px;
  }
  &__heading {
    font-family: "Montserrat-Bold";
    font-size: var(--fs-h2-1920);
    line-height: var(--lh-h2-1920);
    text-transform: uppercase;
    transition: color 0.3s ease-in-out;
  }
  .title-arrow-right {
    transition: fill 0.3s ease-in-out;
  }
  &:hover .title-arrow-right {
    fill: var(--color-blue);
  }
  @media (max-width: 800px) {
    &__heading {
      font-size: var(--fs-h2-360);
      line-height: var(--lh-h2-360);
    }
    .title-arrow-right {
      width: 22.67px;
      height: 22.04px;
    }
  }
}
</style>
