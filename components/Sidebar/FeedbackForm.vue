<script setup>
import { useSidebarModel } from "../models/sidebar";
import { useFeedbackFormModel } from "../models/feedback";
import { useFeedbackFormModelStaff } from "../models/feedbackStaff";
import { useFeedbackFormModelTariff } from "../models/feedbackTariff";

import SideStepFirst from "./SideStepFirst.vue";
import SideStepThird from "./SideStepThird.vue";
import SideStepSecond from "./SideStepSecond.vue";
import SideStepFirstStaff from "./SideStepFirstStaff.vue";
import SideStepFirstTariff from "../ExpertisePage/SideStepFirstTariff.vue";

// Получаем isActiveTariff из useSidebarModel
const { isActiveTariff, isActiveStaff, isActive } = useSidebarModel();
const { activeFormStepStaff } = useFeedbackFormModelStaff();
const { activeFormStepTariff } = useFeedbackFormModelTariff();
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

    <!-- Добавляем обработку для тарифной формы -->
    <Transition name="fade" mode="out-in">
      <component
        v-if="isActiveTariff"
        :is="
          activeFormStepTariff === 0
            ? SideStepFirstTariff
            : getComponentForStep(activeFormStepTariff)
        "
      />
    </Transition>
  </form>
</template>
