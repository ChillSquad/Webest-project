import { ref } from "vue";

const isShowMobileMenu = ref(false);

const toggleMobileMenu = () => {
  isShowMobileMenu.value = !isShowMobileMenu.value;
};

export { isShowMobileMenu, toggleMobileMenu };
