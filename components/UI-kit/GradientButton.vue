<script setup>
import { ref } from "vue";

import iconArrowRightUpLine from "../icons/iconArrowRightUpLine.vue";
import iconArrowRightLine from "../icons/iconArrowRightLine.vue";

import Button from "primevue/button";

const isHovered = ref(false);

defineProps({
  title: {
    type: [String, null],
    default: null,
  },
});
</script>

<template>
  <Button
    class="gradient-button"
    iconPos="right"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <template v-slot:icon>
      <span>{{ title }}</span>
      <component
        class="gradient-button__arrow"
        :is="isHovered ? iconArrowRightLine : iconArrowRightUpLine"
      />
    </template>
  </Button>
</template>

<style lang="scss" scoped>
.gradient-button {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 22px 0 22px 20px;
  border-radius: 20px;
  border: none;
  outline: none;
  font-family: "Gilroy-SemiBold";
  font-size: 18px;
  gap: 12px;
  color: var(--color-white);
  background: var(--color-button-gradient);
  cursor: pointer;
  .arrow-right-up {
    fill: var(--color-white);
    position: relative;
    top: 3px;
  }
  &:hover {
    background: var(--color-button-gradient-hover);
  }
}
</style>
