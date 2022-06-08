<template>
  <v-container fluid class="pa-0">
    <div class="hero pb-16">
      <div class="overlay"></div>
      <div class="heading">
        <h1 class="text-h2">Model S</h1>
        <p>Plaid</p>
      </div>
      <v-container class="spec-container">
        <v-row align="center">
          <v-spacer></v-spacer>
          <v-col
            v-for="spec in specs"
            :key="`${spec.text}-spec`"
            cols="6"
            md="2"
          >
            <h2 class="white--text">{{ spec.text }}</h2>
            <p class="white--text">{{ spec.desc }}</p>
          </v-col>
          <v-col cols="12" md="2">
            <v-btn outlined rounded color="white">ORDER NOW</v-btn>
          </v-col>
          <v-spacer></v-spacer>
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
    <ImageGallary></ImageGallary>
    <spec-comparison></spec-comparison>
    <help-messager></help-messager>
  </v-container>
</template>

<script>
import ImageGallary from "@/components/ImageGallary.vue";
import VideoCarousel from "../components/VideoCarousel.vue";
import SpecComparison from "@/components/SpecComparison.vue";
import HelpMessager from "@/components/HelpMessager.vue";
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
  components: { VideoCarousel, ImageGallary, SpecComparison, HelpMessager },
};
</script>

<style lang="scss" scoped>
.hero {
  width: 100%;
  min-height: 100vh;
  background: url("../assets/Model-3.jpg");
  background-size: cover;
  background-position: center center;
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

  .spec-container {
    width: min(100%, 50rem);
  }

  &.second {
    background: url("../assets/Model-S-Interior.jfif");
    background-position: center center;

    .overlay {
      bottom: auto;
      top: 0;
      background: linear-gradient(to bottom, black 40%, transparent);
    }
  }
}
</style>
