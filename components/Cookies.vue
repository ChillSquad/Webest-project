<script setup>
import { ref } from "vue";

import GradientButton from "./UI-kit/GradientButton.vue";

const isVisible = ref(false);

const handleClick = () => {
  isVisible.value = false;
};

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true;
  }, 2000);
});
</script>

<template>
  <Transition name="slide-fade-left" mode="out-in">
    <section v-if="isVisible" class="cookies">
      <div class="cookies__heading">
        Мы используем куки, чтобы пользоваться сайтом было удобно
      </div>
      <span>
        <GradientButton title="Отлично" @click="handleClick" />
      </span>
    </section>
  </Transition>
</template>
