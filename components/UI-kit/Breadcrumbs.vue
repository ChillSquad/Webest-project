<script setup>
defineProps({
  items: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <nav class="breadcrumbs-custom" v-for="(item, index) in items" :key="index">
    <NuxtLink class="breadcrumbs-custom-link" :to="item.route">
      <span class="breadcrumbs-custom-lable icon-separator">{{
        item.label
      }}</span>
    </NuxtLink>
  </nav>
</template>

<style lang="scss" scoped>
@import "~/assets/scss/helpers/fonts-mixin";

.breadcrumbs-custom {
  display: none;
  justify-content: center;
  align-items: center;
  margin-bottom: 42px;

  .breadcrumbs-custom-link {
    :hover {
      color: var(--color-blue);

      &::before {
        transform: translateX(-5px);
        color: var(--color-blue);
      }
    }
  }

  .breadcrumbs-custom-lable {
    @include font-button-1;

    color: var(--color-black);
    transition: color 0.2s ease-in-out;
  }

  .icon-separator {
    display: flex;
    justify-content: center;
    align-items: center;
    &::before {
      content: "\0046";
      margin-right: 8px;
      font-size: 13px;
      color: var(--color-black);
      transition: color 0.2s ease-in-out, transform 0.2s ease-in-out;
      font-weight: inherit;
    }
  }

  @media (max-width: 475px) {
    display: flex;
    margin-bottom: 20px;
  }
}
</style>
