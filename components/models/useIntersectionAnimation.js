import { ref, onMounted, onUnmounted } from "vue";

export function useIntersectionAnimation(
  className = "visible",
  threshold = 0.1
) {
  const listAnimation = ref([]);

  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(className);
      }
    });
  };

  onMounted(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold,
    });
    listAnimation.value.forEach((item) => observer.observe(item));

    onUnmounted(() => {
      listAnimation.value.forEach((item) => observer.unobserve(item));
    });
  });

  return { listAnimation };
}

export function useIntersectionObserver(
  callback,
  options = { threshold: 0.1 }
) {
  const elementRef = ref(null);

  onMounted(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          callback(entry);
        }
      });
    }, options);

    if (elementRef.value) observer.observe(elementRef.value);

    onUnmounted(() => observer.disconnect());
  });

  return elementRef;
}
