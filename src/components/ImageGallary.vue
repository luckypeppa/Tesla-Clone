<template>
  <div class="black pt-16 white--text">
    <v-container class="gallary">
      <v-row
        v-for="(item, index) in items"
        :key="`${item.title}-gallary`"
        class="ma-0"
        no-gutters
      >
        <v-col
          cols="12"
          md="6"
          :order-md="index % 2 === 1 ? 'last' : 'first'"
          :offset-md="index % 2 === 1 ? 1 : 0"
        >
          <v-lazy
            :options="{
              threshold: 0.5,
            }"
            transition="slide-up-transition"
          >
            <img :src="item.asset" v-if="item.type === 'image'" />
            <video
              :src="item.asset"
              v-else
              width="100%"
              autoplay
              muted
              loop
            ></video>
          </v-lazy>
        </v-col>
        <v-col
          cols="12"
          md="5"
          :offset-md="index % 2 === 1 ? 0 : 1"
          class="d-flex align-left flex-column justify-center"
        >
          <v-lazy
            :options="{
              threshold: 0.5,
            }"
            transition="slide-up-transition"
          >
            <div class="content py-10">
              <h3>{{ item.title }}</h3>
              <p>{{ item.content }}</p>
            </div>
          </v-lazy>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import asset1 from "@/assets/image-gallary/MS-Interior-1.jpg";
import asset2 from "@/assets/image-gallary/MS-Interior-2.jpg";
import asset3 from "@/assets/image-gallary/MS-Interior-3.mp4";
export default {
  data() {
    return {
      isIntersect: true,
      items: [
        {
          asset: asset1,
          type: "image",
          title: "Stay Connected",
          content:
            "Instantly connect with multi-device Bluetooth, or fast charge devices with wireless and 36-watt USB-C charging.",
        },
        {
          asset: asset2,
          type: "image",
          title: "Immersive Sound",
          content:
            "A 22-speaker, 960-watt audio system with Active Road Noise Reduction offers immersive listening and studio-grade sound quality.",
        },
        {
          asset: asset3,
          type: "video",
          title: "Room for Everything",
          content:
            "With front and rear trunks and fold-flat seats you can fit your bike without taking the wheel off—and your luggage too.",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.gallary {
  width: min(100%, 80rem);
}

img {
  width: 100%;
  object-fit: cover;
}
</style>
