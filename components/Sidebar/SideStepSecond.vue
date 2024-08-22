<script setup>
import GradientButton from "../UI-kit/GradientButton.vue";
</script>

<template>
  <div class="sidebar-content">
    <div class="sidebar-success">
      <div class="sidebar-success__massage">
        <span class="sidebar-success__uppercase"
          >Заявка успешно отправлена</span
        >
        <span class="sidebar-success__span"
          >Наш менеджер свяжется с вами в ближайшее время!</span
        >
      </div>
      <GradientButton title="Отлично" />
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
  .sidebar-success {
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
