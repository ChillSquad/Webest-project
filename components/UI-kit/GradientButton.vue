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
    class="sidebar-footer__button"
    iconPos="right"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <template v-slot:icon>
      <span>{{ title }}</span>
      <component :is="isHovered ? iconArrowRightLine : iconArrowRightUpLine" />
    </template>
  </Button>
</template>

<style lang="scss" scoped>
.sidebar-footer__button {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 22px 20px 22px 20px;
  border-radius: 20px;
  border: none;
  outline: none;
  font-family: "Gilroy-SemiBold";
  font-size: 18px;
  gap: 12px;
  color: var(--color-white);
  background: var(--color-button-gradient);
  cursor: pointer;

  &:hover {
    background: var(--color-button-gradient-hover);
  }
}
</style>
