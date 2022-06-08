<template>
  <v-container fluid class="d-flex flex-column align-center">
    <h1 class="text-center">ModelS</h1>
    <p class="text-center">Est. Delivery: Nov 2022 - Feb 2023</p>
    <!-- <v-btn-toggle
      v-model="toggleSaving"
      class="toggle-saving d-flex grey lighten-3 rounded-xl pa-1"
    >
      <v-btn small text class="rounded-xl" :outlined="false">
        Purchase Price
      </v-btn>
      <v-btn small text class="rounded-xl"> Potential Saving </v-btn>
    </v-btn-toggle> -->
    <div
      class="toggle-saving d-flex grey lighten-3 rounded-xl pa-1"
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
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      showSaving: false,
    };
  },
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
}

.btn-active {
  background-color: #fff;
}
</style>
