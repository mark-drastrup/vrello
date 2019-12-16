<template>
  <div class="home">
    <h1>Welcome to Vrello</h1>
    <p>A Trello clone that allows you to manage your tasks</p>
  </div>
</template>

<script>
export default {
  name: "home"
};
</script>

<style scoped lang="scss">
.home {
  background-color: #57bf6b;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  h1,
  p {
    color: #fff;
  }
}
</style>
