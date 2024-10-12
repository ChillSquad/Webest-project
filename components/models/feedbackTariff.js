import { ref } from "vue";
import { useState } from "#app";

const useFeedbackFormModelTariff = () => {
  const activeFormStepTariff = useState("activeFormStepTariff", () => {
    return 0;
  });

  const fieldsTariff = ref({
    name: "",
    email: "",
  });

  const errorsTariff = ref({
    name: false,
    email: false,
  });

  const validateFields = () => {
    errorsTariff.value.name = fieldsTariff.value.name.trim() === "";
    errorsTariff.value.email = fieldsTariff.value.email.trim() === "";

    return !errorsTariff.value.name && !errorsTariff.value.email;
  };

  const clearFields = () => {
    fieldsTariff.value.name = "";
    fieldsTariff.value.email = "";
  };

  const submitTariff = async () => {
    if (!validateFields()) {
      return;
    }

    try {
      const response = await $fetch(
        "https://94fc376960523c1c.mokky.dev/orders",
        {
          method: "POST",
          body: fieldsTariff.value,
        }
      );

      if (response) {
        activeFormStepTariff.value = 1;
        clearFields();
      }
    } catch (error) {
      activeFormStepTariff.value = 2;
    }
  };

  return {
    activeFormStepTariff,
    fieldsTariff,
    errorsTariff,
    submitTariff,
  };
};

export { useFeedbackFormModelTariff };
