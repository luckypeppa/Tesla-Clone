<template>
  <v-contaienr fluid class="order-container pt-16 d-flex">
    <app-slider />
    <v-container fluid class="order-options flex-shrink-0 overflow-y-auto">
      <div
        class="message pt-5 d-flex align-start grey lighten-3 px-5 rounded-lg mx-auto mb-16"
      >
        <v-icon color="blue" class="mr-6">mdi-alert-circle</v-icon>
        <p>$750 Clean Fuel Reward is now available for California residents.</p>
      </div>

      <calc-price></calc-price>

      <BaseSelect
        title="Paint"
        v-model="selectedColorIndex"
        :numOfOptions="numOfOptions"
        class="paint-select"
      >
        <template v-slot:options="{ onSelect }">
          <img
            @click="onSelect(index)"
            v-for="(paint, index) in paints"
            :key="`${index}-paint`"
            :src="paint.img"
          />
        </template>
        <template v-slot:descs="{ value }">
          <p
            v-show="value === index"
            v-for="(paint, index) in paints"
            :key="paint.name"
            class="paint-descs"
          >
            <span class="paint-desc">{{ paint.name }}</span
            ><span class="paint-price">{{ " $" + paint.price }}</span>
          </p>
        </template>
      </BaseSelect>
    </v-container>
  </v-contaienr>
</template>

<script>
import AppSlider from "@/components/AppSlider.vue";
import CalcPrice from "@/components/CalcPrice.vue";
import BaseSelect from "@/components/BaseSelect.vue";

import paintBlack from "@/assets/paint/Paint_Black.png";
import paintBlue from "@/assets/paint/Paint_Blue.png";
import paintRed from "@/assets/paint/Paint_Red.png";
import paintMidnightSilver from "@/assets/paint/Paint_MidnightSilver.png";
import paintWhite from "@/assets/paint/Paint_White.png";
export default {
  data() {
    return {
      numOfOptions: 3,
      selectedColorIndex: 0,
      paints: [
        { img: paintBlack, name: "Solid Black", price: 1500 },
        { img: paintBlue, name: "Deep Blue Metallic", price: 1500 },
        { img: paintRed, name: "Red Multi-Coat", price: 2500 },
        {
          img: paintMidnightSilver,
          name: "Midnight Silver Metallic",
          price: 1500,
        },
        { img: paintWhite, name: "Pearl White Multi-Coat", price: "Included" },
      ],
    };
  },
  components: { AppSlider, CalcPrice, BaseSelect },
};
</script>

<style lang="scss" scoped>
.order-container {
  height: 100vh;
  padding-top: 10vh;
  overflow: hidden;

  .order-options {
    width: min(100%, 30rem);

    &::-webkit-scrollbar {
      display: none;
    }

    .paint-select {
      margin: 10rem 0;
      .paint-descs {
        text-align: center;
        margin-top: 1rem;
        .paint-desc {
          font-size: 1.3rem;
          color: black;
        }

        .paint-price {
          font-size: 1rem;
          color: grey;
        }
      }
    }

    .message {
      width: 100%;
    }
  }
}
</style>
