import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [
      { id: 1, text: "Walk the dog" },
      { id: 2, text: "Do the dishes" },
      { id: 3, text: "Study coding" }
    ],
    inProgress: [{ id: 4, text: "Clean room" }]
  },
  mutations: {
    updateTodo(state, array) {
      state.todos = array;
      console.log(state.todos);
    },
    updateInProgress(state, array) {
      state.inProgress = array;
    }
  },
  actions: {
    updateTodo({ commit }, array) {
      commit("updateTodo", array);
    },
    updateInProgress({ commit }, array) {
      commit("updateInProgress", array);
    }
  },
  modules: {}
});
