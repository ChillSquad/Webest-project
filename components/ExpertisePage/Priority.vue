<script setup>
import { useSidebarModel } from "~/components/models/sidebar";
import { useIntersectionAnimation } from "../models/useIntersectionAnimation";

import GradientButton from "~/components/UI-kit/GradientButton.vue";

const { toggleSidebarFormStaff } = useSidebarModel();

const { listAnimation } = useIntersectionAnimation("visible", 0.1);

defineProps({
  prioritys: {
    type: Array,
    required: true,
  },
  content: {
    type: Array,
    required: false,
  },
  title: {
    type: String,
    default: null,
  },
  subtitle: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <section class="expertise-priority">
    <div class="container">
      <div class="expertise-priority__heading">
        <div class="expertise-priority__title">{{ title }}</div>

        <div
          v-if="subtitle"
          class="expertise-priority__subtitle"
          v-for="(text, index) in content"
          :key="index"
        >
          {{ text.content1 }}
          <span class="custom-standing-pink">{{ text.pink }}</span
          >{{ text.content2 }}
        </div>
      </div>
    </div>

    <ol class="expertise-priority__list">
      <li
        class="expertise-priority__list-item"
        v-for="(priority, index) in prioritys"
        :key="index"
        ref="listAnimation"
      >
        <div class="container">
          <p class="expertise-priority__list-item-number">0{{ index + 1 }}</p>

          <div class="expertise-priority__list-item-content">
            <span v-if="priority.heading">{{ priority.heading }}</span>

            <p v-if="priority.content">
              {{ priority.content }}
            </p>

            <div
              v-if="priority.tags"
              class="expertise-priority__list-item-tags"
            >
              <p v-for="(tag, index) in priority.tags" :key="index">
                {{ tag }}
              </p>
            </div>
          </div>

          <div
            class="expertise-priority__list-item-wrapper"
            v-if="priority.button"
          >
            <GradientButton
              title="Оставить заявку"
              @click="toggleSidebarFormStaff"
            />

            <a
              href="https://cherepovets.hh.ru/employer/1791569?hhtmFrom=vacancy_search_list"
              target="_blank"
              rel="noopener noreferrer"
              class="expertise-priority__list-item-button"
            >
              Откликнуться на hh.ru
            </a>
          </div>

          <span class="badge" :class="`icon-${priority.icon}`"></span>
        </div>
      </li>
    </ol>
  </section>
</template>

<style lang="scss">
@import "~/assets/scss/helpers/mixin";
@import "~/assets/scss/helpers/fonts-mixin";

.expertise-priority {
  display: flex;
  flex-direction: column;
  padding: var(--unit-margin-y) 0;
  background-color: var(--color-blue);
  color: #fff;
  gap: 100px;
  overflow-x: hidden;
  margin-bottom: var(--unit-margin-y);

  .badge {
    transform: translateX(200px);
    opacity: 0;
    align-self: center;
    margin-left: auto;
    transition: opacity 0.3s ease-in-out, transform 0.4s ease-in-out;
  }

  &__heading {
    display: flex;
    justify-content: space-between;
  }

  &__title {
    @include font-h2;
  }

  &__subtitle {
    @include font-h5;

    width: 575px;
  }

  &__list {
    border-top: 1px solid #fff;
    border-bottom: 1px solid #fff;
  }

  &__list-item {
    height: 190px;
    display: flex;
    padding: 40px 0;
    position: relative;

    @include list-items-animation;

    &:not(:last-child)::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 100dvw;
      height: 1px;
      background-color: #fff;
    }

    .container {
      display: flex;
    }

    &:hover {
      transform: scale(1.05);

      .badge {
        opacity: 1;
        transform: translateX(0);
      }
    }
  }

  &__list-item-number {
    @include font-h6;

    margin-right: 400px;
  }

  &__list-item-content {
    width: 840px;
    display: flex;
    flex-direction: column;
    gap: 20px;

    span {
      @include font-h5;

      text-transform: uppercase;
      font-family: var(--ff-montserrat-bold);
    }

    p {
      @include font-text-2;
    }
  }

  &__list-item-tags {
    display: flex;
    gap: 4px;

    p {
      border: 1px solid #fff;
      border-radius: 16px;
      padding: 7px 16px;
      cursor: default;
    }
  }

  &__list-item-wrapper {
    @include flex-center;

    gap: 8px;
  }

  &__list-item-button {
    @include font-button-1;
    @include flex-center;

    width: max-content;
    border: 1px solid #fff;
    padding: 23px 20px;
    border-radius: 20px;
    transition: color 0.3s ease-in-out, background 0.3s ease-in-out;

    &:hover {
      background: #fff;
      color: var(--color-blue);
    }
  }

  @media (max-width: 475px) {
    gap: 40px;

    .badge {
      transform: translateX(0);
      opacity: 1;
      align-self: flex-start;
      margin-left: 0;
    }

    &__heading {
      flex-direction: column;
      justify-content: center;
      gap: 24px;
    }

    &__subtitle {
      max-width: 328px;
    }

    &__list-item {
      flex-direction: column;
      height: max-content;
      padding: 32px 0;

      .container {
        display: flex;
        flex-direction: column;
        gap: 24px;
      }

      &:hover {
        transform: none;
      }
    }

    &__list-item-number {
      margin-right: 0;
    }

    &__list-item-content {
      max-width: 328px;
      gap: 12px;
    }

    &__list-item-wrapper {
      flex-direction: column;
    }

    &__list-item-button {
      width: 100%;
      height: 50px;
      padding: 0;
    }

    #gradient-button-control {
      width: 100%;
      padding: 17px 16px;
    }

    &__list-item-tags {
      p {
        @include flex-center;

        text-align: center;
      }
    }
  }
}
</style>
