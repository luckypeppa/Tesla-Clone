<template>
  <div class="slider">
    <div class="images">
      <transition-group
        @before-enter="onBeforeEnter"
        @leave="onLeave"
        @after-leave="onAfterLeave"
        :css="false"
      >
        <img
          v-for="(img, index) in imgs"
          :key="`${index}-order-slider`"
          :src="img"
          v-show="activeIndex === index"
        />
      </transition-group>
    </div>
    <v-btn icon absolute class="arrow left" @click="slide(-1)">
      <v-icon color="black">mdi-arrow-left-circle-outline</v-icon>
    </v-btn>
    <v-btn icon absolute class="arrow right" @click="slide(1)">
      <v-icon color="black">mdi-arrow-right-circle-outline</v-icon>
    </v-btn>
  </div>
</template>

<script>
import fullImg from "@/assets/order-slider/models/full.jpg";
import headImg from "@/assets/order-slider/models/head.jpg";
import interiorImg from "@/assets/order-slider/models/interior.jpg";
import sideImg from "@/assets/order-slider/models/side.jpg";
import { gsap } from "gsap";
export default {
  data() {
    return {
      imgs: [fullImg, headImg, interiorImg, sideImg],
    };
  },
  methods: {
    slide(num) {
      let newIndex = this.activeIndex + num;
      if (newIndex > this.imgs.length - 1) newIndex = 0;
      if (newIndex < 0) newIndex = this.imgs.length - 1;

      this.$store.commit("SET_APPSLIDERACTIVEINDEX", newIndex);
    },
    onBeforeEnter(el, done) {
      gsap.from(el, {
        onComplete: done,
        opacity: 0.5,
        duration: 1,
        x: 50,
      });
    },
    onLeave(el, done) {
      gsap.to(el, {
        onComplete: done,
        opacity: 0,
        duration: 0.5,
        position: "absolute",
        inset: 0,
      });
    },
    onAfterLeave(el) {
      el.style.position = "relative";
      el.style.opacity = 1;
    },
  },
  computed: {
    activeIndex() {
      return this.$store.state.appSliderActiveIndex;
    },
  },
};
</script>

<style lang="scss" scoped>
.slider {
  position: relative;

  &:hover .arrow {
    opacity: 1;
  }
  .images {
    width: 100%;

    img {
      width: 100%;
      height: 95vh;
      object-fit: cover;
    }
  }

  .arrow {
    top: 50%;
    opacity: 0;

    &.left {
      left: 0;
    }

    &.right {
      right: 0;
    }
  }
}
</style>
