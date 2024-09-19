<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import Breadcrumb from "primevue/breadcrumb";

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
});

const route = useRoute();

const home = ref({
  label: "Главная",
  route: "/",
});
</script>

<template>
  <Breadcrumb
    :home="home"
    :model="props.items"
    :pt="{
      root: { class: 'breadcrumb-root' },
      menu: { class: 'breadcrumb-menu' },
      menuitem: { class: 'breadcrumb-menuitem' },
      action: { class: 'breadcrumb-action' },
      icon: { class: 'breadcrumb-icon' },
      label: { class: 'breadcrumb-label' },
      separator: { class: 'icon-separator' },
      separatorIcon: { class: 'breadcrumb-separatorIcon' },
    }"
  >
    <template #item="{ item, props }">
      <nav>
        <router-link
          v-if="item.route"
          v-slot="{ href, navigate }"
          :to="item.route"
          custom
        >
          <a
            :href="href"
            v-bind="props.action"
            @click="navigate"
            :class="{ 'breadcrumb-active': route.path === item.route }"
          >
            <span>{{ item.label }}</span>
          </a>
        </router-link>
      </nav>
    </template>
  </Breadcrumb>
</template>

<style lang="scss">
@import "../../assets/scss/helpers/fonts-mixin";

.breadcrumb-menu {
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
}

.breadcrumb-menuitem {
  list-style: none;
}

.breadcrumb-action {
  @include font-text-2;

  color: var(--color-dark-blue);
}

.breadcrumb-active {
  color: var(--color-blue);
}

.icon-separator {
  display: flex;
  list-style: none;
  &:after {
    content: "\0045";
    font-size: 11px;
    color: var(--color-dark-blue);
    font-weight: inherit;
  }
}

svg.breadcrumb-separatorIcon {
  display: none;
}
</style>
