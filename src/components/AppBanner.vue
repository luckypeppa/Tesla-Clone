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
              threshold: 0.2,
            },
          }"
          :id="`${index}-model`"
        ></v-img>
      </v-col>
    </v-row>
    <div class="home-modal">
      <h1>{{ models[0].name }}</h1>
      <p>{{ models[0].text }}</p>
      <div class="buttons">
        <v-btn color="#424242" dark width="300" rounded>CUSTOM ORDER</v-btn>
        <v-btn color="#E0E0E0" width="300" rounded>EXISTING INVENTORY</v-btn>
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
      onIntersect: null,
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
    this.onIntersect = _.throttle(this.intersect, 2000, { trailing: true });
  },
  methods: {
    intersect(entries) {
      // console.log(entries);
      entries.forEach((entry) => {
        const id = entry.target.id;
        if (entry.isIntersecting) {
          this.$router.push({ path: "/", hash: `#${id}` });
        }
      });
    },
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
    position: absolute;
    inset: 0;
    text-align: center;

    h1 {
      margin-top: 15vh;
      font-size: 3rem;
    }

    .buttons {
      display: flex;
      gap: 2rem;
      justify-content: center;
      margin-top: 50vh;
    }
  }
}
</style>
