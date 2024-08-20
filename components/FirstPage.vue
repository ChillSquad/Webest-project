<template>
  <div
    class="custom-component"
    @mousemove="handleMouseMove"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <div class="content">
      <div @click="toggleFeedbackForm" class="first-page">
        <div class="container">
          <div class="first-page__inner">
            <div class="first-page__heading">
              <h1>СОЗДАЕМ <span>И РАЗВИВАЕМ</span></h1>
              <p>
                E-commerce проекты, B2B- и B2C-сервисы, мобильные приложения,
                корпоративные сайты для компаний в сфере услуг и производства
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="custom-cursor" :class="{ visible: isCursorVisible }">
      <div
        class="custom-cursor__circle"
        :style="circleStyle"
        ref="customCursorCircle"
      >
        <span :style="textStyle">Оставить <span>заявку</span></span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
// import { useFeedbackModel } from "./models/feedback";

// const { isActive, toggleFeedbackForm } = useFeedbackModel();

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
  isCursorVisible.value = true;
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
</script>

<style lang="scss" scoped>
$ease: cubic-bezier(0.23, 1, 0.32, 1);

.custom-cursor {
  pointer-events: none;
  position: relative;
  z-index: 100;
  opacity: 0;
  transition: opacity 0.6s $ease;

  &.visible {
    opacity: 1;
  }
}

.custom-cursor__circle {
  position: fixed;
  cursor: none;
  top: 0;
  left: 0;
  width: 220px;
  height: 220px;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.4s $ease;

  background: rgba($color: #fff, $alpha: 0.3);
  backdrop-filter: blur(10px);

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 300%;
    height: 300%;
    background: transparent;
    transform: translate(-50%, -50%);
  }

  span {
    font-family: var(--ff-semi-bold);
    display: flex;
    flex-direction: column;
    color: #fff;
    font-size: 20px;
    text-align: center;
    z-index: 1;
    transition: transform 0.4s $ease;
  }
}
</style>
