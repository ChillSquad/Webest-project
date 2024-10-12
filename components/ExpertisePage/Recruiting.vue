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

const handleResize = () => {
  if (typeof window !== "undefined") {
    isMobile.value = window.innerWidth <= 360;
  }
};

onMounted(() => {
  handleResize();
  if (typeof window !== "undefined") {
    window.addEventListener("resize", handleResize);
  }
});

onBeforeUnmount(() => {
  if (typeof window !== "undefined") {
    window.removeEventListener("resize", handleResize);
  }
});

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
      <section @click="toggleSidebarForm" class="recruiting">
        <p>
          {{ title }}
        </p>

        {{ subtitle }}

        <button class="first-page__mobile-button">
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

  .first-page__mobile-button {
    margin-top: 40px;
  }

  @media (max-width: 360px) {
    height: max-content;
    padding: 80px 16px;

    p {
      width: 328px;
      font-size: 32px;
      line-height: 36.48px;
    }

    .custom-cursor {
      &__circle {
        display: none;
      }
    }
  }
}

@media (max-width: 360px) {
  .custom-cursor {
    &__circle {
      display: none;
    }
  }
}
</style>
