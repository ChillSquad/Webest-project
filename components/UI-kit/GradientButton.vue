<script setup>
import Button from "primevue/button";

defineProps({
  title: {
    type: [String, null],
    default: null,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <Button
    :disabled="disabled"
    label="Submit"
    class="gradient-button"
    iconPos="right"
  >
    <span>{{ title }}</span>
    <span class="gradient-button__arrow icon-arrow-right-up"></span>
  </Button>
</template>

<style lang="scss" scoped>
@import "~/assets/scss/helpers/fonts-mixin";

.gradient-button {
  @include font-button-2;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 22px 20px;
  border-radius: 20px;
  border: none;
  outline: none;
  gap: 12px;
  color: #fff;
  background: var(--color-button-gradient);
  cursor: pointer;

  &:disabled {
    color: var(--color-grey-light-span);
    background: transparent;
    cursor: default;

    &:hover {
      background: initial;
      .icon-arrow-right-up {
        &:after {
          transform: initial;
        }
      }
    }
  }

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

  @media (max-width: 360px) {
    padding: 15px 16px;
  }
}
</style>
