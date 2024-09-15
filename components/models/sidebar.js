const useSidebarModel = () => {
  const isActive = useState("form-active", () => false);

  const isActiveStaff = useState("staff-modal-active", () => false);

  const toggleSidebarForm = () => {
    isActive.value = !isActive.value;
  };

  const toggleSidebarFormStaff = () => {
    isActiveStaff.value = !isActiveStaff.value;
  };

  return {
    isActive,
    toggleSidebarForm,
    isActiveStaff,
    toggleSidebarFormStaff,
  };
};

export { useSidebarModel };
