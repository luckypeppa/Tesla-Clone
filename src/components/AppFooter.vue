<template>
  <v-footer
    color="transparent lighten-1"
    padless
    :absolute="this.$vuetify.breakpoint.mdAndUp"
    v-show="$route.name !== 'order'"
  >
    <v-row justify="center" no-gutters>
      <v-col
        cols="12"
        md="auto"
        class="d-flex justify-center"
        v-for="link in links"
        :key="link"
      >
        <v-btn color="black" text rounded class="my-2 text-caption">
          {{ link }}
        </v-btn>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      links: [
        "Tesla © 2022",
        "Privacy & Legal",
        "Vehicle Recalls",
        "Contact",
        "Careers",
        "News",
        "Engage",
        "Locations",
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
