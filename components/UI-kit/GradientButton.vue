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
    id="gradient-button-control"
    iconPos="right"
  >
    <span>{{ title }}</span>
    <span class="icon-arrow-right-up"></span>
  </Button>
</template>

<style lang="scss" scoped>
@import "~/assets/scss/helpers/fonts-mixin";

.gradient-button {
  @include font-button-1;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px 20px;
  border-radius: 20px;
  border: none;
  outline: none;
  gap: 18px;
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

  @media (max-width: 475px) {
    padding: 17px 17px;
    border-radius: 16px;
    gap: 12px;

    .icon-arrow-right-up {
      &:after {
        font-size: 10px;
      }
    }
  }
}
</style>
