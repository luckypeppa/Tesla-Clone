<template>
  <v-app>
    <nav-bar></nav-bar>
    <router-view />
    <app-footer />
  </v-app>
</template>

<script>
import AppFooter from "./components/AppFooter.vue";
import NavBar from "./components/NavBar.vue";
export default {
  components: { NavBar, AppFooter },
  name: "App",

  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
.slide-up-transition {
  &-enter {
    transform: translateY(150px);
    opacity: 0;
  }

  &-enter-active {
    transition: all 1s ease-in;
  }
}

.fade-slow-transition {
  &-enter,
  &-leave-to {
    opacity: 0;
  }

  &-enter-active,
  &-leave-active {
    transition: all 1s ease-in;
  }
}
</style>
