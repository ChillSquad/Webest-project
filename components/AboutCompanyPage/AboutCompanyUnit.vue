<script setup>
import { useIntersectionAnimation } from "../models/useIntersectionAnimation";

const { listAnimation } = useIntersectionAnimation("visible", 0.1);

const images = Array.from({ length: 9 }, (_, i) => ({
  src: `/images/imageCompany${i + 1}.png`,
  alt: `imageCompany${i + 1}`,
}));
</script>

<template>
  <div class="about-company-unit">
    <div class="about-company-unit__photo-collage">
      <img
        v-for="(image, index) in images"
        ref="listAnimation"
        :key="index"
        :src="image.src"
        :alt="image.alt"
      />
    </div>
    <div class="about-company-unit__inner">
      <div class="about-company-unit__about">
        <div class="about-company-content">
          <div class="about-company-content__inner">
            <NuxtLink
              to="/team"
              id="title-button-class-management"
              class="title-button"
            >
              <p class="title-button__heading icon-arrow-right">
                <span class="title-button__span">
                  кратко <br />
                  о webest
                </span>
              </p>
            </NuxtLink>

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
