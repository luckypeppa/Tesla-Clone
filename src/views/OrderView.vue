<template>
  <v-main>
    <v-container fluid>
      <v-row>
        <v-col cols="8">
          <app-slider />
        </v-col>
        <v-spacer></v-spacer>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import AppSlider from "@/components/AppSlider.vue";
export default {
  components: { AppSlider },
};
</script>

<style lang="scss" scoped></style>
