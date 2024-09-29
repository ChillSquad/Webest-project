<script setup>
import { useSidebarModel } from "../models/sidebar";
import GradientButton from "../UI-kit/GradientButton.vue";

const { isActive, isActiveStaff } = useSidebarModel();

const closeSidebar = () => {
  isActive.value = false;
  isActiveStaff.value = false;
};
</script>

<template>
  <div class="sidebar-content">
    <div class="sidebar-success">
      <div class="sidebar-success__massage">
        <span class="sidebar-success__uppercase">
          Заявка успешно отправлена
        </span>
        <span class="sidebar-success__span">
          Наш менеджер свяжется с вами в ближайшее время!
        </span>
      </div>
      <GradientButton title="Отлично" @click="closeSidebar" />
    </div>
    <div class="sidebar-success__plug"></div>
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
