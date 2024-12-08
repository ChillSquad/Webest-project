<script setup>
import { useIntersectionAnimation } from "../models/useIntersectionAnimation";
import { useSidebarModel } from "../models/sidebar";

import GradientButton from "~/components/UI-kit/GradientButton.vue";

const { toggleSidebarForm } = useSidebarModel();

const { listAnimation } = useIntersectionAnimation("visible", 0.1);

defineProps({
  services: {
    type: Array,
    required: true,
  },
  title: {
    type: String,
    default: null,
  },
});
</script>

<template>
  <section class="expertise-marketplace-services">
    <div class="container">
      <div class="expertise-marketplace-services__content">
        <div class="expertise-marketplace-services__heading">{{ title }}</div>

        <ul class="expertise-marketplace-services__list">
          <li
            v-for="(service, index) in services"
            class="expertise-marketplace-services__item"
            ref="listAnimation"
          >
            <p
              class="expertise-marketplace-services__item-title icon-arrow-right-up"
            >
              {{ service.title }}
            </p>

            <p class="expertise-marketplace-services__item-subtitle">
              {{ service.subtitle }}
            </p>

            <div class="expertise-marketplace-services__item-points">
              <p
                class="icon-marker"
                v-for="(point, pointIndex) in service.points"
                :key="pointIndex"
              >
                {{ point }}
              </p>
            </div>

            <GradientButton
              @click="toggleSidebarForm"
              title="Оставить заявку"
            />
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import "~/assets/scss/helpers/mixin";
@import "~/assets/scss/helpers/fonts-mixin";

.expertise-marketplace-services {
  margin-bottom: var(--unit-margin-y);

  &__heading {
    @include font-h2;

    width: 50%;
  }

  &__content {
    height: max-content;
    display: flex;
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
    padding: 0 5px 32px 0;
    background: #fff;
    border-bottom: 1px solid var(--color-grey-light-span);
    transition: background 0.3s ease-in-out, max-height 0.6s ease-in-out;
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
      max-height: 808px;

      .expertise-marketplace-services__item-title {
        color: var(--color-blue);
      }

      .expertise-marketplace-services__item-points,
      #gradient-button-control {
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

  &__item-points {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  &__item-title {
    @include font-h4;

    width: 100%;
    display: flex;
    justify-content: space-between;
    transition: color 0.3s ease-in-out;
  }

  &__item-subtitle {
    @include font-text-2;

    margin: 16px 0 32px;
  }

  &__item-points,
  #gradient-button-control {
    transition: opacity 0.3s ease-in-out, transform 0.6s ease-in-out;
    opacity: 0;
    transform: translateY(200px);
  }

  &__item-points {
    @include font-text-2;
  }

  .icon-marker {
    display: flex;
    align-items: first baseline;

    &:before {
      content: "\004E";
      font-size: 12px;
      color: var(--color-blue);
      padding-right: 8px;
    }
  }

  #gradient-button-control {
    width: fit-content;
    margin-top: 32px;
  }

  @media (max-width: 475px) {
    &__content {
      flex-direction: column;
    }

    &__heading {
      width: 100%;
      margin-bottom: 40px;
      text-align: center;
    }

    &__list {
      width: 100%;
    }

    &__item {
      max-height: 110px;

      @include list-items-animation;

      .icon-arrow-right-up {
        display: flex;
        align-items: first baseline;
      }

      &:hover {
        max-height: 700px;
      }
    }
  }
}
</style>
