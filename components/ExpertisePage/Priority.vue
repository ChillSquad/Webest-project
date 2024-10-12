<script setup>
import { ref, onMounted } from "vue";

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
      <div class="container">
        <li
          class="expertise-priority__list-item"
          v-for="(priority, index) in prioritys"
          :key="index"
          ref="listItems"
        >
          <p class="expertise-priority__list-item-number">0{{ index + 1 }}</p>

          <div class="expertise-priority__list-item-content">
            <span>{{ priority.heading }}</span>

            <p>
              {{ priority.content }}
            </p>
          </div>
        </li>
      </div>
    </ol>
  </section>
</template>

<style lang="scss">
@import "~/assets/scss/helpers/fonts-mixin";

.expertise-priority {
  display: flex;
  flex-direction: column;
  padding: var(--unit-margin-y) 0;
  background-color: var(--color-blue);
  color: var(--color-white);
  gap: 100px;
  overflow-x: hidden;
  margin-bottom: var(--unit-margin-y);

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

    .custom-standing-pink {
      @include custom-standing;

      background: var(--color-pink);
      transform: rotate(1.1deg);
    }
  }

  &__list {
    border-top: 1px solid var(--color-white);
    border-bottom: 1px solid var(--color-white);
  }

  &__list-item {
    height: 190px;
    display: flex;
    padding: 40px 0;
    position: relative;
    opacity: 0;
    transform: translateY(50px);
    transition: opacity 0.5s ease-out, transform 0.5s ease-out;

    &.visible {
      opacity: 1;
      transform: translateY(0);
    }

    &:not(:last-child)::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 100dvw;
      height: 1px;
      background-color: var(--color-white);
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
      @include font-text-1;
    }
  }

  @media (max-width: 360px) {
    gap: 40px;

    &__heading {
      flex-direction: column;
      justify-content: center;
      gap: 24px;
    }

    &__subtitle {
      @include font-h5;

      max-width: 328px;
    }

    &__list-item {
      flex-direction: column;
      height: max-content;
      padding: 32px 0;
      gap: 24px;
    }

    &__list-item-number {
      @include font-text-3;

      margin-right: 0;
    }

    &__list-item-content {
      max-width: 328px;
      gap: 12px;

      span {
        font-size: 18px;
        line-height: 25.2px;
      }

      p {
        @include font-text-3;
      }
    }
  }
}
</style>
