<script setup>
import SideStepFirstStaff from "./SideStepFirstStaff.vue";
import SideStepFirst from "./SideStepFirst.vue";
import SideStepSecond from "./SideStepSecond.vue";
import SideStepThird from "./SideStepThird.vue";
import { useFeedbackFormModel } from "../models/feedback";
import { useFeedbackFormModelStaff } from "../models/feedbackStaff";
import { useSidebarModel } from "../models/sidebar";

const { isActiveStaff, isActive } = useSidebarModel();
const { activeFormStepStaff } = useFeedbackFormModelStaff();
const { activeFormStep } = useFeedbackFormModel();
</script>

<template>
  <form @submit.prevent="false">
    <Transition name="fade" mode="out-in">
      <template v-if="isActive">
        <SideStepFirst v-if="activeFormStep === 0" />
        <SideStepSecond v-else-if="activeFormStep === 1" />
        <SideStepThird v-else-if="activeFormStep === 2" />
      </template>
    </Transition>

    <Transition name="fade" mode="out-in">
      <template v-if="isActiveStaff">
        <SideStepFirstStaff v-if="activeFormStepStaff === 0" />
        <SideStepSecond v-else-if="activeFormStepStaff === 1" />
        <SideStepThird v-else-if="activeFormStepStaff === 2" />
      </template>
    </Transition>
  </form>
</template>
