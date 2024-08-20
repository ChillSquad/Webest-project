const useFeedbackModel = () => {
  const isActive = useState("form-active", () => false);

  const toggleFeedbackForm = () => {
    isActive.value = !isActive.value;
  };

  return { isActive, toggleFeedbackForm };
};

export { useFeedbackModel };
