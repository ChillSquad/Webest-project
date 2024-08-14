import { ref } from "vue";

// Создаем реактивное состояние для управления видимостью MobileMenu
const isShowMobileMenu = ref(false);

// Функция переключения состояния видимости MobileMenu
const toggleMobileMenu = () => {
  isShowMobileMenu.value = !isShowMobileMenu.value;
};

export { isShowMobileMenu, toggleMobileMenu };
