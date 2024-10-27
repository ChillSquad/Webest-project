<script setup>
defineProps({
  title: {
    type: [String, null],
    default: null,
  },
  route: {
    type: [String, null],
    default: null,
  },
  arrow: {
    type: Boolean,
    default: true,
  },
});
</script>

<template>
  <NuxtLink :to="route" id="title-button-class-management" class="title-button">
    <p :class="['title-button__heading ', { 'icon-arrow-right': arrow }]">
      {{ title }}
    </p>
  </NuxtLink>
</template>

<style lang="scss">
@import "~/assets/scss/helpers/fonts-mixin";

.title-button {
  display: flex;
  gap: 21.33px;
  align-items: center;
  color: var(--color-black);
  pointer-events: none;
  cursor: pointer;

  &:hover {
    color: var(--color-blue);

    .icon-arrow-right {
      &:after {
        transform: translateX(8px);
      }
    }
  }

  &__heading {
    @include font-h2;

    transition: color 0.3s ease-in-out;

    br {
      display: none;
    }
  }

  .icon-arrow-right {
    pointer-events: all;

    &:after {
      content: "\0041";
      font-size: 56px;
      color: inherit;
      margin-left: 21px;
      transition: transform 0.3s ease-in-out;
    }
  }

  .title-arrow-right {
    transition: fill 0.3s ease-in-out;
  }

  &:hover .title-arrow-right {
    fill: var(--color-blue);
  }

  @media (max-width: 1000px) {
    &__heading {
      br {
        display: block;
      }
    }
  }

  @media (max-width: 900px) {
    .icon-arrow-right {
      &:after {
        font-size: 40px;
      }
    }
  }

  @media (max-width: 530px) {
    .icon-arrow-right {
      &:after {
        font-size: 35px;
      }
    }
  }

  @media (max-width: 475px) {
    .icon-arrow-right {
      &:after {
        font-size: 23px;
      }
    }
  }
}
</style>
