<template>
  <v-menu top :offset-y="true" rounded="xl">
    <template v-slot:activator="{ on, attrs }">
      <v-btn fab fixed right bottom v-bind="attrs" v-on="on"
        ><v-icon dark center> mdi-message-text-outline </v-icon>
      </v-btn>
    </template>

    <v-card color="white" rounded="xl" min-height="60vh">
      <v-card-title class="text-center" tag="h1">
        Question Center
      </v-card-title>
      <v-card-title> What can we help you with? </v-card-title>
      <v-card-text>
        Tell us more and our customer support team will help you find the
        answers.
      </v-card-text>
      <v-card-actions class="d-flex flex-column align-center">
        <v-btn
          v-for="option in options"
          :key="option"
          text
          outlined
          rounded
          min-width="80%"
          class="mb-5"
          >{{ option }}</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-menu>
</template>

<script>
export default {
  data() {
    return {
      options: [
        "Buying Tesla Product",
        "Help with Previous Purchases",
        "Questions About Delivery",
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.float {
  width: 5rem;
  height: 5rem;
}
</style>
