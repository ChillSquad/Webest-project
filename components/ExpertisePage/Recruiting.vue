<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
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

const isMobile = ref(false);
const isScreenSmall = ref(false);

const checkScreenSize = () => {
  isScreenSmall.value = window.innerWidth <= 475;
};

const handleResize = () => {
  if (typeof window !== "undefined") {
    isMobile.value = window.innerWidth <= 475;
  }
};

onMounted(() => {
  handleResize();
  if (typeof window !== "undefined") {
    window.addEventListener("resize", handleResize);
  }

  checkScreenSize();
  window.addEventListener("resize", checkScreenSize);
});

onBeforeUnmount(() => {
  if (typeof window !== "undefined") {
    window.removeEventListener("resize", handleResize);
  }

  window.removeEventListener("resize", checkScreenSize);
});

const handleSectionClick = () => {
  if (!isScreenSmall.value) {
    toggleSidebarForm();
  }
};

defineProps({
  title: {
    type: String,
    default: "Ищете сильных разработчиков в команду?",
  },
  subtitle: {
    type: String,
    default: "Оставьте заявку и мы свяжемся с вами в течение рабочего дня",
  },
});
</script>

<template>
  <div :class="{ container: !isMobile }">
    <div
      class="custom-component"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
    >
      <section @click="handleSectionClick" class="recruiting">
        <div class="recruiting-content">
          <p class="recruiting-title">
            {{ title }}
          </p>

          <p class="recruiting-subtitle">
            {{ subtitle }}
          </p>
        </div>

        <button class="first-page__mobile-button" @click="toggleSidebarForm">
          Оставить <br />
          заявку
        </button>
      </section>
      <div
        class="custom-cursor"
        :class="{ visible: isCursorVisible && !isActive }"
      >
        <div class="custom-cursor__circle" :style="circleStyle">
          <span class="custom-cursor__circle-span" :style="textStyle">
            Оставить <span>заявку</span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "~/assets/scss/helpers/fonts-mixin";

.recruiting {
  @include font-h5;

  width: 100%;
  height: auto;
  padding: 180px 100px;
  background-image: url("public/images/footer-background.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: #fff;
  border-radius: 24px;
  margin-bottom: var(--unit-margin-y);
  cursor: pointer;

  &-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  &-title {
    @include font-h2;

    margin-bottom: 24px;
  }

  &-subtitle {
    max-width: 836px;
  }

  .first-page__mobile-button {
    margin-top: 40px;
  }

  @media (max-width: 475px) {
    height: max-content;
    padding: 80px 16px;

    p {
      width: 328px;
    }
  }
}
</style>
