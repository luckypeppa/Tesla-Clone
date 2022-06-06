<template>
  <v-footer color="transparent lighten-1" padless absolute>
    <v-row justify="center" no-gutters>
      <v-btn
        v-for="link in links"
        :key="link"
        color="black"
        text
        rounded
        class="my-2 text-caption"
      >
        {{ link }}
      </v-btn>
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
