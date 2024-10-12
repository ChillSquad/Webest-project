const useSidebarModel = () => {
  const isActive = useState("form-active", () => false);

  const isActiveStaff = useState("staff-modal-active", () => false);

  const isActiveCase = useState("case-modal-active", () => false);

  const isActiveBlog = useState("blog-modal-active", () => false);

  const isActiveTariff = useState("tariff-modal-active", () => false);

  const toggleSidebarForm = () => {
    isActive.value = !isActive.value;
  };

  const toggleSidebarFormStaff = () => {
    isActiveStaff.value = !isActiveStaff.value;
  };

  const toggleSidebarFormCase = () => {
    isActiveCase.value = !isActiveCase.value;
  };

  const toggleSidebarFormBlog = () => {
    isActiveBlog.value = !isActiveBlog.value;
  };

  const toggleSidebarFormTariff = () => {
    isActiveTariff.value = !isActiveTariff.value;
  };

  return {
    isActive,
    toggleSidebarForm,
    isActiveStaff,
    toggleSidebarFormStaff,
    isActiveCase,
    toggleSidebarFormCase,
    isActiveBlog,
    toggleSidebarFormBlog,
    isActiveTariff,
    toggleSidebarFormTariff,
  };
};

export { useSidebarModel };
