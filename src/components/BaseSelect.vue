<template>
  <div>
    <h2>{{ title }}</h2>
    <div class="select" ref="select">
      <slot name="options" :onSelect="changeModelValue"></slot>
    </div>

    <slot name="descs" :value="value"></slot>
  </div>
</template>

<script>
export default {
  emits: ["update:modelValue"],
  props: {
    numOfOptions: {
      type: Number,
      default: 1,
    },
    value: {
      type: Number,
    },
    title: {
      type: String,
    },
  },
  mounted() {
    this.toggleActive(this.value);
  },
  methods: {
    changeModelValue(index) {
      this.$emit("input", index);
    },
    toggleActive(index) {
      const children = this.$refs.select.children;
      for (let i = 0; i < children.length; i++) {
        if (i === index) {
          children[i].classList.add("active");
        } else {
          children[i].classList.remove("active");
        }
      }
    },
  },
  watch: {
    value(newValue) {
      this.toggleActive(newValue);
    },
  },
};
</script>

<style lang="scss" scoped>
h2 {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 1rem;
}

.select {
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;

  & > * {
    width: 4rem;
    aspect-ratio: 1 / 1;
    padding: 0.3rem;
    border: 2px solid transparent;
    object-fit: cover;
    border-radius: 50%;
    transition: none;

    &.active {
      border: 2px solid blue;
      transition: all 200ms ease-in-out;
    }
  }
}
</style>
