<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import Breadcrumbs from "~/components/UI-kit/Breadcrumbs.vue";
import GradientButton from "~/components/UI-kit/GradientButton.vue";
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

const isScreenSmall = ref(false);

const checkScreenSize = () => {
  isScreenSmall.value = window.innerWidth <= 475;
};

onMounted(() => {
  checkScreenSize();
  window.addEventListener("resize", checkScreenSize);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", checkScreenSize);
});

const handleSectionClick = () => {
  if (!isScreenSmall.value) {
    toggleSidebarForm();
  }
};

defineProps({
  breadcrumbItems: {
    type: Array,
    required: true,
  },
  heading: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <div class="container">
    <section
      class="expertise-heading"
      v-for="(item, index) in heading"
      :key="index"
    >
      <Breadcrumbs :items="breadcrumbItems" />

      <div class="expertise-heading__title">{{ item.title }}</div>

      <div class="expertise-heading__subtitle">
        {{ item.subtitle }}
      </div>

      <GradientButton :title="item.buttonTitle" @click="toggleSidebarForm" />

      <div class="expertise-heading__review">
        <div
          class="custom-component"
          @mouseenter="handleMouseEnter"
          @mouseleave="handleMouseLeave"
        >
          <img
            @click="handleSectionClick"
            class="expertise-heading__image"
            :src="item.imageSrc"
            :alt="item.imageAlt"
          />
        </div>

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
    </section>
  </div>
</template>

<style lang="scss">
@import "~/assets/scss/helpers/mixin";
@import "~/assets/scss/helpers/fonts-mixin";

.expertise-heading {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: var(--unit-margin-y);

  .custom-component,
  &__review {
    @include flex-center;
  }

  .custom-component {
    cursor: pointer;
  }

  &__title {
    @include font-h1-inner;
  }

  &__subtitle {
    @include font-h5;

    width: 836px;
    margin: 24px 0 40px 0;
  }

  &__review {
    position: relative;
  }

  &__image {
    width: 100%;
    height: auto;
    border-radius: var(--border-radius-40);
  }

  &__image-caption {
    @include font-text-2;

    width: 388px;
    text-align: center;
    position: absolute;
    bottom: 24px;
  }

  button.gradient-button {
    display: none;
  }

  @media (max-width: 475px) {
    .expertise-heading {
      &__image {
        object-fit: cover;
        width: 100dvw;
        height: 360px;
        border-radius: 0;
      }

      &__image-caption {
        max-width: 328px;
        bottom: 16px;
      }
    }

    button.gradient-button {
      display: flex;

      margin-bottom: 40px;
    }

    &__subtitle {
      width: 328px;
      margin: 16px 0 40px 0;
    }
  }
}
</style>
