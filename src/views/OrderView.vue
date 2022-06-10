<template>
  <v-container fluid class="order-container pt-16 d-flex">
    <app-slider />
    <v-container
      fluid
      class="order-options flex-shrink-0 overflow-y-auto"
      ref="orderOptions"
    >
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
        v-intersect="{
          handler: (entries) => onIntersect(entries, 0),
          options: {
            threshold: 1,
          },
        }"
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

      <BaseSelect
        title="Wheel"
        v-model="selectedWheelIndex"
        :numOfOptions="numOfOptions"
        class="paint-select"
        v-intersect="{
          handler: (entries) => onIntersect(entries, 1),
          options: {
            threshold: 1,
          },
        }"
      >
        <template v-slot:options="{ onSelect }">
          <img
            @click="onSelect(index)"
            v-for="(wheel, index) in wheels"
            :key="`${index}-wheel`"
            :src="wheel.img"
          />
        </template>
        <template v-slot:descs="{ value }">
          <p
            v-show="value === index"
            v-for="(wheel, index) in wheels"
            :key="wheel.name"
            class="paint-descs"
          >
            <span class="paint-desc">{{ wheel.name }}</span
            ><span class="paint-price">{{ " $" + wheel.price }}</span>
          </p>
        </template>
      </BaseSelect>

      <BaseSelect
        title="Interior"
        v-model="selectedInteriorIndex"
        :numOfOptions="numOfOptions"
        class="paint-select"
        v-intersect="{
          handler: (entries) => onIntersect(entries, 2),
          options: {
            threshold: 1,
          },
        }"
      >
        <template v-slot:options="{ onSelect }">
          <img
            @click="onSelect(index)"
            v-for="(interior, index) in interiors"
            :key="`${index}-interior`"
            :src="interior.img"
          />
        </template>
        <template v-slot:descs="{ value }">
          <p
            v-show="value === index"
            v-for="(interior, index) in interiors"
            :key="interior.name"
            class="paint-descs"
          >
            <span class="paint-desc">{{ interior.name }}</span
            ><span class="paint-price">{{ " $" + interior.price }}</span>
          </p>
        </template>
      </BaseSelect>
    </v-container>
  </v-container>
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

import arachnidWheel from "@/assets/wheel/21Arachnid.png";
import tempestWheel from "@/assets/wheel/ui_swat_whl_tempest.png";

import interiorBlack from "@/assets/interior/Interior_Black.png";
import interiorCream from "@/assets/interior/Interior_Cream.png";
import interiorWhite from "@/assets/interior/Interior_White.png";
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
      selectedWheelIndex: 0,
      wheels: [
        { img: tempestWheel, name: '19" Tempest Wheels', price: "Included" },
        {
          img: arachnidWheel,
          name: '21" Arachnid Wheels',
          price: 4500,
        },
      ],
      selectedInteriorIndex: 0,
      interiors: [
        { img: interiorBlack, name: "All Black", price: "Included" },
        { img: interiorCream, name: "All Cream", price: "2000" },
        { img: interiorWhite, name: "All White", price: "2000" },
      ],
    };
  },
  components: { AppSlider, CalcPrice, BaseSelect },
  methods: {
    onIntersect(entries, index) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.$store.commit("SET_APPSLIDERACTIVEINDEX", index);
        }
      });
    },
  },
  mounted() {
    window.addEventListener("wheel", (e) => {
      this.$refs.orderOptions.scroll(
        0,
        this.$refs.orderOptions.scrollTop + e.deltaY
      );
    });
  },
  beforeDestroy() {
    window.removeEventListener("wheel");
  },
};
</script>

<style lang="scss" scoped>
.order-container {
  height: 100vh;
  padding-top: 10vh;
  overflow: hidden;
  padding: 0;
  .order-options {
    width: min(100%, 30rem);

    &::-webkit-scrollbar {
      display: none;
    }

    .paint-select {
      margin: 20rem 0;
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
