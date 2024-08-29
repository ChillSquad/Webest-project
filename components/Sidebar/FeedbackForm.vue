<script setup>
import SideStepFirst from "./SideStepFirst.vue";
import SideStepSecond from "./SideStepSecond.vue";
import SideStepThird from "./SideStepThird.vue";
import { useFeedbackFormModel } from "../models/feedback";

const { activeFormStep } = useFeedbackFormModel();
</script>

<template>
  <form @submit.prevent="false">
    <Transition name="fade" mode="out-in">
      <SideStepFirst v-if="activeFormStep === 0" />
      <SideStepSecond v-else-if="activeFormStep === 1" />
      <SideStepThird v-else="activeFormStep === 2" />
    </Transition>
  </form>
</template>
