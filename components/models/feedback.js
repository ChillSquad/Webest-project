const useFeedbackFormModel = () => {
  const activeFormStep = ref(0);

  const fields = ref({
    name: "",
    email: "",
  });

  const nextStep = () => {
    activeFormStep.value++;
  };

  const submit = async () => {
    try {
      const response = await $fetch("/mail.php", {
        method: "POST",
        body: JSON.parse(JSON.stringify(fields.value)),
      });

      if (response) {
      }
    } catch (error) {}
  };

  return {
    activeFormStep,

    nextStep,
    submit,
  };
};

export { useFeedbackFormModel };
