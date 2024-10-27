import { ref, onMounted, onBeforeUnmount } from "vue";

export function useScreenSize() {
  const isLargeScreen = ref(true);

  const updateScreenSize = () => {
    if (typeof window !== "undefined") {
      isLargeScreen.value = window.innerWidth > 475;
    }
  };

  onMounted(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("resize", updateScreenSize);
      updateScreenSize();
    }
  });

  onBeforeUnmount(() => {
    if (typeof window !== "undefined") {
      window.removeEventListener("resize", updateScreenSize);
    }
  });

  return { isLargeScreen };
}
