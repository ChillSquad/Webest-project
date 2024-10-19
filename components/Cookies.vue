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
      <div class="cookies__content">
        Этот сайт использует сервис веб-аналитики Яндекс Метрика,
        предоставляемый компанией ООО «ЯНДЕКС», 119021, Россия, Москва, ул. Л.
        Толстого, 16 (далее — Яндекс), счетчик «top.mail.ru» и cookie файлы.
      </div>

      <span>
        <GradientButton title="Отлично" @click="handleClick" />
        <NuxtLink to="/policy/cookie" @click="handleClick">
          Подробнее
        </NuxtLink>
      </span>
    </section>
  </Transition>
</template>
