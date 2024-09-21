<script setup>
import SideStepFirst from "./SideStepFirst.vue";
import SideStepFirstStaff from "./SideStepFirstStaff.vue";
import SideStepSecond from "./SideStepSecond.vue";
import SideStepThird from "./SideStepThird.vue";
import { useFeedbackFormModel } from "../models/feedback";
import { useFeedbackFormModelStaff } from "../models/feedbackStaff";
import { useSidebarModel } from "../models/sidebar";

const { isActiveStaff, isActive } = useSidebarModel();
const { activeFormStepStaff } = useFeedbackFormModelStaff();
const { activeFormStep } = useFeedbackFormModel();

const getComponentForStep = (step) => {
  if (step === 0) return SideStepFirst;
  if (step === 1) return SideStepSecond;
  if (step === 2) return SideStepThird;
  return null;
};
</script>

<template>
  <form @submit.prevent="false">
    <Transition name="fade" mode="out-in">
      <component v-if="isActive" :is="getComponentForStep(activeFormStep)" />
    </Transition>

    <Transition name="fade" mode="out-in">
      <component
        v-if="isActiveStaff"
        :is="
          activeFormStepStaff === 0
            ? SideStepFirstStaff
            : getComponentForStep(activeFormStepStaff)
        "
      />
    </Transition>
  </form>
</template>
