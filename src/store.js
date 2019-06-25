import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    nick: '',
  },

  mutations: {
    setNick(state,nick) {
      state.nick= nick;
    },
  },
});
