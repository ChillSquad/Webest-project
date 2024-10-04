<script setup>
import Breadcrumbs from "~/components/UI-kit/Breadcrumbs.vue";
import GradientButton from "~/components/UI-kit/GradientButton.vue";

const props = defineProps({
  breadcrumbItems: Array,
  title: String,
  subtitle: String,
  buttonTitle: String,
  imageSrc: String,
  imageAlt: String,
  imageCaption: String,
});
</script>

<template>
  <div class="container">
    <section class="expertise-heading">
      <Breadcrumbs :items="breadcrumbItems" />

      <div class="expertise-heading__title">{{ title }}</div>

      <div class="expertise-heading__subtitle">
        {{ subtitle }}
      </div>

      <GradientButton :title="buttonTitle" />

      <div class="expertise-heading__review">
        <img class="expertise-heading__image" :src="imageSrc" :alt="imageAlt" />

        <div class="expertise-heading__image-caption">
          {{ imageCaption }}
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss">
@import "~/assets/scss/helpers/fonts-mixin";

.expertise-heading {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: var(--unit-margin-y);

  &__title {
    @include font-h2-inner;
  }

  &__subtitle {
    @include font-h5;

    width: 836px;
    margin: 24px 0 40px 0;
  }

  &__review {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
  }

  &__image {
    width: 100%;
    height: auto;
    border-radius: var(--border-radius-blog);
  }

  &__image-caption {
    @include font-text-1;

    width: 388px;
    text-align: center;
    position: absolute;
    bottom: 24px;
  }

  button.gradient-button {
    display: none;
  }

  @media (max-width: 360px) {
    button.gradient-button {
      display: block;

      margin-bottom: 40px;
    }

    &__title {
      @include font-h3-menu;
    }

    &__subtitle {
      width: 328px;
      font-size: 17px;
      line-height: 23.8px;
      margin: 16px 0 40px 0;
    }
  }
}
</style>
