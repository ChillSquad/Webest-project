<script setup>
import { ref } from "vue";

const activeIndex = ref(0);

defineProps({
  marks: {
    type: Array,
    required: false,
  },
  plates: {
    type: Array,
    required: true,
  },
  title: {
    type: String,
    default: null,
  },
  image: {
    type: String,
    default: null,
  },
});

const setActiveItem = (index) => {
  activeIndex.value = index;
};
</script>

<template>
  <section class="expertise-menu">
    <div class="container">
      <div class="expertise-menu__heading">{{ title }}</div>

      <div class="expertise-menu__content">
        <ul class="expertise-menu__list">
          <li
            v-for="(plate, index) in plates"
            :key="index"
            :class="['expertise-menu__item', { active: activeIndex === index }]"
            @click="setActiveItem(index)"
          >
            <p class="expertise-menu__item-title icon-arrow-right-up">
              {{ plate.title }}
            </p>

            <p class="expertise-menu__item-subtitle">
              {{ plate.content }}
            </p>
          </li>
        </ul>

        <div class="expertise-menu__item-aside">
          <p v-for="(mark, index) in marks" :key="index" class="icon-marker">
            {{ mark.content }}
          </p>
          <img
            class="expertise-menu__item-image"
            :src="image"
            alt="Изображение компонента"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import "~/assets/scss/helpers/fonts-mixin";

.expertise-menu {
  margin-bottom: var(--unit-margin-y);

  &__heading {
    @include font-h2;

    text-align: center;
    margin-bottom: 100px;
  }

  &__content {
    height: 665px;
    box-shadow: 0 0 50px 5px var(--shadow-card);
    background-color: rgba(235, 238, 242, 0.5);
    border-radius: 32px;
    display: flex;
    gap: 8px;
  }

  &__list {
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  &__item {
    max-height: 96px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 32px;
    background: var(--color-white);
    border-radius: 32px;
    transition: color 0.2s ease-in-out, background 0.3s ease-in-out,
      max-height 0.4s ease-in-out;
    overflow: hidden;

    .icon-arrow-right-up {
      display: flex;
      align-items: center;

      &:after {
        content: "\0042";
        font-size: 12px;
        color: inherit;
        transform: rotate(45deg);
        transition: transform 0.3s ease-in-out;
      }
    }

    &:hover {
      color: var(--color-blue);
    }

    &.active {
      max-height: 252px;
      color: var(--color-white);
      background: var(--color-blue);

      .expertise-menu__item-subtitle {
        transform: translateY(0);
        opacity: 1;
      }

      .icon-arrow-right-up {
        &:after {
          transform: rotate(0);
        }
      }
    }
  }

  &__item-title {
    @include font-h6;

    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  &__item-subtitle {
    @include font-text-1;

    max-width: 600px;
    transition: opacity 0.3s ease-in-out, transform 0.6s ease-in-out;
    opacity: 0;
    transform: translateY(100px);
  }

  &__item-aside {
    width: 50%;

    position: relative;
    background: var(--color-white);
    border-radius: 32px;
    display: flex;
    flex-direction: column;
    justify-content: end;
    padding: 32px;

    .icon-marker {
      display: flex;
      align-items: center;
      margin-top: 8px;

      &:before {
        content: "\004E";
        font-size: 12px;
        color: var(--color-blue);
        padding-right: 8px;
      }
    }
  }

  &__item-image {
    position: absolute;
    bottom: 0;
    right: 0;
  }
}
</style>
