<template>
  <v-container fluid>
    <v-row>
      <v-col cols="6" md="3" v-for="spec in specs" :key="`${spec.text}-spec`">
        <h2 class="white--text text-no-wrap text-center">{{ spec.text }}</h2>
        <p class="white--text text-no-wrap text-center">{{ spec.desc }}</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    specs: {
      type: Object,
      require: true,
    },
  },
};
</script>

<style lang="scss" scoped></style>
