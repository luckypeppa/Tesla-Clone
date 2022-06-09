<template>
  <v-container fluid>
    <v-row>
      <v-col cols="6" :md="md" v-for="spec in specs" :key="`${spec.desc}-spec`">
        <single-spec
          :value="spec.value"
          :unit="spec.unit"
          :desc="spec.desc"
          :color="color"
        ></single-spec>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import SingleSpec from "@/components/SingleSpec.vue";
export default {
  props: {
    specs: {
      type: Array,
      require: true,
    },
    color: {
      type: String,
      default: "white",
    },
  },
  computed: {
    md() {
      return Math.floor(12 / this.specs.length);
    },
  },
  components: {
    SingleSpec,
  },
};
</script>

<style lang="scss" scoped></style>
