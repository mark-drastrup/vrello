<template>
  <div class="board">
    <div class="board__column">
      <h2>Todo</h2>
      <draggable v-model="todos" group="tasks" class="card__wrapper">
        <div v-for="todo in todos" :key="todo.id" class="card">
          <p>{{todo.text}}</p>
        </div>
      </draggable>
    </div>

    <div class="board__column">
      <h2>In Progress</h2>
      <draggable v-model="inProgress" group="tasks" class="card__wrapper">
        <div v-for="todo in inProgress" :key="todo.id" class="card">
          <p>{{todo.text}}</p>
        </div>
      </draggable>
    </div>

    <div class="board__column">
      <h2>Done</h2>
      <draggable v-model="done" group="tasks" class="card__wrapper">
        <div v-for="todo in done" :key="todo.id" class="card">
          <p class="card__title">{{todo.text}}</p>
        </div>
      </draggable>
    </div>
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
    },
    done: {
      get() {
        return this.$store.state.done;
      },
      set(value) {
        this.$store.dispatch("updateDone", value);
      }
    }
  }
};
</script>

<style scoped lang="scss">
.board {
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 25px;
  align-content: stretch;
  padding: 25px;
  background-color: #57bf6b;
}

.board__column {
  border-radius: 3px;
  background-color: #ebecf0;

  h2 {
    text-align: left;
    margin-left: 25px;
  }
}

.card__wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 90%;
}

.card {
  background-color: #fff;
  width: 90%;
  margin-bottom: 15px;
  box-shadow: 0 1px 0 rgba(9, 30, 66, 0.25);
}

// .sortable-chosen {
//   visibility: hidden;
// }
</style>