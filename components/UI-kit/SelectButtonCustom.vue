<script setup>
import SelectButton from "primevue/selectbutton";
import { ref } from "vue";

const props = defineProps({
  modelValue: String,
});
const emit = defineEmits(["update:modelValue"]);

const options = ref(["Облачная версия", "Коробочная версия"]);

const toggleValue = () => {
  const currentIndex = options.value.indexOf(props.modelValue);
  const newIndex = (currentIndex + 1) % options.value.length;
  emit("update:modelValue", options.value[newIndex]);
};

if (!props.modelValue) {
  emit("update:modelValue", options.value[0]);
}
</script>

<template>
  <SelectButton
    :pt="{
      root: { class: 'select-button' },
      button: { class: 'select-button-button' },
      label: { class: 'select-button-label' },
      hooks: { class: 'select-button-hooks' },
    }"
    :options="options"
    :model-value="props.modelValue"
    @click="toggleValue"
    aria-labelledby="basic"
  />
</template>

<style lang="scss">
@import "~/assets/scss/helpers/fonts-mixin";

.select-button {
  width: fit-content;
  display: flex;
  border-radius: 20px;
  background-color: #fff;
  border: 1px solid var(--color-grey-light-span);
  padding: 4px;
  gap: 8px;
  align-self: center;

  .select-button-button {
    color: var(--color-black);
    border-radius: 16px;
    padding: 20px 16px;
    outline: none;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out, color 0.2s ease-in-out,
      transform 0.3s ease-in-out;

    &.p-highlight {
      background-color: var(--color-blue);
      color: #fff;

      &:hover {
        color: #fff;
      }
    }

    &:hover {
      color: var(--color-blue);
    }
  }

  .select-button-label {
    @include font-link-1;

    display: block;
    user-select: none;
  }

  @media (max-width: 475px) {
    flex-direction: column;
    width: 100%;
    text-align: center;
  }
}
</style>
