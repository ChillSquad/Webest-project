<script setup>
import { useSidebarModel } from "../models/sidebar";
import { useCustomCursor } from "../models/useCustomCursor";

const { toggleSidebarForm, isActive } = useSidebarModel();
const {
  isCursorVisible,
  circleStyle,
  textStyle,
  handleMouseEnter,
  handleMouseLeave,
} = useCustomCursor(isActive);
</script>

<template>
  <div class="container">
    <div
      class="custom-component"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
    >
      <section @click="toggleSidebarForm" class="recruiting">
        <p>
          Ищете сильных <br />
          разработчиков в команду?
        </p>
        Оставьте заявку и мы свяжемся с вами в течение рабочего дня
      </section>
      <div
        class="custom-cursor"
        :class="{ visible: isCursorVisible && !isActive }"
      >
        <div class="custom-cursor__circle" :style="circleStyle">
          <span class="custom-cursor__circle-span" :style="textStyle"
            >Оставить <span>заявку</span></span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "~/assets/scss/helpers/fonts-mixin";

.recruiting {
  @include font-h5;

  text-align: center;
  padding: 140px 100px;
  background-image: url("public/images/footer-background.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: var(--color-white);
  width: 100%;
  height: auto;
  align-self: center;
  border-radius: 24px;
  margin-bottom: var(--unit-margin-y);
  cursor: pointer;

  p {
    @include font-h2;
    margin-bottom: 24px;
  }

  @media (max-width: 360px) {
    p {
      display: none;

      width: 328px;
      font-size: 32px;
      line-height: 36.48px;
    }
  }
}
</style>
