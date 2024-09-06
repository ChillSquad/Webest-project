import { ref } from "vue";

const useFeedbackFormModel = () => {
  const activeFormStep = ref(0);

  const fields = ref({
    name: "",
    email: "",
    task: "",
  });

  const submit = async () => {
    try {
      const response = await $fetch(
        "https://94fc376960523c1c.mokky.dev/tasks",
        {
          method: "POST",
          body: fields.value,
        }
      );

      if (response) {
        // Если запрос успешен, переходим на шаг 1
        activeFormStep.value = 1;
      }
    } catch (error) {
      // Если произошла ошибка, переходим на шаг 2
      activeFormStep.value = 2;
    }
  };

  return {
    activeFormStep,
    fields,
    submit,
  };
};

export { useFeedbackFormModel };
