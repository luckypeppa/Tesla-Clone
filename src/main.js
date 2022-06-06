import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import { createSimpleTransition } from "vuetify/lib/components/transitions/createTransition";

const slideUpTransition = createSimpleTransition("slide-up-transition");

Vue.component("slide-up-transition", slideUpTransition);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
