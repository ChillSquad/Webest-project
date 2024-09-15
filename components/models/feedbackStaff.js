import { ref } from "vue";
import { useState } from "#app";

const useFeedbackFormModelStaff = () => {
  const activeFormStepStaff = useState("activeFormStepStaff", () => {
    return 0;
  });

  const fieldsStaff = ref({
    name: "",
    email: "",
    about: "",
  });

  const errorsStaff = ref({
    name: false,
    email: false,
    about: false,
  });

  const validateFields = () => {
    errorsStaff.value.name = fieldsStaff.value.name.trim() === "";
    errorsStaff.value.email = fieldsStaff.value.email.trim() === "";
    errorsStaff.value.about = fieldsStaff.value.about.trim() === "";

    return (
      !errorsStaff.value.name &&
      !errorsStaff.value.email &&
      !errorsStaff.value.about
    );
  };

  const clearFields = () => {
    fieldsStaff.value.name = "";
    fieldsStaff.value.email = "";
    fieldsStaff.value.about = "";
  };

  const submitStaff = async () => {
    if (!validateFields()) {
      return;
    }

    try {
      const response = await $fetch(
        "https://94fc376960523c1c.mokky.dev/staff",
        {
          method: "POST",
          body: fieldsStaff.value,
        }
      );

      if (response) {
        // Если запрос успешен, переходим на шаг 1
        activeFormStepStaff.value = 1;
        clearFields();
      }
    } catch (error) {
      // Если произошла ошибка, переходим на шаг 2
      activeFormStepStaff.value = 2;
    }
  };

  return {
    activeFormStepStaff,
    fieldsStaff,
    errorsStaff,
    submitStaff,
  };
};

export { useFeedbackFormModelStaff };
