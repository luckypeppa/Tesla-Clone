<template>
  <div>
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
  </div>
</template>

<script>
import MODEL3 from "../assets/Model-3.jpg";
import MODELX from "../assets/Model-X.jpg";
import MODELY from "../assets/Model-Y.jpg";
import MODELS from "../assets/Model-S.jpg";
import SOLARPANELS from "../assets/Solar-Panels.jpg";
import SOLARROOF from "../assets/Solor-Roof.jpg";
export default {
  data() {
    return {
      models: [
        {
          name: "Model 3",
          image: MODEL3,
        },
        {
          name: "Model Y",
          image: MODELY,
        },
        {
          name: "Model S",
          image: MODELS,
        },

        {
          name: "Model X",
          image: MODELX,
        },

        {
          name: "Solar Panel",
          image: SOLARPANELS,
        },
        {
          name: "Solar Roof",
          image: SOLARROOF,
        },
      ],
    };
  },
  methods: {
    onIntersect(entries) {
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
.bannner {
  height: 100vh;
  min-height: 100vh;
}
</style>
