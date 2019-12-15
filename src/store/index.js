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
    inProgress: [{ id: 4, text: "Clean room" }],
    done: [
      { id: 5, text: "Book tickets" },
      { id: 6, text: "Do homework" }
    ]
  },
  mutations: {
    updateTodo(state, array) {
      state.todos = array;
    },
    updateInProgress(state, array) {
      state.inProgress = array;
    },
    updateDone(state, array) {
      state.done = array;
    }
  },
  actions: {
    updateTodo({ commit }, array) {
      commit("updateTodo", array);
    },
    updateInProgress({ commit }, array) {
      commit("updateInProgress", array);
    },
    updateDone({ commit }, array) {
      commit("updateDone", array);
    }
  },
  modules: {}
});
