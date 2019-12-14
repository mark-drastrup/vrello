<template>
  <div class="board">
    <h2>Todo</h2>
    <draggable v-model="todos" group="tasks">
      <div v-for="todo in todos" :key="todo.id">{{todo.text}}</div>
    </draggable>

    <h2>In Progress</h2>
    <draggable v-model="inProgress" group="tasks">
      <div v-for="todo in inProgress" :key="todo.id">{{todo.text}}</div>
    </draggable>
  </div>
</template>

<script>
import draggable from "vuedraggable";
export default {
  components: {
    draggable
  },
  computed: {
    todos: {
      get() {
        return this.$store.state.todos;
      },
      set(value) {
        this.$store.dispatch("updateTodo", value);
      }
    },
    inProgress: {
      get() {
        return this.$store.state.inProgress;
      },
      set(value) {
        this.$store.dispatch("updateInProgress", value);
      }
    }
  }
};
</script>
