<script setup>
import { ref, onMounted } from "vue";

const listItems = ref([]);

const handleIntersection = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
};

onMounted(() => {
  const observer = new IntersectionObserver(handleIntersection, {
    threshold: 0.1,
  });

  listItems.value.forEach((item) => {
    observer.observe(item);
  });
});

defineProps({
  title: {
    type: String,
    default: null,
  },
  reports: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <div class="container">
    <section class="expertise-development-reporting">
      <div class="expertise-development-reporting__title">{{ title }}</div>

      <ul class="expertise-development-reporting__list">
        <li
          class="expertise-development-reporting__item"
          v-for="(report, index) in reports"
          ref="listItems"
        >
          <p class="expertise-development-reporting__item-heading">
            {{ report.heading }}
          </p>

          <div class="expertise-development-reporting__item-list">
            <p class="icon-marker" v-for="(content, index) in report.content">
              {{ content }}
            </p>
          </div>

          <span
            :class="[
              { 'item-first': index === 0 },
              { 'item-second': index === 1 },
              { 'item-third': index === 2 },
            ]"
            >{{ index + 1 }}</span
          >
        </li>
      </ul>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@import "~/assets/scss/helpers/fonts-mixin";

.expertise-development-reporting {
  margin-bottom: var(--unit-margin-y);

  &__title {
    @include font-h2;

    margin-bottom: 100px;
  }

  &__list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 8px;
  }

  &__item {
    height: 340px;
    width: auto;
    display: flex;
    align-items: end;
    background-color: var(--color-grey-light);
    border-radius: var(--border-radius-40);
    padding: var(--padding-card);
    position: relative;
    overflow: hidden;
    transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;

    .icon-marker {
      @include font-text-3;

      display: flex;
      align-items: first baseline;
      z-index: 1;
      transform: translateY(210px);
      transition: transform 0.3s ease-in-out;

      &:before {
        content: "\004E";
        font-size: 12px;
        color: var(--color-blue);
        padding-right: 8px;
        transition: color 0.3s ease-in-out, transform 0.3s ease-in-out;
      }
    }

    &:hover {
      background-color: var(--color-blue);
      color: #fff;

      .icon-marker {
        transform: translateY(0);
        &:before {
          color: #fff;
        }
      }

      .item-first,
      .item-second,
      .item-third {
        opacity: 0.6;
      }
    }
  }

  &__item-heading {
    @include font-text-2;

    width: 362px;
    z-index: 1;
  }

  &__item-list {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .item-first,
  .item-second,
  .item-third {
    font-weight: 900;
    font-size: 480px;
    position: absolute;
    color: #fff;
    pointer-events: none;
    user-select: none;
  }

  .item-first {
    right: 0;
    bottom: -120px;
  }

  .item-second,
  .item-third {
    right: -70px;
    bottom: -120px;
  }

  @media (max-width: 475px) {
    &__title {
      margin-bottom: 40px;
    }

    &__list {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: repeat(3, 1fr);
      gap: 8px;
    }

    &__item-list {
      gap: 4px;
    }

    &__item {
      height: 200px;
      border-radius: 24px;
      opacity: 0;
      transform: translateY(50px);
      transition: opacity 0.5s ease-out, transform 0.5s ease-out;

      &.visible {
        opacity: 1;
        transform: translateY(0);
      }

      .icon-marker {
        transform: translateY(0);

        &:before {
          font-size: 12px;
        }
      }
    }

    .item-first,
    .item-second,
    .item-third {
      font-weight: 900;
      font-size: 320px;
      position: absolute;
      color: #fff;
      pointer-events: none;
      user-select: none;
    }

    .item-first {
      right: 0;
      bottom: -100px;
    }

    .item-second,
    .item-third {
      right: -30px;
      bottom: -100px;
    }
  }
}
</style>
