<script setup>
import GradientButton from "../UI-kit/GradientButton.vue";
</script>

<template>
  <div class="sidebar-content">
    <div class="sidebar-failure">
      <div class="sidebar-failure__massage">
        <span class="sidebar-failure__uppercase">Что-то пошло не так</span>
        <span class="sidebar-failure__span"
          >Попробуйте еще раз или вернитесь позже</span
        >
      </div>
      <GradientButton title="Повторить" />
    </div>
    <div class="sidebar-failure__plug"></div>
  </div>
</template>

<style lang="scss" scoped>
.sidebar-content {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
}
</style>
