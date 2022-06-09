<template>
  <div>
    <h2 class="text-no-wrap text-center" :style="{ color: color }">
      {{ tweenedValue.toFixed(numOfDecimals) + " " + unit }}
    </h2>
    <p class="text-no-wrap text-center text-caption" :style="{ color: color }">
      {{ desc }}
    </p>
  </div>
</template>

<script>
import { gsap } from "gsap";
export default {
  data() {
    return {
      tweenedValue: 0,
    };
  },
  props: {
    value: {
      type: Number,
      require: true,
    },
    unit: {
      type: String,
      require: true,
    },
    desc: {
      type: String,
      require: true,
    },
    color: {
      type: String,
      default: "white",
    },
  },
  watch: {
    value(newValue) {
      gsap.to(this.$data, {
        duration: 1,
        ease: "power4.out",
        tweenedValue: newValue,
      });
    },
  },
  created() {
    gsap.to(this.$data, {
      duration: 1,
      ease: "power4.out",
      delay: 0.5,
      tweenedValue: this.value,
    });
  },
  computed: {
    numOfDecimals() {
      if (Math.floor(this.value) === this.value) return 0;
      return this.value.toString().split(".")[1].length;
    },
  },
};
</script>

<style lang="scss" scoped></style>
