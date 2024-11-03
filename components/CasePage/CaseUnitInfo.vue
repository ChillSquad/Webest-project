<script setup>
defineProps({
  items: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <div v-for="(item, index) in items" :key="item.id" class="case-unit-info">
    <div class="case-unit-info__content">
      <span class="case-unit-info__content-percent">
        {{ item.sign }}{{ item.percent }}%
      </span>

      <span class="case-unit-info__content-text">{{ item.text }}</span>
    </div>

    <hr class="case-unit-info__line" v-if="index === 0 || index === 1" />
  </div>
</template>

<style lang="scss" scoped>
@import "~/assets/scss/helpers/fonts-mixin";

.case-unit-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &__content {
    display: flex;
    flex-direction: column;
    text-align: center;

    &-text {
      @include font-text-4;

      width: 100%;
    }

    &-percent {
      @include font-h6;
    }
  }

  &__line {
    width: 40px;
    height: 2px;
    align-self: center;
    margin: 0 16px;
    background-color: var(--color-grey-light-span);
    opacity: 20%;
    margin: 8px 0;
  }
}
</style>
