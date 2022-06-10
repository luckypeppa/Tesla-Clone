import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    appSliderActiveIndex: 3,
  },
  getters: {},
  mutations: {
    SET_APPSLIDERACTIVEINDEX(state, index) {
      state.appSliderActiveIndex = index;
    },
  },
  actions: {},
  modules: {},
});
