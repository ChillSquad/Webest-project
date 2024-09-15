import { ref, onMounted, onUnmounted } from "vue";

export function useSliderCursor(isActive) {
  const isCursorVisible = ref(false);
  const circleStyle = ref({});

  const handleMouseMove = (e) => {
    if (isActive.value) return;

    const circle = document.querySelector(".slider-cursor__circle");

    if (circle) {
      const circlePosX = e.clientX - circle.clientWidth / 2;
      const circlePosY = e.clientY - circle.clientHeight / 2;

      circleStyle.value = {
        transform: `translate(${circlePosX}px, ${circlePosY}px)`,
      };
    }
  };

  const handleMouseEnter = () => {
    if (!isActive.value) {
      isCursorVisible.value = true;
    }
  };

  const handleMouseLeave = () => {
    isCursorVisible.value = false;
  };

  onMounted(() => {
    window.addEventListener("mousemove", handleMouseMove);
  });

  onUnmounted(() => {
    window.removeEventListener("mousemove", handleMouseMove);
  });

  return {
    isCursorVisible,
    circleStyle,
    handleMouseEnter,
    handleMouseLeave,
  };
}
