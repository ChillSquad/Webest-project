import { ref } from "vue";
import { useState } from "#app";

const useFeedbackFormModel = () => {
  const activeFormStep = useState("feedbackFormStep", () => {
    return 0;
  });

  const fields = ref({
    name: "",
    email: "",
    task: "",
  });

  const errors = ref({
    name: false,
    email: false,
    task: false,
  });

  const validateFields = () => {
    errors.value.name = fields.value.name.trim() === "";
    errors.value.email = fields.value.email.trim() === "";
    errors.value.task = fields.value.task.trim() === "";

    return !errors.value.name && !errors.value.email && !errors.value.task;
  };

  const clearFields = () => {
    fields.value.name = "";
    fields.value.email = "";
    fields.value.task = "";
  };

  const submit = async () => {
    if (!validateFields()) {
      return;
    }

    try {
      const response = await $fetch(
        "https://94fc376960523c1c.mokky.dev/tasks",
        {
          method: "POST",
          body: fields.value,
        }
      );

      if (response) {
        activeFormStep.value = 1;
        clearFields();
      }
    } catch (error) {
      activeFormStep.value = 2;
    }
  };

  return {
    activeFormStep,
    fields,
    errors,
    submit,
  };
};

export { useFeedbackFormModel };
