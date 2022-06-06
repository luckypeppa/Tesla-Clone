<template>
  <div class="hero">
    <div class="overlay"></div>
    <div class="heading">
      <h1 class="text-h2">Model S</h1>
      <p>Plaid</p>
    </div>
    <v-container>
      <v-row>
        <v-col v-for="spec in specs" :key="`${spec.text}-spec`">
          <h2 class="white--text">{{ spec.text }}</h2>
          <p class="white--text">{{ spec.desc }}</p>
        </v-col>
        <v-col>
          <v-btn outlined rounded color="white">ORDER NOW</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      specs: [
        {
          text: "396 mi",
          desc: "Range (EPA est.)",
        },
        {
          text: "1.99 s",
          desc: "0-60 mph*",
        },
        {
          text: "200 mph",
          desc: "Top Speed†",
        },
        {
          text: "1,020 hp",
          desc: "Peak Power",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.hero {
  width: 100%;
  min-height: 100vh;
  background: url("../assets/Model-3.jpg");
  background-size: cover;
  position: relative;
  z-index: 1;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 10rem;

  .overlay {
    height: 30vh;
    position: absolute;
    z-index: -1;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(
      to top,
      black,
      rgba(50, 50, 50, 0.8) 50%,
      transparent
    );
  }
}
</style>
