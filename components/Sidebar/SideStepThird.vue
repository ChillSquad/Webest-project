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
  </div>
</template>

<style lang="scss" scoped>
.sidebar-content {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 62px;
  .sidebar-failure {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    &__massage {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 16px;
    }
    &__uppercase {
      text-transform: uppercase;
      font-family: "Montserrat-Bold";
      font-size: 28px;
    }
    &__span {
      font-size: 18px;
    }
  }
}
</style>
