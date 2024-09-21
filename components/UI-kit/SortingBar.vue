<script setup>
const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <div class="sort-radio">
    <div
      class="sort-radio__group-item"
      v-for="(item, index) in items"
      :key="index"
    >
      <input
        :id="'radio-' + index"
        type="radio"
        name="radio"
        :value="index"
        :checked="index === 0"
      />
      <label :for="'radio-' + index">{{ item.title }}</label>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../assets/scss/helpers/fonts-mixin";

.sort-radio {
  display: flex;
  gap: 4px;
  margin: 100px 0 60px 0;

  &__group-item {
    display: inline-block;

    input[type="radio"] {
      display: none;

      &:checked + label {
        background-color: var(--color-blue);
        color: var(--color-white);
      }
    }

    label {
      @include font-text-4-1920;

      display: inline-block;
      padding: 11px 16px 9px 16px;
      border: 1px solid var(--color-grey-light);
      border-radius: 16px;
      color: var(--color-dark-blue);
      cursor: pointer;
      user-select: none;

      &:hover {
        border: 1px solid var(--color-blue);
      }
    }
  }

  @media (max-width: 360px) {
    display: none;
  }
}
</style>
