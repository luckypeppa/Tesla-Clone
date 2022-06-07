import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import { createSimpleTransition } from "vuetify/lib/components/transitions/createTransition";

const slideUpTransition = createSimpleTransition("slide-up-transition");
const fadeSlowTransition = createSimpleTransition("fade-slow-transition");

Vue.component("slide-up-transition", slideUpTransition);
Vue.component("fade-slow-transition", fadeSlowTransition);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
