<template>
  <v-container fluid class="order-container pt-16 d-flex">
    <app-slider />
    <v-container fluid class="order-options flex-shrink-0">
      <div
        class="message pt-5 d-flex align-start grey lighten-3 px-5 rounded-lg mx-auto mb-16"
      >
        <v-icon color="blue" class="mr-6">mdi-alert-circle</v-icon>
        <p>$750 Clean Fuel Reward is now available for California residents.</p>
      </div>
      <calc-price></calc-price>
    </v-container>
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

  .order-options {
    width: min(100%, 30rem);

    .message {
      width: 100%;
    }
  }
}
</style>
