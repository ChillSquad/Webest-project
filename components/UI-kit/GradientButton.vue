<script setup>
import Button from "primevue/button";

defineProps({
  title: {
    type: [String, null],
    default: null,
  },
});
</script>

<template>
  <Button label="Submit" class="gradient-button" iconPos="right">
    <span>{{ title }}</span>
    <span class="gradient-button__arrow icon-arrow-right-up"></span>
  </Button>
</template>

<style lang="scss" scoped>
.gradient-button {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 16px;
  border-radius: 20px;
  border: none;
  outline: none;
  font-family: var(--ff-gilroy-semi-bold);
  font-size: 18px;
  gap: 12px;
  color: var(--color-white);
  background: var(--color-button-gradient);
  cursor: pointer;

  .icon-arrow-right-up {
    &:after {
      content: "\0042";
      font-size: 12px;
      color: inherit;
      margin-left: 10px;
      transition: transform 0.2s ease-in-out;
    }
  }

  &:hover {
    background: var(--color-button-gradient-hover);
    .icon-arrow-right-up {
      &:after {
        transform: rotate(45deg);
      }
    }
  }
}
</style>
