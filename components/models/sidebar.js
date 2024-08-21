const useSidebarModel = () => {
  const isActive = useState("form-active", () => false);

  const toggleSidebarForm = () => {
    isActive.value = !isActive.value;
  };

  return { isActive, toggleSidebarForm };
};

export { useSidebarModel };
