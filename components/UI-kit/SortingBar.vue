<script setup>
defineProps({
  items: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <section class="sort-radio">
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
  </section>
</template>

<style lang="scss" scoped>
@import "~/assets/scss/helpers/fonts-mixin";

.sort-radio {
  display: flex;
  gap: 4px;
  margin: 100px 0 60px 0;
  overflow-x: auto;
  white-space: nowrap;

  &__group-item {
    display: inline-block;

    input[type="radio"] {
      display: none;

      &:checked + label {
        background-color: var(--color-blue);
        color: #fff;
      }
    }

    label {
      @include font-text-4;

      display: inline-block;
      padding: 11px 16px 9px 16px;
      border: 1px solid var(--color-grey-light);
      border-radius: 16px;
      color: var(--color-dark-blue);
      cursor: pointer;

      &:hover {
        border: 1px solid var(--color-blue);
      }
    }
  }

  ::-webkit-scrollbar {
    display: none;
  }
}
</style>
