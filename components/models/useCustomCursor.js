import { ref, onMounted, onUnmounted } from "vue";

export function useCustomCursor(isActive) {
  const isCursorVisible = ref(false);
  const x = ref(0);
  const y = ref(0);
  const circlePosX = ref(0);
  const circlePosY = ref(0);
  const circleStyle = ref({});
  const textStyle = ref({});
  const currentAngle = ref(0);
  const targetAngle = ref(0);

  const MAX_ROTATION_ANGLE = 10;
  const BASE_ROTATION_ANGLE = 5;

  let scrollTimeout;
  let isMouseInsideComponent = ref(false);

  const smoothRotate = () => {
    const diff = targetAngle.value - currentAngle.value;
    if (Math.abs(diff) > 0.1) {
      currentAngle.value += diff * 0.1;
      textStyle.value = { transform: `rotate(${currentAngle.value}deg)` };
      requestAnimationFrame(smoothRotate);
    } else {
      currentAngle.value = targetAngle.value;
      textStyle.value = { transform: `rotate(${currentAngle.value}deg)` };
    }
  };

  const handleMouseMove = (e) => {
    if (isActive.value) return;

    x.value = e.clientX;
    y.value = e.clientY;

    const circle = document.querySelector(".custom-cursor__circle");

    const circleRect = circle.getBoundingClientRect();
    const centerX = circleRect.left + circleRect.width / 2;
    const centerY = circleRect.top + circleRect.height / 2;

    const deltaX = x.value - centerX;
    const deltaY = y.value - centerY;
    const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

    targetAngle.value =
      Math.sign(deltaX) * Math.min(Math.abs(angle), MAX_ROTATION_ANGLE) +
      BASE_ROTATION_ANGLE;

    circlePosX.value = x.value - circle.clientWidth / 2;
    circlePosY.value = y.value - circle.clientHeight / 2;

    circleStyle.value = {
      transform: `translate(${circlePosX.value}px, ${circlePosY.value}px)`,
    };

    smoothRotate();
  };

  const handleMouseEnter = () => {
    if (!isActive.value) {
      isCursorVisible.value = true;
      isMouseInsideComponent.value = true;
    }
  };

  const handleMouseLeave = () => {
    isCursorVisible.value = false;
    isMouseInsideComponent.value = false;
  };

  const handleScroll = () => {
    isCursorVisible.value = false;

    if (scrollTimeout) {
      clearTimeout(scrollTimeout);
    }

    scrollTimeout = setTimeout(() => {
      if (isMouseInsideComponent.value) {
        isCursorVisible.value = true;
      }
    }, 100);
  };

  onMounted(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
  });

  onUnmounted(() => {
    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("scroll", handleScroll);
    clearTimeout(scrollTimeout);
  });

  return {
    isCursorVisible,
    circleStyle,
    textStyle,
    handleMouseEnter,
    handleMouseLeave,
  };
}
