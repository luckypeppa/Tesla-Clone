<template>
  <v-container fluid class="pa-0">
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

    <div class="hero second">
      <div class="overlay"></div>
      <v-lazy transition="slide-up-transition">
        <div class="heading">
          <h1 class="text-h4 white--text">Interior of The Future</h1>
        </div>
      </v-lazy>
    </div>

    <VideoCarousel></VideoCarousel>
  </v-container>
</template>

<script>
import VideoCarousel from "../components/VideoCarousel.vue";
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
      showInteriorText: false,
    };
  },
  methods: {
    onIntersect(entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.showInteriorText = true;
        }
      });
    },
  },
  components: { VideoCarousel },
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
    height: 35vh;
    position: absolute;
    z-index: -1;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(to top, black, transparent);
  }

  &.second {
    background: url("../assets/Model-S-Interior.jfif");

    .overlay {
      bottom: auto;
      top: 0;
      background: linear-gradient(to bottom, black 40%, transparent);
    }
  }
}
</style>
