<template>
  <v-container fluid class="order-container pt-16">
    <v-row>
      <v-col cols="9">
        <app-slider />
      </v-col>
      <v-col cols="3" class="px-12">
        <div
          class="message pt-5 d-flex align-start grey lighten-3 px-5 rounded-lg mx-auto mb-16"
        >
          <v-icon color="blue" class="mr-6">mdi-alert-circle</v-icon>
          <p>
            $750 Clean Fuel Reward is now available for California residents.
          </p>
        </div>
        <calc-price></calc-price>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
  </v-container>
</template>

<script>
import AppSlider from "@/components/AppSlider.vue";
import CalcPrice from "@/components/CalcPrice.vue";
export default {
  components: { AppSlider, CalcPrice },
};
</script>

<style lang="scss" scoped>
.order-container {
  height: 100vh;
  overflow: hidden;

  .message {
    width: 100%;
  }
}
</style>
