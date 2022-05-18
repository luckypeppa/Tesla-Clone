<template>
  <v-app>
    <nav-bar></nav-bar>
    <router-view />
  </v-app>
</template>

<script>
import NavBar from "./components/NavBar.vue";
export default {
  components: { NavBar },
  name: "App",

  data: () => ({
    //
  }),
};
</script>
