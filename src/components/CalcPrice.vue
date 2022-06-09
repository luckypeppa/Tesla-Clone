<template>
  <v-container fluid>
    <h1 class="text-center">ModelS</h1>
    <p class="text-center">Est. Delivery: Nov 2022 - Feb 2023</p>
    <div
      class="toggle-saving d-flex grey lighten-3 rounded-xl pa-1 mx-auto"
      active-class="btn-active"
    >
      <v-btn
        small
        text
        :class="{
          'rounded-xl': 'rounded-xl',
          'btn-active': showSaving === false,
        }"
        @click="showSaving = false"
      >
        Purchase Price
      </v-btn>
      <v-btn
        small
        text
        :class="{
          'rounded-xl': 'rounded-xl',
          'btn-active': showSaving === true,
        }"
        @click="showSaving = true"
      >
        Potential Saving
      </v-btn>
    </div>

    <car-spec :specs="models[priceIndex].spec" color="black"></car-spec>

    <h4 class="text-left d-block">Dual Motor All-Wheel Drive</h4>
    <v-btn
      text
      class="d-flex justify-space-between rounded-xl mt-2 py-6 price-option"
      width="100%"
      :class="{ active: priceIndex === 0 }"
      @click="togglePrice(0)"
    >
      <span>{{ models[0].name }}</span>
      <span>{{
        showSaving
          ? "$" + models[0].price.withSaving.value
          : "$" + models[0].price.origin.value
      }}</span>
    </v-btn>
    <h4 class="text-left d-block mt-4">Tri Motor All-Wheel Drive</h4>
    <v-btn
      text
      class="d-flex justify-space-between rounded-xl mt-2 py-6 price-option"
      width="100%"
      :class="{ active: priceIndex === 1 }"
      @click="togglePrice(1)"
    >
      <span>{{ models[1].name }}</span>
      <span>{{
        showSaving
          ? "$" + models[1].price.withSaving.value
          : "$" + models[1].price.origin.value
      }}</span>
    </v-btn>
  </v-container>
</template>

<script>
import CarSpec from "./CarSpec.vue";
export default {
  data() {
    return {
      showSaving: false,
      priceIndex: 0,
      models: [
        {
          name: "Model S",
          price: {
            origin: {
              value: 99990,
            },
            withSaving: {
              value: 90840,
            },
          },
          spec: [
            {
              value: 375,
              unit: "mi",
              desc: "Range (EPA est.)",
            },
            {
              value: 3.1,
              unit: "s",
              desc: "0-60 mph*",
            },
            { value: 155, unit: "mph", desc: "Top Speed†" },
          ],
        },
        {
          name: "Model S Plaid",
          price: {
            origin: {
              value: 135990,
            },
            withSaving: {
              value: 126840,
            },
          },
          spec: [
            {
              value: 348,
              unit: "mi",
              desc: "Range (EPA est.)",
            },
            {
              value: 1.99,
              unit: "s",
              desc: "0-60 mph*",
            },
            { value: 200, unit: "mph", desc: "Top Speed†" },
          ],
        },
      ],
    };
  },
  methods: {
    togglePrice(index) {
      this.priceIndex = index;
    },
  },
  components: { CarSpec },
  //   methods: {
  //     toggleSaving(boolean) {},
  //   },
};
</script>

<style lang="scss" scoped>
// .prices {
//   width: 80%;
// }

.toggle-saving {
  max-width: max-content;
}

.btn-active {
  background-color: #fff;
}

.price-option {
  border: 1px solid grey;
}

.price-option.active {
  border: 3px solid rgb(80, 80, 250);
}
</style>
