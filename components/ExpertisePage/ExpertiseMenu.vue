<script setup>
import GradientButton from "~/components/UI-kit/GradientButton.vue";
import { ref } from "vue";

const activeIndex = ref(0);

defineProps({
  plates: {
    type: Array,
    required: true,
  },
  title: {
    type: String,
    default: null,
  },
});

const setActiveItem = (index) => {
  activeIndex.value = index;
};
</script>

<template>
  <div class="container">
    <section class="expertise-menu">
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
          <div class="expertise-menu__item-marks">
            <p
              v-for="(mark, index) in plates[activeIndex].marks"
              :key="index"
              class="icon-marker"
            >
              {{ mark }}
            </p>
          </div>

          <transition name="list" mode="out-in">
            <img
              v-if="plates[activeIndex].image"
              :key="plates[activeIndex].image"
              class="expertise-menu__item-image"
              :src="plates[activeIndex].image"
              alt="Изображение компонента"
            />
          </transition>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss">
@import "~/assets/scss/helpers/fonts-mixin";

.expertise-menu {
  margin-bottom: var(--unit-margin-y);

  &__heading {
    @include font-h2;

    text-align: center;
    margin-bottom: var(--heading-margin-bottom);
  }

  &__content {
    height: max-content;
    display: flex;
    box-shadow: 0 0 50px 5px var(--shadow-card);
    background-color: rgba(235, 238, 242, 0.5);
    border-radius: 32px;
    gap: 8px;
  }

  &__list {
    width: 796px;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  &__item {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: var(--padding-card);
    background: #fff;
    border-radius: 32px;
    transition: color 0.2s ease-in-out, background 0.3s ease-in-out,
      max-height 0.4s ease-in-out;
    overflow: hidden;
    cursor: pointer;

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
      color: #fff;
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
    @include font-text-2;

    max-width: 600px;
    transition: opacity 0.3s ease-in-out, transform 0.6s ease-in-out;
    opacity: 0;
    transform: translateY(100px);
  }

  &__item-aside {
    height: max-content;
    position: relative;
    border-radius: 32px;
    display: flex;
    flex-direction: column;
    justify-content: end;
    position: sticky;
    top: 5%;
  }

  &__item-marks {
    position: absolute;
    bottom: 32px;
    left: 32px;

    .icon-marker {
      display: flex;
      align-items: center;

      &:not(:first-child) {
        margin-top: 8px;
      }

      &:before {
        content: "\004E";
        font-size: 12px;
        color: var(--color-blue);
        padding-right: 8px;
      }
    }
  }

  &__item-image {
    border-radius: 32px;
  }

  @media (max-width: 475px) {
    &__content {
      flex-direction: column;
    }

    &__list {
      width: 100%;
    }

    &__item {
      border-radius: 20px;
    }

    &__item-title {
      font-family: var(--ff-montserrat-semi-bold);
    }

    &__item-marks {
      top: 16px;
      left: 16px;

      .icon-marker {
        &:not(:first-child) {
          margin-top: 4px;
        }
      }
    }

    &__item-aside {
      border-radius: 20px;
    }
  }
}
</style>
