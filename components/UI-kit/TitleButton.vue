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
    <h2 class="title-button__heading">{{ title }}</h2>
    <div class="super">
      <iconTitleArrowRight />
    </div>
  </a>
</template>

<style lang="scss" scoped>
.title-button {
  display: flex;
  gap: 20px;
  align-items: center;
  color: var(--color-black);
  width: fit-content;
  &__heading {
    font-family: "Montserrat-Bold";
    font-size: 80px;
    text-transform: uppercase;
  }

  @media (max-width: 800px) {
    &__heading {
      font-size: 32px;
    }
    .title-arrow-right {
      width: 27px;
      height: 26px;
    }
  }
}
</style>
