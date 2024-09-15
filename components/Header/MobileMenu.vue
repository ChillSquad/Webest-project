<script setup>
import { isShowMobileMenu } from "../models/header";
import Navigation from "./Navigation.vue";
import Contacts from "./Contacts.vue";
</script>

<template>
  <Transition name="fade" mode="out-in">
    <div class="mobile-menu" v-if="isShowMobileMenu">
      <div class="container">
        <div class="mobile-menu__inner">
          <Navigation />

          <Contacts phone="+7 (495) 128-22-90" mail="info@webest.ru" />
        </div>
      </div>
    </div>
  </Transition>
</template>
