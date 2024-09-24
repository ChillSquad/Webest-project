<template>
  <section class="hero-section">
    <button ref="button" class="call-to-action-btn">Смотреть сайт</button>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

// Линейная интерполяция
const lerp = (current, target, factor) =>
  current * (1 - factor) + target * factor;

// Позиция мыши
const mousePosition = ref({ x: 0, y: 0 });

// Слушаем события мыши
const updateMousePosition = (e) => {
  mousePosition.value.x = e.pageX;
  mousePosition.value.y = e.pageY;
};

// Функция для вычисления расстояния
const calculateDistance = (x1, y1, x2, y2) => {
  return Math.hypot(x1 - x2, y1 - y2);
};

// Ссылка на кнопку
const button = ref(null);

class MagneticObject {
  constructor(domElement) {
    this.domElement = domElement;
    this.boundingClientRect = this.domElement.getBoundingClientRect();
    this.triggerArea = 200;
    this.interpolationFactor = 0.8;

    this.lerpingData = {
      x: { current: 0, target: 0 },
      y: { current: 0, target: 0 },
    };

    this.render();
    this.resize();
  }

  // Адаптируем размеры при изменении окна
  resize() {
    window.addEventListener("resize", () => {
      this.boundingClientRect = this.domElement.getBoundingClientRect();
    });
  }

  // Основной рендеринг
  render() {
    // Обновляем boundingClientRect для точного отслеживания позиции кнопки
    this.boundingClientRect = this.domElement.getBoundingClientRect();

    const distanceFromMouseToCenter = calculateDistance(
      mousePosition.value.x,
      mousePosition.value.y,
      this.boundingClientRect.left + this.boundingClientRect.width / 2,
      this.boundingClientRect.top + this.boundingClientRect.height / 2
    );

    let targetHolder = { x: 0, y: 0 };

    if (distanceFromMouseToCenter < this.triggerArea) {
      this.domElement.classList.add("focus");
      targetHolder.x =
        (mousePosition.value.x -
          (this.boundingClientRect.left + this.boundingClientRect.width / 2)) *
        0.2;
      targetHolder.y =
        (mousePosition.value.y -
          (this.boundingClientRect.top + this.boundingClientRect.height / 2)) *
        0.2;
    } else {
      this.domElement.classList.remove("focus");
    }

    this.lerpingData.x.target = targetHolder.x;
    this.lerpingData.y.target = targetHolder.y;

    for (const item in this.lerpingData) {
      this.lerpingData[item].current = lerp(
        this.lerpingData[item].current,
        this.lerpingData[item].target,
        this.interpolationFactor
      );
    }

    this.domElement.style.transform = `translate(${this.lerpingData.x.current}px, ${this.lerpingData.y.current}px)`;

    window.requestAnimationFrame(() => this.render());
  }
}

onMounted(() => {
  window.addEventListener("mousemove", updateMousePosition);

  // Создаем экземпляр MagneticObject после монтирования компонента
  if (button.value) {
    new MagneticObject(button.value);
  }
});

onUnmounted(() => {
  // Убираем слушатели при размонтировании компонента
  window.removeEventListener("mousemove", updateMousePosition);
});
</script>

<style lang="scss">
.hero-section {
  display: flex;
  align-items: center;
  justify-content: flex-end; /* Размещаем кнопку справа */
  padding-right: 20px;
  // height: 100vh;
}

.call-to-action-btn {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: none;
  background: var(--color-button-gradient);
  cursor: pointer;
  transition: all 0.2s;
  font-weight: 400;
  font-size: 24px;
  outline: none;
  color: white;
}

.call-to-action-btn:hover {
  color: black;
  transition: all 0.2s;
}
</style>
