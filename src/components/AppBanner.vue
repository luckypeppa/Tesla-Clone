<template>
  <div class="banners">
    <v-row no-gutters v-for="(model, index) in models" :key="index">
      <v-col cols="12" class="banner">
        <v-img
          :src="model.image"
          height="100vh"
          width="100vw"
          v-intersect="{
            handler: onIntersect,
            options: {
              threshold: 0.1,
            },
          }"
          :id="index"
        ></v-img>
      </v-col>
    </v-row>
    <div class="home-modal" v-if="currentModel" :style="{ opacity }">
      <h1>{{ currentModel.name }}</h1>
      <h2>这是一个克隆网站! 仅作学习之用!</h2>
      <h2>This is a tesla website clone! Only for learning purpose!</h2>
      <p>{{ currentModel.text }}</p>
      <div class="buttons">
        <v-row justify="center">
          <v-col cols="7" md="3">
            <v-btn color="#424242" dark width="100%" rounded>{{
              currentModelIndex === "5" ? "SHOP NOW" : "CUSTOM ORDER"
            }}</v-btn>
          </v-col>
          <v-col cols="7" md="3" v-if="currentModelIndex !== '5'">
            <v-btn color="#E0E0E0" width="100%" rounded
              >EXISTING INVENTORY</v-btn
            >
          </v-col>
        </v-row>
      </div>
    </div>
  </div>
</template>

<script>
import MODEL3 from "../assets/Model-3.jpg";
import MODELX from "../assets/Model-X.jpg";
import MODELY from "../assets/Model-Y.jpg";
import MODELS from "../assets/Model-S.jpg";
import SOLARPANELS from "../assets/Solar-Panels.jpg";
import SOLARROOF from "../assets/Solor-Roof.jpg";
import _ from "lodash";
export default {
  data() {
    return {
      currentModelIndex: null,
      timer: null,
      scrollY: 0,
      onScroll: null,
      models: [
        {
          name: "Model 3",
          image: MODEL3,
          text: "Order Online for Touchless Delivery",
        },
        {
          name: "Model Y",
          image: MODELY,
          text: "Order Online for Touchless Delivery",
        },
        {
          name: "Model S",
          image: MODELS,
          text: "Order Online for Touchless Delivery",
        },

        {
          name: "Model X",
          image: MODELX,
          text: "Order Online for Touchless Delivery",
        },

        {
          name: "Solar Panel",
          image: SOLARPANELS,
          text: "Order Online for Touchless Delivery",
        },
        {
          name: "Solar Roof",
          image: SOLARROOF,
          text: "Order Online for Touchless Delivery",
        },
      ],
    };
  },
  created() {
    this.currentModelIndex = this.$route.hash ? this.$route.hash.slice(1) : 0;
    this.onScroll = _.throttle(this.scroll, 200, { leading: true });
  },
  methods: {
    onIntersect(entries) {
      entries.forEach((entry) => {
        const id = entry.target.id;
        if (entry.isIntersecting && this.$route.hash !== `#${id}`) {
          if (this.timer !== null) {
            clearTimeout(this.timer);
            this.timer = null;
          }

          this.timer = setTimeout(() => {
            this.currentModelIndex = id;
            this.$router.replace({ name: "home", hash: `#${id}` });
          }, 700);
        }
      });
    },
    scroll() {
      this.scrollY = window.scrollY;
    },
  },
  computed: {
    currentModel() {
      return this.models[this.currentModelIndex];
    },
    opacity() {
      const viewportHeight = window.innerHeight;
      const opacity =
        1 -
        (this.scrollY / viewportHeight -
          Math.floor(this.scrollY / viewportHeight)) *
          2.3;
      return opacity;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
};
</script>

<style lang="scss" scoped>
.banners {
  .bannner {
    height: 100vh;
    min-height: 100vh;
  }

  .home-modal {
    position: fixed;
    inset: 0;
    text-align: center;
    transition: all 300ms ease;

    h1 {
      margin-top: 15vh;
      font-size: 3rem;

      @media screen and (max-width: 400px) {
        margin-top: 10vh;
      }
    }

    .buttons {
      display: flex;
      margin-top: 45vh;
      gap: 2rem;
      justify-content: center;

      @media screen and (max-width: 400px) {
        margin-top: 35vh;
      }
    }
  }
}
</style>
