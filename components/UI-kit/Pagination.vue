<script setup>
import { ref } from "vue";

import Button from "primevue/button";
import InputNumber from "primevue/inputnumber";

const value1 = ref(1);
const value2 = ref(9);

const slidePrev = () => {
  if (value1.value > 1) {
    value1.value--;
  }
};

const slideNext = () => {
  value1.value++;
};
</script>

<template>
  <article class="pagination">
    <div class="pages-wrapper">
      <InputNumber
        v-model="value1"
        inputId="minmax"
        :min="0"
        :max="value2"
        :pt="{
          root: { class: 'pagination-root' },
        }"
      />
      <span>из {{ value2 }}</span>
    </div>

    <div class="button-wrapper">
      <Button
        class="slide-button icon-slide-to-left"
        aria-label="Previous Slide"
        @click="slidePrev"
        :disabled="value1 <= 1"
      />

      <Button
        class="slide-button icon-slide-to-right"
        aria-label="Next Slide"
        @click="slideNext"
        :disabled="value1 >= value2"
      />
    </div>
  </article>
</template>

<style lang="scss">
@import "~/assets/scss/helpers/mixin";
@import "~/assets/scss/helpers/fonts-mixin";

.pagination {
  margin: 60px 0 var(--unit-margin-y) 0;
  display: flex;
  gap: 20px;
}

.pagination-root {
  input {
    @include font-h6;
    @include flex-center;

    width: 80px;
    height: 68px;
    border: 1px solid var(--color-grey-light-span);
    border-radius: 20px;
    cursor: pointer;
    background: transparent;
    font-weight: 900;
    text-align: center;
    outline: none;
    padding: 10px;
  }
}

.button-wrapper {
  display: flex;
  gap: 4px;
}

.pages-wrapper {
  @include font-h6;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
}

@media (max-width: 475px) {
  .pagination {
    margin: 40px 0 var(--unit-margin-y) 0;
    justify-content: space-between;
  }

  .pagination-root {
    input {
      width: 60px;
      height: 50px;
    }
  }

  .pages-wrapper {
    gap: 12px;
  }
}
</style>
