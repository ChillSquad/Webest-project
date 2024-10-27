<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";

const props = defineProps({
  reviews: {
    type: Array,
    required: true,
  },
});

const isSliderReady = ref(false);
const buttonPrev = ref();
const buttonNext = ref();

const currentIndex = ref(0);
const count = computed(() => props.reviews.length);

onMounted(() => {
  isSliderReady.value = true;

  window.addEventListener("keydown", handleKeyPress);
});

onUnmounted(() => {
  window.removeEventListener("keydown", handleKeyPress);
});

const handleKeyPress = (event) => {
  if (event.key === "ArrowLeft") {
    buttonPrev.value?.click();
  } else if (event.key === "ArrowRight") {
    buttonNext.value?.click();
  }
};

const updateCurrentIndex = (swiper) => {
  currentIndex.value = swiper.activeIndex;
};
</script>

<template>
  <section class="team-modal-slider">
    <swiper
      v-if="isSliderReady"
      :navigation="{
        prevEl: buttonPrev,
        nextEl: buttonNext,
      }"
      :pagination="{ clickable: true }"
      :modules="[Navigation]"
      :loop="false"
      direction="horizontal"
      :breakpoints="{ 0: { slidesPerView: 1, spaceBetween: 16 } }"
      @slideChange="updateCurrentIndex"
    >
      <swiper-slide v-for="(review, index) in reviews" :key="index">
        <article class="team-slider__slide">
          <div class="team-slider__slide-heading">
            <p class="team-slider__slide-heading-title">
              {{ review.occupation }}
            </p>

            <p class="team-slider__slide-heading-score">{{ review.score }}</p>
          </div>

          <div class="team-slider__slide-tags">
            <article
              class="team-slider__slide-tags-item"
              v-for="(tag, index) in review.tags"
              :key="index"
            >
              {{ tag }}
            </article>
          </div>

          <div class="team-slider__slide-review">
            <p class="team-slider__slide-review-title">{{ review.title1 }}</p>

            <ol class="team-slider__slide-review-list">
              <li
                class="team-slider__slide-review-item"
                v-for="(item, index) in review.content1"
                :key="index"
              >
                <p>{{ index + 1 }}</p>

                {{ item }}
              </li>
            </ol>
          </div>

          <div class="team-slider__slide-review">
            <p class="team-slider__slide-review-title">{{ review.title2 }}</p>

            <ol class="team-slider__slide-review-list">
              <li
                class="team-slider__slide-review-item"
                v-for="(item, index) in review.content2"
                :key="index"
              >
                <p>{{ index + 1 }}</p>

                <span class="team-slider__slide-review-item">{{ item }}</span>
              </li>
            </ol>
          </div>

          <div class="team-slider__slide-footer">
            <div class="team-slider__slide-footer-rating">
              <div
                class="team-slider__slide-footer-rating-item"
                v-for="(rating, index) in review.ratings"
                :key="index"
              >
                {{ rating.title }}

                <div class="team-slider__slide-footer-rating-list">
                  <span
                    v-for="(heart, heartIndex) in rating.heart"
                    :key="heartIndex"
                    :class="`icon-${heart}`"
                  >
                  </span>
                </div>
              </div>
            </div>

            <p class="team-slider__slide-footer-date">{{ review.date }}</p>
          </div>
        </article>
      </swiper-slide>
    </swiper>

    <button class="slide-button icon-slide-to-left" ref="buttonPrev"></button>

    <button class="slide-button icon-slide-to-right" ref="buttonNext"></button>

    <div class="team-modal-slider__swiper">
      <div class="team-modal-slider__bar-wrapper">
        <div class="team-modal-slider__bar">
          <div
            class="team-modal-slider__progress"
            :style="{ width: ((currentIndex + 1) / count) * 100 + '%' }"
          ></div>
        </div>
      </div>

      <div class="team-modal-slider__pagination">
        0{{ currentIndex + 1 }}-0{{ count }}
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import "~/assets/scss/helpers/mixin";
@import "~/assets/scss/helpers/fonts-mixin";

.team-modal-slider {
  position: relative;

  &__bar {
    margin-top: 18px;
  }

  &__card-image {
    width: 100%;
    height: auto;
  }

  &__card-heading {
    @include font-h2;

    margin-bottom: 100px;
    align-self: center;
  }

  &__card-content {
    @include font-h5;

    max-width: 67%;
    margin-bottom: 40px;
  }

  .slide-button {
    background: #fff;
  }

  .icon-slide-to-left {
    z-index: 2;
    position: absolute;
    top: 50%;
    left: 24px;
    transform: translate(0%, -50%);
  }

  .icon-slide-to-right {
    z-index: 2;
    position: absolute;
    top: 50%;
    right: 24px;
    transform: translate(0%, -50%);
  }

  &__card-username {
    @include font-text-2;
  }

  &__bar {
    width: 100%;
    height: 2px;
    background-color: #e0e0e0;
  }

  &__progress {
    height: 100%;
    background-color: var(--color-blue);
    transition: width 0.3s ease;
  }

  &__pagination {
    margin-top: 8px;
    font-size: 14px;
  }

  .swiper-slide,
  &__card-username {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  &__card-avatar {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin-bottom: 20px;
  }

  &__card-username {
    margin-bottom: 40px;

    span {
      color: var(--color-dark-blue);
    }
  }

  .team-slider__slide {
    width: 840px;
    height: 864px;
    background: #fff;
    border-radius: var(--border-radius-40);
    padding: 40px;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    gap: 32px;

    &::-webkit-scrollbar {
      display: none;
    }

    &-heading {
      display: flex;
      justify-content: space-between;

      &-title {
        @include font-h4;
      }

      &-score {
        @include flex-center;
        @include font-text-2;

        width: 36px;
        height: 36px;
        color: #fff;
        background-color: var(--color-blue);
        border-radius: 8px;
      }
    }

    &-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 4px;

      &-item {
        @include flex-center;
        @include font-text-4;

        color: var(--color-dark-blue);
        background-color: var(--color-grey-light);
        padding: 8px 16px;
        border-radius: 16px;
      }
    }

    &-review {
      &-title {
        @include font-h7;

        margin-bottom: 16px;
        text-align: start;
      }

      &-list {
        @include font-text-2;

        display: flex;
        flex-direction: column;
        gap: 8px;
        list-style-type: none;
      }

      &-item {
        display: flex;
        text-align: left;

        p {
          color: var(--color-blue);
          margin-right: 12px;
        }
      }
    }

    &-footer {
      position: static;
      display: flex;
      justify-content: space-between;
      align-items: center;

      &-rating {
        width: 500px;
        height: max-content;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 20px;

        &-item {
          min-width: 150px;
          height: 46px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: start;
        }

        .icon-heart-empty {
          &:after {
            content: "\0055";
            font-size: 17px;
            color: var(--color-blue);
          }
        }

        .icon-heart {
          &:after {
            content: "\0056";
            font-size: 17px;
            color: var(--color-blue);
          }
        }

        &-list {
          display: flex;
          gap: 4px;
        }
      }

      &-date {
        @include font-text-5;

        color: var(--color-dark-blue);
        align-self: end;
      }
    }
  }

  .team-modal-slider__swiper {
    display: flex;
    flex-direction: column;

    .team-modal-slider__bar {
      max-width: 840px;
      align-self: center;
      margin-top: 28px;
    }

    .team-modal-slider__pagination {
      width: 840px;
      align-self: center;
    }
  }

  @media (max-width: 475px) {
    &__card-heading {
      margin-bottom: 40px;
    }

    .slide-button {
      display: none;
    }

    .swiper {
      padding: 0 16px;
    }

    .team-slider__slide {
      max-width: 100%;
      height: 500px;
      padding: 20px;
    }

    .team-modal-slider__swiper {
      .team-modal-slider__bar-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0 16px;
      }

      .team-modal-slider__bar {
        width: 100%;
      }

      .team-modal-slider__pagination {
        padding: 0 16px;
        width: 100%;
      }
    }
  }
}
</style>
