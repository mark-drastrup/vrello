<template>
  <header>
    <nav id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/board">Board</router-link>
    </nav>
  </header>
</template>

<style scoped lang="scss">
header {
  background-color: #49a25b;
}

#nav {
  padding: 15px;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 100px 100px;
  justify-content: end;
  align-items: center;

  a {
    font-weight: bold;
    color: #fff;
    text-decoration: none;

    &.router-link-exact-active {
      color: #2c3e50;
    }
  }
}
</style>
