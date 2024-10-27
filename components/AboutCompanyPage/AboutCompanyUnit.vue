<script setup>
const images = Array.from({ length: 9 }, (_, i) => ({
  src: `/images/imageCompany${i + 1}.png`,
  alt: `imageCompany${i + 1}`,
}));

const listItems = ref([]);

const handleIntersection = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
};

onMounted(() => {
  const observer = new IntersectionObserver(handleIntersection, {
    threshold: 0.1,
  });

  listItems.value.forEach((item) => {
    observer.observe(item);
  });
});
</script>

<template>
  <div class="about-company-unit">
    <div class="about-company-unit__photo-collage">
      <img
        v-for="(image, index) in images"
        ref="listItems"
        :key="index"
        :src="image.src"
        :alt="image.alt"
      />
    </div>
    <div class="about-company-unit__inner">
      <div class="about-company-unit__about">
        <div class="about-company-content">
          <div class="about-company-content__inner">
            <a href="#" id="title-button-class-management" class="title-button">
              <p class="title-button__heading icon-arrow-right">
                <NuxtLink to="/team">
                  <span class="title-button__span">
                    кратко <br />
                    о webest
                  </span>
                </NuxtLink>
              </p>
            </a>

            <div class="about-company-content__subtitle">
              Узнайте больше о нашей
              <span class="custom-standing-purple">команде</span>
              и последних
              <span class="custom-standing-yellow">новостях</span>
              компании
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
