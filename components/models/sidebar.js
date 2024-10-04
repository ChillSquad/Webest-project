const useSidebarModel = () => {
  const isActive = useState("form-active", () => false);

  const isActiveStaff = useState("staff-modal-active", () => false);

  const isActiveCase = useState("case-modal-active", () => false);

  const toggleSidebarForm = () => {
    isActive.value = !isActive.value;
  };

  const toggleSidebarFormStaff = () => {
    isActiveStaff.value = !isActiveStaff.value;
  };

  const toggleSidebarFormCase = () => {
    isActiveCase.value = !isActiveCase.value;
  };

  return {
    isActive,
    toggleSidebarForm,
    isActiveStaff,
    toggleSidebarFormStaff,
    isActiveCase,
    toggleSidebarFormCase,
  };
};

export { useSidebarModel };
